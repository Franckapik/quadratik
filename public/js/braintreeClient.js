var button = document.querySelector('#submit-button');

console.log(button);

braintree.dropin.create({
  // Insert your tokenization key here
  authorization: 'sandbox_q99f44db_2m893jbqqh5xs28s',
  container: '#dropin-container',
  locale:'fr_FR',
  options: {
    verifyCard: true
  },
  card: {
  cardholderName: {
    required: true
  },
overrides: {
    fields: {
      number: {
        placeholder: '1111 1111 1111 1111' // Update the number field placeholder
      },
      postalCode: {
        minlength: 5 // Set the minimum length of the postal code field
      },
      cvv: true // Remove the CVV field from your form
    },
    styles: {
      input: {
        'font-size': '18px' // Change the font size for all inputs
      },
      ':focus': {
        color: 'red' // Change the focus color to red for all inputs
      }
    }
  }
},
    paypal: {
  flow: 'checkout',
  amount: '10.00',
  currency: 'EUR'
},
paypalCredit: {
flow: 'checkout',
amount: '10.00',
currency: 'EUR'
}
}, function (createErr, instance) {
  button.addEventListener('click', function () {
    instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
      // When the user clicks on the 'Submit payment' button this code will send the
      // encrypted payment information in a variable called a payment method nonce
      $.ajax({
        type: 'POST',
        url: '/checkout',
        data: {'paymentMethodNonce': payload.nonce}
      }).done(function(response) {
        console.log(response);
        console.log(response.reference);
        var ref = parseInt(response.reference, 10);
        console.log(ref);
        // Tear down the Drop-in UI
        instance.teardown(function (teardownErr) {
          if (teardownErr) {
            console.error('Impossible d effacer l interface de paiement!');
          } else {
            console.info('L interface a bien été effacée!');
            // Remove the 'Submit payment' button
            $('#submit-button').remove();
          }
        });

        if (response.result.success) {
          var transactionOK = JSON.stringify(response.result.success);
          $('#checkout-message').html('<h1>Commande n° ' + ref +' Terminée !</h1><p>Nous vous remercions pour la confiance que vous nous accordez ! <p> Retour à l&#39;Accueil</p>');
          var elem = document.getElementById("myBar");
          var width = 100;

          elem.style.width = width + '%';

          $.ajax({
            type: 'POST',
            url: '/checkout/success',
            data: {'transactionOK':  transactionOK}
          })
        } else {
          console.log(response);
          $('#checkout-message').html('<h1>Error</h1><p>Une erreur est survenue pendant la commande. Nous somme alertés pour pouvoir remédier à cette situation.</p>');
        }
      });
    });
  });
});
