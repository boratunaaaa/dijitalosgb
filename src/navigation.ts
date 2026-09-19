import { getPermalink } from './utils/permalinks';
import { ilceler } from './data/ilceler';
import { illerSayfali } from './data/iller';
import { rehberler } from './data/rehber';
import { hizmetler } from './data/hizmetler';
import { sektorler } from './data/sektorler';

export const headerData = {
  links: [
    {
      text: 'Hizmetler',
      href: getPermalink('/hizmetler'),
      links: [
        { text: 'Tüm hizmetler', href: getPermalink('/hizmetler') },
        ...hizmetler.map((h) => ({ text: h.ad, href: getPermalink(`/hizmetler/${h.slug}`) })),
        { text: 'Mobil sağlık aracı', href: getPermalink('/mobil-saglik-taramasi') },
        { text: 'Uzaktan İSG eğitimi', href: getPermalink('/isg-egitimi') },
      ],
    },
    {
      text: 'Sektörler',
      href: getPermalink('/sektorler'),
      links: sektorler.map((x) => ({ text: x.ad, href: getPermalink(`/sektorler/${x.slug}`) })),
    },
    {
      text: 'OSGB bölgeleri',
      href: getPermalink('/osgb-hizmeti'),
      // Saha hizmeti il sınırlı olduğu için menüde de yalnız hizmet
      // verebildiğimiz ilçeler var.
      links: ilceler.map((i) => ({ text: `${i.ad} OSGB`, href: getPermalink(`/osgb/${i.slug}`) })),
    },
    {
      text: 'İSG eğitimi',
      href: getPermalink('/isg-egitimi'),
      links: [
        { text: 'Tüm Türkiye', href: getPermalink('/isg-egitimi') },
        ...illerSayfali.slice(0, 8).map((i) => ({ text: i.ad, href: getPermalink(`/isg-egitimi/${i.slug}`) })),
      ],
    },
    {
      text: 'Rehber',
      href: getPermalink('/rehber'),
      links: rehberler.map((r) => ({ text: r.soru, href: getPermalink(`/rehber/${r.slug}`) })),
    },
  ],
  actions: [{ text: 'Teklif al', href: getPermalink('/teklif-al'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Hizmetler',
      links: [
        ...hizmetler.map((h) => ({ text: h.ad, href: getPermalink(`/hizmetler/${h.slug}`) })),
        { text: 'Mobil sağlık aracı', href: getPermalink('/mobil-saglik-taramasi') },
        { text: 'Uzaktan İSG eğitimi', href: getPermalink('/isg-egitimi') },
      ],
    },
    {
      title: 'Saha hizmeti bölgeleri',
      links: ilceler.map((i) => ({ text: `${i.ad} (${i.il})`, href: getPermalink(`/osgb/${i.slug}`) })),
    },
    {
      title: 'Sektörler',
      links: sektorler.map((x) => ({ text: x.ad, href: getPermalink(`/sektorler/${x.slug}`) })),
    },
    {
      title: 'Rehber',
      links: rehberler.map((r) => ({ text: r.soru, href: getPermalink(`/rehber/${r.slug}`) })),
    },
    {
      title: 'Kurumsal',
      links: [
        { text: 'Hakkımızda', href: getPermalink('/hakkimizda') },
        { text: 'Teklif al', href: getPermalink('/teklif-al') },
        { text: 'KVKK Aydınlatma Metni', href: getPermalink('/kvkk') },
        { text: 'Gizlilik Politikası', href: getPermalink('/gizlilik-politikasi') },
        { text: 'Çerez Politikası', href: getPermalink('/cerez-politikasi') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Hakkımızda', href: getPermalink('/hakkimizda') },
    { text: 'Teklif al', href: getPermalink('/teklif-al') },
    { text: 'KVKK', href: getPermalink('/kvkk') },
    { text: 'Gizlilik', href: getPermalink('/gizlilik-politikasi') },
    { text: 'Çerez', href: getPermalink('/cerez-politikasi') },
  ],
  socialLinks: [],
  footNote: `
    Dijital OSGB bir OSGB değildir. Saha iş sağlığı ve güvenliği hizmetleri,
    Çalışma ve Sosyal Güvenlik Bakanlığı'ndan yetkili iş ortağımız Sahra OSGB
    tarafından verilir. İSG eğitimleri İSG uzmanı tarafından doğrudan verilir.
  `,
};
