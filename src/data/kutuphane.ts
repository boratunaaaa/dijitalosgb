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
  | { tip: 'tablo'; basliklar: string[]; satirSayisi: number }
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
        satirSayisi: 16,
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
        satirSayisi: 18,
      },
      { tip: 'imza', roller: ['Denetimi yapan', 'Bölüm sorumlusu'] },
    ],
  },
];

export const formSayisi = formlar.length;
