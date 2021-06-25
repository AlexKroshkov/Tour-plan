$(document).ready(function () {
  function u() {
    var n = $(".modal__overlay"),
      t = $(".modal__dialog");
    n.addClass("modal__overlay--visible");
    t.addClass("modal__dialog--visible");
  }
  function r(n) {
    n.preventDefault();
    var t = $(".modal__overlay"),
      i = $(".modal__dialog");
    t.removeClass("modal__overlay--visible");
    i.removeClass("modal__dialog--visible");
  }
  var n, t, i;
  const f = new Swiper(".hotel-slider", {
    loop: !0,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
    keyboard: { enabled: !0, onlyInViewport: !0 },
  });
  $(".newslatter").parallax({
    imageSrc: "images/newslatter-bg.jpg",
    speed: "0.5",
  });
  const e = new Swiper(".reviews-slider", {
    loop: !0,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });
  n = document.querySelector(".menu-button");
  n.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });
  n = document.querySelector(".menu-button");
  n.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom__visible");
  });
  t = $("[data-toggle=modal]");
  i = $(".modal__close");
  t.on("click", u);
  i.on("click", r);
  document.addEventListener("keydown", function (n) {
    n.key == "Escape" && r(n);
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters",
        },
        email: {
          required: "Enter mail for communication",
          email: "Format must be name@domain.com",
        },
        phone: {
          required: "Please specify your phone number",
          minlength: "Please enter at least 10 characters",
        },
      },
    });
  });
  $(document).ready(function () {
    $(".phone").mask("+7 (000) 000-00-00");
  });

  AOS.init({
    // Global settings:
    disable: function() {
      if ( $(window).width() < 767) {
          return true;
      } else {
          return false;
      }
  },
  });
});


