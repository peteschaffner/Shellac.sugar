/**
 * This action helps automatically format block statements (much like what is done in TextMate)
 */
 
action.canPerformWithContext = function (context, outError) {
	// Grab the current cursor range
	var range = context.selectedRanges[0];
	// Find the character to the left of our cursor
	var prevChar = context.substringWithRange(new Range(range.location - 1, 1));
	
	console.log('hi from pretty-block');
	
	return prevChar === action.setup.character;
};

action.performWithContext = function (context, outError) {
	var snippet = new CETextSnippet('\n\t$1\n');
	
	return context.insertTextSnippet(snippet);
};