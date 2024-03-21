// Animazione scroll navbar
let content = document.querySelector(".content");
let subMenu = document.querySelector(".container-section-games");
let menu = document.querySelector(".games");

document.addEventListener("scroll", () => {
  if ((lastKnownScrollPosition = window.scrollY)) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});

// Animazione nav a comparsa laterale
let close_lateral_menu = document.querySelector(".close_icon");
let lateral_nav = document.querySelector(".container-nav-laterale");
let openLatealMenu = document.querySelector(".open_icon");
let lateralNav = document.querySelector(".nav-laterale");

openLatealMenu.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.add("open");
});

close_lateral_menu.addEventListener("click", () => {
  document.body.classList.remove("open");
});

lateralNav.addEventListener("click", () => {
  document.body.classList.remove("open");
});

// Animazione sub menu nav uno
const close_user_profile = document.querySelector(".close_user_profile");
const sub_container_user_profile = document.querySelector(
  ".sub_container_user_profile"
);
const sub_container_help_profile = document.querySelector(".second");
const open_user_profile = document.querySelector(".user_profile");
const open_help = document.querySelector(".help");
const close_help = document.querySelector(".close_help");

open_user_profile.addEventListener("click", (e) => {
  e.preventDefault();
  sub_container_user_profile.classList.toggle("open_user_profile");
  sub_container_help_profile.classList.remove("open_user_profile");
});

open_help.addEventListener("click", (e) => {
  e.preventDefault();
  sub_container_help_profile.classList.toggle("open_user_profile");
  sub_container_user_profile.classList.remove("open_user_profile");
});

close_user_profile.addEventListener("click", () => {
  sub_container_user_profile.classList.remove("open_user_profile");
});

close_help.addEventListener("click", () => {
  sub_container_help_profile.classList.remove("open_user_profile");
});

// Animazione menu laterale responsive
const another_experience_responsive = document.querySelector(
  ".another_experience_responsive"
);
const information_responsive = document.querySelector(
  ".information_responsive"
);
const engagements_responsive = document.querySelector(
  ".engagements_responsive"
);
const resources_responsive = document.querySelector(".resources_responsive");
const subMenuGames = document.querySelector(".games_responsive");
const subGames = document.querySelector(".explore_games");
const subPlatform = document.querySelector(".review_platform");
const close_responsive = document.querySelector(".close_responsive");
const icon_hamburger_menu = document.querySelector(".icon_hamburger_menu");
const container_lateral_menu_responsive = document.querySelector(
  ".container-lateral-responsive-menu"
);

another_experience_responsive.addEventListener("click", () => {
  document.body.classList.toggle("opened");
});

information_responsive.addEventListener("click", () => {
  document.body.classList.toggle("opened_information");
});

engagements_responsive.addEventListener("click", () => {
  document.body.classList.toggle("opened_engagements");
});

resources_responsive.addEventListener("click", () => {
  document.body.classList.toggle("opened_resources");
});

subMenuGames.addEventListener("click", () => {
  document.body.classList.toggle("opened_games");
  document.body.classList.remove("opened_sub_platform");
  document.body.classList.remove("opened_sub_games");
});

subGames.addEventListener("click", () => {
  document.body.classList.toggle("opened_sub_games");
});

subPlatform.addEventListener("click", () => {
  document.body.classList.toggle("opened_sub_platform");
});

icon_hamburger_menu.addEventListener("click", () => {
  document.body.classList.add("open_lateral_menu_responsive");
});

close_responsive.addEventListener("click", () => {
  document.body.classList.remove("open_lateral_menu_responsive");
});

container_lateral_menu_responsive.addEventListener("click", () => {
  document.body.classList.remove("open_lateral_menu_responsive");
});

// Animazione 