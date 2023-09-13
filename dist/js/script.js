// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    accordionHeader.classList.toggle("active");

    const accordionBody = accordionHeader.nextElementSibling;
    const chevron = accordionHeader.querySelector(".chevron");

    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      chevron.classList.add("rotated"); // Rotate the chevron
    } else {
      accordionBody.style.maxHeight = 0;
      chevron.classList.remove("rotated"); // Revert the rotation
    }
  });
});

const prevIcon = '<i class="bi bi-chevron-left owlIcon"/>';
const nextIcon = '<i class="bi bi-chevron-right owlIcon"/>';

$(".owl-carousel").owlCarousel({
  center: true,
  items: 2,
  autoplay: true,
  autoplayTimeout: 5000,
  autoWidth: true,
  loop: true,
  margin: 32,
  nav: true,
  navText: [prevIcon, nextIcon],
  dots: false,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 600 up
    600: {
      items: 2,
    },
    // breakpoint from 1000 up
    1000: {
      items: 2,
    },
    1200: {
      items: 2,
    },
    1400: {
      items: 2,
    },
  },
});
