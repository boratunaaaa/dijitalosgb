/**
 * A4'e basılabilir iş yeri güvenlik levhaları.
 *
 * Şekil ve renkler Sağlık ve Güvenlik İşaretleri Yönetmeliği'nin belirlediği
 * düzene göre: yasaklayıcı işaret kırmızı çerçeveli beyaz daire üzerine
 * kırmızı çapraz bant, uyarı işareti siyah çerçeveli sarı üçgen, emredici
 * işaret mavi daire, acil kaçış ve ilk yardım işaretleri yeşil dikdörtgen,
 * yangınla mücadele işaretleri kırmızı dikdörtgen.
 *
 * Piktogramlar bu proje için çizildi; hazır bir sembol kütüphanesinden
 * alınmadı. Şekil ve renk düzeni mevzuata uygundur, çizimler ise kendi
 * işimizdir — böylece dağıtım hakkı da bize ait.
 *
 * PDF'ler `npm run levhalar` ile public/levhalar/ altına üretilir.
 */

export type LevhaTuru = 'yasak' | 'uyari' | 'emredici' | 'acil' | 'yangin';

export type Levha = {
  slug: string;
  baslik: string;
  /** Levhanın üzerine basılan metin; başlıktan farklı olabilir. */
  metin: string;
  tur: LevhaTuru;
  /** Nerede asılır — sayfada kullanıcıya yol göstermek için. */
  nerede: string;
  /** 100x100 viewBox içine çizilmiş piktogram. */
  ikon: string;
};

export const turAdlari: Record<LevhaTuru, string> = {
  yasak: 'Yasaklayıcı',
  uyari: 'Uyarı',
  emredici: 'Emredici',
  acil: 'Acil kaçış ve ilk yardım',
  yangin: 'Yangınla mücadele',
};

export const turAciklamalari: Record<LevhaTuru, string> = {
  yasak: 'Kırmızı çerçeveli beyaz daire, üzerinde kırmızı çapraz bant. Yapılması yasak davranışı gösterir.',
  uyari: 'Siyah çerçeveli sarı üçgen. Bir tehlikeye karşı dikkatli olunması gerektiğini bildirir.',
  emredici: 'Mavi daire. Belirli bir davranışı veya koruyucu donanım kullanımını zorunlu kılar.',
  acil: 'Yeşil dikdörtgen. Kaçış yolunu, çıkışı, ilk yardım ve kurtarma malzemesinin yerini gösterir.',
  yangin: 'Kırmızı dikdörtgen. Yangın söndürme ekipmanının yerini gösterir.',
};

/** Tür bazında renkler — hem sayfada hem PDF üretiminde kullanılır. */
export const turRenkleri: Record<LevhaTuru, { zemin: string; cizim: string }> = {
  yasak: { zemin: '#ffffff', cizim: '#1a1a1a' },
  uyari: { zemin: '#FFD100', cizim: '#1a1a1a' },
  emredici: { zemin: '#0057B8', cizim: '#ffffff' },
  acil: { zemin: '#00843D', cizim: '#ffffff' },
  yangin: { zemin: '#C8102E', cizim: '#ffffff' },
};

export const levhalar: Levha[] = [
  // ——— Emredici (mavi daire) ———
  {
    slug: 'baret-tak',
    baslik: 'Baret tak',
    metin: 'BARET TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Şantiye girişi, vinç sahası, iskele altı, imalathane kapısı.',
    ikon: `<path d="M22 44h56c0-17-13-30-28-30S22 27 22 44z"/><rect x="14" y="44" width="72" height="9" rx="4.5"/><circle cx="46" cy="66" r="17"/><path d="M60 59h10l4 8-5 6-9 2z"/>`,
  },
  {
    slug: 'koruyucu-gozluk-tak',
    baslik: 'Koruyucu gözlük tak',
    metin: 'KORUYUCU GÖZLÜK TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Taşlama, kaynak, torna tezgâhı, kimyasal dolum noktası.',
    ikon: `<path d="M50 20c-14 0-25 9-27 22h54c-2-13-13-22-27-22z"/><path d="M14 50a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8v6a14 14 0 0 1-14 14H57a7 7 0 0 1-7-7 7 7 0 0 1-7 7H28a14 14 0 0 1-14-14v-6z"/>`,
  },
  {
    slug: 'kulaklik-tak',
    baslik: 'Kulaklık tak',
    metin: 'KULAK KORUYUCU TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Kompresör dairesi, pres hattı, jeneratör odası, dokuma salonu.',
    ikon: `<path d="M50 14c-19 0-34 15-34 34v4h10v-4c0-13 11-24 24-24s24 11 24 24v4h10v-4c0-19-15-34-34-34z"/><rect x="10" y="52" width="20" height="34" rx="9"/><rect x="70" y="52" width="20" height="34" rx="9"/>`,
  },
  {
    slug: 'eldiven-giy',
    baslik: 'Koruyucu eldiven giy',
    metin: 'KORUYUCU ELDİVEN GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Kaynak, kesim, kimyasal aktarım, cam ve sac işleme.',
    ikon: `<path d="M24 50h52v24c0 11-9 20-20 20H44c-11 0-20-9-20-20z"/><rect x="28" y="22" width="11" height="32" rx="5.5"/><rect x="41" y="14" width="11" height="40" rx="5.5"/><rect x="54" y="17" width="11" height="37" rx="5.5"/><rect x="67" y="26" width="11" height="28" rx="5.5"/><rect x="6" y="52" width="26" height="11" rx="5.5" transform="rotate(-22 19 57)"/>`,
  },
  {
    slug: 'is-ayakkabisi-giy',
    baslik: 'İş ayakkabısı giy',
    metin: 'KORUYUCU AYAKKABI GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Üretim alanı, depo, şantiye, yükleme rampası.',
    ikon: `<path d="M22 30h18l6 20c2 6 8 10 15 12l17 6c4 1 6 4 6 8v6H22V30z"/><rect x="18" y="76" width="66" height="10" rx="4"/>`,
  },
  {
    slug: 'maske-tak',
    baslik: 'Maske tak',
    metin: 'SOLUNUM KORUYUCU TAKMAK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Boyahane, toz çıkaran kesim alanı, kimyasal depo, kaynak kabini.',
    ikon: `<path d="M50 20c-18 0-31 9-31 17 0 4 3 6 7 7l2 12c2 13 10 22 22 22s20-9 22-22l2-12c4-1 7-3 7-7 0-8-13-17-31-17z"/><path d="M19 37L6 43v8l13-5M81 37l13 6v8l-13-5" /><path d="M26 44h48M28 56h44" stroke="var(--zemin)" stroke-width="4" fill="none"/>`,
  },
  {
    slug: 'emniyet-kemeri-tak',
    baslik: 'Emniyet kemeri tak',
    metin: 'EMNİYET KEMERİ KULLANMAK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'İskele, çatı çalışması, asansör boşluğu, platform kenarı.',
    ikon: `<circle cx="42" cy="16" r="10"/><path d="M42 29c-11 0-18 6-18 15v8h7l-3 32h9l3-22 3 22h9l-3-32h7v-8c0-9-7-15-14-15z"/><path d="M28 36l28 22M56 36L28 58" stroke="var(--zemin)" stroke-width="4" fill="none"/><path d="M60 8c14 10 18 26 12 42l-8-3c5-13 2-25-9-33z"/><circle cx="64" cy="54" r="7"/>`,
  },
  {
    slug: 'reflektif-yelek-giy',
    baslik: 'Reflektif yelek giy',
    metin: 'REFLEKTİF YELEK GİYMEK ZORUNLUDUR',
    tur: 'emredici',
    nerede: 'Yol çalışması, forklift sahası, yükleme alanı, otopark.',
    ikon: `<circle cx="50" cy="16" r="10"/><path d="M34 30L20 39l7 17 7-4v36h32V52l7 4 7-17-14-9-16 7z"/><path d="M34 60h32M34 72h32" stroke="var(--zemin)" stroke-width="5" fill="none"/><path d="M50 37v51" stroke="var(--zemin)" stroke-width="3" fill="none"/>`,
  },

  // ——— Yasaklayıcı (kırmızı çapraz bantlı daire) ———
  {
    slug: 'sigara-icilmez',
    baslik: 'Sigara içilmez',
    metin: 'SİGARA İÇMEK YASAKTIR',
    tur: 'yasak',
    nerede: 'Bütün kapalı çalışma alanları, depo, yakıt ve kimyasal bölgeleri.',
    ikon: `<rect x="14" y="52" width="54" height="14" rx="3"/><rect x="72" y="52" width="6" height="14" rx="2"/><rect x="82" y="52" width="6" height="14" rx="2"/><path d="M62 44c6-4 6-10 0-14M74 44c6-4 6-10 0-14" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  },
  {
    slug: 'yetkisiz-giremez',
    baslik: 'Yetkisiz giremez',
    metin: 'YETKİSİZ KİŞİLER GİREMEZ',
    tur: 'yasak',
    nerede: 'Trafo, makine dairesi, şantiye kapısı, kimyasal depo.',
    ikon: `<circle cx="46" cy="18" r="10"/><path d="M30 32l-8 26 8 3 5-14v43h10V66h4v24h10V47l5 14 8-3-8-26c-3-9-9-13-17-13s-14 4-17 13z"/>`,
  },
  {
    slug: 'ates-ile-yaklasmak-yasak',
    baslik: 'Ateşle yaklaşmak yasak',
    metin: 'ATEŞLE YAKLAŞMAK VE AÇIK ALEV YASAKTIR',
    tur: 'yasak',
    nerede: 'Yakıt tankı, boyahane, gaz tüpü deposu, patlayıcı ortam bölgeleri.',
    ikon: `<path d="M54 10c4 14-6 18-10 26-3 7-1 14 4 18-6 0-11-4-13-10-5 6-9 13-9 21 0 14 11 25 24 25s24-11 24-25c0-18-11-29-20-55z"/><rect x="12" y="74" width="30" height="8" rx="3" transform="rotate(-35 12 74)"/>`,
  },
  {
    slug: 'cep-telefonu-yasak',
    baslik: 'Cep telefonu yasak',
    metin: 'CEP TELEFONU KULLANMAK YASAKTIR',
    tur: 'yasak',
    nerede: 'Patlayıcı ortam bölgeleri, akaryakıt sahası, vinç kumanda alanı.',
    ikon: `<rect x="32" y="10" width="36" height="80" rx="7"/><rect x="38" y="20" width="24" height="52" rx="2" fill="#fff"/><circle cx="50" cy="81" r="4" fill="#fff"/>`,
  },
  {
    slug: 'yuk-altinda-durmak-yasak',
    baslik: 'Yük altında durmak yasak',
    metin: 'ASILI YÜK ALTINDA DURMAK YASAKTIR',
    tur: 'yasak',
    nerede: 'Vinç çalışma sahası, yükleme alanı, montaj bölgesi.',
    ikon: `<path d="M47 2h6v8h-6z"/><path d="M50 10l-8 10h16z"/><rect x="20" y="22" width="60" height="20" rx="2"/><circle cx="50" cy="56" r="9"/><path d="M36 70c0-7 6-13 14-13s14 6 14 13v26H36z"/>`,
  },

  // ——— Uyarı (sarı üçgen) ———
  {
    slug: 'dikkat-elektrik',
    baslik: 'Dikkat elektrik',
    metin: 'DİKKAT! ELEKTRİK TEHLİKESİ',
    tur: 'uyari',
    nerede: 'Pano, trafo, jeneratör, kablo kanalı ve tesisat kapakları.',
    ikon: `<path d="M62 8L26 56h20l-8 36 36-50H52z"/>`,
  },
  {
    slug: 'dusme-tehlikesi',
    baslik: 'Düşme tehlikesi',
    metin: 'DİKKAT! YÜKSEKTEN DÜŞME TEHLİKESİ',
    tur: 'uyari',
    nerede: 'Boşluk kenarı, asansör kuyusu, çatı, iskele platformu.',
    ikon: `<path d="M8 82h34l14-14" stroke="currentColor" stroke-width="7" fill="none"/><circle cx="72" cy="22" r="9"/><path d="M60 36l18-4 12 16-8 6-8-8-6 14-14 14-7-7 12-12z"/><path d="M52 86l18-10 6 8-16 10z"/>`,
  },
  {
    slug: 'kaygan-zemin',
    baslik: 'Kaygan zemin',
    metin: 'DİKKAT! KAYGAN ZEMİN',
    tur: 'uyari',
    nerede: 'Islak üretim alanı, soğuk hava deposu, mutfak, temizlik sonrası koridor.',
    ikon: `<path d="M10 84h80" stroke="currentColor" stroke-width="7" fill="none"/><circle cx="66" cy="18" r="9"/><path d="M54 32l16-2 8 14-8 5-5-7-10 18 14 12-6 8-20-18z"/><path d="M18 74l22-16 6 8-22 16z"/>`,
  },
  {
    slug: 'asili-yuk',
    baslik: 'Asılı yük',
    metin: 'DİKKAT! ASILI YÜK',
    tur: 'uyari',
    nerede: 'Vinç sahası, montaj alanı, prefabrik saha, liman ve depo.',
    ikon: `<path d="M18 8h60v8H50v18h-8V16H18z"/><path d="M40 34h20l8 14H32z"/><rect x="28" y="54" width="44" height="26" rx="2"/>`,
  },
  {
    slug: 'patlayici-madde',
    baslik: 'Patlayıcı madde',
    metin: 'DİKKAT! PATLAYICI ORTAM',
    tur: 'uyari',
    nerede: 'Gaz deposu, boyahane, un ve yem silosu, akaryakıt sahası.',
    ikon: `<path d="M46 52L18 34l30 6-8-28 18 24 10-16-2 22 28-6-24 16 20 18-26-8 4 26-14-22-16 18z"/>`,
  },
  {
    slug: 'forklift-calisiyor',
    baslik: 'Forklift çalışıyor',
    metin: 'DİKKAT! FORKLİFT ÇALIŞMA SAHASI',
    tur: 'uyari',
    nerede: 'Depo koridoru, yükleme rampası, sevkiyat alanı.',
    ikon: `<path d="M20 30h26v34H20z"/><path d="M52 18h8v50h22v8H52z"/><circle cx="30" cy="80" r="10"/><circle cx="62" cy="80" r="7"/>`,
  },
  {
    slug: 'vinc-sahasi-yaklasma',
    baslik: 'Vinç sahası — 25 m yaklaşmayın',
    metin: 'DİKKAT! VİNÇ ÇALIŞMA SAHASI — 25 METREDEN FAZLA YAKLAŞMAYINIZ',
    tur: 'uyari',
    nerede: 'Kule vinç çevresi, mobil vinç kurulum alanı, saha giriş noktaları.',
    ikon: `<path d="M12 12h56v7H44v10h-7V19H12z"/><path d="M34 19h7v62h-7z"/><rect x="22" y="81" width="30" height="8" rx="2"/><path d="M60 19h6v20h-6z"/><rect x="54" y="39" width="18" height="12" rx="2"/>`,
  },

  // ——— Acil kaçış / ilk yardım (yeşil) ———
  {
    slug: 'acil-cikis',
    baslik: 'Acil çıkış',
    metin: 'ACİL ÇIKIŞ',
    tur: 'acil',
    nerede: 'Kaçış kapısı üstü, koridor dönüşleri, merdiven sahanlığı.',
    ikon: `<path d="M60 10h30v80H60v-9h21V19H60z"/><circle cx="34" cy="17" r="8"/><path d="M28 28l-14 14 6 7 9-8v14l-12 16 7 6 14-16 10 14 8-6-12-18V30z"/>`,
  },
  {
    slug: 'ilk-yardim',
    baslik: 'İlk yardım',
    metin: 'İLK YARDIM MALZEMESİ',
    tur: 'acil',
    nerede: 'İlk yardım dolabı, revir kapısı, ofis ve üretim koridoru.',
    ikon: `<path d="M40 18h20v22h22v20H60v22H40V60H18V40h22z"/>`,
  },
  {
    slug: 'toplanma-yeri',
    baslik: 'Acil durum toplanma yeri',
    metin: 'ACİL DURUM TOPLANMA YERİ',
    tur: 'acil',
    nerede: 'Bina dışı toplanma alanı, otopark, saha girişi.',
    ikon: `<circle cx="34" cy="24" r="8"/><path d="M26 36h16l6 22h-8v28H28V58h-8z"/><circle cx="64" cy="28" r="7"/><path d="M57 38h14l5 20h-7v28H59V58h-7z"/><path d="M6 50l10-8v16zM94 50l-10-8v16z"/>`,
  },
  {
    slug: 'acil-goz-dusu',
    baslik: 'Acil göz duşu',
    metin: 'ACİL GÖZ DUŞU VE VÜCUT DUŞU',
    tur: 'acil',
    nerede: 'Kimyasal dolum noktası, laboratuvar, asit deposu, galvaniz hattı.',
    ikon: `<circle cx="34" cy="20" r="9"/><path d="M24 34h20v22H24z"/><path d="M50 40h26v6H50z"/><rect x="72" y="28" width="6" height="18" rx="2"/><path d="M54 52l-4 12M62 52l-4 12M70 52l-4 12" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M20 62h28v26H20z"/>`,
  },

  // ——— Yangınla mücadele (kırmızı) ———
  {
    slug: 'yangin-sondurucu',
    baslik: 'Yangın söndürücü',
    metin: 'YANGIN SÖNDÜRME CİHAZI',
    tur: 'yangin',
    nerede: 'Söndürücünün asılı olduğu noktanın hemen üstü, sütun ve kapı yanları.',
    ikon: `<rect x="36" y="26" width="30" height="62" rx="8"/><rect x="44" y="14" width="14" height="12" rx="3"/><path d="M58 18h16v6H58z"/><path d="M70 20l12 14-5 4-11-13z"/><rect x="36" y="42" width="30" height="16" rx="2" fill="#fff"/>`,
  },
  {
    slug: 'yangin-hortumu',
    baslik: 'Yangın hortumu',
    metin: 'YANGIN DOLABI',
    tur: 'yangin',
    nerede: 'Yangın dolabının bulunduğu duvar, koridor ve merdiven yanı.',
    ikon: `<circle cx="42" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="42" cy="50" r="10"/><path d="M70 36l18-8 4 8-18 8z"/><rect x="86" y="28" width="8" height="12" rx="2"/>`,
  },
  {
    slug: 'yangin-alarm-butonu',
    baslik: 'Yangın alarm butonu',
    metin: 'YANGIN İHBAR BUTONU',
    tur: 'yangin',
    nerede: 'Kaçış yolu üzerindeki ihbar butonunun üstü, çıkış kapısı yanı.',
    ikon: `<rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="7"/><circle cx="50" cy="50" r="16"/><path d="M50 4v10M8 50h10M82 50h10M50 86v10" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>`,
  },
];

export const levhaSayisi = levhalar.length;
