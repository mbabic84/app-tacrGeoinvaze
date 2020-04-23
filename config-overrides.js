var path = require('path');

module.exports = function override(config, env) {
	// TODO comment when using package from npm
	config.resolve = {
		alias: {
			// "@gisatcz/ptr-charts": "C:/Users/pvlach/DATA/ptr-charts/dist",
			// "@gisatcz/ptr-maps": "C:/Users/pvlach/DATA/ptr-maps/dist",
			// "@gisatcz/ptr-core": "C:/Users/pvlach/DATA/ptr-core",
			// "@gisatcz/ptr-components": "C:/Users/pvlach/DATA/ptr-components/dist",
			// "@gisatcz/ptr-deprecated": "C:/Users/pvlach/DATA/ptr-deprecated/dist",
			"@gisatcz/ptr-state": "T:/_repo/ptr-state",
		}
	};

	return config;
};