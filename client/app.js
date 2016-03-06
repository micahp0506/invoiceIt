'use strict';


const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
        .when('/', {
            controller: 'DashboardController',
            templateURL: 'views/dashboard.html'
        })
        .when('/customers', {
            controller: 'CustomersController',
            templateURL: 'views/customers.html'
        })
        .when('/customers/details/:id', {
            controller: 'CustomersController',
            templateURL: 'views/customer_details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
