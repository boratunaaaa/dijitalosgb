/**
 * İSG kütüphanesi — sitede ücretsiz açılan kaynaklar.
 *
 * KURAL: Buraya yalnızca ya kendi ürettiğimiz ya da kamuya açık resmî kaynağa
 * bağlanan içerik girer. Başkasının hazırladığı dokümanı kendi ürünümüz gibi
 * yayımlamıyoruz; mevzuat metinleri resmî kaynağa bağlanır.
 *
 * Formlar boş şablondur: doldurulmuş "örnek dosya" paylaşmak, her iş yerinin
 * kendi koşullarına göre hazırlanması gereken kayıtların kopyalanmasına yol
 * açar — denetimde de ilk fark edilen şey budur.
 */

export type FormAlani =
  | { tip: "satir"; etiket: string; genislik?: "tam" | "yarim" | "ucte" }
  | {
      tip: "tablo";
      basliklar: string[];
      /** Boş bırakılacak satır sayısı. `satirlar` verildiyse ONUN ARDINA eklenir. */
      satirSayisi: number;
      /**
       * İlk sütunu baskıda dolu gelen satırlar — kontrol listeleri için.
       * İzin formunda maddeler formun kendi içeriğidir; bunları nota yazıp
       * kullanıcıya tabloya elle geçirtmek formu yarım bırakıyordu.
       */
      satirlar?: string[];
    }
  | { tip: "metin"; etiket: string; satir: number }
  | { tip: "imza"; roller: string[] }
  | { tip: "not"; metin: string };

export type Form = {
  slug: string;
  ad: string;
  ozet: string;
  /** Hangi yükümlülüğün kaydı olduğu — formun neden var olduğunu açıklar. */
  dayanak: string;
  yatay?: boolean;
  alanlar: FormAlani[];
};

export const formlar: Form[] = [
  {
    slug: "ramak-kala-bildirim-formu",
    ad: "Ramak kala olay bildirim formu",
    ozet: "Yaralanmayla sonuçlanmayan ama sonuçlanabilecek olayların kaydı. En ucuz öğrenme aracı.",
    dayanak:
      "6331 sayılı Kanun, işverene ramak kala olayları için inceleme yapıp rapor düzenleme ve bu kayıtları tutma yükümlülüğü getirir.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri / bölüm", genislik: "yarim" },
      { tip: "satir", etiket: "Olay tarihi ve saati", genislik: "yarim" },
      { tip: "satir", etiket: "Bildirimi yapan", genislik: "yarim" },
      { tip: "satir", etiket: "Olay yeri", genislik: "yarim" },
      {
        tip: "metin",
        etiket: "Olay nasıl gelişti? (ne yapılıyordu, ne oldu)",
        satir: 5,
      },
      {
        tip: "metin",
        etiket: "Yaralanma olsaydı muhtemel sonuç ne olurdu?",
        satir: 3,
      },
      { tip: "metin", etiket: "Kök neden değerlendirmesi", satir: 4 },
      {
        tip: "tablo",
        basliklar: ["Alınacak önlem", "Sorumlu", "Termin", "Durum"],
        satirSayisi: 4,
      },
      {
        tip: "imza",
        roller: ["Bildirimi yapan", "İş güvenliği uzmanı", "İşveren / vekili"],
      },
    ],
  },
  {
    slug: "kkd-zimmet-formu",
    ad: "Kişisel koruyucu donanım zimmet formu",
    ozet: "Çalışana teslim edilen KKD’nin kaydı. Denetimde ve kaza sonrası en çok istenen belgelerden.",
    dayanak:
      "Kişisel koruyucu donanımların iş yerlerinde kullanılması hakkındaki yönetmelik, işverene KKD’yi ücretsiz sağlama, kullanımını sağlama ve kayıt tutma yükümlülüğü getirir.",
    alanlar: [
      { tip: "satir", etiket: "Çalışanın adı soyadı", genislik: "yarim" },
      { tip: "satir", etiket: "Görevi / bölümü", genislik: "yarim" },
      { tip: "satir", etiket: "İşe giriş tarihi", genislik: "yarim" },
      { tip: "satir", etiket: "İş yeri", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Teslim edilen donanım",
          "Marka / standart",
          "Adet",
          "Teslim tarihi",
          "İmza",
        ],
        satirSayisi: 9,
      },
      {
        tip: "not",
        metin:
          "Teslim aldığım koruyucu donanımı, verilen eğitime uygun biçimde kullanacağımı; hasar görmesi veya kaybolması durumunda derhâl bildireceğimi; kullanmadığım takdirde doğabilecek sonuçlardan sorumlu olduğumu kabul ederim.",
      },
      { tip: "imza", roller: ["Teslim alan çalışan", "Teslim eden"] },
    ],
  },
  {
    slug: "egitim-katilim-tutanagi",
    ad: "İSG eğitimi katılım tutanağı",
    ozet: "Eğitimin konusu, süresi ve katılımcıları. Eğitim yapıldığının tek geçerli kanıtı.",
    dayanak:
      "Çalışanların iş sağlığı ve güvenliği eğitimlerine ilişkin yönetmelik, düzenlenen eğitimlerin belgelendirilmesini ve kayıtların iş yerinde saklanmasını zorunlu tutar.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "Tehlike sınıfı", genislik: "yarim" },
      { tip: "satir", etiket: "Eğitim konusu", genislik: "tam" },
      { tip: "satir", etiket: "Tarih", genislik: "ucte" },
      { tip: "satir", etiket: "Süre (ders saati)", genislik: "ucte" },
      { tip: "satir", etiket: "Yöntem (yüz yüze / uzaktan)", genislik: "ucte" },
      { tip: "satir", etiket: "Eğitimi veren / belge no", genislik: "tam" },
      {
        tip: "tablo",
        basliklar: ["Sıra", "Adı soyadı", "T.C. kimlik no", "Görevi", "İmza"],
        satirSayisi: 14,
      },
      { tip: "imza", roller: ["Eğitimi veren", "İşveren / vekili"] },
    ],
  },
  {
    slug: "tatbikat-raporu",
    ad: "Acil durum tatbikatı raporu",
    ozet: "Senaryo, tahliye süresi, aksayan noktalar. Yılda en az bir kez zorunlu.",
    dayanak:
      "İş yerlerinde acil durumlar hakkındaki yönetmelik, acil durum planının uygulanabilirliğini görmek için yılda en az bir defa tatbikat yapılmasını ve kayıt altına alınmasını zorunlu tutar.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri", genislik: "yarim" },
      { tip: "satir", etiket: "Tatbikat tarihi ve saati", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Tatbikat türü (yangın / tahliye / deprem / kimyasal)",
        genislik: "tam",
      },
      { tip: "metin", etiket: "Senaryo", satir: 4 },
      { tip: "satir", etiket: "Katılımcı sayısı", genislik: "ucte" },
      { tip: "satir", etiket: "Tahliye süresi", genislik: "ucte" },
      {
        tip: "satir",
        etiket: "Toplanma yerinde sayım sonucu",
        genislik: "ucte",
      },
      { tip: "metin", etiket: "Gözlemler ve aksayan noktalar", satir: 5 },
      {
        tip: "tablo",
        basliklar: ["Düzeltici faaliyet", "Sorumlu", "Termin"],
        satirSayisi: 4,
      },
      {
        tip: "imza",
        roller: [
          "Tatbikat sorumlusu",
          "İş güvenliği uzmanı",
          "İşveren / vekili",
        ],
      },
    ],
  },
  {
    slug: "periyodik-kontrol-takip-cizelgesi",
    ad: "Periyodik kontrol takip çizelgesi",
    ozet: "Ekipman bazında son kontrol ve sonraki kontrol tarihi. Süresi geçeni tek bakışta gösterir.",
    dayanak:
      "İş ekipmanlarının kullanımında sağlık ve güvenlik şartları yönetmeliği, ekipmanların periyodik kontrollerinin yetkili kişilerce yapılmasını ve kayıtların saklanmasını öngörür.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "İş yeri", genislik: "yarim" },
      { tip: "satir", etiket: "Çizelge tarihi", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Ekipman",
          "Seri / envanter no",
          "Bulunduğu yer",
          "Kontrol periyodu",
          "Son kontrol",
          "Sonraki kontrol",
          "Kontrolü yapan",
          "Sonuç",
        ],
        satirSayisi: 14,
      },
      { tip: "imza", roller: ["Hazırlayan", "İşveren / vekili"] },
    ],
  },
  {
    slug: "isg-kurulu-toplanti-tutanagi",
    ad: "İSG kurulu toplantı tutanağı",
    ozet: "Gündem, alınan kararlar ve sorumlular. Elli ve üzeri çalışanı olan iş yerlerinde zorunlu.",
    dayanak:
      "İş sağlığı ve güvenliği kurulları hakkındaki yönetmelik uyarınca, elli ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren işlerde kurul oluşturulur; kurul kararları tutanağa bağlanır.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri", genislik: "yarim" },
      { tip: "satir", etiket: "Toplantı tarihi / no", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: ["Kurul üyesi", "Görevi / sıfatı", "İmza"],
        satirSayisi: 7,
      },
      { tip: "metin", etiket: "Gündem", satir: 4 },
      {
        tip: "tablo",
        basliklar: ["Karar", "Sorumlu", "Termin"],
        satirSayisi: 6,
      },
      {
        tip: "metin",
        etiket: "Bir önceki toplantı kararlarının durumu",
        satir: 4,
      },
      { tip: "imza", roller: ["Kurul başkanı", "Kurul sekreteri"] },
    ],
  },
  {
    slug: "is-kazasi-inceleme-formu",
    ad: "İş kazası inceleme formu",
    ozet: "Olayın seyri, kök neden ve alınan önlemler. Kazayı üç iş günü içinde SGK’ye bildirmek ayrıca zorunlu.",
    dayanak:
      "6331 sayılı Kanun, iş kazalarının kaydının tutulmasını, gerekli incelemenin yapılarak rapor düzenlenmesini ve kazanın üç iş günü içinde Sosyal Güvenlik Kurumuna bildirilmesini zorunlu tutar.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri", genislik: "yarim" },
      { tip: "satir", etiket: "Kaza tarihi ve saati", genislik: "yarim" },
      { tip: "satir", etiket: "Kazazedenin adı soyadı", genislik: "yarim" },
      { tip: "satir", etiket: "Görevi / kıdemi", genislik: "yarim" },
      { tip: "satir", etiket: "Kaza yeri", genislik: "yarim" },
      { tip: "satir", etiket: "SGK bildirim tarihi", genislik: "yarim" },
      { tip: "metin", etiket: "Olayın gelişimi", satir: 5 },
      { tip: "metin", etiket: "Yaralanmanın türü ve vücuttaki yeri", satir: 2 },
      { tip: "metin", etiket: "Kök neden analizi (neden–neden)", satir: 5 },
      {
        tip: "tablo",
        basliklar: [
          "Düzeltici / önleyici faaliyet",
          "Sorumlu",
          "Termin",
          "Durum",
        ],
        satirSayisi: 5,
      },
      {
        tip: "imza",
        roller: ["İnceleyen", "İş güvenliği uzmanı", "İşveren / vekili"],
      },
    ],
  },
  {
    slug: "saha-denetim-formu",
    ad: "Saha güvenlik denetim formu",
    ozet: "Haftalık saha turu için kontrol listesi: uygun / uygun değil / geçerli değil.",
    dayanak:
      "Risk değerlendirmesinde belirlenen önlemlerin sahada sürdüğünü göstermenin en pratik yolu düzenli saha kontrolüdür; kayıt, denetimde sürecin yaşadığını kanıtlar.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "İş yeri / bölüm", genislik: "yarim" },
      { tip: "satir", etiket: "Denetim tarihi", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Kontrol konusu",
          "Uygun",
          "Uygun değil",
          "Bulgu / açıklama",
          "Sorumlu",
          "Termin",
        ],
        satirSayisi: 14,
      },
      { tip: "imza", roller: ["Denetimi yapan", "Bölüm sorumlusu"] },
    ],
  },
  {
    slug: "calisan-temsilcisi-secim-tutanagi",
    ad: "Çalışan temsilcisi seçim tutanağı",
    ozet: "Temsilcinin seçimle belirlendiğini gösteren kayıt. Uygulamada en sık atlanan belgelerden biri.",
    dayanak:
      "6331 sayılı Kanun, iş yerinde çalışan temsilcisi görevlendirilmesini; bunun çalışanlar arasında yapılacak seçimle, seçimle belirlenemediği durumda atama yoluyla yapılmasını öngörür.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "SGK iş yeri sicil no", genislik: "yarim" },
      { tip: "satir", etiket: "Toplam çalışan sayısı", genislik: "ucte" },
      {
        tip: "satir",
        etiket: "Belirlenecek temsilci sayısı",
        genislik: "ucte",
      },
      { tip: "satir", etiket: "Seçim tarihi", genislik: "ucte" },
      {
        tip: "satir",
        etiket: "Belirleme yöntemi (seçim / atama)",
        genislik: "tam",
      },
      {
        tip: "tablo",
        basliklar: ["Aday adı soyadı", "Bölümü", "Aldığı oy", "Sonuç"],
        satirSayisi: 6,
      },
      {
        tip: "metin",
        etiket: "Seçimin nasıl yapıldığı (duyuru, oylama biçimi, katılım)",
        satir: 4,
      },
      {
        tip: "tablo",
        basliklar: [
          "Seçilen temsilci",
          "Temsil ettiği bölüm",
          "İletişim",
          "İmza",
        ],
        satirSayisi: 3,
      },
      {
        tip: "not",
        metin:
          "Çalışan temsilcisi, görevini yürütmesi nedeniyle hakları kısıtlanamaz. Temsilcinin adı ve iletişim bilgisi çalışanların görebileceği bir yerde ilan edilir.",
      },
      {
        tip: "imza",
        roller: [
          "Seçim kurulu / gözlemci",
          "Çalışan temsilcisi",
          "İşveren / vekili",
        ],
      },
    ],
  },
  {
    slug: "acil-durum-ekipleri-gorevlendirme-tutanagi",
    ad: "Acil durum ekipleri görevlendirme tutanağı",
    ozet: "Söndürme, kurtarma, koruma ve ilk yardım ekiplerinin kim olduğunu yazıya döker.",
    dayanak:
      "İş yerlerinde acil durumlar hakkındaki yönetmelik, tehlike sınıfı ve çalışan sayısına göre arama-kurtarma-tahliye ve yangınla mücadele ekiplerinin oluşturulmasını, görevlendirilenlere eğitim verilmesini zorunlu tutar.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "Tehlike sınıfı", genislik: "ucte" },
      { tip: "satir", etiket: "Çalışan sayısı", genislik: "ucte" },
      {
        tip: "not",
        metin:
          "Ekip sayısı hesabı: arama-kurtarma-tahliye ile yangınla mücadele için AYRI AYRI olmak üzere, çok tehlikeli sınıfta her 30 çalışana, tehlikeli sınıfta her 40 çalışana, az tehlikeli sınıfta her 50 çalışana en az bir çalışan görevlendirilir.",
      },
      {
        tip: "tablo",
        basliklar: [
          "Ekip",
          "Adı soyadı",
          "Görevi / bölümü",
          "Eğitim tarihi",
          "İmza",
        ],
        satirSayisi: 12,
      },
      { tip: "satir", etiket: "Toplanma yeri", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Acil durumda aranacak ilk kişi / telefon",
        genislik: "yarim",
      },
      {
        tip: "not",
        metin:
          "Görevlendirilen çalışana görevi yazılı olarak tebliğ edilir. Ekibi kâğıt üzerinde kurup çalışana haber vermemek, bu kaydı geçersiz kılar.",
      },
      { tip: "imza", roller: ["İş güvenliği uzmanı", "İşveren / vekili"] },
    ],
  },
  {
    slug: "isg-yillik-calisma-plani",
    ad: "İSG yıllık çalışma planı",
    ozet: "Uzman ve hekimin yıl boyunca ne zaman ne yapacağı. Denetimde ilk istenen belgelerden.",
    dayanak:
      "İş güvenliği uzmanı ve işyeri hekimi, yürütecekleri hizmetlere ilişkin yıllık çalışma planını hazırlayıp işverene sunmakla yükümlüdür.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "İş yeri unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "Plan yılı", genislik: "ucte" },
      { tip: "satir", etiket: "Tehlike sınıfı", genislik: "ucte" },
      {
        tip: "tablo",
        basliklar: [
          "Faaliyet",
          "Sorumlu",
          "Oca",
          "Şub",
          "Mar",
          "Nis",
          "May",
          "Haz",
          "Tem",
          "Ağu",
          "Eyl",
          "Eki",
          "Kas",
          "Ara",
        ],
        satirSayisi: 10,
      },
      {
        tip: "not",
        metin:
          "Plana en az şunlar girer: risk değerlendirmesinin gözden geçirilmesi, temel ve yenileme eğitimleri, işe giriş ve periyodik muayeneler, ortam ölçümleri, ekipman periyodik kontrolleri, acil durum tatbikatı, saha denetimleri ve kurul toplantıları.",
      },
      {
        tip: "imza",
        roller: ["İş güvenliği uzmanı", "İşyeri hekimi", "İşveren / vekili"],
      },
    ],
  },
  {
    slug: "isg-yillik-degerlendirme-raporu",
    ad: "İSG yıllık değerlendirme raporu",
    ozet: "Yıl sonunda planın ne kadarının gerçekleştiğini ve rakamları gösteren rapor.",
    dayanak:
      "İş güvenliği uzmanı ve işyeri hekimi, yıllık çalışma planında yer alan konuların gerçekleşme durumunu yıllık değerlendirme raporuyla kayıt altına alır.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "Rapor yılı", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Konu",
          "Planlanan",
          "Gerçekleşen",
          "Gerçekleşmediyse nedeni",
        ],
        satirSayisi: 7,
      },
      {
        tip: "tablo",
        basliklar: ["Sayısal veriler", "Adet"],
        satirlar: [
          "İş kazası sayısı",
          "Kayıp gün sayısı",
          "Ramak kala bildirimi sayısı",
          "Meslek hastalığı şüphesiyle sevk sayısı",
          "Eğitim verilen çalışan sayısı",
          "Yapılan periyodik muayene sayısı",
          "Tamamlanan ekipman periyodik kontrolü sayısı",
          "Yapılan saha denetimi sayısı",
        ],
        satirSayisi: 2,
      },
      { tip: "metin", etiket: "Gelecek yıl için öneriler", satir: 6 },
      {
        tip: "imza",
        roller: ["İş güvenliği uzmanı", "İşyeri hekimi", "İşveren / vekili"],
      },
    ],
  },
  {
    slug: "sicak-calisma-izin-formu",
    ad: "Sıcak çalışma izin formu",
    ozet: "Kaynak, kesme, taşlama gibi kıvılcım çıkaran işler için izin belgesi. Yangının en sık nedeni.",
    dayanak:
      "İşveren, risk değerlendirmesi sonucunda tespit edilen yüksek riskli işler için çalışma öncesinde güvenli çalışma koşullarını sağlamak ve denetlemekle yükümlüdür. Kıvılcım çıkaran işler bu kapsamda izinle yürütülür.",
    alanlar: [
      { tip: "satir", etiket: "İzin no", genislik: "ucte" },
      { tip: "satir", etiket: "Tarih", genislik: "ucte" },
      {
        tip: "satir",
        etiket: "Geçerlilik saati (başlangıç - bitiş)",
        genislik: "ucte",
      },
      { tip: "satir", etiket: "Çalışma yeri", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Yapılacak iş (kaynak / kesme / taşlama)",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "İşi yapacak kişi(ler)", genislik: "yarim" },
      { tip: "satir", etiket: "Yangın gözcüsü", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: ["Çalışma öncesi kontrol", "Evet", "Hayır", "Uygun değil"],
        satirlar: [
          "Yanıcı malzeme 11 metre yarıçapındaki alandan uzaklaştırıldı",
          "Uzaklaştırılamayan malzeme yanmaz örtüyle kapatıldı",
          "Zemin ve duvardaki delik, çatlak ve boşluklar kapatıldı",
          "Uygun tip ve sayıda yangın söndürücü çalışma noktasında hazır",
          "Ortamda gaz ölçümü yapıldı, patlayıcı ortam yok",
          "Yanıcı sıvı/gaz hattı boşaltıldı, temizlendi veya kör tapalandı",
          "Havalandırma sağlandı, duman tahliyesi planlandı",
          "Ekipman kabloları, hortumları ve topraklama bağlantısı sağlam",
          "Yangın algılama sistemi gerekiyorsa devre dışı bırakıldı ve not edildi",
          "İşi yapacak kişinin mesleki yeterlilik / kaynakçı belgesi geçerli",
          "Kaynak maskesi, eldiven, önlük ve gözlük dahil KKD eksiksiz",
          "Çalışma bitiminde en az 60 dakika gözetim planlandı",
        ],
        satirSayisi: 3,
      },
      { tip: "metin", etiket: "İlave önlemler", satir: 3 },
      {
        tip: "not",
        metin:
          "Çalışma bittikten sonra alan en az 60 dakika gözetlenir. Kor hâlindeki kıvılcımın alev almasına kadar geçen süre bu yüzden izinden sayılır.",
      },
      {
        tip: "imza",
        roller: [
          "İzni isteyen",
          "Yangın gözcüsü",
          "İş güvenliği uzmanı",
          "İzni veren",
        ],
      },
    ],
  },
  {
    slug: "yuksekte-calisma-izin-formu",
    ad: "Yüksekte çalışma izin formu",
    ozet: "Ölümlü kazaların başlıca nedeni. Çalışma öncesi ankraj ve toplu korumanın kontrolü.",
    dayanak:
      "Yapı işlerinde iş sağlığı ve güvenliği yönetmeliği, seviye farkı bulunan ve düşme riski olan yerlerde önce toplu koruma önlemlerinin alınmasını, bunun mümkün olmadığı hâllerde kişisel düşme durdurma sistemi kullanılmasını öngörür.",
    alanlar: [
      { tip: "satir", etiket: "İzin no", genislik: "ucte" },
      { tip: "satir", etiket: "Tarih", genislik: "ucte" },
      { tip: "satir", etiket: "Geçerlilik saati", genislik: "ucte" },
      { tip: "satir", etiket: "Çalışma yeri ve yüksekliği", genislik: "yarim" },
      { tip: "satir", etiket: "Yapılacak iş", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Çalışan adı soyadı",
          "Yüksekte çalışma eğitimi",
          "Sağlık raporu uygun",
          "İmza",
        ],
        satirSayisi: 5,
      },
      {
        tip: "tablo",
        basliklar: ["Çalışma öncesi kontrol", "Evet", "Hayır", "Uygun değil"],
        satirlar: [
          "Önce toplu koruma: kenar koruyucu (korkuluk) veya güvenlik ağı kuruldu",
          "İskele yetkili kişice kuruldu, kontrol edildi ve etiketlendi",
          "Uygun ankraj noktası veya yaşam hattı mevcut ve taşıma kapasitesi yeterli",
          "Paraşüt tipi emniyet kemeri ve bağlantı elemanı gözle kontrol edildi",
          "Merdiven / seyyar platform sağlam, sabitlendi, devrilme riski yok",
          "Altındaki bölge kapatıldı, uyarı levhası ve bariyer kondu",
          "Düşebilecek alet ve malzeme bağlandı veya emniyete alındı",
          "Hava koşulları uygun (rüzgâr, buzlanma, yağış)",
          "Enerjili elektrik hatlarına güvenli mesafe sağlandı",
          "Askıda kalma için kurtarma planı yapıldı, ekipmanı hazır",
        ],
        satirSayisi: 3,
      },
      {
        tip: "not",
        metin:
          "Emniyet kemeri tek başına önlem değildir: bağlanacak uygun bir ankraj noktası yoksa kemer koruma sağlamaz. Askıda kalma travmasına karşı kurtarma planı önceden yapılır.",
      },
      {
        tip: "imza",
        roller: ["İzni isteyen", "İş güvenliği uzmanı", "İzni veren"],
      },
    ],
  },
  {
    slug: "kapali-alan-calisma-izin-formu",
    ad: "Kapalı (dar) alan çalışma izin formu",
    ozet: "Tank, silo, rögar, kazan. Ölçüm yapılmadan girilen kapalı alan en ölümcül iş.",
    dayanak:
      "İşveren, boğucu veya parlayıcı ortam oluşabilen, girişi ve çıkışı sınırlı alanlarda çalışma öncesinde ölçüm yaptırmak, havalandırmayı sağlamak ve gözetim düzenini kurmakla yükümlüdür.",
    alanlar: [
      { tip: "satir", etiket: "İzin no", genislik: "ucte" },
      { tip: "satir", etiket: "Tarih", genislik: "ucte" },
      { tip: "satir", etiket: "Geçerlilik saati", genislik: "ucte" },
      {
        tip: "satir",
        etiket: "Kapalı alanın tanımı (tank / silo / rögar / kazan)",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Yapılacak iş", genislik: "yarim" },
      { tip: "satir", etiket: "Girecek kişi(ler)", genislik: "yarim" },
      { tip: "satir", etiket: "Dışarıda bekleyen gözcü", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Gaz ölçümü",
          "Sınır",
          "Giriş öncesi",
          "Ara ölçüm 1",
          "Ara ölçüm 2",
        ],
        satirlar: [
          "Oksijen (%)",
          "Patlayıcı gaz (LEL %)",
          "Karbon monoksit (ppm)",
          "Hidrojen sülfür (ppm)",
        ],
        satirSayisi: 2,
      },
      {
        tip: "tablo",
        basliklar: ["Çalışma öncesi kontrol", "Evet", "Hayır", "Uygun değil"],
        satirlar: [
          "Alan boşaltıldı, temizlendi ve kalıntı giderildi",
          "Besleme hatları ayrıldı veya kör tapalandı",
          "Enerji kesildi ve kilitlendi (LOTO formu dolduruldu)",
          "Zorlamalı havalandırma kuruldu ve çalışıyor",
          "Aydınlatma güvenli gerilimde, ekipman patlamaya karşı korumalı",
          "Giriş ve çıkış yolu açık, engel yok",
          "Gözcü ile haberleşme yöntemi belirlendi ve denendi",
          "Kurtarma ekipmanı hazır (üçayak, halat, solunum cihazı)",
          "Gözcü görevlendirildi ve sürekli dışarıda kalacağı tebliğ edildi",
          "Acil durumda aranacak kişi ve numara belirlendi",
        ],
        satirSayisi: 2,
      },
      {
        tip: "not",
        metin:
          "Gözcü hiçbir koşulda içeri girmez. Kapalı alan ölümlerinin büyük bölümü, kurtarmak için içeri giren ikinci kişidir.",
      },
      {
        tip: "imza",
        roller: [
          "Girecek çalışan",
          "Gözcü",
          "İş güvenliği uzmanı",
          "İzni veren",
        ],
      },
    ],
  },
  {
    slug: "enerji-kesme-kilitleme-loto-formu",
    ad: "Enerji kesme ve kilitleme (LOTO) formu",
    ozet: "Bakım sırasında makinenin beklenmedik şekilde çalışmasını önleyen kayıt.",
    dayanak:
      "İş ekipmanlarının kullanımında sağlık ve güvenlik şartları yönetmeliği, bakım ve onarım işlerinde ekipmanın enerjisinin kesilmesini ve çalışma süresince güvenliğin sağlanmasını öngörür.",
    alanlar: [
      { tip: "satir", etiket: "Ekipman / hat", genislik: "yarim" },
      { tip: "satir", etiket: "Yapılacak bakım", genislik: "yarim" },
      { tip: "satir", etiket: "Tarih", genislik: "ucte" },
      { tip: "satir", etiket: "Başlangıç saati", genislik: "ucte" },
      { tip: "satir", etiket: "Bitiş saati", genislik: "ucte" },
      {
        tip: "tablo",
        basliklar: [
          "Enerji türü",
          "Kesme noktası",
          "Kilit no",
          "Kilitleyen",
          "Açan",
          "Saat",
        ],
        satirSayisi: 7,
      },
      {
        tip: "not",
        metin:
          "Enerji türleri yalnız elektrik değildir: basınçlı hava, hidrolik, buhar, gaz, su, yay gerilimi ve yer çekimiyle düşebilecek asılı parça da enerjidir. Her biri ayrı ayrı emniyete alınır.",
      },
      {
        tip: "tablo",
        basliklar: ["Doğrulama adımı", "Yapan", "Saat"],
        satirSayisi: 4,
      },
      {
        tip: "not",
        metin:
          "Kilitlemeden sonra makinenin gerçekten durduğu, çalıştırma düğmesine basılarak doğrulanır. Kilidi takan kişi dışında kimse o kilidi açamaz.",
      },
      { tip: "imza", roller: ["Bakımı yapan", "Onaylayan"] },
    ],
  },
  {
    slug: "talimat-teblig-tutanagi",
    ad: "İSG talimatı tebliğ tutanağı",
    ozet: "Makine veya iş talimatının çalışana okutulup imzalatıldığını gösterir.",
    dayanak:
      "6331 sayılı Kanun, işverene çalışanları iş yerindeki riskler ve alınan tedbirler hakkında bilgilendirme yükümlülüğü getirir; bilgilendirmenin yapıldığı kayıtla ispatlanır.",
    alanlar: [
      { tip: "satir", etiket: "İş yeri / bölüm", genislik: "yarim" },
      { tip: "satir", etiket: "Tebliğ tarihi", genislik: "yarim" },
      { tip: "satir", etiket: "Talimatın adı ve numarası", genislik: "tam" },
      { tip: "metin", etiket: "Talimatın konusu (özet)", satir: 4 },
      {
        tip: "not",
        metin:
          "Aşağıda imzası bulunan çalışanlara yukarıda belirtilen talimat okunmuş, anlatılmış ve bir örneği verilmiştir. Talimata uymamanın doğurabileceği sonuçlar hakkında bilgilendirilmişlerdir.",
      },
      {
        tip: "tablo",
        basliklar: ["Sıra", "Adı soyadı", "Görevi", "Tarih", "İmza"],
        satirSayisi: 16,
      },
      { tip: "imza", roller: ["Tebliğ eden", "İş güvenliği uzmanı"] },
    ],
  },
  {
    slug: "ziyaretci-alt-isveren-isg-bilgilendirme",
    ad: "Ziyaretçi ve alt işveren İSG bilgilendirme formu",
    ozet: "Sahaya giren taşeron ve ziyaretçinin kurallardan haberdar edildiğinin kaydı.",
    dayanak:
      "6331 sayılı Kanun, aynı çalışma alanını paylaşan işverenlere iş sağlığı ve güvenliği önlemlerinde koordinasyon ve karşılıklı bilgilendirme yükümlülüğü getirir.",
    alanlar: [
      { tip: "satir", etiket: "Ana iş yeri", genislik: "yarim" },
      { tip: "satir", etiket: "Tarih", genislik: "yarim" },
      { tip: "satir", etiket: "Firma / ziyaretçi", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Giriş amacı ve çalışılacak bölge",
        genislik: "yarim",
      },
      {
        tip: "metin",
        etiket: "Bölgeye özgü riskler ve uyulacak kurallar",
        satir: 5,
      },
      {
        tip: "tablo",
        basliklar: [
          "Alt işverenden istenen belge",
          "Var",
          "Yok",
          "Geçerlilik tarihi",
        ],
        satirlar: [
          "SGK iş yeri tescil belgesi",
          "İSG-KATİP uzman ve hekim görevlendirmeleri",
          "Çalışanların İSG eğitim kayıtları",
          "Çalışanların sağlık raporları",
          "Tehlikeli işlerde mesleki yeterlilik belgeleri",
          "KKD zimmet kayıtları",
          "Kullanılacak ekipmanın periyodik kontrol raporları",
          "Risk değerlendirmesi (kendi faaliyeti için)",
        ],
        satirSayisi: 2,
      },
      {
        tip: "tablo",
        basliklar: [
          "Adı soyadı",
          "Firma",
          "Giriş saati",
          "Çıkış saati",
          "İmza",
        ],
        satirSayisi: 6,
      },
      { tip: "imza", roller: ["Bilgilendiren", "Alt işveren yetkilisi"] },
    ],
  },
  {
    slug: "kimyasal-envanteri-ve-msds-listesi",
    ad: "Kimyasal envanteri ve güvenlik bilgi formu listesi",
    ozet: "İş yerindeki her kimyasalın ve güvenlik bilgi formunun kaydı.",
    dayanak:
      "Kimyasal maddelerle çalışmalarda sağlık ve güvenlik önlemleri hakkındaki yönetmelik, işverene kullanılan kimyasalların envanterini çıkarma ve güvenlik bilgi formlarını temin edip bulundurma yükümlülüğü getirir.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "İş yeri / bölüm", genislik: "yarim" },
      { tip: "satir", etiket: "Güncelleme tarihi", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Ürün adı",
          "Üretici / tedarikçi",
          "Kullanım yeri",
          "Yıllık miktar",
          "Depolama yeri",
          "Zararlılık işareti",
          "GBF var mı",
          "GBF tarihi",
        ],
        satirSayisi: 12,
      },
      {
        tip: "not",
        metin:
          "Güvenlik bilgi formu (GBF) Türkçe olmak zorundadır ve tedarikçiden ücretsiz istenir. Form, kimyasalın kullanıldığı yerde çalışanın ulaşabileceği bir noktada bulundurulur; klasörde kilitli durması yeterli değildir.",
      },
      { tip: "imza", roller: ["Hazırlayan", "İş güvenliği uzmanı"] },
    ],
  },
  {
    slug: "saglik-gozetimi-takip-cizelgesi",
    ad: "Sağlık gözetimi takip çizelgesi",
    ozet: "Kimin muayenesi ne zaman doluyor? Periyodik muayenenin kaçırılmasını önler.",
    dayanak:
      "İşyeri hekimi ve diğer sağlık personelinin görevleri hakkındaki yönetmelik, çalışanların işe giriş ve periyodik muayenelerinin yapılmasını ve kayıtlarının tutulmasını öngörür.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "İş yeri unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "Tehlike sınıfı", genislik: "ucte" },
      { tip: "satir", etiket: "Çizelge tarihi", genislik: "ucte" },
      {
        tip: "tablo",
        basliklar: [
          "Adı soyadı",
          "Görevi",
          "İşe giriş tarihi",
          "İşe giriş muayenesi",
          "Maruziyet (gürültü/toz/kimyasal)",
          "Son periyodik muayene",
          "İstenen tetkikler",
          "Sonraki muayene",
        ],
        satirSayisi: 9,
      },
      {
        tip: "not",
        metin:
          "Periyodik muayene aralığı tehlike sınıfına göre belirlenir: az tehlikeli sınıfta en geç beş, tehlikeli sınıfta en geç üç, çok tehlikeli sınıfta en geç bir yılda bir. İşyeri hekimi, maruziyete göre daha kısa bir aralık belirleyebilir.",
      },
      { tip: "imza", roller: ["İşyeri hekimi", "İşveren / vekili"] },
    ],
  },
  {
    slug: "yangin-sondurucu-kontrol-cizelgesi",
    ad: "Yangın söndürücü ve yangın ekipmanı kontrol çizelgesi",
    ozet: "Söndürücülerin yerinde, dolu ve erişilebilir olduğunun aylık kaydı.",
    dayanak:
      "Binaların yangından korunması hakkındaki yönetmelik, yangın söndürme cihazlarının periyodik kontrol ve bakımının yaptırılmasını ve kolay görülebilir, erişilebilir yerlerde bulundurulmasını öngörür.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "İş yeri / bina", genislik: "yarim" },
      { tip: "satir", etiket: "Yıl", genislik: "ucte" },
      { tip: "satir", etiket: "Kontrolü yapan", genislik: "ucte" },
      {
        tip: "tablo",
        basliklar: [
          "Cihaz no / yeri",
          "Tür",
          "Kg",
          "Son dolum",
          "Oca",
          "Şub",
          "Mar",
          "Nis",
          "May",
          "Haz",
          "Tem",
          "Ağu",
          "Eyl",
          "Eki",
          "Kas",
          "Ara",
        ],
        satirSayisi: 9,
      },
      {
        tip: "not",
        metin:
          "Aylık kontrol: cihaz yerinde ve görünür mü, önü kapalı mı, basınç göstergesi yeşil bölgede mi, mühür ve pim sağlam mı, hortum çatlak mı, etiket okunur mu, askı aparatı sağlam mı. Uygun aya imza, uygunsuza çarpı atılır ve arkaya not düşülür.",
      },
      { tip: "imza", roller: ["Kontrolü yapan", "İş güvenliği uzmanı"] },
    ],
  },
  {
    slug: "arac-is-makinasi-gunluk-kontrol-formu",
    ad: "Araç ve iş makinası günlük kontrol formu",
    ozet: "Forklift, platform, ekskavatör için vardiya öncesi operatör kontrolü.",
    dayanak:
      "İş ekipmanlarının kullanımında sağlık ve güvenlik şartları yönetmeliği, ekipmanın günlük kullanım öncesi kontrolünü ve kullanacak kişinin yetkili ve eğitimli olmasını öngörür.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "Ekipman / plaka - seri no", genislik: "yarim" },
      { tip: "satir", etiket: "Ay / yıl", genislik: "ucte" },
      { tip: "satir", etiket: "Operatör (belge no)", genislik: "ucte" },
      {
        tip: "tablo",
        basliklar: [
          "Gün",
          "Fren",
          "Direksiyon",
          "Korna",
          "Far / flaşör",
          "Lastik",
          "Hidrolik kaçak",
          "Emniyet kemeri",
          "Devrilme koruması",
          "Yangın söndürücü",
          "Çatal / bom",
          "Operatör imza",
        ],
        satirSayisi: 10,
      },
      {
        tip: "not",
        metin:
          "Uygun olana işaret, uygun olmayana çarpı konur. Çarpı işaretlenen ekipman arıza giderilene kadar kullanılmaz ve anahtarı teslim alınır. Kiralık ekipmanda da bu kontrol, kullanan iş yerinin sorumluluğundadır.",
      },
      { tip: "imza", roller: ["Bölüm sorumlusu", "İş güvenliği uzmanı"] },
    ],
  },
  ,
  {
    slug: "calismaktan-kacinma-hakki-talep-formu",
    ad: "Çalışmaktan kaçınma hakkı talep formu",
    ozet: "Ciddi ve yakın tehlike durumunda çalışanın işi durdurma ve kaçınma hakkını talep etmesi.",
    dayanak:
      "6331 sayılı İş Sağlığı ve Güvenliği Kanunu Madde 13 - Çalışmaktan kaçınma hakkı kapsamında, çalışanın ciddi ve yakın tehlike durumunda İSG Kuruluna veya işverene başvurarak durumun tespitini ve gerekli tedbirlerin alınmasını talep etmesi hakkıdır.",
    alanlar: [
      { tip: "satir", etiket: "Tarih ve Saat", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Talep Eden Çalışan Adı Soyadı",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Görevi ve Bölümü", genislik: "yarim" },
      {
        tip: "metin-kutusu",
        etiket: "Tespit Edilen Ciddi ve Yakın Tehlikenin Açıklaması",
      },
      {
        tip: "coklu-secim",
        etiket: "Tehlikenin Türü",
        secenekler: [
          "Elektrik çarpması riski",
          "Yüksekten düşme riski",
          "Patlama/yangın tehlikesi",
          "Göçük tehlikesi",
          "Zehirli gaz/kimyasal maruziyeti",
          "Makine kapma/sıkışma riski",
          "Diğer",
        ],
      },
      {
        tip: "not",
        metin:
          "Kanuna göre, İSG Kurulu veya işveren talebi derhal incelemeli ve kararını çalışana yazılı olarak bildirmelidir. Çalışan, gerekli tedbirler alınana kadar çalışmaktan kaçınabilir.",
      },
      {
        tip: "metin-kutusu",
        etiket: "İSG Kurulu / İşveren Kararı ve Alınacak Önlemler",
      },
      {
        tip: "imza",
        roller: [
          "Talep eden çalışan",
          "İş güvenliği uzmanı",
          "İşveren / vekili",
        ],
      },
    ],
  },
  {
    slug: "gebe-ve-emziren-calisan-bildirim-ve-degerlendirme-formu",
    ad: "Gebe ve emziren çalışan bildirim ve değerlendirme formu",
    ozet: "Gebe veya emziren kadın çalışanların çalışma koşullarının risk değerlendirmesi.",
    dayanak:
      "Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik. İşveren, gebe veya emziren çalışanın işyerindeki maruziyetini ve çalışma koşullarını işyeri hekimi ile değerlendirmek zorundadır.",
    alanlar: [
      { tip: "satir", etiket: "Çalışan Adı Soyadı", genislik: "yarim" },
      { tip: "satir", etiket: "Bölümü ve Görevi", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Tahmini Doğum / Doğum Tarihi",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Hekim Kontrol Tarihi", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Risk Etmenleri Değerlendirmesi",
        secenekler: [
          "Fiziksel zorlanma (Ağır kaldırma vb.)",
          "Kimyasal madde maruziyeti (Kanserojen, mutajen)",
          "Titreşim veya gürültü",
          "Biyolojik riskler",
          "Aşırı sıcak/soğuk ortam",
          "Gece çalışması (Yasaklıdır)",
          "Radyasyon",
        ],
      },
      {
        tip: "metin-kutusu",
        etiket: "İşyeri Hekimi Değerlendirmesi ve Uyarılar",
      },
      {
        tip: "not",
        metin:
          "Gebe çalışanlar günde 7.5 saatten fazla ve gece vardiyasında çalıştırılamazlar. Gerekli durumlarda daha hafif işlere atanmaları sağlanmalıdır.",
      },
      { tip: "imza", roller: ["Çalışan", "İşyeri hekimi", "İşveren / vekili"] },
    ],
  },
  {
    slug: "kaldirma-ekipmanlari-gunluk-kontrol-formu",
    ad: "Kaldırma ekipmanları günlük kontrol formu",
    ozet: "Vinç, caraskal ve platform operatörleri için vardiya öncesi ekipman kontrolü.",
    dayanak:
      "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği. Kaldırma araçları periyodik muayene dışında, operatörü tarafından her kullanımdan önce görsel ve fonksiyonel teste tabi tutulmalıdır.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "Ekipman Tipi ve Sicil No", genislik: "yarim" },
      { tip: "satir", etiket: "Kontrol Ayı / Yılı", genislik: "ucte" },
      { tip: "satir", etiket: "Sorumlu Operatör", genislik: "ucte" },
      {
        tip: "tablo",
        basliklar: [
          "Tarih",
          "Halat/Zincir durumu",
          "Kanca ve mandal",
          "Fren sistemi",
          "Kumanda butonları",
          "Acil stop",
          "Yürüme yolları/Ray",
          "Limit siviçleri",
          "İkaz sesi/ışığı",
          "Operatör imza",
        ],
        satirSayisi: 10,
      },
      {
        tip: "not",
        metin:
          'Kontrol sonucu uygun olmayan ekipmanlar kullanılmamalı, durum derhal bakım birimine bildirilerek üzerine "ARIZALI KULLANMAYIN" etiketi asılmalıdır.',
      },
      { tip: "imza", roller: ["Operatör", "Bakım sorumlusu", "İSG uzmanı"] },
    ],
  },
  {
    slug: "iskele-kurulum-teslim-kontrol-tutanagi",
    ad: "İskele kurulum, teslim ve kontrol tutanağı",
    ozet: "Cephe iskelelerinin kurulum sonrası ve günlük kullanımı öncesi denetimi.",
    dayanak:
      "Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği Ek-4. İskeleler ancak sorumlu kişinin gözetimi altında kurulur, sökülür veya üzerinde önemli değişiklik yapılır. Kullanıma alınmadan önce kontrol edilip teslim tutanağı düzenlenmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Kurulum Tarihi", genislik: "yarim" },
      { tip: "satir", etiket: "İskelenin Yeri / Cephesi", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "İskele Tipi (Flanşlı, H vb.)",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Maksimum Taşıma Kapasitesi", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Kurulum Kontrol Kriterleri",
        secenekler: [
          "Zemin düzeltildi ve sağlam taban plakaları (krikolar) yerleştirildi.",
          "Ankrajlar (duvar bağlantıları) statik hesaba uygun yapıldı.",
          "Korkuluklar (ana, ara ve topuk levhası) tam.",
          "Çalışma platformlarında (kalaslar) boşluk yok.",
          "İskele çaprazları tam ve güvenli.",
          "İskele içi güvenli geçiş merdiveni kuruldu.",
          "Yeşil (Kullanıma Uygun) etiketi asıldı.",
        ],
      },
      { tip: "metin-kutusu", etiket: "Eksiklikler veya Ek Açıklamalar" },
      {
        tip: "imza",
        roller: [
          "İskele kurucusu (Taşeron)",
          "İnşaat mühendisi / Tekniker",
          "İSG uzmanı",
        ],
      },
    ],
  },
  {
    slug: "kazi-isleri-calisma-izin-formu",
    ad: "Kazı işleri çalışma izin formu",
    ozet: "Derin kazılarda göçük, altyapı hattı ve güvenli geçişler için izin.",
    dayanak:
      "Yapı İşlerinde İSG Yönetmeliği. Kazı işleri, yetkili kişinin gözetimi altında yapılır. Altyapı tesisleri (elektrik, gaz vb.) araştırılır, iksa ve şevlendirme yapılarak göçük riski önlenir.",
    alanlar: [
      { tip: "satir", etiket: "Kazı Yapılacak Bölge", genislik: "yarim" },
      { tip: "satir", etiket: "Derinlik ve Kazı Tipi", genislik: "yarim" },
      { tip: "satir", etiket: "Başlangıç Tarihi/Saati", genislik: "ucte" },
      { tip: "satir", etiket: "Bitiş Tarihi/Saati", genislik: "ucte" },
      {
        tip: "coklu-secim",
        etiket: "Altyapı Kontrolleri",
        secenekler: [
          "Elektrik hattı kontrolü yapıldı.",
          "Doğalgaz / boru hattı kontrolü yapıldı.",
          "Su / kanalizasyon hattı kontrolü yapıldı.",
          "Haberleşme hattı kontrolü yapıldı.",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Güvenlik Önlemleri",
        secenekler: [
          "Şevli (eğimli) kazı yapılacak.",
          "İksa (destekleme) kullanılacak.",
          "Kazı çevresi sert bariyerlerle çevrildi.",
          "Derinlik 1.5m üstü olduğu için güvenli iniş/çıkış merdiveni kondu.",
          "Çıkan hafriyat kenardan en az 1 metre uzağa dökülecek.",
        ],
      },
      { tip: "metin-kutusu", etiket: "Notlar ve Özel Durumlar" },
      {
        tip: "imza",
        roller: [
          "Kazı sorumlusu / Taşeron",
          "Harita/Saha mühendisi",
          "İSG uzmanı",
        ],
      },
    ],
  },
  {
    slug: "elektrikli-el-aletleri-kontrol-formu",
    ad: "Elektrikli el aletleri ve seyyar kablo kontrol formu",
    ozet: "Taşlama, matkap ve uzatma kablolarının elektrik çarpma riskine karşı kontrolü.",
    dayanak:
      "İş Ekipmanlarının Kullanımında İSG Şartları Yönetmeliği. Elektrikli el aletleri, kablolar ve fiş-priz bağlantıları izolasyon hatalarına karşı periyodik olarak ve kullanımdan önce görsel olarak kontrol edilmelidir.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "Proje / Bölüm", genislik: "yarim" },
      { tip: "satir", etiket: "Kontrol Ayı", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "No",
          "Ekipman cinsi (Matkap, Spiral vb.)",
          "Zimmetli kişi",
          "Gövde kırığı/çatlağı",
          "Kablo ve izolasyon hasarı",
          "Fiş/priz bağlantısı uygunluğu",
          "Koruyucu siperlik durumu",
          "Test butonu/Kaçak akım durumu",
          "Sonuç (Uygun/Değil)",
          "Kontrolör imza",
        ],
        satirSayisi: 8,
      },
      {
        tip: "not",
        metin:
          "Kablolarda bantla ek yapılması yasaktır. İzolasyonu soyulmuş, gövdesi kırık ekipmanlar derhal hurdaya ayrılmalı veya tamire gönderilmelidir.",
      },
      { tip: "imza", roller: ["Elektrik teknikeri/Sorumlusu", "İSG uzmanı"] },
    ],
  },
  {
    slug: "gece-calismasi-saglik-bildirim-formu",
    ad: "Gece çalışması ve vardiyalı çalışma sağlık bildirim formu",
    ozet: "Çalışanların gece vardiyasında çalışmasında sakınca olup olmadığının hekim raporuyla tespiti.",
    dayanak:
      "İş Kanunu Madde 69 ve Postalar Halinde İşçi Çalıştırılarak Yürütülen İşlerde Çalışmalara İlişkin Yönetmelik. Gece çalıştırılacak işçilerin sağlık durumlarının gece çalışmasına uygun olduğu hekim raporuyla belgelenmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Çalışanın Adı Soyadı", genislik: "yarim" },
      { tip: "satir", etiket: "Doğum Tarihi", genislik: "yarim" },
      { tip: "satir", etiket: "Görevi", genislik: "yarim" },
      { tip: "satir", etiket: "Kronik Hastalığı", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Hekim Değerlendirmesi",
        secenekler: [
          "Gece postalarında çalışmasında sakınca yoktur.",
          "Sağlık durumu sebebiyle sadece gündüz postasında çalışabilir.",
          "Süreli olarak gece postasından muaf tutulmalıdır (Gebe vb.)",
        ],
      },
      { tip: "metin-kutusu", etiket: "Ek Görüş ve Öneriler" },
      {
        tip: "not",
        metin:
          "Gece çalışması 20:00 - 06:00 aralığını kapsar ve 7.5 saati geçemez (özel sektör ve onaylı güvenlik işleri hariç).",
      },
      {
        tip: "imza",
        roller: [
          "Çalışan (Kabul/Beyan)",
          "İşyeri hekimi",
          "İşveren / İK yetkilisi",
        ],
      },
    ],
  },
  {
    slug: "isg-ihlal-ve-uyari-tutanagi",
    ad: "İSG kuralları ihlal ve uyarı tutanağı",
    ozet: "Saha denetimlerinde kurallara (KKD kullanımı, emniyet kemeri vb.) uymayan çalışanların uyarılması.",
    dayanak:
      "İş Kanunu ve 6331 sayılı İSG Kanunu Madde 19 - Çalışanların Yükümlülükleri. Çalışanlar işyerinde İSG kurallarına, talimatlara uymak ve KKD leri doğru kullanmakla yükümlüdür.",
    alanlar: [
      { tip: "satir", etiket: "Tarih ve Saat", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "İhlal Yapan Çalışan Adı Soyadı",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Çalıştığı Birim / Taşeron", genislik: "yarim" },
      { tip: "satir", etiket: "Uyarı Derecesi", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "İhlal Edilen Kural",
        secenekler: [
          "Baret kullanmamak",
          "Çelik burunlu ayakkabı giymemek",
          "Yüksekte çalışmada emniyet kemeri takmamak",
          "İzinsiz tehlikeli alana girmek / bariyeri aşmak",
          "Makine koruyucusunu çıkarmak",
          "LOTO (Etiketleme) kuralına uymamak",
          "İşyerinde araç hız sınırını aşmak",
        ],
      },
      { tip: "metin-kutusu", etiket: "İhlalin Ayrıntısı ve Olası Tehlikeler" },
      { tip: "metin-kutusu", etiket: "Çalışanın Savunması / Açıklaması" },
      {
        tip: "not",
        metin:
          "Bu tutanak çalışanın özlük dosyasına işlenecektir. Tekrarlayan veya hayati tehlike yaratan ihlaller, İş Kanunu Madde 25/II-ı bendi gereği haklı fesih sebebi sayılabilir.",
      },
      {
        tip: "imza",
        roller: [
          "İhlal yapan çalışan",
          "Gözlemleyen yetkili / İSG uzmanı",
          "Bölüm amiri",
        ],
      },
    ],
  },
  {
    slug: "is-makinesi-operator-yetkilendirme",
    ad: "İş makinesi operatörü görevlendirme tutanağı",
    ozet: "Ehliyeti/belgesi olan operatöre, şirket içi makine kullanım yetkisi verilmesi.",
    dayanak:
      "Makina Emniyeti Yönetmeliği ve İSG Kanunu. Operatörler ilgili makine (forklift, ekskavatör, manlift vb.) için Milli Eğitim Bakanlığı onaylı belgeye sahip olmalı ve işveren tarafından yazılı görevlendirilmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Tarih", genislik: "yarim" },
      { tip: "satir", etiket: "Operatör Adı Soyadı", genislik: "yarim" },
      { tip: "satir", etiket: "Kullanacağı Ekipman Tipi", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Belge Türü ve Belge No (G Sınıfı / MEB)",
        genislik: "yarim",
      },
      {
        tip: "coklu-secim",
        etiket: "Yetkilendirme Kapsamı",
        secenekler: [
          "Sadece fabrika içi (kapalı alan) kullanıma yetkilidir.",
          "Şantiye sahasında kullanıma yetkilidir.",
          "Kara yoluna çıkma izni verilmiştir.",
        ],
      },
      { tip: "metin-kutusu", etiket: "Operatörün Taahhüdü" },
      {
        tip: "not",
        metin:
          'Operatör: "Tarafıma teslim edilen makineyi hız kurallarına, kapasite sınırlarına uyarak kullanacağımı; yayalara öncelik vereceğimi; alkol/ilaç etkisinde kullanmayacağımı ve günlük kontrolleri yapacağımı taahhüt ederim."',
      },
      {
        tip: "imza",
        roller: ["Operatör", "Lojistik/Ekipman Sorumlusu", "İşveren / vekili"],
      },
    ],
  },
  {
    slug: "elle-tasima-isleri-risk-formu",
    ad: "Elle taşıma işleri risk değerlendirme formu",
    ozet: "Ergonomik zorlanma, bel ve sırt incinmelerine karşı elle taşıma limitlerinin tespiti.",
    dayanak:
      "Elle Taşıma İşleri Yönetmeliği. Yükün özellikleri, fiziksel güç gereksinimi ve çalışma ortamının özellikleri dikkate alınarak kas ve iskelet sistemi rahatsızlıkları riski değerlendirilmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Değerlendirilen İş/Görev", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "Yükün Ortalama Ağırlığı (kg)",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Taşıma Mesafesi ve Sıklığı", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Yükün Özellikleri (Riskler)",
        secenekler: [
          "Çok ağır veya çok büyük",
          "Kaba veya kavranması zor",
          "Dengesiz, içindekiler yer değiştiriyor",
          "Vücuttan uzakta tutulmayı gerektiriyor",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Çalışma Ortamı (Riskler)",
        secenekler: [
          "Çalışma alanı yetersiz",
          "Zemin kaygan veya engebeli",
          "Ortam ısısı uygun değil (çok sıcak/soğuk)",
          "Zemin veya zemin seviyesi değişken (merdiven vb.)",
        ],
      },
      {
        tip: "metin-kutusu",
        etiket:
          "Alınması Gereken İyileştirme Önlemleri (Mekanik taşıyıcı, iki kişi kaldırma vb.)",
      },
      {
        tip: "imza",
        roller: ["Bölüm sorumlusu", "İşyeri hekimi", "İSG uzmanı"],
      },
    ],
  },
  {
    slug: "ekranli-araclar-ofis-ergonomisi-formu",
    ad: "Ekranlı araçlarla çalışma gözlem formu",
    ozet: "Ofis çalışanlarının ekran, klavye, fare ve koltuk ergonomisinin değerlendirilmesi.",
    dayanak:
      "Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik. Göz yorgunluğu ve kas-iskelet rahatsızlıklarını önlemek için çalışma istasyonlarının (masa, sandalye, monitör) tasarımı incelenmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Kullanıcının Adı Soyadı", genislik: "yarim" },
      { tip: "satir", etiket: "Bölümü (Finans, İK vb.)", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Monitör ve Klavye Durumu",
        secenekler: [
          "Ekran göz hizasında (üst kenarı)",
          "Ekranda parlama ve yansıma yok",
          "Klavye önünde bilek desteği için yeterli boşluk var",
          "Mouse kol mesafesinde rahat kullanılıyor",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Çalışma Koltuğu ve Postür",
        secenekler: [
          "Koltuk yüksekliği ayarlanabilir",
          "Koltuk sırtlığı bel kavisini destekliyor",
          "Ayaklar yere veya ayak desteğine tam basıyor",
          "Dizler ve kalça 90 derece açıda",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Ortam Şartları",
        secenekler: [
          "Aydınlatma gözü yormuyor (yeterli ve direk değil)",
          "Ofis sıcaklığı ve havalandırması uygun",
          "Gürültü rahatsız edici boyutta değil",
        ],
      },
      {
        tip: "metin-kutusu",
        etiket:
          "Eksiklikler veya Donanım İhtiyacı (Ayak desteği, monitör yükseltici vb.)",
      },
      { tip: "imza", roller: ["Çalışan", "İSG uzmanı / Hekim"] },
    ],
  },
  {
    slug: "saglik-ve-guvenlik-isaretleri-kontrol-formu",
    ad: "Sağlık ve güvenlik işaretleri kontrol formu",
    ozet: "Saha levhalarının (yasaklayıcı, uyarıcı, emredici, acil durum) uygunluk denetimi.",
    dayanak:
      "Sağlık ve Güvenlik İşaretleri Yönetmeliği. Levhaların görünürlüğü, standart renk/şekil uyumu ve ışıklı/sesli ikazların çalışırlığı kontrol edilmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Bölüm / Saha", genislik: "yarim" },
      { tip: "satir", etiket: "Kontrol Tarihi", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Yasaklayıcı İşaretler (Kırmızı Yuvarlak)",
        secenekler: [
          '"Sigara İçilmez" levhaları yeterli ve görünür',
          '"Ateşle Yaklaşma" levhaları (parlayıcı ortamlarda) mevcut',
          '"Yetkisiz Giremez" vb. uyarılar tam',
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Emredici ve Uyarıcı İşaretler",
        secenekler: [
          "KKD kullanım emredici (mavi) levhaları alan girişlerinde asılı",
          "Dikkat/Tehlike uyarı (sarı üçgen) işaretleri tehlikeye uygun",
          "Forklift / Kesişen yol işaretlemeleri yeterli",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Acil Çıkış ve Yönlendirmeler (Yeşil)",
        secenekler: [
          "Acil çıkış tabelaları karanlıkta parlayan (fosforlu) veya kendinden aydınlatmalı",
          "Kaçış yollarını gösteren yön okları eksiksiz",
          "Yangın tüpü ve buton yerlerini gösteren kırmızı kare levhalar mevcut",
        ],
      },
      {
        tip: "metin-kutusu",
        etiket: "Yıpranmış / Değişmesi Gereken veya Eksik Levhalar",
      },
      { tip: "imza", roller: ["Saha sorumlusu", "İSG uzmanı"] },
    ],
  },
  {
    slug: "ilkyardim-ecza-dolabi-aylik-kontrol-formu",
    ad: "İlkyardım malzemeleri (ecza dolabı) aylık kontrol formu",
    ozet: "Ecza dolabındaki malzemelerin miat ve eksiklik kontrolü.",
    dayanak:
      "İlkyardım Yönetmeliği. İşyerlerinde ilkyardımcı bulundurulması ve bu kişilerin kullanacağı standart ilkyardım malzemelerinin eksiksiz ve son kullanma tarihleri geçmemiş olarak tutulması zorunludur.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "Dolabın Bulunduğu Yer", genislik: "yarim" },
      { tip: "satir", etiket: "Sorumlu İlkyardımcı", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Malzeme Adı (Sargı bezi, yara bandı vb.)",
          "Olması Gereken Miktar",
          "Mevcut Miktar",
          "SKT (Son Kullanma Tarihi)",
          "Durumu / Eklenecek",
          "Kontrol Eden İmza",
        ],
        satirSayisi: 8,
      },
      {
        tip: "not",
        metin:
          "Kanuna göre ecza dolaplarında hap, merhem, ağrı kesici vb. İLAÇ bulundurulması yasaktır; sadece pansuman ve ilkyardım malzemeleri olmalıdır.",
      },
      {
        tip: "imza",
        roller: ["Sertifikalı İlkyardımcı", "İşyeri hekimi / DSP"],
      },
    ],
  },
  {
    slug: "ex-proof-ekipman-uygunluk-formu",
    ad: "Patlayıcı ortam (Ex-Proof) ekipman uygunluk ve gözlem formu",
    ozet: "Yanıcı kimyasal, toz veya gaz barındıran alanlardaki ekipman güvenliği.",
    dayanak:
      "Muhtemel Patlayıcı Ortamda Kullanılan Teçhizat ve Koruyucu Sistemler İle İlgili Yönetmelik (ATEX) ve PKD. Ex-Proof cihazların kategori uygunluğu ve gövde bütünlüğü periyodik kontrol edilmelidir.",
    alanlar: [
      {
        tip: "satir",
        etiket: "Bölge / Zon Sınıfı (Zone 0, 1, 2)",
        genislik: "yarim",
      },
      {
        tip: "satir",
        etiket: "Ekipman Tipi (Pano, motor, lamba vb.)",
        genislik: "yarim",
      },
      {
        tip: "satir",
        etiket: "ATEX Sertifika No / İşareti",
        genislik: "yarim",
      },
      {
        tip: "coklu-secim",
        etiket: "Gözlem Kriterleri",
        secenekler: [
          "Ekipman üzerindeki Ex-proof etiketi okunur durumda.",
          "Gövdede veya cam korumalarda çatlak, kırık yok.",
          "Kablo rakorları (giriş rekorları) sıkı, gevşeme yok.",
          "Ekipmanın topraklaması bağlanmış ve sağlam.",
          "İçerisinde toz/nem veya korozyon birikimi gözlenmedi.",
        ],
      },
      { tip: "metin-kutusu", etiket: "Saptanan İhlaller veya Uygunsuzluklar" },
      {
        tip: "imza",
        roller: ["Elektrik bakım sorumlusu", "İSG uzmanı / PKD hazırlayıcısı"],
      },
    ],
  },
  {
    slug: "bascli-tup-depolama-ve-tasima-kontrol",
    ad: "Basınçlı tüp depolama ve taşıma kontrol formu",
    ozet: "Oksijen, asetilen, argon, LPG gibi basınçlı gaz tüplerinin güvenliği.",
    dayanak:
      "İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve Güvenlik Önlemlerine İlişkin Yönetmelik. Tüpler yanıcı ve yakıcı olarak ayrı depolanmalı, sabitlenmeli, güneşten korunmalı ve dik taşınmalıdır.",
    alanlar: [
      {
        tip: "satir",
        etiket: "Denetlenen Alan (Tüp parkı / Atölye)",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Tarih", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Depolama Alanı Kuralları",
        secenekler: [
          "Dolu ve boş tüpler ayrı alanlarda depolanmış levhalandırılmış.",
          "Yanıcı (Asetilen, LPG) ve Yakıcı (Oksijen) tüpler arasında en az 6m mesafe veya yanmaz bölme duvarı var.",
          "Depo alanı havadar ve direk güneş ışığından korunuyor.",
          "Depo alanında uygun tipte yangın söndürücü var.",
          '"Sigara İçilmez" / "Ateşle Yaklaşma" uyarı levhaları asılı.',
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Tüp Fiziksel ve Taşıma Kuralları",
        secenekler: [
          "Tüpler dik konumda zincir, kelepçe veya kafesle devrilmeye karşı sabitlenmiş.",
          "Kullanılmayan tüplerin vana koruyucu başlıkları (kapakları) takılı.",
          "Taşıma işlemi sürükleyerek değil, tekerlekli tüp arabası ile yapılıyor.",
          "Hortum bağlantılarında (Oksijen/Asetilen) alev geri tepme ventili (check-valve) takılı.",
        ],
      },
      { tip: "metin-kutusu", etiket: "Uygunsuz Görülen Tüpler veya Durumlar" },
      { tip: "imza", roller: ["Saha şefi", "İSG uzmanı"] },
    ],
  },
  {
    slug: "isyeri-yemekhane-tuvalet-hijyen-formu",
    ad: "İşyeri yemekhane, tuvalet ve hijyen kontrol formu",
    ozet: "Sosyal tesislerin, yemekhanelerin ve lavaboların sağlık/hijyen şartlarının denetimi.",
    dayanak:
      "Umumi Hıfzıssıhha Kanunu ve İSG Yönetmelikleri. İşverenler, çalışanların biyolojik risklerden korunması için tuvalet, duş, yemekhane ve dinlenme alanlarında temizlik ve hijyen şartlarını sağlamakla yükümlüdür.",
    alanlar: [
      {
        tip: "satir",
        etiket: "Kontrol Edilen Bölüm (Yemekhane, Tuvalet, Soyunma Odası vb.)",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Kontrol Tarihi ve Saati", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Tuvalet ve Soyunma Odası Kontrolü",
        secenekler: [
          "Zemin ve duvarlar temiz, kuru ve sağlam.",
          "Tuvalet kağıdı, sıvı sabun ve kağıt havlu eksiksiz.",
          "Çöp kutuları kapaklı ve poşetli.",
          "Havalandırma çalışıyor, kötü koku yok.",
          "Dolaplar temiz, kirli/temiz kıyafet ayrımı yapılmış.",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Yemekhane Kontrolü",
        secenekler: [
          "Masalar ve zeminler temizlenmiş.",
          "Gıda atıkları uygun kapalı çöp kutularında tutuluyor.",
          "Personelde (varsa) bone, eldiven ve temiz kıyafet kullanılıyor.",
          "İçme suyu sebili temizliği yapılmış, damacana kapağı kapalı.",
          "Pencerelerde (varsa) sineklik mevcut.",
        ],
      },
      {
        tip: "metin-kutusu",
        etiket: "Temizlik Sorumlusuna Uyarılar / Eksikler",
      },
      {
        tip: "imza",
        roller: [
          "Temizlik sorumlusu",
          "İdari işler uzmanı",
          "İşyeri hekimi / DSP",
        ],
      },
    ],
  },
  {
    slug: "alt-isveren-saha-denetim-formu",
    ad: "Alt işveren (Taşeron) İSG saha denetim formu",
    ozet: "Asıl işverenin (ana firmanın), alt işveren (taşeron) firmasını sahada denetlemesi.",
    dayanak:
      "İş Kanunu 2. Madde ve İSG Kanunu. Asıl işveren, alt işverenlerin İSG kurallarına uyup uymadığını denetlemekle müteselsilen sorumludur ve uygunsuzluklarda işi durdurabilir.",
    alanlar: [
      { tip: "satir", etiket: "Alt İşveren (Firma) Unvanı", genislik: "yarim" },
      { tip: "satir", etiket: "Yaptığı İş / Proje Adı", genislik: "yarim" },
      { tip: "satir", etiket: "Alt İşveren Yetkilisi", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Evrak ve Organizasyon Kontrolü",
        secenekler: [
          "Çalışanların mesleki yeterlilik belgeleri mevcut.",
          "İSG eğitim belgeleri, sağlık raporları tam ve güncel.",
          "Risk değerlendirmesi mevcut ve sahaya uygun.",
          "Kendi İSG uzmanı/hekimi hizmeti var ve iletişimde.",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Saha Güvenliği Kontrolü",
        secenekler: [
          "Çalışanlar işin gerektirdiği baret, gözlük, kemer vb. KKD leri kullanıyor.",
          "Kullandıkları ekipman ve makinelerin periyodik kontrolleri var.",
          "Çalışma alanında çevre düzeni ve temizliği (housekeeping) sağlanmış.",
          "İzinsiz riskli (yüksekte/sıcak/kapalı) çalışmaya girişilmiyor.",
        ],
      },
      {
        tip: "metin-kutusu",
        etiket: "Saptanan İhlaller (DÖF açılması gereken durumlar)",
      },
      {
        tip: "imza",
        roller: ["Alt İşveren Yetkilisi", "Asıl İşveren İSG Uzmanı / Şefi"],
      },
    ],
  },
  {
    slug: "titresim-ve-gurultu-maruziyeti-rotasyon-formu",
    ad: "Titreşim ve gürültü maruziyeti rotasyon kayıt formu",
    ozet: "Yüksek gürültü ve vibrasyon yayan aletlerle (kırıcı/delici) çalışanların süre kısıtlaması takibi.",
    dayanak:
      "Çalışanların Gürültü ve Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelikler. Maruziyet sınır değerlerinin aşılmaması için dinlenme süreleri belirlenmeli ve personel rotasyonu yapılmalıdır.",
    yatay: true,
    alanlar: [
      { tip: "satir", etiket: "Tarih", genislik: "ucte" },
      {
        tip: "satir",
        etiket: "Ekipman Tipi (Kırıcı tabanca, pres vb.)",
        genislik: "ucte",
      },
      {
        tip: "satir",
        etiket: "Maruziyet Sınır Süresi (Örn: Max 2 saat/gün)",
        genislik: "ucte",
      },
      {
        tip: "tablo",
        basliklar: [
          "Çalışan Adı Soyadı",
          "Başlama Saati",
          "Bitiş Saati",
          "Kullandığı KKD (Kulaklık/Titreşim eldiveni)",
          "Ara Dinlenme Süresi",
          "Çalışan İmza",
          "Amir İmza",
        ],
        satirSayisi: 6,
      },
      {
        tip: "not",
        metin:
          "Günlük maruziyet sınır değeri, KKD kullanılmasına rağmen aşılamaz. Sınır değere ulaşılan personel o gün bu ekipmanla tekrar çalıştırılamaz.",
      },
      { tip: "imza", roller: ["Vardiya / Saha amiri", "İSG uzmanı"] },
    ],
  },
  {
    slug: "kaynak-isleri-gunluk-kontrol-formu",
    ad: "Kaynak ve kesme makinaları günlük kontrol formu",
    ozet: "Oksi-gaz, elektrik ark veya TIG/MIG kaynak makinelerinin yangın ve patlama riski kontrolü.",
    dayanak:
      "İş Ekipmanları Yönetmeliği ve Binaların Yangından Korunması Hakkında Yönetmelik. Kaynak işleri potansiyel yangın kaynağıdır. Hem makinenin elektrik aksamı hem de gaz hortumları kontrol edilmelidir.",
    alanlar: [
      { tip: "satir", etiket: "Makine Tipi ve Kodu", genislik: "yarim" },
      { tip: "satir", etiket: "Kaynakçı Adı Soyadı", genislik: "yarim" },
      {
        tip: "coklu-secim",
        etiket: "Elektrik Ark Kaynağı Kontrolü",
        secenekler: [
          "Pense, kablolar ve topraklama pensesi izolasyonu sağlam.",
          "Makinenin fiş-priz ve şase bağlantılarında yanık/gevşeklik yok.",
          "Makinenin fanı çalışıyor ve üzeri örtülmemiş.",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Oksi-Gaz (Asetilen) Kaynağı Kontrolü",
        secenekler: [
          "Hortumlarda çatlak, sızıntı, bantla yama yok (sabun köpüğü kontrolü).",
          "Şalumo (üfleç) ve regülatör/saatler düzgün çalışıyor.",
          "Alev geri tepme valfleri (hem şalumoda hem tüp çıkışında) takılı.",
        ],
      },
      {
        tip: "coklu-secim",
        etiket: "Çevre ve KKD Kontrolü",
        secenekler: [
          "Kaynak yapılacak alanın 10m çevresinde yanıcı madde yok.",
          "Alana özel 6 kg lık Kuru Kimyevi Tozlu (KKT) yangın tüpü getirildi.",
          "Kaynak siperliği (maskesi), yanmaz eldiven, kaynakçı önlüğü kullanılıyor.",
        ],
      },
      { tip: "metin-kutusu", etiket: "Arıza Bildirimi" },
      { tip: "imza", roller: ["Kaynakçı ustası", "Bakım şefi"] },
    ],
  },
  {
    slug: "is-kazasi-sahit-ifade-tutanagi",
    ad: "İş kazası şahit (görgü tanığı) ifade tutanağı",
    ozet: "Bir iş kazası sonrasında olayı görenlerin ıslak imzalı ifadelerinin hukuki arşiv için alınması.",
    dayanak:
      "5510 sayılı SGK Kanunu ve 6331 sayılı İSG Kanunu. İş kazalarının incelenmesi esnasında, olayın kök nedenini belirlemek ve SGK/Bakanlık soruşturmalarına kanıt sunmak amacıyla şahit ifadeleri yazılı alınmalıdır.",
    alanlar: [
      { tip: "satir", etiket: "Kazanın Tarihi ve Saati", genislik: "yarim" },
      { tip: "satir", etiket: "Kazanın Yeri / Bölümü", genislik: "yarim" },
      {
        tip: "satir",
        etiket: "İfade Veren Şahit Adı Soyadı",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Şahidin Görevi", genislik: "yarim" },
      { tip: "satir", etiket: "Şahidin TC Kimlik Numarası", genislik: "yarim" },
      { tip: "satir", etiket: "Kazazedenin Adı Soyadı", genislik: "yarim" },
      {
        tip: "metin-kutusu",
        etiket: "Kaza Anında Neredeydiniz ve Ne Yapıyordunuz?",
      },
      {
        tip: "metin-kutusu",
        etiket:
          "Kaza Nasıl Gerçekleşti? (Ayrıntılı olarak, kendi cümlelerinizle)",
      },
      {
        tip: "metin-kutusu",
        etiket: "Kaza Sonrası İlk Müdahale / Ne Yapıldı?",
      },
      {
        tip: "not",
        metin:
          "İşbu tutanak, ifade sahibinin kendi hür iradesi ve beyanları doğrultusunda, hiçbir baskı altında kalmadan yazılmış ve imza altına alınmıştır.",
      },
      {
        tip: "imza",
        roller: [
          "İfade Veren Şahit",
          "Tutanak Tutucu / İSG Uzmanı",
          "Şirket Yetkilisi",
        ],
      },
    ],
  },
  {
    slug: "kanserojen-ve-mutajen-maddelerle-calisma-kayit-formu",
    ad: "Kanserojen ve mutajen maddelerle çalışma kayıt formu",
    ozet: "Maruz kalan personelin isimleri, maruziyet süreleri ve miktarlarının kayıt altına alınması.",
    dayanak:
      "Kanserojen veya Mutajen Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Yönetmeliği Madde 13. İşveren, kanserojen veya mutajen maddelere maruz kalan çalışanların güncel listesini ve maruziyet miktarını tutmakla yükümlüdür. (Bu kayıtlar 40 yıl saklanmalıdır).",
    yatay: true,
    alanlar: [
      {
        tip: "satir",
        etiket: "Kullanılan Kimyasal/Madde Adı",
        genislik: "yarim",
      },
      { tip: "satir", etiket: "Kayıt Yılı / Ayı", genislik: "yarim" },
      {
        tip: "tablo",
        basliklar: [
          "Sıra No",
          "Çalışan Adı Soyadı",
          "TC Kimlik No",
          "Görevi / Çalışma Alanı",
          "Maruziyet Türü (Soluma/Temas)",
          "Tahmini Süre/Miktar",
          "Kullandığı KKD",
          "Çalışan İmza",
        ],
        satirSayisi: 8,
      },
      {
        tip: "not",
        metin:
          "ÖNEMLİ: Yönetmelik gereği, bu formdaki kayıtlar (çalışanın işten ayrılması dahil) tıbbi/mesleki sır kurallarına uyularak EN AZ 40 YIL SAKLANMALIDIR.",
      },
      {
        tip: "imza",
        roller: ["İşyeri Hekimi", "İSG Uzmanı", "İşveren / Vekili"],
      },
    ],
  },
];

export const formSayisi = formlar.length;
