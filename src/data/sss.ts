/**
 * Sıkça sorulan sorular.
 *
 * SORULARIN KAYNAĞI: Çalışma ve Sosyal Güvenlik Bakanlığı İş Sağlığı ve
 * Güvenliği Genel Müdürlüğü'nün yayımladığı resmî soru listesi ile
 * işverenlerin arama motorlarında gerçekten yazdığı ifadeler. Soru uydurulmadı;
 * "acaba şunu da sorarlar mı" diye eklenen dolgu soru yok.
 *
 * CEVAPLARDA KURAL: Her yıl değişen tutarlar (idari para cezaları gibi) sayı
 * olarak YAZILMAZ. Bugün doğru yazılsa bile yarın yanlış olur ve ziyaretçiyi
 * yanlış bütçeye sokar; bunun yerine tutarın nereden öğrenileceği söylenir.
 * Süre ve oran gibi yönetmelikte sabit olan değerler yazılır.
 */

export type SssKategori =
  | 'zorunluluk'
  | 'profesyonel'
  | 'egitim'
  | 'risk'
  | 'saglik'
  | 'denetim'
  | 'surec';

export type Soru = {
  soru: string;
  cevap: string;
  kategori: SssKategori;
};

export const kategoriAdlari: Record<SssKategori, string> = {
  zorunluluk: 'Zorunluluk ve kapsam',
  profesyonel: 'Uzman ve işyeri hekimi',
  egitim: 'Çalışan eğitimleri',
  risk: 'Risk değerlendirmesi',
  saglik: 'Sağlık gözetimi ve muayeneler',
  denetim: 'Denetim, ceza ve kayıtlar',
  surec: 'Süreç ve sözleşme',
};

export const sorular: Soru[] = [
  // ---- Zorunluluk ve kapsam ----
  {
    kategori: 'zorunluluk',
    soru: 'İSG hizmeti almak zorunlu mu?',
    cevap:
      'Evet. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu, kamu ve özel sektör ayrımı yapmadan bir çalışanı olan her işyerini kapsar. Tehlikeli ve çok tehlikeli sınıftaki işyerlerinde yükümlülük yıllardır yürürlükte; az tehlikeli sınıftaki elliden az çalışanı olan işyerleri ve kamu kurumları için ertelenen tarih de 31 Aralık 2024’te doldu. Bugün itibarıyla tehlike sınıfı ve çalışan sayısı ne olursa olsun yükümlülük başlamış durumdadır.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Tek çalışanım var, yine de gerekli mi?',
    cevap:
      'Evet. Kanun çalışan sayısına bakmadan uygulanır; sayı yalnızca hangi yükümlülüğün hangi ölçüde doğduğunu etkiler. Bir çalışanı olan işyeri de risk değerlendirmesi yapmak, çalışanına eğitim vermek ve uzman ile hekim görevlendirmekle yükümlüdür.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Çırak ve stajyerler de kapsama giriyor mu?',
    cevap:
      'Evet. Çırak ve stajyerler, diğer çalışanlarla aynı koruma kapsamındadır. Eğitimleri verilir, risk değerlendirmesinde dikkate alınırlar ve sağlık gözetimine dahil edilirler.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Kendi işyerimde tek başıma çalışıyorum, kapsamda mıyım?',
    cevap:
      'Yanında çalışanı olmayan, tek başına çalışan kişiler kanunun kapsamı dışındadır. Ancak bir kişi bile istihdam ettiğiniz anda, o kişi için bütün yükümlülükler başlar.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Tehlike sınıfım ne? Nasıl öğrenirim?',
    cevap:
      'Tehlike sınıfı işyerinizin NACE koduna göre belirlenir ve İşyeri Tehlike Sınıfları Tebliği’nin ekindeki listede yazar. Kodunuz SGK tescil kaydınızda bulunur. Sitemizdeki tehlike sınıfı sorgulama aracına NACE kodunuzu veya yaptığınız işi yazarak sınıfınızı görebilirsiniz; bağlayıcı olan tescil kaydınızdır.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Birden fazla iş yapıyorum, hangi sınıfa girerim?',
    cevap:
      'Tehlike sınıfı, işyerinde yürütülen asıl işe göre belirlenir. Asıl iş tanımına uyan birden fazla faaliyet varsa, bunlardan tehlike sınıfı yüksek olan esas alınır. Asıl işin belirlenmesinde tereddüt varsa işyerinin kuruluş amacına bakılır.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Faaliyet alanımı değiştirdim, ne yapmalıyım?',
    cevap:
      'Asıl iş faaliyetindeki değişikliği en geç bir ay içinde Çalışma ve Sosyal Güvenlik Bakanlığına bildirmeniz gerekir. Değişiklik tehlike sınıfınızı da değiştirebilir; bu durumda yükümlülükleriniz de değişir.',
  },
  {
    kategori: 'zorunluluk',
    soru: 'Tehlike sınıfıma itiraz edebilir miyim?',
    cevap:
      'Evet. İtiraz Çalışma ve Sosyal Güvenlik Bakanlığınca değerlendirilir; değerlendirme Bakanlık tescil kayıtları ve tescile esas alınan asıl iş üzerinden yapılır. Karar sınıf değişikliğine yol açarsa, yeni sınıfın gerektirdiği iş ve işlemleri 90 gün içinde yerine getirmeniz gerekir.',
  },

  // ---- Uzman ve işyeri hekimi ----
  {
    kategori: 'profesyonel',
    soru: 'İş güvenliği uzmanı ayda kaç saat gelmeli?',
    cevap:
      'Süre çalışan başına hesaplanır: az tehlikeli sınıfta ayda en az 10 dakika, tehlikeli sınıfta 20 dakika, çok tehlikeli sınıfta 40 dakika. Örneğin çok tehlikeli sınıfta 30 çalışanı olan bir işyerinde ayda en az 20 saat uzman süresi doğar. Sitemizdeki yükümlülük hesaplama aracıyla kendi sürenizi görebilirsiniz.',
  },
  {
    kategori: 'profesyonel',
    soru: 'İşyeri hekimi ayda kaç saat gelmeli?',
    cevap:
      'İşyeri hekimi için süre, çalışan başına ayda en az 5 dakika (az tehlikeli), 10 dakika (tehlikeli) ve 15 dakikadır (çok tehlikeli).',
  },
  {
    kategori: 'profesyonel',
    soru: 'Hangi sınıfta hangi belgeye sahip uzman görev yapabilir?',
    cevap:
      'C sınıfı belgeye sahip uzman az tehlikeli, B sınıfı az ve tehlikeli, A sınıfı ise bütün tehlike sınıflarındaki işyerlerinde görev yapabilir. Çok tehlikeli sınıftaki bir işyerinde yalnızca A sınıfı uzman görevlendirilebilir.',
  },
  {
    kategori: 'profesyonel',
    soru: 'Diğer sağlık personeli görevlendirmek zorunda mıyım?',
    cevap:
      'Bu yükümlülük, çok tehlikeli sınıfta yer alan ve on ve daha fazla çalışanı olan işyerleri için doğar. Süre çalışan sayısına göre kademelenir: 10–49 çalışanda ayda en az 10 dakika, 50–249 çalışanda 15 dakika, 250 ve üzerinde 20 dakika. İşyerinde tam süreli işyeri hekimi görevlendirilmişse diğer sağlık personeli görevlendirilmesi zorunlu değildir.',
  },
  {
    kategori: 'profesyonel',
    soru: 'Uzmanı kendim işe alabilir miyim, yoksa OSGB şart mı?',
    cevap:
      'İkisi de mümkündür. Yükümlülüğü kendi bünyenizde uzman ve hekim istihdam ederek de, yetkilendirilmiş bir ortak sağlık ve güvenlik biriminden hizmet alarak da yerine getirebilirsiniz. Küçük işletmelerde ikinci yol genellikle daha az maliyetlidir, çünkü doğan süre tam zamanlı bir istihdamı gerektirmez.',
  },
  {
    kategori: 'profesyonel',
    soru: 'İşveren olarak kendim üstlenebilir miyim?',
    cevap:
      'Belirli koşullarda mümkündür: az tehlikeli sınıftaki ve elliden az çalışanı olan işyerlerinde, işveren veya işveren vekili gerekli eğitimi alıp belge sahibi olursa iş sağlığı ve güvenliği hizmetlerini kendisi üstlenebilir. Bu belge yalnızca tek bir işyerinde kullanılabilir.',
  },
  {
    kategori: 'profesyonel',
    soru: 'Görevlendirme nasıl resmiyet kazanır?',
    cevap:
      'Uzman ve hekim görevlendirmeleri İSG-KATİP sistemi üzerinden sözleşmeyle kayda geçer. Sistemde sözleşmesi görünmeyen bir görevlendirme, kâğıt üzerinde yapılmış olsa da geçerli sayılmaz. Denetimde ilk bakılan kayıtlardan biridir.',
  },
  {
    kategori: 'profesyonel',
    soru: 'Kaç çalışanda tam gün uzman gerekir?',
    cevap:
      'Her 1000 çalışan için tam gün çalışacak en az bir iş güvenliği uzmanı görevlendirilir. Çalışan sayısı 1000’in tam katlarını aşıyorsa, artan kısım için tehlike sınıfına göre hesaplanan sürede ek görevlendirme yapılır.',
  },
  {
    kategori: 'profesyonel',
    soru: 'İSG kurulu kurmam gerekiyor mu?',
    cevap:
      'Elli ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren işlerin yapıldığı işyerlerinde iş sağlığı ve güvenliği kurulu kurulur. Aynı çalışma alanında birden fazla işveren varsa kurullar arasında koordinasyon asıl işveren tarafından sağlanır.',
  },

  // ---- Eğitim ----
  {
    kategori: 'egitim',
    soru: 'Çalışan eğitimi kaç saat olmalı?',
    cevap:
      'Temel iş sağlığı ve güvenliği eğitimi az tehlikeli sınıfta en az 8, tehlikeli sınıfta 12, çok tehlikeli sınıfta 16 ders saatidir. Yeni yönetmelikle bu sürenin içinden "işe ve işyerine özgü riskler" başlığına ayrılması gereken asgari süre de belirlendi: sırasıyla 2, 3 ve 4 ders saati. Bir ders saati 45 dakika eğitim ve 15 dakika aradan oluşur.',
  },
  {
    kategori: 'egitim',
    soru: 'Eğitim ne sıklıkla yenilenir?',
    cevap:
      'Yenileme aralığı tehlike sınıfına bağlıdır: çok tehlikeli sınıfta yılda bir, tehlikeli sınıfta iki yılda bir, az tehlikeli sınıfta üç yılda bir. Yenileme eğitiminin de asgari süresi vardır; en az 8 ders saati olarak yapılır. İş kazası veya meslek hastalığı yaşanması, işyerinde değişiklik olması gibi hâllerde süre beklenmeden ilave eğitim verilir.',
  },
  {
    kategori: 'egitim',
    soru: 'İSG eğitimi uzaktan verilebilir mi?',
    cevap:
      'Evet; eğitimler uzaktan, yüz yüze veya ikisi bir arada verilebilir. Ek-1’deki genel, sağlık ve teknik konular her tehlike sınıfında uzaktan verilebilir. Dördüncü başlık olan işe ve işyerine özgü riskler ise tehlikeli ve çok tehlikeli işyerlerinde yüz yüze verilmek zorundadır. Uzaktan eğitimde katılım kaydı tutulur ve ölçme değerlendirmeden en az 60 puan alınması gerekir.',
  },
  {
    kategori: 'egitim',
    soru: 'Eğitim sonunda hangi belge düzenlenir?',
    cevap:
      'Eğitim sonunda katılım kayıtları tutulur ve çalışan adına belge düzenlenir. Belgede eğitimin konusu, süresi, tarihi ve eğitimi verenin bilgileri yer alır. Bu kayıtlar işyeri İSG dosyasında saklanır ve denetimde istenir.',
  },
  {
    kategori: 'egitim',
    soru: 'Yeni işe aldığım çalışana ne zaman eğitim vermeliyim?',
    cevap:
      'İki ayrı eğitimden söz ediyoruz. İşe başlama eğitimi, çalışan işe başlarken verilir ve en az iki saattir; bu süre temel eğitim süresinden sayılmaz. Temel İSG eğitiminin ise işe girişten itibaren en geç üç ay içinde tamamlanması gerekir. Bu ayrım, 2 Nisan 2026 tarihli yeni yönetmelikle netleşti.',
  },
  {
    kategori: 'egitim',
    soru: 'Tehlikeli işlerde mesleki eğitim belgesi de gerekli mi?',
    cevap:
      'Evet. Tehlikeli ve çok tehlikeli sınıfta yer alan işlerde çalışacakların, yaptıkları işe ilişkin mesleki eğitim aldığını belgelemesi gerekir. Diploma, ustalık belgesi veya Mesleki Yeterlilik Kurumu belgesi bu amaçla kullanılabilir. Temel İSG eğitimi bu belgenin yerine geçmez.',
  },
  {
    kategori: 'egitim',
    soru: 'Eğitimi kim verebilir?',
    cevap:
      'Temel İSG eğitimleri, işyerinde görevli iş güvenliği uzmanı ve işyeri hekimi tarafından ya da yetkilendirilmiş eğitim kurumlarınca verilebilir. Eğitimi verenin belgesi, eğitimin geçerliliğinin de şartıdır.',
  },

  // ---- Risk değerlendirmesi ----
  {
    kategori: 'risk',
    soru: 'Risk değerlendirmesi zorunlu mu, kim yapar?',
    cevap:
      'Zorunludur ve istisnası yoktur. Risk değerlendirmesi, işverenin liderliğinde kurulan bir ekip tarafından yapılır; ekipte işveren veya vekili, iş güvenliği uzmanı ve işyeri hekimi, çalışan temsilcileri ve destek elemanları bulunur. Dışarıdan alınan hizmet, ekibe teknik destek sağlar; sürecin sahibi işverendir.',
  },
  {
    kategori: 'risk',
    soru: 'Risk değerlendirmesi ne sıklıkla yenilenir?',
    cevap:
      'Az tehlikeli sınıfta en geç altı yılda bir, tehlikeli sınıfta dört yılda bir, çok tehlikeli sınıfta iki yılda bir yenilenir. Ayrıca işyerinde taşınma, yeni ekipman, üretim değişikliği, iş kazası veya meslek hastalığı gibi durumlarda süre beklenmeden yenilenir.',
  },
  {
    kategori: 'risk',
    soru: 'Hazır bir risk değerlendirme dosyası satın alabilir miyim?',
    cevap:
      'Böyle bir dosya mevzuata uygun sayılmaz. Risk değerlendirmesi işyerinize özgüdür; sizin makinenizi, yerleşiminizi, çalışma şeklinizi ve kullandığınız malzemeyi esas alır. Başka bir işyeri için hazırlanmış şablon, denetimde de kazada da işverenin yanında durmaz.',
  },
  {
    kategori: 'risk',
    soru: 'Belirli bir risk değerlendirme yöntemi zorunlu mu?',
    cevap:
      'Hayır. Mevzuat belirli bir yöntem şart koşmaz; işyerinin niteliğine uygun, kabul görmüş yöntemlerden biri seçilebilir. Önemli olan yöntemin adı değil, tehlikelerin eksiksiz tespit edilmesi ve önlemlerin bir takvime bağlanmasıdır.',
  },
  {
    kategori: 'risk',
    soru: 'Alt yüklenicilerim var, risk değerlendirmesini kim yapar?',
    cevap:
      'Her işveren kendi çalışanları ve kendi yaptığı iş için risk değerlendirmesi yapar. Aynı çalışma alanında birden fazla işveren varsa koordinasyon asıl işveren tarafından sağlanır ve alınan önlemler birlikte gözden geçirilir.',
  },

  // ---- Sağlık gözetimi ----
  {
    kategori: 'saglik',
    soru: 'İşe giriş sağlık raporu zorunlu mu?',
    cevap:
      'Evet. Çalışan işe başlamadan önce sağlık muayenesinden geçirilir ve yaptığı işe uygun olduğu rapora bağlanır. Rapor işyeri hekimi tarafından düzenlenir; işyerinde hekim yoksa yetkilendirilmiş kuruluş üzerinden alınır.',
  },
  {
    kategori: 'saglik',
    soru: 'Periyodik muayene ne sıklıkla yapılır?',
    cevap:
      'Sağlık gözetimi aralığı tehlike sınıfına göre belirlenir: az tehlikeli sınıfta en geç beş yılda bir, tehlikeli sınıfta üç yılda bir, çok tehlikeli sınıfta yılda bir. İşyeri hekimi, işin niteliğine göre bu aralıkları kısaltabilir.',
  },
  {
    kategori: 'saglik',
    soru: 'Muayeneler işyerinde yapılabilir mi?',
    cevap:
      'Evet. Mobil sağlık aracıyla işe giriş ve periyodik muayeneler, tetkikleriyle birlikte işyerinizde yapılabilir. Çalışanların sağlık kuruluşuna tek tek gitmesi gerekmediği için üretim kaybı ve zaman kaybı büyük ölçüde ortadan kalkar.',
  },
  {
    kategori: 'saglik',
    soru: 'Hangi tetkikler yapılır?',
    cevap:
      'Tetkikler işin niteliğine ve maruziyete göre belirlenir. Gürültülü ortamda çalışanlarda odyometri, tozlu ortamda akciğer grafisi ve solunum fonksiyon testi, belirli kimyasallara maruz kalanlarda ilgili kan ve idrar tetkikleri istenir. Hangi tetkikin gerektiğine işyeri hekimi karar verir.',
  },
  {
    kategori: 'saglik',
    soru: 'Çalışanın sağlığı işe uygun çıkmazsa ne olur?',
    cevap:
      'İşyeri hekimi durumu rapora bağlar. Çalışan, sağlık durumuna uygun olmayan işte çalıştırılamaz; mümkünse işyerinde durumuna uygun başka bir görevde değerlendirilir.',
  },
  {
    kategori: 'saglik',
    soru: 'Eski işverenin sağlık kayıtlarını alabilir miyim?',
    cevap:
      'Evet. Çalışanın önceki işyerindeki sağlık kayıtlarını yazılı olarak talep edebilirsiniz; eski işveren bu belgeleri bir ay içinde göndermekle yükümlüdür.',
  },

  // ---- Denetim, ceza, kayıt ----
  {
    kategori: 'denetim',
    soru: 'İSG hizmeti almazsam ceza ne kadar?',
    cevap:
      'İdari para cezaları, ihlalin türüne, işyerinin tehlike sınıfına ve çalışan sayısına göre değişir; üstelik bazı ihlallerde aykırılığın sürdüğü her ay için ayrı ayrı uygulanır. Tutarlar her yıl yeniden değerleme oranıyla güncellendiği için burada rakam yazmıyoruz: güncel tutarları Çalışma ve Sosyal Güvenlik Bakanlığının yayımladığı idari para cezaları listesinden görebilirsiniz. Pratikte asıl maliyet cezadan çok, bir iş kazası sonrası doğan hukuki ve mali sorumluluktur.',
  },
  {
    kategori: 'denetim',
    soru: 'Denetimde ilk olarak neye bakılır?',
    cevap:
      'Genellikle İSG-KATİP üzerindeki görevlendirme sözleşmeleri, risk değerlendirmesi, acil durum planı, çalışan eğitim kayıtları, sağlık raporları, onaylı defter ve iş ekipmanlarının periyodik kontrol raporları istenir. Bu belgelerin varlığı kadar güncel olması da önemlidir.',
  },
  {
    kategori: 'denetim',
    soru: 'Onaylı defter nedir, tutmak zorunda mıyım?',
    cevap:
      'Onaylı defter, iş güvenliği uzmanı ve işyeri hekiminin tespitlerini, önerilerini ve işverene bildirdiği hususları yazdığı, noterce onaylı defterdir. İşyerinde bulundurulması ve denetimde ibraz edilmesi gerekir.',
  },
  {
    kategori: 'denetim',
    soru: 'İş kazasını ne kadar sürede bildirmeliyim?',
    cevap:
      'İş kazası, kazadan sonraki üç iş günü içinde Sosyal Güvenlik Kurumuna bildirilir. Meslek hastalığında süre, hastalığın öğrenildiği tarihten itibaren üç iş günüdür.',
  },
  {
    kategori: 'denetim',
    soru: 'Devlet desteği var mı?',
    cevap:
      'Ondan az çalışanı bulunan tehlikeli ve çok tehlikeli sınıftaki işyerleri, iş sağlığı ve güvenliği hizmet bedelleri için devlet desteğinden yararlanabilir. Destek şartları ve başvuru usulü Bakanlıkça belirlenir; işyerinizin uygun olup olmadığını birlikte kontrol edebiliriz.',
  },

  // ---- Süreç ve sözleşme ----
  {
    kategori: 'surec',
    soru: 'Teklif almak için hangi bilgiler gerekiyor?',
    cevap:
      'Üç bilgi yeterli: ne iş yaptığınız (veya NACE kodunuz), kaç çalışanınız olduğu ve işyerinizin bulunduğu il. Bu üçüyle yükümlülüğünüzü çıkarıp yazılı teklif hazırlıyoruz.',
  },
  {
    kategori: 'surec',
    soru: 'Fiyatlar neye göre değişiyor?',
    cevap:
      'Belirleyici iki unsur tehlike sınıfı ve çalışan sayısıdır, çünkü doğan uzman ve hekim süresi bunlara bağlıdır. Buna işyeri sayısı, vardiya düzeni, ölçüm ve periyodik kontrol ihtiyacı gibi kalemler eklenir. Aynı başlıkları sayan iki teklif arasındaki fark genellikle bu kalemlerin kapsam dışı bırakılmasından doğar.',
  },
  {
    kategori: 'surec',
    soru: 'Hizmet ne kadar sürede başlar?',
    cevap:
      'Bilgiler tamamlandıktan sonra sözleşme ve İSG-KATİP görevlendirmeleri kısa sürede yapılır. Saha ziyareti ve eğitim takvimi, görevlendirme kayda geçtikten sonra planlanır.',
  },
  {
    kategori: 'surec',
    soru: 'Birden fazla şubem var, hepsi için ayrı sözleşme mi gerekir?',
    cevap:
      'Yükümlülük işyeri bazında doğar; her SGK sicil numarası ayrı işyeri sayılır. Şubelerin tehlike sınıfı ve çalışan sayısı farklıysa doğan süreler de farklı olur. Çok şubeli işletmelerde bunları tek planda toplayıp takvime bağlıyoruz.',
  },
  {
    kategori: 'surec',
    soru: 'Türkiye’nin her yerine hizmet veriyor musunuz?',
    cevap:
      'İSG eğitimleri, danışmanlık ve dokümantasyon hizmetlerinde coğrafi sınır yoktur; Türkiye genelinde çalışıyoruz. Saha görevlendirmesi gerektiren hizmetlerde ise çözüm ortaklarımızın yetki alanı belirleyicidir; işyerinizin bulunduğu il için uygun çözümü birlikte kuruyoruz.',
  },
];

export const soruSayisi = sorular.length;
