import { registeredAddress, site } from '../content/site.mjs';

export function escape(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

const menu = [
  ['/services/', 'Prodotti'],
  ['/azienda/', 'Azienda'],
  ['/cataloghi/', 'Cataloghi'],
  ['/contatti/', 'Contatti'],
];

const paths = {
  right: 'M4 9h10m-4-4 4 4-4 4',
  diagonal: 'M5 5l8 8M13 6v7H6',
  plus: 'M9 3v12M3 9h12',
  phone: 'M5 3h3l1 4-2 1a8 8 0 0 0 3 3l1-2 4 1v3a2 2 0 0 1-2 2A11 11 0 0 1 3 5a2 2 0 0 1 2-2Z',
  chat: 'M3 14.5 4 11a6 6 0 1 1 2.6 2.5L3 14.5Z',
  pin: 'M14 7c0 4-5 8-5 8S4 11 4 7a5 5 0 1 1 10 0ZM9 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z',
  mail: 'M3 5h12v9H3zM3 5l6 5 6-5',
  menu: 'M3 6h12M3 12h12',
  close: 'M4 4l10 10M14 4 4 14',
};

export const icon = (name) => `<svg class="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
export const glass = '<span class="glass" aria-hidden="true"></span>';
export const button = (href, label, style = 'dark', symbol = 'diagonal') => `<a class="btn btn--${style}" href="${escape(href)}">${style === 'glass' ? glass : ''}${escape(label)}${icon(symbol)}</a>`;
export const emailLink = (subject) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
export const whatsapp = `https://wa.me/${site.telephone.slice(1)}`;

export function breadcrumb(current, parent) {
  return `<nav class="crumbs" aria-label="Percorso"><ol><li><a href="/">Home</a></li>${parent ? `<li><a href="${parent.url}">${parent.name}</a></li>` : ''}<li aria-current="page">${escape(current)}</li></ol></nav>`;
}

const logo = (white = false) => `<img src="/assets/img/logo-ire${white ? '-bianco' : ''}.png" width="113" height="79" alt="IRE Torino">`;

function header(path) {
  const over = path === '/';
  return `<header class="header${over ? ' header--over' : ''}">
    <div class="wrap header__bar">
      <a class="brand" href="/" aria-label="IRE Torino, homepage">${over ? `<span class="brand__light">${logo(true)}</span><span class="brand__dark">${logo()}</span>` : logo()}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Apri il menu" hidden>${icon('menu')}</button>
      <nav id="main-nav" class="nav" aria-label="Principale">
        ${menu.map(([url, label]) => `<a class="nav__link" href="${url}"${path === url ? ' aria-current="page"' : path.startsWith(url) ? ' aria-current="true"' : ''}>${label}</a>`).join('')}
        <a class="nav__phone" href="tel:${site.telephone}">${icon('phone')}${site.phone}</a>
      </nav>
    </div>
  </header>`;
}

function dock(path) {
  if (path.startsWith('/contatti/')) return '';
  return `<aside class="dock" aria-label="Contatto rapido">
    <span class="glass" aria-hidden="true"></span>
    <a class="dock__main" href="/contatti/#preventivo">Richiedi un preventivo${icon('diagonal')}</a>
    <a class="dock__icon" href="${whatsapp}" aria-label="Scrivici su WhatsApp">${icon('chat')}</a>
    <a class="dock__icon" href="tel:${site.telephone}" aria-label="Chiama ${site.phone}">${icon('phone')}</a>
  </aside>`;
}

// Sezione del footer: aperta su desktop, a fisarmonica su mobile (site.js).
const section = (title, links) => `<details class="footer__group" open><summary><h2>${title}</h2>${icon('plus')}</summary><div class="footer__links">${links}</div></details>`;

function footer(groups, products) {
  return `<footer class="footer"><div class="wrap">
    <div class="footer__main">
      <div class="footer__brand"><a class="brand" href="/" aria-label="IRE Torino, homepage">${logo()}</a><p>Infissi, tapparelle, persiane e tutto ciò che serve al vano finestra. Da Mappano, per Torino e provincia.</p></div>
      ${groups.map((group) => section(group.name, products.filter((item) => item.group === group.id).map((item) => `<a href="${item.url}">${item.name}</a>`).join(''))).join('')}
      ${section('IRE Torino', `${menu.slice(1).map(([url, label]) => `<a href="${url}">${label}</a>`).join('')}
        <address><a href="tel:${site.telephone}">${site.phone}</a><a href="mailto:${site.email}">${site.email}</a><a href="${site.operatingOffice.mapUrl}">${escape(site.operatingOffice.address)}</a></address>
        <p class="footer__social"><a href="${site.instagram}">Instagram</a><a href="${site.facebook}">Facebook</a></p>`)}
    </div>
    <div class="footer__legal">
      <p>${escape(site.legalName)} · Sede legale ${escape(registeredAddress)} · P. IVA ${site.vat} · REA ${site.rea} · PEC <a href="mailto:${site.pec}">${site.pec}</a></p>
      <a href="/privacy-cookie-policy/">Privacy e cookie</a>
    </div>
  </div></footer>`;
}

export function layout({ path, title, description, content, image = 'apertura', noindex = false, schema }, { groups, products }) {
  const canonical = `${site.origin}${path}`;
  return `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  ${noindex ? '<meta name="robots" content="noindex, follow">' : `<link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="it_IT">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.origin}/assets/img/${image}.webp">`}
  <meta name="theme-color" content="#ffffff">
  <link rel="icon" href="/assets/img/favicon.png" type="image/png">
  <link rel="preload" href="/assets/fonts/hanken-grotesk.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/site.css">
  <script type="module" src="/assets/js/site.js"></script>
  ${schema ? `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>` : ''}
</head>
<body${path === '/' ? ' class="is-home"' : ''}>
  <a class="skip-link" href="#contenuto">Vai al contenuto</a>
  ${header(path)}
  <main id="contenuto">${content}</main>
  ${footer(groups, products)}
  ${dock(path)}
</body>
</html>
`;
}
