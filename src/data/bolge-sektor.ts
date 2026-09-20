/**
 * Bölge × sektör içerik sayfaları.
 *
 * NEDEN VERİ, NEDEN AYRI .astro DOSYASI DEĞİL: Bu sayfalar orkestratör
 * tarafından üretiliyor. Otomatik üretimin serbestçe .astro dosyası
 * yazabilmesi, şablonun her üretimde biraz kaymasına ve zamanla kontrolsüz
 * bir sayfa fabrikasına dönüşmesine açık kapı bırakırdı. Şablon burada tek
 * ve insan tarafından gözden geçirilmiş; üretim yalnız VERİ ekleyebiliyor.
 *
 * DOLDURULMA KURALI: Bu diziye bir kayıt, ancak `seo_content_engine` kalite
 * kapılarının tamamından geçtikten sonra girer. Elle eklenen bir kayıt da
 * aynı kurallara uymak zorundadır:
 *
 *  - Her bölüm o ilçe/sektör için yazılmış olmalı. İlçe adı değiştirildiğinde
 *    metin hâlâ doğru kalıyorsa, içerik özgün değildir ve girmez.
 *  - Sayısal veya hukuki her iddia `kaynaklar` alanında bir resmî kaynağa
 *    bağlanmalı (Resmî Gazete, mevzuat.gov.tr, ÇSGB, İSGGM, MYK, KVKK).
 *  - "Bu bölgede yüzlerce firma" gibi kaynağı olmayan sayı YAZILMAZ.
 *  - Sahte vaka, sahte yorum, sahte istatistik YAZILMAZ.
 *  - Saha hizmeti ifadesi yalnız gerçekten hizmet verilen illerde kullanılır.
 */

export type BolgeSektorBolum = {
  baslik: string;
  /** Paragraflar. Liste gerekiyorsa `maddeler` kullanılır. */
  paragraflar?: string[];
  maddeler?: string[];
};

export type BolgeSektorSayfa = {
  slug: string;
  /** Sayfa tipi — registry ile aynı sözlük. */
  tip: "ilce" | "ilce-sektor" | "ilce-hizmet" | "sektor-rehber" | "isveren-rehber";
  il: string;
  ilce?: string;
  /** sektorler.ts slug'ı — varsa sektör sayfasına bağlanır. */
  sektorSlug?: string;
  /** hizmetler.ts slug'ı — varsa hizmet sayfasına bağlanır. */
  hizmetSlug?: string;

  seoBaslik: string;
  metaAciklama: string;
  h1: string;
  /** 2-3 cümle; doğrudan arama niyetine cevap. */
  giris: string;

  bolumler: BolgeSektorBolum[];
  sss: { soru: string; cevap: string }[];

  /** En az 4, en fazla 10 anlamlı iç link. */
  icLinkler: { metin: string; href: string }[];

  /** Hukuki/sayısal iddiaların dayandığı resmî kaynaklar. */
  kaynaklar: { ad: string; url?: string }[];

  /** Sayfaya özel birincil eylem. Boşsa varsayılan ön değerlendirme. */
  cta?: { metin: string; href: string };

  /** Saha hizmeti verilebilen bir bölge mi? Metindeki ifadeleri bu belirler. */
  sahaHizmeti: boolean;

  /**
   * FAQPage şeması basılsın mı?
   *
   * OTOMATİK DEĞİL, BİLEREK: `sss` dolu diye şema basmak "rich result
   * çıksın" beklentisidir. Google'ın bu sonuç tipine desteği daralmış
   * durumda ve zorunlu olmayan her şema bakım yüküdür. Karar motorun
   * `faq_semasi_uygun_mu` kapısından geliyor: sayfa rehber niteliğinde
   * olacak ve SSS sayısı anlamlı olacak.
   */
  faqSemasi?: boolean;

  /** Motorun verdiği puan ve ölçümler — şeffaflık için saklanıyor. */
  uretim: {
    yayinTarihi: string;
    /** Gerçek son ANLAMLI içerik değişikliği; her derlemede güncellenmez. */
    guncellemeTarihi?: string;
    kalitePuani: number;
    benzerlikEnYuksek: number;
  };

  /** Arama motorlarına kapatılsın mı? Yardımcı sayfalar için. */
  indexDisi?: boolean;
};

export const bolgeSektorSayfalari: BolgeSektorSayfa[] = [
  {
    "slug": "tuzla-metal-kaynak",
    "tip": "ilce-sektor",
    "il": "İstanbul",
    "ilce": "Tuzla",
    "sektorSlug": "metal-kaynak",
    "seoBaslik": "Tuzla Metal ve Kaynak İşlerinde İş Güvenliği",
    "metaAciklama": "Tuzla'daki metal işleme ve gemi bakım atölyelerinde sıcak çalışma izni, kapalı alan girişi ve gaz ölçümü nasıl kurulur? Yükümlülükler ve uygulama düzeni.",
    "h1": "Tuzla'da metal işleme ve kaynak atölyelerinde iş güvenliği",
    "giris": "Tuzla'da gemi bakım ve onarımıyla ilişkili metal işlerine rastlanabiliyor. Böyle bir işte kaynak, sabit bir tezgâh işi olmaktan çıkıp her gün farklı bir kapalı hacimde ve farklı bir yükseklikte yapılan bir işe dönüşebiliyor. Yükümlülüğün merkezinde bu yüzden çalışma izni sistemi var.",
    "bolumler": [
      {
        "baslik": "Tuzla'da metal işini ayıran şey ne?",
        "paragraflar": [
          "Tuzla'da gemi inşa ve bakım faaliyetiyle ilişkili metal işleme atölyeleriyle karşılaşılabiliyor. Bir atölyede sabit tezgâh başında yapılan kaynakla, tekne içindeki bir tankın içinde yapılan kaynak aynı iş değildir: ikincisinde ortam kapalı, havalandırma zorlamalı ve kaçış yolu dar olabiliyor.",
          "Bu nedenle bölgedeki iş yerlerinde risk değerlendirmesi tek başına yeterli kalmıyor. Değerlendirmenin çıktısı, günlük olarak uygulanan bir çalışma izni düzenine dönüşmediği sürece sahada karşılığı olmuyor. Denetimde de, kaza incelemesinde de bakılan şey iznin kâğıdı değil, iznin gerçekten uygulanıp uygulanmadığı oluyor.",
          "İkinci ayırt edici nokta alt yüklenici yoğunluğu. Aynı gemide veya aynı tesiste birden fazla işverenin çalışanı bir arada bulunabiliyor. 6331 sayılı Kanun aynı çalışma alanını paylaşan işverenlere koordinasyon yükümlülüğü getiriyor; uygulamada en sık aksayan da bu oluyor: bir ekip kaynak yaparken diğeri altta boya yapıyorsa, ikisinin de izni ayrı ayrı doğru olsa bile birlikte tehlikeli hâle geliyorlar."
        ]
      },
      {
        "baslik": "Başlıca riskler",
        "maddeler": [
          "Sıcak çalışma kaynaklı yangın ve patlama: kaynak, kesme ve taşlama kıvılcımı, yanıcı kalıntı bulunan bir hacimde tutuşmaya yol açabilir.",
          "Kapalı alanda boğulma ve zehirlenme: tank, sintine ve şaft gibi hacimlerde oksijen seviyesi düşebilir, gaz birikebilir.",
          "Kaynak dumanı ve metal buharı maruziyeti: özellikle paslanmaz ve galvanizli malzemede solunum yolu riski artıyor.",
          "Yüksekten düşme: iskele, platform ve gemi bordasında çalışmada toplu koruma kurulmadan kemer tek başına yeterli olmuyor.",
          "Taşlama ve kesme diski parçalanması: yanlış disk seçimi ve hasarlı koruyucu en sık görülen iki neden.",
          "Gürültü ve titreşim: çekiçleme, raspalama ve taşlama süreçlerinde kalıcı işitme kaybı riski doğuruyor.",
          "Elektrik: nemli ve iletken ortamda kaynak makinesi kablo yalıtımı ve topraklaması kritik hâle geliyor.",
          "Ezilme ve sıkışma: parça taşıma, vinç ve kaldırma ekipmanı kullanımında."
        ]
      },
      {
        "baslik": "Bu işletmelerde genellikle ihtiyaç duyulan hizmetler",
        "maddeler": [
          "Çalışma izni sisteminin kurulması: sıcak çalışma, kapalı alan ve yüksekte çalışma için ayrı izin formları ve gözcü düzeni.",
          "İş hijyeni ölçümleri: kaynak dumanı, gürültü ve gerekiyorsa ağır metal maruziyeti ölçümü.",
          "Ekipman periyodik kontrolleri: kaldırma ekipmanı, kompresör, elektrik tesisatı ve topraklama.",
          "Sağlık gözetimi: maruziyete göre solunum fonksiyon testi ve odyometri içeren periyodik muayene planı.",
          "Alt yüklenici koordinasyonu: sahaya giren firmaların belge kontrolü ve ortak çalışma kuralları.",
          "Mesleki yeterlilik belgesi takibi: kaynakçılık, MYK tebliğleriyle belge zorunluluğu getirilen mesleklerden biri."
        ]
      },
      {
        "baslik": "Dijital OSGB nasıl çalışıyor?",
        "paragraflar": [
          "Önce yerinde inceleme yapıyoruz: hangi işin nerede, hangi ekipmanla ve kaç kişiyle yapıldığını görmeden hazırlanan bir dosya, sahada karşılığı olmayan bir dosya oluyor. İnceleme sonrası risk değerlendirmesini ve gereken çalışma izni formlarını iş yerinin kendi süreçlerine göre kuruyoruz.",
          "İş güvenliği uzmanı ve işyeri hekimi görevlendirmeleri, Bakanlıkça yetkilendirilmiş çözüm ortağımız üzerinden yapılıyor ve İSG-KATİP'e kaydediliyor. Eğitim, danışmanlık ve dokümantasyon süreçlerini ise doğrudan biz yürütüyoruz. Tuzla saha hizmeti verdiğimiz bölgede olduğu için yerinde çalışma mümkün."
        ]
      },
      {
        "baslik": "Mevzuat ve işveren sorumluluğu",
        "paragraflar": [
          "6331 sayılı Kanun, iş sağlığı ve güvenliğini sağlama yükümlülüğünü işverene veriyor. Hizmeti dışarıdan almak bu sorumluluğu ortadan kaldırmıyor: uzman ve hekim görevlendirmek yükümlülüğün yerine getirilme biçimi, devredilmesi değil.",
          "Risk değerlendirmesi, işveren veya vekilinin başkanlığında; iş güvenliği uzmanı, işyeri hekimi, çalışan temsilcileri ve destek elemanlarından oluşan bir ekiple yapılıyor. Çok tehlikeli sınıfta en geç iki yılda bir yenileniyor; iş kazası, ramak kala olay veya üretim yönteminde değişiklik olduğunda süre beklenmiyor.",
          "İş ekipmanlarının periyodik kontrolü ayrı bir yükümlülük. Kontrolü yapacak kişilerin yetkisi, düzenlenen raporun geçerliliğinin de şartı; yetkisiz kişiden alınan rapor denetimde rapor sayılmıyor."
        ]
      },
      {
        "baslik": "Tuzla için özel durumlar",
        "paragraflar": [
          "Proje bazlı çalışan tesislerde iş temposu dalgalanabiliyor: bir gemi havuza girdiğinde saha kısa sürede kalabalıklaşıp iş bittiğinde boşalabiliyor. Bu, eğitim planlamasını zorlaştıran bir durum. Çalışanlara işe başlamadan önce işe başlama eğitiminin verilmesi ve iş yerine özgü bilgilendirmenin yapılması gerekir."
        ],
        "maddeler": [
          "Kapalı alan girişlerinde gözcü hiçbir koşulda içeri girmez. Kurtarmak için hazırlıksız içeri girmek, kurtarmaya çalışan kişinin de aynı ortamda etkilenmesiyle sonuçlanabilir; bu yüzden kurtarma ekipmanı ve planı önceden hazır olmak zorundadır.",
          "Sıcak çalışma bittikten sonra alan en az bir süre gözetlenir; kor hâlindeki kıvılcım daha sonra alev alabiliyor.",
          "Aynı anda farklı katmanlarda çalışan ekipler varsa izinler ayrı ayrı değil birlikte değerlendirilmeli.",
          "Deniz kenarındaki nem, elektrikli el aletlerinde yalıtım kontrolünü daha sık gerektiriyor."
        ]
      },
      {
        "baslik": "İlgili araçlar",
        "paragraflar": [
          "İş yerinizin tehlike sınıfına ve çalışan sayısına göre uzman ve hekim için aylık asgari süreyi, temel eğitim saatini ve risk değerlendirmesi yenileme yılını hesaplayıcıdan çıkarabilirsiniz. Kapalı alan ve sıcak çalışma izin formlarının boş şablonları form kütüphanesinde ücretsiz duruyor."
        ]
      }
    ],
    "sss": [
      {
        "soru": "Sıcak çalışma izni ne zaman gerekir?",
        "cevap": "Kaynak, kesme, taşlama gibi kıvılcım veya alev üreten her işte, iş sabit bir kaynak kabini dışında yapılıyorsa izin uygulanır. İzin çalışma öncesi kontrolleri, yangın gözcüsünü ve çalışma sonrası gözetim süresini kayda bağlar."
      },
      {
        "soru": "Kapalı alan çalışmasında hangi ölçümler yapılır?",
        "cevap": "Girişten önce ve çalışma boyunca belirli aralıklarla oksijen yüzdesi, patlayıcı gaz alt sınırı, karbon monoksit ve hidrojen sülfür ölçülür. Tek seferlik ölçüm yeterli değildir; ortam çalışma sırasında değişebilir."
      },
      {
        "soru": "Alt yüklenici çalışanlarının İSG sorumluluğu kimdedir?",
        "cevap": "Her işveren kendi çalışanından sorumludur. Aynı çalışma alanı paylaşıldığında ise işverenler önlemlerde koordinasyon sağlamak ve birbirlerini riskler hakkında bilgilendirmekle yükümlüdür. Asıl işveren bu koordinasyonu kurmakla yükümlüdür."
      },
      {
        "soru": "Kaynakçı için mesleki yeterlilik belgesi zorunlu mu?",
        "cevap": "Kaynakçılık, MYK tebliğleriyle belge zorunluluğu getirilen mesleklerden biridir. Her tehlikeli iş MYK kapsamında değildir; zorunluluk yalnız tebliğlerde sayılan mesleklere gelir. İSG temel eğitimi bu belgenin yerine geçmez."
      },
      {
        "soru": "Kaynak dumanı için ölçüm gerekir mi?",
        "cevap": "Kaynak dumanı ve metal buharı maruziyeti bulunan iş yerlerinde iş hijyeni ölçümü yapılması gerekebilir. Ölçüm sonucu, işyeri hekiminin periyodik muayenede isteyeceği tetkikleri de belirler; gürültü varsa odyometri, solunum maruziyeti varsa solunum fonksiyon testi öne çıkar."
      },
      {
        "soru": "Tuzla'da yerinde hizmet veriyor musunuz?",
        "cevap": "Evet. Saha hizmeti İstanbul, Kocaeli ve Tekirdağ'da veriliyor; Tuzla bu kapsamda. Eğitim, danışmanlık ve dokümantasyon süreçleri ayrıca Türkiye genelinde yürütülebiliyor."
      }
    ],
    "icLinkler": [
      {
        "metin": "İş güvenliği uzmanlığı hizmeti",
        "href": "/hizmetler/is-guvenligi-uzmanligi/"
      },
      {
        "metin": "İSG yükümlülük hesaplama",
        "href": "/araclar/isg-yukumluluk-hesaplama/"
      },
      {
        "metin": "Metal işleme ve kaynak sektörü",
        "href": "/sektorler/metal-kaynak/"
      },
      {
        "metin": "İş hijyeni ölçümleri",
        "href": "/hizmetler/is-hijyeni-olcumleri/"
      },
      {
        "metin": "Periyodik kontroller",
        "href": "/hizmetler/periyodik-kontroller/"
      },
      {
        "metin": "Form şablonları (PDF)",
        "href": "/isg-kutuphanesi/formlar/"
      },
      {
        "metin": "Mesleki yeterlilik belgesi",
        "href": "/hizmetler/mesleki-yeterlilik-belgesi/"
      }
    ],
    "kaynaklar": [
        {
          "ad": "Mesleki Yeterlilik Kurumu — tehlikeli ve çok tehlikeli işlerde mesleki yeterlilik belgesi zorunluluğu getirilen meslekler",
          "url": "https://www.myk.gov.tr/"
        },
        {
          "ad": "Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik (2 Nisan 2026, RG 33212)",
          "url": "https://www.resmigazete.gov.tr/"
        },
      {
        "ad": "6331 sayılı İş Sağlığı ve Güvenliği Kanunu",
        "url": "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6331.pdf"
      },
      {
        "ad": "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18704&MevzuatTur=7&MevzuatTertip=5"
      },
      {
        "ad": "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16925&MevzuatTur=7&MevzuatTertip=5"
      }
    ],
    "cta": {
      "metin": "Ücretsiz ön değerlendirme",
      "href": "/teklif-al/"
    },
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2026-09-20T13:45:58+00:00",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 0.0
    }
  },
  {
    "slug": "basaksehir-metal-kaynak",
    "tip": "ilce-sektor",
    "il": "İstanbul",
    "ilce": "Başakşehir",
    "sektorSlug": "metal-kaynak",
    "seoBaslik": "Başakşehir Metal Atölyelerinde İş Güvenliği",
    "metaAciklama": "İkitelli çevresindeki metal işleme atölyelerinde makine koruyucusu, pres güvenliği ve ekipman periyodik kontrolü. Küçük ölçekli iş yerleri için yükümlülük rehberi.",
    "h1": "Başakşehir'de metal işleme atölyelerinde iş güvenliği",
    "giris": "Başakşehir'de atölye ölçeğinde metal işleyen iş yerleriyle karşılaşılabiliyor: birkaç tezgâh, bir pres, bir kaynak köşesi ve az sayıda çalışan. Bu ölçekte eksiklik çoğu zaman tehlikeli bir işin yapılmasından değil, tezgâhın koruyucusunun sökülmüş ve ekipmanın kontrol raporunun süresinin dolmuş olmasından doğuyor.",
    "bolumler": [
      {
        "baslik": "Atölye ölçeği neyi değiştiriyor?",
        "paragraflar": [
          "Büyük bir tesiste bakım ekibi, ayrı bir depo ve vardiya düzeni vardır; atölyede ise aynı kişi hem operatör hem bakımcı hem de çoğu zaman işverendir. Bu, yükümlülüğü azaltmıyor ama uygulama biçimini değiştiriyor: yazılı bir prosedürden çok, tezgâh başında işleyen basit ve sürdürülebilir bir düzen gerekiyor.",
          "İkinci fark alan darlığı. Tezgâhlar birbirine yakın yerleştiğinde, bir makinenin çıkardığı talaş veya kıvılcım komşu iş istasyonunu etkiliyor. Yerleşim planı bu ölçekte başlı başına bir güvenlik önlemi hâline geliyor.",
          "Üçüncüsü, makinelerin yaşı. İkinci el alınmış eski tezgâhlarda koruyucu ya hiç yok ya da üretimi hızlandırmak için sökülmüş oluyor. Koruyucusu sökülmüş bir pres, mevzuata uygun bir ekipman olmaktan çıkıyor."
        ]
      },
      {
        "baslik": "Başlıca riskler",
        "maddeler": [
          "Pres ve giyotinde el sıkışması: çift el kumanda veya ışık bariyeri devre dışı bırakıldığında en ağır sonuçlu kaza türü.",
          "Torna ve freze tezgâhında dolanma: bol giysi, eldiven ve takı ile döner parçaya yaklaşma.",
          "Talaş ve çapak kaynaklı göz yaralanması: koruyucu gözlük kullanımının en sık atlandığı işlerden biri.",
          "Taşlama diski parçalanması: hasarlı disk, yanlış devir ve sökülmüş koruyucu.",
          "Kaynak kaynaklı yangın: atölyede biriken yağlı üstübü, talaş ve ahşap palet yangın yükünü artırıyor.",
          "Elektrik: seyyar priz zincirleme kullanımı, hasarlı kablo ve eksik topraklama.",
          "Gürültü: kapalı ve küçük hacimde çekiçleme ve taşlama sesi yansıyarak artıyor.",
          "Elle taşıma: parça kaldırma ve istifleme kaynaklı bel ve omuz zorlanmaları."
        ]
      },
      {
        "baslik": "Bu işletmelerde genellikle ihtiyaç duyulan hizmetler",
        "maddeler": [
          "Makine ve tezgâh güvenlik incelemesi: koruyucu, acil stop ve etiketleme-kilitleme düzeninin kurulması.",
          "Ekipman periyodik kontrolleri: kompresör, kaldırma ekipmanı, elektrik tesisatı ve topraklama ölçümü.",
          "Risk değerlendirmesi ve buna bağlı aksiyon takvimi.",
          "Çalışan eğitimi: tezgâh başında uygulamalı anlatım, yalnız sınıf eğitimi değil.",
          "Sağlık gözetimi: gürültü ve tozla çalışanlarda odyometri ve solunum fonksiyon testi.",
          "Acil durum planı ve yangın söndürücü kontrol düzeni."
        ]
      },
      {
        "baslik": "Dijital OSGB nasıl çalışıyor?",
        "paragraflar": [
          "Atölye ölçeğinde işe tezgâh sayımıyla başlıyoruz: hangi makinede hangi koruyucu var, hangisinin kontrol raporu geçerli, hangisi süresi dolmuş. Bu envanter çıkmadan yazılan bir risk değerlendirmesi genel geçer bir metin oluyor ve sahada bir şeyi değiştirmiyor.",
          "İş güvenliği uzmanı ve işyeri hekimi görevlendirmeleri Bakanlıkça yetkilendirilmiş çözüm ortağımız üzerinden yapılıyor. Eğitim, danışmanlık ve dokümantasyonu biz yürütüyoruz. Başakşehir saha hizmeti kapsamımızda olduğu için yerinde çalışıyoruz."
        ]
      },
      {
        "baslik": "Mevzuat ve işveren sorumluluğu",
        "paragraflar": [
          "6331 sayılı Kanun kapsamındaki iş yerlerinde iş güvenliği uzmanı ve işyeri hekimi görevlendirme yükümlülüğü, çalışan sayısına bakılmaksızın yürürlükte. Az tehlikeli sınıftaki elliden az çalışanı olan iş yerlerine tanınan erteleme 31 Aralık 2024'te sona erdi.",
          "Hizmeti dışarıdan almak işverenin sorumluluğunu ortadan kaldırmıyor. Uzman ve hekim, yükümlülüğün yerine getirilmesine destek verir; tedbiri alma ve aldırma sorumluluğu işverende kalır.",
          "İş ekipmanlarının periyodik kontrolünde sık rastlanan eksiklik raporun hiç olmaması değil, alınmış raporun geçerlilik süresinin dolmuş olması. Süresi geçmiş rapor, kontrol yapılmamış sayılır."
        ]
      },
      {
        "baslik": "Başakşehir için özel durumlar",
        "paragraflar": [
          "Atölye ölçeğinde fason üretim yapan iş yerlerinde işin niteliği müşteriye göre değişebiliyor: bir dönem sac kesimi öne çıkarken başka bir dönem kaynak ve montaj ağır basabiliyor. Risk değerlendirmesinin, yapılan işin değiştiği anda gözden geçirilmesi bu yüzden kâğıt üzerinde bir kural değil, pratik bir ihtiyaç."
        ],
        "maddeler": [
          "Kiralık veya ödünç alınan tezgâhın güvenli kullanımından, kullanan iş yeri sorumludur; kira sözleşmesi bunu devretmez.",
          "Aynı binada birden fazla atölye varsa yangın ve tahliye düzeni bina genelinde düşünülmek zorunda.",
          "Koruyucu söküldüğünde üretim hızlandığı için geri takılmıyor; denetim yalnız varlığa değil kullanıma bakmalı.",
          "Stajyer ve yeni işe başlayan çalışan, tezgâha çıkmadan önce işe başlama eğitimini almış olmalı."
        ]
      },
      {
        "baslik": "İlgili araçlar",
        "paragraflar": [
          "Ekipman periyodik kontrol takip çizelgesi ve enerji kesme-kilitleme (LOTO) formu, form kütüphanesinde ücretsiz A4 şablon olarak duruyor. Yükümlülük hesaplayıcı, çalışan sayınıza göre aylık uzman ve hekim süresini veriyor."
        ]
      }
    ],
    "sss": [
      {
        "soru": "Preste hangi güvenlik donanımı bulunmalı?",
        "cevap": "Ekipmanın türüne göre çift el kumanda, ışık bariyeri veya mekanik koruyucu bulunur ve bunlar devre dışı bırakılamaz. Koruyucusu sökülmüş bir pres, mevzuata uygun bir iş ekipmanı sayılmaz."
      },
      {
        "soru": "Tezgâhta eldiven kullanmak her zaman doğru mu?",
        "cevap": "Hayır. Torna ve matkap gibi döner parçalı tezgâhlarda eldiven dolanma riskini artırır. Kişisel koruyucu donanım seçimi risk değerlendirmesine dayanır; her işe aynı donanım verilmez."
      },
      {
        "soru": "Kompresörün periyodik kontrolü ne sıklıkla yapılır?",
        "cevap": "Basınçlı kaplar standartlarda aksi belirtilmedikçe yılda en az bir kez kontrol edilir. Üretici kullanma kılavuzunda daha kısa bir süre öngörmüşse üreticinin süresi uygulanır."
      },
      {
        "soru": "Küçük atölyede de iş güvenliği uzmanı zorunlu mu?",
        "cevap": "6331 sayılı Kanun kapsamındaki iş yerlerinde görevlendirme yükümlülüğü çalışan sayısına bakılmaksızın yürürlüktedir. Tehlike sınıfı ve çalışan sayısı, zorunluluğun olup olmadığını değil aylık asgari süreyi belirler."
      },
      {
        "soru": "Atölyede kaç yangın söndürücü bulunmalı?",
        "cevap": "Sayı ve tip, alanın büyüklüğüne ve yangın yüküne göre belirlenir. Belirleyici olan sayıdan çok erişilebilirlik: önü kapatılmış veya basınç göstergesi kırmızıda olan bir cihaz, sayıma girse de işe yaramaz."
      },
      {
        "soru": "Fason iş değiştiğinde risk değerlendirmesi yenilenir mi?",
        "cevap": "Üretim yönteminde veya kullanılan ekipmanda değişiklik olduğunda risk değerlendirmesi süre beklenmeden gözden geçirilir. Çok tehlikeli sınıfta yenileme aralığı ayrıca en geç iki yıldır."
      }
    ],
    "icLinkler": [
      {
        "metin": "İş güvenliği uzmanlığı hizmeti",
        "href": "/hizmetler/is-guvenligi-uzmanligi/"
      },
      {
        "metin": "İSG yükümlülük hesaplama",
        "href": "/araclar/isg-yukumluluk-hesaplama/"
      },
      {
        "metin": "Metal işleme ve kaynak sektörü",
        "href": "/sektorler/metal-kaynak/"
      },
      {
        "metin": "Periyodik kontroller",
        "href": "/hizmetler/periyodik-kontroller/"
      },
      {
        "metin": "Risk değerlendirmesi",
        "href": "/hizmetler/risk-degerlendirmesi/"
      },
      {
        "metin": "Form şablonları (PDF)",
        "href": "/isg-kutuphanesi/formlar/"
      }
    ],
    "kaynaklar": [
      {
        "ad": "6331 sayılı İş Sağlığı ve Güvenliği Kanunu",
        "url": "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6331.pdf"
      },
      {
        "ad": "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18704&MevzuatTur=7&MevzuatTertip=5"
      },
      {
        "ad": "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16925&MevzuatTur=7&MevzuatTertip=5"
      }
    ],
    "cta": {
      "metin": "Ücretsiz ön değerlendirme",
      "href": "/teklif-al/"
    },
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2026-09-20T13:45:58+00:00",
      "kalitePuani": 87,
      "benzerlikEnYuksek": 0.011
    }
  },
  {
    "slug": "esenyurt-tekstil-konfeksiyon",
    "tip": "ilce-sektor",
    "il": "İstanbul",
    "ilce": "Esenyurt",
    "sektorSlug": "tekstil-konfeksiyon",
    "seoBaslik": "Esenyurt Tekstil Atölyelerinde İş Sağlığı ve Güvenliği",
    "metaAciklama": "Esenyurt'taki konfeksiyon ve tekstil atölyelerinde pamuk tozu, gürültü, yangın yükü ve makine güvenliği. Yükümlülükler ve uygulamada atlanan başlıklar.",
    "h1": "Esenyurt'ta tekstil ve konfeksiyon atölyelerinde iş güvenliği",
    "giris": "Esenyurt'ta kat aralarına yerleşmiş orta ölçekli konfeksiyon atölyeleriyle karşılaşılabiliyor. Bu iş kolunda riskler görünür değil: kimse ağır bir yük kaldırmıyor, yüksekte çalışmıyor. Buna rağmen yangın yükü, toz ve gürültü birlikte ciddi bir tablo oluşturabiliyor.",
    "bolumler": [
      {
        "baslik": "Tekstilde riskin görünmez olması",
        "paragraflar": [
          "Konfeksiyon atölyesi dışarıdan bakınca sakin bir iş yeridir. Ancak kumaş, iplik ve hazır ürün yüksek bir yangın yükü oluşturur; kesim ve dikiş süreçleri sürekli pamuk tozu üretir; onlarca makinenin aynı anda çalıştığı bir salonda gürültü seviyesi kalıcı işitme kaybı doğurabilecek düzeye çıkabilir.",
          "İkinci mesele yerleşim. Üretim arttıkça makineler sıklaştırılıyor, koridorlar daralıyor ve kaçış yolları ürün kolileriyle kapanıyor. Yangın çıktığında sorunu büyüten şey çoğu zaman yangının kendisi değil, tahliyenin tıkanmış olması.",
          "Üçüncüsü çalışan devir hızı. İşe yeni giren çalışan sayısının yüksek olduğu iş yerlerinde işe başlama eğitimi ve iş yerine özgü bilgilendirme bir defa yapılıp bitirilen iş değil, sürekli yürüyen bir süreç hâline geliyor."
        ]
      },
      {
        "baslik": "Başlıca riskler",
        "maddeler": [
          "Yangın ve tahliye: kumaş, iplik ve ambalaj kaynaklı yüksek yangın yükü; kapanan kaçış yolları.",
          "Pamuk tozu maruziyeti: kesim ve dikiş süreçlerinde solunum yolu şikâyetleri.",
          "Gürültü: çok sayıda makinenin bir arada çalıştığı salonlarda kalıcı işitme kaybı riski.",
          "Dikiş makinesi iğne yaralanması: koruyucusu çıkarılmış makinelerde parmak yaralanmaları.",
          "Kesim bıçağı: kumaş kesim makinelerinde derin kesi riski.",
          "Ütü ve pres kaynaklı yanık ve buhar teması.",
          "Ergonomi: uzun süre aynı pozisyonda oturarak çalışmaya bağlı bel, boyun ve omuz şikâyetleri.",
          "Elektrik: makine sayısına göre yetersiz kalan tesisat ve zincirleme uzatma kablosu kullanımı."
        ]
      },
      {
        "baslik": "Bu işletmelerde genellikle ihtiyaç duyulan hizmetler",
        "maddeler": [
          "Acil durum eylem planı ve yılda en az bir tatbikat; tahliye süresinin ölçülmesi.",
          "İş hijyeni ölçümleri: toz ve gürültü ölçümü, gerekiyorsa aydınlatma.",
          "Makine güvenliği incelemesi: iğne koruyucusu, kesim makinesi koruyucusu, acil stop.",
          "Çalışan eğitimi ve yeni giren personel için işe başlama eğitimi düzeni.",
          "Sağlık gözetimi: solunum fonksiyon testi ve odyometri içeren periyodik muayene planı.",
          "Elektrik tesisatı ve topraklama ölçümü."
        ]
      },
      {
        "baslik": "Dijital OSGB nasıl çalışıyor?",
        "paragraflar": [
          "Tekstilde ilk baktığımız şey tahliye. Kaçış yollarının fiilen açık olup olmadığını, toplanma yerinin belirlenip belirlenmediğini ve son tatbikatın ne zaman yapıldığını yerinde görüyoruz. Ardından ölçüm ihtiyacını çıkarıp risk değerlendirmesini bu veriyle kuruyoruz.",
          "Uzman ve hekim görevlendirmeleri yetkili çözüm ortağımız üzerinden yürüyor; eğitim ve dokümantasyonu biz yapıyoruz. Esenyurt saha hizmeti verdiğimiz bölgede."
        ]
      },
      {
        "baslik": "Mevzuat ve işveren sorumluluğu",
        "paragraflar": [
          "İşveren, iş sağlığı ve güvenliğini sağlamak ve mevcut durumu iyileştirmekle yükümlü. Dışarıdan hizmet alınması bu yükümlülüğü ortadan kaldırmıyor.",
          "Acil durum planı hazırlamak, acil durum ekiplerini oluşturmak ve tatbikat yapmak işverenin yükümlülüğü. Ekip sayısı tehlike sınıfına ve çalışan sayısına göre belirleniyor; arama-kurtarma-tahliye ile yangınla mücadele için ayrı ayrı görevlendirme yapılıyor.",
          "Temel İSG eğitiminin süresi tehlike sınıfına göre değişiyor ve belirli aralıklarla yenileniyor. 2 Nisan 2026 tarihli yeni yönetmelik, işe başlama eğitimini ayrıca tanımladı; bu süre temel eğitimden sayılmıyor."
        ]
      },
      {
        "baslik": "Esenyurt için özel durumlar",
        "paragraflar": [
          "Bölgedeki atölyelerin bir bölümü çok katlı binaların ara katlarında bulunuyor. Bu durumda tahliye tek bir merdivene bağlı kalabiliyor ve tatbikat yalnız kendi katını değil bina genelini kapsamak zorunda kalıyor."
        ],
        "maddeler": [
          "Ara kat atölyelerinde tahliye planı bina yönetimiyle birlikte kurulmalı.",
          "Kumaş ve ambalaj stoğu kaçış yolunu daraltmayacak şekilde konumlandırılmalı.",
          "Toz birikimi yalnız solunum değil yangın yayılımı açısından da risk; düzenli temizlik bir güvenlik önlemi.",
          "Çalışan devri yüksekse eğitim kayıtları aylık gözden geçirilmeli; kayıtsız çalışan eğitimsiz sayılır."
        ]
      },
      {
        "baslik": "İlgili araçlar",
        "paragraflar": [
          "Eğitim katılım tutanağı, tatbikat raporu ve acil durum ekipleri görevlendirme tutanağı form kütüphanesinde ücretsiz duruyor. Eğitim yenileme tarihi hesaplayıcı, son eğitim tarihinden hareketle yenileme gününü ve kalan süreyi veriyor."
        ]
      }
    ],
    "sss": [
      {
        "soru": "Tekstil atölyesinde tatbikat ne sıklıkla yapılır?",
        "cevap": "Acil durum tatbikatı yılda en az bir kez yapılır ve kayıt altına alınır. Kayıtta tarih ve katılımcı listesinin yanında ölçülen tahliye süresi ve tıkanan noktalar da bulunmalıdır; süre ölçülmemiş bir tatbikat planın işleyip işlemediği hakkında bilgi vermez."
      },
      {
        "soru": "Pamuk tozu için ölçüm gerekir mi?",
        "cevap": "Toz maruziyeti bulunan iş yerlerinde iş hijyeni ölçümü yapılması gerekebilir. Belirleyici olan ortamdaki ortalama değer değil, çalışanın vardiya boyunca fiilen maruz kaldığı kişisel maruziyet değeridir."
      },
      {
        "soru": "Dikiş makinesinde iğne koruyucusu zorunlu mu?",
        "cevap": "İş ekipmanları, kullanımdan doğan riskleri ortadan kaldıracak koruyucu düzeneklerle donatılır. Koruyucusu sökülmüş bir makine mevzuata uygun sayılmaz; denetimde varlığa değil fiilen kullanılıp kullanılmadığına bakılır."
      },
      {
        "soru": "Yeni işe başlayan çalışan hemen üretime girebilir mi?",
        "cevap": "İşe başlama eğitimi verilmeden çalışan sahaya alınmaz. 2 Nisan 2026 tarihli yönetmelikle işe başlama eğitimi ayrıca tanımlandı; bu süre temel eğitimden sayılmaz ve temel eğitim işe girişten itibaren belirlenen sürede tamamlanır."
      },
      {
        "soru": "Ara kattaki atölyede tahliye planı nasıl kurulur?",
        "cevap": "Plan yalnız kendi katını değil binanın tahliye düzenini kapsamak zorundadır. Toplanma yeri bina yönetimiyle ortak belirlenir ve tatbikat bu güzergâh üzerinden yapılır."
      },
      {
        "soru": "Az tehlikeli mi, tehlikeli mi sınıftayız?",
        "cevap": "Tehlike sınıfı iş yerinin NACE koduna göre belirlenir; konfeksiyon ve tekstil faaliyetleri genellikle tehlikeli sınıfta yer alır. Kendi kodunuzu tehlike sınıfı sorgulama aracından kontrol edebilirsiniz."
      }
    ],
    "icLinkler": [
      {
        "metin": "İş güvenliği uzmanlığı hizmeti",
        "href": "/hizmetler/is-guvenligi-uzmanligi/"
      },
      {
        "metin": "İSG yükümlülük hesaplama",
        "href": "/araclar/isg-yukumluluk-hesaplama/"
      },
      {
        "metin": "Tekstil ve konfeksiyon sektörü",
        "href": "/sektorler/tekstil-konfeksiyon/"
      },
      {
        "metin": "Acil durum eylem planı",
        "href": "/hizmetler/acil-durum-eylem-plani/"
      },
      {
        "metin": "İş hijyeni ölçümleri",
        "href": "/hizmetler/is-hijyeni-olcumleri/"
      },
      {
        "metin": "Eğitim yenileme tarihi hesaplama",
        "href": "/araclar/egitim-yenileme-tarihi-hesaplama/"
      },
      {
        "metin": "Tehlike sınıfı sorgulama",
        "href": "/araclar/tehlike-sinifi-sorgulama/"
      }
    ],
    "kaynaklar": [
      {
        "ad": "6331 sayılı İş Sağlığı ve Güvenliği Kanunu",
        "url": "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6331.pdf"
      },
      {
        "ad": "İşyerlerinde Acil Durumlar Hakkında Yönetmelik",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18721&MevzuatTur=7&MevzuatTertip=5"
      },
      {
        "ad": "Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik (2 Nisan 2026, RG 33212)",
        "url": "https://www.resmigazete.gov.tr/"
      }
    ],
    "cta": {
      "metin": "Ücretsiz ön değerlendirme",
      "href": "/teklif-al/"
    },
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2026-09-20T13:45:58+00:00",
      "kalitePuani": 91,
      "benzerlikEnYuksek": 0.011
    }
  },
  {
    "slug": "beylikduzu-lojistik-depo",
    "tip": "ilce-sektor",
    "il": "İstanbul",
    "ilce": "Beylikdüzü",
    "sektorSlug": "lojistik-depo",
    "seoBaslik": "Beylikdüzü Depo ve Lojistik Tesislerinde İş Güvenliği",
    "metaAciklama": "Beylikdüzü'ndeki dağıtım depolarında forklift-yaya ayrımı, raf sistemleri ve yükleme rampası güvenliği. Yükümlülükler ve sahada en sık atlanan başlıklar.",
    "h1": "Beylikdüzü'nde depo ve lojistik tesislerinde iş güvenliği",
    "giris": "Depo ve dağıtım tesislerinde en ağır sonuçlu kazalar iki noktada toplanabiliyor: forkliftin yaya güzergâhıyla kesiştiği yer ve yükleme rampası. İkisi de yerleşim kararıyla çözülebilen, sonradan eğitimle kapatılması zor risklerdir.",
    "bolumler": [
      {
        "baslik": "Depoda riskin toplandığı yer",
        "paragraflar": [
          "Depo işinde tehlike sabit bir makinede değil, hareket hâlindeki araçla insanın aynı alanı paylaşmasında. Forklift operatörü görüş açısı kısıtlı bir araçta, yaya ise çoğu zaman elinde ürünle ve aceleyle ilerliyor. Bu ikisinin güzergâhı fiziksel olarak ayrılmadığı sürece, uyarı levhası ve eğitim tek başına yeterli olmuyor.",
          "İkinci yoğunlaşma noktası yükleme rampası. Aracın rampadan ayrılması, tekerlek takozunun konulmaması veya rampa kapağının kilitlenmemesi, forkliftin boşluğa düşmesiyle sonuçlanabiliyor.",
          "Üçüncüsü raf sistemleri. Yüksek raflarda hatalı istifleme, aşırı yükleme veya forklift çarpması sonucu deforme olmuş ayak, zincirleme çökmeye yol açabiliyor. Raf sistemleri de periyodik olarak kontrol edilmesi gereken bir yapı."
        ]
      },
      {
        "baslik": "Başlıca riskler",
        "maddeler": [
          "Forklift-yaya çarpışması: güzergâhların fiziksel olarak ayrılmadığı depolarda en sık ölümlü kaza nedeni.",
          "Yükleme rampasından düşme: aracın erken ayrılması, takoz ve rampa kilidi eksikliği.",
          "Raf çökmesi: aşırı yükleme, hatalı istifleme ve çarpma sonucu deforme ayak.",
          "Yüksekten malzeme düşmesi: raf üstünden düşen koli ve palet.",
          "Elle taşıma kaynaklı bel ve omuz zorlanmaları.",
          "Kaygan zemin: yükleme alanında yağmur suyu ve dökülen ürün.",
          "Soğuk depo varsa düşük sıcaklık maruziyeti ve donma riski.",
          "Yangın: yüksek depolama yoğunluğu ve ambalaj malzemesi kaynaklı yangın yükü."
        ]
      },
      {
        "baslik": "Bu işletmelerde genellikle ihtiyaç duyulan hizmetler",
        "maddeler": [
          "Saha trafik planı: forklift ve yaya güzergâhlarının fiziksel ayrımı, hız ve kavşak düzeni.",
          "İş ekipmanı periyodik kontrolleri: forklift, transpalet, raf sistemleri ve yangın tesisatı.",
          "Operatör belge ve günlük kontrol düzeni: vardiya öncesi ekipman kontrol formu.",
          "Acil durum eylem planı ve tahliye tatbikatı.",
          "Elle taşıma eğitimi ve ergonomi değerlendirmesi.",
          "Sağlık gözetimi: kas-iskelet sistemi şikâyetlerine odaklı periyodik muayene planı."
        ]
      },
      {
        "baslik": "Dijital OSGB nasıl çalışıyor?",
        "paragraflar": [
          "Depoda ilk iş sahayı yürümek oluyor: forkliftin hangi güzergâhı kullandığını, yayanın nereden geçtiğini ve ikisinin nerede kesiştiğini yerinde görmeden yapılan bir değerlendirme kâğıt üzerinde kalıyor. Kesişim noktaları çıktıktan sonra risk değerlendirmesi ve trafik planı birlikte kuruluyor.",
          "Uzman ve hekim görevlendirmeleri yetkili çözüm ortağımız üzerinden; eğitim, danışmanlık ve dokümantasyon bizde. Beylikdüzü saha hizmeti kapsamımızda."
        ]
      },
      {
        "baslik": "Mevzuat ve işveren sorumluluğu",
        "paragraflar": [
          "İş ekipmanlarının periyodik kontrolü zorunlu; kaldırma ve iletme ekipmanları standartlarda aksi belirtilmedikçe yılda en az bir kez kontrol edilir. Kiralık ekipmanda da bu kontrol, ekipmanı kullanan iş yerinin sorumluluğundadır; kira sözleşmesi sorumluluğu devretmez.",
          "Ekipmanı kullanacak çalışanın yetkili ve eğitimli olması gerekiyor. Operatör belgesi bulunmayan kişinin forklift kullanması, ekipmanın kendisi uygun olsa bile mevzuata aykırı.",
          "İş sağlığı ve güvenliğini sağlama yükümlülüğü işverende. Dışarıdan hizmet almak bu sorumluluğu kaldırmıyor."
        ]
      },
      {
        "baslik": "Beylikdüzü için özel durumlar",
        "paragraflar": [
          "Bölgedeki tesislerin bir bölümü e-ticaret dağıtımına hizmet ediyor ve kampanya dönemlerinde iş hacmi kısa sürede katlanıyor. Bu dönemlerde geçici çalışan sayısı artıyor, vardiya uzuyor ve sahada daha önce olmayan bir yoğunluk oluşuyor."
        ],
        "maddeler": [
          "Yoğun dönem öncesinde trafik planı ve tahliye güzergâhı yeniden gözden geçirilmeli.",
          "Geçici çalışan da işe başlama eğitimi almadan sahaya alınmamalı.",
          "Kampanya için kiralanan ek forkliftin kontrol raporu sahaya girmeden istenmeli.",
          "Koridorlara geçici istifleme yapılması, tahliye ve forklift güzergâhını aynı anda daraltıyor."
        ]
      },
      {
        "baslik": "İlgili araçlar",
        "paragraflar": [
          "Araç ve iş makinası günlük kontrol formu ile periyodik kontrol takip çizelgesi form kütüphanesinde ücretsiz duruyor. Acil durum ekip sayısı hesaplayıcı, çalışan sayınıza göre arama-kurtarma-tahliye ve yangınla mücadele ekipleri için görevlendirilecek kişi sayısını veriyor."
        ]
      }
    ],
    "sss": [
      {
        "soru": "Forklift ve yaya güzergâhı nasıl ayrılır?",
        "cevap": "Tercih edilen yöntem fiziksel ayrımdır: bariyer, korkuluk veya ayrı kapı. Bunun mümkün olmadığı yerlerde zemin işaretlemesi, ayna ve kavşak önceliği kurallarıyla desteklenir; ancak yalnız zemin çizgisi, fiziksel ayrımın yerine geçmez."
      },
      {
        "soru": "Raf sistemleri periyodik kontrole tabi mi?",
        "cevap": "Raf sistemleri de düzenli olarak kontrol edilmesi gereken yapılardır. Kontrolde özellikle forklift çarpması nedeniyle deforme olmuş ayaklar, eksik veya hasarlı bağlantı elemanları ve taşıma kapasitesi etiketinin okunabilirliği incelenir."
      },
      {
        "soru": "Kiralık forkliftin kontrol sorumluluğu kimde?",
        "cevap": "Ekipmanın iş yerinde güvenli kullanılmasından, kullanan işveren sorumludur. Kira sözleşmesi bu sorumluluğu kiralayana devretmez. Ekipman sahaya girmeden geçerli kontrol raporu istenmeli ve süresi kendi takviminize işlenmelidir."
      },
      {
        "soru": "Yükleme rampasında hangi önlemler alınır?",
        "cevap": "Araç sabitlenmeden yükleme başlatılmaz: tekerlek takozu, rampa kilidi veya araç sabitleme sistemi kullanılır. Rampa kenarında düşmeye karşı koruma ve yeterli aydınlatma bulunur; sürücüyle depo arasında açık bir haberleşme düzeni kurulur."
      },
      {
        "soru": "Vardiya öncesi ekipman kontrolü zorunlu mu?",
        "cevap": "İş ekipmanının kullanım öncesi kontrolü, güvenli kullanımın parçasıdır. Fren, direksiyon, korna, lastik, hidrolik kaçak ve emniyet kemeri gibi başlıkların kontrol edilip kayda geçmesi hem arızayı erken yakalar hem de denetimde kullanımın sürdüğünü gösterir."
      },
      {
        "soru": "Geçici çalışan için de eğitim gerekir mi?",
        "cevap": "Evet. Çalışma süresinin kısalığı eğitim yükümlülüğünü ortadan kaldırmaz. İşe başlama eğitimi ve iş yerine özgü bilgilendirme, çalışan sahaya inmeden tamamlanır."
      }
    ],
    "icLinkler": [
      {
        "metin": "İş güvenliği uzmanlığı hizmeti",
        "href": "/hizmetler/is-guvenligi-uzmanligi/"
      },
      {
        "metin": "İSG yükümlülük hesaplama",
        "href": "/araclar/isg-yukumluluk-hesaplama/"
      },
      {
        "metin": "Lojistik ve depo sektörü",
        "href": "/sektorler/lojistik-depo/"
      },
      {
        "metin": "Periyodik kontroller",
        "href": "/hizmetler/periyodik-kontroller/"
      },
      {
        "metin": "Acil durum ekip sayısı hesaplama",
        "href": "/araclar/acil-durum-ekip-sayisi-hesaplama/"
      },
      {
        "metin": "Form şablonları (PDF)",
        "href": "/isg-kutuphanesi/formlar/"
      }
    ],
    "kaynaklar": [
      {
        "ad": "6331 sayılı İş Sağlığı ve Güvenliği Kanunu",
        "url": "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6331.pdf"
      },
      {
        "ad": "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18704&MevzuatTur=7&MevzuatTertip=5"
      },
      {
        "ad": "İşyerlerinde Acil Durumlar Hakkında Yönetmelik",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18721&MevzuatTur=7&MevzuatTertip=5"
      }
    ],
    "cta": {
      "metin": "Ücretsiz ön değerlendirme",
      "href": "/teklif-al/"
    },
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2026-09-20T13:45:58+00:00",
      "kalitePuani": 91,
      "benzerlikEnYuksek": 0.009
    }
  },
  {
    "slug": "atasehir-ofis-hizmet",
    "tip": "ilce-sektor",
    "il": "İstanbul",
    "ilce": "Ataşehir",
    "sektorSlug": "ofis-hizmet",
    "seoBaslik": "Ataşehir Ofislerinde İş Sağlığı ve Güvenliği",
    "metaAciklama": "Ataşehir'deki plaza ofislerinde ergonomi, yüksek katlı bina tahliyesi ve iklimlendirme kaynaklı riskler. Az tehlikeli sınıfta yükümlülük ne kadar?",
    "h1": "Ataşehir'de ofis ve hizmet işletmelerinde iş güvenliği",
    "giris": "Ofis ve büro faaliyetleri genel olarak az tehlikeli sınıfta değerlendirilir; kendi iş yerinizin sınıfı NACE kodunuza göre belirlenir. Az tehlikeli sınıfta olmak yükümlülüğün olmadığı anlamına gelmiyor, yalnız sürelerin kısa olduğu anlamına geliyor. Plaza ortamında asıl mesele riskin yokluğu değil, yavaş ilerlediği için fark edilmemesi.",
    "bolumler": [
      {
        "baslik": "Plaza ofisinde risk neden atlanıyor?",
        "paragraflar": [
          "Ofiste gürültülü bir makine veya ağır bir yük yok. Bu yüzden 'bizde risk yok' varsayımı kolayca yerleşiyor. Oysa ekranlı araçlarla çalışmaya bağlı boyun, bel ve göz şikâyetleri yıllar içinde kalıcı hâle gelebiliyor ve bunlar sessiz ilerledikleri için ancak bir sağlık sorunu çıktığında fark ediliyor.",
          "İkinci mesele yüksek katlı binada tahliye. Kendi ofisinizin planı düzgün olsa bile tahliye bina genelinde işliyor; merdivenin kapasitesi, toplanma yerinin konumu ve diğer katlardaki kiracıların düzeni sizin tahliye sürenizi doğrudan etkiliyor.",
          "Üçüncüsü iklimlendirme. Merkezî sistemle havalandırılan binalarda bakım kiracıda değil bina yönetiminde olabiliyor; ancak çalışanın maruz kaldığı hava kalitesinden işveren sorumlu kalmaya devam ediyor."
        ]
      },
      {
        "baslik": "Başlıca riskler",
        "maddeler": [
          "Ekranlı araçlarla çalışma: yanlış monitör yüksekliği ve koltuk ayarına bağlı boyun, sırt ve göz şikâyetleri.",
          "Aydınlatma: ekrana vuran gün ışığı yansıması, baş ağrısı ve göz yorgunluğunun en ucuz çözülen nedeni.",
          "Yüksek katlı bina tahliyesi: kaçış yollarının dolap veya koliyle daraltılması, bina geneliyle uyumsuz plan.",
          "İklimlendirme: bakımı yapılmayan sistemlerde hava kalitesi sorunları ve Lejyoner riski.",
          "Elektrik: çoklu priz zincirleme kullanımı ve serbest kablo kaynaklı takılma.",
          "Kayma ve düşme: ıslak zemin, temizlik sonrası uyarı konulmaması.",
          "Psikososyal riskler: iş yükü, çalışma süresi ve iletişim kaynaklı zorlanma.",
          "Küçük mutfak ve ikram alanı: sıcak yüzey, elektrikli cihaz ve kaygan zemin."
        ]
      },
      {
        "baslik": "Bu işletmelerde genellikle ihtiyaç duyulan hizmetler",
        "maddeler": [
          "Risk değerlendirmesi ve ekranlı araçlarla çalışma değerlendirmesi.",
          "Acil durum eylem planı; bina yönetimiyle uyumlu tahliye düzeni ve tatbikat.",
          "Uzaktan temel İSG eğitimi: az tehlikeli sınıfta eğitimin tamamı uzaktan tamamlanabiliyor.",
          "Sağlık gözetimi: işe giriş ve periyodik muayene takvimi.",
          "İlk yardımcı ve acil durum ekipleri görevlendirmesi.",
          "Ergonomi düzenlemeleri: koltuk, monitör yüksekliği, klavye ve aydınlatma."
        ]
      },
      {
        "baslik": "Dijital OSGB nasıl çalışıyor?",
        "paragraflar": [
          "Ofiste işe çalışma istasyonlarını gezerek başlıyoruz; monitör yüksekliği, koltuk ayarı ve ekrana vuran ışık çoğu zaman aynı gün düzeltilebilen şeyler. Ardından tahliye düzenini bina yönetimiyle birlikte gözden geçiriyoruz.",
          "Az tehlikeli sınıfta temel eğitimin tamamı uzaktan verilebildiği için eğitim süreci çalışanların iş gününü bölmeden planlanabiliyor. Uzman ve hekim görevlendirmeleri yetkili çözüm ortağımız üzerinden yürüyor; Ataşehir saha hizmeti kapsamımızda."
        ]
      },
      {
        "baslik": "Mevzuat ve işveren sorumluluğu",
        "paragraflar": [
          "Az tehlikeli sınıfta olmak muafiyet değil. 6331 sayılı Kanun kapsamındaki iş yerlerinde görevlendirme yükümlülüğü çalışan sayısına bakılmaksızın yürürlükte; tehlike sınıfı yalnız aylık asgari süreyi belirliyor.",
          "Ekranlı araçlarla çalışmada işverenin çalışma istasyonunu değerlendirme, gerekli düzenlemeleri yapma ve çalışanı bilgilendirme yükümlülüğü var.",
          "Risk değerlendirmesi az tehlikeli sınıfta en geç altı yılda bir yenileniyor; iş yerinde değişiklik veya iş kazası olduğunda süre beklenmiyor. Acil durum planı ve yılda en az bir tatbikat da işverenin yükümlülüğü."
        ]
      },
      {
        "baslik": "Ataşehir için özel durumlar",
        "paragraflar": [
          "Çok kiracılı plazalarda yer alan ofislerde tahliye ve yangın düzeni tek başına kiracının kontrolünde olmuyor; plan bina yönetimiyle birlikte kurulmak zorunda."
        ],
        "maddeler": [
          "Tatbikat kendi katınızla sınırlı yapılırsa gerçek tahliye süresi ölçülmüş olmaz.",
          "Toplanma yeri bina genelinde ortak belirlenmeli ve çalışanlara duyurulmalı.",
          "Merkezî iklimlendirmede bakım kaydı bina yönetiminden yazılı olarak istenmeli.",
          "Hibrit çalışma varsa eğitim ve bilgilendirme kaydı uzaktan çalışanları da kapsamalı."
        ]
      },
      {
        "baslik": "İlgili araçlar",
        "paragraflar": [
          "Yükümlülük hesaplayıcı, çalışan sayınıza göre uzman ve hekim için aylık asgari süreyi veriyor. İlk yardımcı sayısı hesaplayıcı, az tehlikeli sınıfta her yirmi çalışan için gereken asgari belgeli ilk yardımcı sayısını çıkarıyor."
        ]
      }
    ],
    "sss": [
      {
        "soru": "Ofiste de risk değerlendirmesi zorunlu mu?",
        "cevap": "Evet. Az tehlikeli sınıfta olmak yükümlülüğü ortadan kaldırmaz; yalnız yenileme aralığını uzatır. Ofis için risk değerlendirmesi en geç altı yılda bir yenilenir, değişiklik veya kaza hâlinde süre beklenmez."
      },
      {
        "soru": "Ekranlı araçlarla çalışmada işverenin yükümlülüğü ne?",
        "cevap": "İşveren çalışma istasyonunu değerlendirir, gerekli ergonomik düzenlemeleri yapar ve çalışanı riskler hakkında bilgilendirir. Uygulamada en ucuz çözülen başlık aydınlatmadır: ekrana vuran yansıma çoğu zaman perde veya monitör açısı değiştirilerek giderilir."
      },
      {
        "soru": "Plaza ofisinde tahliye planı kimin sorumluluğunda?",
        "cevap": "Kendi iş yeriniz için acil durum planı hazırlamak sizin yükümlülüğünüz; ancak plan binanın tahliye düzeniyle uyumlu olmak zorunda. Toplanma yeri ve kaçış güzergâhı bina yönetimiyle ortak belirlenir."
      },
      {
        "soru": "Kaç ilk yardımcı bulundurmamız gerekir?",
        "cevap": "Az tehlikeli iş yerlerinde her yirmi çalışan için en az bir belgeli temel ilk yardımcı bulundurulur. Belgenin geçerlilik süresi dolduğunda güncelleme eğitimi alınması gerekir; süresi geçmiş belge belgesiz sayılır."
      },
      {
        "soru": "Eğitimin tamamı uzaktan verilebilir mi?",
        "cevap": "Az tehlikeli sınıftaki iş yerlerinde temel İSG eğitiminin tamamı uzaktan tamamlanabilir. Tehlikeli ve çok tehlikeli sınıfta ise belirli konu başlıkları için yüz yüze eğitim gerekir."
      },
      {
        "soru": "Hibrit çalışanlar için ne yapmak gerekir?",
        "cevap": "Evden çalışan personel de çalışan sayısına dahildir ve eğitim, bilgilendirme ile sağlık gözetimi kapsamındadır. Ekranlı araçlarla çalışma bilgilendirmesinin uzaktan çalışanlara da ulaştığının kayda geçmesi önemlidir."
      }
    ],
    "icLinkler": [
      {
        "metin": "İş güvenliği uzmanlığı hizmeti",
        "href": "/hizmetler/is-guvenligi-uzmanligi/"
      },
      {
        "metin": "İSG yükümlülük hesaplama",
        "href": "/araclar/isg-yukumluluk-hesaplama/"
      },
      {
        "metin": "Ofis ve hizmet sektörü",
        "href": "/sektorler/ofis-hizmet/"
      },
      {
        "metin": "Acil durum eylem planı",
        "href": "/hizmetler/acil-durum-eylem-plani/"
      },
      {
        "metin": "İlk yardımcı sayısı hesaplama",
        "href": "/araclar/ilk-yardimci-sayisi-hesaplama/"
      },
      {
        "metin": "İSG eğitimleri",
        "href": "/isg-egitimi/"
      }
    ],
    "kaynaklar": [
        {
          "ad": "İşyerlerinde Acil Durumlar Hakkında Yönetmelik",
          "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18721&MevzuatTur=7&MevzuatTertip=5"
        },
        {
          "ad": "İlk Yardım Yönetmeliği",
          "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=19059&MevzuatTur=7&MevzuatTertip=5"
        },
      {
        "ad": "6331 sayılı İş Sağlığı ve Güvenliği Kanunu",
        "url": "https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6331.pdf"
      },
      {
        "ad": "Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18697&MevzuatTur=7&MevzuatTertip=5"
      },
      {
        "ad": "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği",
        "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16925&MevzuatTur=7&MevzuatTertip=5"
      }
    ],
    "cta": {
      "metin": "Ücretsiz ön değerlendirme",
      "href": "/teklif-al/"
    },
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2026-09-20T13:45:58+00:00",
      "kalitePuani": 88,
      "benzerlikEnYuksek": 0.008
    }
  },
  {
    "slug": "esenyurt-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Esenyurt",
    "seoBaslik": "Esenyurt OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Esenyurt OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Esenyurt OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Esenyurt işyerleri için yasal zorunluluk olan İSG hizmetlerini, alanında deneyimli uzman ve hekim kadromuzla yürütüyoruz. Risk değerlendirmesinden personel eğitimlerine kadar tüm süreci sizin adınıza planlıyor ve takip ediyoruz. Firmanıza özel atanacak iş güvenliği uzmanımızla süreci hemen başlatmak için iletişime geçin.",
    "bolumler": [
      {
            "baslik": "Esenyurt'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Esenyurt bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. İstanbul'un en kalabalık ilçesi ve yoğun bir küçük imalat dokusu var. Tekstil, plastik ve gıda üretimi yapan işyerlerinin büyük bölümü tehlikeli sınıfta; bu da 12 ders saatlik temel eğitim ve daha sık işyeri hekimi görevlendirmesi demek.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Esenyurt İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Esenyurt ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Esenyurt özelinde yerinde gözlem ve tehlike tespiti.",
                  "Kimya ve Boya Sanayi alanında Esenyurt özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Esenyurt özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ahşap ve Mobilya İmalatı alanında Esenyurt özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Esenyurt işyerleri için yasal bir gereklilik midir?",
            "cevap": "Mevzuat oldukça nettir: Esenyurt sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Esenyurt OSGB sözleşmesi İSG-KATİP'ten nasıl onaylanır?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Esenyurt adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "kadikoy-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Kadıköy",
    "seoBaslik": "Kadıköy OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Kadıköy OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Kadıköy OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Kadıköy bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Kadıköy'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Kadıköy gibi sürekli gelişen ve ticari hacmi artan bölgelerde, yasal mevzuatın gerekliliklerini sahaya doğru aktarmak büyük önem taşıyor. Ağırlık ofis, kafe-restoran ve perakende. Bu işyerlerinin çoğu az tehlikeli sınıfta, yani temel eğitim 8 ders saati ve tamamı uzaktan verilebiliyor — sahaya çıkmadan tamamlanabilen ender segmentlerden.",
                  "Kanun koyucu, az tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Kadıköy İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Kadıköy ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Kadıköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Kadıköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Kadıköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Kadıköy işyerleri için yasal bir gereklilik midir?",
            "cevap": "Mevzuat oldukça nettir: Kadıköy sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Kadıköy işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Kadıköy adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "umraniye-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Ümraniye",
    "seoBaslik": "Ümraniye OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Firmanızın Ümraniye operasyonlarında iş kazalarını önlemek ve yasal uyumu sağlamak için uzman kadromuzdan OSGB hizmeti alın.",
    "h1": "Ümraniye OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Ümraniye bölgesindeki işletmelere yönelik işyeri hekimliği ve iş güvenliği uzmanlığı çözümlerimizi yetkili partnerlerimizle sunmaktayız. Amacımız sadece evrak hazırlamak değil, üretim alanlarınızda veya ofislerinizde gerçek bir güvenlik kültürü oluşturmaktır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Ümraniye'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Ümraniye özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Organize sanayi ile plaza ofislerinin yan yana olduğu karma bir ilçe. Aynı firmanın merkez ofisi az tehlikeli, üretim tesisi çok tehlikeli sınıfta olabiliyor; yükümlülük tek tek işyeri bazında hesaplanmalı.",
                  "Kanun koyucu, karma işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Ümraniye İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Ümraniye ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Ümraniye özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Ümraniye özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Ümraniye özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Ümraniye özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Ümraniye'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Mevzuat oldukça nettir: Ümraniye sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Ümraniye'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Ümraniye'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "basaksehir-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Başakşehir",
    "seoBaslik": "Başakşehir OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Başakşehir işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Başakşehir OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Başakşehir bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. Denetimlerde sorun yaşamamak ve güvenli bir çalışma ortamı tesis etmek için profesyonel desteğimizden yararlanın.",
    "bolumler": [
      {
            "baslik": "Başakşehir'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Başakşehir özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. İkitelli OSB ve çevresindeki üretim yoğunluğu ilçeyi ağırlıklı olarak tehlikeli ve çok tehlikeli sınıfa taşıyor. Çok tehlikeli sınıfta temel eğitim 16 ders saati ve 4. konu başlığı yüz yüze zorunlu.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Başakşehir İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Başakşehir ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Fabrika ve Seri Üretim alanında Başakşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Başakşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Matbaa ve Ambalaj alanında Başakşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Tekstil ve Konfeksiyon alanında Başakşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Başakşehir işyerleri için yasal bir gereklilik midir?",
            "cevap": "Mevzuat oldukça nettir: Başakşehir sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Başakşehir'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Başakşehir adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "adalar-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Adalar",
    "seoBaslik": "Adalar OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Adalar OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Adalar OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Adalar ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Adalar'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Adalar sınırları içindeki firmalar için de geçerlidir. Turizm, konaklama ve restoran hizmetlerinin yoğun olduğu bir ilçe. Az tehlikeli sınıf ağırlıklı olsa da deniz taşımacılığı ve lojistik süreçlerinde tehlikeli sınıf uygulamaları dikkat gerektiriyor.",
                  "Kanun koyucu, az tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Adalar İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Adalar ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Gıda Üretimi ve Restoranlar alanında Adalar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ofis ve Hizmet Sektörü alanında Adalar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Adalar'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Adalar dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Adalar işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Adalar lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "arnavutkoy-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Arnavutköy",
    "seoBaslik": "Arnavutköy OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Arnavutköy OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Arnavutköy OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Arnavutköy ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Amacımız sadece evrak hazırlamak değil, üretim alanlarınızda veya ofislerinizde gerçek bir güvenlik kültürü oluşturmaktır. Denetimlerde sorun yaşamamak ve güvenli bir çalışma ortamı tesis etmek için profesyonel desteğimizden yararlanın.",
    "bolumler": [
      {
            "baslik": "Arnavutköy'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Arnavutköy sınırları içindeki firmalar için de geçerlidir. İstanbul Havalimanı'nın etkisiyle lojistik, depolama ve inşaat faaliyetlerinin hızla arttığı bir bölge. Tehlikeli ve çok tehlikeli işkollarında yüksek oranda iş sağlığı ve güvenliği hizmetine ihtiyaç duyuluyor.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Arnavutköy İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Arnavutköy ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Lojistik ve Depolama alanında Arnavutköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "İnşaat ve Taahhüt İşleri alanında Arnavutköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Arnavutköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Arnavutköy'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Arnavutköy ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Sizinle Arnavutköy işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Arnavutköy lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "atasehir-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Ataşehir",
    "seoBaslik": "Ataşehir OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Ataşehir işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Ataşehir OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Ataşehir bölgesindeki işletmelere yönelik işyeri hekimliği ve iş güvenliği uzmanlığı çözümlerimizi yetkili partnerlerimizle sunmaktayız. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Ataşehir'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Ataşehir özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Finans merkezi ve beyaz yaka ofis yoğunluğu ile dikkat çeken bir ilçe. Plaza hayatının gereksinimleri olan ergonomi, ekranlı araçlarla çalışma ve acil durum tahliye planları öne çıkıyor.",
                  "Bölgedeki tesislerin önemli bir kısmı az tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Ataşehir İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Ataşehir ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Ataşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bilişim ve Yazılım Sektörü alanında Ataşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Ataşehir özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Ataşehir bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Ataşehir ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Ataşehir'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Ataşehir adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "avcilar-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Avcılar",
    "seoBaslik": "Avcılar OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Avcılar OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Avcılar OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Avcılar işyerleri için yasal zorunluluk olan İSG hizmetlerini, alanında deneyimli uzman ve hekim kadromuzla yürütüyoruz. Amacımız sadece evrak hazırlamak değil, üretim alanlarınızda veya ofislerinizde gerçek bir güvenlik kültürü oluşturmaktır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Avcılar'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Avcılar bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Ambarlı Limanı ve çevresindeki sanayi tesisleriyle lojistik ve üretim sektörlerinin kalbi konumunda. Tehlikeli madde taşımacılığı ve ağır sanayi kuralları ilçede İSG'nin temelini oluşturuyor.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Avcılar İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Avcılar ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Lojistik ve Depolama alanında Avcılar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Avcılar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Avcılar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Avcılar'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Avcılar dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Avcılar'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Avcılar adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "bagcilar-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Bağcılar",
    "seoBaslik": "Bağcılar OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Firmanızın Bağcılar operasyonlarında iş kazalarını önlemek ve yasal uyumu sağlamak için uzman kadromuzdan OSGB hizmeti alın.",
    "h1": "Bağcılar OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Bağcılar bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Bağcılar'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bağcılar ilçesinin yerel sanayi ve ticaret yapısı, iş güvenliği önlemlerinin de buraya özgü olmasını gerektiriyor. Tekstil, matbaa ve hafif imalat sektörlerinde çok sayıda küçük ve orta ölçekli işletmeyi barındırıyor. Makine koruyucuları, yangın güvenliği ve toz maruziyeti bu atölyelerde kritik öneme sahip.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Bağcılar İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Bağcılar ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Bağcılar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Matbaa ve Ambalaj alanında Bağcılar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Plastik ve Kauçuk İmalatı alanında Bağcılar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Bağcılar'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Mevzuat oldukça nettir: Bağcılar sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Bağcılar'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Bağcılar lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "bahcelievler-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Bahçelievler",
    "seoBaslik": "Bahçelievler OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Bahçelievler OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Bahçelievler OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Bahçelievler ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Çalışanlarınızın sağlığını korumak ve olası idari para cezalarından kaçınmak için ihtiyacınız olan dokümantasyon ve saha gözetimi eksiksiz yapılır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Bahçelievler'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Bahçelievler özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Kuyumculuk imalatı, tekstil ve gıda sektörlerinde yoğunlaşan bir sanayi ve ticaret yapısı var. Özellikle kimyasal kullanımı ve ergonomik riskler ön plana çıkıyor.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Bahçelievler İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Bahçelievler ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Bahçelievler özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Bahçelievler özelinde yerinde gözlem ve tehlike tespiti.",
                  "Kimya ve Boya Sanayi alanında Bahçelievler özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Bahçelievler işyerleri için yasal bir gereklilik midir?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Bahçelievler ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Bahçelievler'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Bahçelievler'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "bakirkoy-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Bakırköy",
    "seoBaslik": "Bakırköy OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakırköy OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Bakırköy OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Bakırköy ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Bakırköy'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Bakırköy özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Sağlık sektörü, hastaneler ve perakende mağazacılık ağırlıklı bir ilçe. Biyolojik risk etmenleri ve vardiyalı çalışma düzenine yönelik özel sağlık gözetimleri uygulanması gerekiyor.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak az tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Bakırköy İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Bakırköy ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Sağlık ve Hastaneler alanında Bakırköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Bakırköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ofis ve Hizmet Sektörü alanında Bakırköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Bakırköy bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Bakırköy dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Sizinle Bakırköy işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Bakırköy lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "bayrampasa-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Bayrampaşa",
    "seoBaslik": "Bayrampaşa OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bayrampaşa bölgesindeki işletmeniz için profesyonel iş sağlığı ve güvenliği çözümleri. Eğitim, periyodik kontrol ve sağlık taramaları.",
    "h1": "Bayrampaşa OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Bayrampaşa ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Bayrampaşa'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Bayrampaşa özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Kuru gıda hali, plastik enjeksiyon ve makine imalat atölyelerinin yoğun olduğu eski bir sanayi merkezi. Forklift kullanımı, yangın riski ve makine emniyeti denetimlerde ilk sırayı alıyor.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Bayrampaşa İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Bayrampaşa ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Plastik ve Kauçuk İmalatı alanında Bayrampaşa özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Bayrampaşa özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Bayrampaşa özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Bayrampaşa ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Bayrampaşa dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Sizinle Bayrampaşa işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Bayrampaşa lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "besiktas-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Beşiktaş",
    "seoBaslik": "Beşiktaş OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Beşiktaş OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Beşiktaş OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Beşiktaş ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Firmanıza özel atanacak iş güvenliği uzmanımızla süreci hemen başlatmak için iletişime geçin.",
    "bolumler": [
      {
            "baslik": "Beşiktaş'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Beşiktaş özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Medya, reklam, bilişim ve turizm sektörlerinin merkezi. Ekranlı araçlarla çalışma eğitimleri, psikososyal risk faktörleri ve ofis ergonomisi en çok talep gören hizmetler arasında.",
                  "Kanun koyucu, az tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Beşiktaş İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Beşiktaş ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Beşiktaş özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bilişim ve Yazılım Sektörü alanında Beşiktaş özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Beşiktaş özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Beşiktaş ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Beşiktaş dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Beşiktaş OSGB sözleşmesi İSG-KATİP'ten nasıl onaylanır?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Beşiktaş adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "beykoz-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Beykoz",
    "seoBaslik": "Beykoz OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Beykoz OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Beykoz OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Beykoz bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. Sıfır iş kazası hedefiyle çıktığımız yolda, işletmenizin tehlike sınıfına en uygun eylem planlarını hızla devreye alıyoruz. Firmanıza özel atanacak iş güvenliği uzmanımızla süreci hemen başlatmak için iletişime geçin.",
    "bolumler": [
      {
            "baslik": "Beykoz'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Beykoz gibi sürekli gelişen ve ticari hacmi artan bölgelerde, yasal mevzuatın gerekliliklerini sahaya doğru aktarmak büyük önem taşıyor. Lojistik, depo ve butik imalat atölyelerinin yanı sıra turizm işletmelerinin bulunduğu karma bir ilçe. Yüksekte çalışma ve kaldırma ekipmanlarının periyodik kontrolleri büyük önem taşıyor.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak karma işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Beykoz İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Beykoz ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Lojistik ve Depolama alanında Beykoz özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Beykoz özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ahşap ve Mobilya İmalatı alanında Beykoz özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Beykoz'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Beykoz dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Beykoz işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Beykoz'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "beylikduzu-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Beylikdüzü",
    "seoBaslik": "Beylikdüzü OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Beylikdüzü işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Beylikdüzü OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Beylikdüzü bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Beylikdüzü'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Beylikdüzü özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Mermer, plastik, alüminyum ve gıda üzerine faaliyet gösteren modern sanayi sitelerine ev sahipliği yapıyor. Organize sanayi bölgelerindeki tesisler genellikle çok tehlikeli sınıfta yer alıyor.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Beylikdüzü İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Beylikdüzü ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Fabrika ve Seri Üretim alanında Beylikdüzü özelinde yerinde gözlem ve tehlike tespiti.",
                  "Plastik ve Kauçuk İmalatı alanında Beylikdüzü özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Beylikdüzü özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Beylikdüzü ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Beylikdüzü dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Beylikdüzü OSGB sözleşmesi İSG-KATİP'ten nasıl onaylanır?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Beylikdüzü lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "beyoglu-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Beyoğlu",
    "seoBaslik": "Beyoğlu OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Beyoğlu bölgesindeki işletmeniz için profesyonel iş sağlığı ve güvenliği çözümleri. Eğitim, periyodik kontrol ve sağlık taramaları.",
    "h1": "Beyoğlu OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Beyoğlu ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Çalışanlarınızın sağlığını korumak ve olası idari para cezalarından kaçınmak için ihtiyacınız olan dokümantasyon ve saha gözetimi eksiksiz yapılır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Beyoğlu'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Beyoğlu sınırları içindeki firmalar için de geçerlidir. Konaklama, restoran, eğlence ve perakende sektörlerinin kalbi. Yüksek yangın riski, tarihi binalarda acil durum tahliyesi ve mutfak güvenliği denetimlerin odak noktasını oluşturuyor.",
                  "Kanun koyucu, az tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Beyoğlu İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Beyoğlu ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Gıda Üretimi ve Restoranlar alanında Beyoğlu özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Beyoğlu özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ofis ve Hizmet Sektörü alanında Beyoğlu özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Beyoğlu bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Mevzuat oldukça nettir: Beyoğlu sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Sizinle Beyoğlu işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Beyoğlu lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "buyukcekmece-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Büyükçekmece",
    "seoBaslik": "Büyükçekmece OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Büyükçekmece OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Büyükçekmece OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Büyükçekmece ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Amacımız sadece evrak hazırlamak değil, üretim alanlarınızda veya ofislerinizde gerçek bir güvenlik kültürü oluşturmaktır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Büyükçekmece'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Büyükçekmece sınırları içindeki firmalar için de geçerlidir. İnşaat, tarım ve lojistik faaliyetlerinin birlikte yürütüldüğü geniş yüzölçümlü bir ilçe. Şantiye güvenliği, iskele kurulumu ve yüksekte çalışma eğitimleri zorunlu tutuluyor.",
                  "Çalışma ortamının karma karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Büyükçekmece İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Büyükçekmece ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "İnşaat ve Taahhüt İşleri alanında Büyükçekmece özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Büyükçekmece özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Büyükçekmece özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Büyükçekmece işyerleri için yasal bir gereklilik midir?",
            "cevap": "Mevzuat oldukça nettir: Büyükçekmece sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Sizinle Büyükçekmece işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Büyükçekmece'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "catalca-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Çatalca",
    "seoBaslik": "Çatalca OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Çatalca OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Çatalca OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Çatalca ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Çalışanlarınızın sağlığını korumak ve olası idari para cezalarından kaçınmak için ihtiyacınız olan dokümantasyon ve saha gözetimi eksiksiz yapılır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Çatalca'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Çatalca bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Tarım, hayvancılık, gıda üretimi ve depolama tesislerinin bulunduğu, yüzölçümü en büyük ilçe. Traktör kullanımı, kimyasal gübre/ilaç depolaması ve biyolojik riskler öne çıkıyor.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak tehlikeli ve çok tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Çatalca İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Çatalca ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Gıda Üretimi ve Restoranlar alanında Çatalca özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Çatalca özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Çatalca özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Çatalca bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Mevzuat oldukça nettir: Çatalca sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Çatalca'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Çatalca'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "cekmekoy-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Çekmeköy",
    "seoBaslik": "Çekmeköy OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Firmanızın Çekmeköy operasyonlarında iş kazalarını önlemek ve yasal uyumu sağlamak için uzman kadromuzdan OSGB hizmeti alın.",
    "h1": "Çekmeköy OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Çekmeköy işyerleri için yasal zorunluluk olan İSG hizmetlerini, alanında deneyimli uzman ve hekim kadromuzla yürütüyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Çekmeköy'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Çekmeköy gibi sürekli gelişen ve ticari hacmi artan bölgelerde, yasal mevzuatın gerekliliklerini sahaya doğru aktarmak büyük önem taşıyor. Konut projelerinin hızla arttığı, perakende ve hizmet sektörünün büyüdüğü bir ilçe. Şantiyelerde düşme koruma sistemleri, mağazalarda ise acil durum planları öncelikli.",
                  "Kanun koyucu, karma işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Çekmeköy İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Çekmeköy ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "İnşaat ve Taahhüt İşleri alanında Çekmeköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Çekmeköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ofis ve Hizmet Sektörü alanında Çekmeköy özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Çekmeköy ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Mevzuat oldukça nettir: Çekmeköy sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Sizinle Çekmeköy işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Çekmeköy adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "esenler-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Esenler",
    "seoBaslik": "Esenler OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Esenler OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Esenler OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Esenler ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Amacımız sadece evrak hazırlamak değil, üretim alanlarınızda veya ofislerinizde gerçek bir güvenlik kültürü oluşturmaktır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Esenler'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Esenler ilçesinin yerel sanayi ve ticaret yapısı, iş güvenliği önlemlerinin de buraya özgü olmasını gerektiriyor. Tekstil, ayakkabı ve metal işleme atölyelerinin ara sokaklarda ve iş hanlarında yoğunlaştığı bir bölge. Elektrik tesisatı güvenliği, havalandırma ve kimyasal kullanımı acil müdahale gerektiriyor.",
                  "Kanun koyucu, tehlikeli ve çok tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Esenler İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Esenler ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Esenler özelinde yerinde gözlem ve tehlike tespiti.",
                  "Plastik ve Kauçuk İmalatı alanında Esenler özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Esenler özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Esenler ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Esenler ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Sizinle Esenler işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Esenler'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "eyupsultan-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Eyüpsultan",
    "seoBaslik": "Eyüpsultan OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Eyüpsultan OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Eyüpsultan OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Eyüpsultan bölgesindeki işletmelere yönelik işyeri hekimliği ve iş güvenliği uzmanlığı çözümlerimizi yetkili partnerlerimizle sunmaktayız. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Eyüpsultan'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Eyüpsultan sınırları içindeki firmalar için de geçerlidir. Gıda imalatı, orman ürünleri işleme ve lojistik sektörlerinin bulunduğu tarihi ve geniş bir ilçe. Ahşap atölyelerinde toz maruziyeti ve yangın, İSG planlamasında ilk sırayı alıyor.",
                  "Kanun koyucu, tehlikeli ve çok tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Eyüpsultan İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Eyüpsultan ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ahşap ve Mobilya İmalatı alanında Eyüpsultan özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Eyüpsultan özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Eyüpsultan özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Eyüpsultan işyerleri için yasal bir gereklilik midir?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Eyüpsultan dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Eyüpsultan OSGB sözleşmesi İSG-KATİP'ten nasıl onaylanır?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Eyüpsultan lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "fatih-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Fatih",
    "seoBaslik": "Fatih OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Fatih OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Fatih OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Fatih ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Çalışanlarınızın sağlığını korumak ve olası idari para cezalarından kaçınmak için ihtiyacınız olan dokümantasyon ve saha gözetimi eksiksiz yapılır. Denetimlerde sorun yaşamamak ve güvenli bir çalışma ortamı tesis etmek için profesyonel desteğimizden yararlanın.",
    "bolumler": [
      {
            "baslik": "Fatih'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Fatih bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Tarihi yarımadada tekstil ticareti, turizm, konaklama ve küçük çaplı altın/gümüş imalatı yapılıyor. Eski binalarda elektrik tesisatı yangınları ve ergonomik sorunlar sıkça yaşanıyor.",
                  "Bölgedeki tesislerin önemli bir kısmı az tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Fatih İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Fatih ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Perakende ve Mağazacılık alanında Fatih özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Fatih özelinde yerinde gözlem ve tehlike tespiti.",
                  "Tekstil ve Konfeksiyon alanında Fatih özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Fatih ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Fatih dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Fatih işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Fatih'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "gaziosmanpasa-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Gaziosmanpaşa",
    "seoBaslik": "Gaziosmanpaşa OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Gaziosmanpaşa işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Gaziosmanpaşa OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Gaziosmanpaşa bölgesindeki işletmelere yönelik işyeri hekimliği ve iş güvenliği uzmanlığı çözümlerimizi yetkili partnerlerimizle sunmaktayız. Çalışanlarınızın sağlığını korumak ve olası idari para cezalarından kaçınmak için ihtiyacınız olan dokümantasyon ve saha gözetimi eksiksiz yapılır. Firmanıza özel atanacak iş güvenliği uzmanımızla süreci hemen başlatmak için iletişime geçin.",
    "bolumler": [
      {
            "baslik": "Gaziosmanpaşa'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Gaziosmanpaşa özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Kentsel dönüşüm şantiyeleri ile tekstil ve hafif metal sanayisinin iç içe geçtiği bir bölge. Kazı güvenliği, yüksekte çalışma ve iskele standartları şantiyelerde sıkı denetleniyor.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Gaziosmanpaşa İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Gaziosmanpaşa ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "İnşaat ve Taahhüt İşleri alanında Gaziosmanpaşa özelinde yerinde gözlem ve tehlike tespiti.",
                  "Tekstil ve Konfeksiyon alanında Gaziosmanpaşa özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Gaziosmanpaşa özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Gaziosmanpaşa ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Mevzuat oldukça nettir: Gaziosmanpaşa sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Sizinle Gaziosmanpaşa işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Gaziosmanpaşa'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "gungoren-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Güngören",
    "seoBaslik": "Güngören OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Güngören işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Güngören OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Güngören ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Amacımız sadece evrak hazırlamak değil, üretim alanlarınızda veya ofislerinizde gerçek bir güvenlik kültürü oluşturmaktır. Denetimlerde sorun yaşamamak ve güvenli bir çalışma ortamı tesis etmek için profesyonel desteğimizden yararlanın.",
    "bolumler": [
      {
            "baslik": "Güngören'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Güngören özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Merter tekstil piyasasının kalbi. Yoğun iş hanlarında konfeksiyon, ütü-paket ve mağazacılık faaliyetleri yürütülüyor. Kumaş tozu, buhar jeneratörleri ve yangın merdivenlerinin açıklığı hayati öneme sahip.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Güngören İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Güngören ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Güngören özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Güngören özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Güngören özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Güngören bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Güngören ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Sizinle Güngören işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Güngören adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "kagithane-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Kâğıthane",
    "seoBaslik": "Kâğıthane OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Kâğıthane bölgesindeki işletmeniz için profesyonel iş sağlığı ve güvenliği çözümleri. Eğitim, periyodik kontrol ve sağlık taramaları.",
    "h1": "Kâğıthane OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Kâğıthane bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Kâğıthane'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Kâğıthane özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Sanayiden ofis ve hizmet sektörüne dönüşümünü büyük ölçüde tamamlamış bir ilçe. Yine de matbaacılık ve otomotiv servisleri varlığını sürdürüyor, karma bir İSG yapısı gerektiriyor.",
                  "Bölgedeki tesislerin önemli bir kısmı karma işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Kâğıthane İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Kâğıthane ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Kâğıthane özelinde yerinde gözlem ve tehlike tespiti.",
                  "Matbaa ve Ambalaj alanında Kâğıthane özelinde yerinde gözlem ve tehlike tespiti.",
                  "Otomotiv ve Araç Servisleri alanında Kâğıthane özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Kâğıthane bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Kâğıthane ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Kâğıthane'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Kâğıthane adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "kartal-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Kartal",
    "seoBaslik": "Kartal OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Kartal OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Kartal OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Kartal bölgesindeki işletmelere yönelik işyeri hekimliği ve iş güvenliği uzmanlığı çözümlerimizi yetkili partnerlerimizle sunmaktayız. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Kartal'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Kartal bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Otomotiv yan sanayi, makine imalatı ve inşaat projelerinin yoğunlaştığı, sanayi ve konutun birleştiği nokta. Çok tehlikeli sınıfta 16 saatlik temel İSG eğitimleri ve düzenli sağlık gözetimi zorunlu.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak tehlikeli ve çok tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Kartal İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Kartal ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Fabrika ve Seri Üretim alanında Kartal özelinde yerinde gözlem ve tehlike tespiti.",
                  "Otomotiv ve Araç Servisleri alanında Kartal özelinde yerinde gözlem ve tehlike tespiti.",
                  "İnşaat ve Taahhüt İşleri alanında Kartal özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Kartal ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Kartal ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Kartal işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Kartal lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "kucukcekmece-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Küçükçekmece",
    "seoBaslik": "Küçükçekmece OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Küçükçekmece OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Küçükçekmece OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Küçükçekmece bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Küçükçekmece'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Küçükçekmece gibi sürekli gelişen ve ticari hacmi artan bölgelerde, yasal mevzuatın gerekliliklerini sahaya doğru aktarmak büyük önem taşıyor. İkitelli OSB'nin bir kısmını barındıran, metal, plastik ve tekstil sektörlerinin güçlü olduğu bir ilçe. Ağır iş makineleri, pres tezgahları ve kimyasal buhar maruziyeti odak noktası.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Küçükçekmece İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Küçükçekmece ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Metal İşleme ve Kaynak alanında Küçükçekmece özelinde yerinde gözlem ve tehlike tespiti.",
                  "Plastik ve Kauçuk İmalatı alanında Küçükçekmece özelinde yerinde gözlem ve tehlike tespiti.",
                  "Tekstil ve Konfeksiyon alanında Küçükçekmece özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Küçükçekmece bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Küçükçekmece dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Küçükçekmece işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Küçükçekmece lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "maltepe-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Maltepe",
    "seoBaslik": "Maltepe OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Maltepe işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Maltepe OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Maltepe ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Maltepe'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Maltepe özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Ofis alanlarının, üniversitelerin ve E-5 hattında otomotiv servislerinin bir araya geldiği bir ilçe. Hizmet sektöründe ekranlı araçlarla çalışma, servislerde ise kimyasal ve mekanik riskler öne çıkıyor.",
                  "Çalışma ortamının karma karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Maltepe İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Maltepe ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Maltepe özelinde yerinde gözlem ve tehlike tespiti.",
                  "Otomotiv ve Araç Servisleri alanında Maltepe özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Maltepe özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Maltepe bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Mevzuat oldukça nettir: Maltepe sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Maltepe işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Maltepe lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "pendik-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Pendik",
    "seoBaslik": "Pendik OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Pendik OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Pendik OSGB ve İş Güvenliği Hizmetleri",
    "giris": "İşletmenizin Pendik bölgesindeki faaliyetleri için gereken tüm iş güvenliği ve sağlık gözetimi adımlarını tek elden yönetiyoruz. Risk değerlendirmesinden personel eğitimlerine kadar tüm süreci sizin adınıza planlıyor ve takip ediyoruz. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Pendik'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Pendik gibi sürekli gelişen ve ticari hacmi artan bölgelerde, yasal mevzuatın gerekliliklerini sahaya doğru aktarmak büyük önem taşıyor. Tersaneler, havalimanı ve sanayi siteleriyle çok tehlikeli sınıfın merkez üssü. Kapalı alanda çalışma, sıcak çalışma izinleri ve patlamadan korunma dokümanı (PKD) hazırlığı Pendik'te istisna değil, kural.",
                  "Kanun koyucu, tehlikeli ve çok tehlikeli işletmeler için daha sıkı denetim ve daha uzun süreli hekim/uzman hizmeti öngörmüştür. Biz de bölgedeki çalışmalarımızı bu yasal hassasiyetlere dayanarak kurguluyoruz."
            ]
      },
      {
            "baslik": "Pendik İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Pendik ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Metal İşleme ve Kaynak alanında Pendik özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Pendik özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Pendik özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Pendik'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Pendik dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Pendik'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Pendik'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "sancaktepe-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Sancaktepe",
    "seoBaslik": "Sancaktepe OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Firmanızın Sancaktepe operasyonlarında iş kazalarını önlemek ve yasal uyumu sağlamak için uzman kadromuzdan OSGB hizmeti alın.",
    "h1": "Sancaktepe OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Sancaktepe ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Risk değerlendirmesinden personel eğitimlerine kadar tüm süreci sizin adınıza planlıyor ve takip ediyoruz. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Sancaktepe'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Sancaktepe bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Lojistik merkezleri, depolama alanları ve hafif imalat tesislerinin yeni cazibe merkezi. Forklift yaya yollarının ayrılması, raf statik kontrolleri ve yangın pompaları denetleniyor.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Sancaktepe İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Sancaktepe ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Lojistik ve Depolama alanında Sancaktepe özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Sancaktepe özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Sancaktepe özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sancaktepe ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Mevzuat oldukça nettir: Sancaktepe sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Sizinle Sancaktepe işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Sancaktepe adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "sariyer-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Sarıyer",
    "seoBaslik": "Sarıyer OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Firmanızın Sarıyer operasyonlarında iş kazalarını önlemek ve yasal uyumu sağlamak için uzman kadromuzdan OSGB hizmeti alın.",
    "h1": "Sarıyer OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Sarıyer bölgesindeki işletmelere yönelik işyeri hekimliği ve iş güvenliği uzmanlığı çözümlerimizi yetkili partnerlerimizle sunmaktayız. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Sarıyer'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Sarıyer bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Maslak iş merkezi hattıyla plaza kültürünün, İstinye tarafıyla perakende ve restoranların yoğun olduğu bölge. İş yerleri genelde az tehlikeli sınıfta yer alıyor; acil durum tatbikatları önem taşıyor.",
                  "Bölgedeki tesislerin önemli bir kısmı az tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Sarıyer İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Sarıyer ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ofis ve Hizmet Sektörü alanında Sarıyer özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bilişim ve Yazılım Sektörü alanında Sarıyer özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Sarıyer özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sarıyer bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Sarıyer dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Sizinle Sarıyer işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Sarıyer lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "silivri-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Silivri",
    "seoBaslik": "Silivri OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Silivri işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Silivri OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Bakanlık onaylı çözüm ortaklarımız aracılığıyla Silivri sınırları içindeki işyerlerine profesyonel iş sağlığı ve güvenliği hizmeti sağlıyoruz. Çalışanlarınızın sağlığını korumak ve olası idari para cezalarından kaçınmak için ihtiyacınız olan dokümantasyon ve saha gözetimi eksiksiz yapılır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Silivri'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Silivri ilçesinin yerel sanayi ve ticaret yapısı, iş güvenliği önlemlerinin de buraya özgü olmasını gerektiriyor. Büyük sanayi tesisleri, gıda üretim fabrikaları ve tarım arazilerini içinde barındırıyor. Gıda hijyeni ölçümleri, makine koruyucuları ve ambalaj hatlarında iş güvenliği öncelikli.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Silivri İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Silivri ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Fabrika ve Seri Üretim alanında Silivri özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Silivri özelinde yerinde gözlem ve tehlike tespiti.",
                  "Plastik ve Kauçuk İmalatı alanında Silivri özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Silivri bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Silivri ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Silivri'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Silivri'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "sultanbeyli-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Sultanbeyli",
    "seoBaslik": "Sultanbeyli OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Sultanbeyli işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Sultanbeyli OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Bakanlık onaylı çözüm ortaklarımız aracılığıyla Sultanbeyli sınırları içindeki işyerlerine profesyonel iş sağlığı ve güvenliği hizmeti sağlıyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. Denetimlerde sorun yaşamamak ve güvenli bir çalışma ortamı tesis etmek için profesyonel desteğimizden yararlanın.",
    "bolumler": [
      {
            "baslik": "Sultanbeyli'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Her ilçenin kendi ekonomik dinamiği vardır; Sultanbeyli özelindeki işletmelerin maruz kaldığı riskler de genel standartların ötesinde yerinde bir inceleme ister. Ahşap işleme, mobilya, otomotiv tamir ve yedek parça üretimi ağırlıklı küçük sanayi siteleri mevcut. Ahşap tozu patlamaları, solvent buharları ve gürültü ölçümleri sıkça yapılıyor.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak tehlikeli ve çok tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Sultanbeyli İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Sultanbeyli ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Ahşap ve Mobilya İmalatı alanında Sultanbeyli özelinde yerinde gözlem ve tehlike tespiti.",
                  "Otomotiv ve Araç Servisleri alanında Sultanbeyli özelinde yerinde gözlem ve tehlike tespiti.",
                  "Metal İşleme ve Kaynak alanında Sultanbeyli özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Sultanbeyli'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, Sultanbeyli dâhil tüm Türkiye'de, tehlikeli ve çok tehlikeli sınıfta 1 çalışanı dahi olan firmalar ile az tehlikeli sınıfta 50'den fazla personeli olan işyerleri bu hizmeti almak zorundadır."
      },
      {
            "soru": "Sultanbeyli'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Sultanbeyli lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "sultangazi-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Sultangazi",
    "seoBaslik": "Sultangazi OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Sultangazi OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Sultangazi OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Sultangazi ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Sıfır iş kazası hedefiyle çıktığımız yolda, işletmenizin tehlike sınıfına en uygun eylem planlarını hızla devreye alıyoruz. Hemen teklif alarak yasal yükümlülüklerinizi güvenle bize devredebilirsiniz.",
    "bolumler": [
      {
            "baslik": "Sultangazi'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Sultangazi sınırları içindeki firmalar için de geçerlidir. Mermer işleme, tekstil, ayakkabı ve inşaat malzemeleri üretimi çok yaygın. Özellikle mermer tozuna bağlı pnömokonyoz riski ve pres makinelerindeki sıkışma tehlikesi işyeri hekimliğinin ana gündemi.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak tehlikeli ve çok tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Sultangazi İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Sultangazi ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Sultangazi özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Sultangazi özelinde yerinde gözlem ve tehlike tespiti.",
                  "Plastik ve Kauçuk İmalatı alanında Sultangazi özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sultangazi ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Sultangazi ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Sizinle Sultangazi işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Sultangazi adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "sile-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Şile",
    "seoBaslik": "Şile OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Şile OSGB hizmetleri: İş güvenliği uzmanı, işyeri hekimi ve risk analizi. 6331 sayılı kanuna uygun yetkili İSG desteği.",
    "h1": "Şile OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Bakanlık onaylı çözüm ortaklarımız aracılığıyla Şile sınırları içindeki işyerlerine profesyonel iş sağlığı ve güvenliği hizmeti sağlıyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. Firmanıza özel atanacak iş güvenliği uzmanımızla süreci hemen başlatmak için iletişime geçin.",
    "bolumler": [
      {
            "baslik": "Şile'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Şile ilçesinin yerel sanayi ve ticaret yapısı, iş güvenliği önlemlerinin de buraya özgü olmasını gerektiriyor. Madencilik, kum ocakları ve turizm faaliyetleri bir arada. Maden ocaklarında göçük, iş makinesi kazaları ve toz maruziyeti, turizmde ise gıda güvenliği İSG'nin iki farklı yüzünü gösteriyor.",
                  "Bölgedeki tesislerin önemli bir kısmı tehlikeli ve çok tehlikeli işyerlerinden oluştuğu için, risk analizleri standart şablonların dışına çıkarak işletmeye özel tehlike kaynaklarını hedef almalıdır."
            ]
      },
      {
            "baslik": "Şile İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Şile ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "İnşaat ve Taahhüt İşleri alanında Şile özelinde yerinde gözlem ve tehlike tespiti.",
                  "Gıda Üretimi ve Restoranlar alanında Şile özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Şile özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Şile ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Mevzuat oldukça nettir: Şile sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Sizinle Şile işletmemiz için çalışmaya başlamak adına ilk adım nedir?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Şile'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "sisli-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Şişli",
    "seoBaslik": "Şişli OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Şişli bölgesindeki işletmeniz için profesyonel iş sağlığı ve güvenliği çözümleri. Eğitim, periyodik kontrol ve sağlık taramaları.",
    "h1": "Şişli OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Şişli ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. Risk değerlendirmesinden personel eğitimlerine kadar tüm süreci sizin adınıza planlıyor ve takip ediyoruz. Firmanıza özel atanacak iş güvenliği uzmanımızla süreci hemen başlatmak için iletişime geçin.",
    "bolumler": [
      {
            "baslik": "Şişli'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Şişli sınırları içindeki firmalar için de geçerlidir. Hastaneler, oteller, alışveriş merkezleri ve ofis bloklarının kalbi. Biyolojik risk etmenleri, vardiyalı çalışma, havalandırma sistemleri bakımı ve ergonomik riskler ön planda.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak az tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Şişli İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Şişli ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Sağlık ve Hastaneler alanında Şişli özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ofis ve Hizmet Sektörü alanında Şişli özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Şişli özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "OSGB ile anlaşmak Şişli işyerleri için yasal bir gereklilik midir?",
            "cevap": "Kesinlikle zorunludur. Yasalar gereği Şişli ilçesinde faaliyette bulunan ve tehlike sınıfı şartlarını (tehlikeli/çok tehlikeli sınıfta en az 1 çalışan, az tehlikelide 50+) sağlayan her işletme, İSG profesyonelleri ile çalışmalıdır."
      },
      {
            "soru": "Şişli işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Süreci başlatmak çok kolaydır. Firmanızın SGK sicil numarasını bize iletmenizin ardından, e-Devlet üzerinden İSG-KATİP sistemine girerek göndereceğimiz dijital sözleşmeyi onaylamanız yeterli olacaktır. Sonrasında uzmanlarımız Şişli adresinize gelerek fiili çalışmalara başlar."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "tuzla-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Tuzla",
    "seoBaslik": "Tuzla OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Bakanlık onaylı Tuzla OSGB firması arıyorsanız doğru yerdesiniz. İşyeri hekimliği ve acil durum eylem planı hizmetlerimizle yanınızdayız.",
    "h1": "Tuzla OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Tuzla ilçesinde bulunan firmanız için 6331 sayılı İSG Kanunu'na tam uyumlu OSGB hizmetleri veriyoruz. İş kanunlarının getirdiği tüm teknik ve idari prosedürler, sektörünüze özel olarak yapılandırılır. İSG-KATİP onayından saha uygulamalarına dek her adımda yanınızdayız.",
    "bolumler": [
      {
            "baslik": "Tuzla'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "İş sağlığı ve güvenliği uygulamaları, Tuzla bölgesinin barındırdığı sektörel çeşitlilik göz önüne alınarak özel olarak tasarlanmalıdır. Gemi inşa (tersane), kimya sanayi ve metal işlemenin merkezi. Sürekli değişen çalışma ortamı, kapalı alanlarda kaynak, ağır kaldırma ve zehirli gaz riskleri Tuzla'yı İSG'de en kritik ilçe yapıyor.",
                  "İş sağlığı ve güvenliği denetimlerinde, bölgedeki ağırlıklı olarak tehlikeli ve çok tehlikeli işletmelerin yapısı dikkate alınır. Eğitim süreleri ve uzman atama süreleri tamamen bu risk yapısına göre dizayn edilir."
            ]
      },
      {
            "baslik": "Tuzla İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Tuzla ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Metal İşleme ve Kaynak alanında Tuzla özelinde yerinde gözlem ve tehlike tespiti.",
                  "Kimya ve Boya Sanayi alanında Tuzla özelinde yerinde gözlem ve tehlike tespiti.",
                  "Fabrika ve Seri Üretim alanında Tuzla özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Tuzla bölgesinde iş güvenliği hizmeti (OSGB) almak kanunen zorunlu mu?",
            "cevap": "Mevzuat oldukça nettir: Tuzla sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Tuzla'daki işletmemizde iş sağlığı süreçlerine başlamak için ne yapmalıyız?",
            "cevap": "İlk olarak işletmenizin yasal yükümlülüklerini hesaplıyoruz. Çalışma ve Sosyal Güvenlik Bakanlığı'nın sistemi olan İSG-KATİP üzerinden sözleşmemiz karşılıklı onaylandıktan sonra, profesyonel ekibimiz Tuzla'daki tesisinizde veya ofisinizde göreve başlıyor."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "uskudar-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Üsküdar",
    "seoBaslik": "Üsküdar OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Üsküdar bölgesindeki işletmeniz için profesyonel iş sağlığı ve güvenliği çözümleri. Eğitim, periyodik kontrol ve sağlık taramaları.",
    "h1": "Üsküdar OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Uzman kadromuzla Üsküdar ilçesinde faaliyet gösteren her ölçekten firmaya güvenilir iş sağlığı ve güvenliği danışmanlığı veriyoruz. Saha denetimleri, periyodik sağlık kontrolleri ve acil durum tatbikatları mevzuatın öngördüğü periyotlarda titizlikle uygulanır. Uzman ekibimizle tanışmak ve ücretsiz ön inceleme talep etmek için formumuzu doldurabilirsiniz.",
    "bolumler": [
      {
            "baslik": "Üsküdar'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Bir işyerinin fiziki konumu ve çevresel faktörleri İSG süreçlerini doğrudan etkiler. Bu durum Üsküdar sınırları içindeki firmalar için de geçerlidir. Eğitim kurumları, hastaneler ve perakende ticaretin yoğun olduğu bir ilçe. Okullarda acil durum planlaması, hastanelerde atık yönetimi ve radyasyon güvenliği önceliklendiriliyor.",
                  "Çalışma ortamının az tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Üsküdar İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Üsküdar ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Sağlık ve Hastaneler alanında Üsküdar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Perakende ve Mağazacılık alanında Üsküdar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Ofis ve Hizmet Sektörü alanında Üsküdar özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Üsküdar ilçesindeki firmalar için İSG uzmanı çalıştırmak mecburiyetinde miyiz?",
            "cevap": "Mevzuat oldukça nettir: Üsküdar sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Üsküdar OSGB sözleşmesi İSG-KATİP'ten nasıl onaylanır?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Üsküdar lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  },
  {
    "slug": "zeytinburnu-osgb",
    "tip": "ilce",
    "il": "İstanbul",
    "ilce": "Zeytinburnu",
    "seoBaslik": "Zeytinburnu OSGB Hizmetleri ve İş Sağlığı Güvenliği | Dijital OSGB",
    "metaAciklama": "Zeytinburnu işyerleri için yasal mevzuata tam uyumlu İSG hizmetleri. Risk değerlendirmesi ve saha denetimleri için hemen teklif alın.",
    "h1": "Zeytinburnu OSGB ve İş Güvenliği Hizmetleri",
    "giris": "Zeytinburnu işyerleri için yasal zorunluluk olan İSG hizmetlerini, alanında deneyimli uzman ve hekim kadromuzla yürütüyoruz. Sıfır iş kazası hedefiyle çıktığımız yolda, işletmenizin tehlike sınıfına en uygun eylem planlarını hızla devreye alıyoruz. Denetimlerde sorun yaşamamak ve güvenli bir çalışma ortamı tesis etmek için profesyonel desteğimizden yararlanın.",
    "bolumler": [
      {
            "baslik": "Zeytinburnu'da İş Güvenliğinin Çerçevesi",
            "paragraflar": [
                  "Zeytinburnu gibi sürekli gelişen ve ticari hacmi artan bölgelerde, yasal mevzuatın gerekliliklerini sahaya doğru aktarmak büyük önem taşıyor. Tekstil, deri işleme, konfeksiyon ve kentsel dönüşüm şantiyeleriyle hareketli bir bölge. Deri atölyelerindeki kimyasallar (krom vb.) ve tekstil tozu maruziyeti özel sağlık gözetimi gerektiriyor.",
                  "Çalışma ortamının tehlikeli ve çok tehlikeli karakteristiği, sadece evrak üzerinde değil, doğrudan sahadaki uygulamalarda da proaktif bir yaklaşımı zorunlu kılmaktadır."
            ]
      },
      {
            "baslik": "Zeytinburnu İşletmelerinde Sunduğumuz Hizmetler",
            "paragraflar": [
                  "Dijital OSGB olarak Zeytinburnu ilçesinde faaliyet gösteren işletmelere sunduğumuz başlıca hizmetler şunlardır:"
            ],
            "maddeler": [
                  "Tekstil ve Konfeksiyon alanında Zeytinburnu özelinde yerinde gözlem ve tehlike tespiti.",
                  "İnşaat ve Taahhüt İşleri alanında Zeytinburnu özelinde yerinde gözlem ve tehlike tespiti.",
                  "Lojistik ve Depolama alanında Zeytinburnu özelinde yerinde gözlem ve tehlike tespiti.",
                  "Bölgedeki işyerlerine uygun acil durum eylem planlarının hazırlanması ve tatbikatların yapılması.",
                  "Çalışanların sağlık gözetimleri için periyodik muayenelerin organize edilmesi."
            ]
      }
],
    "sss": [
      {
            "soru": "Sadece 1 çalışanımız var, Zeytinburnu'daki ofisimizde yine de İSG hizmeti almalı mıyız?",
            "cevap": "Mevzuat oldukça nettir: Zeytinburnu sınırlarında faaliyet gösterip tehlikeli veya çok tehlikeli sınıfa giren tüm işyerleri, personel sayısına bakılmaksızın bu hizmeti almakla yükümlüdür."
      },
      {
            "soru": "Zeytinburnu işyerimiz için OSGB sürecini nasıl başlatabiliriz?",
            "cevap": "Öncelikle tehlike sınıfınızı ve çalışan sayınızı belirliyoruz. Mutabakat sağlandıktan sonra İSG-KATİP üzerinden yapılan elektronik atamayı e-Devlet şifrenizle onaylıyorsunuz. Hemen ardından Zeytinburnu lokasyonunuzdaki saha denetimlerini ve risk analizlerini planlıyoruz."
      }
],
    "icLinkler": [
      {
            "metin": "İş Güvenliği Uzmanlığı",
            "href": "/hizmetler/is-guvenligi-uzmani"
      },
      {
            "metin": "İşyeri Hekimliği",
            "href": "/hizmetler/isyeri-hekimi"
      },
      {
            "metin": "Risk Değerlendirmesi",
            "href": "/hizmetler/risk-degerlendirmesi"
      },
      {
            "metin": "Acil Durum Planı",
            "href": "/hizmetler/acil-durum-plani"
      }
],
    "kaynaklar": [
      {
            "ad": "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
            "url": "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf"
      },
      {
            "ad": "İSG Hizmetleri Yönetmeliği",
            "url": "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16922&MevzuatTur=7&MevzuatTertip=5"
      }
],
    "sahaHizmeti": true,
    "faqSemasi": true,
    "uretim": {
      "yayinTarihi": "2024-03-12",
      "kalitePuani": 95,
      "benzerlikEnYuksek": 14
}
  }
];
