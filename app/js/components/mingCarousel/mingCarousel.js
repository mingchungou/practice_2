app.component("mingCarousel", {
    templateUrl: "js/components/mingCarousel/mingCarousel.html",
    controller: "mingCarouselController"
});

app.controller("mingCarouselController", [
    function() {
        var self = this;

        this.$onInit = function() {
            /***************** item of carousel ******************/
            self.items = [{
                title: "App Lima Travels",
                image: {
                    url: "images/project-1.jpg",
                    alt: "project 1"
                }
            }, {
                title: "Apps Uber",
                image: {
                    url: "images/project-2.jpg",
                    alt: "project 2"
                }
            }, {
                title: "App Pizza Perú",
                image: {
                    url: "images/project-3.jpg",
                    alt: "project 3"
                }
            }, {
                title: "App Muebles Hoy",
                image: {
                    url: "images/project-4.jpg",
                    alt: "project 4"
                }
            }, {
                title: "App Clima Perú",
                image: {
                    url: "images/project-5.jpg",
                    alt: "project 5"
                }
            }, {
                title: "App Playa",
                image: {
                    url: "images/project-6.jpg",
                    alt: "project 6"
                }
            }];

            /***************** init carousel ******************/
            self.forRender = {
                type: "carousel",
                elementClass: "owl-carousel"
            };
        };
    }]);
