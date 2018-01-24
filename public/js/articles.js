//ARTICLES

const shop = [{
    name: "Woodik-7",
    price: 10.02,
    quantity: 0,
    img: "/images/modeles/woodik-7.jpg"
  },
  {
    name: "Wenge-7",
    price: 9.98,
    quantity: 0,
    img: "/images/modeles/wenge-7.jpg"
  },
  {
    name: "Teck-7",
    price: 15.98,
    quantity: 0,
    img: "/images/modeles/teck-7.jpg"
  },
  {
    name: "Chêne-7",
    price: 4.84,
    quantity: 0,
    img: "/images/modeles/chene-7.jpg"
  }
];

//VUE.JS

const vm = new Vue({
  el: "#app",
  data: {
    items: [],
    shop: shop,
    showCart: false,
    verified: false
  },
  computed: {
    total() {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});
