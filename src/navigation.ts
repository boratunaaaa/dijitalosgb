import { getPermalink } from './utils/permalinks';
import { ilceler } from './data/ilceler';
import { illerSayfali } from './data/iller';
import { rehberler } from './data/rehber';

export const headerData = {
  links: [
    {
      text: 'OSGB hizmeti',
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
    { text: 'Mobil sağlık', href: getPermalink('/mobil-saglik-taramasi') },
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
        { text: 'OSGB hizmeti', href: getPermalink('/osgb-hizmeti') },
        { text: 'Uzaktan İSG eğitimi', href: getPermalink('/isg-egitimi') },
        { text: 'Mobil sağlık taraması', href: getPermalink('/mobil-saglik-taramasi') },
      ],
    },
    {
      title: 'Saha hizmeti bölgeleri',
      links: ilceler.map((i) => ({ text: `${i.ad} (${i.il})`, href: getPermalink(`/osgb/${i.slug}`) })),
    },
    {
      title: 'Rehber',
      links: rehberler.map((r) => ({ text: r.soru, href: getPermalink(`/rehber/${r.slug}`) })),
    },
  ],
  secondaryLinks: [{ text: 'Teklif al', href: getPermalink('/teklif-al') }],
  socialLinks: [],
  footNote: `
    Dijital OSGB bir OSGB değildir. Saha iş sağlığı ve güvenliği hizmetleri,
    Çalışma ve Sosyal Güvenlik Bakanlığı'ndan yetkili iş ortağımız Sahra OSGB
    tarafından verilir. İSG eğitimleri İSG uzmanı tarafından doğrudan verilir.
  `,
};
