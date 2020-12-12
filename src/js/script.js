$(document).ready(function(){
    $('.courusel__slider').slick({
        speed: 1500,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/prevArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icons/nextArrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]

        

    });
  });