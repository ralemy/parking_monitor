/**
 * Created by ralemy on 11/1/15.
 * Initialize methods (run and config) for the angular app.
 */

module.exports = (function (app) {
    app.run(["$rootScope", "$state", "$stateParams",
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])
        .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/main");
            $stateProvider.state("main", {
                url: "/main",
                templateUrl: "/templates/states/main",
                controller: "MainState"
            }).state("street", {
                url: "/street/:id",
                templateUrl: "/templates/states/street",
                controller: "Street"
            });
        }]);
})(angular.module(window.mainApp));