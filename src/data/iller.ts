/**
 * Uzaktan eğitim hattının il sayfaları.
 *
 * NEDEN 81 SAYFA DEĞİL
 * Eğitimde coğrafi sınır yok, yani 81 ilin hepsine hizmet veriyoruz ve
 * kapsama listesi bunu gösteriyor. Ama her il için ayrı sayfa açıp içeriği
 * yalnız şehir adını değiştirerek üretmek "doorway page" kalıbıdır; Google
 * bunu açıkça düşük kaliteli sayar. Sayfa, ancak o il için doğru ve özgül
 * bir şey söyleyebiliyorsak vardır.
 *
 * Liste genişletilebilir — koşul tek: `sektor` alanı o ile dair gerçek bir
 * şey söylemeli, doldurma cümlesi olmamalı.
 */
export type Il = {
  slug: string;
  ad: string;
  sektor: string;
  /** O ilde eğitimin nasıl planlandığı — vardiya, mevsimsellik, OSB yoğunluğu
   *  gibi planlamayı gerçekten değiştiren şeyler. Dolgu cümle yazılmaz. */
  egitimNotu: string[];
};

export const illerSayfali: Il[] = [
  { slug: "istanbul", ad: "İstanbul", sektor: "Tekstil, gıda, plastik ve lojistik ağırlıklı geniş bir işyeri dokusu. Aynı firmanın ofisi az tehlikeli, üretim tesisi çok tehlikeli sınıfta olabiliyor.", egitimNotu: ["Aynı firmanın merkez ofisi ile üretim tesisi farklı tehlike sınıflarında olabildiği için eğitim planı işyeri bazında kurulur; ofis tarafı tamamen uzaktan tamamlanırken üretim tarafında yüz yüze bölüm için ayrı gün planlanır.", "İstanbul'da hem saha OSGB hizmeti hem uzaktan eğitim veriyoruz; diğer illerde yalnız eğitim ve danışmanlık."] },
  { slug: "ankara", ad: "Ankara", sektor: "Kamu kurumları ve savunma sanayii yan sanayisi bir arada. Kamu işyerlerinde az tehlikeli sınıf yaygın ve temel eğitimin tamamı uzaktan verilebiliyor.", egitimNotu: ["Kamu kurumlarında ve 10'dan az çalışanı olan az tehlikeli işyerlerinde temel eğitimin tamamı uzaktan verilebildiği için takvim kısa kurulur.", "Savunma sanayii yan sanayisinde ise tehlikeli sınıf yaygın; o işyerlerinde karma takvim gerekir."] },
  { slug: "izmir", ad: "İzmir", sektor: "Liman, gıda işleme ve makine imalatı. Liman ve depo operasyonları çoğunlukla tehlikeli sınıfta, 12 ders saati zorunlu.", egitimNotu: ["Liman ve depo operasyonlarında vardiya düzeni 7/24 olduğu için eğitim oturumları vardiya değişimlerine göre bölünür.", "Gıda işleme tesislerinde mevsimsel işgücü artışı, yeni girenlerin temel eğitiminin yıl içinde birkaç kez tekrarlanmasını gerektirir."] },
  { slug: "bursa", ad: "Bursa", sektor: "Otomotiv yan sanayii ve tekstil. Pres, kaynak ve boya hatları çok tehlikeli sınıfa giriyor; 4. konu başlığı yüz yüze zorunlu.", egitimNotu: ["Otomotiv yan sanayiinde pres, kaynak ve boya hatları çok tehlikeli sınıfta; bu hatlarda dördüncü konu başlığı yüz yüze yapılır.", "Tekstil tarafında tehlikeli sınıf yaygın, yenileme eğitimleri uzaktan planlanabiliyor."] },
  { slug: "kocaeli", ad: "Kocaeli", sektor: "Kimya, rafineri ve otomotiv. Türkiye'nin çok tehlikeli sınıf yoğunluğu en yüksek illerinden; ortam ölçümü ve acil durum planı yükümlülükleri ağır.", egitimNotu: ["Kimya ve rafineri tesislerinde eğitim içeriği tesise özgü acil durum senaryolarıyla birlikte kurgulanır; genel içerik yetersiz kalır.", "Kocaeli İstanbul'a sınır komşusu olduğu için burada eğitimin yanında saha OSGB hizmeti de verebiliyoruz."] },
  { slug: "konya", ad: "Konya", sektor: "Tarım makineleri ve döküm. Metal işleme ağırlıklı olduğu için tehlikeli ve çok tehlikeli sınıf baskın.", egitimNotu: ["Döküm ve metal işleme ağırlıklı olduğu için sıcak iş, ergonomi ve gürültü başlıkları eğitimde öne çekilir.", "Tarım makineleri üretiminde sezonluk üretim yoğunlaşması eğitim takvimini yılın belirli aylarına sıkıştırır."] },
  { slug: "gaziantep", ad: "Gaziantep", sektor: "Halı, gıda ve plastik üretimi. Vardiyalı üretim yapan orta ölçekli işletmeler çoğunlukta; yenileme eğitimleri uzaktan planlanabiliyor.", egitimNotu: ["Halı ve plastik üretiminde vardiyalı çalışma yaygın; oturumlar vardiya başına ayrı planlanır.", "Orta ölçekli işletmelerde yenileme eğitimleri uzaktan yürütülerek üretim durdurulmaz."] },
  { slug: "adana", ad: "Adana", sektor: "Tarıma dayalı sanayi ve tekstil. Mevsimlik işgücü nedeniyle temel eğitim ihtiyacı yıl içinde dalgalanıyor.", egitimNotu: ["Tarıma dayalı sanayide mevsimlik işgücü nedeniyle temel eğitim ihtiyacı yıl içinde dalgalanır; işe yeni girenler için ayrı oturum açılır.", "Tekstil tarafında tehlikeli sınıf yaygın, karma takvim gerekir."] },
  { slug: "antalya", ad: "Antalya", sektor: "Turizm ve seracılık. Otel ve restoran işyerlerinin önemli kısmı az tehlikeli sınıfta, tamamen uzaktan eğitim mümkün.", egitimNotu: ["Otel ve restoran işyerlerinin önemli kısmı az tehlikeli sınıfta olduğu için eğitimin tamamı uzaktan tamamlanabiliyor.", "Sezon öncesi toplu işe alımlarda temel eğitim tek seferde ve uzaktan verilebilir; bu, sezon açılışında zaman kazandırır."] },
  { slug: "kayseri", ad: "Kayseri", sektor: "Mobilya ve metal imalatı. Ahşap tozu ve kaynak dumanı nedeniyle ortam ölçümü gündemde.", egitimNotu: ["Mobilya üretiminde ahşap tozu, metal tarafında kaynak dumanı maruziyeti eğitimde ortam ölçümü sonuçlarıyla birlikte anlatılır.", "Organize sanayi yoğunluğu nedeniyle birden fazla işyeri için ortak planlama yapılabiliyor."] },
  { slug: "denizli", ad: "Denizli", sektor: "Tekstil ve mermer. Mermer ocakları ve işleme tesisleri çok tehlikeli sınıfta.", egitimNotu: ["Mermer ocakları ve işleme tesisleri çok tehlikeli sınıfta; dördüncü konu başlığı yüz yüze yapılmak zorunda.", "Tekstil tarafında yenileme eğitimleri uzaktan yürütülebiliyor."] },
  { slug: "tekirdag", ad: "Tekirdağ", sektor: "Çorlu–Çerkezköy hattında tekstil ve kimya. Tehlikeli sınıf ağırlıklı; İstanbul'a komşu olduğu için saha hizmeti de kapsamımızda.", egitimNotu: ["Çorlu ve Çerkezköy hattındaki tesislerde tehlikeli sınıf baskın; eğitim takvimi üretim vardiyalarına göre kurulur.", "Tekirdağ İstanbul'a sınır komşusu olduğu için burada saha OSGB hizmeti de kapsamımızda."] },
  { slug: "manisa", ad: "Manisa", sektor: "Beyaz eşya ve elektronik montaj. Montaj hatlarında tekrarlayan zorlanma ve kesici alet riskleri öne çıkıyor.", egitimNotu: ["Beyaz eşya ve elektronik montaj hatlarında tekrarlayan zorlanma ve kesici alet riskleri eğitimin ağırlık noktası olur.", "Büyük tesislerde yüz yüze bölüm için üretimi durdurmayan planlı takvim kurulur."] },
  { slug: "hatay", ad: "Hatay", sektor: "Demir-çelik ve liman. Ağır metal sanayi nedeniyle çok tehlikeli sınıf yaygın.", egitimNotu: ["Demir-çelik ve liman operasyonlarında çok tehlikeli sınıf yaygın; sıcak iş ve yük kaldırma başlıkları öne çıkar.", "Yenileme eğitimleri uzaktan, ilk temel eğitimin yüz yüze bölümü planlı olarak yürütülür."] },
  { slug: "sakarya", ad: "Sakarya", sektor: "Otomotiv ana ve yan sanayi. Büyük tesislerde yüz yüze bölüm için planlı takvim gerekiyor.", egitimNotu: ["Otomotiv ana ve yan sanayide büyük çalışan sayıları nedeniyle eğitim gruplara bölünür; hat durdurmadan ilerlenir.", "Vardiyalı düzende oturumlar vardiya başına tekrarlanır."] },
];

/** Eğitim hizmetinin kapsadığı alan: 81 ilin tamamı. */
export const tumIller = [
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin",
  "Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur",
  "Bursa","Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan",
  "Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkâri","Hatay","Iğdır","Isparta","İstanbul",
  "İzmir","Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kırıkkale","Kırklareli","Kırşehir",
  "Kilis","Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş",
  "Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas",
  "Şanlıurfa","Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak",
];
