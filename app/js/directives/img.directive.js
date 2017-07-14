
"use strict";

app.directive("ngImg", function() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            var imgData = $scope.ngImg;
            
            $element.attr({
                "src": imgData.url,
                "alt": imgData.alt
            });
        },
        scope: {
            ngImg: "="
        }
    };
});
