
"use strict";

app.component("appNavbar", {
    templateUrl: "js/components/shared/navbar/navbar.component.html",
    controller: "navbarController"
});

app.controller("navbarController", ["$location", "$scope",
    function($location, $scope) {
        //Function for setting current route path signal
		this.isActive = function(destination) {
            var path = $location.path(),
                pathSplit = path.split("/");
            return destination === pathSplit[1];
        };

        //Function for closing menu if menu is in list status and route path is changed.
        $scope.$on("$routeChangeSuccess", (ev, current, previous) => {
            if (angular.element("#menu-nav").hasClass("show")) {
                angular.element(".menu-btn").trigger("click");
            }
        });

        this.$onInit = () => {
            this.menuOption = [{
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
