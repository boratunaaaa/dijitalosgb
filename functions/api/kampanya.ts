/**
 * Kampanya formunun arka ucu — Cloudflare Pages Function.
 *
 * Basitleştirilmiş teklif formu altyapısıdır. 
 * Sadece telefon numarası alır ve e-posta ile bildirir.
 */
const VARSAYILAN_GONDEREN = "teklif@dijitalosgb.com";
const VARSAYILAN_ALICI = "info@dijitalosgb.com";

const SON_GONDERIMLER = new Map<string, number>();
const TEKRAR_ARALIGI_MS = 30_000;

const satirTemizle = (d: string) => d.replace(/[\r\n]+/g, " ").trim();

interface Env {
  BREVO_API_KEY: string;
  TEKLIF_ALICI?: string;
  TEKLIF_GONDEREN?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
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
    return new Response(JSON.stringify({ success: false, error: "Beklenmeyen içerik türü." }), { status: 415, headers: { "content-type": "application/json" } });
  }

  const form = await request.formData();

  // Bal küpü
  if (String(form.get("website") ?? "").trim()) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json" } });
  }

  const telefon = String(form.get("telefon") ?? "").trim();
  const kampanya = String(form.get("kampanya") ?? "").trim();

  if (!telefon) {
    return new Response(JSON.stringify({ success: false, error: "Eksik alan: telefon" }), { status: 400, headers: { "content-type": "application/json" } });
  }

  const temizTelefon = satirTemizle(telefon).slice(0, 50);
  const temizKampanya = satirTemizle(kampanya).slice(0, 100);

  // Spam engelleme
  const anahtar = `${temizTelefon}`;
  const simdi = Date.now();
  const oncekiZaman = SON_GONDERIMLER.get(anahtar);
  if (oncekiZaman && simdi - oncekiZaman < TEKRAR_ARALIGI_MS) {
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json" } });
  }
  
  SON_GONDERIMLER.set(anahtar, simdi);
  for (const [k, t] of SON_GONDERIMLER) {
    if (simdi - t > TEKRAR_ARALIGI_MS) SON_GONDERIMLER.delete(k);
  }

  const gonderen = env.TEKLIF_GONDEREN || VARSAYILAN_GONDEREN;
  const alici = env.TEKLIF_ALICI || VARSAYILAN_ALICI;

  if (!env.BREVO_API_KEY) {
    return new Response(JSON.stringify({ success: false, error: "Yapılandırma hatası." }), { status: 500, headers: { "content-type": "application/json" } });
  }

  const govde = `Yeni Kampanya Talebi:
Telefon: ${temizTelefon}
Kampanya: ${temizKampanya}`;

  const yanit = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: gonderen, name: "Dijital OSGB Kampanya" },
      to: [{ email: alici }],
      replyTo: { email: gonderen },
      subject: `Kampanya Başvurusu — ${temizTelefon}`,
      textContent: govde,
    }),
  });

  if (!yanit.ok) {
    console.error("brevo_kampanya_reddetti", yanit.status, await yanit.text());
    return new Response(JSON.stringify({ success: false, error: "Talep iletilemedi." }), { status: 502, headers: { "content-type": "application/json" } });
  }
  
  return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json" } });
};
