import { getPermalink } from './utils/permalinks';
import { ilceler } from './data/ilceler';
import { hizmetler } from './data/hizmetler';
import { sektorler } from './data/sektorler';

/**
 * Site gezinmesi.
 *
 * SADELEŞTİRME GEREKÇESİ: Menü, sitedeki her içeriği tek tek listeleyecek
 * kadar büyümüştü — 14 hizmet, 18 sektör, altı araç, altı blog yazısı ve
 * yedi ilçe. Ziyaretçiye portal hissi veriyordu; kurumsal bir sitenin ana
 * menüsü içerik akışı gibi davranmamalı. İçerikler silinmedi, kendi hub
 * sayfalarından erişiliyor ve site haritasında duruyor.
 *
 * BLOG YAZILARI MENÜDEN ÇIKARILDI: `yazilar.slice(0, 6)` ile son yazılar
 * doğrudan açılır menüye basılıyordu. Menü, içerik yayımlandıkça değişmemeli.
 */

/** Ana sayfada ve menüde öne çıkan hizmetler. Tam liste /hizmetler'de. */
const ANA_HIZMET_SLUG = [
  'is-guvenligi-uzmanligi',
  'isyeri-hekimligi',
  'risk-degerlendirmesi',
  'acil-durum-eylem-plani',
  'saglik-ve-guvenlik-plani',
  'periyodik-kontroller',
];
const anaHizmetler = ANA_HIZMET_SLUG.map((s) => hizmetler.find((h) => h.slug === s)).filter(
  (h): h is NonNullable<typeof h> => Boolean(h)
);

/** Menüde gösterilen sektörler; tamamı /sektorler'de. */
const oneCikanSektorler = [
  'insaat',
  'fabrika-uretim',
  'lojistik-depo',
  'kimya-boya',
  'metal-kaynak',
  'ofis-hizmet',
]
  .map((s) => sektorler.find((x) => x.slug === s))
  .filter((x): x is NonNullable<typeof x> => Boolean(x));

export const headerData = {
  links: [
    {
      text: 'Hizmetler',
      href: getPermalink('/hizmetler'),
      links: [
        ...anaHizmetler.map((h) => ({ text: h.ad, href: getPermalink(`/hizmetler/${h.slug}`) })),
        { text: 'Mobil sağlık taraması', href: getPermalink('/mobil-saglik-taramasi') },
        { text: 'Hazır paketler', href: getPermalink('/paketler') },
        { text: 'Tüm hizmetler →', href: getPermalink('/hizmetler') },
      ],
    },
    {
      text: 'Sektörler',
      href: getPermalink('/sektorler'),
      links: [
        ...oneCikanSektorler.map((x) => ({ text: x.ad, href: getPermalink(`/sektorler/${x.slug}`) })),
        { text: 'Tüm sektörler →', href: getPermalink('/sektorler') },
      ],
    },
    {
      text: 'Eğitimler',
      href: getPermalink('/isg-egitimi'),
    },
    {
      text: 'Kaynaklar',
      href: getPermalink('/isg-kutuphanesi'),
      links: [
        { text: 'Hesaplama araçları', href: getPermalink('/araclar') },
        { text: 'İSG kütüphanesi', href: getPermalink('/isg-kutuphanesi') },
        { text: 'Form şablonları (PDF)', href: getPermalink('/isg-kutuphanesi/formlar') },
        { text: 'Güvenlik levhaları (PDF)', href: getPermalink('/isg-kutuphanesi/levhalar') },
        { text: 'Mevzuat dizini', href: getPermalink('/isg-kutuphanesi/mevzuat') },
        { text: 'İSG rehberi', href: getPermalink('/blog') },
        { text: 'Sıkça sorulan sorular', href: getPermalink('/sss') },
      ],
    },
    { text: 'Hakkımızda', href: getPermalink('/hakkimizda') },
    { text: 'Referanslar', href: getPermalink('/referanslar') },
    { text: 'İletişim', href: getPermalink('/iletisim') },
  ],
  actions: [{ text: 'Ücretsiz Ön Değerlendirme', href: getPermalink('/teklif-al'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Hizmetler',
      links: [
        ...anaHizmetler.map((h) => ({ text: h.ad, href: getPermalink(`/hizmetler/${h.slug}`) })),
        { text: 'Mobil sağlık taraması', href: getPermalink('/mobil-saglik-taramasi') },
        { text: 'İSG eğitimleri', href: getPermalink('/isg-egitimi') },
        { text: 'Tüm hizmetler', href: getPermalink('/hizmetler') },
      ],
    },
    {
      title: 'Sektörler',
      links: [
        ...oneCikanSektorler.map((x) => ({ text: x.ad, href: getPermalink(`/sektorler/${x.slug}`) })),
        { text: 'Tüm sektörler', href: getPermalink('/sektorler') },
      ],
    },
    {
      title: 'Kaynaklar',
      links: [
        { text: 'Hesaplama araçları', href: getPermalink('/araclar') },
        { text: 'İSG kütüphanesi', href: getPermalink('/isg-kutuphanesi') },
        { text: 'Form şablonları (PDF)', href: getPermalink('/isg-kutuphanesi/formlar') },
        { text: 'Güvenlik levhaları (PDF)', href: getPermalink('/isg-kutuphanesi/levhalar') },
        { text: 'Mevzuat dizini', href: getPermalink('/isg-kutuphanesi/mevzuat') },
        { text: 'İSG rehberi', href: getPermalink('/blog') },
        { text: 'Sıkça sorulan sorular', href: getPermalink('/sss') },
      ],
    },
    {
      title: 'Kurumsal',
      links: [
        { text: 'Hakkımızda', href: getPermalink('/hakkimizda') },
        { text: 'Referanslar', href: getPermalink('/referanslar') },
        { text: 'İletişim', href: getPermalink('/iletisim') },
        { text: 'Hizmet bölgeleri', href: getPermalink('/osgb-hizmeti') },
        { text: 'KVKK Aydınlatma Metni', href: getPermalink('/kvkk') },
        { text: 'Gizlilik Politikası', href: getPermalink('/gizlilik-politikasi') },
        { text: 'Çerez Politikası', href: getPermalink('/cerez-politikasi') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Hakkımızda', href: getPermalink('/hakkimizda') },
    { text: 'İletişim', href: getPermalink('/iletisim') },
    { text: 'KVKK', href: getPermalink('/kvkk') },
    { text: 'Gizlilik', href: getPermalink('/gizlilik-politikasi') },
    { text: 'Çerez', href: getPermalink('/cerez-politikasi') },
  ],
  socialLinks: [],
  /** Saha hizmeti illeri. İlçelerin tamamı /osgb-hizmeti sayfasında listeleniyor. */
  hizmetIlceleri: ilceler,
  footNote: `
    İş sağlığı ve güvenliğinde ihtiyaç duyduğunuz her başlık tek elden:
    uzman ve hekim görevlendirmesinden eğitime, ölçümden dokümantasyona.
    Saha hizmetleri yetkili çözüm ortağımızla yürütülür.
  `,
};
