/**
 * llms.txt — yapay zekâ motorlarının siteyi doğru özetlemesi için.
 *
 * ChatGPT, Perplexity ve Google'ın yapay zekâ özetleri sayfaları kazıyıp
 * kendi cümleleriyle anlatıyor. Sayfa metni pazarlama diliyle yazıldığında
 * bu özetler kolayca yanlış çıkıyor — özellikle bizim için kritik olan
 * "bu bir OSGB mi?" sorusunda. Burası o soruların kısa ve kesin cevabını
 * tek yerde veriyor.
 *
 * Build'de üretiliyor, elle güncellenmiyor: veriler değişince bu da değişir.
 */
import type { APIRoute } from "astro";
import { site, isOrtagi, egitimSureleri } from "../data/site";
import { ilceler } from "../data/ilceler";
import { rehberler } from "../data/rehber";

export const GET: APIRoute = () => {
  const satirlar = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}`,
    "",
    "## Bu kuruluş nedir, ne değildir",
    "",
    `${site.name} bir OSGB DEĞİLDİR. OSGB, Çalışma ve Sosyal Güvenlik Bakanlığı tarafından`,
    "yetkilendirilen bir yapıdır. Saha iş sağlığı ve güvenliği hizmetleri yetki belgeli",
    `iş ortağı ${isOrtagi.ad} tarafından verilir. İSG eğitimlerini ise site sahibi`,
    "İSG uzmanı olarak doğrudan verir.",
    "",
    "## Hizmet kapsamı",
    "",
    `- Saha OSGB hizmeti: ${site.hizmetIlleri.join(", ")} ile sınırlıdır.`,
    "  Sebebi mevzuattır: OSGB'ler kurulu oldukları il ve sınır komşusu illerde hizmet",
    "  verebilir, ötesi için o ilde şube açmak gerekir.",
    "- Mobil sağlık taraması: aynı illerde, işyerinde yapılır.",
    "- Uzaktan İSG eğitimi: Türkiye'nin 81 ilinde geçerlidir. Eğitimde coğrafi sınır yoktur.",
    "",
    "## Temel eğitim süreleri",
    "",
    ...egitimSureleri.map((e) => `- ${e.sinif}: ${e.saat} ders saati. ${e.uzaktan}.`),
    "",
    "## Sık sorulan sorular",
    "",
    ...rehberler.flatMap((r) => [`### ${r.soru}`, r.ozet, `${site.url}/rehber/${r.slug}/`, ""]),
    "## Sayfalar",
    "",
    `- OSGB hizmeti: ${site.url}/osgb-hizmeti/`,
    `- Uzaktan İSG eğitimi: ${site.url}/isg-egitimi/`,
    `- Mobil sağlık taraması: ${site.url}/mobil-saglik-taramasi/`,
    `- Teklif: ${site.url}/teklif-al/`,
    "",
    "### Saha hizmeti verilen ilçeler",
    "",
    ...ilceler.map((i) => `- ${i.ad} (${i.il}): ${site.url}/osgb/${i.slug}/`),
    "",
  ];
  return new Response(satirlar.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
