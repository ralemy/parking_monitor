/**
 * Created by ralemy on 11/1/15.
 * collection of controllers used for the app
 */

module.exports = (function (app) {
    "use strict";
    app.controller("topLevel", ["$scope", function ($scope) {
        $scope.user = document.getElementById("username").textContent.trim();
        $scope.logout=function(){
            window.location.href="/logout";
        }
    }])
        .controller("MainState",["$scope", "API",function($scope, api){
            api.getStreets()
                .then((streets)=>$scope.streets=streets)
                .catch(error=>window.alert(error));
        }])
        .controller("Street",["$scope",function($scope){
            $scope.streetName = $scope.$stateParams.id;
        }]);
})(angular.module(window.mainApp));
