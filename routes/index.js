var G = require('../common/common');


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {

    //============================
    G.find("user", function () {

    });

    //============================


    res.render('index', {title: 'Express'});


});
module.exports = router;
