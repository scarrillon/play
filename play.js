//var $ = require("bower_components/jquery/dist/jquery.min.js");
//var moment = require("moment");

Utils.mergeConfig(ai.config, ai.predefinedConfig.v1);

$(document).ready(function() {
	"use strict";
	
	class Clock {
		updateClock(time) {
			var now = moment(time),
				second = now.seconds() * 6,
				minute = now.minutes() * 6 + second / 60,
				hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

			$('#hour').css("transform", "rotate(" + hour + "deg)");
			$('#minute').css("transform", "rotate(" + minute + "deg)");
			$('#second').css("transform", "rotate(" + second + "deg)");
		}

		update() {
			var savedTime = this.time();
			$("#time").get(0).innerHTML = moment(savedTime).format("HH:mm:ss");
			this.updateClock(savedTime);
			setTimeout(() => this.update(), 1000);
		}
		
		/**
		* Adjust time if set to sequential so that it can be displayed as seconds
		*/
		time() {
			if (ai.config.time.value = ai.config.time.options.sequence.value) {
				return window.time() * 1000;
			}
		}
	}
	
	new Clock().update();
});
