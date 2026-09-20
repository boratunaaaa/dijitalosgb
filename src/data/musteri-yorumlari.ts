/**
 * Müşteri yorumları.
 *
 * ŞU AN BOŞ — BİLEREK. Sahte yorum üretilmedi.
 *
 * Bir yorum buraya ancak `izinli: true` ile girer: kişinin adının, görevinin
 * ve firmasının yayımlanmasına açıkça izin verdiği anlamına gelir. İzin
 * yoksa kayıt eklenmez; "bir üretim müdürü" gibi anonimleştirilmiş yorum da
 * doğrulanamaz olduğu için tercih edilmiyor.
 *
 * Veri girildiği anda ana sayfadaki bölüm kendiliğinden görünür.
 */
export type MusteriYorumu = {
  ad: string;
  gorev: string;
  firma: string;
  yorum: string;
  /** Kişi adının ve firma adının yayımlanmasına izin verdi mi? */
  izinli: boolean;
  /** Varsa alındığı tarih (ISO) — yorumun güncelliğini gösterir. */
  tarih?: string;
};

export const musteriYorumlari: MusteriYorumu[] = [];

/** Yalnız izinli olanlar yayımlanır. */
export const yayimlanabilirYorumlar = musteriYorumlari.filter((y) => y.izinli);
