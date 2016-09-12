/**
 * Created by ralemy on 11/1/15.
 * Collection of miscellaneous directives used in the app
 */

module.exports=(function(app){
    app.directive("fromTemplate",[function(){
        return {
            templateUrl: function(element,attrs){
                return "/templates/" + attrs.fromTemplate;
            }
        };
    }]);
})(angular.module(window.mainApp));

