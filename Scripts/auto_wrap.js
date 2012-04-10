/**
 * This action auto pairs braces, or wraps the current selection in braces
 * (much like TextMate and Chocolat)
 */

action.canPerformWithContext = function(context, outError) {
	// Require a character to be specified in the XML <setup> tag
	return !!action.setup.character;
};

action.performWithContext = function (context, outError) {
	var wrapper = action.setup.character;
	// Grab our current selected range
	var range = context.selectedRanges[0];
	
	if (range.length > 0) {
		console.log('we have a selection')
	} else {
		console.log('just inserting a character')
	}

};