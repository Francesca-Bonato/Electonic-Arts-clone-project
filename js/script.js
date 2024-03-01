let btn = document.querySelector('#menu-novita-scroll-right');
let btn2 = document.querySelector('#menu-novita-scroll-left');

btn.addEventListener("click", function() {
  document.querySelector(".menu-scroll-active").scrollLeft += 200;
  btn2.classList.add('active-arrow')
});

btn2.addEventListener("click", function() {
  document.querySelector(".menu-scroll-active").scrollLeft -= 200;
});

// function leftScroll() {
//     const buttonLeft = document.querySelector(".menu-cards-novita");
//     buttonLeft.scrollBy(200, 0);
//   }

//   function rightScroll() {
//     const buttonRight = document.querySelector(".menu-cards-novita");
//     buttonRight.scrollBy(-200, 0);
//   }