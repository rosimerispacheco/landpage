const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () =>{
    primaryNav.classList.toggle("opened");
    primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500
  });