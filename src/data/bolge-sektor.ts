/**
 * Bölge × sektör içerik sayfaları.
 *
 * NEDEN VERİ, NEDEN AYRI .astro DOSYASI DEĞİL: Bu sayfalar orkestratör
 * tarafından üretiliyor. Otomatik üretimin serbestçe .astro dosyası
 * yazabilmesi, şablonun her üretimde biraz kaymasına ve zamanla kontrolsüz
 * bir sayfa fabrikasına dönüşmesine açık kapı bırakırdı. Şablon burada tek
 * ve insan tarafından gözden geçirilmiş; üretim yalnız VERİ ekleyebiliyor.
 *
 * DOLDURULMA KURALI: Bu diziye bir kayıt, ancak `seo_content_engine` kalite
 * kapılarının tamamından geçtikten sonra girer. Elle eklenen bir kayıt da
 * aynı kurallara uymak zorundadır:
 *
 *  - Her bölüm o ilçe/sektör için yazılmış olmalı. İlçe adı değiştirildiğinde
 *    metin hâlâ doğru kalıyorsa, içerik özgün değildir ve girmez.
 *  - Sayısal veya hukuki her iddia `kaynaklar` alanında bir resmî kaynağa
 *    bağlanmalı (Resmî Gazete, mevzuat.gov.tr, ÇSGB, İSGGM, MYK, KVKK).
 *  - "Bu bölgede yüzlerce firma" gibi kaynağı olmayan sayı YAZILMAZ.
 *  - Sahte vaka, sahte yorum, sahte istatistik YAZILMAZ.
 *  - Saha hizmeti ifadesi yalnız gerçekten hizmet verilen illerde kullanılır.
 */

export type BolgeSektorBolum = {
  baslik: string;
  /** Paragraflar. Liste gerekiyorsa `maddeler` kullanılır. */
  paragraflar?: string[];
  maddeler?: string[];
};

export type BolgeSektorSayfa = {
  slug: string;
  /** Sayfa tipi — registry ile aynı sözlük. */
  tip: "ilce" | "ilce-sektor" | "ilce-hizmet" | "sektor-rehber" | "isveren-rehber";
  il: string;
  ilce?: string;
  /** sektorler.ts slug'ı — varsa sektör sayfasına bağlanır. */
  sektorSlug?: string;
  /** hizmetler.ts slug'ı — varsa hizmet sayfasına bağlanır. */
  hizmetSlug?: string;

  seoBaslik: string;
  metaAciklama: string;
  h1: string;
  /** 2-3 cümle; doğrudan arama niyetine cevap. */
  giris: string;

  bolumler: BolgeSektorBolum[];
  sss: { soru: string; cevap: string }[];

  /** En az 4, en fazla 10 anlamlı iç link. */
  icLinkler: { metin: string; href: string }[];

  /** Hukuki/sayısal iddiaların dayandığı resmî kaynaklar. */
  kaynaklar: { ad: string; url?: string }[];

  /** Sayfaya özel birincil eylem. Boşsa varsayılan ön değerlendirme. */
  cta?: { metin: string; href: string };

  /** Saha hizmeti verilebilen bir bölge mi? Metindeki ifadeleri bu belirler. */
  sahaHizmeti: boolean;

  /** Motorun verdiği puan ve ölçümler — şeffaflık için saklanıyor. */
  uretim: {
    yayinTarihi: string;
    kalitePuani: number;
    benzerlikEnYuksek: number;
  };

  /** Arama motorlarına kapatılsın mı? Yardımcı sayfalar için. */
  indexDisi?: boolean;
};

export const bolgeSektorSayfalari: BolgeSektorSayfa[] = [];

export const bolgeSektorSayisi = bolgeSektorSayfalari.filter((s) => !s.indexDisi).length;
