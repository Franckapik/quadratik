$(document).ready(function() {

  $('.mail').click(function() {
    $('#mail-pop').toggle();
  });

  $('.form').click(function() {
    $('#form-pop').toggle();
  });

  $('.social').click(function() {
    $('#social-pop').toggle();
  });

  $('.newsletter').click(function() {
    $('#newsletter-pop').toggle();
  });

  $("#chat").click(function() {
    $('.chatbox_opened').css('visibility', 'visible');
    $('.chatbox_closed').css('visibility', 'hidden');
  });

  $(".mail").mouseenter(function() {
    $('.mail .st3').css('fill', 'var(--accentcolor)');
  });
  $(".mail").mouseleave(function() {
    $('.mail .st3').css('fill', 'var(--colorbg2)');
  });

  $("#chat").mouseenter(function() {
    $('#chat .st3').css('fill', 'var(--accentcolor)');
  });
  $("#chat").mouseleave(function() {
    $('#chat .st3').css('fill', 'var(--colorbg2)');
  });

  $(".social").mouseenter(function() {
    $('.social .st3').css('fill', 'var(--accentcolor)');
  });
  $(".social").mouseleave(function() {
    $('.social .st3').css('fill', 'var(--colorbg2)');
  });

  $(".form").mouseenter(function() {
    $('.form .st3').css('fill', 'var(--accentcolor)');
  });
  $(".form").mouseleave(function() {
    $('.form .st3').css('fill', 'var(--colorbg2)');
  });

  $(".newsletter").mouseenter(function() {
    $('.newsletter .st3').css('fill', 'var(--accentcolor)');
  });
  $(".newsletter").mouseleave(function() {
    $('.newsletter .st3').css('fill', 'var(--colorbg2)');
  });


  $(".ga").mouseover(function() {
    $('#valeur_msg').text("Le son est au centre de nos activités. Nous rencontrons chaque jour de nouvelles personnes passionées proposant des configurations nouvelles. Nos expériences augmentent et se partagent sur Quadratik.fr!");
  });
  $(".gb").mouseover(function() {
    $('#valeur_msg').text("Nous sommes entièrement à votre écoute concernant les caractéristiques de votre pièce à traiter afin de vous conseiller au mieux sur la cohérence de votre projet.");
  });
  $(".gc").mouseover(function() {
    $('#valeur_msg').text("Le travail est réalisé dans un cadre permettant le respect de l'artisan et de ses créations. Un contrôle de chaque produit est garanti avant expedition");
  });
  $(".gd").mouseover(function() {
    $('#valeur_msg').text(
      "Nos produits sont conçus selon les travaux de Manfred Schroeder (1984) et ses lois sur l'acoustique et ses corrections. Toutes les dimensions proposées respectent ces recherches en informant sur la plage de fréquence efficace."
    );
  });
  $(".ge").mouseover(function() {
    $('#valeur_msg').text("Nous garantissons un produit fabriqué en france et nous promettons de réduire au maximum les transports liés à sa fabrication et expédition afin de reduire l'impact écologique de nos produits.");
  });
  $(".gf").mouseover(function() {
    $('#valeur_msg').text("Les transactions en ligne sont sécurisées. Toutes les informations sont cryptées et tenues secretes. Quadratik.fr s'engage dans la protection de vos données.");
  });
  $(".gg").mouseover(function() {
    $('#valeur_msg').text("Le site Quadratik.fr existe grâce à de nombreux échanges entre des personnes passionées via des forums et réseaux sociaux. Nous souhaitons garder cette dynamique! [Nous rejoindre sur Facebook/Twitter]");
  });
  $(".gh").mouseover(function() {
    $('#valeur_msg').text("Nous nous adaptons à vos envies avec des créations de produits sur mesures afin d'être au plus proche de votre projet. Contactez-nous par mail pour échanger sur vos envies.");
  });
  $(".gi").mouseover(function() {
    $('#valeur_msg').text("Nous essayons au maximum de favoriser une économie circulaire en utilisant des emballages de 2nde main et/ou issus du recyclage afin de minimiser l'impact environnemental de nos produits.");
  });






});
