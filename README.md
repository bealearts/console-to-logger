# logify [![Build Status](https://travis-ci.org/bealearts/logify.svg)](https://travis-ci.org/bealearts/logify) [![npm version](https://badge.fury.io/js/logify.svg)](http://badge.fury.io/js/logify)

A Browserify plugin which wraps console.log() etc, to control and format their output


## Installation

```shell
npm install logify --save-dev
```

With default console replacement

```shell
npm install logify-console --save
```


## Usage
```js

var b = browserify({...});

b.plugin('logify', {
  'base': 'app/',
  'console': 'logify-console'
});

```

