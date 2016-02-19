'use strict';

var through = require('through2');
var path = require('path');


module.exports = function logify(file, options)
{
	if (!/\.js$/.test(file))
	{
		return through();
	}

	options = options || {};
	options.base = options.base || '';
	options.console = options.console || 'logify-console';

	var moduleName = path.relative(options.base, file).replace(/\.js$/, '');

	var first = true;

	function push(chunk, enc, next)
	{
		if (first)
		{
			first = false;

			this.push('var console = require(\'' + options.console + '\')(\'' + moduleName + '\');\n');
		}

		this.push( chunk );
		next();
	}


	return through(push);
}
