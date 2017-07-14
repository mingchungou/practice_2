
"use strict";

app.component("appCarousel", {
    templateUrl: "js/components/shared/carousel/carousel.component.html",
    controller: "carouselController"
});

app.controller("carouselController", function() {
    var self = this;

    //Function for initializing carousel.
    this.initCarousel = function() {
        angular.element(".owl-carousel").owlCarousel({
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
    };

    this.$onInit = function() {
        self.images = [{
            title: "App Lima Travels",
            url: "images/project-1.jpg",
            alt: "project 1"
        }, {
            title: "Apps Uber",
            url: "images/project-2.jpg",
            alt: "project 2"
        }, {
            title: "App Pizza Perú",
            url: "images/project-3.jpg",
            alt: "project 3"
        }, {
            title: "App Muebles Hoy",
            url: "images/project-4.jpg",
            alt: "project 4"
        }, {
            title: "App Clima Perú",
            url: "images/project-5.jpg",
            alt: "project 5"
        }, {
            title: "App Playa",
            url: "images/project-6.jpg",
            alt: "project 6"
        }];
    };
});
