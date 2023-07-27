sap.ui.define(
  ["sap/ui/core/mvc/Controller", "cap/ui/mongo/capuimongo/model/formatter"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("cap.ui.mongo.capuimongo.controller.Root", {
      formatter: formatter,
      onInit: function () {
        this.oRouter = this.getOwnerComponent().getRouter();
      },
      onEmployeePress: function (oEvent) {
        const oNextUIState = this.getOwnerComponent()
          .getHelper()
          .getNextUIState(1);
        const { _id } = oEvent.getSource().getSelectedContexts()[0].getObject();
        this.oRouter.navTo("EmpDetail", {
          layout: oNextUIState.layout,
          empId: _id,
        });
      },
    });
  }
);
