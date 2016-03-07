'use strict';

myApp.controller('CustomersController', ['$scope', '$http', '$location',function ($scope, $http, $location) {
    console.log("Customers Controller loaded.....");

    $scope.getCustomers = () => {
        $http.get('/api/customers').success((res) => {
            $scope.customers = res;
        });
    };
}]);
