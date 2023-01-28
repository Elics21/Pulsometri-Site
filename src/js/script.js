$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icon/right.svg"></button>',
      responsive: [
         {
            breakpoint: 1200,
            settings: {

            }
         },
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               dots: true,
            }
         },
         {
            breakpoint: 768,
            settings: {

            }
         },
         {
            breakpoint: 576,
            settings: {

            }
         }

      ]
   });
});