
"use strict";

app.directive("ngStart", function($window) {
    return {
        restrict: "E",
        link: ($scope, $element, $attrs) => {
            $window.scrollTo(0, 0);
            new WOW().init();
        }
    };
});
