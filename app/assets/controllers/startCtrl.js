tlBlocketApp.controller('startCtrl', ['$scope', 'Add', function($scope, Add) {

    $scope.totalItems = 0;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

    $scope.ads = fetchAdds();

    $scope.pageChanged = function () {
        $scope.ads = fetchAdds();
    };

    function fetchAdds() {
        return Add.query({
            count: $scope.itemsPerPage,
            page: $scope.currentPage
        }, updateTotalItems);
    }

    function updateTotalItems(addsObject) {
        $scope.totalItems = addsObject.totalCount;
    }
}]);