"use strict";

app.component("mingHeader", {
    templateUrl: "js/components/mingHeader/mingHeader.html",
    controller: "mingHeaderController",
	bindings: {
        menuSelected: "@"
    }
});

app.controller("mingHeaderController", ["$scope", "$window",
    function( $scope, $window ) {
    	var self = this;
        $scope.animated = false;

    	var animateHeader = function( status ) {
    		$scope.$apply(function() {
        		$scope.animated = status;
        	});
    	};

        this.$onInit = function() {
            var xWindow = $( $window ),
                scroll;

            /***************** animate header event ******************/
            xWindow.scroll(function () {
                scroll = xWindow.scrollTop();

                if ( scroll >= 80 ) {
                    animateHeader( true );
                } else {
                    animateHeader( false );
                }
            });

            /***************** menu list ******************/
            self.menu = [{
        		name: "Inicio",
        		url: "#/"
        	}, {
        		name: "Nosotros",
        		url: "#about"
        	}, {
        		name: "Servicios",
        		url: "#service"
        	}, {
        		name: "Contacto",
        		url: "#contact"
        	}];

            for ( var i = 0; i < self.menu.length; i++ ) {
                if ( self.menu[i].name === self.menuSelected ) {
                    self.menu[i].active = true;
                }
            }

            /***************** icon list ******************/
            self.icons = [{
                style: "fa-search",
                hasTarget: {
                    target: "#search-form"
                }
            }, {
                style: "fa-bars",
                extraClass: "hidden-md-up",
                hasTarget: {
                    target: "#menu-nav"
                }
            }];
        };
    }]);
