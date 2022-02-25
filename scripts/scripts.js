// shrink header on scroll
const header = document.getElementById("header");
const headerTitle = document.querySelector("h1");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    header.style.height = "5rem";

    headerTitle.style.display = "none";
  } else {
    header.style.height = "15rem";

    headerTitle.style.display = "initial";
  }
}

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
