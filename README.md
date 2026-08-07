# Fakeflix

Landing page responsive ispirata all'esperienza Netflix e dedicata a Stranger Things. È sviluppata esclusivamente con HTML, CSS e JavaScript vanilla per consolidare i fondamenti del frontend senza framework.

[Demo live](https://fakeflix-lemon-six.vercel.app/)

## Funzionalità

- navigazione tra le sezioni della pagina;
- validazione dell'indirizzo email con feedback visivo;
- trailer generati dinamicamente;
- modale riutilizzabile per i contenuti;
- selezione della stagione e rendering degli episodi;
- caroselli orizzontali realizzati con API native del browser;
- selezione di un piano e riepilogo dinamico;
- layout responsive.

## Tecnologie

- HTML5
- CSS3
- JavaScript ES6+
- DOM API
- Flexbox e CSS custom properties

## Scelte tecniche

Il progetto usa un piccolo stato centralizzato per mantenere prevedibile il flusso dell'interfaccia. Gli eventi aggiornano lo stato e richiamano funzioni di rendering dedicate, evitando di distribuire la logica direttamente nel markup.

Una singola modale viene riutilizzata per tutti i trailer; episodi, piani e card sono generati a partire da strutture dati JavaScript.

## Struttura

```text
Fakeflix
├── assets
├── css
│   └── style.css
├── js
│   └── app.js
├── index.html
└── README.md
```

## Avvio in locale

Non sono richieste dipendenze o compilazione.

```bash
git clone https://github.com/fabiozagaria/Fakeflix.git
cd Fakeflix
```

Apri `index.html` nel browser oppure servi la cartella con un server statico locale.

## Obiettivi formativi

- manipolazione del DOM;
- gestione degli eventi;
- organizzazione di dati e stato;
- componenti visuali riutilizzabili senza framework;
- responsive design.

## Disclaimer

Fakeflix è un progetto esclusivamente educativo. Non è affiliato a Netflix e i marchi o contenuti citati appartengono ai rispettivi proprietari.

## Autore

Sviluppato da [Fabio Zagaria](https://github.com/fabiozagaria) durante il percorso LabForWeb / Nerd Academy.
