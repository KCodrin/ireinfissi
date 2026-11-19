# Design system

## Direzione

- **Riferimento** — Il cliente vuole il look complessivo di Domino (domino.casa): fondo bianco, un solo carattere grottesco, titoli su due righe «Nome. / Promessa.», grandi fotografie, bottoni rettangolari neri, barra preventivo flottante. Marchio e contenuti restano IRE.
- **Firma IRE** — Le copertine dei cataloghi IRE: pagina bianca, fascia nera a chevron e un colore per famiglia. Sul sito la fascia diventa la `chevron` che taglia le foto delle card famiglia e delle aperture prodotto.
- **Pubblico principale** — Privati. Tono da casa, non da cantiere.
- **Logo** — Logo IRE attuale, intoccabile. `logo-ire.png` su fondo chiaro, `logo-ire-bianco.png` sulla foto della home.

## Token (`src/assets/css/site.css`, `:root`)

| Token | Valore | Uso |
|---|---|---|
| `--bg` | `#ffffff` | Fondo pagine |
| `--soft` | `#f3f3f1` | Sezioni alternate, footer, pannello contatti |
| `--ink` | `#0f0f0f` | Titoli, bottoni, chiusura scura |
| `--text`, `--muted` | `#2e2e2c`, `#62625e` | Testo e seconde righe dei titoli |
| `--line` | `#deded9` | Separatori |
| `--serramenti` | `#1d9ad6` | Famiglia Serramenti e porte |
| `--isolamento` | `#0f9e96` | Famiglia Isolamento e posa |
| `--schermature` | `#f6a81e` | Famiglia Schermature, selezione del testo |
| `--esterni` | `#d6135a` | Famiglia Protezione solare (testo bianco) |

Carattere unico **Hanken Grotesk** variabile, ospitato in `src/assets/fonts/` (niente Google Fonts). Titoli peso 500, interlinea 1,04, tracking −0,025em. Scala: `--t-display`, `--t-h1`, `--t-h2`, `--t-h3`. Angoli vivi ovunque (raggio 0). Icone lineari 18 px, tratto 1,5 px, in `layout.mjs`.

## Componenti

| Componente | Classe | Dove |
|---|---|---|
| Testata fissa, trasparente sulla home fino allo scorrimento | `.header`, `.header--over` | tutte |
| Barra contatto flottante (preventivo, WhatsApp, telefono), si ritira sulla chiusura | `.dock` | tutte tranne Contatti |
| Intestazione pagina con titolo su due righe | `.page-head` | pagine interne |
| Bottoni | `.btn--dark`, `--light`, `--ghost`, `--ghost-light` | ovunque |
| Card famiglia colorata con chevron e «+» | `.family` | home |
| Card prodotto foto 4:3 con «+» | `.card` | catalogo, «Da abbinare» |
| Apertura scheda: pannello colore famiglia + foto | `.cover` | 18 schede |
| Pannello diviso nero con parola gigante | `.statement` | home, azienda |
| Chiusura nera con contatti | `.closing` | tutte tranne Contatti |
| Schede indice | `.tabs` | catalogo, schede (sticky) |

Regola di uniformità: ogni pagina si compone solo con questi componenti. Niente etichette sopra i titoli, niente vetro decorativo.

## Movimento

Un solo momento orchestrato: la foto della home si mette a fuoco e il titolo sale. Per il resto, solo zoom lento delle foto e rotazione del «+» al passaggio. Tutto disattivato con `prefers-reduced-motion`.
