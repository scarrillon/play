"use strict";

var ai = {
	timeIterator : Utils.sequenceGenerator(),
	config : {
		time : {
			value : "sequence",
			description : "defines how the time is flowing",
			options : {
				sequence : {value : "sequence", description : "time is a sequence of natural numbers"},
				natural : {value : "natural", description : "standard javascript time"}
			}
		}
	},
	predefinedConfig: {
		v1: {
			time: {value: "sequence"}
		}
	}
};

function time() {
	switch (ai.config.time.value) {
		case ai.config.time.options.sequence.value:
			return ai.timeIterator.next().value;
			
		case ai.config.time.options.natural.value:
			return Date.now();
			
		default:
			throw new ConfigurationException("invalid configuration")
	}
}