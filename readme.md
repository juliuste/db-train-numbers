# db-train-numbers

Fetch [DB](https://www.bahn.de) long distance train numbers for a given time interval.

[![npm version](https://img.shields.io/npm/v/db-train-numbers.svg)](https://www.npmjs.com/package/db-train-numbers)
[![Build Status](https://travis-ci.org/juliuste/db-train-numbers.svg?branch=master)](https://travis-ci.org/juliuste/db-train-numbers)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/db-train-numbers.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/db-train-numbers.svg)](https://david-dm.org/juliuste/db-train-numbers)
[![license](https://img.shields.io/github/license/juliuste/db-train-numbers.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install --save db-train-numbers
```

## Usage

```js
const trainNumbers = require('db-train-numbers')

const start = new Date('2018-06-19T05:30:00')
const end = new Date('2018-06-19T08:30:00')

const opt = { // defaults
    interval: 10 // lookup train numbers every * minutes between start and end    
}

trainNumbers(start, end, opt)
.then(console.log)
.catch(console.error)
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in an array of train objects which looks as follows:

```js
[
    {
        train: "IC 528",
        journeyRef: "84/324965/18/19/80"
    },
    {
        train: "EN 40467",
        journeyRef: "84/267796/18/19/80"
    },
    {
        train: "IC 516",
        journeyRef: "84/257824/18/19/80"
    },
    {
        train: "IC 3518",
        journeyRef: "84/252900/18/19/80"
    },
    {
        train: "ICE 71",
        journeyRef: "84/215926/18/19/80"
    },
    {
        train: "EC 7",
        journeyRef: "84/215818/18/19/80"
    }
    // …
]
```

Fetch further information for trains using the `journeyRef` attribute and the `journeyLeg` method provided by the [`db-hafas`](https://github.com/derhuerst/db-hafas) module.

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/db-train-numbers/issues).
