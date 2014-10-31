timeoutApp.controller('startCtrl', function ($scope, $resource) {
    var Timeout = $resource('/timeout', {}, {});

    var TestTimeout = $resource('/test', {}, {});

    Timeout.get({}, function(timeout) {
        $scope.timeout = timeout.timeout;
    });

    $scope.updateTimeout = function (timeout) {
        var newTimeout = new Timeout({timeout: timeout});
        newTimeout.$save();
    };

    $scope.timeoutTestRes = null;

    $scope.testTimeout = function () {
        $scope.timeoutTestRes = "Testing";
        TestTimeout.get({}, function (res) {
            $scope.timeoutTestRes = "Done";
        });
    };

    $scope.performingTest = function () {
        return $scope.timeoutTestRes !== null;
    };

    $scope.isRequestingData = function () {
        return $scope.timeoutTestRes == 'Testing';
    };

    $scope.clearTestResultInfo = function () {
        $scope.timeoutTestRes = null;
    };

    $scope.testUrl = function () {
        var route = jsRoutes.controllers.Application.performTimeoutTest();
        return route.absoluteURL();
    };
});