getCharCode : function(event) {
	if (typeof event.charCode === "number") {
		return event.charCode;
	} else {
		return event.KeyCode;//legacy IE browsrs
	}

};