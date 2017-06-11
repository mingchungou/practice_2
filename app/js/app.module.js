"use strict";

var app = angular.module("mobileSolutions", ["ngRoute", "duScroll"]);

/***************** router configuration ******************/
app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            template: "<app-home></app-home>"
        })
        .when("/about", {
            template: "<app-about></app-about>"
        })
        .when("/service", {
            template: "<app-service></app-service>"
        })
        .when("/contact", {
            template: "<app-contact></app-contact>"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

angular.element(function() {
    angular.bootstrap(document, ["mobileSolutions"]);
});
