$(document).ready(function() {
  $('#social, .social').click(function() {
    var win = window.open('https://www.facebook.com/Quadratikfr-528507077617370/', '_blank');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert('Votre adblock empeche l ouverture de Facebook');
    }
  });
  $("#chat").click(function() {
    $('.chatbox_opened').css('visibility', 'visible');
    $('.chatbox_closed').css('visibility', 'hidden');
  });
});
