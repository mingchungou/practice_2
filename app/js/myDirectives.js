"use strict";

/***************** set collapse effect or link to icon ******************/
app.directive("ngIconExtra", function() {
    return {
        restrict: "A",
        scope: {
            ngIconExtra: "=",
        },
        link: function($scope, $element, $attrs) {
            if ($scope.ngIconExtra.hasTarget) {
                $element.attr({
                    "data-toggle": "collapse",
                    "data-target": $scope.ngIconExtra.hasTarget.target,
                    "aria-expanded": "false"
                });
            } else if ($scope.ngIconExtra.hasUrl) {
                var hasUrl = $scope.ngIconExtra.hasUrl;

                $element.attr("href", hasUrl.url);
                if (hasUrl.target) {
                    $element.attr("target", hasUrl.target);
                }
            }
        }
    };
});

/***************** set wow animation ******************/
app.directive("ngWow", function() {
    return {
        restrict: "A",
        scope: {
            ngWow: "=",
        },
        link: function($scope, $element, $attrs) {
            var animation = $scope.ngWow.animation;

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
    };
});

/***************** set src attribute ******************/
app.directive("ngUrl", function() {
    return {
        restrict: "A",
        scope: {
            ngUrl: "@",
        },
        link: function($scope, $element, $attrs) {
            $element.attr("src", $scope.ngUrl);
        }
    };
});

/***************** execute after ng-repeat has done ******************/
app.directive("ngRender", function($window) {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            if ($scope.$last && $attrs.ngRender) {
                var values = JSON.parse($attrs.ngRender);

                if (values.type === "carousel") {
                    /***************** init owl carousel ******************/
                    $("." + values.elementClass).owlCarousel({
                        loop: true,
                        margin: 0,
                        nav: true,
                        autoWidth: false,
                        navText: ['<i class="fa fa-arrow-circle-left" title="Anterior"></i>', '<i class="fa fa-arrow-circle-right" title="Siguiente"></i>'],
                        responsive: {
                            0: {
                                items: 1
                            },
                            500: {
                                items: 2,
                                margin: 20
                            },
                            800: {
                                items: 3,
                                margin: 20
                            },
                            1000: {
                                items: 4,
                                margin: 20
                            }
                        }
                    });
                } else if (values.type === "go-top") {
                    /***************** add animation, event to go top icon ******************/
                    var xWindow = $($window),
                        scroll,
                        goUpIcon = $(".go-top .icon"),
                        header = angular.element($("#ming-header"));

                    xWindow.scroll(function () {
                        scroll = xWindow.scrollTop();

                        if (scroll >= 50) {
                            goUpIcon.addClass("show");
                        } else {
                            goUpIcon.removeClass("show");
                        }
                    });

                    goUpIcon.click(function() {
                        $(xWindow[0].document).scrollToElement(header, 0, 1000);
                    });
                } else if (values.type === "accordion") {
                    /***************** open accordion first item ******************/
                    $("#accordion .card:first-child div").addClass("show");
                }
            }
        }
    };
});

app.directive("initComponents", function($window) {
    return {
        restrict: "E",
        link: function($scope, $element, $attrs) {
            /***************** start from the top when loading a page ******************/
            $window.scrollTo(0, 0);

            /***************** init wow animation ******************/
            new WOW().init();
        }
    };
});
