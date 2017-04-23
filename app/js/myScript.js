var app = angular.module("mobileSolutions", ["ngRoute", "duScroll"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/init.html",
            controller: "initController",
            controllerAs: "$ctrl"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "aboutController",
            controllerAs: "$ctrl"
        })
        .when("/service", {
            templateUrl: "templates/service.html",
            controller: "serviceController",
            controllerAs: "$ctrl"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: "contactController",
            controllerAs: "$ctrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});
