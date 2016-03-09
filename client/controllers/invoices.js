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
            // Fill Invoice
            $scope.invoice.customer_id = res.customer._id;
            $scope.invoice.status = res.invoice.status;
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

    // Updating invoice in database, then redirecting to Invoices view
    $scope.updateInvoice = () => {
        $http.put('/api/invoices/'+ $scope.invoice._id, $scope.invoice).success(() => {
            window.location.href='/#invoices/';
        });
    };

    // Deleting invoice in database, then redirecting to Invoices  view
    $scope.deleteInvoice = (id) => {
        $http.delete('/api/invoices/'+id).success(() => {
            window.location.href='/#invoices/';
        });
    };

}]);
