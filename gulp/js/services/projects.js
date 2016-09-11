/**
 * Created by ralemy on 11/1/15.
 * Collection of services used in the angular app.
 */

module.exports = (function () {
    angular.module("ZonerApp").factory("Project", ["Requester", "_", "$http", function (Requester, _, $http) {
        return Object.create({
        }, {
        });
    }]);
})();
