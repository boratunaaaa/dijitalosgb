/**
 * Vaka çalışmaları.
 *
 * ŞU AN BOŞ — BİLEREK. Uydurma vaka yazmak, bu sitenin baştan beri
 * uyguladığı kuralın en ağır ihlali olurdu: mevzuat doğruluğu satan bir
 * sitede kurgu bir müşteri hikâyesi yakalandığında geri kalan her şey
 * şüpheli hâle gelir.
 *
 * Altyapı hazır: buraya gerçek bir kayıt eklendiği anda ana sayfada ve
 * /referanslar sayfasında bölüm kendiliğinden görünür. Veri boşken bileşen
 * hiç render edilmez, yani "yakında" kutusu da çıkmaz.
 *
 * DOLDURULURKEN: firma adı ancak `adYayimlanabilir` true ise basılır.
 * İzin alınmadıysa `anonim: true` bırakılıp sektör ve ölçek üzerinden
 * anlatılır — bu hâliyle de güçlü çalışır.
 */
export type VakaCalismasi = {
  slug: string;
  sektor: string;
  /** "120 çalışanlı üretim tesisi" gibi; firma adı vermeden ölçek. */
  olcek: string;
  problem: string;
  /** Yapılan işler, sırayla. */
  yapilanlar: string[];
  sonuc: string;
  /** hizmetler.ts'teki slug'lar. */
  hizmetler: string[];
  anonim: boolean;
  firmaAdi?: string;
  adYayimlanabilir: boolean;
};

export const vakaCalismalari: VakaCalismasi[] = [];
