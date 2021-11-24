$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: "top",
        tripger: 'hover'
    });

    $("#home-slide").carousel({
        interval: 3000, 
        ride: "carousel",
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(".navbar-responsive").click(function(){
        $("#responsive-menu").slideToggle();
    });

    $(".arrow-down").click(function(){
        $(".sub-responsive-menu").slideToggle();
        $(this).toggleClass("fas fa-chevron-down fas fa-chevron-up");
    });

    var upSlide = function(){
        $("#responsive-menu").slideUp();
        $(".sub-responsive-menu").slideUp();
    }

    $(window).resize(function(){
        upSlide();
    });

    $(window).scroll(function(){
        upSlide();
    });


}); 