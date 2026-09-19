/**
 * Yükümlülük hesabının dayandığı mevzuat sayıları.
 *
 * BURAYA YALNIZ YÖNETMELİKTE YAZAN SAYI GİRİLİR. Hiçbir değer tahmin,
 * yuvarlama veya "piyasada genelde böyle" değildir; her biri aşağıda adı
 * geçen düzenlemenin ilgili maddesinden gelir. Bir sayı teyit edilemiyorsa
 * hesaba hiç girmez — eksik bırakmak, yanlış söylemekten iyidir.
 *
 * Kaynaklar:
 *  - İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri
 *    Hakkında Yönetmelik (görevlendirme süreleri ve belge sınıfı kuralı)
 *  - İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve
 *    Eğitimleri Hakkında Yönetmelik (hekim ve diğer sağlık personeli süreleri)
 *  - Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları
 *    Hakkında Yönetmelik (temel eğitim süreleri ve yenileme aralıkları)
 *
 * Tehlike sınıfı işyerinin NACE koduna göre belirlenir; bu dosya sınıfı
 * belirlemez, sınıf verildikten SONRAKİ yükümlülüğü hesaplar.
 */

export type TehlikeSinifi = 'az-tehlikeli' | 'tehlikeli' | 'cok-tehlikeli';

export const tehlikeSiniflari = [
  { id: 'az-tehlikeli' as const, ad: 'Az tehlikeli' },
  { id: 'tehlikeli' as const, ad: 'Tehlikeli' },
  { id: 'cok-tehlikeli' as const, ad: 'Çok tehlikeli' },
];

/** İş güvenliği uzmanı: çalışan başına ayda EN AZ kaç dakika. */
export const uzmanDakika: Record<TehlikeSinifi, number> = {
  'az-tehlikeli': 10,
  tehlikeli: 20,
  'cok-tehlikeli': 40,
};

/** İşyeri hekimi: çalışan başına ayda EN AZ kaç dakika. */
export const hekimDakika: Record<TehlikeSinifi, number> = {
  'az-tehlikeli': 5,
  tehlikeli: 10,
  'cok-tehlikeli': 15,
};

/**
 * Uzmanın taşıması gereken asgari belge sınıfı.
 * C sınıfı az tehlikeli, B sınıfı az ve tehlikeli, A sınıfı bütün sınıflarda
 * görev yapabilir; aşağıdaki liste her sınıf için GEÇERLİ belgeleri verir.
 */
export const gecerliBelgeSiniflari: Record<TehlikeSinifi, string[]> = {
  'az-tehlikeli': ['A', 'B', 'C'],
  tehlikeli: ['A', 'B'],
  'cok-tehlikeli': ['A'],
};

/** Temel İSG eğitimi: ders saati ve yenileme aralığı (yıl). */
export const temelEgitim: Record<TehlikeSinifi, { saat: number; yenilemeYil: number }> = {
  'az-tehlikeli': { saat: 8, yenilemeYil: 3 },
  tehlikeli: { saat: 12, yenilemeYil: 2 },
  'cok-tehlikeli': { saat: 16, yenilemeYil: 1 },
};

/**
 * Diğer sağlık personeli görevlendirme süreleri.
 * Yükümlülük ÇOK TEHLİKELİ sınıfta ve 10 ve üzeri çalışanda doğar;
 * kademe, çalışan sayısına göre değişir.
 */
export function digerSaglikPersoneliDakika(sinif: TehlikeSinifi, calisan: number): number | null {
  if (sinif !== 'cok-tehlikeli') return null;
  if (calisan < 10) return null;
  if (calisan <= 49) return 10;
  if (calisan <= 249) return 15;
  return 20;
}

/** 1000 çalışan başına tam gün çalışacak en az bir iş güvenliği uzmanı. */
export const TAM_GUN_UZMAN_ESIGI = 1000;

/**
 * Risk değerlendirmesi yenileme aralığı (yıl). Tehlike sınıfına bağlıdır;
 * işyerinde değişiklik veya kaza olduğunda süre beklenmeden yenilenir.
 */
export const riskDegerlendirmeYil: Record<TehlikeSinifi, number> = {
  'az-tehlikeli': 6,
  tehlikeli: 4,
  'cok-tehlikeli': 2,
};

/** Bir aydaki hesaplanmış süreyi insan diline çevirir. */
export function dakikayiOkunurYap(dakika: number): string {
  if (dakika < 60) return `${dakika} dakika`;
  const saat = Math.floor(dakika / 60);
  const kalan = Math.round(dakika % 60);
  if (kalan === 0) return `${saat} saat`;
  return `${saat} saat ${kalan} dakika`;
}
