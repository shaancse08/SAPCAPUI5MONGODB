sap.ui.define([],function(){"use strict";return{getDateFormatted:function(t){const[e,n,r,i,o,u]=new Date(t.split("T")[0]).toString().split(" ");return`${e} ${n} ${r} ${i}`},getPhoneNumberFromatted:function(t){return t.toString().replaceAll(",","")}}});