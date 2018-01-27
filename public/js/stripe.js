"use strict";

var checkoutHandler = StripeCheckout.configure({
  key: "pk_test_oaiyISu3eJI542wOXmZ0ePd4",
  locale: "fr"
});

var button = document.getElementById("buttonCheckout");
button.addEventListener("click", function(ev) {
  checkoutHandler.open({
    name: "Sample Store",
    description: "Example Purchase",
    token: handleToken
  });
});

function handleToken(token) {
  fetch("/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(token)
    })
    .then(response => {
      if (!response.ok)
        throw response;
      return response.json();
    })
    .then(output => {
      console.log("Purchase succeeded:", output);
    })
    .catch(err => {
      console.log("Purchase failed:", err);
    })

}





/*var handler = StripeCheckout.configure({
  key: 'pk_test_oaiyISu3eJI542wOXmZ0ePd4',
  image: 'images/logo_black.svg',
  locale: 'fr',
  token: function(token) {
    fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(token)
  })
  .then(response => {
    if (!response.ok)
      throw response;
    return response.json();
  })
  .then(output => {
    console.log("Purchase succeeded:", output);
  })
  .catch(err => {
    console.log("Purchase failed:", err);
  })

  }
});

document.getElementById('customButton').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handler.open({
    name: 'Quadratik.fr',
    description: 'Diffuseurs acoustiques',
    currency: 'eur',
    amount: 20000
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
