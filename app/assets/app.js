var timeoutApp = angular.module('timeoutApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);

timeoutApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/start', {
                templateUrl: 'assets/start.html',
                controller: 'startCtrl'
            }).
            when('/hello', {
                templateUrl: 'assets/hello.html',
                controller: 'helloCtrl'
            }).
            otherwise({
                redirectTo: '/start'
            });
    }]);

