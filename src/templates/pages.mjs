import { readFileSync } from 'node:fs';
import { registeredAddress, site } from '../content/site.mjs';
import { catalogs, groups, products } from '../content/products.mjs';
import { breadcrumb, button, emailLink, escape, icon, whatsapp } from './layout.mjs';

const images = JSON.parse(readFileSync(new URL('../content/images.json', import.meta.url)));
const groupOf = (id) => groups.find((group) => group.id === id);

function photo(key, alt, { hero = false, sizes } = {}) {
  const { width, height } = images[key];
  return `<img src="/assets/img/${key}.webp" width="${width}" height="${height}" alt="${escape(alt)}"${sizes ? ` sizes="${sizes}"` : ''} ${hero ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
}

// La fascia nera a chevron delle copertine dei cataloghi IRE.
const chevron = '<svg class="chevron" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 200 70 400 0v50L200 120 0 50Z"/></svg>';

function pageHead(title, line, lead, parent) {
  return `<header class="page-head"><div class="wrap">
    ${breadcrumb(title, parent)}
    <h1>${escape(title)}${line ? `<span>${escape(line)}</span>` : ''}</h1>
    ${lead ? `<p class="lead">${escape(lead)}</p>` : ''}
  </div></header>`;
}

function familyCard(group) {
  return `<li><a class="family family--${group.id}" href="/services/#${group.id}">
    <h3>${group.name}<span>${group.line}</span></h3>
    <div class="family__photo">${chevron}${photo(group.image, group.alt, { sizes: '(min-width: 900px) 25vw, 80vw' })}</div>
    <span class="plus">${icon('plus')}</span>
  </a></li>`;
}

function productCard(product) {
  return `<li><a class="card" href="${product.url}">
    <div class="card__photo">${photo(product.image, product.alt, { sizes: '(min-width: 900px) 30vw, 90vw' })}<span class="plus">${icon('plus')}</span></div>
    <h3>${escape(product.name)}</h3><p>${escape(product.intro)}</p>
  </a></li>`;
}

function closing(product) {
  const url = product ? `/contatti/?prodotto=${product.slug}#preventivo` : '/contatti/#preventivo';
  return `<section class="closing"><div class="wrap closing__inner">
    <h2>Raccontaci il tuo progetto.<span>Ti richiamiamo noi.</span></h2>
    <div class="closing__actions">
      ${button(url, 'Richiedi un preventivo', 'light')}
      <a class="closing__link" href="tel:${site.telephone}">${icon('phone')}${site.phone}</a>
      <a class="closing__link" href="${whatsapp}">${icon('chat')}Scrivici su WhatsApp</a>
    </div>
  </div></section>`;
}

const phases = [
  ['Consulenza', 'Partiamo dal tipo di intervento, dal vano e da come usi lo spazio.'],
  ['Scelta della soluzione', 'Valutiamo materiali, aperture, schermature e raccordi con la parete.'],
  ['Fornitura e posa', 'Definiamo i prodotti, i dettagli di installazione e il coordinamento con il cantiere.'],
];

const steps = () => `<ol class="steps">${phases.map(([title, text]) => `<li><h3>${title}</h3><p>${text}</p></li>`).join('')}</ol>`;

const companySchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.origin}/#ire`,
  name: site.name,
  legalName: site.legalName,
  url: site.origin,
  telephone: site.telephone,
  email: site.email,
  image: `${site.origin}/assets/img/apertura.webp`,
  vatID: site.euVat,
  taxID: site.taxCode,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.registeredOffice.street,
    addressLocality: site.registeredOffice.city,
    addressRegion: site.registeredOffice.province,
    postalCode: site.registeredOffice.postalCode,
    addressCountry: 'IT',
  },
};

const home = {
  path: '/',
  title: 'Serramenti e infissi a Torino | IRE Torino',
  description: 'IRE Torino fornisce e posa serramenti, schermature e soluzioni per il vano finestra. Per privati, imprese e serramentisti a Torino.',
  schema: companySchema,
  content: `<section class="hero" aria-labelledby="titolo-home">
    ${photo('apertura', 'Camera con persiane a lamelle bianche davanti alla portafinestra', { hero: true, sizes: '100vw' })}
    <div class="hero__copy wrap">
      <h1 id="titolo-home">Tutto il vano finestra.<span>Un solo interlocutore.</span></h1>
      <p>Infissi, isolamento, schermature e posa per chi rinnova casa a Torino e provincia.</p>
      <div class="actions">${button('/services/', 'Scopri i prodotti', 'light')}${button('/contatti/#preventivo', 'Richiedi un preventivo', 'ghost-light')}</div>
    </div>
  </section>
  <section class="section" aria-labelledby="famiglie">
    <div class="wrap">
      <h2 id="famiglie" class="title">Da dove vuoi partire?<span>Quattro famiglie, un progetto unico.</span></h2>
      <ul class="families">${groups.map(familyCard).join('')}</ul>
    </div>
  </section>
  <section class="statement" aria-labelledby="posa">
    ${photo('posa', 'Tecnico che installa un serramento sul vano finestra')}
    <p class="statement__word" aria-hidden="true">posa</p>
    <div class="statement__copy">
      <h2 id="posa">Il serramento giusto,<span>montato nel vano giusto.</span></h2>
      <p>Controtelaio, cassonetto, schermatura e posa vanno pensati insieme. Per questo li seguiamo tutti.</p>
      ${button('/azienda/', 'Come lavoriamo', 'light')}
    </div>
  </section>
  <section class="section">
    <div class="wrap duo">
      <a class="panel" href="/azienda/">
        ${photo('progettazione', 'Disegni e materiali per la progettazione di un intervento')}
        <div class="panel__copy"><h2>Da Mappano,<span>per Torino e provincia.</span></h2><span class="btn btn--ghost-light">L’azienda${icon('diagonal')}</span></div>
      </a>
      <a class="panel panel--catalogs" href="/cataloghi/">
        <div class="panel__covers">${['cat-persiane', 'cat-avvolgibili', 'cat-monoblocchi'].map((key) => photo(key, 'Copertina di un catalogo IRE')).join('')}</div>
        <div class="panel__copy"><h2>Cataloghi IRE.<span>Ogni linea, nel dettaglio.</span></h2><span class="btn btn--ghost">Sfoglia i cataloghi${icon('diagonal')}</span></div>
      </a>
    </div>
  </section>
  ${closing()}`,
};

const directory = {
  path: '/services/',
  title: 'Prodotti e soluzioni | IRE Torino',
  description: 'Esplora serramenti, porte, sistemi di isolamento, schermature e pergole a catalogo IRE Torino.',
  content: `${pageHead('Prodotti', 'Tutto quello che serve al vano finestra.', 'Diciotto soluzioni in quattro famiglie, per la casa e per il cantiere.')}
  <nav class="tabs" aria-label="Famiglie"><div class="wrap">${groups.map((group) => `<a class="tabs__link tabs__link--${group.id}" href="#${group.id}">${group.name}</a>`).join('')}</div></nav>
  ${groups.map((group) => `<section id="${group.id}" class="section family-block" aria-labelledby="t-${group.id}"><div class="wrap">
    <div class="family-block__head family--${group.id}"><h2 id="t-${group.id}">${group.name}<span>${group.line}</span></h2><p>${group.text}</p></div>
    <ul class="cards">${products.filter((product) => product.group === group.id).map(productCard).join('')}</ul>
  </div></section>`).join('')}
  ${closing()}`,
};

function productPage(product) {
  const group = groupOf(product.group);
  const { heading, choices, figure, request, questions, related } = product.details;
  const requestUrl = `/contatti/?prodotto=${product.slug}#preventivo`;
  return {
    path: product.url,
    title: `${product.name} a Torino | IRE Torino`,
    description: product.intro,
    image: product.image,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        ['Home', '/'], ['Prodotti', '/services/'], [product.name, product.url],
      ].map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: site.origin + path })),
    },
    content: `<section class="cover family--${group.id}">
      <div class="cover__copy">
        ${breadcrumb(product.name, { url: '/services/', name: 'Prodotti' })}
        <h1>${escape(product.name)}<span>${escape(heading)}</span></h1>
        <p>${escape(product.intro)}</p>
        <div class="actions">${button(requestUrl, 'Richiedi un preventivo')}<a class="text-link" href="/services/#${group.id}">${group.name}${icon('right')}</a></div>
      </div>
      <figure class="cover__photo">${chevron}${photo(product.image, product.alt, { hero: true, sizes: '(min-width: 900px) 55vw, 100vw' })}</figure>
    </section>
    <nav class="tabs tabs--sticky" aria-label="In questa scheda"><div class="wrap">
      <a class="tabs__link" href="#scelta">Come scegliere</a>
      <a class="tabs__link" href="#domande">Domande frequenti</a>
      <a class="tabs__link" href="#richiesta">Prepara la richiesta</a>
    </div></nav>
    <section id="scelta" class="section"><div class="wrap">
      <h2 class="title">Come scegliere.<span>Le domande da farsi prima del preventivo.</span></h2>
      <ul class="choices">${choices.map(([title, text]) => `<li><h3>${escape(title)}</h3><p>${escape(text)}</p></li>`).join('')}</ul>
      ${figure ? `<figure class="feature">${photo(figure[0], figure[1], { sizes: '(min-width: 900px) 60vw, 100vw' })}<figcaption>${escape(figure[2])}</figcaption></figure>` : ''}
    </div></section>
    <section id="domande" class="section section--soft"><div class="wrap split">
      <h2 class="title">Domande<span>frequenti.</span></h2>
      <div class="faq">${questions.map(([question, answer]) => `<details><summary>${escape(question)}${icon('plus')}</summary><p>${escape(answer)}</p></details>`).join('')}</div>
    </div></section>
    <section id="richiesta" class="section"><div class="wrap split">
      <div><h2 class="title">Cosa preparare.<span>Bastano informazioni indicative.</span></h2>${button(requestUrl, 'Richiedi un preventivo')}</div>
      <ol class="checklist">${request.map((item) => `<li>${escape(item)}</li>`).join('')}</ol>
    </div></section>
    <section class="section section--soft"><div class="wrap">
      <h2 class="title">Da abbinare.<span>Soluzioni che lavorano insieme.</span></h2>
      <ul class="cards">${related.map((slug) => productCard(products.find((candidate) => candidate.slug === slug))).join('')}</ul>
    </div></section>
    ${closing(product)}`,
  };
}

const company = {
  path: '/azienda/',
  title: 'Azienda e supporto al progetto | IRE Torino',
  description: 'Conosci IRE Torino, azienda di Torino che supporta privati, imprese e serramentisti nella scelta, fornitura e posa dei prodotti.',
  image: 'progettazione',
  content: `${pageHead('IRE Torino', 'Dalla scelta alla posa.', 'Seguiamo privati, imprese di costruzione e serramentisti nella scelta, nella fornitura e nella posa dei prodotti per il vano finestra.')}
    <section class="section"><div class="wrap media">
      <figure class="media__photo">${photo('progettazione', 'Disegni e materiali per la progettazione di un intervento')}</figure>
      <div><h2 class="title">Un percorso in tre passi.<span>Con un riferimento unico.</span></h2><p class="lead">Seguiamo interventi su abitazioni e spazi commerciali. Affianchiamo il cliente nella scelta dei materiali, nel coordinamento dei prodotti e nella valutazione dei dettagli di posa.</p>${steps()}</div>
    </div></section>
    <section class="statement statement--short" aria-labelledby="t-sede">
      ${photo('acciaio', 'Parete vetrata con profili in acciaio in un interno a doppia altezza')}
      <div class="statement__copy"><h2 id="t-sede">Sede operativa<span>a Mappano.</span></h2><p>${escape(site.operatingOffice.address)}</p>${button(site.operatingOffice.mapUrl, 'Apri in Google Maps', 'light')}</div>
    </section>
    ${closing()}`,
};

const catalogPage = {
  path: '/cataloghi/',
  title: 'Cataloghi prodotti | IRE Torino',
  description: 'Consulta l’indice dei cataloghi IRE Torino e richiedi il materiale relativo a serramenti, schermature, protezione solare o isolamento.',
  content: `${pageHead('Cataloghi', 'Ogni linea, nel dettaglio.', 'Scegli il catalogo che ti interessa: te lo inviamo via email.')}
  <section class="section"><div class="wrap">
    <ul class="catalogs">${catalogs.map(([name, slug, cover]) => {
      const product = products.find((item) => item.slug === slug);
      return `<li class="catalog">
        <div class="catalog__cover">${photo(cover, `Copertina del catalogo IRE ${name}`)}</div>
        <h3>${escape(name)}</h3>
        <div class="catalog__actions"><a class="text-link" href="${emailLink(`Richiesta catalogo – ${name}`)}" aria-label="${escape(`Richiedi il catalogo ${name} via email`)}">Richiedi via email${icon('mail')}</a><a class="text-link" href="${product.url}">Vedi prodotto${icon('right')}</a></div>
      </li>`;
    }).join('')}</ul>
  </div></section>
  ${closing()}`,
};

const contacts = {
  path: '/contatti/',
  title: 'Contatti e preventivi a Torino | IRE Torino',
  description: 'Contatta IRE Torino per informazioni e preventivi. Telefono, WhatsApp, email e indirizzo della sede operativa a Mappano.',
  content: `${pageHead('Contatti', 'Parliamo del tuo progetto.', 'Indica il prodotto e il comune: le misure possono arrivare in un secondo momento.')}
  <div class="section"><div class="wrap contact">
    <section id="preventivo" class="contact__form" aria-labelledby="t-preventivo">
      <h2 id="t-preventivo" class="title title--small">Richiedi un preventivo</h2>
      <form id="request-form" data-email="${site.email}" hidden>
        <div class="fields">
          <label class="field field--wide"><span>Prodotto</span><select name="prodotto"><option value="">Vorrei un consiglio</option>${groups.map((group) => `<optgroup label="${group.name}">${products.filter((item) => item.group === group.id).map((item) => `<option value="${item.slug}">${item.name}</option>`).join('')}</optgroup>`).join('')}</select></label>
          <label class="field"><span>Nome e cognome</span><input name="nome" type="text" autocomplete="name" maxlength="100" required></label>
          <label class="field"><span>Comune</span><input name="comune" type="text" autocomplete="address-level2" maxlength="100"></label>
          <label class="field field--wide"><span>Tipo di intervento</span><select name="intervento"><option value="">Scegli se lo sai già</option><option>Nuova installazione</option><option>Sostituzione</option><option>Assistenza su un prodotto</option></select></label>
          <label class="field field--wide"><span>Dettagli del progetto</span><textarea name="dettagli" rows="5" maxlength="1000"></textarea></label>
        </div>
        <p class="form-note" id="email-note">Il pulsante apre una bozza nel tuo programma di posta. Potrai modificarla prima di inviarla.</p>
        <button class="btn btn--dark" type="submit" aria-describedby="email-note">Apri bozza email${icon('diagonal')}</button>
      </form>
      <p class="form-note">Oppure scrivici direttamente a <a href="mailto:${site.email}">${site.email}</a>.</p>
    </section>
    <aside class="contact__aside">
      <h2 class="title title--small">Contatti diretti</h2>
      <ul class="direct">
        <li><a href="tel:${site.telephone}">${icon('phone')}<span>Chiama<strong>${site.phone}</strong></span></a></li>
        <li><a href="${whatsapp}">${icon('chat')}<span>WhatsApp<strong>Scrivici un messaggio</strong></span></a></li>
        <li><a href="mailto:${site.email}">${icon('mail')}<span>Email<strong>${site.email}</strong></span></a></li>
        <li id="sede"><a href="${site.operatingOffice.mapUrl}">${icon('pin')}<span>Sede operativa<strong>${escape(site.operatingOffice.address)}</strong></span></a></li>
      </ul>
    </aside>
  </div></div>`,
};

const privacy = {
  path: '/privacy-cookie-policy/',
  title: 'Privacy e cookie | IRE Torino',
  description: 'Informativa sulla privacy di IRE Torino.',
  noindex: true,
  content: `${pageHead('Privacy e cookie', '', 'Informativa ripresa dal sito precedente, in revisione per il nuovo sito.')}
  <article class="wrap prose section">${readFileSync(new URL('../content/legacy-privacy.html', import.meta.url), 'utf8').replace('<!-- titolare -->', `<p><strong>${escape(site.legalName)}</strong><br>${escape(registeredAddress)}<br>${site.phone}<br>P. IVA ${site.vat}</p>`)}</article>`,
};

const notFound = {
  path: '/404.html',
  title: 'Pagina non trovata | IRE Torino',
  description: 'Questa pagina non è disponibile. Torna alla homepage o consulta i prodotti IRE Torino.',
  noindex: true,
  content: `${pageHead('Pagina non trovata', 'Forse è stata spostata.', 'Torna alla homepage oppure consulta i prodotti.')}
  <div class="wrap section actions">${button('/', 'Torna alla homepage')}${button('/services/', 'Vedi i prodotti', 'ghost')}</div>`,
};

export const pages = [home, directory, company, catalogPage, contacts, privacy, notFound, ...products.map(productPage)];
