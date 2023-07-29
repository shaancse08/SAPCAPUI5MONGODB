sap.ui.define([], function () {
  "use strict";

  return {
    getDateFormatted: function (sDate) {
      const [day, month, date, year, time, timezone] = new Date(
        sDate.split("T")[0]
      )
        .toString()
        .split(" ");
      return `${day} ${month} ${date} ${year}`;
    },
    getPhoneNumberFromatted: function(sNumber){
        return sNumber.toString().replaceAll(",", "")
    }
  };
});
