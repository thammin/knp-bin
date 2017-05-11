'use strict';
const BinBuild = require('bin-build');
const log = require('logalot');
const bin = require('.');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

if (argv.compile) {
  compileFromSrc(path.resolve(__dirname, '../vendor', process.platform));

} else {
  bin.run(err => {
    if (err) {
      log.warn(err.message);
      log.warn('knp pre-build test failed');

      compileFromSrc(bin.dest());
      return;
    }

    log.success('knp pre-build test passed successfully');
  });
}

function compileFromSrc(dest) {
  log.info('compiling from source');

  new BinBuild()
    .src('http://nlp.ist.i.kyoto-u.ac.jp/DLcounter/lime.cgi?down=http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/knp/knp-4.17.tar.bz2&name=knp-4.17.tar.bz2')
    .cmd(`./configure --with-system-zlib --prefix="${dest}" --bindir="${dest}"`)
    .cmd('make install')
    .run(err => {
      if (err) {
        log.error(err.stack);
        return;
      }

      log.success('knp built successfully');
    });
}
