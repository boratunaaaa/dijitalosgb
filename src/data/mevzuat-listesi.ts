/**
 * Kütüphanedeki mevzuat dizini.
 *
 * KURAL: Buraya yalnızca varlığından ve künyesinden emin olduğumuz düzenlemeler
 * girer. Doğrudan PDF bağlantısı yalnızca kendi sunucumuzdaki dosyalar için
 * verilir; diğerleri mevzuat.gov.tr'ye yönlendirilir, çünkü orada metin her
 * zaman güncel hâliyle durur ve bizim kopyamız eskirse yanlış bilgi yaymış
 * oluruz.
 */
export type MevzuatKaydi = {
  ad: string;
  tur: "kanun" | "yonetmelik" | "teblig";
  /** Ne düzenlediği — kullanıcı hangisini açacağını buradan seçer. */
  konu: string;
  /** Sitede barındırdığımız kopya varsa yolu. */
  dosya?: string;
};

export const mevzuatListesi: MevzuatKaydi[] = [
  {
    ad: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu",
    tur: "kanun",
    konu: "Bütün yapının dayandığı kanun. İşverenin genel yükümlülüğü, risk değerlendirmesi, uzman ve hekim görevlendirmesi, eğitim, acil durumlar, çalışan katılımı ve idari yaptırımlar burada.",
    dosya: "/belgeler/6331-sayili-is-sagligi-ve-guvenligi-kanunu.pdf",
  },
  {
    ad: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği",
    tur: "yonetmelik",
    konu: "Risk değerlendirmesinin kimlerden oluşan ekiple yapılacağı, hangi aşamaları içerdiği ve tehlike sınıfına göre kaç yılda bir yenileneceği.",
  },
  {
    ad: "Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "İşe başlama eğitimi, temel eğitim süreleri, yenileme periyotları, uzaktan eğitim şartları ve eğitim belgelendirmesi. 2026 düzenlemesiyle bütünüyle yenilendi.",
  },
  {
    ad: "İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği",
    tur: "yonetmelik",
    konu: "İş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personelinin görevlendirilmesi; OSGB’lerin yetkilendirilmesi ve çalışma usulleri.",
  },
  {
    ad: "İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Uzman belge sınıfları (A, B, C), hangi tehlike sınıfında hangi belgenin görevlendirilebileceği ve çalışan başına ayrılacak süreler.",
  },
  {
    ad: "İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "İşyeri hekiminin görevleri, çalışan başına süreler ve diğer sağlık personelinin hangi iş yerlerinde zorunlu olduğu.",
  },
  {
    ad: "İşyerlerinde Acil Durumlar Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Acil durum planının hazırlanması, destek elemanı görevlendirilmesi, tahliye düzeni ve yılda en az bir tatbikat zorunluluğu.",
  },
  {
    ad: "Sağlık ve Güvenlik İşaretleri Yönetmeliği",
    tur: "yonetmelik",
    konu: "İş yerinde kullanılacak işaretlerin şekli, rengi ve anlamı. Sitedeki levhalar bu düzene göre hazırlandı.",
  },
  {
    ad: "Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "KKD’nin işveren tarafından ücretsiz sağlanması, uygunluk değerlendirmesi, kullanım eğitimi ve kayıt.",
  },
  {
    ad: "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği",
    tur: "yonetmelik",
    konu: "Kaldırma araçları, basınçlı kaplar, tesisatlar ve tezgâhların periyodik kontrol süreleri ve kontrolü kimin yapabileceği.",
  },
  {
    ad: "Çalışanların Patlayıcı Ortamların Tehlikelerinden Korunması Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Patlamadan korunma dokümanı, bölge sınıflandırması ve patlayıcı ortamda ekipman seçimi.",
  },
  {
    ad: "İlk Yardım Yönetmeliği",
    tur: "yonetmelik",
    konu: "İş yerinde bulundurulacak ilk yardımcı sayısı, eğitim merkezlerinin yetkilendirilmesi ve sertifika geçerlilik süresi.",
  },
  {
    ad: "Binaların Yangından Korunması Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Kaçış yolları, yangın söndürme sistemleri, söndürücü sayısı ve yıllık tatbikat yükümlülüğü.",
  },
  {
    ad: "İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Elli ve üzeri çalışanı olan iş yerlerinde kurulun oluşumu, toplanma sıklığı ve kararların bağlayıcılığı.",
  },
  {
    ad: "İş Sağlığı ve Güvenliğine İlişkin İşyeri Tehlike Sınıfları Tebliği",
    tur: "teblig",
    konu: "NACE koduna göre iş yerinin az tehlikeli, tehlikeli veya çok tehlikeli olduğunu belirleyen liste. Sitedeki sorgulama aracı bu listeye dayanıyor.",
  },
  {
    ad: "Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Tehlikeli kimyasalların kaydı, depolanması, etiketlenmesi, maruziyet sınır değerleri ve kimyasallarla çalışmada alınacak özel İSG tedbirleri.",
  },
  {
    ad: "Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Hastaneler, laboratuvarlar ve atık tesisleri gibi alanlarda virüs, bakteri ve mantar gibi biyolojik risklere karşı alınacak önlemler.",
  },
  {
    ad: "Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği",
    tur: "yonetmelik",
    konu: "İnşaat şantiyelerinde sağlık ve güvenlik planı, yüksekte çalışma, iskeleler, kazı işleri ve sağlık ve güvenlik koordinatörünün görevleri.",
  },
  {
    ad: "Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği",
    tur: "yonetmelik",
    konu: "Yeraltı ve yerüstü maden işletmelerinde havalandırma, göçük önleme, sığınak odaları ve patlayıcı madde kullanımı kısıtlamaları.",
  },
  {
    ad: "Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Bina yıkımları, gemi sökümleri veya tadilatlarda asbest söküm uzmanı gözetiminde yapılacak çalışmalar ve sınır değerler.",
  },
  {
    ad: "Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Ofis çalışanları için monitör, klavye, çalışma masası ve sandalyesinin ergonomik özellikleri, göz muayeneleri ve mola süreleri.",
  },
  {
    ad: "Elle Taşıma İşleri Yönetmeliği",
    tur: "yonetmelik",
    konu: "Yük taşırken bel ve sırt incinmelerini önlemek için alınacak tedbirler, mekanik sistemlerin kullanımı ve ergonomi ilkeleri.",
  },
  {
    ad: "Çalışanların Gürültü İle İlgili Risklerden Korunmalarına Dair Yönetmelik",
    tur: "yonetmelik",
    konu: "İşitme kayıplarını engellemek için gürültü maruziyet sınır değerleri, kulaklık kullanımı ve odyometri (işitme) testleri.",
  },
  {
    ad: "Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelik",
    tur: "yonetmelik",
    konu: "El-kol ve tüm vücut titreşimi yaratan iş makineleri veya matkap gibi aletlerle çalışmalarda maruziyet sınır değerleri.",
  },
  {
    ad: "Tozla Mücadele Yönetmeliği",
    tur: "yonetmelik",
    konu: "Pnömokonyoz ve silikozis gibi meslek hastalıklarına yol açan tozlu ortamlarda (maden, seramik, döküm) havalandırma ve sağlık gözetimi.",
  },
  {
    ad: "Kanserojen veya Mutajen Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Kansere veya genetik mutasyona yol açan maddelerin işyerinde kullanımının sınırlandırılması, kapalı sistem çalışma ve kayıt tutma.",
  },
  {
    ad: "Gebe veya Emziren Kadınların Çalıştırılma Şartlarıyla Emzirme Odaları ve Çocuk Bakım Yurtlarına Dair Yönetmelik",
    tur: "yonetmelik",
    konu: "Hamile çalışanların risk değerlendirmesi, gece çalıştırılma yasakları, süt izni ve kreş zorunlulukları.",
  },
  {
    ad: "Kadın Çalışanların Gece Postalarında Çalıştırılma Koşulları Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "Kadınların gece vardiyalarında 7.5 saatten fazla çalıştırılamaması, ulaşım imkanı sağlanması ve sağlık raporu zorunluluğu.",
  },
  {
    ad: "Çocuk ve Genç İşçilerin Çalıştırılma Usul ve Esasları Hakkında Yönetmelik",
    tur: "yonetmelik",
    konu: "15-18 yaş arası genç işçilerin çalışabileceği hafif işler, gece çalışma yasakları ve eğitim durumlarına göre çalışma süreleri.",
  },
  {
    ad: "İşyerlerinde İşin Durdurulmasına Dair Yönetmelik",
    tur: "yonetmelik",
    konu: "Hayati tehlike arz eden durumlarda iş müfettişleri tarafından işin nasıl durdurulacağı ve eksiklerin giderilip mühürün açılma süreci.",
  },
];

export const mevzuatSayisi = mevzuatListesi.length;
