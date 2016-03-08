'use strict';


myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams',function ($scope, $http, $location, $routeParams) {
    console.log("Customers Controller loaded.....");

    // Getting customers from api and sending to the DOM
    $scope.getCustomers = () => {
        $http.get('/api/customers/').success((res) => {
            $scope.customers = res;
        });
    };

    // Getting specific customer from api and sending to the DOM
    $scope.getCustomer = () => {
        let id = $routeParams.id;
        $http.get('/api/customers/'+id).success((res) => {
            $scope.customer = res;
        });
    };

    // Getting customer invoices from api and sending to the DOM
    $scope.getCustomerInvoices = () => {
        let id = $routeParams.id;
        $http.get('/api/invoices/customer/'+id).success((res) => {
            $scope.customer_invoices = res;
        });
    };

    // Adding customer to database, then redirecting to Customers view
    $scope.addCustomer = () => {
        $http.post('/api/customers/', $scope.customer).success(() => {
            window.location.href='/#customers/';
        });
    };


}]);
