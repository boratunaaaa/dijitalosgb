/**
 * Blog yazıları.
 *
 * NEDEN BURADA: Yazılar Markdown dosyası yerine veri olarak duruyor; böylece
 * içindeki mevzuat sayıları `~/data/mevzuat.ts` ile aynı kaynaktan gelmese
 * bile en azından tek dosyada toplanıyor ve bir yönetmelik değiştiğinde
 * hepsini tek yerde gözden geçirmek mümkün oluyor.
 *
 * YAZIM KURALI:
 *  - Konular, işverenin arama motoruna gerçekten yazdığı sorulardan seçildi.
 *  - Her yazı bir soruya cevap verir ve cevabı ilk paragrafta söyler; okuyucu
 *    aradığını bulmak için sonuna kadar inmek zorunda kalmaz.
 *  - Değişken tutarlar (idari para cezası gibi) yazılmaz; nereden
 *    öğrenileceği söylenir.
 *  - Uydurma istatistik, uydurma vaka ve "sektörde %90" türü doğrulanamaz
 *    cümle kullanılmaz.
 */

export type BlogYazisi = {
  slug: string;
  baslik: string;
  ozet: string;
  /** Yayın tarihi (ISO). Sıralama ve schema için. */
  tarih: string;
  kategori: 'mevzuat' | 'uygulama' | 'sektorel';
  /** Yaklaşık okuma süresi, dakika. */
  sure: number;
  /** Gövde: her eleman ya paragraf ya alt başlık ya liste. */
  govde: Array<
    | { tip: 'p'; metin: string }
    | { tip: 'h2'; metin: string }
    | { tip: 'liste'; maddeler: string[] }
    | { tip: 'not'; metin: string }
  >;
  /** İlgili iç sayfalar. */
  baglantilar?: { metin: string; href: string }[];
};

export const yazilar: BlogYazisi[] = [
  {
    slug: 'acil-durum-eylem-plani-nasil-hazirlanir-isveren-rehberi',
    baslik: 'Acil Durum Eylem Planı Nasıl Hazırlanır? İşverenler İçin 5 Adım',
    ozet:
      'Özet: İşyerlerinde Acil Durumlar Hakkında Yönetmelik gereğince, her işletmenin tehlike sınıfına bakılmaksızın yangın, deprem ve tahliye senaryolarını içeren bir acil durum planı hazırlaması zorunludur.',
    tarih: '2026-09-20',
    kategori: 'mevzuat',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'Kısaca: Sadece kâğıt üzerinde kalan bir plan, olası bir yangında veya depremde hayat kurtarmaz. İşyerlerinde Acil Durumlar Hakkında Yönetmelik madde 7 uyarınca, acil durum planı 5 temel aşamadan oluşur: Belirleme, önleyici tedbirler, görevlendirme, müdahale planı ve tatbikat.',
      },
      { tip: 'h2', metin: '1. Acil Durumların Belirlenmesi' },
      {
        tip: 'p',
        metin:
          'İşyerinin konumu, kullanılan kimyasallar ve binanın yaşı göz önüne alınarak yangın, deprem, sel, kimyasal sızıntı veya sabotaj gibi riskler belirlenir.',
      },
      { tip: 'h2', metin: '2. Acil Durum Ekiplerinin Kurulması' },
      {
        tip: 'p',
        metin:
          'Çok tehlikeli sınıfta her 30 çalışana 1, tehlikeli sınıfta 40 çalışana 1, az tehlikeli sınıfta ise 50 çalışana 1 "Arama, Kurtarma, Tahliye ve Yangınla Mücadele" personeli görevlendirilmesi yasal zorunluluktur.',
      },
      { tip: 'h2', metin: '3. Tatbikatların Gerçekleştirilmesi' },
      {
        tip: 'not',
        metin:
          'Uygulama Notu: Hazırlanan acil durum planı, yılda en az 1 defa tüm çalışanların katılımıyla fiili olarak tatbik edilmeli ve raporlanmalıdır. Denetimlerde sadece plana değil, en son yapılan tatbikatın fotoğraflı raporuna da bakılır.',
      },
    ],
    baglantilar: [
      { metin: 'Acil Durum Eylem Planı Hizmeti', href: '/hizmetler/acil-durum-eylem-plani/' },
      { metin: 'İş Güvenliği Uzmanlığı', href: '/hizmetler/is-guvenligi-uzmanligi/' },
    ],
  },
  {
    slug: 'ofislerde-is-guvenligi-masa-basi-calisan-tehlikeleri',
    baslik: 'Ofislerde İş Güvenliği: Masa Başı Çalışanları Bekleyen 3 Gizli Tehlike',
    ozet:
      'Özet: Ofis ortamları "az tehlikeli" sınıfta yer alsa da; ergonomik riskler, kapalı alan hava kalitesi ve elektrik tesisatı sorunları nedeniyle ciddi meslek hastalıkları ve iş kazalarına zemin hazırlayabilir.',
    tarih: '2026-09-20',
    kategori: 'sektorel',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'Kısaca: Plazalarda veya ofislerde çalışanlar için risk görünmezdir. Gürültülü makineler veya ağır yükler yoktur ancak ergonomik hasarlar yavaş ve kalıcıdır. Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, ofis ortamlarını sıkı kurallara bağlar.',
      },
      { tip: 'h2', metin: 'En Sık Karşılaşılan Ofis Riskleri' },
      {
        tip: 'liste',
        maddeler: [
          'Ergonomik Sorunlar: Yanlış koltuk seçimi ve monitör yüksekliği nedeniyle oluşan boyun fıtığı ve karpal tünel sendromu.',
          'Kablo Karmaşası: Yerde dağınık duran uzatma kabloları nedeniyle takılma ve düşmeler.',
          'İklimlendirme ve Hava Kalitesi: Düzenli bakımı yapılmayan klimalardan yayılan Lejyoner hastalığı riski.',
        ],
      },
      {
        tip: 'not',
        metin:
          'Saha Tecrübesi: Geçtiğimiz yıl az tehlikeli bir çağrı merkezinde yaptığımız risk değerlendirmesinde, personelin %40\'ının ekran yansıması (parlama) nedeniyle kronik baş ağrısı çektiğini tespit ettik. Sadece perdelerin değiştirilmesiyle bile performans artışı sağlandı.',
      },
    ],
    baglantilar: [
      { metin: 'Risk Değerlendirmesi', href: '/hizmetler/risk-degerlendirmesi/' },
      { metin: 'Ofislerde İSG Çözümleri', href: '/hizmetler/sektorler/ofis/' },
    ],
  },
  {
    slug: 'bakanlik-denetimlerinde-en-cok-kesilen-isg-cezalari',
    baslik: 'Bakanlık İSG Denetimlerinde En Çok Kesilen Cezalar ve Nedenleri',
    ozet:
      'İş Müfettişleri tarafından yapılan saha denetimlerinde en sık kesilen idari para cezalarının başında; onaylı defter eksikliği, yapılmamış periyodik kontroller ve mesleki yeterlilik belgesi olmayan çalışanlar geliyor.',
    tarih: '2026-09-20',
    kategori: 'uygulama',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'Kısaca: 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında Çalışma ve Sosyal Güvenlik Bakanlığı müfettişlerince yapılan denetimlerde, işverenin en çok ceza yediği konular evrak eksikliğinden çok, sahaya yansımayan kâğıt üzerindeki uygulamalardır.',
      },
      { tip: 'h2', metin: '1. Onaylı Defterin Doldurulmaması' },
      {
        tip: 'p',
        metin:
          '6331 sayılı Kanun Madde 8 uyarınca iş güvenliği uzmanı ve işyeri hekimi tespitlerini Onaylı Deftere yazar. Saha tecrübelerimizde görüyoruz ki; defterin işyerinde bulunmaması veya boş olması denetimde "işverenin İSG hizmeti almadığı" yönünde kanaat oluşturuyor. Uzmanın yazdığı tespitlerin altına işverenin "görüldü" imzası atması, kusurun sorumluluğunu değil, önlem alma niyetini gösterir.',
      },
      { tip: 'h2', metin: '2. Periyodik Kontrolü Geçmiş Ekipmanlar' },
      {
        tip: 'p',
        metin:
          'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği gereği kompresör, forklift ve vinç gibi ekipmanların kontrolü şarttır. Denetimlerde en sık karşılaştığımız manzara; firmanın raporu yaptırmış olması ancak geçerlilik süresinin (genelde 1 yıl) dolmuş olmasıdır. Rapor süresi geçmiş ekipman, hiç kontrol edilmemiş sayılır.',
      },
      { tip: 'h2', metin: '3. Mesleki Yeterlilik (MYK) Belgesi Eksikliği' },
      {
        tip: 'p',
        metin:
          'Tehlikeli ve çok tehlikeli işlerde çalışan personelin (örneğin kaynakçı, çelik kondisyoncu) MYK belgesi yoksa, kişi başı ağır idari para cezaları kesilir. İSG Temel Eğitimi almış olmak, MYK belgesi yerine kesinlikle geçmez.',
      },
      {
        tip: 'not',
        metin:
          'Gerçek Saha Tecrübesi: Geçtiğimiz ay girdiğimiz bir denetimde, risk analizi ve acil durum planı kusursuz olan bir işletme, sadece forklift operatörünün belgesi yenilenmediği için ceza aldı. İSG bir dosya değil, sürekli takip işidir.',
      },
    ],
    baglantilar: [
      { metin: 'Risk değerlendirmesi hizmeti', href: '/hizmetler/risk-degerlendirmesi/' },
      { metin: 'Periyodik kontroller', href: '/hizmetler/periyodik-kontroller/' },
    ],
  },

  {
    slug: 'is-kazasi-sonrasi-isverenin-hukuki-sorumluluklari',
    baslik: 'İş Kazası Sonrası İşverenin Hukuki Sorumlulukları Nelerdir?',
    ozet:
      'Özet: İş kazası sonrasında işverenin SGK\'ya 3 iş günü içinde bildirim yapması zorunludur. Ayrıca işverenin kusur oranı; risk analizi, eğitim tutanakları ve KKD zimmet formlarının eksiksiz olmasına göre belirlenir.',
    tarih: '2026-09-20',
    kategori: 'mevzuat',
    sure: 6,
    govde: [
      {
        tip: 'p',
        metin:
          'Kısaca: İş kazası yaşandığında işverenin sorumluluğu sadece sağlık ekiplerini çağırmakla bitmez. Olayın Sosyal Güvenlik Kurumu\'na (SGK) bildirilmesinden, kazanın kök nedeninin araştırılıp risk değerlendirmesinin güncellenmesine kadar hukuki bir süreç başlar.',
      },
      { tip: 'h2', metin: '3 İş Günü Kuralı' },
      {
        tip: 'p',
        metin:
          '5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu Madde 13 gereğince, bir kaza iş kazası sayıldığı andan itibaren işveren kolluk kuvvetlerine derhal, SGK’ya ise en geç kazadan sonraki 3 iş günü içinde bildirim yapmak zorundadır.',
      },
      { tip: 'h2', metin: 'Müfettişin İlk Baktığı 3 Belge' },
      {
        tip: 'liste',
        maddeler: [
          'Kazaya neden olan risk, "Risk Değerlendirmesi" raporunda öngörülmüş mü?',
          'Kazazedeye o makine/iş ile ilgili özel bir "İSG Eğitimi" verilmiş mi?',
          'Olayda koruyucu donanım eksikliği varsa, çalışana KKD (Kişisel Koruyucu Donanım) zimmet tutanağı imzalatılmış mı?',
        ],
      },
      { tip: 'h2', metin: 'Kusur Oranı Nasıl Düşer?' },
      {
        tip: 'p',
        metin:
          'Yargıtay kararlarına göre işverenin sorumluluğu "kusursuz sorumluluk" değil, "kusur oranına göre sorumluluk"tur. Eğer işveren mevzuatın gerektirdiği her türlü makine koruyucusunu taktırmış, eğitimi vermiş ve denetim mekanizmasını işletmişse kusur oranı çalışana (veya kaçınılmazlık ilkesine) kayabilir.',
      },
      {
        tip: 'not',
        metin:
          'Olay yeri incelemesi tamamlanmadan kazaya sebep olan makinede veya ortamda değişiklik yapmayın. Bu, delil karartma şüphesi doğurabilir.',
      },
    ],
    baglantilar: [
      { metin: 'İş Güvenliği Uzmanlığı Hizmeti', href: '/hizmetler/is-guvenligi-uzmanligi/' },
      { metin: 'Acil Durum Eylem Planı', href: '/hizmetler/acil-durum-eylem-plani/' },
    ],
  },
  {
    slug: 'isg-egitim-yonetmeligi-2026-degisiklikleri',
    baslik: 'İSG Eğitim Yönetmeliği 2026’da Değişti: İşvereni Ne Bekliyor?',
    ozet:
      'Çalışanların İSG eğitimleri 2 Nisan 2026’da yeniden düzenlendi ve önceki yönetmelik tamamen yürürlükten kaldırıldı. Süreler aynı kaldı, ama planlama ve belgelendirme değişti.',
    tarih: '2026-09-19',
    kategori: 'mevzuat',
    sure: 6,
    govde: [
      {
        tip: 'p',
        metin:
          'Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik, 2 Nisan 2026 tarihli ve 33212 sayılı Resmî Gazete’de yayımlandı. Bu bir değişiklik tebliği değil: 2013’ten beri yürürlükte olan yönetmeliğin yerine geçen yeni bir metin. Eğitim sürelerinde bir değişiklik yok, ama eğitimin nasıl planlanacağı, hangi bölümünün yüz yüze verileceği ve nasıl belgeleneceği yeniden yazıldı.',
      },
      { tip: 'h2', metin: 'Süreler aynı kaldı' },
      {
        tip: 'p',
        metin:
          'Temel iş sağlığı ve güvenliği eğitiminin toplam süresi değişmedi: az tehlikeli işyerlerinde en az 8, tehlikeli işyerlerinde 12, çok tehlikeli işyerlerinde 16 ders saati. Eğitimin yenilenme aralıkları da aynı: çok tehlikelide yılda bir, tehlikelide iki yılda bir, az tehlikelide üç yılda bir.',
      },
      { tip: 'h2', metin: 'İşe başlama eğitimi ayrı bir yükümlülük oldu' },
      {
        tip: 'p',
        metin:
          'En çok gözden kaçan değişiklik bu. Çalışan işe başlarken verilen eğitim, temel eğitimden ayrı tutuldu ve asgari iki saat olarak belirlendi. Üstelik bu süre temel eğitim süresinden sayılmıyor; yani çok tehlikeli bir işyerinde yeni bir çalışan için iki saatlik işe başlama eğitimi ve ayrıca on altı ders saatlik temel eğitim gerekiyor.',
      },
      { tip: 'h2', metin: 'Temel eğitim için üç aylık süre' },
      {
        tip: 'p',
        metin:
          'Temel eğitimin, çalışanın işe girişinden itibaren en geç üç ay içinde tamamlanması gerekiyor. Bu, eğitimi erteleme izni değil; planlama için tanınmış bir süre. Üç ay dolduğunda eğitimi tamamlanmamış çalışan, eğitimi hiç verilmemiş sayılır.',
      },
      { tip: 'h2', metin: 'Ders saatinin resmî tanımı geldi' },
      {
        tip: 'p',
        metin:
          'Yönetmelik ilk kez bir ders saatinin ne olduğunu tanımlıyor: 45 dakika eğitim ve ardından 15 dakika ara, toplam 60 dakika. Bu tanım, “16 saatlik eğitimi bir günde bitirdik” diyen uygulamaları da doğrudan ilgilendiriyor.',
      },
      { tip: 'h2', metin: 'Dördüncü başlık için asgari süre belirlendi' },
      {
        tip: 'p',
        metin:
          'Ek-1’deki eğitim konularının dördüncüsü, işe ve işyerine özgü riskleri kapsıyor. Yeni yönetmelik bu başlık için asgari süre getirdi: az tehlikeli işyerlerinde 2, tehlikeli işyerlerinde 3, çok tehlikeli işyerlerinde 4 ders saati. Yani toplam süreyi tutturmak yetmiyor; bu başlığa ayrılan sürenin de altına düşülemiyor.',
      },
      { tip: 'h2', metin: 'Uzaktan eğitimde ölçme zorunlu' },
      {
        tip: 'p',
        metin:
          'Eğitimler uzaktan, yüz yüze veya ikisi bir arada verilebiliyor. Genel, sağlık ve teknik konular her tehlike sınıfında uzaktan verilebiliyor. İşe ve işyerine özgü riskler başlığı ise tehlikeli ve çok tehlikeli işyerlerinde yüz yüze verilmek zorunda. Uzaktan verilen eğitimde katılım kaydı tutuluyor ve ölçme değerlendirmeden en az 60 puan alınması gerekiyor.',
      },
      { tip: 'h2', metin: 'Belgede ne yazacak?' },
      {
        tip: 'liste',
        maddeler: [
          'Eğitimin türü: işe başlama, temel veya yenileme',
          'Veriliş yöntemi: uzaktan, yüz yüze veya karma',
          'Konu başlığı başına ayrılan ders saati',
          'Uzaktan eğitimde katılım ve ölçme değerlendirme kayıtları',
        ],
      },
      {
        tip: 'not',
        metin:
          'Elinizdeki eğitim kayıtları eski yönetmeliğe göre düzenlendiyse, bu başlıkların bir kısmı belgelerde yer almıyor olabilir. Denetimde sorulan şey eğitimin verilip verilmediği değil, verildiğinin nasıl belgelendiğidir.',
      },
    ],
    baglantilar: [
      { metin: 'İSG eğitimi hizmetimiz', href: '/isg-egitimi/' },
      { metin: 'Eğitim süresi hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },
    ],
  },

  {
    slug: 'tehlike-sinifi-nasil-belirlenir',
    baslik: 'Tehlike Sınıfı Nasıl Belirlenir? NACE Kodu ve İtiraz Yolu',
    ozet:
      'Tehlike sınıfını işveren seçmez; işyerinin NACE kodu belirler. Yükümlülüklerin neredeyse tamamı bu sınıfa bağlı olduğu için ilk netleşmesi gereken şey budur.',
    tarih: '2026-09-19',
    kategori: 'mevzuat',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'İş sağlığı ve güvenliğinde kaç saat uzman geleceği, çalışanların kaç saat eğitim alacağı, risk değerlendirmesinin kaç yılda bir yenileneceği ve hatta hangi belge sınıfına sahip uzmanın görev yapabileceği tek bir şeye bağlı: işyerinin tehlike sınıfı. Bu yüzden ilk netleşmesi gereken bilgi budur.',
      },
      { tip: 'h2', metin: 'Sınıfı NACE kodu belirler' },
      {
        tip: 'p',
        metin:
          'Tehlike sınıfı, işyerinin faaliyet koduna göre belirlenir. Kodlar ve karşılık gelen sınıflar, İşyeri Tehlike Sınıfları Tebliği’nin ekindeki listede yer alır. İşyerinizin kodu SGK tescil kaydınızda bulunur; bağlayıcı olan da bu kayıttır.',
      },
      { tip: 'h2', metin: 'Birden fazla iş yapıyorsanız' },
      {
        tip: 'p',
        metin:
          'Tehlike sınıfı, işyerinde yürütülen asıl işe göre belirlenir. Asıl iş tanımına uyan birden fazla faaliyet varsa, bunlardan tehlike sınıfı yüksek olan esas alınır. Asıl işin tayininde tereddüt varsa işyerinin kuruluş amacına bakılır. Pratikte en sık karşılaşılan durum şudur: ofis faaliyetinin yanında küçük bir atölye işletmek, işyerini tamamen farklı bir sınıfa taşıyabilir.',
      },
      { tip: 'h2', metin: 'Faaliyetiniz değiştiyse bildirin' },
      {
        tip: 'p',
        metin:
          'Asıl iş faaliyetinde değişiklik olduğunda, bunun en geç bir ay içinde Çalışma ve Sosyal Güvenlik Bakanlığına bildirilmesi gerekir. Bildirilmeyen değişiklik, işyerinin kâğıt üzerinde yanlış sınıfta görünmesine ve alınan hizmetin yetersiz kalmasına yol açar.',
      },
      { tip: 'h2', metin: 'Sınıfa itiraz edebilirsiniz' },
      {
        tip: 'p',
        metin:
          'Tehlike sınıfına yapılan itirazlar Bakanlıkça değerlendirilir. Değerlendirme, Bakanlık tescil kayıtları ve tescile esas alınan asıl iş üzerinden yapılır. İtiraz sonucunda sınıf değişirse, yeni sınıfın gerektirdiği iş ve işlemlerin 90 gün içinde yerine getirilmesi ve İş Sağlığı ve Güvenliği Genel Müdürlüğüne bildirilmesi gerekir.',
      },
      {
        tip: 'not',
        metin:
          'Sitemizdeki tehlike sınıfı sorgulama aracına NACE kodunuzu ya da yaptığınız işi yazarak sınıfınızı görebilirsiniz. Araçtaki liste, Tebliğ ekindeki resmî listeden alınmıştır; yine de bağlayıcı olan tescil kaydınızdır.',
      },
    ],
    baglantilar: [
      { metin: 'Tehlike sınıfı sorgulama aracı', href: '/araclar/tehlike-sinifi-sorgulama/' },
      { metin: 'Yükümlülük hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },
      { metin: 'İş Güvenliği Uzmanlığı Hizmeti', href: '/hizmetler/is-guvenligi-uzmanligi/' },
    ],
  },

  {
    slug: 'is-guvenligi-uzmani-kac-saat-gelmeli',
    baslik: 'İş Güvenliği Uzmanı Ayda Kaç Saat Gelmeli?',
    ozet:
      'Süre pazarlıkla değil, yönetmelikle belirlenir: çalışan başına ayda 10, 20 veya 40 dakika. Tekliflerin arasındaki fark çoğu zaman buradan çıkar.',
    tarih: '2026-09-19',
    kategori: 'mevzuat',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İş güvenliği uzmanının işyerinde geçirmesi gereken süre, çalışan sayısı ile tehlike sınıfının çarpımıdır. Yönetmelik asgari süreyi belirler: az tehlikeli sınıfta çalışan başına ayda en az 10 dakika, tehlikeli sınıfta 20 dakika, çok tehlikeli sınıfta 40 dakika.',
      },
      { tip: 'h2', metin: 'Örnekle' },
      {
        tip: 'liste',
        maddeler: [
          'Az tehlikeli, 20 çalışan: ayda en az 200 dakika, yani 3 saat 20 dakika.',
          'Tehlikeli, 50 çalışan: ayda en az 1000 dakika, yani 16 saat 40 dakika.',
          'Çok tehlikeli, 30 çalışan: ayda en az 1200 dakika, yani 20 saat.',
        ],
      },
      { tip: 'h2', metin: 'İşyeri hekimi için süreler farklı' },
      {
        tip: 'p',
        metin:
          'İşyeri hekimi için asgari süre, çalışan başına ayda 5 dakika (az tehlikeli), 10 dakika (tehlikeli) ve 15 dakikadır (çok tehlikeli). Uzman ve hekim ayrı yükümlülüklerdir; biri diğerinin yerine geçmez.',
      },
      { tip: 'h2', metin: 'Belge sınıfı da sınıfa bağlı' },
      {
        tip: 'p',
        metin:
          'C sınıfı belgeye sahip uzman az tehlikeli, B sınıfı az ve tehlikeli, A sınıfı ise bütün tehlike sınıflarındaki işyerlerinde görev yapabilir. Çok tehlikeli sınıftaki bir işyerinde yalnızca A sınıfı uzman görevlendirilebilir. Teklif alırken görevlendirilecek uzmanın belge sınıfını sormak, sonradan çıkan sorunların önüne geçer.',
      },
      { tip: 'h2', metin: 'Bin çalışan eşiği' },
      {
        tip: 'p',
        metin:
          'Her 1000 çalışan için tam gün çalışacak en az bir iş güvenliği uzmanı görevlendirilir. Çalışan sayısı 1000’in tam katlarını aşıyorsa, artan kısım için tehlike sınıfına göre hesaplanan sürede ek görevlendirme yapılır.',
      },
      {
        tip: 'not',
        metin:
          'Aynı başlıkları sayan iki teklif arasındaki fark genellikle sürenin nasıl hesaplandığından doğar. Teklifte kaç saat uzman ve kaç saat hekim yazdığını görmek, karşılaştırmayı tek kalemde mümkün kılar.',
      },
    ],
    baglantilar: [
      { metin: 'Yükümlülük hesaplama aracı', href: '/araclar/isg-yukumluluk-hesaplama/' },
      { metin: 'İş güvenliği uzmanlığı hizmeti', href: '/hizmetler/is-guvenligi-uzmanligi/' },
    ],
  },

  {
    slug: 'risk-degerlendirmesi-kim-yapar',
    baslik: 'Risk Değerlendirmesini Kim Yapar? Hazır Dosya Neden İşe Yaramaz?',
    ozet:
      'Risk değerlendirmesi dışarıdan satın alınan bir dosya değil, işverenin liderliğinde yürütülen bir süreçtir. Şablon dosya denetimde de kazada da işverenin yanında durmaz.',
    tarih: '2026-09-19',
    kategori: 'uygulama',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'Risk değerlendirmesi, 6331 sayılı Kanun kapsamındaki her işyeri için zorunludur ve istisnası yoktur. En sık yapılan hata, bunu bir evrak işi sanmaktır: dosya hazırlanır, klasöre konur, denetime kadar açılmaz. Oysa mevzuatın tarif ettiği şey bir dosya değil, bir süreçtir.',
      },
      { tip: 'h2', metin: 'Ekip kimlerden oluşur?' },
      {
        tip: 'p',
        metin:
          'Risk değerlendirmesi, işverenin liderliğinde kurulan bir ekip tarafından yapılır. Ekipte işveren veya işveren vekili, iş güvenliği uzmanı ve işyeri hekimi, çalışan temsilcileri ve varsa destek elemanları yer alır. Dışarıdan alınan hizmet bu ekibe teknik destek sağlar; sürecin sahibi işverendir.',
      },
      { tip: 'h2', metin: 'Neden hazır dosya olmaz?' },
      {
        tip: 'p',
        metin:
          'Risk değerlendirmesi işyerine özgüdür. Sizin makineniz, yerleşiminiz, çalışma şekliniz ve kullandığınız malzeme neyse onu esas alır. Başka bir işyeri için hazırlanmış şablonda sizin presiniz, sizin merdiveniniz, sizin kimyasalınız yoktur. Bir iş kazası sonrasında bakılan ilk şey, o kazaya yol açan tehlikenin risk değerlendirmesinde yer alıp almadığıdır.',
      },
      { tip: 'h2', metin: 'Belirli bir yöntem zorunlu mu?' },
      {
        tip: 'p',
        metin:
          'Hayır. Mevzuat belirli bir yöntem şart koşmaz; işyerinin niteliğine uygun, kabul görmüş yöntemlerden biri seçilebilir. Önemli olan yöntemin adı değil, tehlikelerin eksiksiz tespit edilmesi ve önlemlerin sorumlusu ve tarihi belli bir takvime bağlanmasıdır.',
      },
      { tip: 'h2', metin: 'Ne zaman yenilenir?' },
      {
        tip: 'liste',
        maddeler: [
          'Az tehlikeli işyerlerinde en geç altı yılda bir',
          'Tehlikeli işyerlerinde en geç dört yılda bir',
          'Çok tehlikeli işyerlerinde en geç iki yılda bir',
          'Taşınma, yeni ekipman, üretim değişikliği, iş kazası veya meslek hastalığı hâlinde süre beklenmeden',
        ],
      },
      { tip: 'h2', metin: 'Alt yükleniciniz varsa' },
      {
        tip: 'p',
        metin:
          'Her işveren kendi çalışanları ve kendi yaptığı iş için risk değerlendirmesi yapar. Aynı çalışma alanında birden fazla işveren varsa koordinasyon asıl işveren tarafından sağlanır. Şantiyelerde en çok atlanan nokta budur: herkesin dosyası vardır ama kimse diğerinin işini görmemiştir.',
      },
    ],
    baglantilar: [
      { metin: 'Risk değerlendirmesi hizmetimiz', href: '/hizmetler/risk-degerlendirmesi/' },
      { metin: 'Acil Durum Eylem Planı', href: '/hizmetler/acil-durum-eylem-plani/' },
      { metin: 'Sık sorulan sorular', href: '/sss/' },
    ],
  },

  {
    slug: 'ise-giris-muayenesi-ve-periyodik-muayene',
    baslik: 'İşe Giriş Muayenesi ve Periyodik Muayene: Kim, Ne Zaman, Hangi Tetkik?',
    ozet:
      'Sağlık gözetimi, İSG yükümlülüklerinin en çok atlanan kalemi. Oysa denetimde ilk istenen belgeler arasında ve bir kaza sonrası doğrudan işverenin aleyhine sonuç doğuruyor.',
    tarih: '2026-09-19',
    kategori: 'uygulama',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'Her çalışan için iki ayrı muayene yükümlülüğü vardır: işe girişte yapılan muayene ve çalışma süresince belirli aralıklarla tekrarlanan periyodik muayene. İkisi birbirinin yerine geçmez.',
      },
      { tip: 'h2', metin: 'İşe giriş muayenesi' },
      {
        tip: 'p',
        metin:
          'Çalışan işe başlamadan önce sağlık muayenesinden geçirilir ve yapacağı işe uygun olduğu rapora bağlanır. Raporu işyeri hekimi düzenler. Buradaki kritik nokta şudur: rapor, çalışanın genel olarak sağlıklı olduğunu değil, o işe uygun olduğunu söyler. Yüksekte çalışacak bir kişinin denge sorunu, gürültülü ortamda çalışacak birinin mevcut işitme kaybı bu aşamada ortaya çıkar.',
      },
      { tip: 'h2', metin: 'Periyodik muayene aralıkları' },
      {
        tip: 'liste',
        maddeler: [
          'Az tehlikeli işyerlerinde en geç beş yılda bir',
          'Tehlikeli işyerlerinde en geç üç yılda bir',
          'Çok tehlikeli işyerlerinde yılda bir',
        ],
      },
      {
        tip: 'p',
        metin:
          'İşyeri hekimi, işin niteliğine ve maruziyete bakarak bu aralıkları kısaltabilir. Örneğin belirli kimyasallara maruz kalan bir grupta takip daha sık yapılır.',
      },
      { tip: 'h2', metin: 'Hangi tetkik kime?' },
      {
        tip: 'p',
        metin:
          'Tetkikler işin niteliğine göre belirlenir. Gürültülü ortamda çalışanlarda odyometri, tozlu ortamda akciğer grafisi ve solunum fonksiyon testi, belirli kimyasallara maruz kalanlarda ilgili kan ve idrar tetkikleri istenir. Ekranlı araçla çalışanlarda göz muayenesi gündeme gelir. Hangi tetkikin gerektiğine işyeri hekimi karar verir; standart bir paket yoktur.',
      },
      { tip: 'h2', metin: 'Sonuç uygun çıkmazsa' },
      {
        tip: 'p',
        metin:
          'İşyeri hekimi durumu rapora bağlar. Çalışan, sağlık durumuna uygun olmayan işte çalıştırılamaz; mümkünse işyerinde durumuna uygun başka bir görevde değerlendirilir.',
      },
      {
        tip: 'not',
        metin:
          'Muayeneler ve tetkikler mobil sağlık aracıyla işyerinizde yapılabilir. Çalışanların tek tek sağlık kuruluşuna gitmesi gerekmediği için hem zaman hem üretim kaybı ortadan kalkar.',
      },
    ],
    baglantilar: [
      { metin: 'Mobil sağlık taraması', href: '/mobil-saglik-taramasi/' },
      { metin: 'İşyeri hekimliği hizmeti', href: '/hizmetler/isyeri-hekimligi/' },
    ],
  },

  {
    slug: 'isg-katip-nedir',
    baslik: 'İSG-KATİP Nedir? Görevlendirme Neden Sistemde Görünmeli?',
    ozet:
      'Kâğıt üzerinde yapılmış bir görevlendirme, İSG-KATİP’te görünmüyorsa geçerli sayılmaz. Denetimde ilk bakılan kayıtlardan biridir.',
    tarih: '2026-09-19',
    kategori: 'uygulama',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İSG-KATİP, iş sağlığı ve güvenliği profesyonellerinin görevlendirmelerinin kayıt altına alındığı, Çalışma ve Sosyal Güvenlik Bakanlığına ait sistemdir. İş güvenliği uzmanı ve işyeri hekimi görevlendirmeleri bu sistem üzerinden sözleşmeyle kayda geçer.',
      },
      { tip: 'h2', metin: 'Neden bu kadar önemli?' },
      {
        tip: 'p',
        metin:
          'Bir uzmanla anlaşmış, sözleşme imzalamış ve ücretini ödemiş olabilirsiniz; görevlendirme sistemde görünmüyorsa yükümlülüğünüzü yerine getirmiş sayılmazsınız. Denetimde ilk bakılan kayıtlardan biri budur ve eksikliği doğrudan tespit doğurur.',
      },
      { tip: 'h2', metin: 'Neye dikkat etmeli?' },
      {
        tip: 'liste',
        maddeler: [
          'Sözleşmenin başlangıç tarihi ile hizmetin fiilen başladığı tarih aynı olmalı.',
          'Görevlendirilen uzmanın belge sınıfı, işyerinin tehlike sınıfına uygun olmalı.',
          'Sözleşme sona erdiğinde veya uzman değiştiğinde kayıt güncellenmeli.',
          'Birden fazla işyeriniz varsa her SGK sicil numarası için ayrı görevlendirme gerekir.',
        ],
      },
      { tip: 'h2', metin: 'Periyodik kontrol raporlarıyla ilişkisi' },
      {
        tip: 'p',
        metin:
          'İş ekipmanlarının periyodik kontrollerinde de benzer bir kural işler: kontrolü yapan kişinin yetkisi ve kaydı olmadan düzenlenen rapor geçerli sayılmaz. Raporun varlığı kadar kimin düzenlediği de önemlidir.',
      },
    ],
    baglantilar: [
      { metin: 'İş güvenliği uzmanlığı', href: '/hizmetler/is-guvenligi-uzmanligi/' },
      { metin: 'Periyodik kontroller', href: '/hizmetler/periyodik-kontroller/' },
    ],
  },

  {
    slug: 'is-kazasi-bildirimi-ve-sonrasi',
    baslik: 'İş Kazası Olduğunda: Bildirim Süresi ve Sonrasında Yapılacaklar',
    ozet:
      'İş kazası kazadan sonraki üç iş günü içinde SGK’ya bildirilir. Bildirim tek başına yeterli değil; risk değerlendirmesi ve eğitim kayıtları da devreye girer.',
    tarih: '2026-09-19',
    kategori: 'uygulama',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İş kazası, kazadan sonraki üç iş günü içinde Sosyal Güvenlik Kurumuna bildirilir. Meslek hastalığında süre, hastalığın öğrenildiği tarihten itibaren üç iş günüdür. Bu süreler kesindir ve gecikme ayrı bir aykırılık oluşturur.',
      },
      { tip: 'h2', metin: 'Bildirimden sonra ne olur?' },
      {
        tip: 'p',
        metin:
          'Kaza sonrası incelemede bakılan ilk şey, kazaya yol açan tehlikenin risk değerlendirmesinde yer alıp almadığıdır. Yer alıyorsa, öngörülen önlemin alınıp alınmadığına bakılır. Yer almıyorsa, risk değerlendirmesinin yeterliliği tartışmaya açılır.',
      },
      { tip: 'h2', metin: 'Hangi kayıtlar istenir?' },
      {
        tip: 'liste',
        maddeler: [
          'Risk değerlendirmesi ve kazaya ilişkin bölümü',
          'Kazazedenin eğitim kayıtları ve işe giriş sağlık raporu',
          'Kullanılan ekipmanın periyodik kontrol raporu',
          'Kişisel koruyucu donanım teslim tutanakları',
          'Onaylı defterdeki tespit ve uyarılar',
        ],
      },
      { tip: 'h2', metin: 'Risk değerlendirmesi yenilenir' },
      {
        tip: 'p',
        metin:
          'İş kazası veya meslek hastalığı yaşanması hâlinde, risk değerlendirmesi yenileme süresi beklenmeden gözden geçirilir. Aynı şekilde çalışanlara ilave eğitim verilmesi gerekir.',
      },
      {
        tip: 'not',
        metin:
          'Kaza sonrası en zor durum, belgelerin sonradan tamamlanmaya çalışılmasıdır. Tarihleri geriye dönük düzenlenmiş kayıtlar, incelemede işverenin durumunu iyileştirmez.',
      },
    ],
    baglantilar: [
      { metin: 'Risk değerlendirmesi', href: '/hizmetler/risk-degerlendirmesi/' },
      { metin: 'Acil durum eylem planı', href: '/hizmetler/acil-durum-eylem-plani/' },
    ],
  },

  {
    slug: 'acil-durum-eylem-plani-nasil-hazirlanir',
    baslik: 'Acil Durum Eylem Planı Nasıl Hazırlanır? Tatbikat Zorunlu mu?',
    ozet:
      'Acil durum planı, alarm çaldığında kimin ne yapacağını önceden yazmaktır. Tatbikat yapılmamışsa plan kâğıt üzerinde kalır.',
    tarih: '2026-09-18',
    kategori: 'uygulama',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'Acil durum eylem planı; yangın, patlama, deprem, sel ve ilk yardım gerektiren olaylara karşı önceden yapılmış bir hazırlıktır. Amacı basit: olay anında kimse ne yapacağını düşünmek zorunda kalmasın.',
      },
      { tip: 'h2', metin: 'Planda ne bulunur?' },
      {
        tip: 'liste',
        maddeler: [
          'İşyerinde olabilecek acil durumların listesi ve her biri için senaryo',
          'Önleme, koruma ve tahliye için alınan tedbirler',
          'Görevlendirilen ekipler: söndürme, kurtarma, koruma ve ilk yardım',
          'Tahliye planı, toplanma yeri ve kaçış yollarının krokisi',
          'Acil durumlarda aranacak kişi ve kurumların iletişim bilgileri',
        ],
      },
      { tip: 'h2', metin: 'Ekipler kimlerden oluşur?' },
      {
        tip: 'p',
        metin:
          'Ekiplerde görevlendirilecek çalışan sayısı, işyerinin tehlike sınıfına ve çalışan sayısına göre belirlenir. Görevlendirilen çalışanlara görevleriyle ilgili eğitim verilir. Buradaki en sık hata, ekibi kâğıt üzerinde kurup çalışana haber vermemektir.',
      },
      { tip: 'h2', metin: 'Tatbikat' },
      {
        tip: 'p',
        metin:
          'Tatbikatlar yılda en az bir defa yapılır ve kayıt altına alınır. Tatbikat, planın işleyip işlemediğini gösteren tek şeydir: tahliye süresi ölçülür, tıkanan noktalar görülür, plan buna göre güncellenir.',
      },
      { tip: 'h2', metin: 'Plan ne zaman yenilenir?' },
      {
        tip: 'p',
        metin:
          'Acil durum planı, tehlike sınıfına göre en geç altı, dört veya iki yılda bir yenilenir. İşyerinde yapılan değişiklikler veya yaşanan bir olay sonrasında süre beklenmeden gözden geçirilir.',
      },
    ],
    baglantilar: [
      { metin: 'Acil durum eylem planı hizmeti', href: '/hizmetler/acil-durum-eylem-plani/' },
      { metin: 'Risk değerlendirmesi', href: '/hizmetler/risk-degerlendirmesi/' },
    ],
  },
  {
    slug: 'periyodik-kontrol-sureleri',
    baslik: 'İş Ekipmanlarının Periyodik Kontrolü: Hangi Ekipman, Ne Sıklıkla?',
    ozet:
      'Vinç, kompresör, forklift, topraklama... Kontrol aralığı ekipmana göre değişir ve üretici daha kısa bir süre öngörmüşse üreticinin süresi geçerlidir.',
    tarih: '2026-09-18',
    kategori: 'uygulama',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'İş ekipmanları, kullanım sırasında oluşan tehlikelerin zamanında görülebilmesi için düzenli aralıklarla kontrol edilir. Bu bir formalite değildir: kaldırma aracının halatı, kompresörün emniyet ventili veya topraklama direnci ancak ölçülerek güvenli sayılabilir.',
      },
      { tip: 'h2', metin: 'Hangi ekipmanlar kapsamda?' },
      {
        tip: 'liste',
        maddeler: [
          'Kaldırma ve iletme ekipmanları: vinç, caraskal, forklift, asansör, platform, sapan ve zincirler',
          'Basınçlı kaplar ve tesisatlar: kompresör, hava tankı, kazan, hidrofor, emniyet ventilleri',
          'Elektrik tesisatı: topraklama, kaçak akım koruma, paratoner, pano ölçümleri',
          'Tezgâh ve makineler: koruyucu tertibat, acil stop ve güvenlik donanımı',
        ],
      },
      { tip: 'h2', metin: 'Aralık neye göre belirlenir?' },
      {
        tip: 'p',
        metin:
          'Kontrol aralıkları ekipman türü bazında mevzuatta tanımlanmıştır; aynı işyerindeki iki farklı ekipmanın aralığı farklı olabilir. Önemli bir kural şudur: üretici, kullanma kılavuzunda daha kısa bir süre öngörmüşse üreticinin süresi uygulanır.',
      },
      { tip: 'h2', metin: 'Kontrolü kim yapabilir?' },
      {
        tip: 'p',
        metin:
          'Periyodik kontroller, ekipmanın türüne göre mevzuatta belirlenmiş yetkili kişilerce yapılır. Kontrolü yapan kişinin yetkisi, düzenlenen raporun geçerliliğinin de şartıdır; yetkisiz kişinin düzenlediği rapor denetimde rapor sayılmaz.',
      },
      { tip: 'h2', metin: 'Rapor kaybolursa' },
      {
        tip: 'p',
        metin:
          'İbraz edilemeyen rapor, yapılmamış kontrol gibi değerlendirilir. Raporları ekipman bazında dosyalamak ve bir sonraki kontrol tarihini takvime bağlamak bu riski ortadan kaldırır.',
      },
    ],
    baglantilar: [{ metin: 'Periyodik kontroller hizmeti', href: '/hizmetler/periyodik-kontroller/' }],
  },
  {
    slug: 'is-hijyeni-olcumleri-ne-zaman-gerekir',
    baslik: 'İş Hijyeni Ölçümleri Ne Zaman Gerekir?',
    ozet:
      'Risk değerlendirmesinde "gürültü yüksek" demek yetmez. Maruziyetin sınır değerin altında olduğu ölçümle gösterilir; ölçümü de yalnız yetkili laboratuvarlar yapabilir.',
    tarih: '2026-09-18',
    kategori: 'uygulama',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İş hijyeni ölçümleri, işyeri ortamındaki fiziksel ve kimyasal etkenlerin çalışan üzerindeki maruziyetini sayıyla ortaya koyar. Bir tehlikeyi tespit etmek ilk adımdır; o tehlikenin kabul edilebilir düzeyde olup olmadığını söyleyen şey ölçümdür.',
      },
      { tip: 'h2', metin: 'Hangi etkenler ölçülür?' },
      {
        tip: 'liste',
        maddeler: [
          'Gürültü: kişisel maruziyet ve ortam gürültüsü',
          'Toz: solunabilir ve toplam toz',
          'Kimyasal maruziyet: uçucu organik bileşikler ve işyerine özgü kimyasallar',
          'Titreşim: el-kol ve bütün vücut',
          'Aydınlatma, sıcaklık, nem ve hava akımı',
        ],
      },
      { tip: 'h2', metin: 'Ölçümü kim yapabilir?' },
      {
        tip: 'p',
        metin:
          'İş hijyeni ölçüm, test ve analizleri yalnızca Çalışma ve Sosyal Güvenlik Bakanlığınca yetkilendirilmiş laboratuvarlarca yapılabilir. Bu, raporun geçerliliğinin şartıdır.',
      },
      { tip: 'h2', metin: 'Ne sıklıkla?' },
      {
        tip: 'p',
        metin:
          'Tek bir sıklık vermek mümkün değil: tehlike sınıfı, ölçülen etken ve risk değerlendirmesinin sonucu belirleyicidir. Şu kural her durumda geçerlidir: ortamda, süreçte veya ekipmanda değişiklik olduğunda ölçüm yenilenir.',
      },
      { tip: 'h2', metin: 'Sonuç sınır değeri aşarsa' },
      {
        tip: 'p',
        metin:
          'Önlem sıralaması uygulanır: önce kaynakta kontrol, sonra ortamda kontrol, en son kişisel koruyucu donanım. Kulaklık dağıtmak ilk çözüm değil, son halkadır. Alınan önlemin işe yarayıp yaramadığı yeni bir ölçümle gösterilir.',
      },
    ],
    baglantilar: [{ metin: 'İş hijyeni ölçümleri', href: '/hizmetler/is-hijyeni-olcumleri/' }],
  },
  {
    slug: 'patlamadan-korunma-dokumani-kimler-icin',
    baslik: 'Patlamadan Korunma Dokümanı Kimler İçin Zorunlu?',
    ozet:
      'Yanıcı gaz, buhar veya toz bulutu oluşabilen her işyerinde zorunlu. Boyahane, un ve yem tesisi, ahşap atölyesi ve akaryakıt istasyonu en sık örnekler.',
    tarih: '2026-09-18',
    kategori: 'mevzuat',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'Patlayıcı ortam oluşma ihtimali bulunan işyerlerinde işveren, patlama risklerini değerlendirip patlamadan korunma dokümanı hazırlamakla yükümlüdür. Bu, genel risk değerlendirmesinden ayrı ve ona ek bir yükümlülüktür.',
      },
      { tip: 'h2', metin: 'Hangi işyerlerinde gerekir?' },
      {
        tip: 'p',
        metin:
          'Yanıcı gaz, buhar, sis veya yanıcı toz bulutunun oluşabildiği her işyeri kapsamdadır. Uygulamada en sık karşılaşılanlar: boyahaneler, un ve yem tesisleri, ahşap işleme atölyeleri, akaryakıt ve LPG istasyonları, kimyasal depoları, tahıl siloları ve solvent kullanılan üretim hatları.',
      },
      { tip: 'h2', metin: 'Dokümanda ne bulunur?' },
      {
        tip: 'liste',
        maddeler: [
          'Yanıcı madde envanteri ve proses incelemesi',
          'Patlayıcı ortam oluşabilecek bölgelerin sınıflandırılması ve krokisi',
          'Tutuşma kaynaklarının belirlenmesi ve patlama riski değerlendirmesi',
          'Havalandırma, topraklama ve statik elektrik önlemleri',
          'Bölgeye uygun ekipman seçimi ve mevcut ekipmanın uygunluğu',
        ],
      },
      { tip: 'h2', metin: 'Şablonla hazırlanamaz' },
      {
        tip: 'p',
        metin:
          'Bölge sınıflandırması; yerinde inceleme ile proses bilgisinin ve güvenlik bilgi formlarının birlikte değerlendirilmesini gerektirir. Aynı ürünü üreten iki tesiste bile havalandırma ve yerleşim farklıysa bölgeler farklı çıkar.',
      },
    ],
    baglantilar: [
      { metin: 'Patlamadan korunma dokümanı', href: '/hizmetler/patlamadan-korunma-dokumani/' },
      { metin: 'Kimya ve boya sektörü', href: '/sektorler/kimya-boya/' },
    ],
  },
  {
    slug: 'kisisel-koruyucu-donanim-secimi',
    baslik: 'Kişisel Koruyucu Donanım: Son Halka, İlk Çözüm Değil',
    ozet:
      'KKD, önlem sıralamasının en sonundaki halkadır. Önce tehlikeyi kaynağında yok etmek, sonra ortamda kontrol etmek, en son kişiyi korumak gerekir.',
    tarih: '2026-09-17',
    kategori: 'uygulama',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'Kişisel koruyucu donanım, çalışanı bir veya birden fazla tehlikeye karşı koruyan donanımdır. Önemi tartışılmaz; ancak mevzuatın kurduğu mantıkta KKD, alınacak önlemlerin sonuncusudur.',
      },
      { tip: 'h2', metin: 'Önlem sıralaması' },
      {
        tip: 'liste',
        maddeler: [
          'Tehlikeyi tamamen ortadan kaldırmak',
          'Tehlikeli olanı daha az tehlikeli olanla değiştirmek',
          'Mühendislik önlemleri: kapatma, havalandırma, koruyucu tertibat',
          'İdari önlemler: çalışma süresini kısaltma, rotasyon, uyarı ve işaretler',
          'Kişisel koruyucu donanım',
        ],
      },
      {
        tip: 'p',
        metin:
          'Sıralamanın anlamı şu: tozu kaynağında emen bir sistem kurulabiliyorsa, maske dağıtmak yeterli bir çözüm sayılmaz.',
      },
      { tip: 'h2', metin: 'İşverenin yükümlülükleri' },
      {
        tip: 'liste',
        maddeler: [
          'Riske uygun, CE işaretli donanımı ücretsiz temin etmek',
          'Kullanımı hakkında eğitim vermek ve gerektiğinde uygulamalı göstermek',
          'Bakım, onarım ve süresi dolanların değişimini sağlamak',
          'Teslim tutanaklarını saklamak',
        ],
      },
      { tip: 'h2', metin: 'En sık yapılan hata' },
      {
        tip: 'p',
        metin:
          'Donanımın alınması ile kullanılması aynı şey değildir. Dolapta duran bir KKD kimseyi korumaz. Kullanım denetimi ve doğru beden seçimi, satın almanın kendisi kadar önemlidir.',
      },
    ],
    baglantilar: [{ metin: 'Risk değerlendirmesi', href: '/hizmetler/risk-degerlendirmesi/' }],
  },
  {
    slug: 'isg-kurulu-ve-calisan-temsilcisi',
    baslik: 'İSG Kurulu ve Çalışan Temsilcisi: Kimler, Kaç Kişi?',
    ozet:
      'Elli ve daha fazla çalışanı olan ve altı aydan uzun süren işlerde İSG kurulu kurulur. Çalışan temsilcisi sayısı ise çalışan sayısına göre belirlenir.',
    tarih: '2026-09-17',
    kategori: 'mevzuat',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İş sağlığı ve güvenliği, işverenin tek başına yürüttüğü bir süreç değildir; çalışanların görüşünün alınması ve katılımının sağlanması mevzuatın açık bir gereğidir. Bunun iki kurumsal karşılığı var: İSG kurulu ve çalışan temsilcisi.',
      },
      { tip: 'h2', metin: 'İSG kurulu ne zaman kurulur?' },
      {
        tip: 'p',
        metin:
          'Elli ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren işlerin yapıldığı işyerlerinde iş sağlığı ve güvenliği kurulu kurulur. Aynı çalışma alanında birden fazla işveren varsa kurullar arasında koordinasyon asıl işveren tarafından sağlanır.',
      },
      { tip: 'h2', metin: 'Çalışan temsilcisi sayısı' },
      {
        tip: 'liste',
        maddeler: [
          '2–50 çalışan: 1 temsilci',
          '51–100 çalışan: 2 temsilci',
          '101–500 çalışan: 3 temsilci',
          '501–1000 çalışan: 4 temsilci',
          '1001–2000 çalışan: 5 temsilci',
          '2001 ve üzeri: 6 temsilci',
        ],
      },
      { tip: 'h2', metin: 'Temsilci ne yapar?' },
      {
        tip: 'p',
        metin:
          'Çalışan temsilcisi, iş sağlığı ve güvenliği çalışmalarına katılır, önerilerde bulunur ve çalışanların görüşünü işverene iletir. Risk değerlendirmesi ekibinde yer alması da bu nedenledir.',
      },
    ],
    baglantilar: [
      { metin: 'İSG danışmanlığı', href: '/hizmetler/isg-danismanligi/' },
      { metin: 'İş Güvenliği Uzmanlığı', href: '/hizmetler/is-guvenligi-uzmanligi/' },
    ],
  },
  {
    slug: 'mesleki-egitim-belgesi-zorunlulugu',
    baslik: 'Tehlikeli İşlerde Mesleki Eğitim Belgesi Zorunluluğu',
    ozet:
      'Tehlikeli ve çok tehlikeli işlerde çalışacakların, yaptıkları işe ilişkin mesleki eğitim aldığını belgelemesi gerekir. Temel İSG eğitimi bu belgenin yerine geçmez.',
    tarih: '2026-09-17',
    kategori: 'mevzuat',
    sure: 3,
    govde: [
      {
        tip: 'p',
        metin:
          'Sık karıştırılan iki şey var: temel İSG eğitimi ve mesleki eğitim belgesi. Birincisi her çalışana verilir ve iş sağlığı güvenliği konularını kapsar. İkincisi ise çalışanın yaptığı işi yapmaya ehil olduğunu gösterir.',
      },
      { tip: 'h2', metin: 'Kimler için zorunlu?' },
      {
        tip: 'p',
        metin:
          'Tehlikeli ve çok tehlikeli sınıfta yer alan işlerde çalışacakların, yaptıkları işe ilişkin mesleki eğitim aldıklarını belgelemesi gerekir. Kaynakçı, elektrikçi, vinç operatörü ve forklift operatörü gibi işlerde bu belge denetimde doğrudan sorulur.',
      },
      { tip: 'h2', metin: 'Hangi belgeler geçerli?' },
      {
        tip: 'liste',
        maddeler: [
          'İlgili alanda alınmış diploma',
          'Ustalık belgesi',
          'Mesleki Yeterlilik Kurumu mesleki yeterlilik belgesi',
          'İlgili mevzuatta kabul edilen diğer belgeler',
        ],
      },
      {
        tip: 'not',
        metin:
          'Temel İSG eğitimi belgesi, mesleki eğitim belgesinin yerine geçmez. Bir çalışanda ikisinin de bulunması gerekir.',
      },
    ],
    baglantilar: [{ metin: 'İSG eğitimi', href: '/isg-egitimi/' }],
  },
  {
    slug: 'osgb-teklifleri-nasil-karsilastirilir',
    baslik: 'İSG Teklifleri Nasıl Karşılaştırılır? Fiyat Farkı Nereden Çıkar?',
    ozet:
      'Aynı başlıkları sayan iki teklif arasındaki fark genellikle sürelerden ve kapsam dışı bırakılan kalemlerden doğar. Karşılaştırmayı mümkün kılan birkaç soru var.',
    tarih: '2026-09-16',
    kategori: 'uygulama',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'İSG teklifleri ilk bakışta birbirine benzer: hepsinde uzman, hekim, risk değerlendirmesi ve eğitim yazar. Fark, bu başlıkların altındaki sayılarda ve kapsam dışı bırakılanlardadır.',
      },
      { tip: 'h2', metin: 'Sorulması gereken sorular' },
      {
        tip: 'liste',
        maddeler: [
          'Ayda kaç saat uzman, kaç saat hekim? Yönetmeliğin asgari süresiyle uyuşuyor mu?',
          'Görevlendirilecek uzmanın belge sınıfı ne? Tehlike sınıfınıza uygun mu?',
          'Eğitimler dahil mi? Hangileri, kaç ders saati, hangi yöntemle?',
          'Mobil sağlık taraması ve tetkikler kapsamda mı?',
          'İş hijyeni ölçümleri ve periyodik kontroller dahil mi?',
          'Birden fazla şubeniz varsa her biri için ayrı süre hesaplanmış mı?',
        ],
      },
      { tip: 'h2', metin: 'Ucuz teklifin kaynağı' },
      {
        tip: 'p',
        metin:
          'Belirgin şekilde düşük bir teklif genellikle üç yerden birinden çıkar: süre yönetmeliğin altında hesaplanmıştır, ölçüm ve kontrol gibi kalemler kapsam dışıdır, ya da eğitimler ayrıca ücretlendirilecektir. Üçü de sonradan fark edilir.',
      },
      { tip: 'h2', metin: 'Karşılaştırmayı kolaylaştırmak' },
      {
        tip: 'p',
        metin:
          'Yükümlülüğünüzü önceden bilmek teklifleri okumayı kolaylaştırır. Tehlike sınıfınızı ve çalışan sayınızı girdiğinizde asgari süreleri gösteren hesaplama aracımız ücretsiz; aldığınız teklifi bu sayılarla yan yana koyabilirsiniz.',
      },
    ],
    baglantilar: [
      { metin: 'Yükümlülük hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },
      { metin: 'Teklif al', href: '/teklif-al/' },
    ],
  },
  {
    slug: 'insaat-santiyelerinde-is-guvenligi',
    baslik: 'İnşaat Şantiyelerinde İş Güvenliği: En Kritik Beş Başlık',
    ozet:
      'Yapı işlerinde ölümlü kazaların başlıca nedeni yüksekten düşme. Sağlık ve güvenlik planı, şantiye açılmadan önce hazırlanması gereken bir belgedir.',
    tarih: '2026-09-16',
    kategori: 'sektorel',
    sure: 5,
    govde: [
      {
        tip: 'p',
        metin:
          'Yapı işleri, tehlike sınıfı bakımından ağırlıklı olarak çok tehlikeli sınıfta yer alır. Şantiyeyi diğer işyerlerinden ayıran şey, işin her gün değişmesi ve aynı alanda birden fazla işverenin bulunmasıdır.',
      },
      { tip: 'h2', metin: 'Yüksekten düşme' },
      {
        tip: 'p',
        metin:
          'İskele kurulumu, platform, korkuluk ve düşme durdurma sistemleri saha açılmadan planlanır. Emniyet kemeri vermek tek başına önlem değildir; kemerin bağlanacağı ankraj noktası da planın parçasıdır.',
      },
      { tip: 'h2', metin: 'Malzeme düşmesi' },
      {
        tip: 'p',
        metin:
          'Alt katlarda çalışanlar için koruyucu ağ, baret bölgesi ve kapalı geçiş düzenlenir. Üst katta elden düşen bir el aleti, alt katta ölümcül olabilir.',
      },
      { tip: 'h2', metin: 'Kazı ve göçük' },
      {
        tip: 'p',
        metin:
          'Şev açısı, iksa sistemi ve yeraltı hatlarının konumu kazı başlamadan belirlenir. Göçük kazalarında müdahale süresi çok kısadır; önlem tek çözümdür.',
      },
      { tip: 'h2', metin: 'Kaldırma ekipmanı' },
      {
        tip: 'p',
        metin:
          'Vinç ve iş makinelerinin çalışma alanı yaya trafiğinden ayrılır. Ekipmanın periyodik kontrolü ve operatörün mesleki yeterlilik belgesi aynı anda aranır.',
      },
      { tip: 'h2', metin: 'Alt yüklenici koordinasyonu' },
      {
        tip: 'p',
        metin:
          'Aynı sahada birden fazla işveren varsa sorumluluk sınırları ve koordinasyon yazılı olmalıdır. Her alt yüklenici kendi risk değerlendirmesini yapar; asıl işveren koordinasyonu sağlar ve denetler.',
      },
      {
        tip: 'not',
        metin:
          'Yapı işlerinde sağlık ve güvenlik planı, şantiye açılmadan önce hazırlanır. Sonradan hazırlanan plan, geçmiş riskleri değil yalnızca kalan işleri kapsayabilir.',
      },
    ],
    baglantilar: [
      { metin: 'İnşaat ve şantiye sektörü', href: '/sektorler/insaat/' },
      { metin: 'Sağlık ve güvenlik planı', href: '/hizmetler/saglik-ve-guvenlik-plani/' },
    ],
  },
  {
    slug: 'ofis-calisanlari-icin-isg',
    baslik: 'Ofiste İSG: "Bizde Risk Yok" Demeden Önce',
    ozet:
      'Az tehlikeli sınıftaki bir ofis de risk değerlendirmesi, eğitim, acil durum planı ve sağlık gözetimi yükümlülüğü altındadır. Riskler farklıdır, yok değildir.',
    tarih: '2026-09-15',
    kategori: 'sektorel',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'Ofis işletmeleri genellikle az tehlikeli sınıfta yer alır ve bu, yükümlülüğün olmadığı anlamına gelmez; yalnızca sürelerin daha kısa olduğu anlamına gelir.',
      },
      { tip: 'h2', metin: 'Ofisin gerçek riskleri' },
      {
        tip: 'liste',
        maddeler: [
          'Ekranlı araçlarla çalışma: boyun, sırt ve göz şikâyetleri',
          'Elektrik tesisatı: çoklu priz yükleme, eski tesisat, topraklama',
          'Yangın ve tahliye: kaçış yollarının dolap veya koliyle kapatılması',
          'Kayma ve düşme: ıslak zemin, serbest kablo',
          'Psikososyal riskler: iş yükü, çalışma süresi ve iletişim',
        ],
      },
      { tip: 'h2', metin: 'Yükümlülük ne kadar?' },
      {
        tip: 'p',
        metin:
          'Az tehlikeli sınıfta iş güvenliği uzmanı için çalışan başına ayda en az 10, işyeri hekimi için 5 dakika süre doğar. Temel eğitim 8 ders saatidir ve üç yılda bir yenilenir. Risk değerlendirmesi en geç altı yılda bir yenilenir.',
      },
      {
        tip: 'not',
        metin:
          'Az tehlikeli ve elliden az çalışanı olan işyerlerinde işveren, gerekli eğitimi alıp belge sahibi olursa İSG hizmetlerini kendisi üstlenebilir. Bu belge yalnızca tek bir işyerinde kullanılabilir.',
      },
    ],
    baglantilar: [
      { metin: 'Ofis ve hizmet sektörü', href: '/sektorler/ofis-hizmet/' },
      { metin: 'Yükümlülük hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },
    ],
  },
  {
    slug: 'devlet-destegi-kucuk-isletmeler',
    baslik: 'Küçük İşletmeler İçin İSG Devlet Desteği',
    ozet:
      'Ondan az çalışanı olan tehlikeli ve çok tehlikeli sınıftaki işyerleri, İSG hizmet bedelleri için devlet desteğinden yararlanabilir.',
    tarih: '2026-09-15',
    kategori: 'mevzuat',
    sure: 3,
    govde: [
      {
        tip: 'p',
        metin:
          'İş sağlığı ve güvenliği hizmetlerinin maliyeti küçük işletmelerde oransal olarak daha ağır gelir. Mevzuat bunu dikkate alarak belirli işyerleri için destek öngörmüştür.',
      },
      { tip: 'h2', metin: 'Kimler yararlanabilir?' },
      {
        tip: 'p',
        metin:
          'Ondan az çalışanı bulunan ve tehlikeli veya çok tehlikeli sınıfta yer alan işyerleri, iş sağlığı ve güvenliği hizmet bedellerinin karşılanmasına yönelik destekten yararlanabilir. Şartlar ve başvuru usulü Bakanlıkça belirlenir.',
      },
      { tip: 'h2', metin: 'Başka bir teşvik' },
      {
        tip: 'p',
        metin:
          'Çok tehlikeli sınıfta yer alan ve ondan fazla çalışanı bulunan, belirli bir süre boyunca ölümlü veya sürekli iş göremezlikle sonuçlanan iş kazası yaşanmayan işyerleri için işsizlik sigortası primi işveren payında indirim uygulanabilir.',
      },
      {
        tip: 'not',
        metin:
          'Destek ve teşviklerin şartları zaman içinde değişebilir. İşyerinizin uygun olup olmadığını teklif aşamasında birlikte kontrol edebiliriz.',
      },
    ],
    baglantilar: [{ metin: 'Teklif al', href: '/teklif-al/' }],
  },
  {
    slug: 'yeni-isyeri-acarken-isg-kontrol-listesi',
    baslik: 'Yeni İşyeri Açarken İSG Kontrol Listesi',
    ozet:
      'İlk çalışanı işe almadan önce tamamlanması gereken adımlar. Sonradan toparlamak, baştan kurmaktan hem zor hem pahalı.',
    tarih: '2026-09-14',
    kategori: 'uygulama',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İş sağlığı ve güvenliği yükümlülükleri, ilk çalışanın işe başladığı gün doğar. Aşağıdaki sıra, işleri doğru sırada yapmayı kolaylaştırır.',
      },
      { tip: 'h2', metin: '1. Tehlike sınıfını netleştirin' },
      {
        tip: 'p',
        metin:
          'NACE kodunuzu ve karşılık gelen tehlike sınıfını öğrenin. Bundan sonraki neredeyse her adım bu bilgiye bağlı.',
      },
      { tip: 'h2', metin: '2. Uzman ve hekim görevlendirin' },
      {
        tip: 'p',
        metin:
          'Görevlendirmeyi İSG-KATİP üzerinden kayda geçirin. Uzmanın belge sınıfının tehlike sınıfınıza uygun olduğundan emin olun.',
      },
      { tip: 'h2', metin: '3. Risk değerlendirmesini yapın' },
      {
        tip: 'p',
        metin:
          'İşveren liderliğinde bir ekip kurun. Değerlendirme, işyeri faaliyete geçmeden önce yapılır.',
      },
      { tip: 'h2', metin: '4. Acil durum planını hazırlayın' },
      {
        tip: 'p',
        metin: 'Ekipleri görevlendirin, tahliye planını asın ve tatbikat takvimini belirleyin.',
      },
      { tip: 'h2', metin: '5. Sağlık raporlarını alın' },
      {
        tip: 'p',
        metin:
          'Her çalışan için işe giriş muayenesi yaptırın ve yaptığı işe uygun olduğunu rapora bağlatın.',
      },
      { tip: 'h2', metin: '6. Eğitimleri planlayın' },
      {
        tip: 'p',
        metin:
          'İşe başlama eğitimini çalışan işe başlarken verin. Temel eğitimin işe girişten itibaren en geç üç ay içinde tamamlanması gerekir.',
      },
      { tip: 'h2', metin: '7. Ekipman kontrollerini takvime bağlayın' },
      {
        tip: 'p',
        metin:
          'Kaldırma ekipmanı, basınçlı kap ve elektrik tesisatı için periyodik kontrolleri planlayın; raporları ekipman bazında dosyalayın.',
      },
    ],
    baglantilar: [
      { metin: 'Tehlike sınıfı sorgulama', href: '/araclar/tehlike-sinifi-sorgulama/' },
      { metin: 'Yükümlülük hesaplama', href: '/araclar/isg-yukumluluk-hesaplama/' },
    ],
  },
  {
    slug: 'denetimde-istenen-belgeler',
    baslik: 'Denetimde Hangi Belgeler İstenir?',
    ozet:
      'Denetimde sorulan şey işin yapılıp yapılmadığı değil, yapıldığının nasıl belgelendiğidir. İstenen belgelerin listesi ve sık görülen eksikler.',
    tarih: '2026-09-14',
    kategori: 'uygulama',
    sure: 4,
    govde: [
      {
        tip: 'p',
        metin:
          'İş sağlığı ve güvenliği denetimlerinde istenen belgeler büyük ölçüde standarttır. Sürpriz olan kısım genellikle belgelerin varlığı değil, güncelliğidir.',
      },
      { tip: 'h2', metin: 'Sık istenen belgeler' },
      {
        tip: 'liste',
        maddeler: [
          'İSG-KATİP üzerindeki uzman ve hekim görevlendirme sözleşmeleri',
          'Risk değerlendirmesi ve yenileme tarihi',
          'Acil durum eylem planı, ekip görevlendirmeleri ve tatbikat kayıtları',
          'Çalışan eğitim kayıtları ve eğitim belgeleri',
          'İşe giriş ve periyodik sağlık raporları',
          'İş ekipmanlarının periyodik kontrol raporları',
          'Onaylı defter',
          'Kişisel koruyucu donanım teslim tutanakları',
          'Tehlikeli işlerde mesleki eğitim belgeleri',
          'Varsa iş hijyeni ölçüm raporları ve patlamadan korunma dokümanı',
        ],
      },
      { tip: 'h2', metin: 'Sık görülen eksikler' },
      {
        tip: 'liste',
        maddeler: [
          'Görevlendirme sözleşmesinin sistemde görünmemesi',
          'Risk değerlendirmesinin yenileme süresinin dolmuş olması',
          'Yeni çalışanların eğitim ve sağlık raporlarının tamamlanmamış olması',
          'Tatbikat yapılmış ama kaydının tutulmamış olması',
          'Periyodik kontrol raporunun yetkisiz kişi tarafından düzenlenmiş olması',
        ],
      },
      {
        tip: 'not',
        metin:
          'Belgeleri denetim gününe bırakmamanın en pratik yolu, yenileme tarihlerini bir takvime bağlamaktır: her belgenin bir sonraki tarihi, sorumlusu ve hatırlatması olsun.',
      },
    ],
    baglantilar: [
      { metin: 'İSG danışmanlığı', href: '/hizmetler/isg-danismanligi/' },
      { metin: 'Sık sorulan sorular', href: '/sss/' },
    ],
  },
];

export const yaziSayisi = yazilar.length;

export const kategoriAdlari: Record<BlogYazisi['kategori'], string> = {
  mevzuat: 'Mevzuat',
  uygulama: 'Uygulama',
  sektorel: 'Sektörel',
};
