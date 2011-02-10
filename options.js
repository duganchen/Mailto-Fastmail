$(function() {
	var domains = [
		'123mail.org',
		'150mail.com',
		'150ml.com',
		'16mail.com',
		'2-mail.com',
		'4email.net',
		'50mail.com',
		'airpost.net',
		'allmail.net',
		'bestmail.us',
		'cluemail.com',
		'elitemail.org',
		'emailcorner.net',
		'emailengine.net',
		'emailengine.org',
		'emailgroups.net',
		'emailplus.org',
		'emailuser.net',
		'eml.cc',
		'fastem.com',
		'fast-email.com',
		'fastemail.us',
		'fastemailer.com',
		'fastest.cc',
		'fastimap.com',
		'fast-mail.org',
		'fastmail.to',	
		'fastmail.cn',
		'fastmail.com.au',
		'fastmail.co.uk', 
		'fastmail.fm',
		'fastmail.us',
		'fastmailbox.net',
		'fastmessaging.com', 
		'fea.st',
		'f-m.fm',
		'fmail.co.uk',
		'fmailbox.com',
		'fmgirl.com',
		'fmguy.com',
		'ftml.net',
		'hailmail.net', 
		'h-mail.us',
		'imap.cc',
		'imap-mail.com',
		'imapmail.org',
		'inoutbox.com',
		'internet-e-mail.com',
		'internetemails.net',
		'internet-mail.org', 
		'internetmailing.net', 
		'jetemail.net', 
		'justemail.net', 
		'letterboxes.org', 
		'mailandftp.com', 
		'mailas.com', 
		'mailbolt.com', 
		'mailc.net', 
		'mailcan.com', 
		'mail-central.com', 
		'mailforce.net', 
		'mailftp.com', 
		'mailhaven.com', 
		'mailingaddress.org', 
		'mailite.com', 
		'mailmight.com', 
		'mailnew.com', 
		'mail-page.com',
		'mailsent.net', 
		'mailservice.ms', 
		'mailup.net', 
		'mailworks.org', 
		'ml1.net', 
		'mm.st',
		'myfastmail.com',
		'mymacmail.com',
		'nospammail.net', 
		'ownmail.net', 
		'petml.com', 
		'postinbox.com', 
		'postpro.net',
		'proinbox.com',
		'promessage.com',
		'realemail.net', 
		'reallyfast.biz', 
		'reallyfast.info', 
		'rushpost.com',
		'sent.as',
		'sent.at',
		'sent.com',
		'speedpost.net',
		'speedymail.org', 
		'ssl-mail.com', 
		'swift-mail.com',
		'the-fastest.net', 
		'theinternetemail.com', 
		'the-quickest.com', 
		'veryfast.biz', 
		'veryspeedy.net',
		'warpmail.net',
		'xsmail.com',
		'yepmail.net',
		'your-mail.com',
	];
	var defaultMessage = function() {
		$('#message').text('Note: the default settings work for everyone.');
	}

	var validateDomain = function() {
		var i = 0;
		var domain = $('input[name=domain]');
		var value = domain.val();
		var found = false;
		for (i = 0; i < domains.length; i++) {
			if (domains[i] === value) {
				found = true;
				break;
			}
		}
		if (!found) {
			domain.val('fastmail.fm');
			$(".domain").text("fastmail.fm");
		}
	}

	if (localStorage['domain'] === undefined) {
		localStorage['domain'] = 'fastmail.fm';
	}

	$('input[name=domain]').val(localStorage['domain']);
	$('.domain').text(localStorage['domain']);

	if (localStorage['site'] === undefined) {
		localStorage['site'] = 'ssl';
	}

	$('input[value=' + localStorage['site'] + ']').attr("checked", true);

	$('button').button();

	$('input[name=domain]').autocomplete({
		select: function(event, ui) {
			$('.domain').text(ui.item.value);
		},

		change: function(event, ui) {
			validateDomain();
		},
		source: domains
	});

	$('input[name=domain]').keyup(function() {
		defaultMessage();
	});

	$('#defaults').click(function() {
		$('input[name=domain]').val('fastmail.fm');
		$('input[value=ssl]').attr('checked', true);
		defaultMessage();
	});

	$('#save').click(function() {
		validateDomain();
		localStorage['domain'] = $('input[name=domain]').val();
		localStorage['site'] = $('input:radio[name=site]:checked').val();
		$('#message').text('Settings saved.');
	});

	$('input:radio[name=site]').change(function() {
		defaultMessage();
	});

});
