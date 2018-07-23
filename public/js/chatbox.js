
$(document).ready(function() {

var d = new Date();
var options = { weekday: 'long', month: 'long', day: 'numeric' };
document.getElementById("chat_date").innerHTML ="------" +  d.toLocaleDateString('fr-FR', options) + "------";


  //generer un couleur au hasard
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#fff';
    for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  var couleur = getRandomColor();

  // Ajoute un message dans la page
  function insereMessage(couleur, message) {
    $('#zone_chat').prepend('<p class="msg" style="background-color:' + couleur + '";>' + message + '</p>');
  }

  // Connexion à socket.io
  var socket = io.connect('/');

  //Envoi de la couleur générée
  socket.emit('nouveau_client', couleur);

  // Quand on reçoit un message, on l'insère dans la page
  socket.on('message', function(data) {
    insereMessage(data.couleur, data.message)
  })

  // Quand un nouveau client se connecte, on affiche l'information
  socket.on('nouveau_client', function(couleur) {
    $('#zone_chat').prepend('<p><em> Une nouvelle personne a rejoint la discussion !</em></p>');
  })

  // Lorsqu'on envoie le formulaire, on transmet le message et on l'affiche sur la page
  $('#formulaire_chat').submit(function() {
    var message = $('#message').val();
    socket.emit('message', message); // Transmet le message aux autres
    insereMessage(couleur, message); // Affiche le message aussi sur notre page
    $('#message').val('').focus(); // Vide la zone de Chat et remet le focus dessus
    return false; // Permet de bloquer l'envoi "classique" du formulaire
  });

  $(".chatbox_closed").click(function() {
    $('.chatbox_opened').css('visibility', 'visible');
    $('.chatbox_closed').css('visibility', 'hidden');
  });

  $(".chat_close_icon").click(function() {
    $('.chatbox_opened').css('visibility', 'hidden');
    $('.chatbox_closed').css('visibility', 'visible');
  });

  });
