$(function() {
	$.each($("a[href]"), function(indexInArray, valueOfElement) {
		var url = "http://www.fastmail.fm/action/compose/"
		var href = null;
		var parameters = null;
		href = $(this).attr("href").split(':', 2);
		if (href.length === 2 && href[0] === 'mailto') {
			parameters = href[1].split('?');
			url = url + '?to=' + parameters[0];
			if (parameters.length > 1) {
				url = url + '&' + parameters[1];
			}
			$(this).attr("href", url);
		}
	});
});
