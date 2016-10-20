var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:sel', function(req, res, next) {
  res.render('wind', {
    rootPath:'../',
    title: 'EscogeME',
    sel: req.params.sel,
    coleccion:'culitos'
  });
});

module.exports = router;
