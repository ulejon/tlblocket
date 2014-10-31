tlBlocketApp.factory('Add', ['$resource',
    function($resource){
        return $resource('adds/:addId', {}, {
            query: {method:'GET', params:{count:'@count', page: '@page'}, isArray:false}
        });
    }]);