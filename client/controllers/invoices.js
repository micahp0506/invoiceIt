'use strict';


myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams',function ($scope, $http, $location, $routeParams) {
    console.log("Invoices Controller loaded.....");

    $scope.getInvoices = () => {
        $http.get('/api/invoices').success((res) => {
            $scope.invoices = res;
        });
    };

    $scope.getInvoiuce = () => {
        let id = $routeParams.id;
        $http.get('/api/invoicess/'+id).success((res) => {
            $scope.invoices = res;
        });
    };

}]);
