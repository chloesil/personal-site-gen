$(document).ready(function () {
  $('.carousel').slick({
    centerMode: false,
    centerPadding: '0px',
    speed: 600,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
        }
      }
    ]
  });
});