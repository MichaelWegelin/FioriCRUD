jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ZMW_I_EPM_SO in the list
// * All 3 ZMW_I_EPM_SO have at least one to_Item

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/wegelin/FioriCRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/wegelin/FioriCRUD/test/integration/pages/App",
	"de/wegelin/FioriCRUD/test/integration/pages/Browser",
	"de/wegelin/FioriCRUD/test/integration/pages/Master",
	"de/wegelin/FioriCRUD/test/integration/pages/Detail",
	"de/wegelin/FioriCRUD/test/integration/pages/Create",
	"de/wegelin/FioriCRUD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.wegelin.FioriCRUD.view."
	});

	sap.ui.require([
		"de/wegelin/FioriCRUD/test/integration/MasterJourney",
		"de/wegelin/FioriCRUD/test/integration/NavigationJourney",
		"de/wegelin/FioriCRUD/test/integration/NotFoundJourney",
		"de/wegelin/FioriCRUD/test/integration/BusyJourney",
		"de/wegelin/FioriCRUD/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});