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
  /** Sektöre ait doğrulanmış fotoğraf dosyası adı. Yoksa sayfa görselsiz
   *  çalışır — alakasız stok koymaktansa boş bırakılır. */
  gorsel?: string;
  /** O sektöre özgü, gerçekten farklı riskler. Genel cümle yazılmaz. */
  riskler: { baslik: string; aciklama: string }[];
  odak: string[];
};

export const sektorler: Sektor[] = [
  {
    slug: 'insaat',
    gorsel: 'sektor-insaat.jpg',
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
    gorsel: 'sektor-fabrika-uretim.jpg',
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
    gorsel: 'sektor-lojistik-depo.jpg',
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
    gorsel: 'sektor-ofis-hizmet.jpg',
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
    gorsel: 'sektor-gida-restoran.jpg',
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
    gorsel: 'sektor-saglik-kurumlari.jpg',
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
  {
    slug: 'metal-kaynak',
    gorsel: 'sektor-metal-kaynak.jpg',
    ad: 'Metal işleme ve kaynak',
    h1: 'Metal İşleme ve Kaynak Atölyelerinde İş Güvenliği',
    ozet: 'Kaynak dumanı, kıvılcım, presler ve talaşlı imalatta tezgâh güvenliği.',
    tehlikeSinifi: 'Metal işleme ve kaynak faaliyetleri genellikle tehlikeli veya çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Kaynak dumanı ve gazlar', aciklama: 'Manganez, krom ve nikel içeren dumanlar solunum yoluyla alınır. Nokta aspirasyonu olmayan atölyede maske tek başına yeterli değildir; ortam ölçümü ile maruziyetin gösterilmesi gerekir.' },
      { baslik: 'Kıvılcım ve yangın', aciklama: 'Kaynak ve taşlama kıvılcımı metrelerce sıçrar. Yanıcı malzemenin uzaklaştırılması, yangın nöbeti ve sıcak çalışma izni sistemi kurulmalıdır.' },
      { baslik: 'Pres ve giyotin', aciklama: 'El koruyucu, iki el kumandası ve ışık bariyeri olmayan preste parmak ve el kaybı en sık görülen kalıcı yaralanmadır.' },
      { baslik: 'Ark ışını ve göz', aciklama: 'Kaynak arkı, yakındaki çalışanların da gözünü yakar. Kabin, perde ve uygun karartma numarası birlikte planlanır.' },
      { baslik: 'Gürültü', aciklama: 'Çekiçleme, taşlama ve pres gürültüsü sınır değeri aşar. Maruziyet ölçümle belirlenir, kulaklık en son adımdır.' },
    ],
    odak: ['risk-degerlendirmesi', 'is-hijyeni-olcumleri', 'periyodik-kontroller', 'is-guvenligi-uzmanligi'],
  },
  {
    slug: 'tekstil-konfeksiyon',
    gorsel: 'sektor-tekstil.jpg',
    ad: 'Tekstil ve konfeksiyon',
    h1: 'Tekstil ve Konfeksiyon Atölyelerinde İş Güvenliği',
    ozet: 'Pamuk tozu, makine yakalaması, ütü ve buhar, yangın yükü ve acil çıkış düzeni.',
    tehlikeSinifi: 'Tekstil faaliyetleri, işin niteliğine göre tehlikeli veya çok tehlikeli sınıfta yer alabilir.',
    riskler: [
      { baslik: 'Pamuk tozu ve solunum', aciklama: 'Kesim ve dokuma alanında biriken toz uzun vadede solunum hastalığına yol açar. Havalandırma ve periyodik ölçüm ile takip edilir.' },
      { baslik: 'Makineye kapılma', aciklama: 'Dikiş, overlok ve kesim makinelerinde saç, bileklik ve bol giysi kapılma nedenidir. Koruyucu kapak ve çalışma kıyafeti kuralı birlikte uygulanır.' },
      { baslik: 'Yangın yükü', aciklama: 'Kumaş ve elyaf hızlı yanar. Depolama düzeni, yangın algılama ve acil çıkışların kapatılmaması kritiktir.' },
      { baslik: 'Ütü, pres ve buhar', aciklama: 'Temas yanıkları ve buhar kaçağı; ekipman periyodik kontrolü ve sıcak yüzey uyarıları.' },
      { baslik: 'Tekrarlı hareket', aciklama: 'Dikiş hattında omuz, bilek ve bel şikâyetleri; çalışma yüksekliği ve mola düzeni ile azaltılır.' },
    ],
    odak: ['risk-degerlendirmesi', 'acil-durum-eylem-plani', 'is-hijyeni-olcumleri', 'isyeri-hekimligi'],
  },
  {
    slug: 'kimya-boya',
    gorsel: 'sektor-kimya-boya.jpg',
    ad: 'Kimya ve boya',
    h1: 'Kimya ve Boya Tesislerinde İş Güvenliği',
    ozet: 'Kimyasal maruziyet, patlayıcı ortam, MSDS yönetimi ve dökülme müdahalesi.',
    tehlikeSinifi: 'Kimyasal üretim ve boya faaliyetleri ağırlıklı olarak çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Patlayıcı ortam', aciklama: 'Solvent buharı patlayıcı ortam oluşturur. Patlamadan korunma dokümanı ve bölge sınıflandırması bu işyerlerinde ayrı bir yükümlülüktür.' },
      { baslik: 'Kimyasal maruziyet', aciklama: 'Solunum ve cilt yolu maruziyeti; güvenlik bilgi formları envanteri ve ortam ölçümü ile yönetilir.' },
      { baslik: 'Dökülme ve sızıntı', aciklama: 'Müdahale kiti, nötralizasyon planı ve atık yönetimi önceden yazılı olmalıdır.' },
      { baslik: 'Statik elektrik', aciklama: 'Solvent aktarımında topraklama ve eşpotansiyel bağlantı; tutuşma kaynağı olarak sık atlanır.' },
      { baslik: 'Depolama uyumsuzluğu', aciklama: 'Birbiriyle tepkimeye giren kimyasalların ayrı depolanması ve raf düzeni.' },
    ],
    odak: ['patlamadan-korunma-dokumani', 'risk-degerlendirmesi', 'is-hijyeni-olcumleri', 'acil-durum-eylem-plani'],
  },
  {
    slug: 'otomotiv-servis',
    gorsel: 'sektor-otomotiv-servis.jpg',
    ad: 'Otomotiv ve servis',
    h1: 'Oto Servis ve Bakım İşletmelerinde İş Güvenliği',
    ozet: 'Lift ve kriko güvenliği, egzoz gazı, akü asidi, boyahane ve yağ atıkları.',
    tehlikeSinifi: 'Motorlu taşıt bakım ve onarım faaliyetleri genellikle tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Araç kaldırma ekipmanı', aciklama: 'Lift ve krikoların periyodik kontrolü yapılmadığında araç altında ölümlü kaza riski doğar.' },
      { baslik: 'Egzoz gazı', aciklama: 'Kapalı serviste karbon monoksit birikir. Egzoz tahliye hortumu ve havalandırma zorunludur.' },
      { baslik: 'Boyahane ve solvent', aciklama: 'Boya kabini havalandırması, solvent buharı ve patlayıcı ortam değerlendirmesi.' },
      { baslik: 'Akü ve asit', aciklama: 'Şarj sırasında hidrojen birikmesi ve asit sıçraması; göz duşu ve havalandırma.' },
      { baslik: 'Lastik ve jant', aciklama: 'Patlama kafesi olmadan yapılan şişirme işlemi ağır yaralanmaya yol açar.' },
    ],
    odak: ['risk-degerlendirmesi', 'periyodik-kontroller', 'is-guvenligi-uzmanligi', 'isyeri-hekimligi'],
  },
  {
    slug: 'enerji-elektrik',
    gorsel: 'sektor-enerji-elektrik.jpg',
    ad: 'Enerji ve elektrik',
    h1: 'Enerji ve Elektrik İşlerinde İş Güvenliği',
    ozet: 'Elektrik çarpması, ark parlaması, kilitleme-etiketleme ve yüksekte çalışma.',
    tehlikeSinifi: 'Elektrik üretim, iletim ve tesisat işleri ağırlıklı olarak çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Elektrik çarpması', aciklama: 'Gerilim altında çalışma yasağı, beşli altın kural ve yetkili personel tanımı yazılı olmalıdır.' },
      { baslik: 'Ark parlaması', aciklama: 'Pano müdahalesinde ark riski; ark dayanımlı kıyafet ve mesafe kuralları.' },
      { baslik: 'Kilitleme ve etiketleme', aciklama: 'Enerjinin kesildiğinin doğrulanması ve yanlışlıkla devreye alınmasının fiziksel olarak engellenmesi.' },
      { baslik: 'Yüksekte çalışma', aciklama: 'Direk, trafo ve çatı üstü panellerde düşme durdurma sistemi.' },
      { baslik: 'Topraklama ölçümü', aciklama: 'Topraklama direnci ve kaçak akım korumasının periyodik olarak ölçülmesi.' },
    ],
    odak: ['risk-degerlendirmesi', 'periyodik-kontroller', 'is-guvenligi-uzmanligi', 'acil-durum-eylem-plani'],
  },
  {
    slug: 'egitim-kurumlari',
    gorsel: 'sektor-egitim-kurumlari.jpg',
    ad: 'Okul ve kreş',
    h1: 'Okul, Kreş ve Eğitim Kurumlarında İş Güvenliği',
    ozet: 'Tahliye planı, laboratuvar ve atölye güvenliği, mutfak hijyeni, oyun alanı.',
    tehlikeSinifi: 'Eğitim faaliyetleri genellikle az tehlikeli sınıfta yer alır; atölye ve laboratuvar içeren kurumlarda sınıf değişebilir.',
    riskler: [
      { baslik: 'Tahliye ve tatbikat', aciklama: 'Çok sayıda ve yaşça küçük kişinin bulunduğu binada tahliye süresi kritiktir; tatbikat kayıtlı yapılmalıdır.' },
      { baslik: 'Laboratuvar ve atölye', aciklama: 'Meslek liselerinde tezgâh, kimyasal ve elektrik riski; öğrenci de korunması gereken kişidir.' },
      { baslik: 'Mutfak ve yemekhane', aciklama: 'Sıcak yüzey, kesici alet ve hijyen; personelin sağlık raporları takip edilir.' },
      { baslik: 'Oyun alanı ve donanım', aciklama: 'Zemin, tırmanma ekipmanı ve keskin köşe kontrolleri periyodik yapılır.' },
      { baslik: 'Bina ve elektrik tesisatı', aciklama: 'Eski binalarda topraklama, pano ve kaçak akım koruması ölçümle doğrulanır.' },
    ],
    odak: ['risk-degerlendirmesi', 'acil-durum-eylem-plani', 'periyodik-kontroller', 'isg-danismanligi'],
  },
  {
    slug: 'perakende-magaza',
    gorsel: 'sektor-perakende-magaza.jpg',
    ad: 'Perakende ve mağaza',
    h1: 'Mağaza ve Perakende İşletmelerinde İş Güvenliği',
    ozet: 'Depo rafı, yük taşıma, kasa ergonomisi, müşteri yoğunluğu ve acil çıkış.',
    tehlikeSinifi: 'Perakende ticaret faaliyetleri genellikle az tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Raf ve istifleme', aciklama: 'Devrilen raf ve yüksekten düşen ürün; raf sabitleme ve ağırlık dağılımı kontrol edilir.' },
      { baslik: 'Manuel yük taşıma', aciklama: 'Depo-reyon arası taşımada bel yaralanması; transpalet ve taşıma tekniği eğitimi.' },
      { baslik: 'Kayma ve düşme', aciklama: 'Islak zemin, kablo ve koli; uyarı levhası ve düzen kuralı.' },
      { baslik: 'Acil çıkış ve yoğunluk', aciklama: 'Kampanya günlerinde çıkışların koli ile kapatılması sık görülen ihlaldir.' },
      { baslik: 'Soğuk hava deposu', aciklama: 'İçeride mahsur kalma, düşük sıcaklık maruziyeti ve içeriden açılabilen kapı.' },
    ],
    odak: ['risk-degerlendirmesi', 'acil-durum-eylem-plani', 'isg-danismanligi', 'isyeri-hekimligi'],
  },
  {
    slug: 'otel-konaklama',
    gorsel: 'sektor-otel-konaklama.jpg',
    ad: 'Otel ve konaklama',
    h1: 'Otel ve Konaklama Tesislerinde İş Güvenliği',
    ozet: 'Mutfak, çamaşırhane, kat hizmetleri, havuz ve yangın tahliyesi.',
    tehlikeSinifi: 'Konaklama faaliyetleri genellikle az tehlikeli veya tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Mutfak', aciklama: 'Sıcak yağ, kesici alet ve kayma; en yüksek kaza sıklığı burada görülür.' },
      { baslik: 'Çamaşırhane', aciklama: 'Ütü ve kurutma makinelerinde sıcaklık, buhar ve kapılma riski.' },
      { baslik: 'Kat hizmetleri', aciklama: 'Temizlik kimyasalları, tekrarlı hareket ve yalnız çalışma.' },
      { baslik: 'Havuz ve teknik hacim', aciklama: 'Klor odası, kimyasal dozajlama ve kapalı alan girişi.' },
      { baslik: 'Yangın ve tahliye', aciklama: 'Misafirin bina planını bilmemesi tahliyeyi zorlaştırır; personel görev dağılımı yazılı olmalıdır.' },
    ],
    odak: ['risk-degerlendirmesi', 'acil-durum-eylem-plani', 'isyeri-hekimligi', 'isg-danismanligi'],
  },
  {
    slug: 'temizlik-peyzaj',
    gorsel: 'sektor-temizlik-peyzaj.jpg',
    ad: 'Temizlik ve peyzaj',
    h1: 'Temizlik ve Peyzaj Hizmetlerinde İş Güvenliği',
    ozet: 'Kimyasal maruziyet, yüksekte cam temizliği, kesici bahçe ekipmanları, dağınık saha.',
    tehlikeSinifi: 'Bina temizliği ve peyzaj faaliyetleri genellikle tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Temizlik kimyasalları', aciklama: 'Karıştırıldığında zehirli gaz açığa çıkaran ürünler; etiket ve güvenlik bilgi formu eğitimi şarttır.' },
      { baslik: 'Yüksekte çalışma', aciklama: 'Cephe ve cam temizliğinde askı sistemi, halat ve düşme durdurma planı.' },
      { baslik: 'Kesici ve döner ekipman', aciklama: 'Çim biçme, tırpan ve testerede sıçrayan cisim ve kesilme.' },
      { baslik: 'Dağınık saha yönetimi', aciklama: 'Personel birden çok adreste çalışır; gözetim, iletişim ve acil durum bildirimi kurgulanmalıdır.' },
      { baslik: 'Biyolojik etkenler', aciklama: 'Atık toplama ve tuvalet temizliğinde enfeksiyon riski, aşı ve KKD yönetimi.' },
    ],
    odak: ['risk-degerlendirmesi', 'is-guvenligi-uzmanligi', 'isyeri-hekimligi', 'acil-durum-eylem-plani'],
  },
  {
    slug: 'matbaa-ambalaj',
    gorsel: 'sektor-matbaa-ambalaj.jpg',
    ad: 'Matbaa ve ambalaj',
    h1: 'Matbaa ve Ambalaj Tesislerinde İş Güvenliği',
    ozet: 'Mürekkep ve solvent, silindir yakalaması, gürültü ve kâğıt tozu.',
    tehlikeSinifi: 'Basım ve ambalaj faaliyetleri genellikle tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Silindir ve merdane', aciklama: 'Dönen silindire el kapılması matbaada en ağır yaralanma nedenidir; acil stop ve koruyucu kapak.' },
      { baslik: 'Solvent ve mürekkep', aciklama: 'Uçucu organik bileşik maruziyeti ve patlayıcı ortam ihtimali.' },
      { baslik: 'Kâğıt tozu ve yangın', aciklama: 'Biriken toz hem solunur hem yangın yükü oluşturur.' },
      { baslik: 'Gürültü', aciklama: 'Baskı ve kesim hattında sürekli gürültü; ölçüm ve maruziyet takibi.' },
      { baslik: 'Giyotin ve kesim', aciklama: 'Kâğıt kesme makinelerinde iki el kumandası ve bakım sırasında enerji izolasyonu.' },
    ],
    odak: ['risk-degerlendirmesi', 'is-hijyeni-olcumleri', 'periyodik-kontroller', 'is-guvenligi-uzmanligi'],
  },
  {
    slug: 'ahsap-mobilya',
    gorsel: 'sektor-ahsap-mobilya.jpg',
    ad: 'Ahşap ve mobilya',
    h1: 'Ahşap İşleme ve Mobilya Atölyelerinde İş Güvenliği',
    ozet: 'Ahşap tozu, daire testere, tutkal ve vernik, toz patlaması riski.',
    tehlikeSinifi: 'Ahşap işleme faaliyetleri genellikle tehlikeli veya çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Daire testere ve planya', aciklama: 'Geri tepme ve parmak kaybı; yarma bıçağı, koruyucu kapak ve itici çubuk kullanımı.' },
      { baslik: 'Ahşap tozu', aciklama: 'Sert ağaç tozu solunum yoluyla alınır ve uzun vadede ciddi sağlık etkisi vardır; nokta emişi ve ölçüm gerekir.' },
      { baslik: 'Toz patlaması', aciklama: 'Biriken ince toz bulutu patlayıcı ortam oluşturabilir; patlamadan korunma dokümanı gündeme gelir.' },
      { baslik: 'Tutkal ve vernik', aciklama: 'Solvent buharı, cilt teması ve havalandırma yetersizliği.' },
      { baslik: 'Gürültü ve titreşim', aciklama: 'El aletleri ve tezgâhlarda maruziyetin ölçümle takibi.' },
    ],
    odak: ['risk-degerlendirmesi', 'is-hijyeni-olcumleri', 'patlamadan-korunma-dokumani', 'periyodik-kontroller'],
  },
  {
    slug: 'madencilik',
    gorsel: 'sektor-madencilik.jpg',
    ad: 'Madencilik ve taş ocağı',
    h1: 'Madencilik ve Taş Ocaklarında İş Güvenliği',
    ozet: 'Göçük, patlatma, toz ve gaz, nakliye ve kurtarma organizasyonu.',
    tehlikeSinifi: 'Madencilik faaliyetleri çok tehlikeli sınıfta yer alır.',
    riskler: [
      { baslik: 'Göçük ve tahkimat', aciklama: 'Yeraltı ve açık ocakta duraylılık değerlendirmesi ve tahkimat planı.' },
      { baslik: 'Patlatma', aciklama: 'Patlayıcı madde depolama, ateşleme güvenliği ve emniyet mesafesi.' },
      { baslik: 'Toz ve gaz', aciklama: 'Silis tozu ve metan gibi gazların sürekli ölçümü ve havalandırma.' },
      { baslik: 'Nakliye ve iş makinesi', aciklama: 'Ağır araç trafiği, kör nokta ve yaya ayrımı.' },
      { baslik: 'Kurtarma organizasyonu', aciklama: 'Tahliye yolları, kurtarma ekibi ve haberleşme sisteminin tatbikatla sınanması.' },
    ],
    odak: ['risk-degerlendirmesi', 'acil-durum-eylem-plani', 'is-guvenligi-uzmanligi', 'is-hijyeni-olcumleri'],
  },
];
