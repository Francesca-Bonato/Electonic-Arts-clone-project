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

/*  -----------------------------------------------------------------------------------------------
  MENU RESPONSIVE
--------------------------------------------------------------------------------------------------- */
//Take a single menu and element to close sub-menu:
const resourceResponsive = document.querySelector('.resources-responsive');
const engagementResponsive = document.querySelector('.engagements-responsive');
const informationResponsive = document.querySelector('.information-responsive');
const experienceResponsive = document.querySelector('.experience-responsive');
const gamesResponsive = document.querySelector('.games-responsive .container-section-menu-responsive');
const exploreGames = document.querySelector('.explore_games_list-responsive');
const platformList = document.querySelector('.platform-responsive');
const hamburgherIcon = document.querySelector('.icon-hamburgher')
const backgroundResponsive = document.querySelector('.background-responsive-menu');
const closerElementResponsive = document.querySelector('.header-responsive-menu span');

//Open menu responsive on click:
hamburgherIcon.addEventListener('click', () => {
  document.body.classList.toggle('open')
})
//Add event to open sub-menu on click:
resourceResponsive.addEventListener('click', () => {
  document.body.classList.toggle('opened-responsive-resource');
})

engagementResponsive.addEventListener('click', () => {
  document.body.classList.toggle('opened-responsive-engagement');
})

informationResponsive.addEventListener('click', () => {
  document.body.classList.toggle('opened-responsive-information');
})

experienceResponsive.addEventListener('click', () => {
  document.body.classList.toggle('opened-responsive-experience');
})

/*  -----------------------------------------------------------------------------------------------
  GAMES SUBSECTION EVENT
--------------------------------------------------------------------------------------------------- */
gamesResponsive.addEventListener('click', () => {
  document.body.classList.toggle('opened-responsive-games');
  document.body.classList.remove('open-list-games')
  document.body.classList.remove('open-list-platform')
})

exploreGames.addEventListener('click', () => {
  document.body.classList.toggle('open-list-games');
})

platformList.addEventListener('click', () => {
  document.body.classList.toggle('open-list-platform');
})

//Close all menu on click closer or background container:
backgroundResponsive.addEventListener('click', () => {
  document.body.classList.remove('open')
  document.body.classList.remove('overflow-disabled-info')
  document.body.classList.remove('opened-info-superior')
  document.body.classList.remove('overflow-disabled-user')
  document.body.classList.remove('opened-user-superior')
})

closerElementResponsive.addEventListener('click', () => {
  document.body.classList.remove('open')
})
