
"use strict";

app.directive("ngRender", function($window) {
    return {
        restrict: "A",
        link: ($scope, $element, $attrs) => {
            if ($scope.$parent.$last) {
                $scope.ngRender();
            }
        },
        scope: {
            ngRender: "&"
        }
    };
});
