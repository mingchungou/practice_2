
"use strict";

app.directive("ngText", function() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.text($scope.ngText);
        },
        scope: {
            ngText: "@"
        }
    };
});
