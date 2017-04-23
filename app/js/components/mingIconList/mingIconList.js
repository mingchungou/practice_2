app.component("mingIconList", {
    templateUrl: "js/components/mingIconList/mingIconList.html",
    controller: "mingIconListController",
	bindings: {
        iconType: "@",
        icons: "="
    }
});

app.controller("mingIconListController", [function() {}]);
