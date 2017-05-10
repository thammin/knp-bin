'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/thammin/knp-bin/${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}macos/knp`, 'darwin')
	.dest(path.resolve(__dirname, '../vendor'))
	.use('knp');