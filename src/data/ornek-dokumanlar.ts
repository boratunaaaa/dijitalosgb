/**
 * Örnek doküman demoları — bir risk değerlendirmesi satırının veya acil durum
 * planı bölümünün gerçekte neye benzediğini göstermek için.
 *
 * NEDEN "ÖRNEK" DİYORUZ: Bu satırlar gerçek bir iş yerinin dosyasından
 * alınmadı; tipik bir atölye üzerinden bu proje için yazıldı. Hazır dosya
 * indirip adını değiştirmek denetimde işe yaramaz — risk değerlendirmesi,
 * o iş yerinin kendi makinesine, kendi vardiyasına ve kendi çalışanına bakan
 * bir kayıttır. Burada gösterdiğimiz şey doldurma biçimi: hangi sütunda ne
 * yazar, skor nasıl çıkar, önlem nasıl yazılır.
 */

/** 5x5 matris: olasılık × şiddet. Türkiye'de en yaygın kullanılan yöntem. */
export const matris = {
  ad: '5x5 matris (L tipi)',
  olasilik: [
    { puan: 1, ad: 'Çok küçük', aciklama: 'Yılda bir veya daha seyrek' },
    { puan: 2, ad: 'Küçük', aciklama: 'Yılda birkaç kez' },
    { puan: 3, ad: 'Orta', aciklama: 'Ayda bir' },
    { puan: 4, ad: 'Yüksek', aciklama: 'Haftada bir' },
    { puan: 5, ad: 'Çok yüksek', aciklama: 'Her gün' },
  ],
  siddet: [
    { puan: 1, ad: 'Çok hafif', aciklama: 'İş göremezlik yok, ilk yardım yeterli' },
    { puan: 2, ad: 'Hafif', aciklama: 'İş günü kaybı olmayan yaralanma' },
    { puan: 3, ad: 'Orta', aciklama: 'İş günü kaybı, geçici iş göremezlik' },
    { puan: 4, ad: 'Ciddi', aciklama: 'Kalıcı hasar, uzuv kaybı' },
    { puan: 5, ad: 'Çok ciddi', aciklama: 'Ölüm veya birden çok ağır yaralanma' },
  ],
  bantlar: [
    { alt: 1, ust: 4, ad: 'Kabul edilebilir', renk: 'yesil', aksiyon: 'Kayıt tutulur, mevcut önlem sürdürülür.' },
    { alt: 5, ust: 9, ad: 'Düşük', renk: 'acikyesil', aksiyon: 'Planlı iyileştirme; termine bağlanır.' },
    { alt: 10, ust: 15, ad: 'Orta', renk: 'sari', aksiyon: 'Belirlenen sürede önlem alınır, takip edilir.' },
    { alt: 16, ust: 20, ad: 'Yüksek', renk: 'turuncu', aksiyon: 'Kısa sürede önlem alınmadan iş sürdürülmez.' },
    { alt: 21, ust: 25, ad: 'Tolerans gösterilemez', renk: 'kirmizi', aksiyon: 'İş derhâl durdurulur; önlem alınmadan başlanmaz.' },
  ],
};

export type RiskSatiri = {
  bolum: string;
  tehlike: string;
  risk: string;
  mevcutOnlem: string;
  o: number;
  s: number;
  onlem: string;
  sorumlu: string;
  termin: string;
};

/** Metal işleme atölyesi üzerinden örnek satırlar. */
export const ornekRiskSatirlari: RiskSatiri[] = [
  {
    bolum: 'Talaşlı imalat',
    tehlike: 'Torna tezgâhında dönen aynaya temas',
    risk: 'El ve parmak kaptırma, uzuv kaybı',
    mevcutOnlem: 'Tezgâh koruyucusu mevcut ancak sökülebiliyor',
    o: 3,
    s: 4,
    onlem:
      'Koruyucuya kapak açıldığında tezgâhı durduran emniyet şalteri takılması; koruyucusuz çalışmanın yazılı talimatla yasaklanması',
    sorumlu: 'Üretim şefi',
    termin: '30 gün',
  },
  {
    bolum: 'Kaynak',
    tehlike: 'Kaynak dumanı ve metal oksit partikülleri',
    risk: 'Solunum yolu hastalığı, metal dumanı ateşi',
    mevcutOnlem: 'Genel havalandırma var, nokta çekiş yok',
    o: 4,
    s: 3,
    onlem:
      'Kaynak masalarına nokta çekişli aspirasyon kurulması; ortam ölçümü yaptırılması; kaynakçılara SFT takibi',
    sorumlu: 'İşveren vekili',
    termin: '60 gün',
  },
  {
    bolum: 'Kaynak',
    tehlike: 'Kaynak arkı ışını',
    risk: 'Göz yanığı (ark göz), çevredeki çalışanların etkilenmesi',
    mevcutOnlem: 'Kaynakçıda maske var, çevrede paravan yok',
    o: 4,
    s: 2,
    onlem: 'Kaynak alanına taşınabilir ark paravanı; geçiş yolunun kaynak bölgesinden ayrılması',
    sorumlu: 'Üretim şefi',
    termin: '15 gün',
  },
  {
    bolum: 'Malzeme taşıma',
    tehlike: 'Forkliftin yaya geçiş yolunu kullanması',
    risk: 'Çarpma, ezilme, ölümlü kaza',
    mevcutOnlem: 'Yaya yolu çizgisi soluk, ayrım yok',
    o: 4,
    s: 5,
    onlem:
      'Yaya ve araç yollarının fiziksel bariyerle ayrılması; kavşaklara ayna ve uyarı levhası; forklift hız sınırı',
    sorumlu: 'İşveren vekili',
    termin: '45 gün',
  },
  {
    bolum: 'Elektrik',
    tehlike: 'Pano kapaklarının açık bırakılması',
    risk: 'Elektrik çarpması',
    mevcutOnlem: 'Panolar kilitli değil, uyarı levhası yok',
    o: 3,
    s: 5,
    onlem:
      'Panoların kilitlenmesi, yetkisiz girilemez levhası, yıllık topraklama ölçümünün yaptırılması',
    sorumlu: 'Bakım sorumlusu',
    termin: '20 gün',
  },
  {
    bolum: 'Depo',
    tehlike: 'Rafların devrilme riski',
    risk: 'Altında kalma, ağır yaralanma',
    mevcutOnlem: 'Raflar duvara sabitlenmemiş, yük etiketi yok',
    o: 2,
    s: 5,
    onlem: 'Rafların ankrajlanması, raf başına taşıma kapasitesi etiketi, ağır yükün alt rafa alınması',
    sorumlu: 'Depo sorumlusu',
    termin: '30 gün',
  },
  {
    bolum: 'Genel',
    tehlike: 'Acil çıkış kapısının önüne malzeme konulması',
    risk: 'Tahliyenin gecikmesi, yangında toplu risk',
    mevcutOnlem: 'Kapı var, önü sık sık dolu',
    o: 4,
    s: 4,
    onlem:
      'Çıkış önünün sarı taramayla işaretlenmesi, günlük saha turu kontrol listesine eklenmesi, levhalandırma',
    sorumlu: 'İSG uzmanı',
    termin: '7 gün',
  },
];

export type AdepBolumu = { baslik: string; icerik: string[] };

/** Acil durum eylem planının içindekiler dökümü — planın iskeleti. */
export const ornekAdepBolumleri: AdepBolumu[] = [
  {
    baslik: '1. İş yeri bilgileri',
    icerik: [
      'Unvan, adres, SGK sicil no, NACE kodu ve tehlike sınıfı',
      'Çalışan sayısı; vardiya düzeni ve en kalabalık vardiyadaki kişi sayısı',
      'Bina bilgileri: kat adedi, yapı türü, çıkış sayısı',
      'Planın hazırlanma tarihi ve geçerlilik süresi (tehlike sınıfına göre 2, 4 veya 6 yıl)',
    ],
  },
  {
    baslik: '2. Acil durumların belirlenmesi',
    icerik: [
      'Yangın, patlama, kimyasal sızıntı',
      'Deprem, sel, fırtına',
      'İş kazası ve ani hastalanma',
      'Sabotaj, tehdit, yetkisiz giriş',
      'Her biri için olasılık ve etki değerlendirmesi',
    ],
  },
  {
    baslik: '3. Önleyici ve sınırlandırıcı tedbirler',
    icerik: [
      'Yangın algılama ve söndürme sistemleri; söndürücü yerleşimi',
      'Elektrik ve gaz ana kesme noktaları, kim keser',
      'Kimyasal depolama düzeni ve dökülme müdahale seti',
      'Kaçış yollarının açık tutulması ve aydınlatması',
    ],
  },
  {
    baslik: '4. Acil durum ekipleri',
    icerik: [
      'Söndürme ekibi — ad, görev, iletişim',
      'Kurtarma ekibi',
      'Koruma ekibi',
      'İlk yardım ekibi (sertifikalı ilk yardımcılardan)',
      'Ekip üyelerinin eğitim tarihleri ve tatbikat katılımı',
    ],
  },
  {
    baslik: '5. Tahliye ve toplanma',
    icerik: [
      'Kat planları üzerinde kaçış yolları ve çıkışlar',
      'Toplanma yerinin krokisi ve mesafesi',
      'Sayım sorumlusu ve çalışan listesinin nerede tutulduğu',
      'Engelli veya yardıma muhtaç çalışanlar için özel düzen',
    ],
  },
  {
    baslik: '6. Haberleşme ve dış kuruluşlar',
    icerik: [
      'Acil çağrı numarası 112 ve iç haberleşme zinciri',
      'İtfaiye, AFAD, en yakın hastane bilgileri',
      'Komşu iş yerlerine bildirim gereken durumlar',
    ],
  },
  {
    baslik: '7. Tatbikat ve gözden geçirme',
    icerik: [
      'Yılda en az bir tatbikat; tarih ve senaryo kaydı',
      'Tatbikat sonrası düzeltici faaliyetler',
      'İş yerinde değişiklik olduğunda planın güncellenmesi',
    ],
  },
];
