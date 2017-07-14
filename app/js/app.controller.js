
"use strict";

app.controller("mainController", ["$window", "$document", "$scope",
	function($window, $document, $scope) {
		var self = this;
		$scope.animated = false;

		this.socialNetworks = [{
			style: "fa-facebook",
			url: "https://www.facebook.com/"
		}, {
			style: "fa-twitter",
			url: "https://twitter.com/"
		}, {
			style: "fa-youtube",
			url: "https://www.youtube.com/"
		}, {
			style: "fa-instagram",
			url: "https://www.instagram.com/"
		}];

		this.animateHeader = function(status) {
			$scope.$apply(function() {
				$scope.animated = status;
			});
		};

		//Function for animating header and go top icon according to scroll position.
		var xWindow = angular.element($window),
			goTopElem = angular.element($document[0].querySelector(".go-top")),
			scroll;

		xWindow.scroll(function() {
			scroll = xWindow.scrollTop();

			if (scroll >= 50) {
				goTopElem.addClass("show");
			} else {
				goTopElem.removeClass("show");
			}

			if (scroll >= 80) {
				self.animateHeader(true);
			} else {
				self.animateHeader(false);
			}
		});

		goTopElem.click(function() {
			$document.scrollTopAnimated(0, 1000);
		});
	}]);
