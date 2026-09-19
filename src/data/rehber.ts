/**
 * Rehber içerikleri — sitenin cevap motoru (AEO) katmanı.
 *
 * Bunlar blog yazısı değil, tek bir sorunun net cevabı. Yapı bilerek böyle:
 * hem Google'ın soru-cevap genişletmesi hem de LLM'lerin alıntıladığı biçim
 * "soru başlığı + kısa kesin cevap + gerekçe" kalıbıdır. Uzun giriş
 * paragrafları bu iki kanalda da işe yaramıyor.
 */
export type Rehber = {
  slug: string;
  soru: string;
  ozet: string;
  cevap: string;
  detay: string[];
};

export const rehberler: Rehber[] = [
  {
    slug: "osgb-zorunlu-mu",
    soru: "OSGB hizmeti almak zorunlu mu?",
    ozet: "6331 sayılı Kanun kapsamındaki her işyeri iş güvenliği uzmanı ve işyeri hekimi görevlendirmek zorundadır. Bunu kendi bünyesinde yapamayan işyerleri OSGB'den hizmet alır.",
    cevap:
      "Zorunlu olan OSGB'den hizmet almak değil, iş güvenliği uzmanı ve işyeri hekimi görevlendirmektir. " +
      "İşyeri bu kişileri kendi bünyesinde istihdam edebiliyorsa OSGB'ye gerek yoktur. " +
      "Pratikte küçük ve orta ölçekli işyerleri için tam zamanlı uzman ve hekim istihdamı anlamlı olmadığından hizmet OSGB'den alınır.",
    detay: [
      "Yükümlülük çalışan sayısına ve tehlike sınıfına göre değişen sürelerle hesaplanır.",
      "Çalışan sayısı ne olursa olsun çalışanlara temel İSG eğitimi verilmesi ayrıca zorunludur.",
      "Görevlendirmeler İSG-KATİP üzerinden kayıt altına alınır.",
    ],
  },
  {
    slug: "tehlike-sinifi-nedir",
    soru: "İşyerimin tehlike sınıfı nasıl belirlenir?",
    ozet: "Tehlike sınıfı işyerinin NACE koduna göre belirlenir; az tehlikeli, tehlikeli ve çok tehlikeli olmak üzere üç sınıf vardır.",
    cevap:
      "Sınıfı işveren seçmez; işyerinin asıl faaliyetine karşılık gelen NACE kodu belirler. " +
      "Aynı firmanın farklı adreslerdeki işyerleri farklı sınıfta olabilir: merkez ofis az tehlikeli, üretim tesisi çok tehlikeli olabilir. " +
      "Yükümlülüklerin neredeyse tamamı bu sınıfa bağlı olduğu için ilk netleşmesi gereken şey budur.",
    detay: [
      "Temel eğitim süresi sınıfa göre 8, 12 veya 16 ders saatidir.",
      "Uzaktan eğitimle kapatılabilecek konu başlıkları da sınıfa göre daralır.",
      "İş güvenliği uzmanının belge sınıfı (A, B, C) hangi tehlike sınıfına hizmet verebileceğini belirler.",
    ],
  },
  {
    slug: "isg-egitimi-uzaktan-verilebilir-mi",
    soru: "İSG eğitimi uzaktan verilebilir mi?",
    ozet: "Verilebilir, ama tamamı değil: Ek-1'in dördüncü konu başlığı tehlikeli ve çok tehlikeli işyerlerinde yüz yüze zorunludur.",
    cevap:
      "Çalışanların İSG Eğitimleri Yönetmeliği uzaktan eğitimi tanır. " +
      "Ek-1'deki ilk üç konu başlığı her işyerinde uzaktan, yüz yüze veya karma verilebilir. " +
      "Dördüncü başlık az tehlikeli işyerlerinde uzaktan verilebilirken tehlikeli ve çok tehlikeli işyerlerinde yüz yüze yapılır. " +
      "Yani az tehlikeli sınıfta eğitimin tamamı uzaktan tamamlanabilir; diğer sınıflarda karma bir takvim gerekir.",
    detay: [
      "Eğitimi verenler için coğrafi sınır yoktur; il sınırı OSGB saha hizmetine özgüdür.",
      "Eğitim sonunda katılım tutanağı ve Ek-2'deki forma uygun belge düzenlenir.",
      "Belgeler çalışanın özlük dosyasında saklanır.",
    ],
  },
];
