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
        .when('/customers/add', {
            controller: 'CustomersController',
            templateUrl: 'views/add_customer.html'
        })
        .when('/invoices/add', {
            controller: 'InvoicesController',
            templateUrl: 'views/add_invoice.html'
        })
        .when('/customers/edit/:id', {
            controller: 'CustomersController',
            templateUrl: 'views/edit_customer.html'
        })
        .when('/invoices/edit/:id', {
            controller: 'InvoicesController',
            templateUrl: 'views/edit_invoice.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
