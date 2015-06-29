# Swimsuit

Detect features using Promise

[![Join the chat at https://gitter.im/swimsuit/swimsuit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/swimsuit/swimsuit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://gemnasium.com/swimsuit/swimsuit.svg)](https://gemnasium.com/swimsuit/swimsuit)
[![Build Status](https://img.shields.io/codeship/274bbce0-ebd2-0132-1b3d-5ecc4fff82a0.svg)](https://codeship.com/projects/81006/)
[![Code Quality](https://img.shields.io/codacy/77847636043541a1976f3cfe285d4f06.svg)](https://www.codacy.com/app/swimsuit/swimsuit)
[![Code Coverage](http://codecov.io/github/swimsuit/swimsuit/coverage.svg?branch=master)](http://codecov.io/github/swimsuit/swimsuit?branch=master)

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
