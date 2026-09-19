/**
 * Teklif formunun arka ucu — Cloudflare Pages Function.
 *
 * Neden sunucu değil fonksiyon: sitenin tamamı statik. Tek dinamik ihtiyaç
 * formu iletmek; bunun için ayakta tutulacak bir sunucu, güncellenecek bir
 * işletim sistemi ve izlenecek bir servis daha olmasın istiyoruz.
 *
 * Neden Brevo: e-posta altyapısı zaten Brevo'da ve teslimatı doğrulanmış.
 *
 * GEREKLİ ORTAM DEĞİŞKENLERİ (Cloudflare Pages → Settings → Environment
 * variables; API anahtarı "Secret" olarak eklenir, depoya YAZILMAZ):
 *   BREVO_API_KEY   — Brevo hesabından alınan API anahtarı
 *   TEKLIF_ALICI    — taleplerin düşeceği e-posta adresi
 *   TEKLIF_GONDEREN — Brevo'da doğrulanmış gönderici adresi
 */
interface Env {
  BREVO_API_KEY: string;
  TEKLIF_ALICI: string;
  TEKLIF_GONDEREN: string;
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

  if (!env.BREVO_API_KEY || !env.TEKLIF_ALICI || !env.TEKLIF_GONDEREN) {
    // Yapılandırma eksikse sessizce başarılı dönmek, talebi sessizce
    // kaybetmek demektir. Açık hata veriyoruz.
    return new Response("Form arka ucu yapılandırılmamış.", { status: 500 });
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
      sender: { email: env.TEKLIF_GONDEREN, name: "Dijital OSGB" },
      to: [{ email: env.TEKLIF_ALICI }],
      replyTo: { email: env.TEKLIF_GONDEREN },
      subject: `Yeni teklif talebi — ${veri.firma}`,
      textContent: govde,
    }),
  });

  if (!yanit.ok) {
    return new Response("Talep iletilemedi, lütfen tekrar deneyin.", { status: 502 });
  }
  return Response.redirect(new URL("/tesekkurler/", request.url).href, 303);
};
