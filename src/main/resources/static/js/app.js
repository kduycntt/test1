var app = angular.module('myApp', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUrl: '/LMS/views/main.html',
            controller: 'MainController'
        })
        .when('/book',{
            templateUrl: '/LMS/views/book.html',
            controller: 'MainController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});

