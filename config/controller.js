/*
 *************************************************************************
 * @source  : controller.js
 * @desc    : 전역 컨드롤러 설정
 *------------------------------------------------------------------------
 * VER  DATE         AUTHOR      DESCRIPTION
 * ---  -----------  ----------  -----------------------------------------
 * 1.0  2015.11.02   권기영       최초 작성
 * ---  -----------  ----------  -----------------------------------------
 * Project Description
 * Copyright(c) 2014 Simplatform,  All rights reserved.
 *************************************************************************
 */
var express = require('express');
var app = express();

app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));

module.exports.app = app;