sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zhist_vendas.historico_vendas.controller.View1", {
		onInit: function () {

		},

		onFilter: function () {
			var smartFilterBar = this.getView().byId("smartFilterBar"),
				oRelatorioModel = this.getView().getModel("default"),
				smartFilters = smartFilterBar.getFilters(),
				// somenteExibir =  this.byId("cbSomenteExibir").getSelected(),
				filters = smartFilters.map(function (property) {
					return property.aFilters;
				});

			var oView = this.getView(),
				oModel = oView.getModel();

			// oModel.read("/HistoricoComprasSet", {
			// 	filters: smartFilters,
			// 	success: function (oData) {
			// 		oRelatorioModel.setProperty("/ALV", oData.results);

			// 	}.bind(this),
			// 	error: function (oErr) {

			// 	}

			// });

		}

	});
});