# knp-bin

> [knp](http://nlp.ist.i.kyoto-u.ac.jp/index.php?KNP) is a Japanese Dependency and Case Structure Analyzer.


## Install

```
$ npm install --save knp-bin
```


## Usage

```js
const { exec } = require('child_process');
const juman = require('juman-bin');
const knp = require('knp-bin');

exec(`echo ラーメン大好き | ${juman} | ${knp}`, (err, stdout) => {
  console.log(stdout);
  // =>
  // # S-ID:1 KNP:4.17-CF1.1 DATE:2017/05/11 SCORE:-8.61202
  // ラーメン═════╗　<体言>
  //           大好き<用言:形><格解析結果:ガ/ラーメン;カラ/-;ガ２/-;ノ/->
  // EOS
});
```

## License

MIT