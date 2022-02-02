// owl carousel jquery
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dotsEach: false,
    dotsData: false,
    dotsSpeed: false,
    dotsContainer: false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1500,
  });
});
