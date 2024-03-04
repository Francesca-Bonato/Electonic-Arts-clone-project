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
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollMenu.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});

