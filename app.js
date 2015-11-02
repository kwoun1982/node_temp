
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// ##################################################
// LOG4js 설정
// ##################################################
var log4js = require('log4js');
var log = require('log4js').getLogger(__filename.substr(__filename.lastIndexOf("/") + 1));
//app.use(log4js.connectLogger(log4js.getLogger("http"), {level: 'auto'}));


log.info("===========================================");
log.info(">> 엔진설정 ");
// ##################################################
// view 엔진 설정
// ##################################################
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// ##################################################
// 기타설정
// ##################################################
log.info(">> 기타설정 ");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ##################################################
// Controller 설정
// ##################################################
log.info(">> Controller 설정 ");
app.use(require('./config/controller').app);


// ##################################################
// 404 ERR 설정
// ##################################################
log.info(">> 404 ERR 설정 ");
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        log.error(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    log.error(err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
log.info("===========================================");
log.info(app.use);
module.exports = app;


