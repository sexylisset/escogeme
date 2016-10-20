var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { rootPath:'', title: 'EscogeME'});
});

router.get('/:collection', function(req, res, next) {
  res.render('coleccion', {
    rootPath:'',
    title: 'EscogeME '+req.params.collection.toUpperCase(),
    coleccion:req.params.collection
  });
});

module.exports = router;
