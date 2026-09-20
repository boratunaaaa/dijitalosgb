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

  /** Motorun verdiği puan ve ölçümler — şeffaflık için saklanıyor. */
  uretim: {
    yayinTarihi: string;
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
    "giris": "Tuzla'da metal işi çoğu zaman gemi bakım ve onarımına bağlı yürüyor. Bu da kaynağı sabit bir tezgâh işi olmaktan çıkarıp, her gün farklı bir kapalı hacimde ve farklı bir yükseklikte yapılan bir iş hâline getiriyor. Yükümlülüğün merkezinde bu yüzden çalışma izni sistemi var.",
    "bolumler": [
      {
        "baslik": "Tuzla'da metal işini ayıran şey ne?",
        "paragraflar": [
          "Tuzla'daki metal işletmelerinin önemli bölümü, gemi inşa ve bakım faaliyetinin çevresinde konumlanmış durumda. Bir atölyede sabit tezgâh başında yapılan kaynakla, tekne içindeki bir tankın içinde yapılan kaynak aynı iş değildir: ikincisinde ortam kapalı, havalandırma zorlamalı, kaçış yolu tek ve çoğu zaman dar.",
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
          "Bölgede iş yoğunluğu proje bazlı dalgalanıyor. Bir gemi havuza girdiğinde saha birkaç gün içinde kalabalıklaşıyor, iş bittiğinde boşalıyor. Bu, eğitim planlamasını zorlaştıran bir durum: sahaya yeni giren çalışanın işe başlama eğitimi ve iş yerine özgü bilgilendirmesi, o gün yapılmak zorunda."
        ],
        "maddeler": [
          "Kapalı alan girişlerinde gözcü hiçbir koşulda içeri girmez; kapalı alan ölümlerinin büyük bölümü kurtarmak için giren ikinci kişidir.",
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
    "giris": "Başakşehir'deki metal işi ağırlıkla atölye ölçeğinde yürüyor: birkaç tezgâh, bir pres, bir kaynak köşesi ve az sayıda çalışan. Bu ölçekte en sık karşılaşılan eksik, tehlikeli bir işin yapılması değil; tezgâhın koruyucusunun sökülmüş ve ekipmanın kontrol raporunun süresinin dolmuş olması.",
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
          "Bölgedeki atölyelerin önemli bölümü fason üretim yapıyor; yani işin niteliği müşteriye göre değişiyor. Bir ay sac kesimi ağırlıklıyken ertesi ay kaynak ve montaj öne çıkabiliyor. Risk değerlendirmesinin, yapılan işin değiştiği anda gözden geçirilmesi bu yüzden kâğıt üzerinde bir kural değil, pratik bir ihtiyaç."
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
    "giris": "Esenyurt'ta tekstil işi çoğunlukla kat aralarına yerleşmiş orta ölçekli atölyelerde yürüyor. Bu iş kolunda riskler görünür değil: kimse ağır bir yük kaldırmıyor, yüksekte çalışmıyor. Buna rağmen yangın yükü, toz ve gürültü birlikte ciddi bir tablo oluşturuyor.",
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
    "giris": "Beylikdüzü'ndeki depolarda en ağır sonuçlu kazalar genellikle iki noktada yoğunlaşıyor: forkliftin yaya güzergâhıyla kesiştiği yerde ve yükleme rampasında. İkisi de yerleşim kararıyla çözülebilen, sonradan eğitimle kapatılması zor risklerdir.",
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
    "giris": "Ataşehir'de ofis işletmeleri çoğunlukla az tehlikeli sınıfta yer alıyor. Bu, yükümlülüğün olmadığı anlamına gelmiyor; yalnız sürelerin kısa olduğu anlamına geliyor. Plaza ortamında asıl mesele riskin yokluğu değil, yavaş ilerlediği için fark edilmemesi.",
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
          "Bölgedeki ofislerin önemli bölümü çok kiracılı plazalarda. Bu, tahliye ve yangın düzeninin tek başına kiracının kontrolünde olmadığı anlamına geliyor; plan bina yönetimiyle birlikte kurulmak zorunda."
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
    "uretim": {
      "yayinTarihi": "2026-09-20T13:45:58+00:00",
      "kalitePuani": 88,
      "benzerlikEnYuksek": 0.008
    }
  },
];

export const bolgeSektorSayisi = bolgeSektorSayfalari.filter((s) => !s.indexDisi).length;
