# Fakeflix — Landing page in JavaScript vanilla

Landing page responsive ispirata all'esperienza di una piattaforma streaming e dedicata a Stranger Things. Il progetto è stato realizzato senza framework per consolidare HTML, CSS e JavaScript nativo.

[Demo online](https://fakeflix-lemon-six.vercel.app/)

## Competenze dimostrate

- costruzione di un'interfaccia responsive senza librerie UI;
- manipolazione dinamica del DOM;
- gestione centralizzata di dati e stato;
- organizzazione degli eventi utente;
- validazione di un form con feedback visivo;
- creazione di componenti visuali riutilizzabili tramite JavaScript.

## Funzionalità

- navigazione tra le sezioni;
- validazione dell'indirizzo email;
- trailer generati da strutture dati JavaScript;
- modale unica e riutilizzabile;
- selezione della stagione e rendering degli episodi;
- caroselli orizzontali realizzati con API native del browser;
- selezione di un piano e riepilogo dinamico.

## Tecnologie

- HTML5
- CSS3
- JavaScript ES6+
- DOM API
- Flexbox
- CSS custom properties

## Scelte tecniche

Il progetto utilizza un piccolo oggetto di stato come fonte centrale dei dati. Gli eventi aggiornano lo stato e richiamano funzioni di rendering dedicate, mantenendo separati contenuti, comportamento e presentazione.

Una singola modale serve tutti i trailer, mentre episodi e piani vengono generati a partire da array e oggetti JavaScript.

## Struttura

```text
fakeflix-vanilla-js
├── assets
├── css
│   └── style.css
├── js
│   └── app.js
├── index.html
└── README.md
```

## Avvio in locale

Il progetto non richiede dipendenze o compilazione.

```bash
git clone https://github.com/fabiozagaria/fakeflix-vanilla-js.git
cd fakeflix-vanilla-js
```

Apri `index.html` nel browser oppure utilizza un server statico locale.

## Limiti del progetto

Fakeflix è una demo frontend: non include autenticazione, riproduzione video reale, pagamenti o backend.

## Disclaimer

Progetto esclusivamente educativo, non affiliato a Netflix. Marchi e contenuti citati appartengono ai rispettivi proprietari.

## Autore

Fabio Zagaria — progetto realizzato durante il percorso LabForWeb / Nerd Academy.
