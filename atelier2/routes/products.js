var express = require('express');
var router = express.Router();
var products = require('../products.json');

/* GET users listing. */
router.get('/listproducts', function(req, res, next) {
  res.json(products)
});

router.get('/listproducts/:id', function(req, res, next) {
  var id = req.params.id;
  res.json(products[id]);
});

router.get('/listproducts/:id/:qt', function(req, res, next) {
  var id = req.params.id;
  var qt = req.params.qt;
  res.json({
    "id": id,
    "qt": qt,
    "unit-price": products[id].price,
    "total_price": products[id].price * qt,
  });
});

router.get('/listproducts/instock/:qt', function(req, res, next) {
  var id = req.params.id;
  res.json(products[id]);
});

module.exports = router;
