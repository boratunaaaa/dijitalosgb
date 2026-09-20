/**
 * Hizmet sayfaları — sitenin asıl ticari niyetli trafiği burada.
 *
 * NEDEN AYRI SAYFA: "risk değerlendirmesi fiyatı", "acil durum planı
 * hazırlama" gibi aramalar "OSGB" aramasından daha yüksek niyetli ve daha az
 * rekabetli. Ana OSGB sayfasında birer satırla geçildiği sürece bu aramalarda
 * görünmüyoruz.
 *
 * `kapsam` alanı hangi coğrafyada satılabildiğini söyler ve bu bir pazarlama
 * tercihi değil mevzuat sonucudur:
 *   - 'saha'    → OSGB görevlendirmesi gerektirir, İstanbul + komşu iller.
 *   - 'ulusal'  → danışmanlık/dokümantasyon/eğitim, coğrafi sınır yok.
 */
export type Hizmet = {
  slug: string;
  ad: string;
  h1: string;
  ozet: string;
  kapsam: 'saha' | 'ulusal';
  /** Sayfanın ilk paragrafı — doğrudan cevap, pazarlama cümlesi değil. */
  giris: string;
  /** "Şunu yapıyoruz" listesi. */
  kapsamMaddeleri: { baslik: string; aciklama: string }[];
  /** Yanlış anlaşılmayı önleyen, mevzuata dayalı uyarı. Boş bırakılabilir. */
  onemliNot?: string;
  sss: { soru: string; cevap: string }[];
};

export const hizmetler: Hizmet[] = [
  {
    slug: 'risk-degerlendirmesi',
    ad: 'Risk değerlendirmesi',
    h1: 'Risk Değerlendirmesi ve Risk Analizi Desteği',
    ozet:
      'Saha incelemesi, tehlike tespiti ve risk değerlendirme sürecinin kurulması. İşveren ekibine uzman desteği.',
    kapsam: 'ulusal',
    giris:
      'Risk değerlendirmesi, 6331 sayılı Kanun kapsamındaki her işyeri için zorunludur ve ' +
      'işyerinde yürütülen faaliyetlerin tehlikelerini belirleyip bunları kabul edilebilir ' +
      'düzeye indirmeyi amaçlar. Süreç tek seferlik bir evrak işi değil, işyeri değiştikçe ' +
      'güncellenen yaşayan bir kayıttır.',
    onemliNot:
      'Risk değerlendirmesi, işverenin oluşturduğu ekip tarafından yapılır; ekipte işveren ' +
      'veya vekili, iş güvenliği uzmanı ve işyeri hekimi, çalışan temsilcisi ve destek ' +
      'elemanı yer alır. Mevzuat bu sürece dışarıdan uzman desteği alınmasına izin verir. ' +
      'Bu nedenle biz "dosyanızı hazırlayıp teslim ediyoruz" demiyoruz: süreci kurar, saha ' +
      'incelemesini yapar ve ekibe uzman desteği veririz. Yerinde inceleme yapılmadan ' +
      'hazırlanan bir dosya, denetimde ve kaza sonrasında işvereni koruyamaz.',
    kapsamMaddeleri: [
      { baslik: 'Saha incelemesi', aciklama: 'Üretim akışı, makine parkı, kimyasallar ve çalışma ortamı yerinde görülür.' },
      { baslik: 'Tehlike tespiti', aciklama: 'Her bölüm ve görev için tehlike kaynakları listelenir.' },
      { baslik: 'Risk derecelendirme', aciklama: 'Olasılık ve şiddet üzerinden puanlama; hangi riskin önce kapatılacağı netleşir.' },
      { baslik: 'Önlem planı', aciklama: 'Sorumlu, termin ve maliyet içeren uygulanabilir aksiyon listesi.' },
      { baslik: 'Ekip desteği', aciklama: 'İşveren ekibinin sürece katılımı sağlanır; kayıt işverenin kendi kaydı olur.' },
    ],
    sss: [
      { soru: 'Risk değerlendirmesi kaç yılda bir yenilenir?', cevap: 'Tehlike sınıfına göre: az tehlikeli işyerlerinde en geç 6, tehlikeli işyerlerinde 4, çok tehlikeli işyerlerinde 2 yılda bir yenilenir. Ayrıca işyerinde taşınma, teknoloji değişikliği, iş kazası veya meslek hastalığı gibi durumlarda süresinden önce yenilenir.' },
      { soru: 'Risk değerlendirmesini kim hazırlar?', cevap: 'İşverenin oluşturduğu ekip hazırlar. Ekipte işveren veya vekili, iş güvenliği uzmanı ve işyeri hekimi, çalışan temsilcisi ve destek elemanı bulunur. Dışarıdan uzman desteği alınabilir.' },
      { soru: 'Risk analizi ile risk değerlendirmesi aynı şey mi?', cevap: 'Günlük kullanımda aynı şey kastedilir. Mevzuattaki resmî terim "risk değerlendirmesi"dir; "risk analizi" halk arasında yerleşmiş karşılığıdır.' },
      { soru: 'Risk değerlendirmesi olmayan işyerine ne olur?', cevap: 'İdari para cezası uygulanır ve ceza her ay tekrar edebilir. Bir iş kazası durumunda risk değerlendirmesinin bulunmaması işverenin kusur değerlendirmesini doğrudan ağırlaştırır.' },
    ],
  },
  {
    slug: 'acil-durum-eylem-plani',
    ad: 'Acil durum eylem planı',
    h1: 'Acil Durum Eylem Planı Hazırlama',
    ozet:
      'Yangın, deprem, kimyasal sızıntı ve tahliye senaryoları; ekiplerin kurulması, tatbikat ve tahliye planı.',
    kapsam: 'ulusal',
    giris:
      'Acil durum eylem planı, 6331 sayılı Kanun kapsamındaki bütün işyerlerinde — çalışan ' +
      'sayısına bakılmaksızın — hazırlanmak zorundadır. Plan, işyerinde olması muhtemel acil ' +
      'durumları önceden belirler; önleme, koruma, tahliye ve ilk yardım adımlarını yazılı ' +
      'hâle getirir.',
    kapsamMaddeleri: [
      { baslik: 'Acil durum tespiti', aciklama: 'Yangın, patlama, kimyasal yayılım, doğal afet ve sabotaj senaryoları işyerine özgü çıkarılır.' },
      { baslik: 'Önleme ve koruma', aciklama: 'Her senaryo için alınacak önlemler ve müdahale yöntemi belirlenir.' },
      { baslik: 'Ekiplerin kurulması', aciklama: 'Söndürme, kurtarma, koruma ve ilk yardım ekipleri görevlendirilir ve eğitilir.' },
      { baslik: 'Tahliye planı', aciklama: 'Kat planları üzerinde kaçış yolları, toplanma yerleri ve işaretlemeler.' },
      { baslik: 'Tatbikat', aciklama: 'Planın gerçekte işleyip işlemediği tatbikatla sınanır ve raporlanır.' },
    ],
    sss: [
      { soru: 'Acil durum planı kaç yılda bir yenilenir?', cevap: 'Tehlike sınıfına göre: çok tehlikeli işyerlerinde en geç 2, tehlikeli işyerlerinde 4, az tehlikeli işyerlerinde 6 yılda bir yenilenir. İşyerinde acil durumu etkileyecek bir değişiklik olduğunda süresinden önce güncellenir.' },
      { soru: 'Tatbikat ne sıklıkla yapılmalı?', cevap: 'Acil durum planı kapsamında yılda en az bir kez tatbikat yapılması ve raporlanması gerekir.' },
      { soru: 'Çalışan sayısı az olan işyerlerinde de zorunlu mu?', cevap: 'Evet. Acil durum planı yükümlülüğü çalışan sayısına bağlı değildir; kanun kapsamındaki her işyeri için geçerlidir.' },
    ],
  },
  {
    slug: 'saglik-ve-guvenlik-plani',
    ad: 'Sağlık ve güvenlik planı',
    h1: 'Sağlık ve Güvenlik Planı Hazırlama',
    ozet:
      'Yapı işlerinde zorunlu sağlık ve güvenlik planı; şantiye özelinde risk, önlem ve koordinasyon.',
    kapsam: 'ulusal',
    giris:
      'Yapı işlerinde, işe başlamadan önce sağlık ve güvenlik planı hazırlanır. Plan, ' +
      'şantiyedeki işlerin niteliğine göre öngörülen riskleri, alınacak önlemleri ve farklı ' +
      'işverenlerin aynı sahada çalışması hâlinde koordinasyonun nasıl kurulacağını belirler.',
    kapsamMaddeleri: [
      { baslik: 'Proje incelemesi', aciklama: 'İmalat kalemleri, iş programı ve saha koşulları üzerinden risklerin çıkarılması.' },
      { baslik: 'Yüksekte çalışma', aciklama: 'İskele, platform, korkuluk ve düşme durdurma sistemlerinin planlanması.' },
      { baslik: 'Kazı ve zemin', aciklama: 'Şev, iksa, göçük riski ve yeraltı hatlarına ilişkin önlemler.' },
      { baslik: 'Kaldırma ve makine', aciklama: 'Vinç, forklift ve iş makinelerinin çalışma alanı ayrımı.' },
      { baslik: 'Alt yüklenici koordinasyonu', aciklama: 'Aynı sahada birden fazla işverenin çalışması hâlinde sorumluluk sınırları.' },
    ],
    sss: [
      { soru: 'Sağlık ve güvenlik planı hangi işlerde zorunlu?', cevap: 'Yapı işlerinde hazırlanması öngörülür. Plan, işe başlamadan önce hazırlanır ve şantiye ilerledikçe güncellenir.' },
      { soru: 'Planı kim hazırlar?', cevap: 'Proje sorumlusu veya işveren tarafından, sağlık ve güvenlik koordinatörü aracılığıyla hazırlanır. Bu süreçte iş güvenliği uzmanından destek alınır.' },
      { soru: 'Risk değerlendirmesinden farkı ne?', cevap: 'Risk değerlendirmesi işyerinin genel tehlikelerini ele alır; sağlık ve güvenlik planı ise belirli bir yapı işinin kendi aşamalarına ve sahasına özgüdür.' },
    ],
  },
  {
    slug: 'is-guvenligi-uzmanligi',
    ad: 'İş güvenliği uzmanlığı',
    h1: 'İş Güvenliği Uzmanı Hizmeti',
    ozet: 'Görevlendirme, saha denetimi, yıllık çalışma planı ve İSG-KATİP kaydı.',
    kapsam: 'saha',
    giris:
      'İş güvenliği uzmanı görevlendirmesi, 6331 sayılı Kanun kapsamındaki işyerleri için ' +
      'zorunludur. Uzmanın işyerinde geçireceği asgari süre, çalışan sayısı ve tehlike ' +
      'sınıfına göre hesaplanır; görevlendirme İSG-KATİP üzerinden kayda geçer.',
    kapsamMaddeleri: [
      { baslik: 'Periyodik saha ziyareti', aciklama: 'İşyerinin tehlike sınıfına göre belirlenen sürelerle yerinde denetim.' },
      { baslik: 'Risk değerlendirmesi desteği', aciklama: 'İşveren ekibine uzman katılımı ve teknik destek.' },
      { baslik: 'Yıllık çalışma planı', aciklama: 'Eğitim, tatbikat, ölçüm ve denetim takviminin yazılı hâle getirilmesi.' },
      { baslik: 'Yıllık değerlendirme raporu', aciklama: 'Yıl içinde yapılanların ve açık kalan maddelerin raporlanması.' },
      { baslik: 'İSG-KATİP kaydı', aciklama: 'Görevlendirmenin sistem üzerinden kayda geçirilmesi ve takibi.' },
    ],
    sss: [
      { soru: 'İş güvenliği uzmanı ne kadar süre bulunmak zorunda?', cevap: 'Süre çalışan başına ve tehlike sınıfına göre hesaplanır: az tehlikeli işyerlerinde çalışan başına ayda en az 10 dakika, tehlikeli işyerlerinde 20 dakika, çok tehlikeli işyerlerinde 40 dakika.' },
      { soru: 'Hangi sınıf uzman hangi işyerine bakabilir?', cevap: 'C sınıfı belgesi az tehlikeli, B sınıfı az ve tehlikeli, A sınıfı ise bütün tehlike sınıflarındaki işyerlerinde görev yapabilir.' },
      { soru: 'Görevlendirme nasıl resmileşir?', cevap: 'Sözleşme yapıldıktan sonra görevlendirme İSG-KATİP üzerinden kaydedilir. Denetimde ilk bakılan kayıt budur.' },
    ],
  },
  {
    slug: 'isyeri-hekimligi',
    ad: 'İşyeri hekimliği',
    h1: 'İşyeri Hekimi Hizmeti',
    ozet: 'İşe giriş ve periyodik muayeneler, sağlık gözetimi, aşı ve ilk yardım organizasyonu.',
    kapsam: 'saha',
    giris:
      'İşyeri hekimi görevlendirmesi kanun kapsamındaki işyerleri için zorunludur. Hekim, ' +
      'çalışanların işe giriş ve periyodik muayenelerini yapar, sağlık gözetimi kayıtlarını ' +
      'tutar ve işyeri ortamından kaynaklanan sağlık risklerini değerlendirir.',
    kapsamMaddeleri: [
      { baslik: 'İşe giriş muayenesi', aciklama: 'Çalışanın yapacağı işe uygunluğunun değerlendirilmesi ve rapora bağlanması.' },
      { baslik: 'Periyodik muayene', aciklama: 'Maruziyete göre belirlenen aralıklarla tekrarlanan sağlık kontrolleri.' },
      { baslik: 'Sağlık gözetimi kayıtları', aciklama: 'Kişisel sağlık dosyalarının mevzuata uygun tutulması.' },
      { baslik: 'İlk yardım organizasyonu', aciklama: 'İlk yardımcı sayısı, malzeme ve müdahale düzeninin kurulması.' },
      { baslik: 'Mobil sağlık taraması', aciklama: 'Muayenelerin işyerinde yapılması; vardiya kaybı olmadan.' },
    ],
    sss: [
      { soru: 'İşyeri hekimi ne kadar süre bulunmak zorunda?', cevap: 'Çalışan başına ayda en az: az tehlikeli işyerlerinde 5 dakika, tehlikeli işyerlerinde 10 dakika, çok tehlikeli işyerlerinde 15 dakika.' },
      { soru: 'Periyodik muayene ne sıklıkla yapılır?', cevap: 'En geç: az tehlikeli işyerlerinde 5, tehlikeli işyerlerinde 3, çok tehlikeli işyerlerinde 1 yılda bir. Maruziyet durumuna göre daha sık olabilir.' },
      { soru: 'Muayeneler işyerinde yapılabilir mi?', cevap: 'Evet. Mobil sağlık aracıyla işe giriş ve periyodik muayeneler işyerinde yapılabilir; çalışanların tek tek hastaneye gitmesi gerekmez.' },
    ],
  },
  {
    slug: 'isg-danismanligi',
    ad: 'İSG danışmanlığı',
    h1: 'İSG Danışmanlığı ve Dokümantasyon — Türkiye Geneli',
    ozet:
      'Risk değerlendirmesi desteği, acil durum planı, sağlık güvenlik planı, İSG dokümantasyonu ve uzaktan eğitim. 81 il.',
    kapsam: 'ulusal',
    giris:
      'OSGB görevlendirmesi il sınırlıdır; danışmanlık ve dokümantasyon değildir. Saha ' +
      'hizmeti kapsamımız dışındaki illerde bulunan işyerlerine risk değerlendirmesi ' +
      'desteği, acil durum planı, sağlık ve güvenlik planı, İSG dokümantasyonu ve uzaktan ' +
      'eğitim verebiliyoruz.',
    onemliNot:
      'Bu hat, iş güvenliği uzmanı veya işyeri hekimi görevlendirmesinin yerine geçmez. ' +
      'Görevlendirme yükümlülüğünüz varsa bulunduğunuz ilde yetkili bir OSGB ile ' +
      'sözleşme yapmanız gerekir; biz o hattı doldurma iddiasında değiliz.',
    kapsamMaddeleri: [
      { baslik: 'Risk değerlendirmesi desteği', aciklama: 'Uzaktan ve gerektiğinde yerinde; işveren ekibine teknik destek.' },
      { baslik: 'Acil durum eylem planı', aciklama: 'Senaryo, ekip, tahliye planı ve tatbikat kurgusu.' },
      { baslik: 'Sağlık ve güvenlik planı', aciklama: 'Yapı işleri için şantiyeye özgü plan.' },
      { baslik: 'İSG dokümantasyonu', aciklama: 'Yıllık çalışma planı, değerlendirme raporu, talimatlar ve tutanak setleri.' },
      { baslik: 'Uzaktan İSG eğitimi', aciklama: 'Zorunlu temel eğitim ve yenileme; katılım tutanağı ve Ek-2 belgesi.' },
    ],
    sss: [
      { soru: 'Hangi illere hizmet veriyorsunuz?', cevap: 'Danışmanlık, dokümantasyon ve eğitim hizmetlerinde coğrafi sınır yoktur; 81 ile hizmet veriyoruz. OSGB görevlendirmesi ise İstanbul, Kocaeli ve Tekirdağ ile sınırlıdır.' },
      { soru: 'Bu hizmet OSGB sözleşmesinin yerine geçer mi?', cevap: 'Hayır. İş güvenliği uzmanı ve işyeri hekimi görevlendirmesi ayrı bir yükümlülüktür ve bulunduğunuz ilde yetkili bir OSGB ile yapılır.' },
    ],
  },
  {
    slug: 'is-hijyeni-olcumleri',
    ad: 'İş hijyeni ölçümleri',
    h1: 'İş Hijyeni Ölçüm, Test ve Analizleri',
    ozet:
      'Gürültü, toz, kimyasal maruziyet, titreşim, aydınlatma ve termal konfor ölçümleri; yetkili laboratuvar üzerinden.',
    kapsam: 'saha',
    giris:
      'Risk değerlendirmesinde "gürültü yüksek" demek yetmez; maruziyetin sınır değerin ' +
      'altında olup olmadığı ölçümle gösterilir. İş hijyeni ölçümleri, işyeri ortamındaki ' +
      'fiziksel ve kimyasal etkenlerin çalışan üzerindeki maruziyetini sayıyla ortaya koyar ' +
      've hem risk değerlendirmesinin hem de denetimlerin dayanağı olur.',
    onemliNot:
      'İş hijyeni ölçüm, test ve analizleri yalnızca Çalışma ve Sosyal Güvenlik Bakanlığınca ' +
      'yetkilendirilmiş laboratuvarlarca yapılabilir. Ölçümler yetkili laboratuvar ' +
      'üzerinden yürütülür; biz ölçüm planını kurar, sonucu risk değerlendirmenize ve ' +
      'aksiyon planınıza bağlarız.',
    kapsamMaddeleri: [
      { baslik: 'Gürültü maruziyeti', aciklama: 'Kişisel maruziyet ve ortam gürültüsü ölçümü; sınır değerle karşılaştırma.' },
      { baslik: 'Toz ve kimyasal maruziyet', aciklama: 'Solunabilir toz, uçucu organik bileşikler ve işyerine özgü kimyasallar.' },
      { baslik: 'Titreşim', aciklama: 'El-kol ve bütün vücut titreşimi maruziyeti.' },
      { baslik: 'Aydınlatma ve termal konfor', aciklama: 'Çalışma alanlarında aydınlatma düzeyi, sıcaklık, nem ve hava akımı.' },
      { baslik: 'Raporlama ve aksiyon', aciklama: 'Sonuçların risk değerlendirmesine işlenmesi ve gereken önlemlerin planlanması.' },
    ],
    sss: [
      { soru: 'Ölçümleri ne sıklıkla yaptırmalıyım?', cevap: 'Sıklık tek bir sayıyla verilemez; işyerinin tehlike sınıfına, ölçülen etkene ve risk değerlendirmesinin sonucuna göre belirlenir. İşyerinde ortam, süreç veya ekipman değiştiğinde ölçüm yenilenir. İşyerinize özgü ölçüm planını çıkarıp yazılı veriyoruz.' },
      { soru: 'Ölçümü siz mi yapıyorsunuz?', cevap: 'Ölçümler, mevzuat gereği Bakanlıkça yetkilendirilmiş laboratuvarlarca yapılır. Biz ölçüm ihtiyacını belirler, planı kurar, yetkili laboratuvarla süreci yürütür ve çıkan sonucu İSG dosyanıza işleriz.' },
      { soru: 'Ölçüm sonucu sınır değeri aşarsa ne olur?', cevap: 'Aşım tespit edilen etken için önlem sıralaması uygulanır: önce kaynakta kontrol, sonra ortamda kontrol, en son kişisel koruyucu donanım. Alınan önlem sonrası ölçüm tekrarlanarak etkisi gösterilir.' },
    ],
  },
  {
    slug: 'periyodik-kontroller',
    ad: 'Periyodik kontroller',
    h1: 'İş Ekipmanlarının Periyodik Kontrolleri',
    ozet:
      'Kaldırma araçları, basınçlı kaplar, elektrik tesisatı ve tezgâhların yetkili kişilerce periyodik muayenesi.',
    kapsam: 'saha',
    giris:
      'İş ekipmanları, kullanım sırasında oluşan tehlikelerin zamanında görülebilmesi için ' +
      'düzenli aralıklarla kontrol edilir. Periyodik kontrol bir formalite değil; kaldırma ' +
      'aracının halatı, kompresörün emniyet ventili veya topraklama direnci ancak ölçülerek ' +
      'güvenli sayılabilir. Kontroller yapılmadığında hem kaza riski hem de denetimde ' +
      'doğrudan tespit doğar.',
    onemliNot:
      'Periyodik kontroller, ekipmanın türüne göre mevzuatta tanımlanmış yetkili kişilerce ' +
      'yapılır ve raporlanır. Kontrol aralıkları ekipmana göre değişir; üretici talimatında ' +
      'daha kısa bir süre öngörülmüşse o süre esas alınır.',
    kapsamMaddeleri: [
      { baslik: 'Kaldırma ve iletme ekipmanları', aciklama: 'Vinç, caraskal, forklift, asansör, platform ve sapanlar.' },
      { baslik: 'Basınçlı kaplar ve tesisatlar', aciklama: 'Kompresör, hava tankı, kazan, hidrofor ve emniyet donanımları.' },
      { baslik: 'Elektrik tesisatı ve topraklama', aciklama: 'Topraklama direnci, kaçak akım koruma ve pano ölçümleri.' },
      { baslik: 'Tezgâh ve makineler', aciklama: 'Koruyucu tertibat, acil stop ve güvenlik donanımı kontrolü.' },
      { baslik: 'Rapor ve takip takvimi', aciklama: 'Her ekipman için rapor ve bir sonraki kontrol tarihini gösteren takvim.' },
    ],
    sss: [
      { soru: 'Kontrol aralığı ne kadar?', cevap: 'Aralık ekipmana göre değişir ve mevzuatta ekipman türü bazında tanımlanmıştır; üretici daha kısa bir süre öngörmüşse üreticinin süresi uygulanır. İşyerinizdeki ekipman listesini çıkarıp her biri için geçerli aralığı yazılı veriyoruz.' },
      { soru: 'Kontrolü kim yapabilir?', cevap: 'Ekipmanın türüne göre mevzuatta belirlenmiş yetkili kişilerce yapılır. Kontrolü yapan kişinin yetkisi, düzenlenen raporun geçerliliğinin de şartıdır.' },
      { soru: 'Raporu kaybedersek ne olur?', cevap: 'Denetimde ibraz edilemeyen rapor, yapılmamış kontrol gibi değerlendirilir. Kontrol raporlarını ekipman bazında dosyalayıp yenileme tarihlerini takvime bağlıyoruz.' },
    ],
  },
  {
    slug: 'patlamadan-korunma-dokumani',
    ad: 'Patlamadan korunma dokümanı',
    h1: 'Patlamadan Korunma Dokümanı (PKD)',
    ozet:
      'Patlayıcı ortam oluşabilecek işyerlerinde zorunlu doküman: bölge sınıflandırması, risk değerlendirmesi ve önlem planı.',
    kapsam: 'ulusal',
    giris:
      'Yanıcı gaz, buhar, sis veya yanıcı toz bulutunun oluşabildiği işyerlerinde işveren, ' +
      'patlama risklerini değerlendirip patlamadan korunma dokümanı hazırlamakla yükümlüdür. ' +
      'Doküman; hangi bölgelerde patlayıcı ortam oluşabileceğini, bu bölgelerin nasıl ' +
      'sınıflandırıldığını, alınan önlemleri ve bölgede kullanılacak ekipmanın uygunluğunu ' +
      'gösterir.',
    onemliNot:
      'Patlamadan korunma dokümanı işyerine özgüdür; şablon doldurarak hazırlanamaz. ' +
      'Bölge sınıflandırması yerinde inceleme, proses bilgisi ve malzeme güvenlik bilgi ' +
      'formlarının birlikte değerlendirilmesini gerektirir.',
    kapsamMaddeleri: [
      { baslik: 'Patlayıcı ortam tespiti', aciklama: 'Yanıcı madde envanteri, proses incelemesi ve ortam koşullarının değerlendirilmesi.' },
      { baslik: 'Bölge sınıflandırması', aciklama: 'Gaz ve toz için bölgelerin belirlenmesi ve krokilendirilmesi.' },
      { baslik: 'Patlama riski değerlendirmesi', aciklama: 'Tutuşma kaynakları, olasılık ve sonuçların değerlendirilmesi.' },
      { baslik: 'Önlem ve ekipman uygunluğu', aciklama: 'Havalandırma, topraklama, statik elektrik önlemleri ve bölgeye uygun ekipman seçimi.' },
      { baslik: 'Doküman ve güncelleme', aciklama: 'Dokümanın hazırlanması; işyerinde değişiklik olduğunda gözden geçirilmesi.' },
    ],
    sss: [
      { soru: 'Hangi işyerlerinde zorunlu?', cevap: 'Yanıcı gaz, buhar, sis veya yanıcı toz nedeniyle patlayıcı ortam oluşma ihtimali bulunan her işyerinde zorunludur. Boyahane, un ve yem tesisleri, akaryakıt istasyonları, kimyasal depoları ve ahşap işleme atölyeleri sık karşılaşılan örneklerdir.' },
      { soru: 'Risk değerlendirmesi yaptırdık, yine de gerekli mi?', cevap: 'Evet. Patlamadan korunma dokümanı, genel risk değerlendirmesinden ayrı ve ona ek bir yükümlülüktür; patlayıcı ortam riskini özel olarak ele alır.' },
      { soru: 'Doküman ne zaman yenilenir?', cevap: 'İşyerinde, iş ekipmanında veya organizasyonda önemli bir değişiklik olduğunda gözden geçirilir ve gerekiyorsa güncellenir.' },
    ],
  },
  {
    slug: 'mesleki-yeterlilik-belgesi',
    ad: 'Mesleki yeterlilik belgesi',
    h1: 'Mesleki Yeterlilik Belgesi (MYK) Süreç Yönetimi',
    ozet:
      'MYK tebliğleriyle belge zorunluluğu getirilen tehlikeli ve çok tehlikeli mesleklerde belgesiz çalıştırma yasak. Hangi personelin hangi belgeyi alması gerektiğini çıkarıp sınav ve belgelendirme sürecini yürütüyoruz.',
    kapsam: 'ulusal',
    giris:
      '6645 sayılı Kanunu ile 5544 sayılı Mesleki Yeterlilik Kurumu Kanunu’na eklenen hüküm gereği; ' +
      'tehlikeli ve çok tehlikeli işlerden olup Bakanlıkça yayımlanan tebliğlerde sayılan mesleklerde, ' +
      'MYK Mesleki Yeterlilik Belgesi olmayan kişiler çalıştırılamaz. Bu, iş güvenliği eğitiminden ' +
      'ayrı ve ona ek bir zorunluluktur: çalışanınız temel İSG eğitimini almış olsa bile, mesleği ' +
      'tebliğ listesindeyse belgesi yoksa o işi yapamaz.',
    onemliNot:
      'Belgeyi biz vermiyoruz — veremeyiz. MYK belgesi yalnızca Mesleki Yeterlilik Kurumu tarafından ' +
      'yetkilendirilmiş belgelendirme kuruluşlarınca, teorik ve uygulamalı sınav sonucunda düzenlenir. ' +
      'Bizim yaptığımız iş şu: personelinizi meslek bazında listelemek, hangisinin belgeye tabi ' +
      'olduğunu tebliğlerden çıkarmak, yetkili kuruluşla sınav organizasyonunu kurmak ve süreci ' +
      'takip etmek. Belgesi çıkanların takibini de yapıyoruz, çünkü belgelerin geçerlilik süresi var.',
    kapsamMaddeleri: [
      { baslik: 'Personel–meslek eşleştirmesi', aciklama: 'Çalışan listeniz meslek kodlarıyla eşleştirilir; kimin belgeye tabi olduğu net biçimde çıkar.' },
      { baslik: 'Tebliğ kontrolü', aciklama: 'Zorunlu meslekler listesi tebliğlerle genişliyor; liste her seferinde güncel hâliyle kontrol edilir.' },
      { baslik: 'Sınav organizasyonu', aciklama: 'Yetkilendirilmiş belgelendirme kuruluşuyla teorik ve uygulamalı sınav planlaması.' },
      { baslik: 'Teşvik takibi', aciklama: 'İşsizlik Sigortası Fonu’ndan karşılanan sınav ve belge ücreti iadesi süreci izlenir.' },
      { baslik: 'Belge geçerlilik takvimi', aciklama: 'Belgelerin geçerlilik süresi ve yenileme tarihleri takip edilir; süresi dolan personel önceden bildirilir.' },
    ],
    sss: [
      {
        soru: 'Hangi mesleklerde mesleki yeterlilik belgesi zorunlu?',
        cevap:
          'Tehlikeli ve çok tehlikeli işlerden olup Bakanlıkça yayımlanan tebliğlerde sayılan meslekler. ' +
          'Liste tebliğlerle kademeli olarak genişledi; inşaatta ahşap kalıpçı, betonarme demirci, ' +
          'inşaat boyacısı, alçı levha uygulayıcısı, duvarcı, iskele kurulum elemanı; metal ve makinede ' +
          'kaynakçı, CNC operatörü, makine bakımcı, endüstriyel boru montajcısı; elektrikte elektrik ' +
          'tesisatçısı ve pano montajcısı sık karşılaşılan örnekler. Sizin personelinizin hangi ' +
          'meslek koduna girdiğini listeyle birlikte kontrol ediyoruz.',
      },
      {
        soru: 'Belgesiz çalıştırmanın yaptırımı ne?',
        cevap:
          'Belgesi olmayan her bir kişi için işverene idari para cezası uygulanır ve ceza kişi başına ' +
          'hesaplandığı için birden fazla personelde hızla büyür. Denetim Çalışma ve Sosyal Güvenlik ' +
          'Bakanlığı iş müfettişlerince yapılır.',
      },
      {
        soru: 'Sınav ve belge ücretini kim ödüyor?',
        cevap:
          'Tehlikeli ve çok tehlikeli işlerdeki zorunlu mesleklerde sınav ve belge ücreti, şartları ' +
          'sağlayan adaylar için İşsizlik Sigortası Fonu’ndan karşılanır. Yani belge çoğu durumda ' +
          'işverene ek maliyet çıkarmaz; asıl maliyet süreç yönetilmediğinde ortaya çıkıyor.',
      },
      {
        soru: 'Ustalık belgem var, MYK belgesi yerine geçer mi?',
        cevap:
          'Hayır. Ustalık belgesi Millî Eğitim Bakanlığı mevzuatına, MYK Mesleki Yeterlilik Belgesi ise ' +
          '5544 sayılı Kanun’a dayanır; biri diğerinin yerine geçmez. Mesleğiniz tebliğ listesindeyse ' +
          'MYK belgesi ayrıca gerekir.',
      },
      {
        soru: 'Belge kaç yıl geçerli?',
        cevap:
          'Geçerlilik süresi ilgili ulusal yeterlilikte belirlenir ve mesleğe göre değişir; süre ' +
          'dolduğunda yenileme sınavı veya kanıt değerlendirmesi gerekir. Bu yüzden belgeleri tek ' +
          'seferlik iş gibi değil, takvimli bir takip işi olarak yürütüyoruz.',
      },
    ],
  },
  {
    slug: 'yangin-egitimi-ve-tatbikat',
    ad: 'Yangın eğitimi ve tatbikat',
    h1: 'Yangın Eğitimi, Tahliye ve Acil Durum Tatbikatı',
    ozet:
      'Yılda en az bir kez zorunlu olan tatbikatın senaryosu, uygulaması ve raporu. Söndürme cihazı kullanımı uygulamalı anlatılır.',
    kapsam: 'ulusal',
    giris:
      'Acil durumlar yönetmeliği, hazırlanan acil durum planının gerçekten işleyip işlemediğini ' +
      'görmek için işyerlerinde yılda en az bir defa tatbikat yapılmasını zorunlu tutar. ' +
      'Tatbikat, dosyaya konulacak bir tutanak üretmek için değil; alarm duyulduğunda kimin ne ' +
      'yapacağının gerçekten bilindiğini ölçmek için yapılır. Tahliye süresini ölçmeyen bir ' +
      'tatbikat, yapılmamış sayılır.',
    onemliNot:
      'Tatbikat ve yangın eğitimi, acil durum eylem planının yerine geçmez; planın sınanmasıdır. ' +
      'Planı olmayan bir işyerinde tatbikat yapmak, sırayı ters çevirmek olur.',
    kapsamMaddeleri: [
      { baslik: 'Senaryo hazırlığı', aciklama: 'İşyerine özgü yangın, sızıntı veya deprem senaryosu; başlangıç noktası ve beklenen tepki belirlenir.' },
      { baslik: 'Ekip eğitimi', aciklama: 'Söndürme, kurtarma, koruma ve ilk yardım ekiplerine görev bazında anlatım.' },
      { baslik: 'Uygulamalı söndürme', aciklama: 'Yangın türüne göre doğru söndürücü seçimi ve cihazın gerçekten kullanılması.' },
      { baslik: 'Tahliye ve süre ölçümü', aciklama: 'Toplanma bölgesine tahliye, sayım ve geçen sürenin kaydı.' },
      { baslik: 'Tatbikat raporu', aciklama: 'Aksayan noktalar, düzeltici faaliyetler ve denetimde istenen kayıtların düzenlenmesi.' },
    ],
    sss: [
      {
        soru: 'Yangın tatbikatı yılda kaç kez yapılmalı?',
        cevap:
          'İşyerlerinde yılda en az bir defa tatbikat yapılması zorunludur. Binaların yangından ' +
          'korunması mevzuatı da yıllık tatbikat öngörür. Riskin yüksek olduğu işyerlerinde yılda ' +
          'bir kez alt sınırdır; uygulamada iki kez yapan işyerleri var.',
      },
      {
        soru: 'Tatbikat kaydı tutmak zorunda mıyız?',
        cevap:
          'Evet. Tatbikatın tarihi, katılımcıları, senaryosu, tahliye süresi ve tespit edilen ' +
          'aksaklıklar kayda geçirilir; bu kayıt denetimde ilk istenen belgelerdendir.',
      },
      {
        soru: 'Küçük bir ofisiz, yine de gerekli mi?',
        cevap:
          'Evet. Yükümlülük çalışan sayısına değil, işyeri olmaya bağlıdır. Az tehlikeli sınıftaki ' +
          'bir ofiste tatbikat daha kısa sürer ama yapılmamış olmaz.',
      },
      {
        soru: 'Yangın söndürme cihazlarının kontrolü bu hizmete dahil mi?',
        cevap:
          'Söndürücülerin periyodik kontrolü ve dolumu ayrı bir iştir; yetkili firmalarca yapılır. ' +
          'Tatbikat sırasında mevcut cihazların yerini, türünü ve son kontrol tarihini gözden ' +
          'geçirip eksikleri raporluyoruz.',
      },
    ],
  },
  {
    slug: 'ilk-yardim-egitimi',
    ad: 'İlk yardım eğitimi',
    h1: 'İşyerinde İlk Yardımcı Bulundurma ve İlk Yardım Eğitimi',
    ozet:
      'Az tehlikelide her 20, tehlikelide her 15, çok tehlikelide her 10 çalışan için bir ilk yardımcı zorunlu. Sertifikalı eğitim organizasyonu.',
    kapsam: 'ulusal',
    giris:
      'İlk yardım yönetmeliği, işyerlerinde belirli sayıda sertifikalı ilk yardımcı bulundurulmasını ' +
      'zorunlu kılar: az tehlikeli işyerlerinde her 20 çalışana, tehlikeli işyerlerinde her 15 ' +
      'çalışana, çok tehlikeli işyerlerinde her 10 çalışana en az bir ilk yardımcı. Bu sayı ' +
      'yuvarlanarak değil, yukarı doğru tamamlanarak hesaplanır — 12 çalışanı olan çok tehlikeli ' +
      'bir işyerinde iki ilk yardımcı gerekir.',
    onemliNot:
      'İlk yardım sertifikası yalnızca Sağlık Bakanlığı’nca yetkilendirilmiş ilk yardım eğitim ' +
      'merkezlerince düzenlenebilir; İSG eğitimi veren hiçbir kurum bu belgeyi kendi adına ' +
      'veremez. Biz eğitimi yetkili merkezle organize ediyor, kontenjan ve takvimi yönetiyoruz. ' +
      'Bunu açıkça yazıyoruz çünkü aksini ima eden teklifler sahada dolaşıyor ve sonunda ' +
      'geçersiz belgeyle kalan işveren oluyor.',
    kapsamMaddeleri: [
      { baslik: 'İhtiyaç hesabı', aciklama: 'Çalışan sayısı ve tehlike sınıfına göre kaç ilk yardımcı gerektiği çıkarılır.' },
      { baslik: 'Eğitim organizasyonu', aciklama: 'Yetkili ilk yardım eğitim merkeziyle tarih, kontenjan ve yer planlaması.' },
      { baslik: 'Temel ilk yardım eğitimi', aciklama: 'Yönetmelikte öngörülen sürede teorik ve uygulamalı eğitim; sonunda sınav.' },
      { baslik: 'Sertifika takibi', aciklama: 'Sertifikaların geçerlilik süresi izlenir, güncelleme eğitimi zamanı gelmeden hatırlatılır.' },
      { baslik: 'İşyeri uyumu', aciklama: 'İlk yardım dolabı içeriği ve ilk yardımcı listesinin görünür şekilde ilanı.' },
    ],
    sss: [
      {
        soru: 'İşyerinde kaç ilk yardımcı bulundurmam gerekiyor?',
        cevap:
          'Az tehlikeli işyerlerinde her 20 çalışan için, tehlikeli işyerlerinde her 15 çalışan için, ' +
          'çok tehlikeli işyerlerinde her 10 çalışan için en az bir sertifikalı ilk yardımcı. ' +
          'Hesap yukarı yuvarlanır: 35 çalışanı olan tehlikeli sınıftaki bir işyerinde üç ilk yardımcı gerekir.',
      },
      {
        soru: 'İlk yardım sertifikası kaç yıl geçerli?',
        cevap:
          'Sertifikanın geçerlilik süresi üç yıldır. Süre dolmadan güncelleme eğitimi alınmazsa ' +
          'sertifika geçerliliğini yitirir ve baştan temel eğitim gerekir.',
      },
      {
        soru: 'İlk yardım eğitimini İSG eğitimi yerine saydırabilir miyiz?',
        cevap:
          'Hayır. İkisi ayrı mevzuata dayanır ve birbirinin yerine geçmez. Çalışanın temel İSG ' +
          'eğitimi almış olması, işyerinde ilk yardımcı bulundurma zorunluluğunu ortadan kaldırmaz.',
      },
      {
        soru: 'Eğitimi siz mi veriyorsunuz?',
        cevap:
          'Eğitimi Sağlık Bakanlığı’nca yetkilendirilmiş ilk yardım eğitim merkezi veriyor; sertifikayı ' +
          'da o düzenliyor. Biz ihtiyaç hesabını çıkarıyor, merkezle organizasyonu kuruyor ve ' +
          'sertifika takvimini takip ediyoruz.',
      },
    ],
  },
];
