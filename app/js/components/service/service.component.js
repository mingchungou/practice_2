
"use strict";

app.component("appService", {
    templateUrl: "js/components/service/service.component.html",
    controller: "serviceController"
});

app.controller("serviceController", [
    function() {
        //Function for setting data to modal according to service selected.
		this.openModal = (service) => {
			let modalElem = angular.element("#myModal");

			modalElem.find(".modal-header .modal-title").text(service.title);
			modalElem.find(".modal-body .col-md-8").text(service.modal.content);
			modalElem.find(".modal-body .img-fluid").attr({
				src: service.modal.url,
				alt: service.modal.alt
			});
		};

        this.$onInit = () => {
            this.serviceOptions = [{
    			style: "fa-bullseye",
    			title: "Desarrollo de Aplicaciones Mobiles",
    			content: "Desarrollamos aplicaciones móviles y plataformas web. Nuestra principal cualidad está en el desarrollo de software a medida de tus necesidades.",
    			modal: {
    				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime.",
                    url: "images/service-1.svg",
                    alt: "service 1"
    			}
    		}, {
    			style: "fa-bullhorn",
    			title: "Consultoría Tecnológica",
    			content: "Ofrecemos consultoría tecnológica especializada en movilidad, necesaria previo al desarrollo de cualquier proyecto.",
    			modal: {
    				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime.",
                    url: "images/service-2.svg",
                    alt: "service 2"
    			}
    		}, {
    			style: "fa-paper-plane",
    			title: "Marketing y publicidad Móvil",
    			content: "Desarrollamos campañas publicitarias para tus APP. Hacemos conocer tu marca en el momento exacto para conseguir un mayor impacto.",
    			modal: {
    				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime.",
                    url: "images/service-3.svg",
                    alt: "service 3"
    			}
    		}];
        };
    }]);
