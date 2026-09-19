/**
 * src/data/levhalar.ts içindeki levhaları A4 PDF'e basar.
 *
 * Chrome'un headless moduyla HTML → PDF yapıyoruz; ayrı bir PDF kütüphanesi
 * kurmaya gerek yok ve çıktı vektörel kalıyor, yani A4'e basıldığında
 * piktogram kenarları keskin. Çıktılar public/levhalar/ altına yazılır ve
 * repoya dahil edilir; böylece derleme ortamında Chrome aranmaz.
 *
 * Kullanım: npm run levhalar
 */
import { execFile } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const run = promisify(execFile);
const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const CHROME = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

async function chromeBul() {
  const { access } = await import('node:fs/promises');
  for (const yol of CHROME) {
    try {
      await access(yol);
      return yol;
    } catch {
      /* sıradakine bak */
    }
  }
  throw new Error('Chrome bulunamadı. PDF üretimi için Chrome veya Chromium gerekiyor.');
}

/** levhalar.ts'i TypeScript derleyicisi olmadan okuyabilmek için sade bir ayrıştırma. */
async function levhalariOku() {
  const { readFile } = await import('node:fs/promises');
  const kaynak = await readFile(path.join(kok, 'src/data/levhalar.ts'), 'utf8');
  const dizi = kaynak.slice(kaynak.indexOf('export const levhalar'));
  const levhalar = [];
  for (const blok of dizi.split(/\n  {\n/).slice(1)) {
    const al = (alan) => {
      const m = blok.match(new RegExp(`${alan}: '((?:[^'\\\\]|\\\\.)*)'`));
      return m ? m[1].replace(/\\'/g, "'") : '';
    };
    if (!al('slug')) continue;
    levhalar.push({ slug: al('slug'), baslik: al('baslik'), metin: al('metin'), tur: al('tur'), iso: al('iso') });
  }
  return levhalar;
}

/** ISO 7010 işaretini dosyadan okuyup sayfaya gömülebilir hâle getirir. */
async function isaretOku(iso) {
  const { readFile } = await import('node:fs/promises');
  const ham = await readFile(path.join(kok, 'src/assets/isaretler', `${iso}.svg`), 'utf8');
  const onek = `s${iso}`;
  const acilis = ham.slice(0, ham.indexOf('>') + 1);
  const g = (ad) => acilis.match(new RegExp(`${ad}="([\\d.]+)`))?.[1];
  // Kaynak dosyanın KENDİ viewBox'ı varsa ona dokunulmaz. Eskiden viewBox
  // her zaman width/height'tan yeniden kuruluyordu; width/height taşımayan
  // (yalnız viewBox'lı) bir SVG geldiğinde koordinat sistemi 100x100'e
  // düşüyor ve çizim kâğıdın dışında kalıp levha BOŞ basılıyordu.
  const mevcutVb = acilis.match(/viewBox="[^"]+"/)?.[0];
  const vb = mevcutVb ?? `viewBox="0 0 ${g('width') ?? '100'} ${g('height') ?? '100'}"`;
  const yeniAcilis = acilis
    .replace(/\s(width|height)="[^"]*"/g, '')
    .replace(/\sviewBox="[^"]*"/g, '')
    .replace('<svg', `<svg ${vb} width="100%" height="100%" preserveAspectRatio="xMidYMid meet"`);
  return (yeniAcilis + ham.slice(acilis.length))
    .replace(/id="([^"]+)"/g, (_, d) => `id="${onek}-${d}"`)
    .replace(/url\(#([^)]+)\)/g, (_, d) => `url(#${onek}-${d})`)
    .replace(/(xlink:href|href)="#([^"]+)"/g, (_, a, d) => `${a}="#${onek}-${d}"`);
}

function sayfaHtml(levha, isaret) {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<style>
  @page { size: A4 portrait; margin: 0; }
  * { box-sizing: border-box; }
  body {
    margin: 0; width: 210mm; height: 297mm;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex; flex-direction: column; align-items: center;
    padding: 14mm 14mm 12mm;
    color: #111;
  }
  .isaret { width: 150mm; height: 150mm; }
  .isaret svg { width: 100%; height: 100%; display: block; }
  main {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center; width: 100%;
  }
  h1 {
    font-size: 15mm; line-height: 1.12; font-weight: 800; letter-spacing: -0.01em;
    text-align: center; margin: 10mm 0 0; text-wrap: balance; max-width: 180mm;
  }
  footer {
    margin-top: auto; width: 100%; display: flex; justify-content: space-between;
    align-items: baseline; font-size: 3.4mm; color: #666;
    border-top: 0.4mm solid #ddd; padding-top: 3mm;
  }
  footer strong { color: #333; font-weight: 600; }
</style></head><body>
  <main>
    <div class="isaret">${isaret}</div>
    <h1>${levha.metin}</h1>
  </main>
  <footer>
    <span><strong>dijitalosgb.com</strong> — ücretsiz iş yeri güvenlik levhası</span>
    <span>Sağlık ve Güvenlik İşaretleri Yönetmeliği düzenine göre hazırlanmıştır</span>
  </footer>
</body></html>`;
}

const chrome = await chromeBul();
const levhalar = await levhalariOku();
const cikti = path.join(kok, 'public/levhalar');
const gecici = path.join(kok, '.levha-tmp');
await mkdir(cikti, { recursive: true });
await mkdir(gecici, { recursive: true });

for (const levha of levhalar) {
  const html = path.join(gecici, `${levha.slug}.html`);
  await writeFile(html, sayfaHtml(levha, await isaretOku(levha.iso)), 'utf8');
  await run(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${path.join(cikti, `${levha.slug}.pdf`)}`,
    `file://${html}`,
  ]);
  process.stdout.write(`  ✓ ${levha.slug}\n`);
}

await rm(gecici, { recursive: true, force: true });
console.log(`\n${levhalar.length} levha PDF olarak üretildi → public/levhalar/`);
