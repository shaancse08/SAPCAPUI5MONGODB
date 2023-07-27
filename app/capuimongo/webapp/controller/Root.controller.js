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

      onSaveEmployeeDetails: async function () {
        const oView = this.getView();
        const oEmployeePayload = {
          fName: oView.byId("idFNameText").getValue(),
          lName: oView.byId("idlNameText").getValue(),
          DOB: oView.byId("idDOBText").getValue(),
          email: oView.byId("idEmailText").getValue(),
          phoneNumber: parseInt(oView.byId("idPhoneNumberText").getValue()),
          age: null,
          address__id: "",
        };

        const oAddressPayload = {
          street: oView.byId("idStreetText").getValue(),
          city: oView.byId("idCityText").getValue(),
          pincode: parseInt(oView.byId("idPinCodeText").getValue()),
          country: oView.byId("idCountryText").getValue(),
          landmark: oView.byId("idLandMarkText").getValue(),
        };

        const sAddressId = await this.postDataToBackend(
          "/Address",
          oAddressPayload
        );
        oEmployeePayload.address__id = sAddressId;
        this.postDataToBackend("/EmployeeDetails", oEmployeePayload);
        this.oCreateFragment.close();
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

      postDataToBackend: async function (sPath, oPayload) {
        const oModel = this.getView().getModel();

        const oBindingContext = oModel.bindList(sPath);
        const oCreateContext = oBindingContext.create(oPayload);
        const aResult = await oCreateContext.created();
        if (sPath === "/Address") {
          return oCreateContext.sPath
            .split("(")[1]
            .split(")")[0]
            .replaceAll("'", "");
        }
        return aResult;

        // return new Promise((resolve, reject) => {

        //     .then(function (oSuccessData) {
        //       resolve(oSuccessData);
        //     })
        //     .catch(function (oErrorData) {
        //       reject(oErrorData);
        //     });
        // });
      },
    });
  }
);
