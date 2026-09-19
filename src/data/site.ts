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

  // TODO: gerçek değerlerle doldurulacak. Boş kalanlar sayfada gösterilmez.
  telefon: "",
  eposta: "",
  whatsapp: "",

  // İSG uzmanlığı belge sınıfı (A/B/C) — hangi tehlike sınıfına hizmet
  // verilebileceğini belirler, sayfa hedeflerini bu çizer.
  uzmanBelgeSinifi: "",

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
 * Siteyi yazan/denetleyen uzman. Google'ın aradığı "gerçek deneyim ve
 * uzmanlık" kanıtı bu; yapay zekâ motorlarının siteyi güvenilir kaynak
 * sayması da buna bağlı.
 *
 * ALANLAR BİLEREK BOŞ: doğrulanmamış unvan ve diploma yayımlanmaz.
 * Kullanıcı teyit edince doldurulacak; boş kalan satır sayfada hiç basılmaz.
 */
export const uzman = {
  ad: "",                 // örn. "Mehmet Kadir Uğur"
  unvan: "",              // örn. "A Sınıfı İş Güvenliği Uzmanı"
  belgeNo: "",            // İSG uzmanlığı belge numarası
  egitim: [] as string[], // örn. ["Kimya Lisans", "İSG Yüksek Lisans"]
  deneyim: "",            // tek cümlelik gerçek saha deneyimi özeti
} as const;

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
