/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        slidesToShow: 1,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/pulsometer/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/pulsometer/right.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
      });
}); */

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  speed: 200,
  controls: false,
  responsive: {
    991: {
      items: 1,
    }
  }
});

document.querySelector('.prev').addEventListener('click', function() {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
  slider.goTo('next');
});