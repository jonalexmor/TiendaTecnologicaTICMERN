var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Prueba Tienda Tecnologica TIC' });
res.send("Prueba Tienda Tecnologica TIC sin motor de vista")
});

module.exports = router;
