var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { rootPath:'', title: 'EscogeME', coleccion:'culitos' });
});

module.exports = router;
