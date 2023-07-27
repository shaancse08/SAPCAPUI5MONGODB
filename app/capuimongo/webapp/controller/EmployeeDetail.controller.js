sap.ui.define(
  ["sap/ui/core/mvc/Controller", "cap/ui/mongo/capuimongo/model/formatter"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, formatter) {
    "use strict";

    return Controller.extend(
      "cap.ui.mongo.capuimongo.controller.EmployeeDetail",
      {
        formatter: formatter,
        onInit: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.attachRoutePatternMatched(this.onEmployeeDetailsLoad, this);
        },
        onEmployeeDetailsLoad: function (oEvent) {
          if (oEvent.getParameter("name") === "EmpDetail") {
            const { empId } = oEvent.getParameter("arguments");
            const oView = this.getView();
            const oObjectPage = oView.byId("idEmployeeDetailObjectPage");
            oObjectPage.bindElement(`/EmployeeDetails('${empId}')`);
          }
        },
      }
    );
  }
);
