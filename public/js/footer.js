$(document).ready(function() {

  $('.hamburger').click(function() {
    $('.menu').toggle();
  });
  $('.mentions').click(function() {
    $('#mentions-pop').toggle();
  });

  $('.cgv').click(function() {
    $('#cgv-pop').toggle();
  });


  $("#chat").click(function() {
    $('.chatbox_opened').css('visibility', 'visible');
    $('.chatbox_closed').css('visibility', 'hidden');
  });



});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 300;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $("header").addClass("active");
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $("header").removeClass("active");
        }
    }

    lastScrollTop = st;
}
