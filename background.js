$(function() {
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
		var siteValue = null;
		var domainValue = null;
		if (localStorage['site'] === undefined) {
			siteValue = 'ssl';
		}
		else {
			siteValue = localStorage['site'];
		}

		if (localStorage['domain'] === undefined) {
			domainValue = 'fastmail.fm';	
		}
		else {

			domainValue = localStorage['domain'];
		}

		sendResponse({
			site: siteValue,
			domain: domainValue
		});
	});
});




