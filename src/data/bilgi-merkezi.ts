export interface BilgiMerkeziOgesi {
  soru: string;
  cevap: string;
  link?: string;
  linkMetni?: string;
}

/*
 * BAĞLANTI KURALI: Buradaki her `link` değeri sitede GERÇEKTEN bulunan bir
 * yola işaret etmek zorunda. İlk sürümde üç bağlantı var olmayan blog
 * slug'larına gidiyordu ve sayfa kullanıcıyı 404'e götürüyordu; biri
 * (`patlamadan-korunma-dokumani-pkd-nedir`) daha önce birleştirilip
 * yönlendirilmiş bir yazının eski adresiydi. Yeni bağlantı eklerken
 * `npm run build` sonrası kırık iç link taraması çalıştırın.
 */
export const bilgiMerkeziVerileri: BilgiMerkeziOgesi[] = [
  {
    soru: "İSG-Katip Nedir ve Ne İşe Yarar?",
    cevap: "İSG-Katip (İş Sağlığı ve Güvenliği Kayıt, Takip ve İzleme Programı), Çalışma ve Sosyal Güvenlik Bakanlığı tarafından iş sağlığı ve güvenliği hizmetlerinin e-Devlet üzerinden kayıt altına alınması, takip edilmesi ve izlenmesi amacıyla kurulan resmi bir sistemdir. OSGB atamaları, işyeri hekimi ve iş güvenliği uzmanı sözleşmeleri bu sistem üzerinden onaylanmak zorundadır.",
    link: "/blog/isg-katip-nedir/",
    linkMetni: "İSG-Katip Onayı Hakkında Detaylı Bilgi"
  },
  {
    soru: "Risk Değerlendirmesi Formu Nedir?",
    cevap: "İşyerinde var olan veya dışarıdan gelebilecek tehlikelerin belirlenmesi, bu tehlikelerin riske dönüşmesine yol açan faktörler ile tehlikelerden kaynaklanan risklerin analiz edilerek derecelendirilmesi ve kontrol tedbirlerinin kararlaştırılması amacıyla hazırlanan resmi rapordur. Bütün işyerleri için yasal bir zorunluluktur.",
    link: "/hizmetler/risk-degerlendirmesi",
    linkMetni: "Risk Değerlendirmesi Hizmetimiz"
  },
  {
    soru: "Acil Durum Eylem Planı (ADEP) Hangi Durumları Kapsar?",
    cevap: "Acil Durum Eylem Planı; yangın, deprem, sel, patlama, tehlikeli kimyasal sızıntısı, sabotaj ve ilk yardım gerektiren olaylar gibi işyerini veya çalışanları etkileyebilecek acil durumları kapsar. İşyerinin tehlike sınıfına göre belirli periyotlarla güncellenmesi zorunludur.",
    link: "/hizmetler/acil-durum-eylem-plani",
    linkMetni: "Acil Durum Eylem Planı Hazırlama"
  },
  {
    soru: "Tehlike Sınıfları Nelerdir ve Nasıl Öğrenilir?",
    cevap: "İşyerleri yapılan işin niteliğine göre Az Tehlikeli, Tehlikeli ve Çok Tehlikeli olmak üzere 3 sınıfa ayrılır. İşyerinizin tehlike sınıfını, NACE kodunuzu (SGK sicil numaranızın 2. hanesinden başlayan 6 haneli kod) kullanarak İSG-Katip sistemi üzerinden veya İSG Tehlike Sınıfları Tebliği listesinden öğrenebilirsiniz.",
  },
  {
    soru: "İşyeri Hekimi Bulundurma Zorunluluğu Hangi İşletmeleri Kapsar?",
    cevap: "6331 sayılı Kanun kapsamındaki iş yerleri, tehlike sınıfı ve çalışan sayısına bakılmaksızın işyeri hekimi görevlendirmekle yükümlüdür. Az tehlikeli sınıftaki elliden az çalışanı olan iş yerlerine ve kamu kurumlarına tanınan erteleme 31 Aralık 2024'te sona erdi. Tehlike sınıfı ve çalışan sayısı, zorunluluğun olup olmadığını değil ayda kaç dakika hizmet alınacağını belirler.",
    link: "/blog/isyeri-hekimi-zorunlulugu-2026/",
    linkMetni: "İşyeri Hekimi Zorunluluğu Makalesi"
  },
  {
    soru: "OSGB (Ortak Sağlık ve Güvenlik Birimi) Ne Demektir?",
    cevap: "OSGB, Çalışma ve Sosyal Güvenlik Bakanlığı tarafından yetkilendirilmiş; işyerlerine iş sağlığı ve güvenliği hizmetlerini (iş güvenliği uzmanı, işyeri hekimi, diğer sağlık personeli vb.) dışarıdan sağlamak üzere kurulan resmi kuruluşlardır.",
    link: "/hizmetler/is-guvenligi-uzmanligi",
    linkMetni: "İş Güvenliği Uzmanlığı Hizmetimiz"
  },
  {
    soru: "İşe Giriş Sağlık Raporu Nereden Alınır?",
    cevap: "İşe giriş sağlık raporları, tehlikeli ve çok tehlikeli sınıftaki işyerleri için zorunludur ve yalnızca işyerinin anlaşmalı olduğu Ortak Sağlık ve Güvenlik Biriminde (OSGB) görevli İşyeri Hekimleri tarafından verilebilir. Aile hekimlerinden veya normal polikliniklerden alınan raporlar geçerli değildir."
  },
  {
    soru: "Periyodik Kontrol ve Muayeneler Ne Sıklıkla Yapılmalıdır?",
    cevap: "İş ekipmanlarının (kaldırma araçları, basınçlı kaplar, elektrik tesisatı vb.) periyodik kontrolleri, ilgili yönetmelikte aksi belirtilmedikçe en geç yılda 1 (bir) defa yetkili kişiler (makine/elektrik mühendisleri vb.) tarafından yapılmak zorundadır.",
  },
  {
    soru: "Temel İSG Eğitimi Kaç Saat Sürer ve Ne Zaman Yenilenir?",
    cevap: "Çok tehlikeli sınıfta 16 saat (yılda 1 yenilenir), Tehlikeli sınıfta 12 saat (2 yılda 1 yenilenir), Az tehlikeli sınıfta 8 saat (3 yılda 1 yenilenir) temel iş sağlığı ve güvenliği eğitimi verilmesi zorunludur."
  },
  {
    soru: "Patlamadan Korunma Dokümanı (PKD) Kimler İçin Zorunludur?",
    cevap: "Patlayıcı ortam oluşma ihtimali bulunan iş yerlerinde işveren, patlama risklerini değerlendirip Patlamadan Korunma Dokümanı hazırlamakla yükümlüdür. Uygulamada en sık karşılaşılan örnekler akaryakıt istasyonları, kimya ve boya tesisleri, un ve yem fabrikaları ile ahşap işleme atölyeleridir; belirleyici olan sektörün adı değil, ortamda patlayıcı bir bulut oluşup oluşamayacağıdır.",
    link: "/blog/patlamadan-korunma-dokumani-kimler-icin/",
    linkMetni: "PKD Hakkında Kapsamlı Bilgi"
  },
  {
    soru: "İlliyet Bağı (Nedensellik Bağı) Nedir?",
    cevap: "İlliyet bağı, meydana gelen bir iş kazası veya meslek hastalığı ile işverenin aldığı veya almadığı iş sağlığı ve güvenliği önlemleri arasındaki sebep-sonuç ilişkisidir. Hukuki süreçlerde işverenin kusur oranını belirleyen en temel kavramdır."
  },
  {
    soru: "Kaçınılmazlık İlkesi Nedir?",
    cevap: "İşverenin mevzuatın gerektirdiği her türlü iş sağlığı ve güvenliği önlemini eksiksiz almasına ve tüm denetim mekanizmalarını işletmesine rağmen, öngörülemeyen ve engellenemeyen dış veya doğa faktörleri sebebiyle kazanın meydana gelmesidir. Bu durumda işverene kusur atfedilemez."
  },
  {
    soru: "Müteselsil Sorumluluk Nedir?",
    cevap: "Bir zararın birden fazla kişi tarafından birlikte karşılanma zorunluluğudur. İş Hukukunda en sık asıl işveren-alt işveren (taşeron) ilişkisinde görülür; alt işverenin işçisinin uğradığı kazadan, asıl işveren de alt işverenle birlikte müteselsilen sorumludur."
  },
  {
    soru: "Alt İşveren (Taşeron) Kimdir?",
    cevap: "Bir işverenden, işyerinde yürütülen mal veya hizmet üretimine ilişkin yardımcı işlerde veya asıl işin bir bölümünde uzmanlık gerektiren işlerde iş alan ve bu iş için kendi işçilerini görevlendiren işverendir. İSG mevzuatında asıl işverenle ortak sorumluluk taşır."
  },
  {
    soru: "Asıl İşveren Kimdir?",
    cevap: "İşyerinde asıl işi yürüten ve bu işin veya yardımcı işlerin bir kısmını başka bir işverene (alt işveren) devreden temel işverendir. Asıl işveren, kendi alanında çalışan tüm alt işverenlerin İSG önlemlerini koordineli şekilde denetlemekle yükümlüdür."
  },
  {
    soru: "LOTO (Etiketle - Kilitle) Nedir?",
    cevap: "Makine ve ekipmanların bakım ve onarımı sırasında, enerji kaynaklarının (elektrik, pnömatik, hidrolik) tamamen kesilerek asma kilit ve uyarı etiketleriyle fiziksel olarak kilitlenmesi sistemidir (Lockout/Tagout). Bakımcı dışındaki birinin makineyi kazara çalıştırmasını engeller."
  },
  {
    soru: "MSDS / SDS (Malzeme Güvenlik Bilgi Formu) Nedir?",
    cevap: "Kimyasal maddelerin içerikleri, tehlikeleri, taşınması, depolanması, dökülme/saçılma anında yapılacaklar ve ilk yardım müdahaleleri hakkında ayrıntılı bilgiler içeren, üretici tarafından Türkçe olarak sağlanması zorunlu teknik dokümandır."
  },
  {
    soru: "Odyometri (İşitme Testi) Nedir?",
    cevap: "Özellikle gürültülü (80 desibel ve üzeri) ortamlarda çalışan personelin işitme kaybı yaşayıp yaşamadığını tespit etmek için yapılan testtir. İşe girişlerde referans değer olarak alınması ve periyodik olarak tekrarlanması meslek hastalıklarının tespiti için kritiktir."
  },
  {
    soru: "SFT (Solunum Fonksiyon Testi) Nedir?",
    cevap: "Tozlu, dumanlı veya kimyasal buharlı ortamlarda (kaynak, döküm, marangozhane vb.) çalışan personelin akciğer kapasitesini ve solunum yollarında tıkanıklık olup olmadığını ölçen testtir. Akciğer hastalıklarının erken teşhisinde kullanılır."
  },
  {
    soru: "Pnömokonyoz Nedir?",
    cevap: "İşyerindeki inorganik tozların (silika, asbest, kömür tozu vb.) uzun süre solunması ve akciğerlerde birikmesi sonucu ortaya çıkan, geri dönüşü olmayan kalıcı bir meslek hastalığıdır. Düzenli SFT ve akciğer grafisi ile takip edilmelidir."
  },
  {
    soru: "İş Hijyeni Ne Demektir?",
    cevap: "Çalışma ortamında bulunan ve çalışanların sağlığını bozabilecek çevresel faktörlerin (toz, gürültü, titreşim, termal konfor, kimyasal buhar, aydınlatma) ölçülmesi, değerlendirilmesi ve kontrol altına alınması bilimidir."
  },
  {
    soru: "Termal Konfor Nedir?",
    cevap: "İşyerinde çalışanların büyük çoğunluğunun sıcaklık, nem, hava akım hızı ve termal radyasyon gibi iklimsel koşullar açısından kendilerini rahat hissettikleri ortam şartlarıdır. Aşırı sıcak veya aşırı soğuk ortamlar iş kazası riskini artırır."
  },
  {
    soru: "Biyolojik Risk Etmenleri Nelerdir?",
    cevap: "Herhangi bir enfeksiyona, alerjiye veya zehirlenmeye neden olabilen mikroorganizmalar, hücre kültürleri ve insan endoparazitleridir. Hastaneler, atık su tesisleri ve tarım işletmeleri en çok maruz kalınan işyerleridir."
  },
  {
    soru: "Fiziksel Risk Etmenleri Nelerdir?",
    cevap: "Çalışma ortamında bulunan gürültü, titreşim (vibrasyon), aydınlatma, termal konfor (sıcaklık/nem), radyasyon ve basınç gibi kimyasal veya biyolojik olmayan, ancak çalışanın sağlığını olumsuz etkileyen faktörlerdir."
  },
  {
    soru: "Ergonomi Nedir?",
    cevap: "İnsanın fiziksel ve psikolojik özelliklerini inceleyerek; makine, çalışma ortamı ve işin insana uygun hale getirilmesini amaçlayan bilim dalıdır. Masa başı çalışmalardaki duruş bozuklukları veya ağır yük kaldırma ergonomik risklerdir."
  },
  {
    soru: "ATEX (Patlayıcı Ortam) Nedir?",
    cevap: "Avrupa Birliğinin patlayıcı ortamlarla ilgili direktiflerinin kısa adıdır (Atmosphères Explosibles). Yanıcı gaz, buhar, sis veya tozların havayla karışarak oluşturduğu ve bir ateşleyici kaynakla karşılaştığında patlayabilen ortamlara verilen genel isimdir."
  },
  {
    soru: "Zone 0, Zone 1 ve Zone 2 Ne Anlama Gelir?",
    cevap: "Gaz veya buhar kaynaklı patlayıcı ortamların tehlike bölgeleridir. Zone 0 patlayıcı ortamın sürekli veya çok uzun süre bulunduğu alanları, Zone 1 normal çalışmada ara sıra patlayıcı ortam oluşabilen alanları, Zone 2 ise normal çalışmada patlayıcı ortam oluşması beklenmeyen, oluşsa bile çok kısa süren alanları ifade eder."
  },
  {
    soru: "İşin Durdurulması Hangi Durumlarda Uygulanır?",
    cevap: "İşyerindeki bina ve eklentilerde, çalışma yöntem ve şekillerinde veya iş ekipmanlarında çalışanlar için hayati tehlike oluşturan bir husus tespit edildiğinde, Bakanlık müfettişlerince bu tehlike giderilinceye kadar işyerinin bir bölümünde veya tamamında işin resmi olarak durdurulmasıdır."
  },
  {
    soru: "Asbest Nedir ve Neden Tehlikelidir?",
    cevap: "Isıya, aşınmaya ve kimyasallara dayanıklı olduğu için eski binalarda yalıtım malzemesi olarak sıkça kullanılan, ancak solunduğunda akciğer zarı kanseri (mezotelyoma) gibi ölümcül hastalıklara yol açan lifli bir mineraldir. Üretimi ve kullanımı yasaktır; sökümü özel uzmanlık gerektirir."
  },
  {
    soru: "Meslek Hastalığı Nedir?",
    cevap: "Çalışanın yürüttüğü işin niteliğine göre tekrarlanan bir sebeple veya işin yürütüm şartları yüzünden uğradığı geçici veya sürekli hastalık, bedensel veya ruhsal engellilik halleridir. İş kazası gibi anlık değildir, zaman içinde gelişir."
  },
];
