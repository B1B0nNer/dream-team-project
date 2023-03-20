const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 28,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
