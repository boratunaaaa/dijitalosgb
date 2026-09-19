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
export type Il = { slug: string; ad: string; sektor: string };

export const illerSayfali: Il[] = [
  { slug: "istanbul", ad: "İstanbul", sektor: "Tekstil, gıda, plastik ve lojistik ağırlıklı geniş bir işyeri dokusu. Aynı firmanın ofisi az tehlikeli, üretim tesisi çok tehlikeli sınıfta olabiliyor." },
  { slug: "ankara", ad: "Ankara", sektor: "Kamu kurumları ve savunma sanayii yan sanayisi bir arada. Kamu işyerlerinde az tehlikeli sınıf yaygın ve temel eğitimin tamamı uzaktan verilebiliyor." },
  { slug: "izmir", ad: "İzmir", sektor: "Liman, gıda işleme ve makine imalatı. Liman ve depo operasyonları çoğunlukla tehlikeli sınıfta, 12 ders saati zorunlu." },
  { slug: "bursa", ad: "Bursa", sektor: "Otomotiv yan sanayii ve tekstil. Pres, kaynak ve boya hatları çok tehlikeli sınıfa giriyor; 4. konu başlığı yüz yüze zorunlu." },
  { slug: "kocaeli", ad: "Kocaeli", sektor: "Kimya, rafineri ve otomotiv. Türkiye'nin çok tehlikeli sınıf yoğunluğu en yüksek illerinden; ortam ölçümü ve acil durum planı yükümlülükleri ağır." },
  { slug: "konya", ad: "Konya", sektor: "Tarım makineleri ve döküm. Metal işleme ağırlıklı olduğu için tehlikeli ve çok tehlikeli sınıf baskın." },
  { slug: "gaziantep", ad: "Gaziantep", sektor: "Halı, gıda ve plastik üretimi. Vardiyalı üretim yapan orta ölçekli işletmeler çoğunlukta; yenileme eğitimleri uzaktan planlanabiliyor." },
  { slug: "adana", ad: "Adana", sektor: "Tarıma dayalı sanayi ve tekstil. Mevsimlik işgücü nedeniyle temel eğitim ihtiyacı yıl içinde dalgalanıyor." },
  { slug: "antalya", ad: "Antalya", sektor: "Turizm ve seracılık. Otel ve restoran işyerlerinin önemli kısmı az tehlikeli sınıfta, tamamen uzaktan eğitim mümkün." },
  { slug: "kayseri", ad: "Kayseri", sektor: "Mobilya ve metal imalatı. Ahşap tozu ve kaynak dumanı nedeniyle ortam ölçümü gündemde." },
  { slug: "denizli", ad: "Denizli", sektor: "Tekstil ve mermer. Mermer ocakları ve işleme tesisleri çok tehlikeli sınıfta." },
  { slug: "tekirdag", ad: "Tekirdağ", sektor: "Çorlu–Çerkezköy hattında tekstil ve kimya. Tehlikeli sınıf ağırlıklı; İstanbul'a komşu olduğu için saha hizmeti de kapsamımızda." },
  { slug: "manisa", ad: "Manisa", sektor: "Beyaz eşya ve elektronik montaj. Montaj hatlarında tekrarlayan zorlanma ve kesici alet riskleri öne çıkıyor." },
  { slug: "hatay", ad: "Hatay", sektor: "Demir-çelik ve liman. Ağır metal sanayi nedeniyle çok tehlikeli sınıf yaygın." },
  { slug: "sakarya", ad: "Sakarya", sektor: "Otomotiv ana ve yan sanayi. Büyük tesislerde yüz yüze bölüm için planlı takvim gerekiyor." },
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
