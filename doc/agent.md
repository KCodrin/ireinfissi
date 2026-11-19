# Metodo di lavoro per IRE Torino

- Lavora in `NUOVO SITO/`. Consulta `VECCHIO SITO/`, `Concorrenti/` e `kit-doc/` come fonti.
- Prima leggi la documentazione e le fonti pertinenti, poi modifica il codice. Tieni decisioni, stato, voce e controlli in `doc/`.
- Aggiorna `changelog.md` nello stesso turno per ogni modifica, con le voci più recenti in cima e i campi Cosa, Perché e Verifica. Aggiorna gli altri documenti quando cambia ciò che descrivono.
- Riporta le preferenze ricorrenti dell'utente in questo file o in `brand/voice.md`. Per un dato aziendale, commerciale o legale mancante usa «da confermare» nei documenti di lavoro.
- Usa HTML, CSS e JavaScript nativi nel sito. Node compone e verifica i file statici. Usa i token CSS e i componenti già presenti.
- Verifica con `npm run check` e controlla su desktop e mobile le modifiche visibili. Registra l'esito.
- Nelle pagine commerciali dai spazio alle fotografie e alterna ambienti ampi ai dettagli del prodotto. Il riferimento indicato dal cliente è Domino. Usa marchio e contenuti IRE.
- Mostra la sede operativa nei Contatti. Sede legale e dati societari vanno nella fascia piccola del footer.
- Commit, push e pubblicazione solo su richiesta esplicita. Prima di rimuovere una pagina, controlla link e destinazione di migrazione.
- Design: il cliente vuole il look complessivo di Domino con marchio IRE. Logo IRE intoccabile. Componi le pagine solo con i componenti di `doc/design.md`. Niente etichette sopra i titoli. Il Liquid Glass stile Apple è una richiesta dell’utente: va su elementi qua e là della pagina (bottoni, «+», etichette, barra preventivo), non sull’header, sempre senza border-radius. Non toglierlo. Pubblico principale: privati.
