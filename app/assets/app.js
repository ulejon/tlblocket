var tlBlocketApp = angular.module('tlBlocketApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);

tlBlocketApp.config(['$routeProvider',
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

