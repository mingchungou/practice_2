
"use strict";

app.component("appAbout", {
    templateUrl: "js/components/about/about.component.html",
    controller: "aboutController"
});

app.controller("aboutController", function() {
    var self = this;

    //Function for initializing accordion.
    this.initAccordion = function() {
        angular.element("#accordion .card:first-child div").addClass("show");
    };

    this.$onInit = function() {
        self.accordionOptions = [{
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
    };
});
