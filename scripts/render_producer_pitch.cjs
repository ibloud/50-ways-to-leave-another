// Development print route using existing Chromium/Playwright; no new runtime dependency.
// Build documents first, then CHROMIUM_EXECUTABLE=/usr/bin/chromium node scripts/render_producer_pitch.cjs.
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
(async () => {
  const root = path.resolve(__dirname, '..');
  const document = fs.readFileSync(path.join(root, 'docs/cinematic-series-pitch.html'), 'utf8');
  const content = document.match(/<article>([\s\S]*?)<p class="document-source">/);
  if (!content) throw new Error('Generated producer-pitch article not found.');
  // Resolve only document links in the exported PDF. No remote media is fetched.
  const article = content[1].replace(/href="([^":]+)"/g, (_, target) => {
    const absolute = new URL(target, process.env.PITCH_DOCUMENT_BASE || 'https://50ways.loptrlab.com/docs/cinematic-series-pitch.html');
    return `href="${absolute.href}"`;
  });
  const browser = await chromium.launch({headless:true, ...(process.env.CHROMIUM_EXECUTABLE ? {executablePath:process.env.CHROMIUM_EXECUTABLE} : {}), args:['--no-sandbox']});
  const page = await browser.newPage();
  await page.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>50 Ways to Leave Another — producer pitch review draft</title></head><body><main>${article}</main></body></html>`);
  await page.addStyleTag({content:`
    @page { size:A4; margin:18mm; }
    body { font:11pt/1.5 Arial,sans-serif; color:#231727; background:white; }
    h1 { font:26pt/1.15 Georgia,serif; margin:0 0 14pt; }
    h2 { font:17pt/1.2 Georgia,serif; margin:20pt 0 9pt; }
    h1,h2 { break-after:avoid; }
    p,li { orphans:3; widows:3; }
    a { color:#514052; overflow-wrap:anywhere; }
    strong { font-weight:700; }
  `});
  await page.pdf({path:path.join(root,'pitch/producer-pitch.pdf'),format:'A4',printBackground:true,tagged:true,outline:true,preferCSSPageSize:true});
  await browser.close();
})();
