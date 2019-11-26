function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZMM_GW_RELAT_SLOWMOVING_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}