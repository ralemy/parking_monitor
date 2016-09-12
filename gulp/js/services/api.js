/**
 * Created by ralemy on 11/1/15.
 * Collection of services used in the angular app.
 */

module.exports = (function (app) {
    app.factory("API", ["_", "$http", "$rootScope", "$q", function (_, $http, $rootScope, $q) {
        function restCall(url, opts) {
            var options = _.merge({
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                responseType: "json",
                silent: {},
                url: "/api" + url
            }, opts);
            return $http(options).then(function (r) {
                return r.data;
            }, function (response) {
                if (!options.silent[response.status] && !options.silentAll)
                    $rootScope.alert = {
                        type: "warning",
                        msg: "Server error " + response.status + " " + response.data
                    };
                return $q.reject(response);
            });
        }

        return {
            getStreets: function () {
                return restCall("/streets");
            }
        }
    }]);
})(angular.module(window.mainApp));
