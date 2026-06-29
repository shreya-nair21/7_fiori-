sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.zlrop.zlrop.controller.MainPage", {
        onInit() {
        },

        onRowClick: function(oEvent){
    console.log("Row clicked");

    var employeeID = oEvent.getParameter("rowContext").getObject().EmployeeID;
    console.log(employeeID);

    this.getOwnerComponent().getRouter().navTo("RouteDetailPage", {
        EmployeeID: employeeID
    });
}
    });
});