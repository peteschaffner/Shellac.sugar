/**
 * Cycles through the common color formats with opt+cmd+j/k
 * Uses Russ Porosky's color2color function: http://indyarmy.com/
 */
 
 var color = loadLibrary('color2color');
 
 action.canPerformWithContext = function(context, outError) {
	var range = context.selectedRanges[0],
		selection = context.substringWithRange(range);
	
	// Must have a selection and a setup direction
	if (range.length > 0 && !!action.setup.direction) {
		// If selection is a color type we understand return true
		return (/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(selection)) || (/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/.test(selection)) || (/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/.test(selection)) || (/^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/.test(selection)) || (/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.test(selection)) || (/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/.test(selection));
	} else {
		return false;
	}
};

action.performWithContext = function(context, outError) {
	var range = context.selectedRanges[0],
		selection = context.substringWithRange(range), 
		colorFormats = ['hex', 'rgb', 'rgba', 'hsl', 'hsla'],
		curFormat,
		nextFormat;
		
		// Capture our current format
		if (/^#/.test(selection)) {
			curFormat = 'hex';
		} else if (/^rgb\(/.test(selection)) {
			curFormat = 'rgb'
		} else if (/^rgba/.test(selection)) {
			curFormat = 'rgba'
		} else if (/^hsl\(/.test(selection)) {
			curFormat = 'hsl'
		} else {
			curFormat = 'hsla'
		}
		
		// Cycle forward
		if (action.setup.direction === 'next') {
			if (colorFormats.indexOf(curFormat) + 1 === colorFormats.length) {
				nextFormat = colorFormats[0]
			} else {
				nextFormat = colorFormats[colorFormats.indexOf(curFormat) + 1];
			}
		} else { // Cycle backward
			if (colorFormats.indexOf(curFormat) === 0) {
				nextFormat = colorFormats[colorFormats.length - 1]
			} else {
				nextFormat = colorFormats[colorFormats.indexOf(curFormat) - 1];
			}
		}
		
		var recipe = new CETextRecipe();
		recipe.replaceRange(range, color.color2color(selection, nextFormat));
		
		// Apply the changes!
		return context.applyTextRecipe(recipe);
}