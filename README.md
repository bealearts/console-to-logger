# console-to-logger [![Build Status](https://travis-ci.org/bealearts/console-to-logger.svg)](https://travis-ci.org/bealearts/console-to-logger) [![npm version](https://badge.fury.io/js/console-to-logger.svg)](http://badge.fury.io/js/console-to-logger)

A Browserify plugin which adds a custom console implementation to modules, to control and format their console.log() etc output


## Installation

```shell
npm install console-to-logger --save-dev
```

With default console replacement

```shell
npm install simple-logging-console --save
```


## Usage
```js

var b = browserify({...});

b.plugin('console-to-logger', {
  'base': 'app/',
  'console': 'simple-logging-console'
});

```

