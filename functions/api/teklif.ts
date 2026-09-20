/**
 * Teklif formunun arka ucu — Cloudflare Pages Function.
 *
 * Neden sunucu değil fonksiyon: sitenin tamamı statik. Tek dinamik ihtiyaç
 * formu iletmek; bunun için ayakta tutulacak bir sunucu, güncellenecek bir
 * işletim sistemi ve izlenecek bir servis daha olmasın istiyoruz.
 *
 * Neden Brevo: e-posta altyapısı zaten Brevo'da ve teslimatı doğrulanmış.
 *
 * TEK GEREKLİ ORTAM DEĞİŞKENİ: BREVO_API_KEY — Cloudflare Pages → Settings →
 * Variables and secrets'ta "Secret" olarak durur, depoya ASLA yazılmaz.
 *
 * Gönderici ve alıcı adresleri buraya sabit yazıldı. İkisi de gizli bilgi
 * değil (biri zaten sitenin künyesinde, diğeri kurumsal kutu) ve ortam
 * değişkeni olarak tutulmaları pratikte zarar verdi: wrangler.toml'a `[vars]`
 * eklenince Cloudflare bu projenin değişken yönetimini tamamen o dosyaya
 * devretti ve Dashboard'daki Secret bağlanmaz oldu — form 500 döndü. Tek
 * değişken kalınca o çakışma ortadan kalkıyor.
 * Gerekirse yine de ortam değişkeniyle ezilebilirler.
 */
const VARSAYILAN_GONDEREN = "teklif@dijitalosgb.com";

/**
 * ALICI ARTIK KURUMSAL ADRES.
 *
 * Kişisel Gmail adresi varsayılan alıcıydı. İki sorunu vardı: gelen talep
 * kurumsal bir kutuda değil bir şahsın kişisel kutusunda birikiyordu ve KVKK
 * aydınlatma metninde anlatılan veri akışıyla örtüşmüyordu. Varsayılan
 * kurumsal adrese çekildi; kutu çalışmıyorsa TEKLIF_ALICI ortam değişkeniyle
 * ezilebilir. Sessizce bir kişisel adrese düşme davranışı kaldırıldı.
 */
const VARSAYILAN_ALICI = "info@dijitalosgb.com";

/** Aynı adresten kısa aralıkla gelen tekrar gönderimleri eler. */
const SON_GONDERIMLER = new Map<string, number>();
const TEKRAR_ARALIGI_MS = 30_000;

/** Bir metinde e-posta başlığına kaçış sokulmasını engeller. */
const satirTemizle = (d: string) => d.replace(/[\r\n]+/g, " ").trim();

interface Env {
  BREVO_API_KEY: string;
  TEKLIF_ALICI?: string;
  TEKLIF_GONDEREN?: string;
}

const ALANLAR = ["firma", "faaliyet", "calisan", "konum", "iletisim"] as const;

// İsteğe bağlı alanlar: boş gelmeleri formu geçersiz kılmaz ama doluysa
// e-postaya girer. "ilgi" hizmet ve paket sayfalarından otomatik doluyor;
// talebin hangi sayfadan geldiğini göstermesi teklifi hızlandırıyor.
const ISTEGE_BAGLI = ["ilgi"] as const;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Kaynak kontrolü: form yalnız kendi sitemizden gönderilebilsin. Tarayıcı
  // form gönderiminde Origin başlığını yollar; yollamayan istemciler için
  // Referer'a düşüyoruz. İkisi de yoksa istek reddedilmiyor (eski tarayıcı
  // ve bazı gizlilik eklentileri bunları siler) ama farklı bir alan adından
  // geldiği KESİN olan istek reddediliyor.
  const siteKokU = new URL(request.url).origin;
  const kaynak = request.headers.get("origin") || request.headers.get("referer");
  if (kaynak) {
    let kaynakOrigin: string | null = null;
    try {
      kaynakOrigin = new URL(kaynak).origin;
    } catch {
      kaynakOrigin = null;
    }
    if (kaynakOrigin && kaynakOrigin !== siteKokU) {
      return new Response("Geçersiz istek kaynağı.", { status: 403 });
    }
  }

  const tur = request.headers.get("content-type") || "";
  if (!tur.includes("form")) {
    return new Response("Beklenmeyen içerik türü.", { status: 415 });
  }

  const form = await request.formData();

  // Bal küpü: gerçek ziyaretçi bu alanı görmez ve dolduramaz. Dolu geldiyse
  // gönderen bir bot demektir. Bota hata vermiyoruz — başarılı gibi yanıt
  // verip talebi sessizce düşürüyoruz; hata dönmek botun deneme yapmasını
  // kolaylaştırır.
  if (String(form.get("website") ?? "").trim()) {
    return Response.redirect(new URL("/tesekkurler/", request.url).href, 303);
  }

  // Formun açılma zamanı: insan bir formu birkaç saniyeden kısa sürede
  // dolduramaz. Alan yoksa veya okunamıyorsa kontrol atlanır.
  const acilis = Number(form.get("acilis") ?? 0);
  if (acilis > 0 && Date.now() - acilis < 3000) {
    return Response.redirect(new URL("/tesekkurler/", request.url).href, 303);
  }

  // Doğrulama burada, tarayıcıda değil: HTML'deki `required` bir kolaylıktır,
  // güvence değil.
  const veri: Record<string, string> = {};
  for (const alan of ALANLAR) {
    const deger = String(form.get(alan) ?? "").trim();
    if (!deger) {
      return new Response(`Eksik alan: ${alan}`, { status: 400 });
    }
    veri[alan] = satirTemizle(deger).slice(0, 500);
  }

  // Aynı iletişim bilgisinden 30 saniye içinde ikinci gönderim: ya çift
  // tıklama ya da basit bir kötüye kullanım. Sessizce başarılı dönüyoruz.
  const anahtar = `${veri.iletisim}|${veri.firma}`.toLocaleLowerCase("tr-TR");
  const simdi = Date.now();
  const oncekiZaman = SON_GONDERIMLER.get(anahtar);
  if (oncekiZaman && simdi - oncekiZaman < TEKRAR_ARALIGI_MS) {
    return Response.redirect(new URL("/tesekkurler/", request.url).href, 303);
  }
  SON_GONDERIMLER.set(anahtar, simdi);
  for (const [k, t] of SON_GONDERIMLER) {
    if (simdi - t > TEKRAR_ARALIGI_MS) SON_GONDERIMLER.delete(k);
  }

  const gonderen = env.TEKLIF_GONDEREN || VARSAYILAN_GONDEREN;
  const alici = env.TEKLIF_ALICI || VARSAYILAN_ALICI;

  if (!env.BREVO_API_KEY) {
    // Yapılandırma eksikse sessizce başarılı dönmek, talebi sessizce
    // kaybetmek demektir. Açık hata veriyoruz. Anahtarın KENDİSİ hiçbir
    // koşulda yanıta yazılmaz; yalnız yokluğu bildirilir.
    return new Response("Form arka ucu yapılandırılmamış: BREVO_API_KEY tanımlı değil.", { status: 500 });
  }

    // Ticari ileti onayı ZORUNLU ALAN DEĞİL: işaretlenmemiş olması formu
  // geçersiz kılmamalı. KVKK'da teklif talebi ile ticari ileti rızası ayrı
  // şeylerdir; ikisini tek kutuya bağlamak rızayı sakatlar.
  const ticariIzin = String(form.get("ticari_izin") ?? "") === "evet" ? "EVET" : "hayır";

  for (const alan of ISTEGE_BAGLI) {
    const deger = String(form.get(alan) ?? "").trim();
    if (deger) veri[alan] = satirTemizle(deger).slice(0, 500);
  }

  const govde =
    [...ALANLAR, ...ISTEGE_BAGLI]
      .filter((a) => veri[a])
      .map((a) => `${a}: ${veri[a]}`)
      .join("\n") + `\nticari ileti izni: ${ticariIzin}`;

  const yanit = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: gonderen, name: "Dijital OSGB" },
      to: [{ email: alici }],
      replyTo: { email: gonderen },
      subject: `Yeni teklif talebi — ${veri.firma}`,
      textContent: govde,
    }),
  });

  if (!yanit.ok) {
    // Brevo'nun reddetme sebebi (doğrulanmamış gönderici, geçersiz anahtar…)
    // yalnız sunucu günlüğüne düşer; ziyaretçiye ham API hatası gösterilmez.
    console.error("brevo_reddetti", yanit.status, await yanit.text());
    return new Response("Talep iletilemedi, lütfen tekrar deneyin.", { status: 502 });
  }
  return Response.redirect(new URL("/tesekkurler/", request.url).href, 303);
};
