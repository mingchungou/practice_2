
"use strict";

app.directive("ngSrc", function($window) {
    return {
        restrict: "A",
        link: ($scope, $element, $attrs) => {
            $element.attr("src", $scope.ngSrc);
        },
        scope: {
            ngSrc: "@"
        }
    };
});
