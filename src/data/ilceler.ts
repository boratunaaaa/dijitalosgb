/**
 * Saha hizmeti sayfalarının üretildiği ilçe listesi.
 *
 * Neden 81 il değil: OSGB'ler kurulu oldukları il ve sınır komşusu illerde
 * hizmet verebilir (İSG Hizmetleri Yönetmeliği). İş ortağı OSGB İstanbul'da
 * olduğu için satılabilir alan İstanbul + Kocaeli + Tekirdağ. Ülke geneline
 * sayfa açmak, hizmet verilemeyecek yerlerden talep toplamak olurdu.
 *
 * `vurgu` alanı zorunlu ve bilerek öyle: şehir adı değişen kopya sayfalar
 * Google'da da okuyucuda da işe yaramaz. Her sayfa o ilçeye dair gerçek bir
 * şey söylemek zorunda.
 */
export type Ilce = {
  slug: string;
  ad: string;
  il: "İstanbul" | "Kocaeli" | "Tekirdağ";
  vurgu: string;
  /**
   * İlçede yoğun olan iş kolları — `sektorler.ts` slug'ları.
   * UYDURULMADI: her biri yukarıdaki `vurgu` metninde zaten adı geçen
   * sektörlerden seçildi, yani aynı kaynağın makine okunabilir hâli.
   * Sayfada ilgili sektör sayfalarına bağlanmak için kullanılıyor.
   */
  sektorler: string[];
  /** İlçede baskın tehlike sınıfı — eğitim ve süre hesabının çıkış noktası. */
  baskinSinif: "az-tehlikeli" | "tehlikeli" | "cok-tehlikeli" | "karma";
};

export const ilceler: Ilce[] = [
  {
    slug: "esenyurt",
    ad: "Esenyurt",
    il: "İstanbul",
    vurgu:
      "İstanbul'un en kalabalık ilçesi ve yoğun bir küçük imalat dokusu var. " +
      "Tekstil, plastik ve gıda üretimi yapan işyerlerinin büyük bölümü " +
      "tehlikeli sınıfta; bu da 12 ders saatlik temel eğitim ve daha sık " +
      "işyeri hekimi görevlendirmesi demek.",
    sektorler: ["tekstil-konfeksiyon", "kimya-boya", "gida-restoran", "ahsap-mobilya"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "kadikoy",
    ad: "Kadıköy",
    il: "İstanbul",
    vurgu:
      "Ağırlık ofis, kafe-restoran ve perakende. Bu işyerlerinin çoğu az " +
      "tehlikeli sınıfta, yani temel eğitim 8 ders saati ve tamamı uzaktan " +
      "verilebiliyor — sahaya çıkmadan tamamlanabilen ender segmentlerden.",
    sektorler: ["ofis-hizmet", "gida-restoran", "perakende-magaza"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "umraniye",
    ad: "Ümraniye",
    il: "İstanbul",
    vurgu:
      "Organize sanayi ile plaza ofislerinin yan yana olduğu karma bir ilçe. " +
      "Aynı firmanın merkez ofisi az tehlikeli, üretim tesisi çok tehlikeli " +
      "sınıfta olabiliyor; yükümlülük tek tek işyeri bazında hesaplanmalı.",
    sektorler: ["ofis-hizmet", "fabrika-uretim", "metal-kaynak", "lojistik-depo"],
    baskinSinif: "karma",
  },
  {
    slug: "basaksehir",
    ad: "Başakşehir",
    il: "İstanbul",
    vurgu:
      "İkitelli OSB ve çevresindeki üretim yoğunluğu ilçeyi ağırlıklı olarak " +
      "tehlikeli ve çok tehlikeli sınıfa taşıyor. Çok tehlikeli sınıfta " +
      "temel eğitim 16 ders saati ve 4. konu başlığı yüz yüze zorunlu.",
    sektorler: ["fabrika-uretim", "metal-kaynak", "matbaa-ambalaj", "tekstil-konfeksiyon"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "kocaeli",
    ad: "Kocaeli",
    il: "Kocaeli",
    vurgu:
      "Ağır sanayi, kimya ve otomotiv yan sanayinin merkezi. Çok tehlikeli " +
      "sınıf burada istisna değil kural; ortam ölçümü ve acil durum planı " +
      "gereklilikleri de buna göre ağırlaşıyor.",
    sektorler: ["kimya-boya", "otomotiv-servis", "fabrika-uretim", "enerji-elektrik"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "tekirdag",
    ad: "Tekirdağ",
    il: "Tekirdağ",
    vurgu:
      "Çorlu ve Çerkezköy hattındaki tekstil ve kimya tesisleri ilçeyi " +
      "tehlikeli sınıf ağırlıklı yapıyor. İstanbul'a sınır komşusu olduğu " +
      "için saha hizmeti kapsamımızda.",
    sektorler: ["tekstil-konfeksiyon", "kimya-boya", "fabrika-uretim"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "adalar",
    ad: "Adalar",
    il: "İstanbul",
    vurgu:
      "Turizm, konaklama ve restoran hizmetlerinin yoğun olduğu bir ilçe. Az tehlikeli sınıf ağırlıklı olsa da deniz taşımacılığı ve lojistik süreçlerinde tehlikeli sınıf uygulamaları dikkat gerektiriyor.",
    sektorler: ["gida-restoran", "ofis-hizmet"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "arnavutkoy",
    ad: "Arnavutköy",
    il: "İstanbul",
    vurgu:
      "İstanbul Havalimanı'nın etkisiyle lojistik, depolama ve inşaat faaliyetlerinin hızla arttığı bir bölge. Tehlikeli ve çok tehlikeli işkollarında yüksek oranda iş sağlığı ve güvenliği hizmetine ihtiyaç duyuluyor.",
    sektorler: ["lojistik-depo", "insaat-taahhut", "fabrika-uretim"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "atasehir",
    ad: "Ataşehir",
    il: "İstanbul",
    vurgu:
      "Finans merkezi ve beyaz yaka ofis yoğunluğu ile dikkat çeken bir ilçe. Plaza hayatının gereksinimleri olan ergonomi, ekranlı araçlarla çalışma ve acil durum tahliye planları öne çıkıyor.",
    sektorler: ["ofis-hizmet", "bilisim-yazilim", "gida-restoran"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "avcilar",
    ad: "Avcılar",
    il: "İstanbul",
    vurgu:
      "Ambarlı Limanı ve çevresindeki sanayi tesisleriyle lojistik ve üretim sektörlerinin kalbi konumunda. Tehlikeli madde taşımacılığı ve ağır sanayi kuralları ilçede İSG'nin temelini oluşturuyor.",
    sektorler: ["lojistik-depo", "fabrika-uretim", "metal-kaynak"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "bagcilar",
    ad: "Bağcılar",
    il: "İstanbul",
    vurgu:
      "Tekstil, matbaa ve hafif imalat sektörlerinde çok sayıda küçük ve orta ölçekli işletmeyi barındırıyor. Makine koruyucuları, yangın güvenliği ve toz maruziyeti bu atölyelerde kritik öneme sahip.",
    sektorler: ["tekstil-konfeksiyon", "matbaa-ambalaj", "plastik-kaucuk"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "bahcelievler",
    ad: "Bahçelievler",
    il: "İstanbul",
    vurgu:
      "Kuyumculuk imalatı, tekstil ve gıda sektörlerinde yoğunlaşan bir sanayi ve ticaret yapısı var. Özellikle kimyasal kullanımı ve ergonomik riskler ön plana çıkıyor.",
    sektorler: ["tekstil-konfeksiyon", "gida-restoran", "kimya-boya"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "bakirkoy",
    ad: "Bakırköy",
    il: "İstanbul",
    vurgu:
      "Sağlık sektörü, hastaneler ve perakende mağazacılık ağırlıklı bir ilçe. Biyolojik risk etmenleri ve vardiyalı çalışma düzenine yönelik özel sağlık gözetimleri uygulanması gerekiyor.",
    sektorler: ["saglik-hastane", "perakende-magaza", "ofis-hizmet"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "bayrampasa",
    ad: "Bayrampaşa",
    il: "İstanbul",
    vurgu:
      "Kuru gıda hali, plastik enjeksiyon ve makine imalat atölyelerinin yoğun olduğu eski bir sanayi merkezi. Forklift kullanımı, yangın riski ve makine emniyeti denetimlerde ilk sırayı alıyor.",
    sektorler: ["plastik-kaucuk", "metal-kaynak", "lojistik-depo"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "besiktas",
    ad: "Beşiktaş",
    il: "İstanbul",
    vurgu:
      "Medya, reklam, bilişim ve turizm sektörlerinin merkezi. Ekranlı araçlarla çalışma eğitimleri, psikososyal risk faktörleri ve ofis ergonomisi en çok talep gören hizmetler arasında.",
    sektorler: ["ofis-hizmet", "bilisim-yazilim", "gida-restoran"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "beykoz",
    ad: "Beykoz",
    il: "İstanbul",
    vurgu:
      "Lojistik, depo ve butik imalat atölyelerinin yanı sıra turizm işletmelerinin bulunduğu karma bir ilçe. Yüksekte çalışma ve kaldırma ekipmanlarının periyodik kontrolleri büyük önem taşıyor.",
    sektorler: ["lojistik-depo", "gida-restoran", "ahsap-mobilya"],
    baskinSinif: "karma",
  },
  {
    slug: "beylikduzu",
    ad: "Beylikdüzü",
    il: "İstanbul",
    vurgu:
      "Mermer, plastik, alüminyum ve gıda üzerine faaliyet gösteren modern sanayi sitelerine ev sahipliği yapıyor. Organize sanayi bölgelerindeki tesisler genellikle çok tehlikeli sınıfta yer alıyor.",
    sektorler: ["fabrika-uretim", "plastik-kaucuk", "metal-kaynak"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "beyoglu",
    ad: "Beyoğlu",
    il: "İstanbul",
    vurgu:
      "Konaklama, restoran, eğlence ve perakende sektörlerinin kalbi. Yüksek yangın riski, tarihi binalarda acil durum tahliyesi ve mutfak güvenliği denetimlerin odak noktasını oluşturuyor.",
    sektorler: ["gida-restoran", "perakende-magaza", "ofis-hizmet"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "buyukcekmece",
    ad: "Büyükçekmece",
    il: "İstanbul",
    vurgu:
      "İnşaat, tarım ve lojistik faaliyetlerinin birlikte yürütüldüğü geniş yüzölçümlü bir ilçe. Şantiye güvenliği, iskele kurulumu ve yüksekte çalışma eğitimleri zorunlu tutuluyor.",
    sektorler: ["insaat-taahhut", "lojistik-depo", "gida-restoran"],
    baskinSinif: "karma",
  },
  {
    slug: "catalca",
    ad: "Çatalca",
    il: "İstanbul",
    vurgu:
      "Tarım, hayvancılık, gıda üretimi ve depolama tesislerinin bulunduğu, yüzölçümü en büyük ilçe. Traktör kullanımı, kimyasal gübre/ilaç depolaması ve biyolojik riskler öne çıkıyor.",
    sektorler: ["gida-restoran", "lojistik-depo", "fabrika-uretim"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "cekmekoy",
    ad: "Çekmeköy",
    il: "İstanbul",
    vurgu:
      "Konut projelerinin hızla arttığı, perakende ve hizmet sektörünün büyüdüğü bir ilçe. Şantiyelerde düşme koruma sistemleri, mağazalarda ise acil durum planları öncelikli.",
    sektorler: ["insaat-taahhut", "perakende-magaza", "ofis-hizmet"],
    baskinSinif: "karma",
  },
  {
    slug: "esenler",
    ad: "Esenler",
    il: "İstanbul",
    vurgu:
      "Tekstil, ayakkabı ve metal işleme atölyelerinin ara sokaklarda ve iş hanlarında yoğunlaştığı bir bölge. Elektrik tesisatı güvenliği, havalandırma ve kimyasal kullanımı acil müdahale gerektiriyor.",
    sektorler: ["tekstil-konfeksiyon", "plastik-kaucuk", "metal-kaynak"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "eyupsultan",
    ad: "Eyüpsultan",
    il: "İstanbul",
    vurgu:
      "Gıda imalatı, orman ürünleri işleme ve lojistik sektörlerinin bulunduğu tarihi ve geniş bir ilçe. Ahşap atölyelerinde toz maruziyeti ve yangın, İSG planlamasında ilk sırayı alıyor.",
    sektorler: ["ahsap-mobilya", "gida-restoran", "lojistik-depo"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "fatih",
    ad: "Fatih",
    il: "İstanbul",
    vurgu:
      "Tarihi yarımadada tekstil ticareti, turizm, konaklama ve küçük çaplı altın/gümüş imalatı yapılıyor. Eski binalarda elektrik tesisatı yangınları ve ergonomik sorunlar sıkça yaşanıyor.",
    sektorler: ["perakende-magaza", "gida-restoran", "tekstil-konfeksiyon"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "gaziosmanpasa",
    ad: "Gaziosmanpaşa",
    il: "İstanbul",
    vurgu:
      "Kentsel dönüşüm şantiyeleri ile tekstil ve hafif metal sanayisinin iç içe geçtiği bir bölge. Kazı güvenliği, yüksekte çalışma ve iskele standartları şantiyelerde sıkı denetleniyor.",
    sektorler: ["insaat-taahhut", "tekstil-konfeksiyon", "metal-kaynak"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "gungoren",
    ad: "Güngören",
    il: "İstanbul",
    vurgu:
      "Merter tekstil piyasasının kalbi. Yoğun iş hanlarında konfeksiyon, ütü-paket ve mağazacılık faaliyetleri yürütülüyor. Kumaş tozu, buhar jeneratörleri ve yangın merdivenlerinin açıklığı hayati öneme sahip.",
    sektorler: ["tekstil-konfeksiyon", "perakende-magaza", "lojistik-depo"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "kagithane",
    ad: "Kâğıthane",
    il: "İstanbul",
    vurgu:
      "Sanayiden ofis ve hizmet sektörüne dönüşümünü büyük ölçüde tamamlamış bir ilçe. Yine de matbaacılık ve otomotiv servisleri varlığını sürdürüyor, karma bir İSG yapısı gerektiriyor.",
    sektorler: ["ofis-hizmet", "matbaa-ambalaj", "otomotiv-servis"],
    baskinSinif: "karma",
  },
  {
    slug: "kartal",
    ad: "Kartal",
    il: "İstanbul",
    vurgu:
      "Otomotiv yan sanayi, makine imalatı ve inşaat projelerinin yoğunlaştığı, sanayi ve konutun birleştiği nokta. Çok tehlikeli sınıfta 16 saatlik temel İSG eğitimleri ve düzenli sağlık gözetimi zorunlu.",
    sektorler: ["fabrika-uretim", "otomotiv-servis", "insaat-taahhut"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "kucukcekmece",
    ad: "Küçükçekmece",
    il: "İstanbul",
    vurgu:
      "İkitelli OSB'nin bir kısmını barındıran, metal, plastik ve tekstil sektörlerinin güçlü olduğu bir ilçe. Ağır iş makineleri, pres tezgahları ve kimyasal buhar maruziyeti odak noktası.",
    sektorler: ["metal-kaynak", "plastik-kaucuk", "tekstil-konfeksiyon"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "maltepe",
    ad: "Maltepe",
    il: "İstanbul",
    vurgu:
      "Ofis alanlarının, üniversitelerin ve E-5 hattında otomotiv servislerinin bir araya geldiği bir ilçe. Hizmet sektöründe ekranlı araçlarla çalışma, servislerde ise kimyasal ve mekanik riskler öne çıkıyor.",
    sektorler: ["ofis-hizmet", "otomotiv-servis", "perakende-magaza"],
    baskinSinif: "karma",
  },
  {
    slug: "pendik",
    ad: "Pendik",
    il: "İstanbul",
    vurgu:
      "Tersaneler, havalimanı ve sanayi siteleriyle çok tehlikeli sınıfın merkez üssü. Kapalı alanda çalışma, sıcak çalışma izinleri ve patlamadan korunma dokümanı (PKD) hazırlığı Pendik'te istisna değil, kural.",
    sektorler: ["metal-kaynak", "fabrika-uretim", "lojistik-depo"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "sancaktepe",
    ad: "Sancaktepe",
    il: "İstanbul",
    vurgu:
      "Lojistik merkezleri, depolama alanları ve hafif imalat tesislerinin yeni cazibe merkezi. Forklift yaya yollarının ayrılması, raf statik kontrolleri ve yangın pompaları denetleniyor.",
    sektorler: ["lojistik-depo", "fabrika-uretim", "metal-kaynak"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "sariyer",
    ad: "Sarıyer",
    il: "İstanbul",
    vurgu:
      "Maslak iş merkezi hattıyla plaza kültürünün, İstinye tarafıyla perakende ve restoranların yoğun olduğu bölge. İş yerleri genelde az tehlikeli sınıfta yer alıyor; acil durum tatbikatları önem taşıyor.",
    sektorler: ["ofis-hizmet", "bilisim-yazilim", "gida-restoran"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "silivri",
    ad: "Silivri",
    il: "İstanbul",
    vurgu:
      "Büyük sanayi tesisleri, gıda üretim fabrikaları ve tarım arazilerini içinde barındırıyor. Gıda hijyeni ölçümleri, makine koruyucuları ve ambalaj hatlarında iş güvenliği öncelikli.",
    sektorler: ["fabrika-uretim", "gida-restoran", "plastik-kaucuk"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "sultanbeyli",
    ad: "Sultanbeyli",
    il: "İstanbul",
    vurgu:
      "Ahşap işleme, mobilya, otomotiv tamir ve yedek parça üretimi ağırlıklı küçük sanayi siteleri mevcut. Ahşap tozu patlamaları, solvent buharları ve gürültü ölçümleri sıkça yapılıyor.",
    sektorler: ["ahsap-mobilya", "otomotiv-servis", "metal-kaynak"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "sultangazi",
    ad: "Sultangazi",
    il: "İstanbul",
    vurgu:
      "Mermer işleme, tekstil, ayakkabı ve inşaat malzemeleri üretimi çok yaygın. Özellikle mermer tozuna bağlı pnömokonyoz riski ve pres makinelerindeki sıkışma tehlikesi işyeri hekimliğinin ana gündemi.",
    sektorler: ["tekstil-konfeksiyon", "fabrika-uretim", "plastik-kaucuk"],
    baskinSinif: "tehlikeli",
  },
  {
    slug: "sile",
    ad: "Şile",
    il: "İstanbul",
    vurgu:
      "Madencilik, kum ocakları ve turizm faaliyetleri bir arada. Maden ocaklarında göçük, iş makinesi kazaları ve toz maruziyeti, turizmde ise gıda güvenliği İSG'nin iki farklı yüzünü gösteriyor.",
    sektorler: ["insaat-taahhut", "gida-restoran", "lojistik-depo"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "sisli",
    ad: "Şişli",
    il: "İstanbul",
    vurgu:
      "Hastaneler, oteller, alışveriş merkezleri ve ofis bloklarının kalbi. Biyolojik risk etmenleri, vardiyalı çalışma, havalandırma sistemleri bakımı ve ergonomik riskler ön planda.",
    sektorler: ["saglik-hastane", "ofis-hizmet", "perakende-magaza"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "tuzla",
    ad: "Tuzla",
    il: "İstanbul",
    vurgu:
      "Gemi inşa (tersane), kimya sanayi ve metal işlemenin merkezi. Sürekli değişen çalışma ortamı, kapalı alanlarda kaynak, ağır kaldırma ve zehirli gaz riskleri Tuzla'yı İSG'de en kritik ilçe yapıyor.",
    sektorler: ["metal-kaynak", "kimya-boya", "fabrika-uretim"],
    baskinSinif: "cok-tehlikeli",
  },
  {
    slug: "uskudar",
    ad: "Üsküdar",
    il: "İstanbul",
    vurgu:
      "Eğitim kurumları, hastaneler ve perakende ticaretin yoğun olduğu bir ilçe. Okullarda acil durum planlaması, hastanelerde atık yönetimi ve radyasyon güvenliği önceliklendiriliyor.",
    sektorler: ["saglik-hastane", "perakende-magaza", "ofis-hizmet"],
    baskinSinif: "az-tehlikeli",
  },
  {
    slug: "zeytinburnu",
    ad: "Zeytinburnu",
    il: "İstanbul",
    vurgu:
      "Tekstil, deri işleme, konfeksiyon ve kentsel dönüşüm şantiyeleriyle hareketli bir bölge. Deri atölyelerindeki kimyasallar (krom vb.) ve tekstil tozu maruziyeti özel sağlık gözetimi gerektiriyor.",
    sektorler: ["tekstil-konfeksiyon", "insaat-taahhut", "lojistik-depo"],
    baskinSinif: "tehlikeli",
  },
];
