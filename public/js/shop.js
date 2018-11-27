

$('.nbArticles').click(function(){
  $('.showcart').toggle();
});

$('.order').click(function(){
  $('.showcart').toggle();
  $('.shop').toggle();
  $('.cart_large').toggle();
});

$('.cart_button').submit(function(e) {
  e.preventDefault();
  cart.cartForm();

});

$('#codepromo').submit(function(e) {
  e.preventDefault();
  cart.promoForm();

});



var cart = {
  items: [],
  totalProduits: '',
  totalFdp: '',
  amount: '',
  reduction: '',
  cartForm: function() {
    fetch('dbcreate/cartToDB', {
        credentials: 'include',
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          $('.errors_txt').html(res.error);
        } else {
          window.location.replace("http://localhost:3000/commande");
        }
      });

  },
  promoForm: function() {
    var promo = $('input[name=code]').val();
    fetch('cart/promoCart', {
        credentials: 'include',
        method: 'post',
        body: JSON.stringify({
          promo: promo,

        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => res.json())
      .then(res => {

        if (res.error) {
          $('.errors_txt').html(res.error);

        } else {

          vm.updateCart();

        }
      });


  }
}
