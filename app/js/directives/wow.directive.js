
"use strict";

app.directive("ngWow", function($window) {
    return {
        restrict: "A",
        link: ($scope, $element, $attrs) => {
            let animation = $scope.ngWow.animation;

            if (animation) {
                if (animation.type) {
                    $element.addClass("wow " + animation.type);
                }
                if (animation.duration) {
                    $element.attr("data-wow-duration", animation.duration);
                }
                if (animation.delay) {
                    $element.attr("data-wow-delay", animation.delay);
                }
            }
        },
        scope: {
            ngWow: "=",
        },
    };
});
