import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { site } from '../src/content/site.mjs';
import { layout } from '../src/templates/layout.mjs';
import { groups, products } from '../src/content/products.mjs';
import { pages } from '../src/templates/pages.mjs';

const output = new URL('../dist/', import.meta.url);
const routes = new Set();

for (const page of pages) {
  if (routes.has(page.path)) throw new Error(`Indirizzo duplicato: ${page.path}`);
  routes.add(page.path);
}

await rm(output, { recursive: true, force: true });
await mkdir(output);
await cp(new URL('../src/assets/', import.meta.url), new URL('assets/', output), { recursive: true });

for (const page of pages) {
  const location = new URL(page.path.slice(1), output);
  if (page.path.endsWith('/')) {
    await mkdir(location, { recursive: true });
    await writeFile(new URL('index.html', location), layout(page, { groups, products }));
  } else {
    await writeFile(location, layout(page, { groups, products }));
  }
}

const entries = pages.filter((page) => !page.noindex).map((page) => `  <url><loc>${site.origin}${page.path}</loc></url>`);
await writeFile(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`);
await writeFile(new URL('robots.txt', output), `User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`);
console.log(`Generate ${pages.length} pagine HTML e ${entries.length} URL nella sitemap.`);
