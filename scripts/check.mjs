import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { site } from '../src/content/site.mjs';
import { pages } from '../src/templates/pages.mjs';

const output = new URL('../dist/', import.meta.url);
const pathToFile = (path) => path.endsWith('/') ? `${path}index.html` : path;
const outputFile = (path) => new URL(pathToFile(path).slice(1), output);
const pageByPath = new Map();
const titles = new Set();
const descriptions = new Set();
const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');

for (const page of pages) {
  const html = await readFile(outputFile(page.path), 'utf8');
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `H1: ${page.path}`);
  assert.ok(page.title && page.title.length <= 72 && !titles.has(page.title), `Title: ${page.path}`);
  assert.ok(page.description && page.description.length <= 160 && !descriptions.has(page.description), `Description: ${page.path}`);
  titles.add(page.title);
  descriptions.add(page.description);
  const canonical = `${site.origin}${page.path}`;
  assert.equal(html.includes(`rel="canonical" href="${canonical}"`), !page.noindex, `Canonical: ${page.path}`);
  assert.equal(sitemap.includes(`<loc>${canonical}</loc>`), !page.noindex, `Sitemap: ${page.path}`);
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(tag, /\balt="[^"]+"/, page.path);
    assert.match(tag, /\bwidth="\d+"/, page.path);
    assert.match(tag, /\bheight="\d+"/, page.path);
  }
  pageByPath.set(page.path, html);
}

let links = 0;
for (const [path, html] of pageByPath) {
  const targets = new Set([
    ...[...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map(([, url]) => url),
    ...[...html.matchAll(/\bsrcset="([^"]+)"/g)].flatMap(([, urls]) => urls.split(',').map((url) => url.trim().split(' ')[0])),
  ]);
  for (const target of targets) {
    if (!target.startsWith('/') && !target.startsWith('#')) continue;
    const url = new URL(target, site.origin + path);
    assert.equal(url.origin, site.origin, `Origine inattesa: ${target}`);
    assert.ok((await stat(outputFile(url.pathname))).isFile(), `File mancante: ${target}`);
    if (url.hash) {
      assert.ok(pageByPath.get(url.pathname)?.includes(`id="${url.hash.slice(1)}"`), `Ancora mancante: ${target}`);
    }
    if (url.searchParams.has('prodotto')) {
      assert.ok(pageByPath.get(url.pathname)?.includes(`<option value="${url.searchParams.get('prodotto')}">`), `Prodotto mancante: ${target}`);
    }
    links++;
  }
}
console.log(`Verificate ${pages.length} pagine e ${links} riferimenti interni.`);
