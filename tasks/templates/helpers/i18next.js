const i18n = require('i18next');

module.exports.register = handlebars => {
	const options = {
		lng: 'en-US',
		resGetPath: 'app/locales/__lng__/__ns__.json',
		getAsync: false,
		// debug options
		sendMissing: true,
		debug: true
	};

	i18n.init(options, () => {
		handlebars.registerHelper('t', key => {
			const result = i18n.t(key, {
				// default dev
				fallbackLng: 'en-US'
			});
			return new handlebars.SafeString(result);
		});
	});

	i18n.loadNamespace('navigation');
};
