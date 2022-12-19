// for navbar javascript codes
window.addEventListener("DOMContentLoaded", (event) => {
  const navbarMobile = function () {
    const nCollapsible = document.body.querySelector("#mainNavbar");
    if (!nCollapsible) {
      return;
    }
    const logoImg = document.querySelector("#test");
    if (window.scrollY > 66) {
      nCollapsible.classList.add("navbar-shrink");
      logoImg.src = "images/logo.svg";
    } else {
      nCollapsible.classList.remove("navbar-shrink");
      logoImg.src = "images/white-logo.svg";
    }
    if (window.scrollY === 0) {
      nCollapsible.classList.remove("navbar-mobile");
    } else {
      nCollapsible.classList.add("navbar-mobile");
    }
  };
  navbarMobile();
  document.addEventListener("scroll", navbarMobile);
  const myNavbar = document.body.querySelector("#mainNavbar");
  if (myNavbar) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNavbar",
      offset: 74,
    });
  }
});
var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
  BtnCanvas[i].addEventListener("click", function () {
    document.querySelector('[data-bs-dismiss="offcanvas"]').click();
  });
}

const returnButton = document.querySelector('.return');

window.addEventListener('scroll', function() {
  var y = window.scrollY;
  if (y > 0) {
    returnButton.style.display = 'block';
  } else {
    returnButton.style.display = 'none';
  }
});