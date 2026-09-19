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
    h1: 'Risk Değerlendirmesi ve Risk Analizi Hazırlama Desteği',
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
      'incelemesini yapar ve ekibe uzman desteği veririz. Aksini vaat eden bir hizmet, ' +
      'denetimde işverenin elinde kalır.',
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
    h1: 'Sağlık ve Güvenlik Planı Hazırlama — İnşaat ve Şantiyeler',
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
];
