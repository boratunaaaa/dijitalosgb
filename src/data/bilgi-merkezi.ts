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
  }
];
