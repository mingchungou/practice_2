
"use strict";

app.component("appNavbar", {
    templateUrl: "js/components/shared/navbar/navbar.component.html",
    controller: "navbarController"
});

app.controller("navbarController", ["$location", "$scope",
    function($location, $scope) {
        var self = this;

        //Function for setting current route path signal
        this.isActive = function(destination) {
            var path = $location.path(),
                pathSplit = path.split("/");
            return destination === pathSplit[1];
        };

        //Function for closing menu if menu is in list status and route path is changed.
        $scope.$on("$routeChangeSuccess", function(ev, current, previous) {
            if (angular.element("#menu-nav").hasClass("show")) {
                angular.element(".menu-btn").trigger("click");
            }
        });

        this.$onInit = function() {
            self.menuOption = [{
                name: "Inicio",
                url: "home"
            }, {
                name: "Nosotros",
                url: "about"
            }, {
                name: "Servicios",
                url: "service"
            }, {
                name: "Contacto",
                url: "contact"
            }];
        };
    }]);
