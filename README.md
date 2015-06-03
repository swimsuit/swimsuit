# Speedo
Detect features using Promise

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
