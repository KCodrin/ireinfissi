# Changelog

## 2026-11-19 · Vetro ad angoli vivi e footer a fisarmonica

**Cosa** — Tolti i border-radius da tutti gli elementi in Liquid Glass (bottoni, «+», etichette, barra preventivo). Le sezioni del footer sono ora `details` nativi: aperte su desktop, chiuse a fisarmonica sotto i 560 px. Su desktop il titolo non si può chiudere né raggiungere con il tasto Tab. Corretta la fascia colorata sotto la foto delle card famiglia su mobile.

**Perché** — Richieste dell’utente: niente arrotondamenti sul vetro e footer più corto da mobile.

**Verifica** — `npm run check` riuscito su 25 pagine e 997 riferimenti. A 375 px le 5 sezioni partono chiuse, si aprono al tocco e non c’è scorrimento orizzontale. A 1440 px sono tutte aperte. Raggio del vetro misurato a 0 px.

## 2026-11-19 · Liquid Glass sugli elementi della pagina

**Cosa** — Header riportato alla barra bianca a tutta larghezza. Applicato il Liquid Glass a bottoni secondari sulle foto, quadrati «+» delle card famiglia e prodotto, etichette sulle foto delle schede e dei pannelli divisi, oltre alla barra preventivo. Vetro fumé sulle foto chiare. Il motore riduce rifrazione e bordo sugli elementi piccoli.

**Perché** — L’utente vuole il vetro liquido su elementi qua e là del sito, non sull’header.

**Verifica** — `npm run check` riuscito su 25 pagine e 997 riferimenti. In Chromium 8 strati di vetro attivi in home. Controllati a 1440 px home, Prodotti e Pergole, e a 375 px la home e il menu, senza scorrimento orizzontale. Safari reale non verificato.

## 2026-11-19 · Liquid Glass ripristinato

**Cosa** — Riscritto l’effetto Liquid Glass stile Apple in `src/assets/js/glass.js`, al posto di `header-glass.js` rimosso nel turno precedente. Header ora flottante e arrotondato. Applicato il vetro anche alla barra «Richiedi un preventivo». Il menu mobile resta a tutto schermo e le schede delle sezioni si agganciano sotto l’header.

**Perché** — L’effetto era una richiesta esplicita dell’utente ed era stato tolto per errore.

**Verifica** — `npm run check` riuscito su 25 pagine e 997 riferimenti. Il filtro di rifrazione è attivo su header e barra in Chromium. Controllati a 1440 px l’header sopra la foto e sopra le card colorate, e a 375 px una scheda prodotto e il menu. Safari reale non verificato: lì il vetro resta sfocato senza rifrazione.

## 2026-11-19 · Nuovo design uniforme sul modello Domino

**Cosa** — Rifatto il design di tutte le 25 pagine con un unico sistema. Fondo bianco, carattere Hanken Grotesk ospitato nel sito, titoli su due righe, bottoni neri ad angoli vivi, barra «Richiedi un preventivo» flottante e chiusura nera con i contatti. I colori delle quattro famiglie vengono dalle copertine dei cataloghi IRE (blu, verde acqua, giallo, magenta), insieme alla fascia a chevron. Nuova apertura della home con foto a tutto schermo. Schede prodotto con pannello del colore di famiglia accanto alla foto. Cataloghi con le copertine vere e footer con tutti i prodotti. Rimossi l’effetto vetro dell’header (`header-glass.js`) e le etichette sopra i titoli. Logo ricavato in alta risoluzione dal vecchio sito, foto principali rigenerate dagli originali a 1920 px. Creato `PRODUCT.md`.

**Perché** — Il cliente vuole il look di Domino e un sito uniforme, rivolto soprattutto ai privati. Il logo IRE è nero, mentre il giallo veniva dal vecchio tema: i colori dei cataloghi danno a IRE una firma propria.

**Verifica** — `npm run check` riuscito su 25 pagine e 997 riferimenti. Controllati a 1440 px home, Prodotti, Pergole, Infissi, Tapparelle, Contatti, Cataloghi e Azienda. Controllati a 375 px home, menu, Bioclimatiche e Contatti, senza scorrimento orizzontale. Il prodotto resta preselezionato nel modulo. Rilevatore di design senza segnalazioni. Non verificati Safari/iOS reali né le pagine Privacy e 404 a schermo.

## 2026-11-19 · Raggio dell’header a 12 px

**Cosa** — Impostato il raggio dell’header e del suo riflesso CSS a 12 px.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Confermato il raggio nel browser a 1440 e 390 px.

## 2026-11-19 · Angoli dell’header

**Cosa** — Impostato un raggio di 4 px sul bordo esterno dell’header e allineato il riflesso CSS al contorno.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Confermato nel browser il raggio di 4 px a 1440 e 390 px.

## 2026-11-19 · Rifrazione con profilo convesso

**Cosa** — Studiato il riferimento di kube.io e applicato un profilo convesso calcolato con la legge di Snell, con una mappa aggiuntiva per la luce speculare. Le mappe seguono le dimensioni dell’header.

**Perché** — Far dipendere la distorsione dalla curvatura del bordo e il riflesso dalla direzione della luce, mantenendo la silhouette rettangolare.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Controllati filtro, riflessi e dimensioni delle mappe nel browser a 1440 e 390 px, con menu aperto e chiuso. Gli angoli risultano a 0 px.

## 2026-11-19 · Rifrazione del vetro nell’header

**Cosa** — Aggiunti un filtro di distorsione dello sfondo lungo i bordi e una mappa che si adatta alla larghezza e all’altezza dell’header. Ridotta la sfocatura e mantenute le tre intensità e gli angoli retti.

**Perché** — La prima versione produceva soprattutto sfocatura. La nuova versione riprende la rifrazione ai bordi del riferimento Apple.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Controllati filtro SVG, mappa e angoli a 0 px nel browser. Su mobile verificato che la mappa si aggiorni aprendo e chiudendo il menu. Verificata la posizione dell’header durante lo scorrimento.

## 2026-11-19 · Liquid Glass per l’header

**Cosa** — Applicato un effetto satinato alla navigazione flottante e aggiunte le varianti lucido e fumé consultabili tramite URL. La fotografia della home passa dietro l’header. Gli angoli rimangono retti.

**Perché** — Permettere il confronto tra tre trattamenti del vetro sulla stessa interfaccia.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Controllati i filtri calcolati delle tre varianti a 1440 px e il menu lucido a 390 px. Verificata la preselezione del prodotto in presenza della variante fumé.

## 2026-11-19 · Header flottante

**Cosa** — La navigazione resta in alto durante lo scorrimento, con margini laterali e angoli retti. Adeguati il menu mobile e la distanza delle sezioni raggiunte tramite ancore.

**Perché** — Il cliente ha chiesto un header flottante e rettangolare.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Verificati angoli a 0 px, posizione durante lo scorrimento su desktop, apertura e chiusura del menu mobile e visibilità del titolo della categoria raggiunta tramite ancora.

## 2026-11-19 · Apertura a tutto schermo

**Cosa** — Rifatta l’apertura della homepage come una scena unica, con navigazione su fondo grafite, titolo centrato, fotografia a pieno schermo e collegamento al serramento mostrato. La foto delle vetrate in acciaio proviene dall’archivio IRE.

**Perché** — Riprende la scala e la gerarchia richieste nello screenshot del riferimento e rende visibile il serramento fin dall’apertura.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Controllata la resa a 1440, 390 e 320 px. Provati il menu mobile, il collegamento al catalogo e il passaggio dalla fotografia alla scheda in acciaio.

## 2026-11-19 · Nuova direzione fotografica

**Cosa** — Esaminata la copia di Domino nella cartella `esempio/`. Aggiornati la home con apertura fotografica e pannello grafite, il catalogo con 18 schede illustrate e il modello delle pagine prodotto con fotografia in primo piano. Registrata la preferenza del cliente e applicata a colori, impaginazione e immagini dell’archivio IRE.

**Perché** — Portare nel sito IRE la gerarchia visiva e lo spazio dedicato al prodotto che il cliente apprezza nel riferimento.

**Verifica** — `npm run check` riuscito su 25 pagine e 610 riferimenti. Controllate homepage e Pergole su desktop e il percorso home, catalogo, Pergole e preventivo a 390 px. Il prodotto rimane preselezionato nei Contatti.

## 2026-11-19 · Schede prodotto ampliate

**Cosa** — Ridisegnate tutte le 18 schede con foto di apertura più ampia, indice delle sezioni, guida alla scelta, domande frequenti, checklist per il preventivo e collegamenti illustrati. Recuperate 12 immagini di approfondimento dall’archivio IRE e sostituita la foto di apertura degli infissi con una versione più grande. Separati i contenuti delle guide dai dati sintetici di navigazione.

**Perché** — Aiutare privati, imprese e serramentisti a orientarsi tra configurazioni e materiali e a preparare una richiesta con le informazioni utili.

**Verifica** — `npm run check` riuscito su 25 pagine e 592 riferimenti interni. Controllata Pergole a 1440 e 390 px, inclusa l’apertura da tastiera delle domande frequenti e la preselezione del prodotto nei Contatti. Verificati anche Monoblocchi a 390 px e Portoni sezionali a 320 px.

## 2026-11-19 · Sede operativa e fascia societaria

**Cosa** — Ripristinata la sede operativa di Via Rivarolo 45 a Mappano nei Contatti e aggiunto il link a Google Maps fornito dall’utente. Spostati ragione sociale, sede legale, partita IVA, codice fiscale, REA e PEC nella fascia inferiore del footer.

**Perché** — Distingue l’indirizzo operativo destinato a chi contatta IRE da quello della sede legale e mantiene i dati societari in una riga più discreta.

**Verifica** — `npm run check` riuscito su 25 pagine e 477 riferimenti. Controllati testo, destinazione del link Maps e distribuzione dei dati su desktop e mobile, senza scorrimento orizzontale a 1440, 390 e 320 px.

## 2026-11-19 · Dati societari aggiornati

**Cosa** — Aggiornati ragione sociale, sede legale, identificativi e PEC nei dati centralizzati. Aggiornati Contatti, piè di pagina, metadati e dati del titolare nell’informativa in revisione. Registrati forma giuridica, iscrizione, Camera di commercio, dipendenti e ATECO in `CLIENT_INFO.md`.

**Perché** — Il nuovo sito usa i dati forniti dall’utente. La sede di Torino è indicata come sede legale. Le indicazioni per visite a Mappano sono state rimosse in attesa della conferma della sede operativa.

**Verifica** — `npm run check` riuscito su 25 pagine e 477 riferimenti. Controllati la sede legale e i dati societari nel browser a 1440 e 390 px. Verificata l’assenza di ragione sociale precedente e indirizzi storici nell’HTML generato.

## 2026-11-19 · Prima versione del sito IRE Torino

**Cosa** — Adattato il kit documentale e creati audit, inventario di migrazione e istruzioni di lavoro. Realizzate home, azienda, indice prodotti, 18 schede, cataloghi, contatti, informativa storica in revisione e pagina 404. Ottimizzate le immagini selezionate. Preparata la build statica per Vercel.

**Perché** — Conservare l’offerta e i percorsi aziendali utili, ridurre il peso delle pagine e gestire i contenuti e la grafica da modelli condivisi. Le richieste generano temporaneamente una bozza email e i cataloghi sono richiedibili via email in attesa dei PDF.

**Verifica** — `npm run check` riuscito su 25 pagine e 477 riferimenti locali. Controllati homepage e categorie a 1440 px e homepage e menu a 390 e 320 px. Verificati menu, chiusura con Escape, navigazione da una scheda alla richiesta con prodotto preselezionato e validazione del nome obbligatorio. Controllate le risposte HTTP 200 e 404 in locale. La prova non ha inviato messaggi. La configurazione Vercel è predisposta, con collaudo remoto ancora da eseguire.
