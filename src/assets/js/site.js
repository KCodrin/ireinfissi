import { liquidGlass } from './glass.js';

const pageParams = new URLSearchParams(window.location.search);
const header = document.querySelector('.header');
const glass = pageParams.get('vetro');
document.querySelectorAll('.glass').forEach((layer) => liquidGlass(layer, glass));

// Homepage: testata trasparente sulla foto, bianca dopo lo scorrimento.
if (header?.classList.contains('header--over')) {
  const sync = () => header.classList.toggle('is-solid', window.scrollY > 40);
  sync();
  window.addEventListener('scroll', sync, { passive: true });
}

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const compact = window.matchMedia('(max-width: 960px)');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  menuToggle.querySelector('path').setAttribute('d', open ? 'M4 4l10 10M14 4 4 14' : 'M3 6h12M3 12h12');
  navigation.hidden = compact.matches && !open;
  header.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function syncMenu() {
  menuToggle.hidden = !compact.matches;
  setMenu(false);
}

if (menuToggle && navigation) {
  syncMenu();
  compact.addEventListener('change', syncMenu);
  menuToggle.addEventListener('click', () => setMenu(navigation.hidden));
  navigation.addEventListener('click', (event) => {
    if (compact.matches && event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });
}

// La barra di contatto si ritira quando la chiusura o il piè di pagina sono visibili.
const dock = document.querySelector('.dock');
const endings = document.querySelectorAll('.closing, .footer');
if (dock && endings.length && 'IntersectionObserver' in window) {
  const visible = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
    dock.classList.toggle('is-hidden', visible.size > 0);
  });
  endings.forEach((element) => observer.observe(element));
}

// Footer a fisarmonica su mobile: sezioni chiuse, aperte su schermi più larghi.
const footerGroups = document.querySelectorAll('.footer__group');
const narrow = window.matchMedia('(max-width: 560px)');
const syncFooter = () => footerGroups.forEach((group) => {
  group.open = !narrow.matches;
  group.querySelector('summary').tabIndex = narrow.matches ? 0 : -1;
});
syncFooter();
narrow.addEventListener('change', syncFooter);

const form = document.querySelector('#request-form');

if (form) {
  const product = form.elements.prodotto;
  const selection = pageParams.get('prodotto');
  if ([...product.options].some((option) => option.value === selection)) {
    product.value = selection;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const productName = product.selectedOptions[0].textContent;
    const subject = `Richiesta IRE Torino – ${productName}`;
    const fields = [
      ['Nome', data.get('nome').trim()],
      ['Comune', data.get('comune').trim()],
      ['Prodotto', productName],
      ['Intervento', data.get('intervento')],
      ['Dettagli', data.get('dettagli').trim()],
    ];
    const body = fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join('\r\n');
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  form.hidden = false;
}
