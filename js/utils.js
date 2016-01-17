//require jquery as $
"use strict";

class ConfigurationException extends Error {
	constructor() {
		super("invalid configuration");
	}
}

class AbstractMethodError extends Error {
	constructor() {
		super("this abstract method must be implemented");
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
