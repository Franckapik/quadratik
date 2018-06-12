$(document).ready(function() {
  $('.topshop').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.carousel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    /*1*/
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $(".slide1").click(function() {
    window.location.href = "/guide";
  });
  $(".slide2").click(function() {
    window.location.href = "/shop";
  });
  $(".slide3").click(function() {
    window.location.href = "/shop";
  });


});
