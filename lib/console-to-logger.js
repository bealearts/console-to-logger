'use strict';

var through = require('through2');
var path = require('path');


module.exports = function consoleToLogger(bundle, options) {

	options = options || {};
	options.global = true;
	
	bundle.transform(options, consoleToLoggerTransform);

};




function consoleToLoggerTransform(file, options)
{
	if (!/\.js$/.test(file))
	{
		return through();
	}

	options = options || {};
	options.base = options.base || '';
	options.console = options.console || '';

	var moduleName = path.relative(options.base, file).replace(/\.js$/, '');

	var first = true;

	function push(chunk, enc, next)
	{
		if (first && moduleName.indexOf(options.console) === -1 && moduleName.indexOf('browserify') === -1)
		{
			first = false;

			this.push('var console = require(\'' + options.console + '\')(\'' + moduleName + '\');\n');
		}

		this.push(chunk);
		next();
	}


	return through(push);
}
