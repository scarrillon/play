//require jquery as $
"use strict";

class ConfigurationException extends Error {
	constructor() {
		super("invalid configuration");
	}
}

class Utils {
	static * sequenceGenerator() {
		var i = 0;
		while (true) {
			yield i++;
		}
	}
	
	static mergeConfig(configToOverride, newConfig) {
		$.extend(true, configToOverride, newConfig);
	}
}
