app.component("mingFooter", {
    templateUrl: "js/components/mingFooter/mingFooter.html",
    controller: "mingFooterController"
});

app.controller("mingFooterController", [
    function() {
        var self = this;

        this.$onInit = function() {
            /***************** social network icons ******************/
            self.socialNetworks = [{
                style: "fa-facebook",
        		hasUrl: {
        			url: "https://www.facebook.com/",
                    target: "_blank"
        		}
            }, {
                style: "fa-twitter",
        		hasUrl: {
        			url: "https://twitter.com/",
                    target: "_blank"
        		}
            }, {
                style: "fa-youtube",
        		hasUrl: {
        			url: "https://www.youtube.com/",
                    target: "_blank"
        		}
            }, {
                style: "fa-instagram",
        		hasUrl: {
        			url: "https://www.instagram.com/",
                    target: "_blank"
        		}
            }];

            /***************** init go top icon ******************/
        	self.goTopIcon = [{
        		style: "fa-arrow-circle-up",
                forRender: {
                    type: "go-top"
                }
        	}];
        };
    }]);
