/*
 *************************************************************************
 * @source  : common.js
 * @desc    : 클라이언트 공통 js
 *------------------------------------------------------------------------
 * VER  DATE         AUTHOR      DESCRIPTION
 * ---  -----------  ----------  -----------------------------------------
 * 1.0  2015.11.02   권기영       최초 작성
 * ---  -----------  ----------  -----------------------------------------
 * Project Description
 * Copyright(c) 2014 Simplatform,  All rights reserved.
 *************************************************************************
 */

//document.write('<script src="../mVaccine/TouchEn_mVaccine_chineabank.js"></script>');
//var myLogger = new Log4js.getLogger("myCategory");
$(document).ready(function () {
    init();
});

var SET_HTTP = {
    send: function (req, data) {
        var SERVER_URL_REQ = "" + req;
        $.ajax({
            url: SERVER_URL_REQ,
            dataType: 'json',
            success: function (res) {
                console.log("[kky] common.js :: // ##################################################");
                console.log("[kky] common.js :: // setHttp.send() success RES ");
                console.log(JSON.stringify(res,"","    "));
                console.log("[kky] common.js :: // ##################################################");

            },
            error: function (res) {
            }
        });
    }
}
