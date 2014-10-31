tlBlocketApp.controller('startCtrl', ['$scope', 'Add', function($scope, Add) {

    $scope.totalItems = 0;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;

    $scope.pageOptions = [
        {itemsPerPage: 5, displayValue: '5'},
        {itemsPerPage: 10, displayValue: '10'},
        {itemsPerPage: 20, displayValue: '20'}
    ];


    $scope.ads = fetchAdds();

    $scope.pageChanged = function() {
        $scope.ads = fetchAdds();
    };

    $scope.itemsPerPageChanged = function(itemsPerPage) {
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