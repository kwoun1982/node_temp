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


// ##################################################
// 씨리얼 포트
// ##################################################
var serialPort = require("serialport");

router.get('/', function (req, res, next) {

    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    log.debug("[kky] :: router.get('/')");
    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    //============================

    //G.find("user", function (items) {
    //    log.debug(items);
    //});

    //
    G.serial_list(function (list) {
        log.debug(list);
        G.serial_con(function (sp) {
            sp.on("open", function () {
                log.debug('open');

                sp.on('42010000000F72FD', function (data) {
                    log.debug('data received: ' + data);
                });

                sp.write("42010000000F72FD", function (err, results) {
                    log.debug('err ' + err);
                    log.debug('results ' + results);
                });
            });
        });

    });

    //============================


    res.render('index', {title: 'Express'});


});
router.get('/s', function (req, res, next) {


    res.writeHeader('Content-Type', 'text/html');
    var data = {
        aa1: "aaaa1 ",
        aa2: "aaaa2 ",
        aa3: "aaaa3 "
    };
    res.write(data);

});

module.exports = router;
