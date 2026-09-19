# dijitalosgb.com — kurulum durumu ve senden gerekenler

## Ne kuruldu

Astro (statik) + Cloudflare Pages için hazır. **31 sayfa**, çalıştırılabilir
JavaScript **sıfır** — sayfalardaki tek `<script>` etiketi schema.org verisi.

```
/                          ana sayfa
/osgb-hizmeti/             saha hizmeti merkezi
/osgb/<ilce>/              6 ilçe (İstanbul + Kocaeli + Tekirdağ)
/isg-egitimi/              ulusal eğitim merkezi (Course + FAQPage şeması)
/isg-egitimi/<il>/         15 sanayi ili
/mobil-saglik-taramasi/    mobil araç hizmeti
/rehber/                   3 soru-cevap sayfası (FAQPage şeması)
/teklif-al/  /tesekkurler/ talep formu
/sitemap-index.xml  /robots.txt  /llms.txt
```

## Arama ve yapay zekâ görünürlüğü için yapılanlar

- **SEO:** kanonik adres, sitemap, robots, benzersiz başlık/açıklama,
  `trailingSlash: always` (çift URL olmasın).
- **AEO:** rehber sayfaları ve eğitim merkezi `FAQPage` şemasıyla; içerik
  "soru başlığı + kısa kesin cevap" kalıbında yazıldı.
- **GEO/AIO:** `/llms.txt` build'de üretiliyor. Yapay zekâ özetlerinin en
  kolay yanlış yaptığı nokta olan "bu bir OSGB mi" sorusunu orada açıkça
  cevaplıyoruz. Her sayfada `Organization` şeması aynı ifadeyi taşıyor.
- **Eğitim sayfaları `Course` + `CourseInstance`** — bu nişte rakiplerde
  neredeyse hiç yok, eğitim zengin sonucuna aday.

### Bilerek yapılmayan

81 ile ayrı sayfa açılmadı. Eğitimde coğrafi sınır yok ve 81 ilin tamamı
kapsama listesinde görünüyor; ama içeriği yalnız şehir adı değişen sayfalar
"doorway page" kalıbıdır ve Google bunu düşük kalite sayar. Sayfa, o il için
gerçek bir şey söyleyebiliyorsak açıldı (15 il). Liste
`src/data/iller.ts` üzerinden genişletilebilir — koşul: `sektor` alanı
doldurma cümlesi olmayacak.

## SENDEN GEREKENLER

### 1. Cloudflare hesabı (ücretsiz)
- cloudflare.com'da hesap aç.
- `dijitalosgb.com` alan adını ekle.
- **Nameserver'ları GüzelHosting'den Cloudflare'e çevir.** Şu an
  `sg.guzelhosting.com` / `eu.guzelhosting.com`. Cloudflare sana iki NS
  adresi verecek; onları GüzelHosting panelinden yazacaksın.
- Bu adım olmadan Pages'e yayın yapılabilir ama yönlendirme kuralları ve
  ücretsiz analitik kullanılamaz.

### 2. GitHub deposu
- Boş bir depo aç (private olabilir).
- Depo adresini bana ver; kodu gönderip Cloudflare Pages'e bağlayacağız.
- Pages her `git push`ta otomatik yayınlar.

### 3. Brevo — form arka ucu
Zaten Brevo hesabın var. Gerekenler:
- Bir **API anahtarı** (Brevo → SMTP & API → API Keys).
- Gönderici olarak **doğrulanmış bir e-posta adresi**.
- Taleplerin düşeceği adres.

Bunları bana **yazma**; Cloudflare Pages → Settings → Environment variables
altına kendin gireceksin:
```
BREVO_API_KEY     (Secret olarak)
TEKLIF_GONDEREN   doğrulanmış gönderici adresi
TEKLIF_ALICI      taleplerin düşeceği adres
```

### 4. Google Business Profile
Yerel aramada harita paketine girmenin tek yolu. Fiziksel adres ve
doğrulama gerekiyor. Site ne kadar iyi olursa olsun bunun yerine geçmiyor.

### 5. Google Search Console
Alan adı doğrulaması (Cloudflare'e geçince DNS ile tek tıkla yapılır),
ardından sitemap gönderimi.

### 6. İçerik için bana lazım olanlar
- **Yetki belgesi numarası** (iş ortağı OSGB'nin). `src/data/site.ts` içinde
  boş; doldurulunca güven bloğunda otomatik görünür, boş kaldığı sürece o
  satır hiç basılmaz.
- **Telefon / e-posta / WhatsApp** — aynı dosyada boş duruyor.
- **İSG uzmanlığı belge sınıfın (A/B/C)** — hangi tehlike sınıfına hizmet
  verebileceğini belirliyor, sayfa hedeflerini o çiziyor.

## İkinci alan adı

`dijitalosgb.com.tr` henüz DNS'te görünmüyor (.tr kayıtları geç delege
olabiliyor). Delege olunca **301 ile `.com`'a yönlendirilecek** — iki ayrı
site kurulmayacak, o mükerrer içerik olur ve ikisini birden zayıflatır.
Cloudflare'de tek bir Redirect Rule yeterli.

## Yerelde çalıştırma

```
cd ~/ClaudeWork/dijitalosgb
npm run dev      # geliştirme sunucusu
npm run build    # dist/ üretir
```
