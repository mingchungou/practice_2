
"use strict";

app.component("appHome", {
    templateUrl: "js/components/home/home.component.html",
    controller: "homeController"
});

app.controller("homeController", ["$document",
    function($document) {
        //Function for scrolling to agency block.
        var self = this,
            agencyElem = angular.element("#agency-content");

        this.scrollToAgency = function() {
            $document.scrollToElement(agencyElem, 80, 1000);
        };

        this.$onInit = function() {
            self.electionOptions = [{
                style: "fa-briefcase",
                title: "Aplicaciones para la nube",
                content: "Para empresa que requiera ampliar sus plataformas de gestión.",
                animation: {delay: "0.3s"}
            }, {
                style: "fa-bullhorn",
                title: "Fábrica de software",
                content: "Servicios de mejora correctiva y evolutiva para sus aplicaciones.",
                animation: {delay: "0.5s"}
            }, {
                style: "fa-comment-o",
                title: "Gestión en la Nube",
                content: "Para empresa que requiera ampliar sus plataformas de gestión.",
                animation: {delay: "0.7s"}
            }, {
                style: "fa-calendar",
                title: "Videojuegos",
                content: "Para empresa que requiera ampliar sus plataformas de gestión.",
                animation: {delay: "0.4s"}
            }, {
                style: "fa-check-square-o",
                title: "Diseño personalizado",
                content: "Customiza hasta el último píxel de tu App. Infinitas Posibilidades.",
                animation: {delay: "0.6s"}
            }, {
                style: "fa-cogs",
                title: "Funciones a medida",
                content: "Tienes más de 50 funciones predesarrolladas para escoger.",
                animation: {delay: "0.8s"}
            }];

            self.serviceOptions = [{
                url: "images/service-1.svg",
                alt: "service 1",
                title: "Desarrollo de Aplicaciones Mobiles",
                content: "Desarrollamos aplicaciones móviles y plataformas web. Nuestra principal cualidad está en el desarrollo de software a medida de tus necesidades.",
                animation: {delay: "0.3s"}
            }, {
                url: "images/service-2.svg",
                alt: "service 2",
                title: "Consultoría Tecnológica",
                content: "Ofrecemos consultoría tecnológica especializada en movilidad, necesaria previo al desarrollo de cualquier proyecto.",
                animation: {delay: "0.6s"}
            }, {
                url: "images/service-3.svg",
                alt: "service 3",
                title: "Marketing y publicidad Movil",
                content: "Desarrollamos campañas publicitarias para tus APP. Hacemos conocer tu marca en el momento exacto para conseguir un mayor inpacto.",
                animation: {delay: "0.9s"}
            }];
        };
    }]);
