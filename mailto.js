$(function() {
	$.each($('a[href^="mailto:"]'), function(indexInArray, valueOfElement) {
		var url = "http://www.fastmail.fm/action/compose/"
		var href = $(this).attr("href").split(':', 2);
		var parameters = href[1].split('?');
		url = url + '?to=' + parameters[0];
		if (parameters.length > 1) {
			url = url + '&' + parameters[1];
		}
		$(this).attr("href", url);
	});
});
