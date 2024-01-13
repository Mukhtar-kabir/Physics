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
