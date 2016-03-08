'use strict';


myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams',function ($scope, $http, $location, $routeParams) {
    console.log("Invoices Controller loaded.....");

    // Getting all invoices
    $scope.getInvoices = () => {
        $http.get('/api/invoices').success((res) => {
            $scope.invoices = res;
        });
    };

    // Getting specific invoice
    $scope.getInvoice = () => {
        let id = $routeParams.id;
        $http.get('/api/invoices/'+id).success((res) => {
            $scope.invoice = res;
        });
    };

    // Getting customers from api and sending to the DOM this is used for drop down choices to include in new invoice
    $scope.getCustomers = () => {
        $http.get('/api/customers/').success((res) => {
            $scope.customers = res;
        });
    };

    // Adding invoice to database, then redirecting to Invoices view
    $scope.addInvoice = () => {
        $http.post('/api/invoices/', $scope.invoice).success(() => {
            window.location.href='/#invoices/';
        });
    };

}]);
