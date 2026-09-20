/**
 * Saha hizmeti sayfalarının üretildiği ilçe listesi.
 *
 * Neden 81 il değil: OSGB'ler kurulu oldukları il ve sınır komşusu illerde
 * hizmet verebilir (İSG Hizmetleri Yönetmeliği). İş ortağı OSGB İstanbul'da
 * olduğu için satılabilir alan İstanbul + Kocaeli + Tekirdağ. Ülke geneline
 * sayfa açmak, hizmet verilemeyecek yerlerden talep toplamak olurdu.
 *
 * `vurgu` alanı zorunlu ve bilerek öyle: şehir adı değişen kopya sayfalar
 * Google'da da okuyucuda da işe yaramaz. Her sayfa o ilçeye dair gerçek bir
 * şey söylemek zorunda.
 */
export type Ilce = {
  slug: string;
  ad: string;
  il: "İstanbul" | "Kocaeli" | "Tekirdağ";
  vurgu: string;
  /**
   * İlçede yoğun olan iş kolları — `sektorler.ts` slug'ları.
   * UYDURULMADI: her biri yukarıdaki `vurgu` metninde zaten adı geçen
   * sektörlerden seçildi, yani aynı kaynağın makine okunabilir hâli.
   * Sayfada ilgili sektör sayfalarına bağlanmak için kullanılıyor.
   */
  sektorler: string[];
  /** İlçede baskın tehlike sınıfı — eğitim ve süre hesabının çıkış noktası. */
  baskinSinif: "az-tehlikeli" | "tehlikeli" | "cok-tehlikeli" | "karma";
};

export const ilceler: Ilce[] = [
  {
    slug: "esenyurt",
    ad: "Esenyurt",
    il: "İstanbul",
    vurgu:
      "İstanbul'un en kalabalık ilçesi ve yoğun bir küçük imalat dokusu var. " +
      "Tekstil, plastik ve gıda üretimi yapan işyerlerinin büyük bölümü " +
      "tehlikeli sınıfta; bu da 12 ders saatlik temel eğitim ve daha sık " +
      "işyeri hekimi görevlendirmesi demek.",
    sektorler: ["tekstil-konfeksiyon", "kimya-boya", "gida-restoran", "ahsap-mobilya"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "kadikoy",
    ad: "Kadıköy",
    il: "İstanbul",
    vurgu:
      "Ağırlık ofis, kafe-restoran ve perakende. Bu işyerlerinin çoğu az " +
      "tehlikeli sınıfta, yani temel eğitim 8 ders saati ve tamamı uzaktan " +
      "verilebiliyor — sahaya çıkmadan tamamlanabilen ender segmentlerden.",
    sektorler: ["ofis-hizmet", "gida-restoran", "perakende-magaza"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "umraniye",
    ad: "Ümraniye",
    il: "İstanbul",
    vurgu:
      "Organize sanayi ile plaza ofislerinin yan yana olduğu karma bir ilçe. " +
      "Aynı firmanın merkez ofisi az tehlikeli, üretim tesisi çok tehlikeli " +
      "sınıfta olabiliyor; yükümlülük tek tek işyeri bazında hesaplanmalı.",
    sektorler: ["ofis-hizmet", "fabrika-uretim", "metal-kaynak", "lojistik-depo"],
    baskinSinif: "karma",
  },
  {
    slug: "basaksehir",
    ad: "Başakşehir",
    il: "İstanbul",
    vurgu:
      "İkitelli OSB ve çevresindeki üretim yoğunluğu ilçeyi ağırlıklı olarak " +
      "tehlikeli ve çok tehlikeli sınıfa taşıyor. Çok tehlikeli sınıfta " +
      "temel eğitim 16 ders saati ve 4. konu başlığı yüz yüze zorunlu.",
    sektorler: ["fabrika-uretim", "metal-kaynak", "matbaa-ambalaj", "tekstil-konfeksiyon"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "kocaeli",
    ad: "Kocaeli",
    il: "Kocaeli",
    vurgu:
      "Ağır sanayi, kimya ve otomotiv yan sanayinin merkezi. Çok tehlikeli " +
      "sınıf burada istisna değil kural; ortam ölçümü ve acil durum planı " +
      "gereklilikleri de buna göre ağırlaşıyor.",
    sektorler: ["kimya-boya", "otomotiv-servis", "fabrika-uretim", "enerji-elektrik"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "tekirdag",
    ad: "Tekirdağ",
    il: "Tekirdağ",
    vurgu:
      "Çorlu ve Çerkezköy hattındaki tekstil ve kimya tesisleri ilçeyi " +
      "tehlikeli sınıf ağırlıklı yapıyor. İstanbul'a sınır komşusu olduğu " +
      "için saha hizmeti kapsamımızda.",
    sektorler: ["tekstil-konfeksiyon", "kimya-boya", "fabrika-uretim"],
    baskinSinif: "tehlikeli",
  },
];
