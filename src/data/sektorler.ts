/**
 * Sektör sayfaları.
 *
 * NEDEN: "inşaat iş güvenliği", "fabrika İSG" gibi aramalar hem yüksek
 * niyetli hem de işverenin kendi dilinde. Genel hizmet sayfası bu aramalarda
 * zayıf kalıyor çünkü o sayfa herkese hitap ediyor.
 *
 * Her sektörün `tehlikeSinifi` alanı, o sektörde tipik olarak görülen sınıfı
 * söyler — kesin hüküm değil, çünkü sınıfı NACE kodu belirler. Metinde de
 * bu şekilde ifade ediliyor; "sizin sınıfınız şudur" denmiyor.
 */
export type Sektor = {
  slug: string;
  ad: string;
  h1: string;
  ozet: string;
  tehlikeSinifi: string;
  /** O sektöre özgü, gerçekten farklı riskler. Genel cümle yazılmaz. */
  riskler: { baslik: string; aciklama: string }[];
  odak: string[];
};

export const sektorler: Sektor[] = [
  {
    slug: 'insaat',
    ad: 'İnşaat ve şantiye',
    h1: 'İnşaat ve Şantiyelerde İş Güvenliği',
    ozet: 'Yapı işlerinde sağlık ve güvenlik planı, yüksekte çalışma, iskele ve kazı güvenliği.',
    tehlikeSinifi: 'Yapı işleri ağırlıklı olarak çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Yüksekten düşme', aciklama: 'İnşaat sektöründe ölümlü iş kazalarının başlıca nedeni. İskele, platform, korkuluk ve düşme durdurma sistemleri planlanmadan saha açılmamalı.' },
      { baslik: 'Malzeme düşmesi', aciklama: 'Alt katlarda çalışanlar için koruyucu ağ, baret bölgesi ve kapalı geçiş zorunluluğu.' },
      { baslik: 'Kazı ve göçük', aciklama: 'Şev açısı, iksa ve yeraltı hatlarının önceden belirlenmesi.' },
      { baslik: 'Kaldırma ekipmanı', aciklama: 'Vinç ve iş makinelerinin çalışma alanının yaya trafiğinden ayrılması.' },
      { baslik: 'Alt yüklenici karmaşası', aciklama: 'Aynı sahada birden fazla işveren varsa sorumluluk sınırları ve koordinasyon yazılı olmalı.' },
    ],
    odak: ['saglik-ve-guvenlik-plani', 'risk-degerlendirmesi', 'is-guvenligi-uzmanligi', 'acil-durum-eylem-plani'],
  },
  {
    slug: 'fabrika-uretim',
    ad: 'Fabrika ve üretim',
    h1: 'Fabrika ve Üretim Tesislerinde İş Güvenliği',
    ozet: 'Makine güvenliği, ortam ölçümü, periyodik kontroller ve vardiyalı çalışma düzeni.',
    tehlikeSinifi: 'Üretim kolu ve kullanılan proseslere göre tehlikeli veya çok tehlikeli sınıf yaygındır.',
    riskler: [
      { baslik: 'Makine ve ekipman', aciklama: 'Koruyucu, acil stop ve etiketleme-kilitleme (LOTO) düzeninin kurulması.' },
      { baslik: 'Gürültü maruziyeti', aciklama: 'Ortam ölçümü ve odyometri takibi; sınır aşımında teknik önlem önce gelir, KKD sonra.' },
      { baslik: 'Toz ve kimyasal', aciklama: 'Solunum fonksiyon testi takibi ve havalandırma yeterliliği.' },
      { baslik: 'Vardiyalı çalışma', aciklama: 'Yorgunluk kaynaklı kaza riski; eğitim ve muayene takviminin vardiyaya göre kurulması.' },
      { baslik: 'Periyodik kontroller', aciklama: 'Basınçlı kap, kaldırma ekipmanı ve elektrik tesisatının süresi geçmiş kontrolleri denetimde ilk bakılan kalemlerden.' },
    ],
    odak: ['risk-degerlendirmesi', 'is-guvenligi-uzmanligi', 'isyeri-hekimligi', 'acil-durum-eylem-plani'],
  },
  {
    slug: 'lojistik-depo',
    ad: 'Lojistik ve depo',
    h1: 'Lojistik ve Depolarda İş Güvenliği',
    ozet: 'Forklift trafiği, raf sistemleri, yükleme-boşaltma ve ergonomi.',
    tehlikeSinifi: 'Depolama ve taşımacılık faaliyetleri genellikle tehlikeli sınıfta değerlendirilir.',
    riskler: [
      { baslik: 'Forklift ve yaya', aciklama: 'Araç ve yaya güzergâhlarının fiziksel olarak ayrılması; en sık ölümlü depo kazası bu kesişimde.' },
      { baslik: 'Raf devrilmesi', aciklama: 'Yük kapasitesi etiketleri, çarpma koruması ve düzenli raf kontrolü.' },
      { baslik: 'Elle taşıma', aciklama: 'Tekrarlayan kaldırma kaynaklı bel ve omuz rahatsızlıkları; ergonomi değerlendirmesi.' },
      { baslik: 'Yükleme rampası', aciklama: 'Araç kaçmasını önleyen tekerlek takozu ve rampa kilidi.' },
    ],
    odak: ['risk-degerlendirmesi', 'is-guvenligi-uzmanligi', 'isyeri-hekimligi'],
  },
  {
    slug: 'ofis-hizmet',
    ad: 'Ofis ve hizmet',
    h1: 'Ofis ve Hizmet İşletmelerinde İş Güvenliği',
    ozet: 'Az tehlikeli sınıfta yükümlülük, ergonomi ve acil durum düzeni. Eğitimin tamamı uzaktan verilebilir.',
    tehlikeSinifi: 'Ofis ve büro faaliyetleri çoğunlukla az tehlikeli sınıftadır.',
    riskler: [
      { baslik: 'Ekran başında çalışma', aciklama: 'Boyun, bel ve göz şikâyetleri; çalışma istasyonu düzeni ve mola planı.' },
      { baslik: 'Tahliye düzeni', aciklama: 'Çok katlı binalarda kaçış yolu, toplanma alanı ve tatbikat — çalışan sayısı az olsa da zorunlu.' },
      { baslik: 'Elektrik ve yangın', aciklama: 'Uzatma kablosu yığılması ve yangın tüpü kontrolleri.' },
    ],
    odak: ['acil-durum-eylem-plani', 'risk-degerlendirmesi', 'isg-danismanligi'],
  },
  {
    slug: 'gida-restoran',
    ad: 'Gıda ve restoran',
    h1: 'Gıda İşletmeleri ve Restoranlarda İş Güvenliği',
    ozet: 'Mutfak riskleri, kayma-düşme, sıcak yüzey ve portör muayenesi.',
    tehlikeSinifi: 'Gıda üretimi ve hazırlığı tehlikeli sınıfta değerlendirilir.',
    riskler: [
      { baslik: 'Kayma ve düşme', aciklama: 'Islak zemin mutfaktaki en sık kaza nedeni; zemin malzemesi ve ayakkabı seçimi.' },
      { baslik: 'Kesici ve sıcak yüzey', aciklama: 'Bıçak, fritöz ve fırın kaynaklı yanık ve kesik.' },
      { baslik: 'Sağlık muayeneleri', aciklama: 'Gıda ile temas eden çalışanlarda portör muayenesi takibi.' },
      { baslik: 'LPG ve havalandırma', aciklama: 'Mutfak tüpü, davlumbaz ve gaz kaçağı senaryosu.' },
    ],
    odak: ['isyeri-hekimligi', 'risk-degerlendirmesi', 'acil-durum-eylem-plani'],
  },
  {
    slug: 'saglik-kurumlari',
    ad: 'Sağlık kurumları',
    h1: 'Hastane ve Sağlık Kurumlarında İş Güvenliği',
    ozet: 'Biyolojik etken, kesici-delici yaralanma, radyasyon ve şiddet riski.',
    tehlikeSinifi: 'Sağlık hizmetleri çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Kesici-delici yaralanma', aciklama: 'İğne ucu yaralanmaları ve sonrasındaki takip protokolü.' },
      { baslik: 'Biyolojik etkenler', aciklama: 'Bulaş riski, aşılama takibi ve KKD düzeni.' },
      { baslik: 'Radyasyon', aciklama: 'Görüntüleme birimlerinde doz takibi ve periyodik sağlık kontrolü.' },
      { baslik: 'Çalışana şiddet', aciklama: 'Acil servis ve poliklinikte şiddet riski; güvenlik düzeni ve olay bildirim sistemi.' },
    ],
    odak: ['isyeri-hekimligi', 'risk-degerlendirmesi', 'is-guvenligi-uzmanligi'],
  },
];
