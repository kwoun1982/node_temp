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
var Q = require("q");

var express = require('express');
var router = express.Router();
var log = require('log4js').getLogger(__filename.substr(__filename.lastIndexOf("/") + 1));


// ##################################################
// 씨리얼 포트
// ##################################################
var serialPort = require("serialport");
var sp;
router.get('/', function (req, res, next) {

    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    log.debug("[kky] :: router.get('/')");
    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    //============================

    //G.find("user", function (items) {
    //    log.debug(items);
    //});

    //
    //G.serial_list(function (list) {
    //    //log.debug(list);
    //    G.serial_con(function (sp) {
    //        sp.on("open", function () {
    //            log.debug('open');
    //            // 42050003FF00732B
    //            sp.write("40050003FF00732B", function (err, results) {
    //                log.debug('err ' + err);
    //                log.debug('results ' + results);
    //
    //            });
    //
    //        });
    //
    //
    //    });
    //
    //});

    //============================


    res.render('index', {title: 'Express'});


});
router.get('/serialTest_btn', function (req, res, next) {
    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    log.debug("[kky] :: router.get('/serialTest_btn')");
    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    req.accepts('application/json');

    G.serial_con(function (sp) {
        sp.on("open", function () {
            var buffer = new Buffer(8);
            buffer[0] = 0x40;
            buffer[1] = 0x05;

            buffer[2] = 0x00;
            buffer[3] = 0x03;

            buffer[4] = 0xFF;
            buffer[5] = 0x00;

            buffer[6] = 0x73;
            buffer[7] = 0x2B;

            log.debug('REQ Data :: ' + (buffer.toString("hex").toUpperCase()));
            sp.write(buffer, function (err, results) {
                log.debug('write :: err = [' + err + "]");
                log.debug('write :: results = [' + results + "]");
            });
        });
        var str = "";
        sp.on('data', function (data) {
            log.debug('RES Data :: ' + data.toString("hex").toUpperCase());
        });


    });
});


router.get('/qTest_btn', function (req, res, next) {
    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    log.debug("[kky] :: router.get('/qTest_btn')");
    log.debug("[kky] :: ++++++++++++++++++++++++++++++++++++");
    req.accepts('application/json');


    doSomethingAsync().then(function (val) {
        console.log('Promise Resolved!', val);
    });

    res.json({result: ""});
});

function doSomethingAsync() {
    var deferred = Q.defer();
    setTimeout(function () {
        deferred.resolve('hello world');
    }, 3000);

    return deferred.promise;
}

module.exports = router;