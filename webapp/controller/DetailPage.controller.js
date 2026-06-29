sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.zlrop.zlrop.controller.DetailPage", {
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteDetailPage").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
            var eId = oEvent.getParameter("arguments").ID;
            this.getView().bindElement({
                path: "/Employees(" + eId + ")"
            });
        },
        onNavBack: function () {

            history.back();

        }

    });
});