
"use strict";

app.controller("mainController", ["$window", "$document", "$scope",
	function($window, $document, $scope) {
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

		//Function for animating header and go top icon according to scroll position.
		let xWindow = angular.element($window),
			goTopElem = angular.element($document[0].querySelector(".go-top"));
		$scope.animated = false;

		let animateHeader = (status) => {
			$scope.$apply(() => {
				$scope.animated = status;
			});
		};

		xWindow.scroll(() => {
			let scroll = xWindow.scrollTop();

			if (scroll >= 50) {
				goTopElem.addClass("show");
			} else {
				goTopElem.removeClass("show");
			}

			if (scroll >= 80) {
				animateHeader(true);
			} else {
				animateHeader(false);
			}
		});

		goTopElem.click(() => {
			$document.scrollTopAnimated(0, 1000);
		});
	}]);
