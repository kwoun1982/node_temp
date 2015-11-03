/*
 *************************************************************************
 * @source  : common.js
 * @desc    : 서버 공통 js
 *------------------------------------------------------------------------
 * VER  DATE         AUTHOR      DESCRIPTION
 * ---  -----------  ----------  -----------------------------------------
 * 1.0  2015.11.02   권기영       최초 작성
 * ---  -----------  ----------  -----------------------------------------
 * Project Description
 * Copyright(c) 2014 Simplatform,  All rights reserved.
 *************************************************************************
 */


// ##################################################
// 로그 설정
// ##################################################
var log = require('log4js').getLogger(__filename.substr(__filename.lastIndexOf("/") + 1));

// ##################################################
// DB 설정
// ##################################################
var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('TESTDB', server);

module.exports.find = function (collection, callback) {
    db.open(function (err, db) {
        if (err) {
            log.error(err);
            callback();
            db.close();
            return;
        }

        db.collection(collection, function (err, collection) {
            if (err) {
                log.error(err);
                callback();
                db.close();
                return;
            }

            collection.find().toArray(function (err, items) {
                if (err) {
                    log.error(err);
                    callback(err);
                    db.close();
                    return;
                }

                callback(items);
                db.close();

            });
        });
    });
};


// ##################################################
// 씨리얼 포트
// ##################################################
var serialPort = require("serialport");
var SerialPort = serialPort.SerialPort;

module.exports.serial_list = function (callback) {
    serialPort.list(function (err, ports) {
        //ports.forEach(function (port) {
        //    log.info(port);
        //});
        callback(ports);
    });
};

module.exports.serial_con = function (callback) {
    try {
        var sp = new SerialPort("/dev/cu.usbserial-14143", {
            baudrate: 9600,
            manufacturer: 'FTDI',
            locationId: '0x14143000',
            vendorId: '0x0403',
            productId: '0x6001'
        });

        callback(sp);

    } catch (err) {
        log.error(err);
    }
};

