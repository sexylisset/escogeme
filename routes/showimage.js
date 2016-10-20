var express = require('express');
var router = express.Router();

router.get('/:colec/:opt/:tipo/:id', function(req, res, next) {
    res.render('showimage', {
        rootPath:'../../../../../',
        title: 'EscogeME',
        coleccion:req.params.colec,
        opt:req.params.opt,
        tipo:req.params.tipo,
        id:req.params.id
    });
});

module.exports = router;
