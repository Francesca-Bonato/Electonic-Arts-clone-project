document.addEventListener("DOMContentLoaded", function () {
  const scrollMenu = document.querySelector(".menu-scroll-active");
  const leftButton = document.querySelector("#menu-novita-scroll-left");
  const rightButton = document.querySelector("#menu-novita-scroll-right");

  function checkScroll() {
    const scrollLength = scrollMenu.scrollWidth - scrollMenu.clientWidth;
    const currentScroll = scrollMenu.scrollLeft;
    if (currentScroll === 0) {
      leftButton.classList.add("hidden");
      rightButton.classList.remove("hidden");
    } else if (currentScroll === scrollLength) {
      rightButton.classList.add("hidden");
      leftButton.classList.remove("hidden");
    } else {
      leftButton.classList.remove("hidden");
      rightButton.classList.remove("hidden");
    }
  }

  scrollMenu.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollMenu.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  }

  function rightScroll() {
    scrollMenu.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});

//Richiamo di tutta la sezione
let ultimeNovitaFilter = Array.from(document.querySelectorAll(".ultime-novitabtn"));

//Singola card novità
const singleCard = document.querySelector(".single-card-novita");

//container cards novità
const containerCard = document.querySelector(".container-Cards-novita");

//Array contenente tutte le card
const sectionCards = [
  [
    {
      section: "notizie-Ea",
      data: [
        {
          image: "assets/ultime-novita/novita-1.jpg",
          house: "Electronic Arts Inc.",
          date: "9-feb-2024",
          title: "EA SPORTS FC™ - Vita nel team",
          description:
            "Scopri dagli sviluppatori di EA SPORTS FC cosa si prova a lavorare nel team",
        },
        {
          image: "assets/ultime-novita/novita-2.png",
          house: "Electronic Arts Inc.",
          date: "18-gen-2024",
          title: "Sbloccare opportunità: uno sguardo sulla vita in EA",
          description:
            "Kirk Chavarie, reclutatore di Electronic Arts, condivide la sua conoscenza sulla cultura, i valori e le opportunità di crescita lavorativa dell'azienda",
        },
        {
          image: "assets/ultime-novita/novita-3.png",
          house: "Frostbite",
          date: "18-dic-2023",
          title:
            "Annunciato un nuovo look e un nuovo futuro per il motore Frostbite di EA",
          description:
            "Il rebranding del Frostbite da parte di Electronic Arts nel 2024 segna un'era nuova e più collaborativa per il suo motore di gioco all'avanguardia.",
        },
        {
          image: "assets/ultime-novita/novita-4.jpg",
          house: "Maxis ",
          date: "14-dic-2023",
          title: "Dietro The Sims 4 In Affitto Expansion Pack",
          description:
            "nuovi immobili in locazione adattano la narrazione tipica di The Sims alla vita multifamiliare.",
        },
        {
          image: "assets/ultime-novita/novita-5.png",
          house: "Electronic Arts Inc.",
          date: "13-dic-2023",
          title: "Festeggiamo un anno importante per EA SPORTS",
          description:
            "È stato un anno importante per EA SPORTS e vogliamo riflettere su alcuni dei nostri più grandi successi e sforzi riguardo ai nostri giochi, alle nostre community e ai nostri team mentre ci avviamo verso il nuovo anno.",
        },
        {
          image: "assets/ultime-novita/novita-6.png",
          house: "Electronic Arts Inc.",
          date: "13-dic-2023",
          title:
            'Electronic Arts è stata nominata in diverse classifiche dei "Migliori ambie...',
          description:
            "Electronic Arts è stata premiata per la qualità del suo ambiente di lavoro.",
        },
      ],
    },
  ],
  [
    {
      section: "ea-Sports-Fc",
      data: [
        {
          image: "assets/ultime-novita/sports-1.jpg",
          house: "",
          date: "2-feb-2024",
          title:
            "Aggiornamento sulla SCR campionati TOTY 86+ -Sito ufficiale EA SPORTS",
          description: "",
        },
        {
          image: "assets/ultime-novita/sports-2.jpg",
          house: "",
          date: "5-dic-2023",
          title:
            "EA SPORTS FC™ 24 | Note del team di sviluppo - Aggiornamento delle feste L'aggiornamento delle feste",
          description:
            "L'aggiornamento delle feste (aggiornamento n°6) è vicino e non vediamo l'ora di parlarvi delle fantastiche modifiche e aggiunte a EA SPORTS FC™ 24.",
        },
        {
          image: "assets/ultime-novita/sports-3.jpg",
          house: "",
          date: "23-nov-2023",
          title: "EA SPORTS FC™ 24 - UEFA EURO 2024",
          description:
            "EA SPORTS FC 24 dà il benvenuto nel Club a UEFA EURO 2024™: gioca subito e ottieni un giocatore UEFA EURO 2024 in Ultimate Team™™.",
        },
        {
          image: "assets/ultime-novita/sports-4.jpg",
          house: "",
          date: "3-nov-2023",
          title: "Ultimate Team™ 24 - Scelte degli esperti",
          description:
            "Presentiamo le Scelte degli esperti in Ultimate Team™ 24",
        },
        {
          image: "assets/ultime-novita/sports-5.jpg",
          house: "",
          date: "26-ott-2023",
          title:
            "EA SPORTS FC 24 - Offerta adidas FC Founder - Sito ufficiale EA SPORTS",
          description:
            "EA SPORTS FC 24 e adidas hanno unito le forze per offrire ai nostri FC Founder uno sconto del 25% sui prodotti idonei all'indirizzo www.adidas.com/ea_sports",
        },
        {
          image: "assets/ultime-novita/sports-6.jpg",
          house: "",
          date: "26-ott-2023",
          title: "24 giorni di EA SPORTS FC™ 24 - Sito ufficiale EA SPORTS",
          description:
            "Benvenuti nel Club: date un'occhiata agli ultimi traguardi raggiunti dalla community nei primi 24 giorni di FC 24",
        },
        {
          image: "assets/ultime-novita/sports-7.jpg",
          house: "",
          date: "22-set-2023",
          title: "EA SPORTS FC™ 24 | Aggiornamento PC",
          description:
            "Scopri i prossimi aggiornamenti di EA SPORTS FC™ 24 su PC basati sui feedback della community.",
        },
        {
          image: "assets/ultime-novita/sports-8.jpg",
          house: "",
          date: "22-set-2023",
          title: "EA SPORTS FC™ 24 - Probabilità pacchetti",
          description:
            "Scopri le probabilità per i pacchetti in EA SPORTS FC™ 24 che elencheranno nel dettaglio ciò che è possibile trovare all'interno dei pacchetti acquistati.",
        },
        {
          image: "assets/ultime-novita/sports-9e10.png",
          house: "",
          date: "20-set-2023",
          title:
            "EA SPORTS FC 24 | Note del team di sviluppo - Approfondimento sugli stili d...",
          description:
            "Usa questa pagina come guida agli stili di gioco mentre muovi i primi passi in EA SPORTS FC 24.",
        },
        {
          image: "assets/ultime-novita/sports-9e10.png",
          house: "",
          date: "20-set-2023",
          title:
            "EA SPORTS FC 24 | NoteNote di sviluppo - Approfondimento sulla versione per...",
          description:
            "EA SPORTS FC™ 24 su Nintendo Switch™ riceverà un miglioramento significativo grazie al motore di gioco Frostbite, arrivando cosi ad avere le stesse funzionalità delle versioni PS4e Xbox One.",
        },
        {
          image: "assets/ultime-novita/sports-11e12.jpg",
          house: "",
          date: "18-set-2023",
          title:
            "Valutazioni EA SPORTS FC™ 24 - Gemme nascoste nella Carriera tecnico Scopri i giocatori sulla lista di ogni tecnico.",
          description:
            "Scopri i giocatori sulla lista di ogni tecnico. Ecco i giocatori con i maggiori margini di crescita in EA SPORTS FC 24.",
        },
        {
          image: "assets/ultime-novita/sports-11e12.jpg",
          house: "",
          date: "18-set-2023",
          title:
            "Valutazioni EA SPORTS FC™ 24 - Potenziale più alto nella Carriera tecnico",
          description:
            "Questi giocatori puntano in alto. Ecco i giocatori con il potenziale più alto in EA SPORTS FC 24.",
        },
      ],
    },
  ],
  [
    {
      section: "apex Legends",
      data: [
        {
          image: "assets/ultime-novita/apex-1.png",
          house: "Apex Legends",
          date: "4-mar-2024",
          title: "Vai a caccia nell'evento collezione Bestia interiore",
          description:
            "Gioca con i cacciatori o con le prede e onora il padre degli dei completando nuove sfide.",
        },
        {
          image: "assets/ultime-novita/apex-2.png",
          house: "Apex Legends",
          date: "12-feb-2024",
          title: "Apex Legends™: Svolta - Note sulla patch",
          description:
            "Preparati per l'uscita di Svolta con tutti i dettagli sul sistema di creazione, i potenziamenti, le modifiche al bilanciamento e non solo.",
        },
        {
          image: "assets/ultime-novita/apex-3.png",
          house: "Apex Legends",
          date: "8-feb-2024",
          title:
            "Celebra 5 anni di Apex Legends con l'evento collezione Anniversario ",
          description:
            "Celebra il nostro 5° anniversario e gioca per ottenere oggetti cosmetici con un nuovo contatore premi, una nuova modalità e altro ancora!",
        },
        {
          image: "assets/ultime-novita/apex-4.png",
          house: "Apex Legends",
          date: "6-feb-2024",
          title: "Le ricompense di Apex Legends™: Svolta",
          description:
            "Tutto quello che c'è da sapere sulle ricompense di Apex Legends™: Svolta.",
        },
        {
          image: "assets/ultime-novita/apex-5.png",
          house: "Apex Legends",
          date: "5-feb-2024",
          title: "Tutte le novità di Apex",
          description:
            "Scopri in anteprima i potenziamenti per le leggende, la Classificata, il Thunderdome e gli altri aggiornamenti della nuova stagione.",
        },
        {
          image: "assets/ultime-novita/apex-6.jpg",
          house: "Apex Legends Legends™: Svolta",
          date: "16-gen-2024",
          title: "Pro League 4ª edizione: tutto quello che c'è da sapere",
          description:
            "La Pro League della ALGS ti aspetta il 20 e 21 gennaio 2024! Scopri di più sui team, i programmi, i gironi, i nostri talenti e non solo!",
        },
      ],
    },
  ],
  [
    {
      section: "the Sims 4",
      data: [
        {
          image: "assets/ultime-novita/sims-1e2e4.png",
          house: "The Sims 4",
          date: "28-feb-2024",
          title: "La collezione di gioielli veri di The Sims con i Plumbob",
          description:
            "Acquista la collezione dei gioielli Plumbob di The Sims 4 Creazioni di Cristallo Stuff Pack",
        },
        {
          image: "assets/ultime-novita/sims-1e2e4.png",
          house: "The Sims 4",
          date: "28-feb-2024",
          title: "La collezione di gioielli veri di The Sims con i Plumbob",
          description:
            "Acquista la collezione dei gioielli Plumbob di The Sims 4 Creazioni di Cristallo Stuff Pack",
        },
        {
          image: "assets/ultime-novita/sims-3e5.jpg",
          house: "The Sims 4",
          date: "28-feb-2024",
          title: "aggiornamento: 28/02/2024",
          description: "E-Patch",
        },
        {
          image: "assets/ultime-novita/sims-1e2e4.png",
          house: "The Sims 4",
          date: "28-feb-2024",
          title: "La collezione di gioielli veri di The Sims con i Plumbob",
          description:
            "Acquista la collezione dei gioielli Plumbob di The Sims 4 Creazioni di Cristallo Stuff Pack",
        },
        {
          image: "assets/ultime-novita/sims-3e5.jpg",
          house: "The Sims 4",
          date: "27-feb-2024",
          title: "aggiornamento: 27/02/2024",
          description: "Un aggiornamento tra i più scintillanti",
        },
        {
          image: "assets/ultime-novita/sims-6.png",
          house: "The Sims 4",
          date: "22-feb-2024",
          title:
            "Arethabee crea gioielli appariscenti per The Sims 4 Creazioni di Cristallo ...",
          description: "Sei tu a creare The Sims con Arethabee",
        },
      ],
    },
  ],
  [
    {
      section: "star Wars",
      data: [
        {
          image: "assets/ultime-novita/starwars-1.jpg",
          house: "Star Wars™ Galaxy of Heroes",
          date: "27-feb-2024",
          title: "Anteprima calendario di marzo",
          description: "Dai un'occhiata ai prossimi eventi!",
        },
        {
          image: "assets/ultime-novita/starwars-2.png",
          house: "Star Wars™ Galaxy of Heroes",
          date: "22-feb-2024",
          title: "Presentazione di Boss Nass",
          description:
            "Scopri le abilità di Boss Nass in questa presentazione!",
        },
        {
          image: "assets/ultime-novita/starwars-3.jpg",
          house: "Star Wars™ Galaxy of Heroes",
          date: "20-feb-2024",
          title: "Le novità in arrivo, febbraio 2024",
          description:
            "Ecco le novità in arrivo per Gli eroi della galassia - Edizione febbraio 2024! Inizia un nuovo viaggio tutto all'insegna di Star Wars: La Minaccia Fantasma™!",
        },
        {
          image: "assets/ultime-novita/starwars-4.png",
          house: "Star Wars™ Galaxy of Heroes",
          date: "8-feb-2024",
          title: "Presentazione della STAP",
          description: "Scopri le abilità della STAP in questa presentazione! ",
        },
        {
          image: "assets/ultime-novita/starwars-5.jpg",
          house: "Star Wars™ Galaxy of Heroes",
          date: "30-gen-2024",
          title: "Anteprima del calendario di febbraio",
          description: "Dai un'occhiata ai prossimi eventi!",
        },
        {
          image: "assets/ultime-novita/starwars-6.png",
          house: "Star Wars™ Galaxy of Heroes",
          date: "17-gen-2024",
          title: "Presentazione del Comeuppance",
          description:
            "Scopri le abilità del Comeuppance in questa presentazione!",
        },
      ],
    },
  ],
  [
    {
      section: "f1",
      data: [
        {
          image: "assets/ultime-novita/F1-1.png",
          house: "F1® 23",
          date: "27-feb-2024",
          title: "EA SPORTS™ F1® - I TRIONFI DI MAX",
          description: "Riscoprite un anno sensazionale",
        },
        {
          image: "assets/ultime-novita/F1-2.png",
          house: "F1® 23",
          date: "22-feb-2024",
          title:
            "AGGIORNAMENTO DELLE VALUTAZIONI PILOTA DI F1® 23 (FINE STAGIONE)",
          description:
            "È arrivato l'ultimo aggiornamento delle Valutazioni pilota di F1® 23, che tiene conto di Las Vegas e della conclusione di Abu Dhabi",
        },
        {
          image: "assets/ultime-novita/F1-3.jpg",
          house: "F1® 23",
          date: "20-feb-2024",
          title: "F1® 23 - NOTE SULLA PATCH (v1.15)",
          description:
            "Con questo aggiornamento arrivano due grandi modifiche: l'aggiornamento sportivo e la F2™ 2023",
        },
        {
          image: "assets/ultime-novita/F1-4.jpg",
          house: "F1® 23",
          date: "8-feb-2024",
          title: "F1® 23 - NOTE SULLA PATCH (v1.10)",
          description:
            "Con questa patch di F1® 23 arrivano alcune grandi aggiunte e uno degli australiani più amati dai fan",
        },
        {
          image: "assets/ultime-novita/F1-5.png",
          house: "F1® 23",
          date: "30-gen-2024",
          title: "SONO ARRIVATI L'AGGIORNAMENTO SPORTIVO E LA F2™ 2023",
          description:
            "Rivivi la stagione di quest'anno della Formula 2™ in F1® 23",
        },
        {
          image: "assets/ultime-novita/F1-6.jpg",
          house: "F1® 23",
          date: "17-gen-2024",
          title:
            "F1® 23 - AGGIORNAMENTO DELLE VALUTAZIONI DEI PILOTI (SETTEMBRE)",
          description:
            "I Grand Prix d'Olanda e d'Italia sono gli ultimi a essere stati inclusi nell'aggiornamento delle valutazioni dei piloti di F1® 23",
        },
      ],
    },
  ],
  [
    {
      section: "battlefield",
      data: [
        {
          image: "assets/ultime-novita/battlefield-1.jpg",
          house: "Battlefield 2042",
          date: "12-dic-2023",
          title: "AGGIORNAMENTO 6.4.0 DI BATTLEFIELD 2042",
          description:
            "Qui troverai un elenco dei miglioramenti al gameplay che risolvono diversi problemi relativi a Battlefield 2042",
        },
        {
          image: "assets/ultime-novita/battlefield-2.png",
          house: "Battlefield 2042",
          date: "7-dic-2023",
          title: "AGGIORNAMENTO 6.3.0 DI BATTLEFIELD 2042",
          description:
            "L'Aggiornamento 6.3.0 include un nuovo modificatore per gli spettatori di squadra e ulteriori modifiche al bilanciamento per Battlefield 2042!",
        },
        {
          image: "assets/ultime-novita/battlefield-3.jpg",
          house: "Battlefield 2042",
          date: "16-ott-2023",
          title: "AGGIORNAMENTO 6.2.1 DI BATTLEFIELD 2042",
          description: "Piccolo hotfix per Battlefield 2042!",
        },
        {
          image: "assets/ultime-novita/battlefield-4.jpg",
          house: "Battlefield 2042",
          date: "16-ott-2023",
          title: "AGGIORNAMENTO 6.2.0 DI BATTLEFIELD 2042",
          description:
            "Dai un'occhiata alle nuove note sull'aggiornamento di Battlefield 2042, che includono bilanciamento delle armi, miglioramenti ai velivoli e altro ancora.",
        },
        {
          image: "assets/ultime-novita/battlefield-5.jpg",
          house: "Battlefield 2042",
          date: "23 19-set-2023",
          title: "Note degli sviluppatori - Stato del gameplay dei veicoli",
          description: "Stagione 6, gameplay dei veicoli",
        },
        {
          image: "assets/ultime-novita/battlefield-6.jpg",
          house: "Battlefield 2042",
          date: "29-ago-2023",
          title: "AGGIORNAMENTO 6.1.0 DI BATTLEFIELD 2042",
          description:
            "L'aggiornamento 6.1.0 di Battlefield 2042 offre ulteriori miglioramenti dell'esperienza di gioco e l'evento a tempo limitato Protocollo oscuro.",
        },
      ],
    },
  ],
  [
    {
      section: "need For Speed",
      data: [
        {
          image: "assets/ultime-novita/need-1.jpg",
          house: "Need for Speed: Hot Pursuit Remastered",
          date: "24-giu-2021",
          title: "Scalda i motori con EA Play",
          description:
            "Need for Speed™ Hot Pursuit Remastered è ora disponibile in The Play List.",
        },
        {
          image: "assets/ultime-novita/need-2.jpg",
          house: "Need for Speed: Hot Pursuit Remastered",
          date: "25-feb-2021",
          title:
            "In arrivo il nuovo editor di wrap con l'aggiornamento NFS™ Hot Pursuit Rema...",
          description:
            "In più, la quarta e la quinta generazione di console avranno una risoluzione e una frequenza dei fotogrammi migliori.",
        },
        {
          image: "assets/ultime-novita/need-3.jpg",
          house: "Need for Speed: Hot Pursuit Remastered",
          date: "18-nov-2020",
          title: "Sotto il cofano: corri e insegui con gli amici",
          description:
            "Ecco come Need for Speed™ Hot Pursuit Remastered fa della competizione tra amici il suo punto di forza.",
        },
        {
          image: "assets/ultime-novita/need-4.jpg",
          house: "Need for Speed: Hot Pursuit Remastered",
          date: "6-nov-2020",
          title: "Need for Speed™ Hot Pursuit Remastered è disponibile ora",
          description:
            "Scalda i motori su PS4, Xbox One e PC oggi stesso e su Nintendo Switch la prossima settimana!",
        },
        {
          image: "assets/ultime-novita/need-5.jpg",
          house: "Need for Speed: Hot Pursuit Remastered",
          date: "30-ott-2020",
          title: "Sotto il cofano: aggiornamenti di gioco",
          description:
            "Preparati a scoprire gli aggiornamenti di gioco in arrivo a tutta velocità in Need for Speed Hot Pursuit Remastered.",
        },
        {
          image: "assets/ultime-novita/need-6.jpg",
          house: "Need for Speed: Hot Pursuit Remastered",
          date: "23-ott-2020",
          title: "Sotto il cofano: bentornato a Seacrest County",
          description:
            "Preparati ad ammirare incredibili miglioramenti grafici e a sfrecciare attraverso strabilianti ambientazioni in Need for Speed Hot Pursuit Remastered.",
        },
      ],
    },
  ],
];

//Ciclo per prendermi tutte le card
//ARR sarebbe l'array con le card di ogni sezione
function generateCards(arr) {
  arr.forEach((info) => {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", `single-card-novita`);
    divCard.innerHTML = `
          <div class="header-card-novita">
          <img
            src="${info.image}"
            alt="${info.title}"
            />
          </div>
    
          <div class="main-card-novita">
          <span>${info.house}</span>
          <span>${info.date}</span>
          <h3>${info.title}</h3>
    
          <div>
            <p>${info.description}</p>
          </div>
        `;
    containerCard.appendChild(divCard);
  });

  createdCards = document.querySelectorAll(".single-card-novita")
  createdCards.forEach((card) => {
    card.classList.add('fadeIn')
  })
}

//Recupero tutte le card per ogni sezione
const cardsNotizieEa = sectionCards[0][0].data;
const cardsEAFC = sectionCards[1][0].data;
const cardsApex = sectionCards[2][0].data;
const cardsSims = sectionCards[3][0].data;
const cardsStarWars = sectionCards[4][0].data;
const cardsF1 = sectionCards[5][0].data;
const cardsBattlefield = sectionCards[6][0].data;
const cardsNFS = sectionCards[7][0].data;


//mi prendo tutte le singole card
let createdCards = Array.from(document.querySelectorAll(".single-card-novita"));



//avvio come prime card, la funzione che genera card

const ul = Array.from(document.querySelectorAll('.menu-scroll-active li'))
const ulLinks = Array.from(document.querySelectorAll('.ultime-novitabtn a'))
ulLinks.forEach((link) => {
  link.addEventListener('click', () => {
    ulLinks.forEach((e) => {
      e.classList.remove('expand-border')
    })
    link.classList.add('expand-border')
  })
})



window.addEventListener("load", () => {
  generateCards(cardsNotizieEa);
  ul.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Rimuove la classe 'active' da tutti i bottoni
      ul.forEach((button) => {
        button.classList.remove('btn-onclick');
      });
      // Aggiunge la classe 'btn-onclick' al bottone cliccato
      btn.classList.add('btn-onclick');
    })})
  ultimeNovitaFilter.forEach((btn) => {
    btn.addEventListener("click", () => {

      // Effettua il controllo per generare le carte appropriate
      containerCard.innerHTML = "";
      if (btn.id === "notizie-ea") {
        generateCards(cardsNotizieEa);
      } else if (btn.id === "ea-sports-news") {
        generateCards(cardsEAFC);
      } else if (btn.id === "apex-legends-news") {
        generateCards(cardsApex);
      } else if (btn.id === "the-sims-news") {
        generateCards(cardsSims);
      } else if (btn.id === "star-wars-news") {
        generateCards(cardsStarWars);
      } else if (btn.id === "f1-news") {
        generateCards(cardsF1);
      } else if (btn.id === "battlefield-news") {
        generateCards(cardsBattlefield);
      } else if (btn.id === "need-for-speed-news") {
        generateCards(cardsNFS);
      }
    });
  });
});









