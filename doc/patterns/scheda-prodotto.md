# Modello di scheda prodotto

1. Aggiungi la voce in `src/content/products.mjs` con categoria, slug, nome, chiave della foto di apertura, testo alternativo e introduzione entro 160 caratteri. L’introduzione compare nella scheda sintetica, nell’apertura e nella description.
2. Aggiungi lo stesso slug in `src/content/product-details.mjs`. Scrivi il titolo della guida, tre criteri di scelta, tre dati utili per il preventivo, una o più domande pratiche e due o tre prodotti collegati. Scegli i collegamenti per affinità o compatibilità.
3. Se un’immagine chiarisce un’applicazione, una sezione o una finitura, aggiungila come figura con testo alternativo e didascalia. Salva le immagini in `src/assets/img/` e registra dimensioni e fonte in `src/content/images.json`. Attribuisci un lavoro a IRE quando esistono dati e fotografie verificabili.
4. Il modello genera URL, breadcrumb e pulsanti di richiesta con prodotto preselezionato. Se la scheda sostituisce un URL diverso, aggiorna l’audit di migrazione.
5. Esegui `npm run check` e verifica su desktop e mobile foto, indice, domande apribili e richiesta.
