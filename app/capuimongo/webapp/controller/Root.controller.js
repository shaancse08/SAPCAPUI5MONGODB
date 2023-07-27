sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "cap/ui/mongo/capuimongo/model/formatter",
    "sap/ui/core/Fragment",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, formatter, Fragment) {
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

      onCreateEmployee: async function (oEvent) {
        if (!this.oCreateFragment) {
          this.oCreateFragment = await this.loadFragment("CreateEmployee");
        }
        this.oCreateFragment.open();
      },

      onSaveEmployeeDetails: function (oEvent) {
        const oView = this.getView();
        const oEmployeePayload = {
          fName: oView.byId("idFNameText").getValue(),
          lName: oView.byId("idlNameText").getValue(),
          DOB: oView.byId("idDOBText").getValue(),
          email: oView.byId("idEmailText").getValue(),
          phone: oView.byId("idPhoneNumberText").getValue(),
        };

        const oAddressPayload = {
          street: oView.byId("idStreetText").getValue(),
          city: oView.byId("idCityText").getValue(),
          pincode: oView.byId("idPinCodeText").getValue(),
          country: oView.byId("idCountryText").getValue(),
          landmark: oView.byId("idLandMarkText").getValue(),
        };

        const oModel = oView.getModel();


      },

      onDialogClose: function (oEvent) {
        oEvent.getSource().close();
      },

      loadFragment: async function (sFragmentName) {
        const sFragmentPath = `cap.ui.mongo.capuimongo.fragments.${sFragmentName}`;
        const oFragment = await Fragment.load({
          name: sFragmentPath,
          id: this.getView().getId(),
          controller: this,
        });
        this.getView().addDependent(oFragment);
        return oFragment;
      },

      // postDataToBackend: function(sPath, oPayload, )
    });
  }
);
