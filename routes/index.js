/*
 *************************************************************************
 * @source  : index.js
 * @desc    :
 *------------------------------------------------------------------------
 * VER  DATE         AUTHOR      DESCRIPTION
 * ---  -----------  ----------  -----------------------------------------
 * 1.0  2015.11.02   권기영       최초 작성
 * ---  -----------  ----------  -----------------------------------------
 * Project Description
 * Copyright(c) 2014 Simplatform,  All rights reserved.
 *************************************************************************
 */


var G = require('../config/common');
var express = require('express');
var router = express.Router();
var log = require('log4js').getLogger(__filename.substr(__filename.lastIndexOf("/") + 1));

router.get('/', function (req, res, next) {


    //============================
    G.find("user", function (items) {
        log.debug(items);
    });

    //============================


    res.render('index', {title: 'Express'});


});
module.exports = router;
