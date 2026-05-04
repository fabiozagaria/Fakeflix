
/* =========================================================================
   1. DATI
   Dati statici (array/oggetti) utilizzati per generare dinamicamente le UI.
   ========================================================================= */

const trailers = [
  { id: "t1", title: "Trailer Ufficiale", duration: "2m 15s", img: "assets/img/it_poster_1777805985876.png", desc: "Guarda il primo spaventoso trailer in cui i ragazzi scoprono la verità." },
  { id: "t2", title: "Dietro le quinte", duration: "5m 30s", img: "assets/img/it_chapter_two_poster_1777805999444.png", desc: "Scopri come sono stati realizzati gli effetti speciali del Sottosopra." },
  { id: "t3", title: "Intervista al cast", duration: "3m 45s", img: "assets/img/dark_poster_1777806013120.png", desc: "Millie Bobby Brown e i ragazzi raccontano la loro esperienza sul set." },
  { id: "t4", title: "Teaser Stagione 2", duration: "1m 10s", img: "assets/img/locke_key_poster_1777806029010.png", desc: "Un breve ma intenso sguardo a ciò che sta per accadere." },
  { id: "t5", title: "I segreti del Demogorgone", duration: "4m 20s", img: "assets/img/dark_poster_1777806013120.png", desc: "I creatori spiegano il design della creatura." },
  { id: "t6", title: "Bloopers dal set", duration: "6m 12s", img: "assets/img/it_poster_1777805985876.png", desc: "Gli errori e le risate degli attori durante le riprese." },
  { id: "t7", title: "Colonna Sonora", duration: "3m 05s", img: "assets/img/locke_key_poster_1777806029010.png", desc: "La realizzazione delle iconiche musiche synth-wave anni '80." },
  { id: "t8", title: "Riassunto Stagione 1", duration: "8m 40s", img: "assets/img/it_chapter_two_poster_1777805999444.png", desc: "Tutto quello che è successo prima dell'inizio della seconda stagione." },
  { id: "t9", title: "Costumi Anni '80", duration: "4m 50s", img: "assets/img/dark_poster_1777806013120.png", desc: "Alla scoperta del look iconico dei protagonisti." },
  { id: "t10", title: "Sneak Peek Esclusivo", duration: "2m 30s", img: "assets/img/it_poster_1777805985876.png", desc: "Una scena inedita svelata in anteprima." }
];

// Oggetto dove ogni chiave rappresenta il numero della stagione
const episodesBySeason = {
  1: [
    { num: 1, title: "La scomparsa di Will Byers", duration: "48m", desc: "Sulla via del ritorno a casa dopo aver giocato con gli amici, il giovane Will vede qualcosa di spaventoso e svanisce nel nulla." },
    { num: 2, title: "La stramba di Maple Street", duration: "55m", desc: "Lucas, Mike e Dustin provano a parlare con la misteriosa ragazza che hanno trovato nel bosco." }
  ],
  2: [
    { num: 1, title: "MADMAX", duration: "48m", desc: "Mentre la città si prepara per Halloween, una nuova compagna di classe molto brava ai videogiochi suscita l'interesse dei ragazzi." },
    { num: 2, title: "Dolcetto o scherzetto, matto", duration: "56m", desc: "Will ha una terribile visione durante la notte di Halloween che spinge Joy a cercare risposte." }
  ]
};

const suggestions = [
  { id: "s1", title: "Dark", img: "assets/img/dark_poster_1777806013120.png" },
  { id: "s2", title: "IT", img: "assets/img/it_poster_1777805985876.png" },
  { id: "s3", title: "Locke & Key", img: "assets/img/locke_key_poster_1777806029010.png" },
  { id: "s4", title: "IT: Capitolo 2", img: "assets/img/it_chapter_two_poster_1777805999444.png" },
  { id: "s5", title: "The Witcher", img: "assets/img/dark_poster_1777806013120.png" },
  { id: "s6", title: "Black Mirror", img: "assets/img/it_poster_1777805985876.png" },
  { id: "s7", title: "Squid Game", img: "assets/img/locke_key_poster_1777806029010.png" },
  { id: "s8", title: "Peaky Blinders", img: "assets/img/it_chapter_two_poster_1777805999444.png" },
  { id: "s9", title: "Breaking Bad", img: "assets/img/dark_poster_1777806013120.png" },
  { id: "s10", title: "Better Call Saul", img: "assets/img/it_poster_1777805985876.png" },
  { id: "s11", title: "Mindhunter", img: "assets/img/locke_key_poster_1777806029010.png" },
  { id: "s12", title: "Ozark", img: "assets/img/it_chapter_two_poster_1777805999444.png" }
];

const plans = [
  { id: "p1", name: "Base", price: "7,99 €", quality: "Buona (720p)", features: "1 Dispositivo supportato<br>Download su 1 dispositivo" },
  { id: "p2", name: "Standard", price: "12,99 €", quality: "Ottima (1080p)", features: "2 Dispositivi in contemporanea<br>Download su 2 dispositivi" },
  { id: "p3", name: "Premium", price: "17,99 €", quality: "Eccezionale (4K+HDR)", features: "4 Dispositivi in contemporanea<br>Audio spaziale Netflix" }
];


//state

const state = {
  selectedSeason: 1,
  selectedPlanId: null,
  selectedTrailerId: null
};




// Hero form
const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const emailMessage = document.getElementById("email-message");

// Liste caroselli
const trailerTrack = document.getElementById("trailer-track");
const suggestionsTrack = document.getElementById("suggestions-track");

// Modale e interni
const trailerModal = document.getElementById("trailer-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDuration = document.getElementById("modal-duration");
const modalDesc = document.getElementById("modal-desc");

// Episodi
const seasonSelect = document.getElementById("season-select");
const episodesContainer = document.getElementById("episodes-container");

// Piani
const plansContainer = document.getElementById("plans-container");
const planSummary = document.getElementById("plan-summary");

// Tutti i caroselli per la navigazione frecce
const caroselsSections = document.querySelectorAll(".carousel-section");


// Funzioni

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


function handleEmailSubmit(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  // Rimuove eventuali classi vecchie
  emailMessage.className = "form-message";

  if (emailValue === "") {
    emailMessage.textContent = "Il campo email non può essere vuoto.";
    emailMessage.classList.add("error");
  } else if (!validateEmail(emailValue)) {
    emailMessage.textContent = "Inserisci un indirizzo email valido.";
    emailMessage.classList.add("error");
  } else {
    emailMessage.textContent = `Ottimo! L'indirizzo ${emailValue} è stato registrato.`;
    emailMessage.classList.add("success");
    emailInput.value = "";
  }
}


function renderTrailers() {
  trailerTrack.innerHTML = "";
  trailers.forEach(trailer => {
    const li = document.createElement("li");
    li.className = "carousel-item";
    li.innerHTML = `
      <img src="${trailer.img}" alt="${trailer.title}">
      <div class="carousel-item-info">
        <h4 class="carousel-item-title">${trailer.title}</h4>
      </div>
    `;
    // Al click passo l'ID del trailer per aprire la modale
    li.addEventListener("click", () => openTrailerModal(trailer.id));
    trailerTrack.appendChild(li);
  });
}

/**
 * Trova il trailer nel DB, ne inietta i dati nella modale singola e la mostra.
 */
function openTrailerModal(trailerId) {
  const trailer = trailers.find(t => t.id === trailerId);
  if (!trailer) return;
  
  state.selectedTrailerId = trailerId;
  
  modalImg.src = trailer.img;
  modalTitle.textContent = trailer.title;
  modalDuration.textContent = `Durata: ${trailer.duration}`;
  modalDesc.textContent = trailer.desc;
  
  trailerModal.classList.add("show");
  document.body.style.overflow = "hidden"; // blocco scroll pagina principale
}

function closeTrailerModal() {
  state.selectedTrailerId = null;
  trailerModal.classList.remove("show");
  document.body.style.overflow = ""; // sblocco scroll pagina
}

function initSeasonsSelect() {
  seasonSelect.innerHTML = "";
  const seasons = Object.keys(episodesBySeason);
  seasons.forEach(seasonNum => {
    const option = document.createElement("option");
    option.value = seasonNum;
    option.textContent = `Stagione ${seasonNum}`;
    if (Number(seasonNum) === state.selectedSeason) {
      option.selected = true;
    }
    seasonSelect.appendChild(option);
  });
}


function renderEpisodes() {
  episodesContainer.innerHTML = "";
  const episodes = episodesBySeason[state.selectedSeason];
  
  if (episodes) {
    episodes.forEach(ep => {
      const li = document.createElement("li");
      li.className = "episode-item";
      li.innerHTML = `
        <div class="ep-num">${ep.num}</div>
        <div class="ep-info">
          <div class="ep-title">${ep.title}</div>
          <div class="ep-duration">${ep.duration}</div>
          <div class="ep-desc">${ep.desc}</div>
        </div>
      `;
      episodesContainer.appendChild(li);
    });
  }
}

function changeSeason(seasonNumber) {
  state.selectedSeason = Number(seasonNumber);
  renderEpisodes();
}

function renderSuggestions() {
  suggestionsTrack.innerHTML = "";
  suggestions.forEach(s => {
    const li = document.createElement("li");
    li.className = "carousel-item";
    li.innerHTML = `
      <img src="${s.img}" alt="${s.title}">
      <div class="carousel-item-info">
        <h4 class="carousel-item-title">${s.title}</h4>
      </div>
    `;
    suggestionsTrack.appendChild(li);
  });
}

/**
 * Genera l'HTML delle tre card abbonamento.
 */
function renderPlans() {
  plansContainer.innerHTML = "";
  plans.forEach(plan => {
    const div = document.createElement("div");
    div.className = "plan-card";
    
    // Aggiungo la classe CSS 'selected' se è il piano attivo nello stato
    if (plan.id === state.selectedPlanId) {
      div.classList.add("selected");
    }
    
    div.innerHTML = `
      <h3 class="plan-name">${plan.name}</h3>
      <p class="plan-price">${plan.price} / mese</p>
      <div class="plan-features">
        <p><strong>Qualità:</strong> ${plan.quality}</p>
        <p>${plan.features}</p>
      </div>
    `;
    div.addEventListener("click", () => selectPlan(plan.id));
    plansContainer.appendChild(div);
  });
}


function selectPlan(planId) {
  state.selectedPlanId = planId;
  renderPlans();
  renderPlanSummary();
}

function renderPlanSummary() {
  const plan = plans.find(p => p.id === state.selectedPlanId);
  if (plan) {
    planSummary.innerHTML = `Fantastico! Hai scelto il piano <strong>${plan.name}</strong> a ${plan.price} al mese.`;
    planSummary.classList.add("show");
  }
}

/**
 * Gestisce lo scrolling orizzontale dei caroselli calcolando l'80% della larghezza visibile.
 */
function scrollCarousel(track, direction) {
  const scrollAmount = track.clientWidth * 0.8; 
  if (direction === "right") {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  } else if (direction === "left") {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
}


// Event Listeners

// Validazione Form Email
emailForm.addEventListener("submit", handleEmailSubmit);

// Cambiamento della Select per le stagioni
seasonSelect.addEventListener("change", (e) => {
  changeSeason(e.target.value);
});

// Chiusura Modale (click su "X" e fuori dal content)
closeModalBtn.addEventListener("click", closeTrailerModal);
trailerModal.addEventListener("click", (e) => {
  if (e.target === trailerModal) {
    closeTrailerModal();
  }
});

// Funzionamento dei bottoni "Next/Prev" nei caroselli
caroselsSections.forEach(section => {
  const prevBtn = section.querySelector(".prev-btn");
  const nextBtn = section.querySelector(".next-btn");
  const trackWrapper = section.querySelector(".carousel-track-wrapper");

  if (prevBtn && nextBtn && trackWrapper) {
    nextBtn.addEventListener("click", () => scrollCarousel(trackWrapper, "right"));
    prevBtn.addEventListener("click", () => scrollCarousel(trackWrapper, "left"));
  }
});


/* =========================================================================
   6. INIT FINALE
   Innesca il primo render di tutte le sezioni dinamiche appena la pagina è pronta.
   ========================================================================= */

function init() {
  renderTrailers();
  initSeasonsSelect();
  renderEpisodes();
  renderSuggestions();
  renderPlans();
}

// Quando l'HTML è stato completamente caricato, esegui init
document.addEventListener("DOMContentLoaded", init);
