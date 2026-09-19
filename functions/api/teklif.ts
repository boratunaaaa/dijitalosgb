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
const VARSAYILAN_ALICI = "mehmetkadirugur@gmail.com";

interface Env {
  BREVO_API_KEY: string;
  TEKLIF_ALICI?: string;
  TEKLIF_GONDEREN?: string;
}

const ALANLAR = ["firma", "faaliyet", "calisan", "konum", "iletisim"] as const;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const form = await request.formData();

  // Doğrulama burada, tarayıcıda değil: HTML'deki `required` bir kolaylıktır,
  // güvence değil.
  const veri: Record<string, string> = {};
  for (const alan of ALANLAR) {
    const deger = String(form.get(alan) ?? "").trim();
    if (!deger) {
      return new Response(`Eksik alan: ${alan}`, { status: 400 });
    }
    veri[alan] = deger.slice(0, 500);
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

  const govde =
    ALANLAR.map((a) => `${a}: ${veri[a]}`).join("\n") +
    `\nticari ileti izni: ${ticariIzin}`;

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
