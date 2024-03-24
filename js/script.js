//Take main:
const mainContent = document.querySelector('main');

//Add on click event to close all menu:
mainContent.addEventListener('click', () => {
  document.body.classList.remove('opened-info-superior')
  document.body.classList.remove('opened-user-superior')
  document.body.classList.remove('overflow-disabled-user')
  document.body.classList.remove('overflow-disabled-info')
})

//Take superior navbar:
const superiorNavbar = document.getElementById('superior-navbar');

//Effect on scroll page:
window.onscroll = function () {
  const pos = window.pageYOffset;
  if (pos > 50) {
    document.body.classList.add('show-navbar')
  } else {
    document.body.classList.remove('show-navbar')
  }
}

//Take ellipsis icon:
const eaplDot = document.querySelector('.eapl-dots');
const containerBlack = document.querySelector('.background-sidebar');
const closeSidebar = document.getElementById('close-sidebar')

//Add class to open sidebar desktop menu
eaplDot.addEventListener('click', () => {
  document.body.classList.add('sidebar-open')
})

closeSidebar.addEventListener('click', () => {
  document.body.classList.remove('sidebar-open')
})

containerBlack.addEventListener('click', () => {
  document.body.classList.remove('sidebar-open')
  document.body.classList.remove('opened-info-superior')
  document.body.classList.remove('opened-user-superior')
  document.body.classList.remove('overflow-disabled-user')
  document.body.classList.remove('overflow-disabled-info')
})

//Take subnavbar superior and icon to click:
/* User element */
const userIcon = document.querySelector('.user');
const closer = document.querySelector('.closer-icon');
const submenuSuperiorProfile = document.querySelector('.menu-subscribe');

/* Info element */
const infoIcon = document.querySelector('.info');
const infoSuperiorMenu = document.querySelector('.info-superior');
const closerInfo = document.querySelector('.info-closing')

//Add class to open menu user on click:
userIcon.addEventListener('click', () => {
  document.body.classList.toggle('opened-user-superior')
  document.body.classList.toggle('overflow-disabled-user')
  document.body.classList.remove('overflow-disabled-info')
  document.body.classList.remove('opened-info-superior')
})

//Add class to open menu info on click:
infoIcon.addEventListener('click', () => {
  document.body.classList.toggle('opened-info-superior')
  document.body.classList.toggle('overflow-disabled-info')
  document.body.classList.remove('overflow-disabled-user')
  document.body.classList.remove('opened-user-superior')
})

//Remove class to click closer element:
closer.addEventListener('click', () => {
  document.body.classList.remove('opened-user-superior')
  document.body.classList.remove('overflow-disabled-user')
})

closerInfo.addEventListener('click', () => {
  document.body.classList.remove('opened-info-superior')
  document.body.classList.remove('overflow-disabled-info')
})

//Takes single section:
const singleSectionOne = document.querySelector('.games');
const singleSectionTwo = document.querySelector('.experience');
const singleSectionThree = document.querySelector('.information');
const singleSectionFour = document.querySelector('.engagements');
const singleSectionFive = document.querySelector('.resources');

//Takes sub-section menu:
const subGamesOne = document.querySelector('.subsection-games');
const subGamesTwo = document.querySelector('.subsection-experience');
const subGamesThree = document.querySelector('.subsection-information');
const subGamesFour = document.querySelector('.subsection-engagements');
const subGamesFive = document.querySelector('.subsection-resources');

//Mouseover effect on single section:
singleSectionOne.addEventListener("mouseover", () => {
  document.body.classList.add('open-games');
});

singleSectionOne.addEventListener('mouseout', () => {
  document.body.classList.remove('open-games');
})

singleSectionTwo.addEventListener("mouseover", () => {
  document.body.classList.add('open-experience');
});

singleSectionTwo.addEventListener("mouseout", () => {
  document.body.classList.remove('open-experience');
});

singleSectionThree.addEventListener("mouseover", () => {
  document.body.classList.add('open-information');
});

singleSectionThree.addEventListener("mouseout", () => {
  document.body.classList.remove('open-information');
});

singleSectionFour.addEventListener("mouseover", () => {
  document.body.classList.add('open-engagements');
});

singleSectionFour.addEventListener("mouseout", () => {
  document.body.classList.remove('open-engagements');
});

singleSectionFive.addEventListener("mouseover", () => {
  document.body.classList.add('open-resources');
});

singleSectionFive.addEventListener("mouseout", () => {
  document.body.classList.remove('open-resources');
});


//Mouseover effect on single sub-section:
subGamesOne.addEventListener("mouseout", () => {
  document.body.classList.remove('open-games');
});

subGamesTwo.addEventListener('mouseout', () => {
  document.body.classList.remove('open-experience');
})
subGamesThree.addEventListener('mouseout', () => {
  document.body.classList.remove('open-information');
})
subGamesFour.addEventListener('mouseout', () => {
  document.body.classList.remove('open-engagements');
})
subGamesFive.addEventListener('mouseout', () => {
  document.body.classList.remove('open-resources');
})

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