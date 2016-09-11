/**
 * Created by ralemy on 11/1/15.
 * Collection of services used in the angular app.
 */

module.exports = (function (app) {
    app.factory("Project", ["Requester", "_", "$http", function (Requester, _, $http) {
        return Object.create({
        }, {
        });
    }]);
})(angular.module(window.mainApp));
