$(function () {
  $(".partners__slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
});

const linkLogin = document.querySelector(".header__link--login");
const mobileMenuBtn = document.querySelector(".header__btn");

linkLogin.addEventListener("click", function () {
  document
    .querySelector(".header__sublist")
    .classList.toggle("header__sublist--disabled");
});

mobileMenuBtn.addEventListener("click", function () {
  document
    .querySelector(".mobile-menu")
    .classList.toggle("mobile-menu--active");
});
