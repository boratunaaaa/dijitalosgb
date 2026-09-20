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
  | { tip: 'satir'; etiket: string; genislik?: 'tam' | 'yarim' | 'ucte' }
  | {
      tip: 'tablo';
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
  | { tip: 'metin'; etiket: string; satir: number }
  | { tip: 'imza'; roller: string[] }
  | { tip: 'not'; metin: string };

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
    slug: 'ramak-kala-bildirim-formu',
    ad: 'Ramak kala olay bildirim formu',
    ozet: 'Yaralanmayla sonuçlanmayan ama sonuçlanabilecek olayların kaydı. En ucuz öğrenme aracı.',
    dayanak:
      '6331 sayılı Kanun, işverene ramak kala olayları için inceleme yapıp rapor düzenleme ve bu kayıtları tutma yükümlülüğü getirir.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri / bölüm', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Olay tarihi ve saati', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Bildirimi yapan', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Olay yeri', genislik: 'yarim' },
      { tip: 'metin', etiket: 'Olay nasıl gelişti? (ne yapılıyordu, ne oldu)', satir: 5 },
      { tip: 'metin', etiket: 'Yaralanma olsaydı muhtemel sonuç ne olurdu?', satir: 3 },
      { tip: 'metin', etiket: 'Kök neden değerlendirmesi', satir: 4 },
      {
        tip: 'tablo',
        basliklar: ['Alınacak önlem', 'Sorumlu', 'Termin', 'Durum'],
        satirSayisi: 4,
      },
      { tip: 'imza', roller: ['Bildirimi yapan', 'İş güvenliği uzmanı', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'kkd-zimmet-formu',
    ad: 'Kişisel koruyucu donanım zimmet formu',
    ozet: 'Çalışana teslim edilen KKD’nin kaydı. Denetimde ve kaza sonrası en çok istenen belgelerden.',
    dayanak:
      'Kişisel koruyucu donanımların iş yerlerinde kullanılması hakkındaki yönetmelik, işverene KKD’yi ücretsiz sağlama, kullanımını sağlama ve kayıt tutma yükümlülüğü getirir.',
    alanlar: [
      { tip: 'satir', etiket: 'Çalışanın adı soyadı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Görevi / bölümü', genislik: 'yarim' },
      { tip: 'satir', etiket: 'İşe giriş tarihi', genislik: 'yarim' },
      { tip: 'satir', etiket: 'İş yeri', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Teslim edilen donanım', 'Marka / standart', 'Adet', 'Teslim tarihi', 'İmza'],
        satirSayisi: 9,
      },
      {
        tip: 'not',
        metin:
          'Teslim aldığım koruyucu donanımı, verilen eğitime uygun biçimde kullanacağımı; hasar görmesi veya kaybolması durumunda derhâl bildireceğimi; kullanmadığım takdirde doğabilecek sonuçlardan sorumlu olduğumu kabul ederim.',
      },
      { tip: 'imza', roller: ['Teslim alan çalışan', 'Teslim eden'] },
    ],
  },
  {
    slug: 'egitim-katilim-tutanagi',
    ad: 'İSG eğitimi katılım tutanağı',
    ozet: 'Eğitimin konusu, süresi ve katılımcıları. Eğitim yapıldığının tek geçerli kanıtı.',
    dayanak:
      'Çalışanların iş sağlığı ve güvenliği eğitimlerine ilişkin yönetmelik, düzenlenen eğitimlerin belgelendirilmesini ve kayıtların iş yerinde saklanmasını zorunlu tutar.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri unvanı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tehlike sınıfı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Eğitim konusu', genislik: 'tam' },
      { tip: 'satir', etiket: 'Tarih', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Süre (ders saati)', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Yöntem (yüz yüze / uzaktan)', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Eğitimi veren / belge no', genislik: 'tam' },
      {
        tip: 'tablo',
        basliklar: ['Sıra', 'Adı soyadı', 'T.C. kimlik no', 'Görevi', 'İmza'],
        satirSayisi: 14,
      },
      { tip: 'imza', roller: ['Eğitimi veren', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'tatbikat-raporu',
    ad: 'Acil durum tatbikatı raporu',
    ozet: 'Senaryo, tahliye süresi, aksayan noktalar. Yılda en az bir kez zorunlu.',
    dayanak:
      'İş yerlerinde acil durumlar hakkındaki yönetmelik, acil durum planının uygulanabilirliğini görmek için yılda en az bir defa tatbikat yapılmasını ve kayıt altına alınmasını zorunlu tutar.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tatbikat tarihi ve saati', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tatbikat türü (yangın / tahliye / deprem / kimyasal)', genislik: 'tam' },
      { tip: 'metin', etiket: 'Senaryo', satir: 4 },
      { tip: 'satir', etiket: 'Katılımcı sayısı', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Tahliye süresi', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Toplanma yerinde sayım sonucu', genislik: 'ucte' },
      { tip: 'metin', etiket: 'Gözlemler ve aksayan noktalar', satir: 5 },
      {
        tip: 'tablo',
        basliklar: ['Düzeltici faaliyet', 'Sorumlu', 'Termin'],
        satirSayisi: 4,
      },
      { tip: 'imza', roller: ['Tatbikat sorumlusu', 'İş güvenliği uzmanı', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'periyodik-kontrol-takip-cizelgesi',
    ad: 'Periyodik kontrol takip çizelgesi',
    ozet: 'Ekipman bazında son kontrol ve sonraki kontrol tarihi. Süresi geçeni tek bakışta gösterir.',
    dayanak:
      'İş ekipmanlarının kullanımında sağlık ve güvenlik şartları yönetmeliği, ekipmanların periyodik kontrollerinin yetkili kişilerce yapılmasını ve kayıtların saklanmasını öngörür.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Çizelge tarihi', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: [
          'Ekipman',
          'Seri / envanter no',
          'Bulunduğu yer',
          'Kontrol periyodu',
          'Son kontrol',
          'Sonraki kontrol',
          'Kontrolü yapan',
          'Sonuç',
        ],
        satirSayisi: 14,
      },
      { tip: 'imza', roller: ['Hazırlayan', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'isg-kurulu-toplanti-tutanagi',
    ad: 'İSG kurulu toplantı tutanağı',
    ozet: 'Gündem, alınan kararlar ve sorumlular. Elli ve üzeri çalışanı olan iş yerlerinde zorunlu.',
    dayanak:
      'İş sağlığı ve güvenliği kurulları hakkındaki yönetmelik uyarınca, elli ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren işlerde kurul oluşturulur; kurul kararları tutanağa bağlanır.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Toplantı tarihi / no', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Kurul üyesi', 'Görevi / sıfatı', 'İmza'],
        satirSayisi: 7,
      },
      { tip: 'metin', etiket: 'Gündem', satir: 4 },
      {
        tip: 'tablo',
        basliklar: ['Karar', 'Sorumlu', 'Termin'],
        satirSayisi: 6,
      },
      { tip: 'metin', etiket: 'Bir önceki toplantı kararlarının durumu', satir: 4 },
      { tip: 'imza', roller: ['Kurul başkanı', 'Kurul sekreteri'] },
    ],
  },
  {
    slug: 'is-kazasi-inceleme-formu',
    ad: 'İş kazası inceleme formu',
    ozet: 'Olayın seyri, kök neden ve alınan önlemler. Kazayı üç iş günü içinde SGK’ye bildirmek ayrıca zorunlu.',
    dayanak:
      '6331 sayılı Kanun, iş kazalarının kaydının tutulmasını, gerekli incelemenin yapılarak rapor düzenlenmesini ve kazanın üç iş günü içinde Sosyal Güvenlik Kurumuna bildirilmesini zorunlu tutar.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Kaza tarihi ve saati', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Kazazedenin adı soyadı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Görevi / kıdemi', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Kaza yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'SGK bildirim tarihi', genislik: 'yarim' },
      { tip: 'metin', etiket: 'Olayın gelişimi', satir: 5 },
      { tip: 'metin', etiket: 'Yaralanmanın türü ve vücuttaki yeri', satir: 2 },
      { tip: 'metin', etiket: 'Kök neden analizi (neden–neden)', satir: 5 },
      {
        tip: 'tablo',
        basliklar: ['Düzeltici / önleyici faaliyet', 'Sorumlu', 'Termin', 'Durum'],
        satirSayisi: 5,
      },
      { tip: 'imza', roller: ['İnceleyen', 'İş güvenliği uzmanı', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'saha-denetim-formu',
    ad: 'Saha güvenlik denetim formu',
    ozet: 'Haftalık saha turu için kontrol listesi: uygun / uygun değil / geçerli değil.',
    dayanak:
      'Risk değerlendirmesinde belirlenen önlemlerin sahada sürdüğünü göstermenin en pratik yolu düzenli saha kontrolüdür; kayıt, denetimde sürecin yaşadığını kanıtlar.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri / bölüm', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Denetim tarihi', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Kontrol konusu', 'Uygun', 'Uygun değil', 'Bulgu / açıklama', 'Sorumlu', 'Termin'],
        satirSayisi: 14,
      },
      { tip: 'imza', roller: ['Denetimi yapan', 'Bölüm sorumlusu'] },
    ],
  },
  {
    slug: 'calisan-temsilcisi-secim-tutanagi',
    ad: 'Çalışan temsilcisi seçim tutanağı',
    ozet: 'Temsilcinin seçimle belirlendiğini gösteren kayıt. Uygulamada en sık atlanan belgelerden biri.',
    dayanak:
      '6331 sayılı Kanun, iş yerinde çalışan temsilcisi görevlendirilmesini; bunun çalışanlar arasında yapılacak seçimle, seçimle belirlenemediği durumda atama yoluyla yapılmasını öngörür.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri unvanı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'SGK iş yeri sicil no', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Toplam çalışan sayısı', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Belirlenecek temsilci sayısı', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Seçim tarihi', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Belirleme yöntemi (seçim / atama)', genislik: 'tam' },
      {
        tip: 'tablo',
        basliklar: ['Aday adı soyadı', 'Bölümü', 'Aldığı oy', 'Sonuç'],
        satirSayisi: 6,
      },
      { tip: 'metin', etiket: 'Seçimin nasıl yapıldığı (duyuru, oylama biçimi, katılım)', satir: 4 },
      {
        tip: 'tablo',
        basliklar: ['Seçilen temsilci', 'Temsil ettiği bölüm', 'İletişim', 'İmza'],
        satirSayisi: 3,
      },
      {
        tip: 'not',
        metin:
          'Çalışan temsilcisi, görevini yürütmesi nedeniyle hakları kısıtlanamaz. Temsilcinin adı ve iletişim bilgisi çalışanların görebileceği bir yerde ilan edilir.',
      },
      { tip: 'imza', roller: ['Seçim kurulu / gözlemci', 'Çalışan temsilcisi', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'acil-durum-ekipleri-gorevlendirme-tutanagi',
    ad: 'Acil durum ekipleri görevlendirme tutanağı',
    ozet: 'Söndürme, kurtarma, koruma ve ilk yardım ekiplerinin kim olduğunu yazıya döker.',
    dayanak:
      'İş yerlerinde acil durumlar hakkındaki yönetmelik, tehlike sınıfı ve çalışan sayısına göre arama-kurtarma-tahliye ve yangınla mücadele ekiplerinin oluşturulmasını, görevlendirilenlere eğitim verilmesini zorunlu tutar.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri unvanı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tehlike sınıfı', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Çalışan sayısı', genislik: 'ucte' },
      {
        tip: 'not',
        metin:
          'Ekip sayısı hesabı: arama-kurtarma-tahliye ile yangınla mücadele için AYRI AYRI olmak üzere, çok tehlikeli sınıfta her 30 çalışana, tehlikeli sınıfta her 40 çalışana, az tehlikeli sınıfta her 50 çalışana en az bir çalışan görevlendirilir.',
      },
      {
        tip: 'tablo',
        basliklar: ['Ekip', 'Adı soyadı', 'Görevi / bölümü', 'Eğitim tarihi', 'İmza'],
        satirSayisi: 12,
      },
      { tip: 'satir', etiket: 'Toplanma yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Acil durumda aranacak ilk kişi / telefon', genislik: 'yarim' },
      {
        tip: 'not',
        metin:
          'Görevlendirilen çalışana görevi yazılı olarak tebliğ edilir. Ekibi kâğıt üzerinde kurup çalışana haber vermemek, bu kaydı geçersiz kılar.',
      },
      { tip: 'imza', roller: ['İş güvenliği uzmanı', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'isg-yillik-calisma-plani',
    ad: 'İSG yıllık çalışma planı',
    ozet: 'Uzman ve hekimin yıl boyunca ne zaman ne yapacağı. Denetimde ilk istenen belgelerden.',
    dayanak:
      'İş güvenliği uzmanı ve işyeri hekimi, yürütecekleri hizmetlere ilişkin yıllık çalışma planını hazırlayıp işverene sunmakla yükümlüdür.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri unvanı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Plan yılı', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Tehlike sınıfı', genislik: 'ucte' },
      {
        tip: 'tablo',
        basliklar: ['Faaliyet', 'Sorumlu', 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        satirSayisi: 10,
      },
      {
        tip: 'not',
        metin:
          'Plana en az şunlar girer: risk değerlendirmesinin gözden geçirilmesi, temel ve yenileme eğitimleri, işe giriş ve periyodik muayeneler, ortam ölçümleri, ekipman periyodik kontrolleri, acil durum tatbikatı, saha denetimleri ve kurul toplantıları.',
      },
      { tip: 'imza', roller: ['İş güvenliği uzmanı', 'İşyeri hekimi', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'isg-yillik-degerlendirme-raporu',
    ad: 'İSG yıllık değerlendirme raporu',
    ozet: 'Yıl sonunda planın ne kadarının gerçekleştiğini ve rakamları gösteren rapor.',
    dayanak:
      'İş güvenliği uzmanı ve işyeri hekimi, yıllık çalışma planında yer alan konuların gerçekleşme durumunu yıllık değerlendirme raporuyla kayıt altına alır.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri unvanı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Rapor yılı', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Konu', 'Planlanan', 'Gerçekleşen', 'Gerçekleşmediyse nedeni'],
        satirSayisi: 7,
      },
      {
        tip: 'tablo',
        basliklar: ['Sayısal veriler', 'Adet'],
        satirlar: [
          'İş kazası sayısı',
          'Kayıp gün sayısı',
          'Ramak kala bildirimi sayısı',
          'Meslek hastalığı şüphesiyle sevk sayısı',
          'Eğitim verilen çalışan sayısı',
          'Yapılan periyodik muayene sayısı',
          'Tamamlanan ekipman periyodik kontrolü sayısı',
          'Yapılan saha denetimi sayısı',
        ],
        satirSayisi: 2,
      },
      { tip: 'metin', etiket: 'Gelecek yıl için öneriler', satir: 6 },
      { tip: 'imza', roller: ['İş güvenliği uzmanı', 'İşyeri hekimi', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'sicak-calisma-izin-formu',
    ad: 'Sıcak çalışma izin formu',
    ozet: 'Kaynak, kesme, taşlama gibi kıvılcım çıkaran işler için izin belgesi. Yangının en sık nedeni.',
    dayanak:
      'İşveren, risk değerlendirmesi sonucunda tespit edilen yüksek riskli işler için çalışma öncesinde güvenli çalışma koşullarını sağlamak ve denetlemekle yükümlüdür. Kıvılcım çıkaran işler bu kapsamda izinle yürütülür.',
    alanlar: [
      { tip: 'satir', etiket: 'İzin no', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Tarih', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Geçerlilik saati (başlangıç - bitiş)', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Çalışma yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Yapılacak iş (kaynak / kesme / taşlama)', genislik: 'yarim' },
      { tip: 'satir', etiket: 'İşi yapacak kişi(ler)', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Yangın gözcüsü', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Çalışma öncesi kontrol', 'Evet', 'Hayır', 'Uygun değil'],
        satirlar: [
          'Yanıcı malzeme 11 metre yarıçapındaki alandan uzaklaştırıldı',
          'Uzaklaştırılamayan malzeme yanmaz örtüyle kapatıldı',
          'Zemin ve duvardaki delik, çatlak ve boşluklar kapatıldı',
          'Uygun tip ve sayıda yangın söndürücü çalışma noktasında hazır',
          'Ortamda gaz ölçümü yapıldı, patlayıcı ortam yok',
          'Yanıcı sıvı/gaz hattı boşaltıldı, temizlendi veya kör tapalandı',
          'Havalandırma sağlandı, duman tahliyesi planlandı',
          'Ekipman kabloları, hortumları ve topraklama bağlantısı sağlam',
          'Yangın algılama sistemi gerekiyorsa devre dışı bırakıldı ve not edildi',
          'İşi yapacak kişinin mesleki yeterlilik / kaynakçı belgesi geçerli',
          'Kaynak maskesi, eldiven, önlük ve gözlük dahil KKD eksiksiz',
          'Çalışma bitiminde en az 60 dakika gözetim planlandı',
        ],
        satirSayisi: 3,
      },
      { tip: 'metin', etiket: 'İlave önlemler', satir: 3 },
      {
        tip: 'not',
        metin:
          'Çalışma bittikten sonra alan en az 60 dakika gözetlenir. Kor hâlindeki kıvılcımın alev almasına kadar geçen süre bu yüzden izinden sayılır.',
      },
      { tip: 'imza', roller: ['İzni isteyen', 'Yangın gözcüsü', 'İş güvenliği uzmanı', 'İzni veren'] },
    ],
  },
  {
    slug: 'yuksekte-calisma-izin-formu',
    ad: 'Yüksekte çalışma izin formu',
    ozet: 'Ölümlü kazaların başlıca nedeni. Çalışma öncesi ankraj ve toplu korumanın kontrolü.',
    dayanak:
      'Yapı işlerinde iş sağlığı ve güvenliği yönetmeliği, seviye farkı bulunan ve düşme riski olan yerlerde önce toplu koruma önlemlerinin alınmasını, bunun mümkün olmadığı hâllerde kişisel düşme durdurma sistemi kullanılmasını öngörür.',
    alanlar: [
      { tip: 'satir', etiket: 'İzin no', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Tarih', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Geçerlilik saati', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Çalışma yeri ve yüksekliği', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Yapılacak iş', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Çalışan adı soyadı', 'Yüksekte çalışma eğitimi', 'Sağlık raporu uygun', 'İmza'],
        satirSayisi: 5,
      },
      {
        tip: 'tablo',
        basliklar: ['Çalışma öncesi kontrol', 'Evet', 'Hayır', 'Uygun değil'],
        satirlar: [
          'Önce toplu koruma: kenar koruyucu (korkuluk) veya güvenlik ağı kuruldu',
          'İskele yetkili kişice kuruldu, kontrol edildi ve etiketlendi',
          'Uygun ankraj noktası veya yaşam hattı mevcut ve taşıma kapasitesi yeterli',
          'Paraşüt tipi emniyet kemeri ve bağlantı elemanı gözle kontrol edildi',
          'Merdiven / seyyar platform sağlam, sabitlendi, devrilme riski yok',
          'Altındaki bölge kapatıldı, uyarı levhası ve bariyer kondu',
          'Düşebilecek alet ve malzeme bağlandı veya emniyete alındı',
          'Hava koşulları uygun (rüzgâr, buzlanma, yağış)',
          'Enerjili elektrik hatlarına güvenli mesafe sağlandı',
          'Askıda kalma için kurtarma planı yapıldı, ekipmanı hazır',
        ],
        satirSayisi: 3,
      },
      {
        tip: 'not',
        metin:
          'Emniyet kemeri tek başına önlem değildir: bağlanacak uygun bir ankraj noktası yoksa kemer koruma sağlamaz. Askıda kalma travmasına karşı kurtarma planı önceden yapılır.',
      },
      { tip: 'imza', roller: ['İzni isteyen', 'İş güvenliği uzmanı', 'İzni veren'] },
    ],
  },
  {
    slug: 'kapali-alan-calisma-izin-formu',
    ad: 'Kapalı (dar) alan çalışma izin formu',
    ozet: 'Tank, silo, rögar, kazan. Ölçüm yapılmadan girilen kapalı alan en ölümcül iş.',
    dayanak:
      'İşveren, boğucu veya parlayıcı ortam oluşabilen, girişi ve çıkışı sınırlı alanlarda çalışma öncesinde ölçüm yaptırmak, havalandırmayı sağlamak ve gözetim düzenini kurmakla yükümlüdür.',
    alanlar: [
      { tip: 'satir', etiket: 'İzin no', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Tarih', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Geçerlilik saati', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Kapalı alanın tanımı (tank / silo / rögar / kazan)', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Yapılacak iş', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Girecek kişi(ler)', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Dışarıda bekleyen gözcü', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Gaz ölçümü', 'Sınır', 'Giriş öncesi', 'Ara ölçüm 1', 'Ara ölçüm 2'],
        satirlar: ['Oksijen (%)', 'Patlayıcı gaz (LEL %)', 'Karbon monoksit (ppm)', 'Hidrojen sülfür (ppm)'],
        satirSayisi: 2,
      },
      {
        tip: 'tablo',
        basliklar: ['Çalışma öncesi kontrol', 'Evet', 'Hayır', 'Uygun değil'],
        satirlar: [
          'Alan boşaltıldı, temizlendi ve kalıntı giderildi',
          'Besleme hatları ayrıldı veya kör tapalandı',
          'Enerji kesildi ve kilitlendi (LOTO formu dolduruldu)',
          'Zorlamalı havalandırma kuruldu ve çalışıyor',
          'Aydınlatma güvenli gerilimde, ekipman patlamaya karşı korumalı',
          'Giriş ve çıkış yolu açık, engel yok',
          'Gözcü ile haberleşme yöntemi belirlendi ve denendi',
          'Kurtarma ekipmanı hazır (üçayak, halat, solunum cihazı)',
          'Gözcü görevlendirildi ve sürekli dışarıda kalacağı tebliğ edildi',
          'Acil durumda aranacak kişi ve numara belirlendi',
        ],
        satirSayisi: 2,
      },
      {
        tip: 'not',
        metin:
          'Gözcü hiçbir koşulda içeri girmez. Kapalı alan ölümlerinin büyük bölümü, kurtarmak için içeri giren ikinci kişidir.',
      },
      { tip: 'imza', roller: ['Girecek çalışan', 'Gözcü', 'İş güvenliği uzmanı', 'İzni veren'] },
    ],
  },
  {
    slug: 'enerji-kesme-kilitleme-loto-formu',
    ad: 'Enerji kesme ve kilitleme (LOTO) formu',
    ozet: 'Bakım sırasında makinenin beklenmedik şekilde çalışmasını önleyen kayıt.',
    dayanak:
      'İş ekipmanlarının kullanımında sağlık ve güvenlik şartları yönetmeliği, bakım ve onarım işlerinde ekipmanın enerjisinin kesilmesini ve çalışma süresince güvenliğin sağlanmasını öngörür.',
    alanlar: [
      { tip: 'satir', etiket: 'Ekipman / hat', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Yapılacak bakım', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tarih', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Başlangıç saati', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Bitiş saati', genislik: 'ucte' },
      {
        tip: 'tablo',
        basliklar: ['Enerji türü', 'Kesme noktası', 'Kilit no', 'Kilitleyen', 'Açan', 'Saat'],
        satirSayisi: 7,
      },
      {
        tip: 'not',
        metin:
          'Enerji türleri yalnız elektrik değildir: basınçlı hava, hidrolik, buhar, gaz, su, yay gerilimi ve yer çekimiyle düşebilecek asılı parça da enerjidir. Her biri ayrı ayrı emniyete alınır.',
      },
      {
        tip: 'tablo',
        basliklar: ['Doğrulama adımı', 'Yapan', 'Saat'],
        satirSayisi: 4,
      },
      {
        tip: 'not',
        metin:
          'Kilitlemeden sonra makinenin gerçekten durduğu, çalıştırma düğmesine basılarak doğrulanır. Kilidi takan kişi dışında kimse o kilidi açamaz.',
      },
      { tip: 'imza', roller: ['Bakımı yapan', 'Onaylayan'] },
    ],
  },
  {
    slug: 'talimat-teblig-tutanagi',
    ad: 'İSG talimatı tebliğ tutanağı',
    ozet: 'Makine veya iş talimatının çalışana okutulup imzalatıldığını gösterir.',
    dayanak:
      '6331 sayılı Kanun, işverene çalışanları iş yerindeki riskler ve alınan tedbirler hakkında bilgilendirme yükümlülüğü getirir; bilgilendirmenin yapıldığı kayıtla ispatlanır.',
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri / bölüm', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tebliğ tarihi', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Talimatın adı ve numarası', genislik: 'tam' },
      { tip: 'metin', etiket: 'Talimatın konusu (özet)', satir: 4 },
      {
        tip: 'not',
        metin:
          'Aşağıda imzası bulunan çalışanlara yukarıda belirtilen talimat okunmuş, anlatılmış ve bir örneği verilmiştir. Talimata uymamanın doğurabileceği sonuçlar hakkında bilgilendirilmişlerdir.',
      },
      {
        tip: 'tablo',
        basliklar: ['Sıra', 'Adı soyadı', 'Görevi', 'Tarih', 'İmza'],
        satirSayisi: 16,
      },
      { tip: 'imza', roller: ['Tebliğ eden', 'İş güvenliği uzmanı'] },
    ],
  },
  {
    slug: 'ziyaretci-alt-isveren-isg-bilgilendirme',
    ad: 'Ziyaretçi ve alt işveren İSG bilgilendirme formu',
    ozet: 'Sahaya giren taşeron ve ziyaretçinin kurallardan haberdar edildiğinin kaydı.',
    dayanak:
      '6331 sayılı Kanun, aynı çalışma alanını paylaşan işverenlere iş sağlığı ve güvenliği önlemlerinde koordinasyon ve karşılıklı bilgilendirme yükümlülüğü getirir.',
    alanlar: [
      { tip: 'satir', etiket: 'Ana iş yeri', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tarih', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Firma / ziyaretçi', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Giriş amacı ve çalışılacak bölge', genislik: 'yarim' },
      {
        tip: 'metin',
        etiket: 'Bölgeye özgü riskler ve uyulacak kurallar',
        satir: 5,
      },
      {
        tip: 'tablo',
        basliklar: ['Alt işverenden istenen belge', 'Var', 'Yok', 'Geçerlilik tarihi'],
        satirlar: [
          'SGK iş yeri tescil belgesi',
          'İSG-KATİP uzman ve hekim görevlendirmeleri',
          'Çalışanların İSG eğitim kayıtları',
          'Çalışanların sağlık raporları',
          'Tehlikeli işlerde mesleki yeterlilik belgeleri',
          'KKD zimmet kayıtları',
          'Kullanılacak ekipmanın periyodik kontrol raporları',
          'Risk değerlendirmesi (kendi faaliyeti için)',
        ],
        satirSayisi: 2,
      },
      {
        tip: 'tablo',
        basliklar: ['Adı soyadı', 'Firma', 'Giriş saati', 'Çıkış saati', 'İmza'],
        satirSayisi: 6,
      },
      { tip: 'imza', roller: ['Bilgilendiren', 'Alt işveren yetkilisi'] },
    ],
  },
  {
    slug: 'kimyasal-envanteri-ve-msds-listesi',
    ad: 'Kimyasal envanteri ve güvenlik bilgi formu listesi',
    ozet: 'İş yerindeki her kimyasalın ve güvenlik bilgi formunun kaydı.',
    dayanak:
      'Kimyasal maddelerle çalışmalarda sağlık ve güvenlik önlemleri hakkındaki yönetmelik, işverene kullanılan kimyasalların envanterini çıkarma ve güvenlik bilgi formlarını temin edip bulundurma yükümlülüğü getirir.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri / bölüm', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Güncelleme tarihi', genislik: 'yarim' },
      {
        tip: 'tablo',
        basliklar: ['Ürün adı', 'Üretici / tedarikçi', 'Kullanım yeri', 'Yıllık miktar', 'Depolama yeri', 'Zararlılık işareti', 'GBF var mı', 'GBF tarihi'],
        satirSayisi: 12,
      },
      {
        tip: 'not',
        metin:
          'Güvenlik bilgi formu (GBF) Türkçe olmak zorundadır ve tedarikçiden ücretsiz istenir. Form, kimyasalın kullanıldığı yerde çalışanın ulaşabileceği bir noktada bulundurulur; klasörde kilitli durması yeterli değildir.',
      },
      { tip: 'imza', roller: ['Hazırlayan', 'İş güvenliği uzmanı'] },
    ],
  },
  {
    slug: 'saglik-gozetimi-takip-cizelgesi',
    ad: 'Sağlık gözetimi takip çizelgesi',
    ozet: 'Kimin muayenesi ne zaman doluyor? Periyodik muayenenin kaçırılmasını önler.',
    dayanak:
      'İşyeri hekimi ve diğer sağlık personelinin görevleri hakkındaki yönetmelik, çalışanların işe giriş ve periyodik muayenelerinin yapılmasını ve kayıtlarının tutulmasını öngörür.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri unvanı', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Tehlike sınıfı', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Çizelge tarihi', genislik: 'ucte' },
      {
        tip: 'tablo',
        basliklar: ['Adı soyadı', 'Görevi', 'İşe giriş tarihi', 'İşe giriş muayenesi', 'Maruziyet (gürültü/toz/kimyasal)', 'Son periyodik muayene', 'İstenen tetkikler', 'Sonraki muayene'],
        satirSayisi: 9,
      },
      {
        tip: 'not',
        metin:
          'Periyodik muayene aralığı tehlike sınıfına göre belirlenir: az tehlikeli sınıfta en geç beş, tehlikeli sınıfta en geç üç, çok tehlikeli sınıfta en geç bir yılda bir. İşyeri hekimi, maruziyete göre daha kısa bir aralık belirleyebilir.',
      },
      { tip: 'imza', roller: ['İşyeri hekimi', 'İşveren / vekili'] },
    ],
  },
  {
    slug: 'yangin-sondurucu-kontrol-cizelgesi',
    ad: 'Yangın söndürücü ve yangın ekipmanı kontrol çizelgesi',
    ozet: 'Söndürücülerin yerinde, dolu ve erişilebilir olduğunun aylık kaydı.',
    dayanak:
      'Binaların yangından korunması hakkındaki yönetmelik, yangın söndürme cihazlarının periyodik kontrol ve bakımının yaptırılmasını ve kolay görülebilir, erişilebilir yerlerde bulundurulmasını öngörür.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'İş yeri / bina', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Yıl', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Kontrolü yapan', genislik: 'ucte' },
      {
        tip: 'tablo',
        basliklar: ['Cihaz no / yeri', 'Tür', 'Kg', 'Son dolum', 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        satirSayisi: 9,
      },
      {
        tip: 'not',
        metin:
          'Aylık kontrol: cihaz yerinde ve görünür mü, önü kapalı mı, basınç göstergesi yeşil bölgede mi, mühür ve pim sağlam mı, hortum çatlak mı, etiket okunur mu, askı aparatı sağlam mı. Uygun aya imza, uygunsuza çarpı atılır ve arkaya not düşülür.',
      },
      { tip: 'imza', roller: ['Kontrolü yapan', 'İş güvenliği uzmanı'] },
    ],
  },
  {
    slug: 'arac-is-makinasi-gunluk-kontrol-formu',
    ad: 'Araç ve iş makinası günlük kontrol formu',
    ozet: 'Forklift, platform, ekskavatör için vardiya öncesi operatör kontrolü.',
    dayanak:
      'İş ekipmanlarının kullanımında sağlık ve güvenlik şartları yönetmeliği, ekipmanın günlük kullanım öncesi kontrolünü ve kullanacak kişinin yetkili ve eğitimli olmasını öngörür.',
    yatay: true,
    alanlar: [
      { tip: 'satir', etiket: 'Ekipman / plaka - seri no', genislik: 'yarim' },
      { tip: 'satir', etiket: 'Ay / yıl', genislik: 'ucte' },
      { tip: 'satir', etiket: 'Operatör (belge no)', genislik: 'ucte' },
      {
        tip: 'tablo',
        basliklar: ['Gün', 'Fren', 'Direksiyon', 'Korna', 'Far / flaşör', 'Lastik', 'Hidrolik kaçak', 'Emniyet kemeri', 'Devrilme koruması', 'Yangın söndürücü', 'Çatal / bom', 'Operatör imza'],
        satirSayisi: 10,
      },
      {
        tip: 'not',
        metin:
          'Uygun olana işaret, uygun olmayana çarpı konur. Çarpı işaretlenen ekipman arıza giderilene kadar kullanılmaz ve anahtarı teslim alınır. Kiralık ekipmanda da bu kontrol, kullanan iş yerinin sorumluluğundadır.',
      },
      { tip: 'imza', roller: ['Bölüm sorumlusu', 'İş güvenliği uzmanı'] },
    ],
  },
];

export const formSayisi = formlar.length;
