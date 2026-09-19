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
  },
  {
    slug: "kadikoy",
    ad: "Kadıköy",
    il: "İstanbul",
    vurgu:
      "Ağırlık ofis, kafe-restoran ve perakende. Bu işyerlerinin çoğu az " +
      "tehlikeli sınıfta, yani temel eğitim 8 ders saati ve tamamı uzaktan " +
      "verilebiliyor — sahaya çıkmadan tamamlanabilen ender segmentlerden.",
  },
  {
    slug: "umraniye",
    ad: "Ümraniye",
    il: "İstanbul",
    vurgu:
      "Organize sanayi ile plaza ofislerinin yan yana olduğu karma bir ilçe. " +
      "Aynı firmanın merkez ofisi az tehlikeli, üretim tesisi çok tehlikeli " +
      "sınıfta olabiliyor; yükümlülük tek tek işyeri bazında hesaplanmalı.",
  },
  {
    slug: "basaksehir",
    ad: "Başakşehir",
    il: "İstanbul",
    vurgu:
      "İkitelli OSB ve çevresindeki üretim yoğunluğu ilçeyi ağırlıklı olarak " +
      "tehlikeli ve çok tehlikeli sınıfa taşıyor. Çok tehlikeli sınıfta " +
      "temel eğitim 16 ders saati ve 4. konu başlığı yüz yüze zorunlu.",
  },
  {
    slug: "kocaeli",
    ad: "Kocaeli",
    il: "Kocaeli",
    vurgu:
      "Ağır sanayi, kimya ve otomotiv yan sanayinin merkezi. Çok tehlikeli " +
      "sınıf burada istisna değil kural; ortam ölçümü ve acil durum planı " +
      "gereklilikleri de buna göre ağırlaşıyor.",
  },
  {
    slug: "tekirdag",
    ad: "Tekirdağ",
    il: "Tekirdağ",
    vurgu:
      "Çorlu ve Çerkezköy hattındaki tekstil ve kimya tesisleri ilçeyi " +
      "tehlikeli sınıf ağırlıklı yapıyor. İstanbul'a sınır komşusu olduğu " +
      "için saha hizmeti kapsamımızda.",
  },
];
