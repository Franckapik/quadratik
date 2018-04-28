var app = new Vue({
    el: '#app',
    data : {

    },
    methods : {
      getAPI() {fetch('/cart', {
          credentials: 'include',
          method: 'get',
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(
          function(response) {
          console.log(response);

          });
    }


    }

})
