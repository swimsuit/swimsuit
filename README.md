# Speedo
Detect features using Promise

[![Dependency Status](https://gemnasium.com/migme/speedo.svg)](https://gemnasium.com/migme/speedo)
[![Build Status](https://img.shields.io/codeship/274bbce0-ebd2-0132-1b3d-5ecc4fff82a0.svg)](https://codeship.com/projects/81006/)
[![Code Quality](https://img.shields.io/codacy/77847636043541a1976f3cfe285d4f06.svg)](https://www.codacy.com/app/Migme/speedo)
[![Code Coverage](http://codecov.io/github/migme/speedo/coverage.svg?branch=master)](http://codecov.io/github/migme/speedo?branch=master)

## Usage

### Add a test

```js
import Speedo from 'speedo'

Speedo.supports('websockets', () => {
  return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined'
})
```

### Check new support

```js
Speedo.websockets.then(() => {
  // It supports websockets
}).catch(() => {
  // It doesn't support websockets
})
```
