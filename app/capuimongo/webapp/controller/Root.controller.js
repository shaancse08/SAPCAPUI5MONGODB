sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "cap/ui/mongo/capuimongo/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("cap.ui.mongo.capuimongo.controller.Root", {
            formatter: formatter,
            onInit: function () {

            }
        });
    });
