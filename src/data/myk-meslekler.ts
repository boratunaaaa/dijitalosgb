/**
 * MYK Mesleki Yeterlilik Belgesi zorunluluğu kapsamındaki mesleklerden örnekler.
 *
 * DİKKAT: Bu liste kesin ve tam liste DEĞİLDİR ve öyle sunulmaz. Zorunlu
 * meslekler Bakanlıkça yayımlanan tebliğlerle kademeli olarak belirlendi ve
 * yeni tebliğlerle genişliyor. Sayfada "şu kadar meslek" gibi bir rakam
 * verilmiyor; sık karşılaşılan meslekler sektör başlıkları altında örnek
 * olarak gösteriliyor ve güncel listenin resmî kaynakta olduğu yazılıyor.
 *
 * Neden yine de yayımlıyoruz: işveren çoğu zaman "benim işimde böyle bir şey
 * var mı" sorusunun cevabını arıyor. Kendi mesleğini listede görmek, aramayı
 * doğru yere taşıyor.
 */
export type MeslekGrubu = {
  sektor: string;
  meslekler: string[];
};

export const mykMeslekOrnekleri: MeslekGrubu[] = [
  {
    sektor: 'İnşaat ve yapı',
    meslekler: [
      'Ahşap kalıpçı',
      'Betonarme demircisi',
      'Duvarcı',
      'Sıvacı',
      'İnşaat boyacısı',
      'Alçı levha uygulayıcısı',
      'Isı yalıtımcısı',
      'Su yalıtımcısı',
      'Seramik karo kaplamacısı',
      'İskele kurulum elemanı',
      'PVC doğrama montajcısı',
      'Alüminyum doğrama montajcısı',
    ],
  },
  {
    sektor: 'Metal ve makine',
    meslekler: [
      'Kaynakçı (ark, MIG/MAG, TIG)',
      'Çelik kaynakçısı',
      'Endüstriyel boru montajcısı',
      'Makine bakımcı',
      'CNC takım tezgâhı operatörü',
      'Metal sac işlemeci',
      'Metal kesim operatörü',
      'Direnç kaynak ayarcısı',
    ],
  },
  {
    sektor: 'Elektrik ve tesisat',
    meslekler: [
      'Elektrik tesisatçısı',
      'Endüstriyel elektrikçi',
      'Isıtma ve sıhhi tesisatçı',
      'Doğal gaz çelik boru kaynakçısı',
      'Doğal gaz polietilen boru kaynakçısı',
      'Doğal gaz iç tesisat yapım personeli',
      'İklimlendirme sistemleri montajcısı',
    ],
  },
  {
    sektor: 'Otomotiv',
    meslekler: [
      'Otomotiv mekanikçisi',
      'Otomotiv elektrikçisi',
      'Otomotiv kaporta ve boya uygulayıcısı',
      'Otomotiv montajcısı',
      'Otomotiv sac ve gövde imalatçısı',
    ],
  },
  {
    sektor: 'Enerji',
    meslekler: [
      'Rüzgâr güç sistemi personeli',
      'Güneş enerjisi sistemleri personeli',
      'Yüksek gerilim teçhizatı test elemanı',
    ],
  },
];

/** Resmî ve güncel listenin tutulduğu kurum. */
export const mykKaynak = {
  kurum: 'Mesleki Yeterlilik Kurumu',
  url: 'https://www.myk.gov.tr',
};
