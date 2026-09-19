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

  const renkBlok = kaynak.match(/turRenkleri[^=]*=\s*{([\s\S]*?)\n};/)[1];
  const renkler = {};
  for (const m of renkBlok.matchAll(/(\w+):\s*{\s*zemin:\s*'([^']+)',\s*cizim:\s*'([^']+)'/g)) {
    renkler[m[1]] = { zemin: m[2], cizim: m[3] };
  }

  const dizi = kaynak.slice(kaynak.indexOf('export const levhalar'));
  const levhalar = [];
  for (const blok of dizi.split(/\n  {\n/).slice(1)) {
    const al = (alan) => {
      const m = blok.match(new RegExp(`${alan}: '((?:[^'\\\\]|\\\\.)*)'`));
      return m ? m[1].replace(/\\'/g, "'") : '';
    };
    const ikon = blok.match(/ikon: `([\s\S]*?)`,/);
    if (!al('slug')) continue;
    levhalar.push({
      slug: al('slug'),
      baslik: al('baslik'),
      metin: al('metin'),
      tur: al('tur'),
      ikon: ikon ? ikon[1] : '',
    });
  }
  return { levhalar, renkler };
}

/** Levhanın işaret gövdesi — türüne göre şekil, renk ve piktogram yerleşimi. */
function isaretSvg(levha, renk) {
  const { zemin, cizim } = renk;
  const ikon = `<g fill="${cizim}" stroke="${cizim}" style="--zemin:${zemin};color:${cizim}" transform="translate(50 50) scale(0.62) translate(-50 -50)">${levha.ikon}</g>`;

  if (levha.tur === 'yasak') {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#C8102E"/>
      <circle cx="50" cy="50" r="38" fill="#ffffff"/>
      ${ikon}
      <rect x="44" y="-2" width="12" height="104" fill="#C8102E" transform="rotate(45 50 50)"/>
    </svg>`;
  }
  if (levha.tur === 'uyari') {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 2 98 92H2Z" fill="#1a1a1a"/>
      <path d="M50 16 86 84H14Z" fill="${zemin}"/>
      <g transform="translate(0 12)">${ikon}</g>
    </svg>`;
  }
  if (levha.tur === 'emredici') {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="${zemin}"/>
      ${ikon}
    </svg>`;
  }
  // acil ve yangin: dolu dikdörtgen
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="12" width="96" height="76" rx="4" fill="${zemin}"/>
    ${ikon}
  </svg>`;
}

function sayfaHtml(levha, renkler) {
  const renk = renkler[levha.tur];
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
    <div class="isaret">${isaretSvg(levha, renk)}</div>
    <h1>${levha.metin}</h1>
  </main>
  <footer>
    <span><strong>dijitalosgb.com</strong> — ücretsiz iş yeri güvenlik levhası</span>
    <span>Sağlık ve Güvenlik İşaretleri Yönetmeliği düzenine göre hazırlanmıştır</span>
  </footer>
</body></html>`;
}

const chrome = await chromeBul();
const { levhalar, renkler } = await levhalariOku();
const cikti = path.join(kok, 'public/levhalar');
const gecici = path.join(kok, '.levha-tmp');
await mkdir(cikti, { recursive: true });
await mkdir(gecici, { recursive: true });

for (const levha of levhalar) {
  const html = path.join(gecici, `${levha.slug}.html`);
  await writeFile(html, sayfaHtml(levha, renkler), 'utf8');
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
