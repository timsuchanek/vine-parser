var request = require('request');
var fs = require('fs');

module.exports = function(id) {
	return new Promise(function(resolve, reject) {
		var options = {
			url: 'https://vine.co/v/' + id,
			header: {
				'User-Agent': 'Googlebot'
			}
		};

		request(options, function(err, res, body) {

			var split = '<script type="application/ld+json">';
			var x = body.split(split)[1];
			var y = x.split('</script>')[0];
			var json = null;
			try {
				json = JSON.parse(y);
			} catch (e) {
			
			}

			if (json !== null) {
				return resolve(json);
			}

			reject('Couldnt parse JSON');
		});
	});
}

