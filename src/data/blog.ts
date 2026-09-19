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
];

export const yaziSayisi = yazilar.length;

export const kategoriAdlari: Record<BlogYazisi['kategori'], string> = {
  mevzuat: 'Mevzuat',
  uygulama: 'Uygulama',
  sektorel: 'Sektörel',
};
