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
  tur: 'kanun' | 'yonetmelik' | 'teblig';
  /** Ne düzenlediği — kullanıcı hangisini açacağını buradan seçer. */
  konu: string;
  /** Sitede barındırdığımız kopya varsa yolu. */
  dosya?: string;
};

export const mevzuatListesi: MevzuatKaydi[] = [
  {
    ad: '6331 sayılı İş Sağlığı ve Güvenliği Kanunu',
    tur: 'kanun',
    konu:
      'Bütün yapının dayandığı kanun. İşverenin genel yükümlülüğü, risk değerlendirmesi, uzman ve hekim görevlendirmesi, eğitim, acil durumlar, çalışan katılımı ve idari yaptırımlar burada.',
    dosya: '/belgeler/6331-sayili-is-sagligi-ve-guvenligi-kanunu.pdf',
  },
  {
    ad: 'İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği',
    tur: 'yonetmelik',
    konu:
      'Risk değerlendirmesinin kimlerden oluşan ekiple yapılacağı, hangi aşamaları içerdiği ve tehlike sınıfına göre kaç yılda bir yenileneceği.',
  },
  {
    ad: 'Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'İşe başlama eğitimi, temel eğitim süreleri, yenileme periyotları, uzaktan eğitim şartları ve eğitim belgelendirmesi. 2026 düzenlemesiyle bütünüyle yenilendi.',
  },
  {
    ad: 'İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği',
    tur: 'yonetmelik',
    konu:
      'İş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personelinin görevlendirilmesi; OSGB’lerin yetkilendirilmesi ve çalışma usulleri.',
  },
  {
    ad: 'İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'Uzman belge sınıfları (A, B, C), hangi tehlike sınıfında hangi belgenin görevlendirilebileceği ve çalışan başına ayrılacak süreler.',
  },
  {
    ad: 'İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'İşyeri hekiminin görevleri, çalışan başına süreler ve diğer sağlık personelinin hangi iş yerlerinde zorunlu olduğu.',
  },
  {
    ad: 'İşyerlerinde Acil Durumlar Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'Acil durum planının hazırlanması, destek elemanı görevlendirilmesi, tahliye düzeni ve yılda en az bir tatbikat zorunluluğu.',
  },
  {
    ad: 'Sağlık ve Güvenlik İşaretleri Yönetmeliği',
    tur: 'yonetmelik',
    konu:
      'İş yerinde kullanılacak işaretlerin şekli, rengi ve anlamı. Sitedeki levhalar bu düzene göre hazırlandı.',
  },
  {
    ad: 'Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'KKD’nin işveren tarafından ücretsiz sağlanması, uygunluk değerlendirmesi, kullanım eğitimi ve kayıt.',
  },
  {
    ad: 'İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği',
    tur: 'yonetmelik',
    konu:
      'Kaldırma araçları, basınçlı kaplar, tesisatlar ve tezgâhların periyodik kontrol süreleri ve kontrolü kimin yapabileceği.',
  },
  {
    ad: 'Çalışanların Patlayıcı Ortamların Tehlikelerinden Korunması Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu: 'Patlamadan korunma dokümanı, bölge sınıflandırması ve patlayıcı ortamda ekipman seçimi.',
  },
  {
    ad: 'İlk Yardım Yönetmeliği',
    tur: 'yonetmelik',
    konu:
      'İş yerinde bulundurulacak ilk yardımcı sayısı, eğitim merkezlerinin yetkilendirilmesi ve sertifika geçerlilik süresi.',
  },
  {
    ad: 'Binaların Yangından Korunması Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'Kaçış yolları, yangın söndürme sistemleri, söndürücü sayısı ve yıllık tatbikat yükümlülüğü.',
  },
  {
    ad: 'İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik',
    tur: 'yonetmelik',
    konu:
      'Elli ve üzeri çalışanı olan iş yerlerinde kurulun oluşumu, toplanma sıklığı ve kararların bağlayıcılığı.',
  },
  {
    ad: 'İş Sağlığı ve Güvenliğine İlişkin İşyeri Tehlike Sınıfları Tebliği',
    tur: 'teblig',
    konu:
      'NACE koduna göre iş yerinin az tehlikeli, tehlikeli veya çok tehlikeli olduğunu belirleyen liste. Sitedeki sorgulama aracı bu listeye dayanıyor.',
  },
];
