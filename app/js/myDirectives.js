"use strict";

/***************** set collapse effect or link to icon ******************/
app.directive("ngIconExtra", function() {
    return {
        restrict: "A",
        link: function( scope, element, attr ) {
            if ( attr.ngIconExtra ) {
                var icon = JSON.parse( attr.ngIconExtra );

                if ( icon.hasTarget ) {
                    element.attr({
                        "data-toggle": "collapse",
                        "data-target": icon.hasTarget.target,
                        "aria-expanded": "false"
                    });
                } else if ( icon.hasUrl ) {
                    element.attr( "href", icon.hasUrl.url );

                    if ( icon.hasUrl.target ) {
                        element.attr( "target", icon.hasUrl.target );
                    }
                }
            }
        }
    };
});

/***************** set wow animation ******************/
app.directive("ngWow", function() {
    return {
        restrict: "A",
        link: function( scope, element, attr ) {
            if ( attr.ngWow ) {
                var values = JSON.parse( attr.ngWow );

                if ( values.animation ) {
                    if ( values.animation.type ) {
                        element.addClass( "wow " + values.animation.type );
                    }
                    if ( values.animation.duration ) {
                        element.attr( "data-wow-duration", values.animation.duration );
                    }
                    if ( values.animation.delay ) {
                        element.attr( "data-wow-delay", values.animation.delay );
                    }
                }
            }
        }
    };
});

/***************** set src attribute ******************/
app.directive("ngUrl", function() {
    return {
        restrict: "A",
        link: function( scope, element, attr ) {
            if ( attr.ngUrl ) {
                element.attr( "src", attr.ngUrl );
            }
        }
    };
});

/***************** execute after ng-repeat has done ******************/
app.directive("ngRender", function( $window ) {
    return {
        restrict: "A",
        link: function( scope, element, attr ) {
            if ( scope.$last && attr.ngRender ) {
                var values = JSON.parse( attr.ngRender );

                if ( values.type === "carousel" ) {
                    /***************** init owl carousel ******************/
                    $( "." + values.elementClass ).owlCarousel({
                        loop: true,
                        margin: 0,
                        nav: true,
                        autoWidth: false,
                        navText: [ '<i class="fa fa-arrow-circle-left" title="Anterior"></i>', '<i class="fa fa-arrow-circle-right" title="Siguiente"></i>' ],
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
                } else if ( values.type === "go-top" ) {
                    /***************** add animation, event to go top icon ******************/
                    var xWindow = $( $window ),
                        scroll,
                        goUpIcon = $( ".go-top .icon" ),
                        header = angular.element( $( "#ming-header" ) );

                    xWindow.scroll(function () {
                        scroll = xWindow.scrollTop();

                        if ( scroll >= 50 ) {
                            goUpIcon.addClass( "show" );
                        } else {
                            goUpIcon.removeClass( "show" );
                        }
                    });

                    goUpIcon.click(function() {
                        $( xWindow[0].document ).scrollToElement( header, 0, 1000 );
                    });
                } else if ( values.type === "accordion" ) {
                    /***************** open accordion first item ******************/
                    $( "#accordion .card:first-child div" ).addClass( "show" );
                }
            }
        }
    };
});

app.directive("initComponents", function( $window ) {
    return {
        restrict: "E",
        link: function( scope, element, attr ) {
            /***************** start from the top when loading a page ******************/
            $window.scrollTo( 0, 0 );

            /***************** init wow animation ******************/
            new WOW().init();

            /***************** init tooltip ******************/
            $( "[ data-toggle='tooltip' ]" ).tooltip();
        }
    };
});
