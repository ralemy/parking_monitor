/**
 * Created by ralemy on 11/1/15.
 * collection of controllers used for the app
 */

module.exports = (function (app) {
    "use strict";
    app.controller("topLevel", ["$scope", "Requester", function ($scope, Requester) {
        $scope.about=function(){
            Requester.about();
        };
    }]);
})(angular.module(window.mainApp));
