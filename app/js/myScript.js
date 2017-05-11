"use strict";

var app = angular.module("mobileSolutions", ["ngRoute", "duScroll"]);

/***************** router configuration ******************/
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/init.html",
            controller: "initController as $ctrl"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "aboutController as $ctrl"
        })
        .when("/service", {
            templateUrl: "templates/service.html",
            controller: "serviceController as $ctrl"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: "contactController as $ctrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});

angular.element(function() {
    angular.bootstrap(document, ["mobileSolutions"]);
});
