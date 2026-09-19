/**
 * Referanslar — iki ayrı küme, bilerek ayrı.
 *
 * DÜRÜSTLÜK KURALI: Bu sitenin kendi müşteri portföyü ile saha hizmetini
 * veren yetkili iş ortağının portföyü aynı şey değildir. İkisini tek liste
 * hâlinde "referanslarımız" diye göstermek, 89 kurumu kendi müşterimiz gibi
 * sunmak olurdu. Sayfada ayrı başlıklar altında ve kimin işi olduğu
 * yazılarak gösteriliyor — liste böyle de yeterince güçlü.
 *
 * Kaynaklar:
 *  - isOrtagiReferanslari: sahraisg.com/referanslar (2026-09-19'da alındı)
 *  - uzmanReferanslari: site sahibinin kendi beyanı (2026-09-19)
 *
 * Logo kullanılmıyor; marka görselleri hak sahiplerinin izniyle kullanılır
 * ve o izin alınana kadar kurum adları düz metin olarak veriliyor.
 */

/** Saha hizmetini veren yetkili iş ortağının hizmet verdiği kurumlar. */
export const isOrtagiReferanslari = [
  'TOKİ',
  'Emlak Konut',
  'TEİAŞ',
  'İSTAÇ',
  'Esenyurt Belediyesi',
  'Beylikdüzü Belediyesi',
  'Kızılay Esenyurt',
  'Caritas Türkiye',
  'Kuveyt Türk',
  'Oyak Sigorta',
  'Shell',
  'OPET',
  'Continental',
  'Daikin',
  'Eren Holding',
  'Çolakoğlu Beton',
  'Çolakoğlu Yapı',
  'A101',
  'Teknosa',
  'Vatan Bilgisayar',
  'Mavi',
  'Damat',
  'Intersport',
  'Kahve Dünyası',
  'Şekerci Cafer',
  'Ulusoy Lojistik',
  'Ulusoy Denizcilik',
  'Taşkın Lojistik',
  'Akıllı Lojistik',
  'Sendeo',
  'Tessan Madencilik',
  'Akkur Bakır',
  'EAE Elektrik',
  'Omega Elektrik',
  'İkizler Aydınlatma',
  'EMA Enerji',
  'Gensa Jeneratör',
  'Üntes Mühendislik',
  'Kran Mühendislik',
  'EBA Mühendislik',
  'NDS Çelik',
  'Bayar Çelik',
  'Çelik Kalıp',
  'Güven Lazer Metal İşleme',
  'Güven Soğutma',
  'Turan Plastik',
  'Neon Plastik',
  'Örkon Kimya',
  'Rimteks',
  'Fab Tekstil',
  'Viva Çorap',
  'Kavasoğlu Ayakkabı',
  'Mutluşan',
  'Şekeroğulları',
  'Lokum Atölyesi',
  'Ceviz Ağacı',
  'Banabi',
  'Fen Bilimleri',
  'Dea Yapı',
  'Baş Yapı',
  'RK Yapı',
  'Boydan Yapı',
  'Kibritçi İnşaat',
  'Saraytepe İnşaat',
  'Buryap İnşaat',
  'Canan İnşaat',
  'Daraman İnşaat',
  'Efitaş İnşaat',
  'Karden İnşaat',
  'Keleş İnşaat',
  'Efeler Teknik Yapı',
  'Elitist Mimarlık',
  'Gül Proje',
  'Nimbus Cephe',
  'Art Restorasyon',
  'Maf Alt Yapı',
  'Uygar Dizayn',
  'Detay Global',
  'Globus',
  'Hasanoğlu',
  'Hawersan',
  'Obalılar',
  'Öz Erka',
  'Reskon',
  'Turgut',
  'Best',
  'Eve',
  'Çakıroğlu',
  'AVX Bant',
] as const;

/** Site sahibinin İSG uzmanı olarak görev aldığı kurum ve projeler. */
export const uzmanReferanslari = ['TOKİ', 'Emlak Konut', 'MESA', 'Rönesans'] as const;

export const referansSayisi = isOrtagiReferanslari.length;
