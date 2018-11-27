var commande = {
  validEmail: function(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },
  validPhone: function(phone) {
    var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    return regex.test(phone);
  },
  validPostal: function(postal) {
    var regex = /^[0-9]{5,5}$/;
    return regex.test(postal);
  },
  moveBar(value) {

    var elem = document.getElementById("myBar");
    var width = value;

    elem.style.width = width + '%';

  }
}
/*ENREGISTREMENT UTILISATEUR*/

commande.moveBar(25);

$('#user_form').submit(function(e) {
  e.preventDefault();
  user_form.submitForm();

})

var user_form = {
  submitForm: function() {
    var nom = $('input[name=nom]').val();
    var prenom = $('input[name=prenom]').val();
    var nom = $('input[name=nom]').val();
    var adresse = $('input[name=adresse]').val();
    var ville = $('input[name=ville]').val();
    var codepostal = $('input[name=codepostal]').val();
    var telephone = $('input[name=telephone]').val();
    var mail = $('input[name=mail]').val();
    var utilisation = $('input[type=radio][name=utilisation]').val();

    if (nom === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre nom");

    } else if (prenom === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre prénom");

    } else if (adresse === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre adresse");

    } else if (ville === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre ville");

    } else if (codepostal === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre code postal");


    } else if (!commande.validPostal(codepostal)) {
      $('.error_box').show();
      $('.errors_txt').html("Votre code postal entré est non valide!");

    } else if (telephone === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre numéro de téléphone");

    } else if (!commande.validPhone(telephone)) {
      $('.error_box').show();
      $('.errors_txt').html("Votre numéro de téléphone entré est non valide!");

    } else if (mail === '') {
      $('.error_box').show();
      $('.errors_txt').html("Veuillez completer votre mail");


    } else if (!commande.validEmail(mail)) {
      $('.error_box').show();
      $('.errors_txt').html("Votre adresse mail entrée est non valide!");
    } else {
      fetch('dbcreate/user', {
          credentials: 'include',
          method: 'post',
          body: JSON.stringify({
            form_nom: nom,
            form_prenom: prenom,
            form_adresse: adresse,
            form_ville: ville,
            form_codepostal: codepostal,
            form_telephone: telephone,
            form_mail: mail,
            form_utilisation: utilisation
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            $('.error_box').show();
            $('.errors_txt').html(res.error);
          } else {


            $('.enregistrement').hide();
            $('.livraison').show();
            $('.error_box').hide();
            commande.moveBar(50);
          }
        });
    }
  }
};


/*LIVRAISON*/
$('input[type=radio][name=typeLivraison]').change(function() {
  if (this.value == 'domicile') {
    $('.form_livraison_choosed').show();
    $('#domicile').show();
    $('#autreAdresse').hide();
    $('#relais').hide();

  } else if (this.value == 'autreAdresse') {
    $('.form_livraison_choosed').show();
    $('#domicile').hide();
    $('#autreAdresse').show();
    $('#relais').hide();
  } else if (this.value == 'relais') {
    $('.form_livraison_choosed').show();
    $('#domicile').hide();
    $('#autreAdresse').hide();
    $('#relais').show();
  }
});

$('#deliveryform').submit(function(e) {
  e.preventDefault();
  delivery_form.submitForm();
})

var delivery_form = {

  submitForm: function() {
    var modeLivraison = $('input[type=radio][name=typeLivraison]:checked').val();
    var livr_nom = $('input[name=livraison_nom]').val();
    var livr_adresse = $('input[name=livraison_adresse]').val();
    var livr_ville = $('input[name=livraison_ville]').val();
    var livr_postal = $('input[name=livraison_codepostal]').val();

    if (modeLivraison === 'autreAdresse') {
      if (livr_nom === '') {
        $('.error_box').show();
        $('.errors_txt').html("Veuillez completer votre nom");
        $('input[name=livraison_nom]').css("background-color", "red");

      } else if (livr_adresse === '') {
        $('.error_box').show();
        $('.errors_txt').html("Veuillez completer votre adresse");
        $('input[name=livraison_adresse]').css("background-color", "red");

      } else if (livr_ville === '') {
        $('.error_box').show();
        $('.errors_txt').html("Veuillez completer votre ville");
        $('input[name=livraison_ville]').css("background-color", "red");

      } else if (livr_postal === '') {
        $('.error_box').show();
        $('.errors_txt').html("Veuillez completer votre code postal");
        $('input[name=livraison_codepostal]').css("background-color", "red");

      } else if (!this.validPostal(livr_postal)) {
        $('.error_box').show();
        $('.errors_txt').html("Votre code postal entré est non valide!");
        $('input[name=livraison_codepostal]').css("background-color", "red");

      } else {
        fetch('dbcreate/livraison', {
            credentials: 'include',
            method: 'post',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
              livr_choice: modeLivraison,
              livr_nom: livr_nom,
              livr_adresse: livr_adresse,
              livr_ville: livr_ville,
              livr_postal: livr_postal
            })
          })
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              $('.errors_txt').html(res.error);
            } else {
              $('.livraison').hide();
              $('.paiement').show();
              $('.error_box').hide();
                commande.moveBar(50);

            }
          });
      }
    }
    if (modeLivraison === 'domicile') {

      fetch('dbcreate/livraison', {
          credentials: 'include',
          method: 'post',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
            livr_choice: modeLivraison

          })
        })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            $('.errors_txt').html(res.error);
          } else {

            $('.livraison').hide();
            $('.paiement').show();
            $('.error_box').hide();
              commande.moveBar(50);

          }
        });
    }

  }
};
