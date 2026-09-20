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
import { bolgeSektorSayfalari } from "../data/bolge-sektor";
import { hizmetler } from "../data/hizmetler";

/**
 * llms.txt'ye girecek programatik sayfalar.
 *
 * TEK KARAR KAYNAĞI REGISTRY (ek talimat #11). Önceki sürüm burada kendi
 * `qualityScore >= 90` mantığını çalıştırıyordu; registry'de ise ayrıca
 * `llmsEligible` alanı vardı. İki ayrı karar sistemi, er ya da geç
 * birbirinden ayrışır ve hangisinin doğru olduğu belirsizleşir.
 *
 * Artık seçim yalnız registry'den geliyor ve dört şartın HEPSİ aranıyor
 * (ek talimat #12): status published, indexable, technicalSeoPassed ve
 * llmsEligible. Bunlar `sync.py` tarafından ÖLÇÜLEREK yazılıyor; yani
 * yayımlanmamış, noindex, canonical'ı tutmayan veya QA'dan düşmüş bir URL
 * buraya giremiyor.
 *
 * Sıralama: önce llmsPriority, sonra qualityScore. Üst sınır korunuyor —
 * dosya pillar ağırlıklı kalmalı, yerel URL çöplüğüne dönüşmemeli.
 */
import registry from "../../data/seo-content-registry.json";

const LLMS_MAX = 20;

type RegistryEntry = {
  slug: string;
  h1?: string;
  primaryKeyword?: string;
  status?: string;
  indexable?: boolean;
  technicalSeoPassed?: boolean;
  llmsEligible?: boolean;
  llmsPriority?: number;
  qualityScore?: number;
};

const secilmisBolgeler = (registry.entries as RegistryEntry[])
  .filter(
    (e) =>
      e.status === "published" &&
      e.indexable === true &&
      e.technicalSeoPassed === true &&
      e.llmsEligible === true
  )
  .sort(
    (a, b) =>
      (b.llmsPriority ?? 0) - (a.llmsPriority ?? 0) ||
      (b.qualityScore ?? 0) - (a.qualityScore ?? 0)
  )
  .slice(0, LLMS_MAX)
  .map((e) => {
    const sayfa = bolgeSektorSayfalari.find((b) => b.slug === e.slug);
    return { slug: e.slug, baslik: sayfa?.h1 ?? e.primaryKeyword ?? e.slug };
  });

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
    `- Ücretsiz ön değerlendirme: ${site.url}/teklif-al/`,
    `- İletişim: ${site.url}/iletisim/`,
    `- Hazır hizmet paketleri: ${site.url}/paketler/`,
    `- Hesaplama araçları: ${site.url}/araclar/`,
    `- İSG kütüphanesi (form ve levha şablonları): ${site.url}/isg-kutuphanesi/`,
    "",
    "### Ana hizmetler",
    "",
    ...hizmetler
      .slice(0, 8)
      .map((h) => `- ${h.ad}: ${site.url}/hizmetler/${h.slug}/`),
    "",
    "### Saha hizmeti verilen ilçeler",
    "",
    ...ilceler.map((i) => `- ${i.ad} (${i.il}): ${site.url}/osgb/${i.slug}/`),
    "",
    ...(secilmisBolgeler.length > 0
      ? [
          "### Bölge ve sektör rehberleri",
          "",
          ...secilmisBolgeler.map((b) => `- ${b.baslik}: ${site.url}/bolge/${b.slug}/`),
          "",
        ]
      : []),
  ];
  return new Response(satirlar.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
