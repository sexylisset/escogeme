var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:col/:sel', function(req, res, next) {
  console.log(req.params.col);
  res.render('wind', {
    rootPath:'../../',
    title: 'EscogeME',
    sel: req.params.sel,
    coleccion:req.params.col
  });
});

router.get('/showimage/:colec/:opt/:tipo/:id', function(req, res, next) {
  res.render('showimage', {
    rootPath:'../../../../../../',
    title: 'EscogeME',
    coleccion:req.params.colec,
    opt:req.params.opt,
    tipo:req.params.tipo,
    id:(Math.ceil(Math.random() * (parseInt(req.params.id))))
  });
});

module.exports = router;
