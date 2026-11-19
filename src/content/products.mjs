import { productDetails } from './product-details.mjs';

// Colori delle famiglie presi dalle copertine dei cataloghi IRE.
export const groups = [
  { id: 'serramenti', name: 'Serramenti e porte', line: 'Per ogni apertura della casa.', image: 'serramenti', alt: 'Infisso con telaio in legno affacciato sulla terrazza', text: 'Finestre, scorrevoli, porte, portoni e recinzioni.' },
  { id: 'isolamento', name: 'Isolamento e posa', line: 'Il vano finestra, fatto per intero.', image: 'isolamento-hd', alt: 'Controtelaio in legno fissato alla muratura con schiuma isolante', text: 'Controtelai, monoblocchi e cassonetti per il vano finestra.' },
  { id: 'schermature', name: 'Schermature', line: 'Luce e riservatezza, come vuoi tu.', image: 'schermature', alt: 'Persiana in alluminio a lamelle orientabili', text: 'Persiane, avvolgibili, frangisole, zanzariere e tende tecniche.' },
  { id: 'esterni', name: 'Protezione solare', line: 'Il terrazzo, da vivere di più.', image: 'pergole-hd', alt: 'Pergola a lamelle sopra un tavolo in terrazza', text: 'Pergole, bioclimatiche e tende da sole per terrazzi e giardini.' },
];

const entries = [
  ['serramenti', 'infissi-e-serramenti', 'Infissi e serramenti', 'infissi', 'Finestra in PVC con ampia superficie vetrata', 'Finestre e scorrevoli in PVC e resina strutturata per ristrutturazioni e nuove costruzioni.'],
  ['serramenti', 'infissi-e-porte-in-alluminio', 'Infissi e porte in alluminio', 'alluminio', 'Parete vetrata con profili in alluminio', 'Serramenti e porte in alluminio per interni ed esterni, dalle separazioni vetrate alle grandi aperture.'],
  ['serramenti', 'infissi-e-porte-in-legno', 'Infissi e porte in legno', 'serramenti', 'Finestra con telaio in legno e ampia vetrata', 'Finestre e porte in legno, con soluzioni in legno e alluminio e diverse essenze.'],
  ['serramenti', 'infissi-e-porte-in-acciaio', 'Infissi e porte in acciaio', 'acciaio', 'Divisori vetrati in acciaio in un ambiente interno', 'Porte, vetrate e infissi in acciaio per interni ed esterni.'],
  ['serramenti', 'porte-da-esterno', 'Porte d’ingresso', 'porte', 'Porta d’ingresso da esterno', 'Porte da esterno da abbinare alla facciata e alle caratteristiche dell’ingresso.'],
  ['serramenti', 'portoni-sezionali', 'Portoni sezionali', 'portoni', 'Portone sezionale per garage', 'Chiusure sezionali per garage, da scegliere in base al vano e alla facciata.'],
  ['serramenti', 'recinzioni-e-cancelli', 'Recinzioni e cancelli', 'recinzioni', 'Cancello e recinzione residenziali', 'Recinzioni e cancelli residenziali in acciaio o alluminio.'],
  ['isolamento', 'monoblocchi-coibentati', 'Monoblocchi coibentati', 'monoblocchi', 'Monoblocco coibentato con spalle e vano per avvolgibile', 'Sistemi integrati per coordinare serramento, isolamento e schermatura attorno al vano finestra.'],
  ['isolamento', 'controtelai-a-taglio-termico', 'Controtelai a taglio termico', 'controtelai', 'Controtelaio per il raccordo tra muratura e infisso', 'Elementi di raccordo tra muratura e serramento per progettare la continuità dell’isolamento.'],
  ['isolamento', 'cassonetti-coibentati', 'Cassonetti coibentati', 'cassonetti', 'Cassonetto isolato per avvolgibile', 'Cassonetti per avvolgibili con soluzioni di ispezione e isolamento del vano superiore.'],
  ['isolamento', 'sistema-posa-clima', 'Sistema PosaClima', 'posa', 'Tecnico al lavoro sul telaio della finestra', 'Soluzioni PosaClima per la posa dei serramenti e la riqualificazione di vani finestra esistenti.'],
  ['schermature', 'zanzariere-e-tende-tecniche', 'Zanzariere e tende tecniche', 'zanzariere', 'Zanzariera installata su un’apertura', 'Zanzariere, veneziane e tende a rullo per finestre, portefinestre e grandi aperture.'],
  ['schermature', 'tapparelle-avvolgibili', 'Tapparelle avvolgibili', 'tapparelle', 'Tapparella montata davanti al serramento', 'Avvolgibili in alluminio, acciaio e PVC, con opzioni coibentate e di sicurezza.'],
  ['schermature', 'persiane-in-alluminio', 'Persiane in alluminio', 'schermature', 'Persiana in alluminio con lamelle', 'Persiane in alluminio con finiture da coordinare con infissi e facciata.'],
  ['schermature', 'frangisole', 'Frangisole', 'frangisole', 'Frangisole esterno in alluminio', 'Schermature a lamelle per modulare la luce davanti a finestre e vetrate.'],
  ['esterni', 'pergole', 'Pergole', 'pergole', 'Pergola con tavolo e sedute all’aperto', 'Coperture per creare una zona riparata su terrazzi e in giardino.'],
  ['esterni', 'bioclimatiche', 'Pergole bioclimatiche', 'bioclimatiche', 'Pergola bioclimatica a lamelle accanto a una piscina', 'Pergole a lamelle orientabili per regolare sole, ombra e ventilazione.'],
  ['esterni', 'tende-da-sole', 'Tende da sole', 'tende', 'Tenda da sole a righe sopra un tavolo in terrazza', 'Tende per ombreggiare balconi, terrazzi e spazi esterni.'],
];

export const products = entries.map(([group, slug, name, image, alt, intro]) => ({
  group, slug, name, image, alt, intro,
  details: productDetails[slug],
  url: `/services/${slug}/`,
}));

export const catalogs = [
  ['Controtelai, monoblocchi e PosaClima', 'monoblocchi-coibentati', 'cat-monoblocchi'],
  ['Avvolgibili, cassonetti e frangisole', 'tapparelle-avvolgibili', 'cat-avvolgibili'],
  ['Zanzariere, veneziane e tende a rullo', 'zanzariere-e-tende-tecniche', 'cat-zanzariere'],
  ['Infissi in PVC e resina strutturata', 'infissi-e-serramenti', 'cat-persiane'],
  ['Porte e finestre in acciaio', 'infissi-e-porte-in-acciaio', 'cat-acciaio'],
  ['Porte e finestre in alluminio', 'infissi-e-porte-in-alluminio', 'cat-alluminio'],
  ['Porte e finestre in legno', 'infissi-e-porte-in-legno', 'cat-legno'],
  ['Porte d’ingresso', 'porte-da-esterno', 'cat-porte'],
  ['Portoni sezionali', 'portoni-sezionali', 'cat-sezionali'],
  ['Recinzioni residenziali', 'recinzioni-e-cancelli', 'cat-recinzioni'],
  ['Pergole', 'pergole', 'cat-pergolati'],
  ['Pergole bioclimatiche', 'bioclimatiche', 'cat-bioclimatiche'],
  ['Tende da sole', 'tende-da-sole', 'cat-tende'],
  ['Vetrate e persiane', 'persiane-in-alluminio', 'cat-vetrate'],
];
