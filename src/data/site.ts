/**
 * Tek gerçek kaynak. Alan adı, iletişim ve yasal ifadeler burada durur;
 * şablonlar bunlara bakar, hiçbir sayfa kendi başına telefon/e-posta yazmaz.
 *
 * DİKKAT — konumlandırma kuralı:
 * Bu site bir OSGB DEĞİLDİR. OSGB, Çalışma ve Sosyal Güvenlik Bakanlığı'nca
 * yetkilendirilen bir yapıdır ve saha hizmeti yetki belgeli iş ortağı
 * tarafından verilir. Sayfalarda "biz OSGB'yiz" anlamına gelecek bir ifade
 * KULLANILMAZ. Eğitimleri site sahibi (İSG uzmanı) doğrudan verir.
 */
export const site = {
  url: "https://dijitalosgb.com",
  name: "Dijital OSGB",
  tagline: "İş sağlığı ve güvenliğinde dijital çözüm ortağınız",

  // Boş kalanlar sayfada gösterilmez.
  telefon: "+90 542 523 47 23",      // görünen biçim
  telefonHref: "+905425234723",      // tel: ve wa.me için ham biçim
  eposta: "info@dijitalosgb.com",
  whatsapp: "905425234723",

  /**
   * KVKK aydınlatma metninde "veri sorumlusu" olarak gösterilecek tüzel/gerçek
   * kişi bilgileri. BOŞ OLANLAR YAYIMLANMIYOR — aydınlatma metninde uydurma
   * unvan veya adres bulunması, metni geçersiz kılmanın yanında başlı başına
   * bir ihlal olur.
   */
  // İSG uzmanlığı belge sınıfı (A/B/C) — hangi tehlike sınıfına hizmet
  // verilebileceğini belirler, sayfa hedeflerini bu çizer.
  uzmanBelgeSinifi: "A",

  // Saha OSGB hizmetinin verilebildiği iller. OSGB'ler kurulu oldukları il ve
  // SINIR KOMŞUSU illerde hizmet verebilir; bu liste onun sonucudur.
  hizmetIlleri: ["İstanbul", "Kocaeli", "Tekirdağ"],
} as const;

/**
 * Saha hizmetini fiilen veren yetkili kuruluş. Sitede adıyla gösterilir:
 * ziyaretçinin "bu iş kimin üzerinden yürüyor" sorusunun cevabı ve sitenin
 * en güçlü güven unsuru. İletişim kanalları BİLEREK burada değil — talepler
 * site üzerinden toplanır.
 */
export const isOrtagi = {
  ad: "Sahra OSGB",
  adres: "Talatpaşa Mah. Pazaryolu Cad. No:2 Sedai Plaza Kat:2/22, Esenyurt / İstanbul",
  // TODO: Bakanlık yetki belgesi numarası. Alınınca buraya yazılacak;
  // boş kaldığı sürece sayfada belge satırı hiç gösterilmez.
  yetkiBelgeNo: "",
} as const;

/**
 * Veri sorumlusu künyesi — KVKK m.10 aydınlatma yükümlülüğü için.
 * Alanlar doldurulmadan aydınlatma metni "eksik" uyarısı gösterir.
 */
export const veriSorumlusu = {
  unvan: "Mehmet Kadir Uğur",   // kullanıcı 2026-09-19'da veri sorumlusu olarak kendini bildirdi
  adres: "",     // TODO: tebligata elverişli adres — kullanıcıdan bekleniyor
  eposta: "kvkk@dijitalosgb.com",
  vkn: "",       // vergi/TC kimlik no (isteğe bağlı gösterim)
} as const;

/**
 * Hizmet ekibinin yapısı. İSİM YAZILMIYOR — kullanıcı tercihi.
 *
 * Buradaki ifadeler doğrulanabilir olmak zorunda: yetkilendirilmiş bir OSGB,
 * mevzuat gereği iş güvenliği uzmanı ve işyeri hekimi çalıştırmak
 * durumundadır; uzmanın belge sınıfı da hangi tehlike sınıfına hizmet
 * verebileceğini belirler. Yani aşağıdaki satırlar övünme değil, yapının
 * kendisi.
 *
 * "Kadromuzda" yerine "hizmet ekibinde" deniyor: saha personeli yetki
 * belgeli iş ortağının bünyesinde, eğitim tarafı doğrudan bizde. İkisini tek
 * kadro gibi göstermek, baştan beri kaçındığımız yanıltıcı sunum olurdu.
 */
/**
 * Siteyi yürüten uzman.
 *
 * DOLU ALANLAR = bu konuşmada kullanıcının kendisinin söylediği/doğruladığı
 * bilgiler. BOŞ ALANLAR = doğrulanmadı, bu yüzden yayımlanmıyor ve sayfada
 * hiç basılmıyor.
 *
 * Belge sınıfı, belge numarası ve diploma düzenlenmiş meslekî iddialardır;
 * teyit edilmeden yazılırsa sitenin tüm güvenilirliğini götürür.
 */
export const uzman = {
  ad: "Mehmet Kadir Uğur",
  unvan: "İş Güvenliği Uzmanı",
  belgeSinifi: "A",  // kullanıcı 2026-09-19'da teyit etti
  belgeNo: "",       // teyit bekliyor
  egitim: [] as string[],
  deneyim: "",
} as const;

export const ekip = [
  {
    baslik: "İş güvenliği uzmanları",
    aciklama:
      "İşyerinin tehlike sınıfına göre A, B veya C sınıfı belgeye sahip uzman görevlendirilir. " +
      "C sınıfı az tehlikeli, B sınıfı az ve tehlikeli, A sınıfı bütün tehlike sınıflarındaki " +
      "işyerlerinde görev yapabilir.",
  },
  {
    baslik: "İşyeri hekimleri",
    aciklama:
      "İşe giriş ve periyodik muayeneler, sağlık gözetimi kayıtları ve işyeri ortamından " +
      "kaynaklanan sağlık risklerinin değerlendirilmesi.",
  },
  {
    baslik: "Diğer sağlık personeli",
    aciklama:
      "Mobil sağlık aracındaki tarama ve ölçümlerin yürütülmesi, numune alımı ve " +
      "kayıtların tutulması.",
  },
] as const;

/** Her sayfanın altbilgisinde görünen yasal not. */
export const yasalNot =
  "Dijital OSGB bir OSGB değildir. Saha iş sağlığı ve güvenliği hizmetleri, " +
  "Çalışma ve Sosyal Güvenlik Bakanlığı'ndan yetkili iş ortağımız Sahra OSGB " +
  "tarafından verilir. İSG eğitimleri İSG uzmanı tarafından doğrudan verilir.";

/** Temel eğitim süreleri — tehlike sınıfına göre, ders saati. */
export const egitimSureleri = [
  { sinif: "Az tehlikeli", saat: 8, uzaktan: "Tamamı uzaktan verilebilir" },
  { sinif: "Tehlikeli", saat: 12, uzaktan: "4. konu başlığı yüz yüze" },
  { sinif: "Çok tehlikeli", saat: 16, uzaktan: "4. konu başlığı yüz yüze" },
] as const;
