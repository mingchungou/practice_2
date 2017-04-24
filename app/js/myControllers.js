"use strict";

app.controller("mobileSolutionsController", function() {});

app.controller("initController", ["$document",
	function( $document ) {
		var agency = angular.element( $( "#agency-content" ) );

		/***************** welcome text options ******************/
		this.welcomeTextOptions = {
			welcomeTitle: "Diseño de APPS para empresas",
			welcomeDescription: "Creamos aplicaciones según las necesidades y requerimientos de nuestros clientes.",
			contactButton: true
		};

		/***************** scroll to agency function ******************/
		this.scrollToAgency = function() {
			$document.scrollToElement( agency, 80, 1000 );
		};

		/***************** best election options ******************/
		this.bestElectionOptions = [{
	        style: "fa-briefcase",
	        title: "Aplicaciones para la nube",
	        content: "Para empresa que requiera ampliar sus plataformas de gestión.",
			animation: { delay: "0.3s" }
	    }, {
	        style: "fa-bullhorn",
	        title: "Fábrica de software",
	        content: "Servicios de mejora correctiva y evolutiva para sus aplicaciones.",
			animation: { delay: "0.5s" }
	    }, {
	        style: "fa-comment-o",
	        title: "Gestión en la Nube",
	        content: "Para empresa que requiera ampliar sus plataformas de gestión.",
			animation: { delay: "0.7s" }
	    }, {
	        style: "fa-calendar",
	        title: "Videojuegos",
	        content: "Para empresa que requiera ampliar sus plataformas de gestión.",
			animation: { delay: "0.4s" }
	    }, {
	        style: "fa-check-square-o",
	        title: "Diseño personalizado",
	        content: "Customiza hasta el último píxel de tu App. Infinitas Posibilidades.",
			animation: { delay: "0.6s" }
	    }, {
	        style: "fa-cogs",
	        title: "Funciones a medida",
	        content: "Tienes más de 50 funciones predesarrolladas para escoger.",
			animation: { delay: "0.8s" }
	    }];

		/***************** service options ******************/
		this.serviceOptions = [{
	        image: {
	            url: "images/service-1.svg",
	            alt: "service 1"
	        },
	        title: "Desarrollo de Aplicaciones Mobiles",
	        content: "Desarrollamos aplicaciones móviles y plataformas web. Nuestra principal cualidad está en el desarrollo de software a medida de tus necesidades.",
			animation: { delay: "0.3s" }
	    }, {
	        image: {
	            url: "images/service-2.svg",
	            alt: "service 2"
	        },
	        title: "Consultoría Tecnológica",
	        content: "Ofrecemos consultoría tecnológica especializada en movilidad, necesaria previo al desarrollo de cualquier proyecto.",
			animation: { delay: "0.6s" }
	    }, {
	        image: {
	            url: "images/service-3.svg",
	            alt: "service 3"
	        },
	        title: "Marketing y publicidad Movil",
	        content: "Desarrollamos campañas publicitarias para tus APP. Hacemos conocer tu marca en el momento exacto para conseguir un mayor inpacto.",
			animation: { delay: "0.9s" }
	    }];
	}]);

app.controller("aboutController", [
	function() {
		/***************** welcome text options ******************/
		this.welcomeTextOptions = {
			welcomeTitle: "Nosotros",
			welcomeDescription: "¿Quienes somos? y ¿Que hacemos?.",
			contactButton: false
		};

		/***************** accordion options ******************/
		this.accordionTextOptions = [{
			title: "MISIÓN",
			content: [
				"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
				"Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
				"Ming is the best"
			],
			dynamicTarget: "mision"
		}, {
			title: "VISIÓN",
			content: [
				"Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
			],
			dynamicTarget: "vision"
		}, {
			title: "VALORES",
			content: [
				"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
				"Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
			],
			dynamicTarget: "values"
		}];

		this.forRender = {
			type: "accordion"
		};
	}]);

app.controller("serviceController", [
	function() {
		/***************** welcome text options ******************/
		this.welcomeTextOptions = {
			welcomeTitle: "Servicios",
			welcomeDescription: "Diseñamos APPS para empresas.",
			contactButton: false
		};

		/***************** service list options ******************/
		this.serviceOptions = [{
			style: "fa-bullseye",
			title: "Desarrollo de Aplicaciones Mobiles",
			content: "Desarrollamos aplicaciones móviles y plataformas web. Nuestra principal cualidad está en el desarrollo de software a medida de tus necesidades.",
			modal: {
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime.",
				image: {
					url: "images/service-1.svg",
		            alt: "service 1"
		        }
			}
		}, {
			style: "fa-bullhorn",
			title: "Consultoría Tecnológica",
			content: "Ofrecemos consultoría tecnológica especializada en movilidad, necesaria previo al desarrollo de cualquier proyecto.",
			modal: {
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime.",
				image: {
					url: "images/service-2.svg",
		            alt: "service 2"
		        }
			}
		}, {
			style: "fa-paper-plane",
			title: "Marketing y publicidad Movil",
			content: "Desarrollamos campañas publicitarias para tus APP. Hacemos conocer tu marca en el momento exacto para conseguir un mayor impacto.",
			modal: {
				content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non error, reprehenderit iusto illo quo? Molestiae, sed blanditiis officiis qui corporis odit dignissimos numquam, nulla quo commodi, alias in maxime.",
				image: {
		            url: "images/service-3.svg",
		            alt: "service 3"
		        }
			}
		}];

		/***************** set data to modal according to service ******************/
		this.initModal = function( service ) {
			var modal = $( "#myModal" ),
				modalBody = modal.find( ".modal-body" );

			modal.find( ".modal-header .modal-title" ).text( service.title );
			modalBody.find( ".col-md-8" ).text( service.modal.content );
			modalBody.find( ".img-fluid" ).attr({
				src: service.modal.image.url,
				alt: service.modal.image.alt
			});
		};
	}]);

app.controller("contactController", [
	function() {
		/***************** welcome text options ******************/
		this.welcomeTextOptions = {
			welcomeTitle: "Contacto",
			welcomeDescription: "Estamos listos para ayudarte.",
			contactButton: false
		};
	}]);
