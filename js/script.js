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

const notezieEaNews = document.querySelector(".notizie-ea");
const eaSportsNews = document.querySelector(".ea-sports");
const apexLegendsNews = document.querySelector(".apex-legends");
const theSimsNews = document.querySelector(".the-sims");
const f1News = document.querySelector(".f1");
const battlefieldNews = document.querySelector(".battlefield");
const needForSpeedNews = document.querySelector(".need-for-speed");

//Singola card
const singleCard = document.querySelector(".single-card-novita");

//Array contenente tutte le card
const sectionCards = [
  {
    section: "notizie",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
  {
    section: "eaSports",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
  {
    section: "apexLegends",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
  {
    section: "theSims",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
  {
    section: "f1",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
  {
    section: "battlefield",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
  {
    section: "needForSpeed",
    data: [
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
      {
        image: "/assets/",
        house: "",
        date: "",
        title: "",
        description: "",
      },
    ],
  },
];

function createCards() {
  const headerCard = document.createElement("div");
  const cardImg = document.createElement("img");
  const mainCard = document.createElement("div");
  const spanHouse = document.createElement("span");
  const spanDate = document.createElement("span");
  const title = document.createElement("h3");
  const divDescription = document.createElement("div");
  const description = document.createElement("p");

  headerCard.setAttribute("class", "header-card-novita");
  cardImg.setAttribute("src");
  mainCard.setAttribute("class", "main-card-novita");

  headerCard.appendChild(cardImg);
  mainCard.appendChild(spanHouse);
  mainCard.appendChild(spanDate);
  mainCard.appendChild(title);
  mainCard.appendChild(divDescription);
  divDescription.appendChild(description);
}
