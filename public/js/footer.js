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
