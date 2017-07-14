
"use strict";

app.directive("ngWow", function() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            var animation = $scope.ngWow.animation;

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
            ngWow: "="
        }
    };
});
