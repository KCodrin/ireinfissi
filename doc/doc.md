# IRE Torino · Stato del progetto

Aggiornato il 19 novembre 2026.

Ricostruzione di iretorino.com per presentare l’offerta IRE a privati, imprese e serramentisti, facilitare il contatto e conservare i percorsi aziendali del sito precedente.

| Livello | Scelta |
|---|---|
| Pagine | HTML statico, interamente disponibile al caricamento |
| Presentazione | Un foglio CSS con token documentati e layout responsive |
| Interazioni | JavaScript nativo per il menu mobile e la composizione della richiesta via email |
| Compilazione | Node.js, senza pacchetti npm esterni |
| Hosting futuro | Vercel, con configurazione per pubblicare la sola directory `dist/` |

```text
NUOVO SITO/
  doc/             metodo, stato, decisioni e audit
  src/content/     dati IRE, prodotti, cataloghi, inventario immagini, testo privacy storico
  src/templates/   layout condiviso e modelli delle pagine
  src/assets/      CSS, JS e immagini servite al browser
  scripts/        compilazione, anteprima locale e controlli
  dist/           HTML e risorse generate, ricreabili
  vercel.json     impostazioni per la futura pubblicazione
```

## Lavoro in locale

Dalla cartella `NUOVO SITO` esegui `npm run dev` e apri `http://127.0.0.1:4173/`. Dopo modifiche ai sorgenti, riesegui `npm run build` e ricarica la pagina. `npm run check` rigenera il sito e verifica percorsi, ancore, immagini, preselezioni prodotto e metadati essenziali.

Il sito include homepage, azienda, contatti, 18 schede e il relativo indice, cataloghi, informativa precedente in revisione e pagina 404. I cataloghi si richiedono per email in attesa dei PDF. Il modulo dei preventivi apre una bozza di posta nel programma del visitatore. Le altre opzioni di contatto sono email, telefono e WhatsApp.

Per pubblicare, il progetto Vercel dovrà puntare a `NUOVO SITO` come cartella di origine. La configurazione imposta il preset statico, `npm run build`, l’output `dist` e gli URL con barra finale. Vedi la [documentazione Vercel](https://vercel.com/docs/project-configuration/vercel-json).

Per lo stato dei contenuti vedi `CLIENT_INFO.md`. Per il confronto con il sito precedente vedi `audits/2026-11-19-sorgenti.md` e `audits/2026-11-19-url-storici.md`.
