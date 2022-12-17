// for navbar javascript codes
window.addEventListener("DOMContentLoaded", (event) => {
  var navbarMobile = function () {
    const nCollapsible = document.body.querySelector("#mainNavbar");
    if (!nCollapsible) {
      return;
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

const imageGallery = document.querySelector('#img-filter');
const filterOptions = imageGallery.querySelectorAll('.filter-options button');
const parentinner = document.querySelectorAll('[data-category]');

// const showImages = category => {
//   parentinner.forEach(image => {
//     if (image.getAttribute('data-category') === category || category === 'all') {
//       image.style.display = 'block';
//     } else {
//       image.style.display = 'none';
//     }
//   });
// }

// filterOptions.forEach(button => {
//   button.addEventListener('click', () => {
//     const category = button.getAttribute('data-filter');
//     showImages(category);
//   });
// });

