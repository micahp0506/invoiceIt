'use strict';


const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'DashboardController',
            templateUrl: 'views/dashboard.html'
        })
        .when('/customers', {
            controller: 'CustomersController',
            templateUrl: 'views/customers.html'
        })
        .when('/customers/details/:id', {
            controller: 'CustomersController',
            templateUrl: 'views/customer_details.html'
        })
        .when('/invoices', {
            controller: 'InvoicesController',
            templateUrl: 'views/invoices.html'
        })
        .when('/invoices/details/:id', {
            controller: 'InvoicesController',
            templateUrl: 'views/invoice_details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
