function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZMM_CDS_RELAT_SLOWMOVING/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}