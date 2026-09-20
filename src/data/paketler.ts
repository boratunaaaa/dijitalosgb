/**
 * Hizmet paketleri.
 *
 * NEDEN VAR: Hizmet listesi 14 başlığa çıktı ve işveren "benim iş yerime
 * hangileri lazım" sorusunu tek tek okuyarak çözmek zorunda kalıyordu.
 * Paketler bu soruyu üç tipik iş yeri profili üzerinden cevaplıyor.
 *
 * FİYAT YOK — BİLEREK. Fiyat tehlike sınıfı, çalışan sayısı, saha ziyareti
 * sıklığı ve ölçüm kapsamına göre değişir; sayfada tek bir rakam yazmak
 * ya yanlış olur ya da her iş yerine uymayan bir taahhüt hâline gelir.
 * Paketler kapsamı anlatır, tutarı değil.
 *
 * Paket, mevzuatın yerine geçmez: bir iş yerinin yükümlülüğü paketin
 * içeriğine değil kendi tehlike sınıfı ve çalışan sayısına bağlıdır.
 * Bu yüzden her paketin altında hesaplayıcıya bağlantı duruyor.
 */

export type Paket = {
  slug: string;
  ad: string;
  kimIcin: string;
  ozet: string;
  /** Pakete dahil hizmetler — hizmetler.ts'teki slug'lar. */
  hizmetler: string[];
  /** Paketi o profile özgü kılan, sıkça atlanan işler. */
  vurgular: string[];
};

export const paketler: Paket[] = [
  {
    slug: 'isletme',
    ad: 'İşletme paketi',
    kimIcin: 'Ofis, mağaza, restoran, kreş ve benzeri az tehlikeli sınıftaki iş yerleri',
    ozet:
      'Yükümlülüğün tamamı var ama süreler kısa ve eğitimin tamamı uzaktan verilebiliyor. Bu paket, dosyayı sıfırdan kurup düzenli işler hâle getirmek için.',
    hizmetler: [
      'risk-degerlendirmesi',
      'acil-durum-eylem-plani',
      'is-guvenligi-uzmanligi',
      'isyeri-hekimligi',
      'ilk-yardim-egitimi',
    ],
    vurgular: [
      'Temel İSG eğitimi 8 ders saati, tamamı uzaktan verilebilir',
      'Acil durum planı ve yılda en az bir tatbikat, kayıtlarıyla',
      'Ekranlı araçlarla çalışma ve ergonomi değerlendirmesi',
      'İşe giriş ve periyodik muayene takvimi',
    ],
  },
  {
    slug: 'santiye',
    ad: 'Şantiye paketi',
    kimIcin: 'Yapı işleri, altyapı ve tadilat şantiyeleri; alt yüklenici çalıştıran işverenler',
    ozet:
      'Yapı işlerinde risk değerlendirmesi tek başına yetmez: sağlık ve güvenlik planı ayrı bir yükümlülüktür ve alt yüklenici koordinasyonu denetimde ilk bakılan yerdir.',
    hizmetler: [
      'saglik-ve-guvenlik-plani',
      'risk-degerlendirmesi',
      'is-guvenligi-uzmanligi',
      'isyeri-hekimligi',
      'mesleki-yeterlilik-belgesi',
      'yangin-egitimi-ve-tatbikat',
    ],
    vurgular: [
      'Yapı işlerine özgü sağlık ve güvenlik planı',
      'Yüksekte çalışma, iskele ve kazı için çalışma izni düzeni',
      'Alt yüklenici belge kontrolü ve saha koordinasyonu',
      'MYK belgesi zorunlu mesleklerde personel belge takibi',
      'Düzenli saha denetimi ve aksiyon takibi',
    ],
  },
  {
    slug: 'uretim',
    ad: 'Üretim tesisi paketi',
    kimIcin: 'Fabrika, atölye, metal işleme, kimya, gıda ve lojistik tesisleri',
    ozet:
      'Üretimde yükümlülük ölçümle ve ekipmanla büyür. Makine koruyucusu, ortam ölçümü ve periyodik kontrol takvimi bu pakette merkeze alınıyor.',
    hizmetler: [
      'risk-degerlendirmesi',
      'is-guvenligi-uzmanligi',
      'isyeri-hekimligi',
      'is-hijyeni-olcumleri',
      'periyodik-kontroller',
      'acil-durum-eylem-plani',
      'patlamadan-korunma-dokumani',
    ],
    vurgular: [
      'Gürültü, toz, kimyasal ve aydınlatma için iş hijyeni ölçümleri',
      'Vinç, forklift, kompresör ve elektrik tesisatı periyodik kontrol takvimi',
      'Makine koruyucuları ve enerji kesme-kilitleme (LOTO) düzeni',
      'Patlayıcı ortam varsa patlamadan korunma dokümanı',
      'Maruziyete göre periyodik muayene ve tetkik planı',
    ],
  },
];
