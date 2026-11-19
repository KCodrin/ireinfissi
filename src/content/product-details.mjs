export const productDetails = {
  'infissi-e-serramenti': {
    heading: 'Componi il serramento a partire dal vano',
    choices: [
      ['PVC e resina strutturata', 'Parti dal tipo di apertura e dalle dimensioni. Il profilo va scelto insieme al vetro e alla ferramenta, tenendo conto del peso delle ante e dell’uso quotidiano.'],
      ['Doppio o triplo vetro', 'Entrambe le configurazioni sono descritte nel catalogo IRE. Esposizione, rumore esterno, peso e prestazioni dichiarate dell’intera finestra aiutano a confrontarle.'],
      ['Battente o scorrevole', 'Per una portafinestra valuta quanto spazio occupa l’anta, quanto passaggio rimane libero e come si raccorda la soglia al pavimento.'],
    ],
    figure: ['scorrevole-profilo', 'Sezione di un profilo per serramento scorrevole', 'Profilo in sezione per un sistema scorrevole'],
    request: ['Numero di finestre, portefinestre e scorrevoli', 'Misure indicative di ciascun vano', 'Foto e priorità dell’intervento, come rumore, spifferi o ingombro'],
    questions: [
      ['Devo cambiare anche tapparella e cassonetto?', 'Conviene valutarli insieme al serramento. Lo stato dei componenti, lo spazio per le guide e il raccordo con la nuova finestra aiutano a capire quali elementi mantenere.'],
      ['Per il rumore devo scegliere il triplo vetro?', 'Per confrontare soluzioni acustiche guarda le prestazioni dichiarate della finestra completa. Contano anche la composizione del vetro, le tenute e la posa.'],
    ],
    related: ['infissi-e-porte-in-alluminio', 'infissi-e-porte-in-legno', 'sistema-posa-clima'],
  },
  'infissi-e-porte-in-alluminio': {
    heading: 'Un sistema per ogni tipo di apertura',
    choices: [
      ['Divisori e porte interne', 'Per separare due ambienti mantenendo la luce, valuta la divisione dei moduli, la posizione dei passaggi e il grado di trasparenza del vetro.'],
      ['Serramenti verso l’esterno', 'Per aperture esposte alle intemperie, chiedi la scheda del sistema e le prestazioni dichiarate per profilo, vetro e tenute nella configurazione proposta.'],
      ['Grandi aperture', 'Per vetrate e scorrevoli indica quanta apertura libera serve. Numero di ante, tipo di guida e altezza della soglia incidono sulla disposizione dello spazio.'],
    ],
    request: ['Destinazione interna o esterna', 'Larghezza, altezza e apertura libera desiderata', 'Foto del vano o disegno con la divisione delle ante'],
    questions: [
      ['Posso coordinare il colore con gli altri infissi?', 'Porta un campione o indica il codice della finitura esistente. Il confronto va fatto sulle finiture disponibili per il sistema scelto.'],
    ],
    related: ['infissi-e-serramenti', 'infissi-e-porte-in-acciaio', 'frangisole'],
  },
  'infissi-e-porte-in-legno': {
    heading: 'Dal legno a vista al rivestimento esterno',
    choices: [
      ['Essenze e venature', 'Pino, abete, meranti e quercia sono le essenze indicate nel catalogo. Confronta il campione accanto a pavimento, pareti e arredi per valutare tono e venatura.'],
      ['Legno e alluminio', 'Il rivestimento in alluminio riguarda il lato esterno. È una configurazione da confrontare con il legno a vista quando esposizione, manutenzione e aspetto della facciata hanno un peso nella scelta.'],
      ['Porte interne', 'Una porta in legno piena o con porzioni vetrate cambia come passa la luce da una stanza all’altra. Specifica anche il verso di apertura e la finitura delle pareti.'],
    ],
    figure: ['legno-alluminio-profilo', 'Profilo in sezione con legno all’interno e alluminio all’esterno', 'Sezione di un serramento in legno e alluminio'],
    request: ['Tipo di finestra, portafinestra o porta interna', 'Foto del vano e della finitura da abbinare', 'Esposizione esterna e preferenze sul materiale a vista'],
    questions: [
      ['Come si sceglie la finitura per la facciata?', 'Segnala l’aspetto degli altri serramenti e gli eventuali vincoli del progetto. Il campione esterno si valuta alla luce naturale, accanto ai materiali già presenti.'],
    ],
    related: ['infissi-e-serramenti', 'infissi-e-porte-in-alluminio', 'persiane-in-alluminio'],
  },
  'infissi-e-porte-in-acciaio': {
    heading: 'Disegna la vetrata intorno ai passaggi',
    choices: [
      ['Partizioni vetrate', 'Decidi prima quali moduli devono aprirsi. Da lì puoi definire la scansione dei montanti e l’allineamento della vetrata con soffitto, pavimento e porte vicine.'],
      ['Porte con profili sottili', 'Per un ingresso o una porta interna specifica il passaggio utile, il verso di apertura e le esigenze di privacy o trasparenza.'],
      ['Serramenti esterni', 'Nel recupero di una facciata esistente porta foto d’insieme e dei profili. Per un serramento verso l’esterno, vetro e sistema di tenuta vanno valutati sulla configurazione completa.'],
    ],
    figure: ['acciaio-profili-loft', 'Due elementi di profilo in acciaio, uno assemblato e uno visto di lato', 'Esempio di profili per partizioni vetrate'],
    request: ['Foto oppure prospetto con la divisione dei moduli', 'Posizione delle ante apribili e verso di apertura', 'Uso interno o esterno ed eventuali dettagli da conservare'],
    questions: [
      ['Lo stesso profilo si usa sia dentro sia fuori?', 'Indicare la posizione è importante. Per un divisorio interno e un serramento esposto si valutano sistemi diversi in base a tenuta, prestazioni e modalità di posa.'],
    ],
    related: ['infissi-e-porte-in-alluminio', 'infissi-e-porte-in-legno', 'porte-da-esterno'],
  },
  'porte-da-esterno': {
    heading: 'Progetta l’ingresso dal passaggio alla soglia',
    choices: [
      ['Apertura e ingombri', 'Stabilisci il passaggio utile e il verso dell’anta. Una parete vicina, un gradino o un mobile nell’ingresso possono limitare lo spazio di rotazione.'],
      ['Facciata ed esposizione', 'Guarda insieme il colore di porta, telaio e facciata. Segnala se l’ingresso è sotto un portico o direttamente esposto a pioggia e sole.'],
      ['Soglia e raccordi', 'Una foto di pavimento interno e pianerottolo esterno aiuta a capire dislivelli, presenza di uno zerbino incassato e raccordi da prevedere.'],
    ],
    request: ['Foto della porta da entrambi i lati', 'Misure indicative e verso di apertura', 'Finitura desiderata, esposizione e presenza di gradini'],
    questions: [
      ['Come si confronta la sicurezza di due porte?', 'Chiedi la documentazione del modello completo. Serratura, ferramenta e telaio vanno considerati insieme, con le prestazioni dichiarate per la configurazione proposta.'],
    ],
    related: ['infissi-e-porte-in-acciaio', 'portoni-sezionali', 'recinzioni-e-cancelli'],
  },
  'portoni-sezionali': {
    heading: 'Misura il garage anche dall’interno',
    choices: [
      ['Il vano in facciata', 'Rileva larghezza e altezza indicative dell’apertura. Verifica i passaggi usati ogni giorno e segnala eventuali esigenze legate all’altezza del veicolo.'],
      ['Lo spazio per le guide', 'Travature, tubazioni e luci a soffitto possono interferire con il percorso del portone. Una foto dall’interno aiuta a individuarle prima del rilievo.'],
      ['Apertura e finiture', 'Indica se desideri una manovra manuale o motorizzata. Finitura dei pannelli, alimentazione e possibilità di accesso alternativo aiutano a inquadrare il progetto.'],
    ],
    request: ['Misure di apertura, spalle e spazio sopra il vano', 'Due foto, una dalla strada e una dal garage', 'Alimentazione disponibile ed eventuale accesso secondario'],
    questions: [
      ['Devo tenere conto del soffitto?', 'Sì. Nei portoni sezionali, l’ingombro interno dipende anche dal percorso delle guide. Indica la profondità utile e fotografa ostacoli come travi e impianti.'],
    ],
    related: ['porte-da-esterno', 'recinzioni-e-cancelli'],
  },
  'recinzioni-e-cancelli': {
    heading: 'Disegna perimetro, accessi e dislivelli',
    choices: [
      ['Moduli residenziali', 'Per confrontare acciaio e alluminio, parti da forma dei moduli, finitura e grado di schermatura desiderato lungo il perimetro.'],
      ['Accessi pedonali e carrabili', 'Segna su uno schizzo il passaggio per le persone e quello per i veicoli. Indica in quale direzione c’è spazio libero per il movimento del cancello.'],
      ['Pendenze e muretti', 'Una linea in pendenza o un muretto esistente cambia il raccordo con i moduli. Foto dei cambi di quota e degli angoli aiutano a preparare il rilievo.'],
    ],
    request: ['Sviluppo indicativo dei lati da recintare', 'Larghezza dei passaggi e foto di muretti o pilastri', 'Preferenze su finitura, visibilità e tipo di apertura'],
    questions: [
      ['Cosa serve per valutare una sostituzione?', 'Fotografa anche i punti di fissaggio e i sostegni esistenti. Il loro stato e la geometria del terreno aiutano a capire se i nuovi moduli possono raccordarsi alla struttura.'],
    ],
    related: ['porte-da-esterno', 'portoni-sezionali'],
  },
  'monoblocchi-coibentati': {
    heading: 'Coordina finestra e schermatura prima delle finiture',
    choices: [
      ['Per avvolgibili', 'Definisci spazio del rullo, cassonetto e posizione delle guide insieme al serramento. L’accesso di ispezione va previsto già nei dettagli del vano.'],
      ['Per persiane', 'La configurazione Combithermic per persiane va coordinata con spalle, finitura della facciata e fissaggi previsti. Segnala il tipo di persiana in progetto.'],
      ['Per frangisole', 'Indica il sistema di schermatura previsto. Ingombro del pacco lamelle, guide e finitura superiore incidono sulle quote da concordare prima della posa.'],
    ],
    figure: ['monoblocco-configurazioni', 'Sezioni Combithermic per un frangisole e una persiana', 'Due predisposizioni del sistema Combithermic'],
    request: ['Abaco dei vani con larghezza e altezza', 'Sezione di parete, cappotto e davanzale', 'Tipo di serramento e schermatura prevista per ogni vano'],
    questions: [
      ['Quando conviene definire le misure?', 'Quando il progetto consente ancora di coordinare muratura, isolamento, davanzale e serramento. Un disegno di sezione aiuta a stabilire quote e ingombri con impresa e serramentista.'],
    ],
    related: ['controtelai-a-taglio-termico', 'cassonetti-coibentati', 'frangisole'],
  },
  'controtelai-a-taglio-termico': {
    heading: 'Definisci il raccordo tra muro e serramento',
    choices: [
      ['OSB e PVC', 'I controtelai con componenti in OSB e PVC vengono forniti assemblati. La geometria va concordata con il serramentista in base alla sezione prevista.'],
      ['Posizione del serramento', 'Quota il piano di posa rispetto a parete, cappotto e finitura. Anche guide e schermature possono occupare parte dello spazio progettato per il raccordo.'],
      ['Nodo inferiore', 'Mostra come sono previsti soglia e davanzale, dentro e fuori. La continuità del raccordo richiede che quote, materiali e appoggi siano letti insieme.'],
    ],
    figure: ['controtelaio-sezione', 'Dettaglio del raccordo fra controtelaio, parete e profilo', 'Materiali del nodo a contatto con la parete'],
    request: ['Dimensioni indicative del vano e tipo di infisso', 'Sezione della parete e spessori delle finiture', 'Dettaglio di davanzale, soglia e schermature'],
    questions: [
      ['Controtelaio o monoblocco?', 'Il controtelaio riguarda il raccordo tra infisso e muratura. Se il progetto deve integrare anche spalle, schermatura e relativi ingombri, valuta con il progettista anche il monoblocco.'],
    ],
    related: ['monoblocchi-coibentati', 'cassonetti-coibentati', 'sistema-posa-clima'],
  },
  'cassonetti-coibentati': {
    heading: 'Prevedi l’ispezione prima di chiudere il vano',
    choices: [
      ['Tunnel standard', 'La linea Combithermic descrive cassonetti in EPS ad alta densità con profili di supporto. La misura dipende dal vano e dall’ingombro del telo avvolto.'],
      ['Sagome su misura', 'Per un alloggiamento particolare si può valutare una sagoma realizzata a pantografo. Invia la sezione quotata per confrontarla con finiture, guide e rullo.'],
      ['Ispezione e manutenzione', 'Confronta l’accesso dal basso e a scorrimento. Il pannello deve rimanere raggiungibile dopo la posa di intonaco, serramento ed eventuali coprifili.'],
    ],
    figure: ['cassonetto-ispezione', 'Sezione di un cassonetto con apertura d’ispezione dal basso', 'Cassonetto con ispezione dal basso'],
    request: ['Sezione del foro o foto del cassonetto esistente', 'Tipo di schermatura, manovra e guida', 'Dimensioni utili e lato da cui accedere al rullo'],
    questions: [
      ['Posso intervenire su un cassonetto già installato?', 'Dipende dallo stato e dallo spazio utile. Per un cassonetto esistente può essere utile valutare anche un intervento di riqualificazione sul posto, come le soluzioni PosaClima Renova.'],
    ],
    related: ['tapparelle-avvolgibili', 'sistema-posa-clima', 'monoblocchi-coibentati'],
  },
  'sistema-posa-clima': {
    heading: 'Leggi il vano finestra come un insieme',
    choices: [
      ['Cassonetti esistenti', 'Il sistema Renova tratta il cassonetto dall’interno quando geometria e accessibilità lo consentono. La presenza di spazio libero attorno al rullo si verifica per ciascun vano.'],
      ['Celini e accesso al rullo', 'I celini sono pannelli di chiusura del cassonetto, spesso in legno, PVC o lamiera. Controlla da dove si aprono e segnala danni o interferenze con le finiture.'],
      ['Giunti e raccordi', 'Per una sostituzione valuta come il serramento si raccorda alla parete, al davanzale e al controtelaio. Materiali e accessori di posa dipendono dal nodo reale.'],
    ],
    request: ['Foto del telaio, dei raccordi e del cassonetto', 'Descrizione del problema e dei punti in cui si presenta', 'Interventi già previsti su infissi, tapparelle o pareti'],
    questions: [
      ['L’intervento richiede opere murarie?', 'Renova nasce per intervenire sull’esistente in configurazioni compatibili. La possibilità di lavorare senza opere sulla parete va verificata sul vano.'],
    ],
    related: ['cassonetti-coibentati', 'controtelai-a-taglio-termico', 'infissi-e-serramenti'],
  },
  'zanzariere-e-tende-tecniche': {
    heading: 'Scegli in base a passaggio, ingombro e luce',
    choices: [
      ['Zanzariere per finestre', 'Confronta soluzioni avvolgibili, plissettate o ad anta in relazione allo spazio tra serramento e schermatura esterna e all’accessibilità del comando.'],
      ['Zanzariere per portefinestre', 'Doppia anta e scorrevoli rispondono a passaggi diversi. Per una grande apertura, misura la profondità disponibile e segnala eventuali rotaie o soglie.'],
      ['Veneziane e tende a rullo', 'Per regolare luce e riservatezza considera la posizione del vetro, dell’anta e della maniglia. Una tenda su anta e una a parete occupano spazi diversi in apertura.'],
    ],
    figure: ['zanzariera-scorrevole', 'Zanzariera scorrevole su un’apertura ampia', 'Zanzariera scorrevole per un passaggio ampio'],
    request: ['Tipo di vano e misure indicative', 'Foto di soglia, maniglia e schermatura già presente', 'Frequenza del passaggio e preferenze sulla regolazione della luce'],
    questions: [
      ['Come scelgo la zanzariera per una portafinestra usata spesso?', 'Valuta la facilità di manovra, la larghezza di passaggio e come si raccorda l’eventuale guida al pavimento. Una foto della soglia aiuta a discutere le opzioni.'],
    ],
    related: ['infissi-e-serramenti', 'persiane-in-alluminio', 'frangisole'],
  },
  'tapparelle-avvolgibili': {
    heading: 'Abbina il telo a guide, rullo e manovra',
    choices: [
      ['PVC standard o rinforzato', 'Per una sostituzione verifica che spessore delle stecche e dimensioni del telo siano compatibili con le guide. Indica se cassonetto e manovra restano.'],
      ['Teli coibentati e profili estrusi', 'Per gli avvolgibili coibentati, confronta i profili in alluminio e acciaio. La gamma comprende anche soluzioni in alluminio estruso. Peso e ingombro del telo avvolto incidono su rullo e manovra.'],
      ['Esigenze di sicurezza', 'Per varianti autobloccanti o a grata, chiarisci la priorità e chiedi la documentazione del modello completo. La valutazione comprende anche guide, fissaggi e accessori.'],
    ],
    figure: ['avvolgibile-profilo', 'Dettaglio delle stecche di un avvolgibile in alluminio', 'Profilo e stecche di un avvolgibile in alluminio'],
    request: ['Dimensioni del vano e foto delle guide', 'Tipo di manovra esistente o desiderata', 'Elementi da sostituire e condizioni del cassonetto'],
    questions: [
      ['Si può cambiare solo il telo?', 'Va verificata la compatibilità con guide, rullo e manovra. Quando cambia materiale o peso, è utile valutare l’intero sistema prima di ordinare.'],
    ],
    related: ['cassonetti-coibentati', 'persiane-in-alluminio', 'frangisole'],
  },
  'persiane-in-alluminio': {
    heading: 'Coordina finitura, ante e supporti',
    choices: [
      ['Ombra e passaggio d’aria', 'Per valutare la schermatura indica come usi la stanza e in quali ore arriva il sole. Le configurazioni delle lamelle vanno confrontate per la soluzione scelta.'],
      ['Colore e facciata', 'Confronta i campioni alla luce naturale, accanto a serramento e parete. Se devi riprendere un colore esistente, porta il codice o un campione.'],
      ['Posa su un vano esistente', 'Fotografa cardini, spalle e davanzale. Il tipo di appoggio e lo spazio esterno per il movimento delle ante guidano la proposta.'],
    ],
    figure: ['persiane-finiture', 'Campioni colore per persiane in alluminio, inclusi grigi, verde ed effetti legno', 'Esempi di colori ed effetti legno'],
    request: ['Foto esterna della finestra e dei cardini', 'Misure del vano e numero di ante', 'Finitura da riprendere ed eventuali vincoli di facciata'],
    questions: [
      ['Posso scegliere guardando un colore sullo schermo?', 'Usa le immagini per orientarti. Per confrontare finitura e tonalità, chiedi un campione fisico e la disponibilità per la linea selezionata.'],
    ],
    related: ['tapparelle-avvolgibili', 'frangisole', 'monoblocchi-coibentati'],
  },
  frangisole: {
    heading: 'Porta la schermatura davanti al vetro',
    choices: [
      ['Lamelle orientabili', 'La loro inclinazione cambia quanta luce entra e quanto si vede attraverso la vetrata. Indica in quali ore la luce diretta crea maggiore abbagliamento.'],
      ['Alluminio profilato o estruso', 'Confronta i due tipi di lamella in base a ingombro, tipo di guida e prestazioni dichiarate per la superficie da schermare.'],
      ['Alloggiamento nel vano', 'Servono spazio laterale per le guide e altezza sopra il serramento per il pacco lamelle. Definiscili con il progettista quando è previsto un monoblocco o un cassonetto dedicato.'],
    ],
    request: ['Misure del vetro e altezza libera sopra il vano', 'Esposizione e uso della stanza', 'Foto o sezione di guide, serramento e alloggiamento'],
    questions: [
      ['Quando scegliere un frangisole invece di una tapparella?', 'Il frangisole è utile se la priorità è modulare la luce con lamelle orientabili. Per altre esigenze di schermatura, confronta anche le configurazioni disponibili per tapparelle e persiane.'],
    ],
    related: ['tapparelle-avvolgibili', 'monoblocchi-coibentati', 'cassonetti-coibentati'],
  },
  pergole: {
    heading: 'Scegli la struttura a partire dallo spazio',
    choices: [
      ['Addossata alla facciata', 'Prendila in considerazione se vuoi proseguire il soggiorno o la cucina verso il terrazzo. Vanno valutati parete di appoggio, portefinestre, gronde e ingombri sul lato casa.'],
      ['Indipendente', 'Può delimitare un tavolo in giardino o una zona relax anche distante dalla casa. Posizione dei montanti, fondo e passaggi attorno alla struttura aiutano a definirne la forma.'],
      ['Pergola, bioclimatica o tenda?', 'La pergola definisce una zona coperta. Se vuoi variare l’inclinazione delle lamelle, guarda la bioclimatica. Se ti serve soprattutto ombra quando la apri, valuta anche una tenda da sole.'],
    ],
    figure: ['pergola-terrazza', 'Pergola addossata sopra la zona pranzo di una terrazza', 'Esempio di pergola addossata con zona pranzo'],
    request: ['Una foto d’insieme e una del punto di appoggio', 'Larghezza e profondità indicative da coprire', 'Comune, esposizione al sole e uso dello spazio'],
    questions: [
      ['Da cosa dipende il preventivo?', 'Dimensioni, struttura, copertura, fissaggi, accessori e condizioni di posa incidono sul preventivo. Una terrazza con ostacoli o accesso limitato richiede informazioni diverse da un giardino libero.'],
      ['Posso partire senza un rilievo preciso?', 'Sì. Foto e misure indicative bastano per un primo confronto. Quote, punti di fissaggio e configurazione vanno verificati prima di definire la soluzione.'],
    ],
    related: ['bioclimatiche', 'tende-da-sole'],
  },
  bioclimatiche: {
    heading: 'Progetta ombra e ventilazione',
    choices: [
      ['Posizione delle lamelle', 'Cambiando l’inclinazione delle lamelle cambia la luce sotto la pergola. Segnala quando usi il terrazzo e da quale lato entra il sole nelle ore più rilevanti.'],
      ['Struttura e appoggi', 'Confronta una struttura addossata con una indipendente in base a pareti disponibili, passaggi e pavimentazione. Una pianta indicativa aiuta a posizionare i montanti.'],
      ['Accessori e predisposizioni', 'Se desideri illuminazione o altre funzioni, segnalalo all’inizio. Disponibilità, alimentazione e passaggi impiantistici dipendono dal sistema che verrà valutato.'],
    ],
    figure: ['bioclimatica-luce', 'Pergola bioclimatica con illuminazione nella struttura', 'Esempio di pergola a lamelle con illuminazione'],
    request: ['Ingombro indicativo dell’area da coprire', 'Foto del pavimento e della parete, se presente', 'Orari di utilizzo, esposizione e accessori desiderati'],
    questions: [
      ['Come confronto due modelli per l’esterno?', 'Considera la scheda del modello e della configurazione effettiva, inclusi orientamento delle lamelle, gestione dell’acqua, accessori e caratteristiche dichiarate per l’esposizione prevista.'],
    ],
    related: ['pergole', 'tende-da-sole'],
  },
  'tende-da-sole': {
    heading: 'Scegli come schermare sole e luce',
    choices: [
      ['Tende a bracci', 'Si estendono verso l’esterno e creano ombra sopra la zona da proteggere. La profondità da ombreggiare e la posizione del fissaggio guidano la scelta.'],
      ['Tende verticali e guidate', 'Una schermatura verticale è utile per la luce che arriva frontalmente o di lato. Segnala dove scenderebbe il telo e se ci sono parapetti, finestre o guide già presenti.'],
      ['Comando manuale o motorizzato', 'La scelta dipende da accessibilità del comando e frequenza d’uso. Per la motorizzazione, indica la disponibilità di alimentazione in prossimità del fissaggio.'],
    ],
    figure: ['tende-balconi', 'Tende a righe sopra i balconi di una facciata', 'Ripetizione di tende su una facciata con balconi'],
    request: ['Larghezza del vano e profondità da ombreggiare', 'Foto di prospetto, parapetto e fissaggi esistenti', 'Uso dello spazio, comando preferito ed eventuali vincoli sul tessuto'],
    questions: [
      ['Posso coordinare il tessuto con il resto della facciata?', 'Indica eventuali colori o disegni già richiesti per l’edificio e, se puoi, condividi una foto. La scelta va confrontata con i campioni disponibili.'],
    ],
    related: ['pergole', 'bioclimatiche', 'frangisole'],
  },
};
