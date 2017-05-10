'use strict';
const BinBuild = require('bin-build');
const log = require('logalot');
const bin = require('.');

bin.run(err => {
	if (err) {
		log.warn(err.message);
		log.warn('knp pre-build test failed');
		log.info('compiling from source');

		new BinBuild()
			.src('http://nlp.ist.i.kyoto-u.ac.jp/DLcounter/lime.cgi?down=http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/knp/knp-4.17.tar.bz2&name=knp-4.17.tar.bz2')
			.cmd(`./configure --with-system-zlib --prefix="${bin.dest()}" --bindir="${bin.dest()}"`)
			.cmd('make install')
			.run(err => {
				if (err) {
					log.error(err.stack);
					return;
				}

				log.success('knp built successfully');
			});

		return;
	}

	log.success('knp pre-build test passed successfully');
});