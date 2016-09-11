/**
 * Created by ralemy on 11/1/15.
 * parent file for including JS libs and creating main angular module
 */

module.exports=(function(){
    "use strict";
    require("../lib/angular.min.js");
    require("../lib/angular-animate.min.js");
    require("../lib/angular-sanitize.min.js");
    require("../lib/angular-ui-router.min.js");
    require("../lib/ui-bootstrap-tpls-0.14.3.min.js");
    window.mainApp = document.body.parentElement.getAttribute("ng-app");
    var lodash = require("../lib/lodash.min.js"),
        buildString = "1.0.0-SNAPSHOT";
    return angular.module(window.mainApp,["ngSanitize","ngAnimate","ui.router","ui.bootstrap"])
        .factory("_",function(){
            return lodash;
        }).constant("BuildString",buildString);
})();