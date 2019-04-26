jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/wegelin/FioriCRUD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/wegelin/FioriCRUD/test/integration/pages/App",
	"de/wegelin/FioriCRUD/test/integration/pages/Browser",
	"de/wegelin/FioriCRUD/test/integration/pages/Master",
	"de/wegelin/FioriCRUD/test/integration/pages/Detail",
	"de/wegelin/FioriCRUD/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.wegelin.FioriCRUD.view."
	});

	sap.ui.require([
		"de/wegelin/FioriCRUD/test/integration/NavigationJourneyPhone",
		"de/wegelin/FioriCRUD/test/integration/NotFoundJourneyPhone",
		"de/wegelin/FioriCRUD/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});