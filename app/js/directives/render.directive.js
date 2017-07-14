
"use strict";

app.directive("ngRender", function() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            if ($scope.$parent.$last) {
                $scope.ngRender();
            }
        },
        scope: {
            ngRender: "&"
        }
    };
});
