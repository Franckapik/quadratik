//ARTICLES
//objets litteraux dans un tableau
const shop = [[{
    name: "Klassik-6",
    price: 50,
    quantity: 0,
    img: "/images/modeles/klassik/klassik-6.jpg"
  }
],

  [{
    name: "Woodik-7",
    price: 55,
    quantity: 0,
    img: "/images/modeles/organik/woodik-7.jpg"
  },
  {
      name: "Wenge-7",
      price: 66,
      quantity: 0,
      img: "/images/modeles/organik/wenge-7.jpg"
    },

    {
      name: "Teck-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/organik/teck-7.jpg"
    },
    {
      name: "Chêne-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/organik/chene-7.jpg"
    }
  ],

  [{
      name: "Anemone-7",
      price: 85,
      quantity: 0,
      img: "/images/modeles/botanik/anemone-7.jpg"
    },
    {
      name: "Aubergine-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/botanik/aubergine-7.jpg"
    },
    {
      name: "Lichen-7",
      price: 85,
      quantity: 0,
      img: "/images/modeles/botanik/lichen-7.jpg"
    },
    {
      name: "Liseron Bleu-7",
      price: 85,
      quantity: 0,
      img: "/images/modeles/botanik/liseron_bleu-7.jpg"
    }
  ],

  [{
      name: "Gruk-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/minimalik/gruk-7.jpg"
    },
    {
      name: "Klio-7",
      price: 85,
      quantity: 0,
      img: "/images/modeles/minimalik/klio-7.jpg"
    },
    {
      name: "Orelo-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/minimalik/orelo-7.jpg"
    },
    {
      name: "Romal-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/minimalik/romal-7.jpg"
    }
  ],

  [{
      name: "Invader-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/gamik/invader-7.jpg"
    },
    {
      name: "Mario-7",
      price: 85,
      quantity: 0,
      img: "/images/modeles/gamik/mario-7.jpg"
    },
    {
      name: "Spaceship-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/gamik/spaceship-7.jpg"
    },
    {
      name: "Snake-7",
      price: 78,
      quantity: 0,
      img: "/images/modeles/gamik/snake-7.jpg"
    }
  ], [{
      name: "K7 - Pack 6 diffuseurs",
      price: 420,
      quantity: 0,
      img: "/images/modeles/giantik/tape-dif6.jpg"
    },
    {
      name: "Headphone - Pack 6 diffuseurs",
      price: 420,
      quantity: 0,
      img: "/images/modeles/giantik/headphone-dif6.jpg"
    }
  ]

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
