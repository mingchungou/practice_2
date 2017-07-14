
"use strict";

app.directive("ngStart", ["$window",
    function($window) {
        return {
            restrict: "E",
            link: function($scope, $element, $attrs) {
                $window.scrollTo(0, 0);
                new WOW().init();
            }
        };
    }]);
