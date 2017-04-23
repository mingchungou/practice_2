"use strict";

app.component("mingRoot", {
    templateUrl: "js/components/mingRoot/mingRoot.html",
    controller: "mingRootController",
    bindings: {
        currentPage: "@"
    }
});

app.controller("mingRootController", [function() {}]);
