function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZSD_GW_HISTORICO_VENDAS_SRV_01/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}