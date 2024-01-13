$(document).ready(function () {
  "use strict";
  // $(".owl-carousel").owlCarousel();

  $("#testimonials").owlCarousel({
    items: 3,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      415: {
        items: 1,
      },
      600: {
        items: 1,
      },
      // 1200: {
      //   items: 5,
      // },
    },
  });
});

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  myFunction();
};