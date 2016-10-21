var express = require('express');
var router = express.Router();
var lubox = require('lug-box');

router.get('/:text/:ss', function(req, res, next) {
    console.log('escribiendo');
    lubox.write('texto.txt','Hola Mundo');
    console.log('fin escritura');
    res.write('Hola Munndo');
    res.end();
});

module.exports = router;