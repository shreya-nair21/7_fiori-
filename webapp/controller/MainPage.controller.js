sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.zlrop.zlrop.controller.MainPage", {
        onInit() {
        },

        onRowClick: function(oEvent) {
            var oTable = oEvent.getSource();
            // var oSelectedItem = oTable.getSelectedItem();
            console.log(oEvent.getParameters("rowContext"));
            
        }
    });
});