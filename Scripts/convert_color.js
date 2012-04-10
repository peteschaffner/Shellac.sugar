/**
 * Cycles through the common color formats with opt+cmd+j/k
 * Uses Russ Porosky's color2color function: http://indyarmy.com/
 */
 
 var color2color = loadLibrary('color2color');
 
 action.canPerformWithContext = function(context, outError) {
	var range = context.selectedRanges[0],
		selection = context.substringWithRange(range));
	
	console.log(selection);	
	
	if (range.length > 0) {
		// If selection is a color type we understand return true
		return (/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(selection) || (/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/.test(selection) || (/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/.test(selection) || (/^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/.test(selection) || (/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.test(selection) || (/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/.test(selection);
	}
};

action.performWithContext = function(context, outError) {
	var range = context.selectedRanges[0],
		selection = context.substringWithRange(range));
	console.log(selection);
}