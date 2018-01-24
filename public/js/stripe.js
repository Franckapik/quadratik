
var handler = StripeCheckout.configure({
  key: 'pk_test_oaiyISu3eJI542wOXmZ0ePd4',
  image: 'images/logo_black.svg',
  locale: 'fr',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
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
