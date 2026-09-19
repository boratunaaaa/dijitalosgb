/**
 * src/data/kutuphane.ts içindeki boş form şablonlarını A4 PDF'e basar.
 * Levha üreticisiyle aynı yöntem: Chrome headless, vektörel çıktı.
 *
 * Kullanım: npm run formlar
 */
import { execFile } from 'node:child_process';
import { mkdir, writeFile, rm, readFile, access } from 'node:fs/promises';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const run = promisify(execFile);
const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const ADAYLAR = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

async function chromeBul() {
  for (const yol of ADAYLAR) {
    try {
      await access(yol);
      return yol;
    } catch {
      /* sıradakine bak */
    }
  }
  throw new Error('Chrome bulunamadı.');
}

/** kutuphane.ts'i TypeScript derlemeden okumak için JSON'a çevirip değerlendiriyoruz. */
async function formlariOku() {
  const kaynak = await readFile(path.join(kok, 'src/data/kutuphane.ts'), 'utf8');
  const bas = kaynak.indexOf('export const formlar');
  const dizi = kaynak.slice(kaynak.indexOf('[', bas), kaynak.indexOf('\n];', bas) + 2);
  // TS'e özgü tek şey tip ek açıklamaları değil, tırnak biçimi; doğrudan değerlendirilebilir.
  return eval(dizi);
}

const kac = (m) => String(m).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function alanHtml(a) {
  if (a.tip === 'satir') {
    const g = a.genislik === 'yarim' ? 'w50' : a.genislik === 'ucte' ? 'w33' : 'w100';
    return `<div class="alan ${g}"><span class="etiket">${kac(a.etiket)}</span><span class="cizgi"></span></div>`;
  }
  if (a.tip === 'metin') {
    return `<div class="alan w100"><span class="etiket">${kac(a.etiket)}</span>${'<span class="cizgi uzun"></span>'.repeat(a.satir)}</div>`;
  }
  if (a.tip === 'tablo') {
    const bas = a.basliklar.map((b) => `<th>${kac(b)}</th>`).join('');
    const bosSatir = `<tr>${a.basliklar.map(() => '<td></td>').join('')}</tr>`;
    return `<table><thead><tr>${bas}</tr></thead><tbody>${bosSatir.repeat(a.satirSayisi)}</tbody></table>`;
  }
  if (a.tip === 'not') {
    return `<p class="not">${kac(a.metin)}</p>`;
  }
  return `<div class="imzalar">${a.roller
    .map((r) => `<div class="imza"><span class="kutu"></span><span>${kac(r)}</span></div>`)
    .join('')}</div>`;
}

function sayfaHtml(form) {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>
  @page { size: A4 ${form.yatay ? 'landscape' : 'portrait'}; margin: 12mm 12mm 14mm; }
  * { box-sizing: border-box; }
  body { margin:0; font-family:"Helvetica Neue",Helvetica,Arial,sans-serif; color:#111; font-size:9pt; }
  header { border-bottom: 1.2pt solid #111; padding-bottom: 3mm; margin-bottom: 5mm;
           display:flex; justify-content:space-between; align-items:flex-end; gap:10mm; }
  h1 { font-size: 14pt; margin:0; letter-spacing:-.01em; }
  .dayanak { font-size:7.5pt; color:#555; max-width:95mm; text-align:right; line-height:1.35; }
  .satirlar { display:flex; flex-wrap:wrap; gap:3mm 5mm; margin-bottom:5mm; }
  .alan { display:flex; flex-direction:column; gap:1mm; }
  .w100{width:100%} .w50{width:calc(50% - 2.5mm)} .w33{width:calc(33.333% - 3.34mm)}
  .etiket { font-size:7.5pt; color:#444; text-transform:uppercase; letter-spacing:.04em; }
  .cizgi { display:block; border-bottom:.5pt solid #999; height:6mm; }
  .cizgi.uzun { height:7mm; }
  table { width:100%; border-collapse:collapse; margin:0 0 5mm; }
  th,td { border:.5pt solid #999; padding:1.5mm 2mm; font-size:8pt; text-align:left; }
  th { background:#f1f1f1; font-size:7.5pt; text-transform:uppercase; letter-spacing:.03em; }
  td { height:7mm; }
  .not { border:.5pt solid #999; background:#fafafa; padding:3mm; font-size:8pt; line-height:1.45; margin:0 0 5mm; }
  .imzalar { display:flex; gap:8mm; margin-top:4mm; }
  .imza { flex:1; display:flex; flex-direction:column; gap:1.5mm; font-size:8pt; color:#444; }
  .kutu { display:block; height:16mm; border-bottom:.5pt solid #999; }
  footer { position:fixed; bottom:4mm; left:0; right:0; display:flex; justify-content:space-between;
           font-size:7pt; color:#777; border-top:.4pt solid #ddd; padding-top:2mm; }
</style></head><body>
  <header>
    <h1>${kac(form.ad)}</h1>
    <p class="dayanak">${kac(form.dayanak)}</p>
  </header>
  <div class="satirlar">${form.alanlar.filter((a) => a.tip === 'satir').map(alanHtml).join('')}</div>
  ${form.alanlar.filter((a) => a.tip !== 'satir').map(alanHtml).join('')}
  <footer>
    <span>dijitalosgb.com — ücretsiz İSG form şablonu</span>
    <span>Bu boş şablondur; iş yerinize göre doldurulur ve iş yerinde saklanır.</span>
  </footer>
</body></html>`;
}

const chrome = await chromeBul();
const formlar = await formlariOku();
const cikti = path.join(kok, 'public/formlar');
const gecici = path.join(kok, '.form-tmp');
await mkdir(cikti, { recursive: true });
await mkdir(gecici, { recursive: true });

for (const form of formlar) {
  const html = path.join(gecici, `${form.slug}.html`);
  await writeFile(html, sayfaHtml(form), 'utf8');
  await run(chrome, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${path.join(cikti, `${form.slug}.pdf`)}`,
    `file://${html}`,
  ]);
  process.stdout.write(`  ✓ ${form.slug}\n`);
}

await rm(gecici, { recursive: true, force: true });
console.log(`\n${formlar.length} form PDF olarak üretildi → public/formlar/`);
