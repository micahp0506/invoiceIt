'use strict';


const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            controller: 'DashboardController',
            templateURL: 'views/dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
