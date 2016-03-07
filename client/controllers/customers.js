'use strict';


myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams',function ($scope, $http, $location, $routeParams) {
    console.log("Customers Controller loaded.....");

    $scope.getCustomers = () => {
        $http.get('/api/customers').success((res) => {
            $scope.customers = res;
        });
    };

    $scope.getCustomer = () => {
        let id = $routeParams.id;
        $http.get('/api/customers/'+id).success((res) => {
            $scope.customers = res;
        });
    };

}]);
