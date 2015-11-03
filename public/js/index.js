/*
 *************************************************************************
 * @source  : index.js
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

var INIT_CNT = 0;
function init() {
    if (INIT_CNT == 0) {
        INIT_CNT++;
        console.log("[kky] index.js :: ++++++++++++++++++++++++++++++++++++");
        console.log("[kky] index.js :: " + "init() INIT_CNT : [" + INIT_CNT + "]");
        console.log("[kky] index.js :: ++++++++++++++++++++++++++++++++++++");
        $("#serialTest_btn").on("click", function () {
            SET_HTTP.send("serialTest_btn", {})
        });

        $("#qTest_btn").on("click", function () {
            SET_HTTP.send("qTest_btn", {})
        });
    }

}
