$(document).ready(function () {
  $(".open-res-mn").click(function () {
    $("#responsive-main-menu").slideToggle(300);
  });

  $(".icon-open-mn").click(function () {
    $(".sub-responsive-main-menu").slideToggle(300);
    $(this).toggleClass("fas fa-chevron-down fas fa-chevron-up");
  });

  var upSlide = function () {
    $("#responsive-main-menu").slideUp();
    $(".sub-responsive-main-menu").slideUp();
  };

  $(window).resize(function () {
    upSlide();
  });

  $(window).scroll(function () {
    upSlide();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 360) {
      $("#back-top").fadeIn();
    } else {
      $("#back-top").fadeOut();
    }
  });

  $("#back-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  $(".owl-carousel-1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoPlay: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-carousel-2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoPlay: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
