var express = require('express');
var router = express.Router();


//renvoie le contenu du panier
router.get('/', function(req, res, next) {

res.json({
  item : req.session.item,
  qty : req.session.qty
})

});

//ajoute un article au panier
router.post('/', function(req, res, next) {
console.log(req.body.qty);
req.session.qty = req.body.qty;
req.session.item = req.body.item;
 res.json('ok')
});

//remplace Tout le contenu du panier
router.put('/', function(req, res, next) {

});

//supprime un article au panier
router.delete('/:id', function(req, res, next) {

});
//supprime TOUT le panier
router.delete('/', function(req, res, next) {

});


//commande le contenu du panier
router.post('/order', function(req, res, next) {

});























module.exports = router;
