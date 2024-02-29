let content = document.querySelector('#content');
let subMenu = document.querySelector('.container-section-games');
let menu = document.querySelector('.games');
let containerInvisile = document.querySelector('.sub-menu');
let lastKnownScrollPosition = 0;

document.addEventListener("scroll", () => {
    if (lastKnownScrollPosition = window.scrollY) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
});

menu.addEventListener('mouseover', () => {
    subMenu.classList.toggle('visible')
})
