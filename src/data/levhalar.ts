/**
 * A4'e basılabilir iş yeri güvenlik levhaları.
 *
 * SEMBOLLER: ISO 7010 standardının kendi işaretleri kullanılıyor. Sağlık ve
 * Güvenlik İşaretleri Yönetmeliği'nin tarif ettiği şekil ve renk düzeni de bu
 * standarda dayanır; dolayısıyla sahada herkesin tanıdığı işaretler bunlar.
 * Dosyalar Wikimedia Commons üzerinden kamu malı (public domain) olarak
 * alındı — eser sahibi ISO, lisans "Public domain" (2026-09-19'da doğrulandı).
 *
 * Daha önce bu piktogramlar elle çizilmişti; tanınırlıkları yetersiz olduğu
 * için standardın kendi sembolleriyle değiştirildi.
 *
 * PDF'ler `npm run levhalar` ile public/levhalar/ altına üretilir.
 */

export type LevhaTuru = 'yasak' | 'uyari' | 'emredici' | 'acil' | 'yangin';

export type Levha = {
  slug: string;
  baslik: string;
  /** Levhanın üzerine basılan metin. */
  metin: string;
  tur: LevhaTuru;
  /** ISO 7010 işaret kodu — src/assets/isaretler/<kod>.svg */
  iso: string;
  /** Nerede asılır — kullanıcıya yol göstermek için. */
  nerede: string;
};

export const turAdlari: Record<LevhaTuru, string> = {
  emredici: 'Emredici',
  yasak: 'Yasaklayıcı',
  uyari: 'Uyarı',
  acil: 'Acil kaçış ve ilk yardım',
  yangin: 'Yangınla mücadele',
};

export const turAciklamalari: Record<LevhaTuru, string> = {
  emredici: 'Mavi daire. Belirli bir davranışı veya koruyucu donanım kullanımını zorunlu kılar.',
  yasak: 'Kırmızı çerçeveli beyaz daire, üzerinde kırmızı çapraz bant. Yapılması yasak davranışı gösterir.',
  uyari: 'Siyah çerçeveli sarı üçgen. Bir tehlikeye karşı dikkatli olunması gerektiğini bildirir.',
  acil: 'Yeşil dikdörtgen. Kaçış yolunu, çıkışı, ilk yardım ve kurtarma malzemesinin yerini gösterir.',
  yangin: 'Kırmızı dikdörtgen. Yangın söndürme ve ihbar ekipmanının yerini gösterir.',
};

export const levhalar: Levha[] = [
  // ——— Emredici ———
  {
    slug: 'baret-tak',
    baslik: 'Baret tak',
    metin: 'BARET TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M014',
    nerede: 'Şantiye girişi, vinç sahası, iskele altı, imalathane kapısı.',
  },
  {
    slug: 'koruyucu-gozluk-tak',
    baslik: 'Koruyucu gözlük tak',
    metin: 'KORUYUCU GÖZLÜK TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M004',
    nerede: 'Taşlama, kaynak, torna tezgâhı, kimyasal dolum noktası.',
  },
  {
    slug: 'kulaklik-tak',
    baslik: 'Kulak koruyucu tak',
    metin: 'KULAK KORUYUCU TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M003',
    nerede: 'Kompresör dairesi, pres hattı, jeneratör odası, dokuma salonu.',
  },
  {
    slug: 'eldiven-giy',
    baslik: 'Koruyucu eldiven giy',
    metin: 'KORUYUCU ELDİVEN GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M009',
    nerede: 'Kaynak, kesim, kimyasal aktarım, cam ve sac işleme.',
  },
  {
    slug: 'is-ayakkabisi-giy',
    baslik: 'Koruyucu ayakkabı giy',
    metin: 'KORUYUCU AYAKKABI GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M008',
    nerede: 'Üretim alanı, depo, şantiye, yükleme rampası.',
  },
  {
    slug: 'maske-tak',
    baslik: 'Maske tak',
    metin: 'MASKE TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M016',
    nerede: 'Gıda üretim hattı, temiz oda, sağlık hizmeti alanları.',
  },
  {
    slug: 'solunum-koruyucu-tak',
    baslik: 'Solunum koruyucu tak',
    metin: 'SOLUNUM KORUYUCU TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M017',
    nerede: 'Boyahane, toz çıkaran kesim alanı, kimyasal depo, kaynak kabini.',
  },
  {
    slug: 'emniyet-kemeri-tak',
    baslik: 'Emniyet kemeri tak',
    metin: 'EMNİYET KEMERİ KULLANMAK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M018',
    nerede: 'İskele, çatı çalışması, asansör boşluğu, platform kenarı.',
  },
  {
    slug: 'reflektif-yelek-giy',
    baslik: 'Reflektif yelek giy',
    metin: 'REFLEKTİF YELEK GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M015',
    nerede: 'Yol çalışması, forklift sahası, yükleme alanı, otopark.',
  },
  {
    slug: 'koruyucu-kiyafet-giy',
    baslik: 'Koruyucu kıyafet giy',
    metin: 'KORUYUCU KIYAFET GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    iso: 'M010',
    nerede: 'Kimyasal işleme, boyahane, galvaniz hattı, asit deposu.',
  },
  {
    slug: 'kullanma-talimatini-oku',
    baslik: 'Kullanma talimatını oku',
    metin: 'MAKİNEYİ ÇALIŞTIRMADAN ÖNCE TALİMATI OKUYUN',
    tur: 'emredici',
    iso: 'M002',
    nerede: 'Tezgâh başı, pres, CNC, kimyasal karıştırma ünitesi.',
  },

  // ——— Yasaklayıcı ———
  {
    slug: 'sigara-icilmez',
    baslik: 'Sigara içilmez',
    metin: 'SİGARA İÇMEK YASAKTIR',
    tur: 'yasak',
    iso: 'P002',
    nerede: 'Bütün kapalı çalışma alanları, depo, yakıt ve kimyasal bölgeleri.',
  },
  {
    slug: 'ates-ile-yaklasmak-yasak',
    baslik: 'Ateşle yaklaşmak yasak',
    metin: 'ATEŞLE YAKLAŞMAK VE AÇIK ALEV YASAKTIR',
    tur: 'yasak',
    iso: 'P003',
    nerede: 'Yakıt tankı, boyahane, gaz tüpü deposu, patlayıcı ortam bölgeleri.',
  },
  {
    slug: 'yetkisiz-giremez',
    baslik: 'Yetkisiz giremez',
    metin: 'YETKİSİZ KİŞİLER GİREMEZ',
    tur: 'yasak',
    iso: 'P004',
    nerede: 'Trafo, makine dairesi, şantiye kapısı, kimyasal depo.',
  },
  {
    slug: 'cep-telefonu-yasak',
    baslik: 'Cep telefonu yasak',
    metin: 'CEP TELEFONU KULLANMAK YASAKTIR',
    tur: 'yasak',
    iso: 'P013',
    nerede: 'Patlayıcı ortam bölgeleri, akaryakıt sahası, vinç kumanda alanı.',
  },
  {
    slug: 'forklift-giremez',
    baslik: 'Forklift giremez',
    metin: 'FORKLİFT VE İŞ MAKİNESİ GİREMEZ',
    tur: 'yasak',
    iso: 'P006',
    nerede: 'Yaya koridoru, ofis girişi, dar geçiş, asma kat.',
  },
  {
    slug: 'el-sokmak-yasak',
    baslik: 'El sokmak yasak',
    metin: 'ÇALIŞIR DURUMDAKİ MAKİNEYE EL SOKMAK YASAKTIR',
    tur: 'yasak',
    iso: 'P015',
    nerede: 'Pres, konveyör, karıştırıcı, kırıcı ve besleme ağızları.',
  },

  // ——— Uyarı ———
  {
    slug: 'dikkat-elektrik',
    baslik: 'Dikkat elektrik',
    metin: 'DİKKAT! ELEKTRİK TEHLİKESİ',
    tur: 'uyari',
    iso: 'W012',
    nerede: 'Pano, trafo, jeneratör, kablo kanalı ve tesisat kapakları.',
  },
  {
    slug: 'dusme-tehlikesi',
    baslik: 'Düşme tehlikesi',
    metin: 'DİKKAT! YÜKSEKTEN DÜŞME TEHLİKESİ',
    tur: 'uyari',
    iso: 'W008',
    nerede: 'Boşluk kenarı, asansör kuyusu, çatı, iskele platformu.',
  },
  {
    slug: 'kaygan-zemin',
    baslik: 'Kaygan zemin',
    metin: 'DİKKAT! KAYGAN ZEMİN',
    tur: 'uyari',
    iso: 'W011',
    nerede: 'Islak üretim alanı, soğuk hava deposu, mutfak, temizlik sonrası koridor.',
  },
  {
    slug: 'asili-yuk',
    baslik: 'Asılı yük',
    metin: 'DİKKAT! ASILI YÜK — ALTINDA DURMAYINIZ',
    tur: 'uyari',
    iso: 'W015',
    nerede: 'Vinç sahası, montaj alanı, prefabrik saha, liman ve depo.',
  },
  {
    slug: 'patlayici-madde',
    baslik: 'Patlayıcı ortam',
    metin: 'DİKKAT! PATLAYICI ORTAM',
    tur: 'uyari',
    iso: 'W002',
    nerede: 'Gaz deposu, boyahane, un ve yem silosu, akaryakıt sahası.',
  },
  {
    slug: 'forklift-calisiyor',
    baslik: 'Forklift çalışıyor',
    metin: 'DİKKAT! FORKLİFT ÇALIŞMA SAHASI',
    tur: 'uyari',
    iso: 'W014',
    nerede: 'Depo koridoru, yükleme rampası, sevkiyat alanı.',
  },
  {
    slug: 'vinc-sahasi-yaklasma',
    baslik: 'Vinç sahası — yaklaşmayın',
    metin: 'DİKKAT! VİNÇ ÇALIŞMA SAHASI — 25 METREDEN FAZLA YAKLAŞMAYINIZ',
    tur: 'uyari',
    iso: 'W001',
    nerede: 'Kule vinç çevresi, mobil vinç kurulum alanı, saha giriş noktaları.',
  },
  {
    slug: 'zehirli-madde',
    baslik: 'Zehirli madde',
    metin: 'DİKKAT! ZEHİRLİ MADDE',
    tur: 'uyari',
    iso: 'W016',
    nerede: 'Kimyasal depo, laboratuvar, dolum ve numune alma noktası.',
  },
  {
    slug: 'sicak-yuzey',
    baslik: 'Sıcak yüzey',
    metin: 'DİKKAT! SICAK YÜZEY',
    tur: 'uyari',
    iso: 'W017',
    nerede: 'Fırın, kazan dairesi, buhar hattı, enjeksiyon ve döküm bölgesi.',
  },
  {
    slug: 'yanici-madde',
    baslik: 'Yanıcı madde',
    metin: 'DİKKAT! YANICI MADDE',
    tur: 'uyari',
    iso: 'W021',
    nerede: 'Tiner ve boya deposu, yakıt bölgesi, ahşap ve kâğıt stok alanı.',
  },
  {
    slug: 'el-ezilme-tehlikesi',
    baslik: 'El ezilme tehlikesi',
    metin: 'DİKKAT! EL EZİLME TEHLİKESİ',
    tur: 'uyari',
    iso: 'W024',
    nerede: 'Pres, kalıp, merdane, kapanan kapak ve sıkıştırma noktaları.',
  },

  // ——— Acil kaçış ve ilk yardım ———
  {
    slug: 'acil-cikis-sag',
    baslik: 'Acil çıkış (sağ)',
    metin: 'ACİL ÇIKIŞ',
    tur: 'acil',
    iso: 'E002',
    nerede: 'Çıkış sağdayken: kapı üstü, koridor dönüşleri, merdiven sahanlığı.',
  },
  {
    slug: 'acil-cikis-sol',
    baslik: 'Acil çıkış (sol)',
    metin: 'ACİL ÇIKIŞ',
    tur: 'acil',
    iso: 'E001',
    nerede: 'Çıkış soldayken: kapı üstü, koridor dönüşleri, merdiven sahanlığı.',
  },
  {
    slug: 'ilk-yardim',
    baslik: 'İlk yardım',
    metin: 'İLK YARDIM MALZEMESİ',
    tur: 'acil',
    iso: 'E003',
    nerede: 'İlk yardım dolabı, revir kapısı, ofis ve üretim koridoru.',
  },
  {
    slug: 'toplanma-yeri',
    baslik: 'Acil durum toplanma yeri',
    metin: 'ACİL DURUM TOPLANMA YERİ',
    tur: 'acil',
    iso: 'E007',
    nerede: 'Bina dışı toplanma alanı, otopark, saha girişi.',
  },
  {
    slug: 'acil-telefon',
    baslik: 'Acil durum telefonu',
    metin: 'ACİL DURUM TELEFONU',
    tur: 'acil',
    iso: 'E004',
    nerede: 'Santral, güvenlik kulübesi, revir, kat koridoru.',
  },
  {
    slug: 'otomatik-defibrilator',
    baslik: 'Otomatik defibrilatör (AED)',
    metin: 'OTOMATİK EKSTERNAL DEFİBRİLATÖR (AED)',
    tur: 'acil',
    iso: 'E010',
    nerede: 'AED cihazının bulunduğu duvar; giriş holü, yemekhane, revir.',
  },
  {
    slug: 'acil-goz-dusu',
    baslik: 'Acil göz duşu',
    metin: 'ACİL GÖZ DUŞU',
    tur: 'acil',
    iso: 'E011',
    nerede: 'Kimyasal dolum noktası, laboratuvar, asit deposu, galvaniz hattı.',
  },

  // ——— Yangınla mücadele ———
  {
    slug: 'yangin-sondurucu',
    baslik: 'Yangın söndürücü',
    metin: 'YANGIN SÖNDÜRME CİHAZI',
    tur: 'yangin',
    iso: 'F001',
    nerede: 'Söndürücünün asılı olduğu noktanın hemen üstü, sütun ve kapı yanları.',
  },
  {
    slug: 'yangin-hortumu',
    baslik: 'Yangın dolabı',
    metin: 'YANGIN DOLABI',
    tur: 'yangin',
    iso: 'F002',
    nerede: 'Yangın dolabının bulunduğu duvar, koridor ve merdiven yanı.',
  },
  {
    slug: 'yangin-alarm-butonu',
    baslik: 'Yangın ihbar butonu',
    metin: 'YANGIN İHBAR BUTONU',
    tur: 'yangin',
    iso: 'F005',
    nerede: 'Kaçış yolu üzerindeki ihbar butonunun üstü, çıkış kapısı yanı.',
  },
];

export const levhaSayisi = levhalar.length;
