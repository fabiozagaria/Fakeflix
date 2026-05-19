# Prova Pratica Landing Page Stranger Things (Netflix Clone)
Realizzato per Labforweb / Nerd Academy.

## Descrizione del Progetto
L'obiettivo di questo progetto è realizzare una Landing Page funzionale, pulita e ben documentata ispirata alla pagina Netflix di Stranger Things.

Il focus è sull'**approccio Vanilla**: l'architettura è stata progettata in puro HTML, CSS e JavaScript per dimostrare comprensione profonda dei fondamenti web, evitando librerie terze o framework come React, Angular o Bootstrap, come da specifiche.

## Tecnologie Usate
- **HTML5**: Per la struttura e la semantica della pagina (`index.html`).
- **CSS3**: Per stilizzare il documento e gestire il layout responsivo (`css/style.css`). Ho usato Flexbox, un blocco `:root` per variabili riutilizzabili e transizioni morbide per l'esperienza utente.
- **JavaScript (Vanilla)**: Per l'interazione utente e la manipolazione dinamica del DOM (`js/app.js`). Strutturato in modo modulare per dati, stato e funzioni.

## Struttura File
- `index.html`: Struttura centrale e marcatori per le aree dinamiche.
- `css/style.css`: Stili organizzati in moduli visivi corrispondenti alle sezioni della pagina.
- `js/app.js`: Contiene tutto il comportamento dell'applicazione.
- `assets/`: Directory pensata per ospitare file statici come immagini o loghi. (Nota: alcuni asset servono per scopi puramente dimostrativi/didattici e provengono dalle lezioni precedenti).
- `README.md`: Questo file esplicativo.

## Funzionalità Implementate (Dettaglio Tecnico)

### 1. Architettura JavaScript e Stato ("Source of Truth")
Il codice JS è stato suddiviso in sezioni semantiche chiare:
- `Dati`: Database fittizio con costanti Array/Oggetti (es. `trailers`, `episodesBySeason`).
- `Stato`: Un singolo oggetto `state` per definire l'entità selezionata (es. `selectedSeason`).
- `Funzioni`: Piccole funzioni riutilizzabili con singola responsabilità.

**Perché è stato fatto così?** Per prevenire uno "Spaghetti Code". Utilizzando uno stato centralizzato, il flusso dell'applicazione diventa prevedibile: un evento (es. un click) cambia lo stato e chiama una funzione di `render` per allineare il DOM.

### 2. Validazione Form Email (Hero)
Collegata alla funzione `handleEmailSubmit`, previene il default (ricaricamento della pagina). Effettua controlli sulla lunghezza e usa una RegExp per assicurarsi che il formato corrisponda ad una email vera.
**Aggiornamento DOM:** Mostra classi "error" (rosso) o "success" (verde) nel nodo sottostante (`emailMessage`).

### 3. Trailer Dinamici e Modale Unica
Generati dinamicamente tramite iterazione dell'array `trailers`. Abbiamo una **singola Modale riutilizzabile** nascosta nel DOM base.
**Come funziona?** Cliccando sulla card generata, viene chiamata `openTrailerModal(id)`. Questa funzione estrae l'ID, recupera i dettagli dal database, sovrascrive immagine e testo della singola modale e applica la classe CSS `.show` per mostrarla a schermo.

### 4. Episodi per Stagione
I dati sono mantenuti nell'oggetto `episodesBySeason`, dove ogni chiave è una Stagione.
**Logica JS:** Al cambiamento della tendina HTML (`changeSeason()`), lo `state.selectedSeason` viene aggiornato. Subito dopo viene chiamata `renderEpisodes()`, la quale svuota il contenitore precedente nel DOM e inietta solo il contenuto dell'array riferito a quella stagione.

### 5. Piani in Abbonamento
Generiamo tre card usando l'array `plans`. Al click (`selectPlan(id)`), la card assume un bordo rosso evidenziato grazie alla classe dinamica `.selected`.
**Riepilogo:** Viene inoltre attivato `renderPlanSummary()` che mostra a fondopagina un messaggio amichevole confermando l'ID e il prezzo del piano.

### 6. Caroselli orizzontali nativi
I caroselli sfruttano la potenzialità del CSS moderno: `display: flex`, `overflow-x: auto` e `scroll-behavior: smooth`. 
**Logica scroll:** In Javascript abbiamo la funzione riutilizzabile `scrollCarousel(track, direction)`. Il contenitore visibile viene calcolato come `track.clientWidth * 0.8` (scrolla di quasi una schermata intera alla volta). Usiamo quindi la funzione JS nativa `scrollBy()` per uno sliding fluido.

---
_Progetto a scopo valutativo ed educativo._
