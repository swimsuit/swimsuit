# Swimsuit

Detect features using Promise

[![Join the chat at https://gitter.im/swimsuit/swimsuit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/swimsuit/swimsuit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM](https://img.shields.io/npm/v/swimsuit.svg)](https://www.npmjs.com/package/swimsuit)
[![Dependency Status](https://img.shields.io/david/swimsuit/swimsuit.svg)](https://david-dm.org/swimsuit/swimsuit)
[![Dev Dependency Status](https://img.shields.io/david/dev/swimsuit/swimsuit.svg)](https://david-dm.org/swimsuit/swimsuit#info=devDependencies&view=table)
[![Build Status](https://img.shields.io/codeship/1ac0e5b0-a2ba-0132-7804-02cfa213237c.svg)](https://codeship.com/projects/65816/)
[![Build Status](https://travis-ci.org/swimsuit/swimsuit.svg?branch=master)](https://travis-ci.org/swimsuit/swimsuit)
[![Build status](https://ci.appveyor.com/api/projects/status/husqw2o1u2xirdi6?svg=true)](https://ci.appveyor.com/project/eddiemoore/swimsuit)
[![Code Quality](https://img.shields.io/codacy/1673d58a3a564253a83189ba53dd68c6.svg)](https://www.codacy.com/app/swimsuit/swimsuit)
[![Code Coverage](https://img.shields.io/codecov/c/github/swimsuit/swimsuit.svg)](http://codecov.io/github/swimsuit/swimsuit?branch=master)

## Usage

### Add a test

```js
import Swimsuit from 'swimsuit'

Swimsuit.supports('websockets', () => {
  return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined'
})
```

### Check new support

```js
Swimsuit.websockets.then(() => {
  // It supports websockets
}).catch(() => {
  // It doesn't support websockets
})
```
