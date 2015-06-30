import Swimsuit from '../../'

Swimsuit.supports('websockets', () => {
  return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined'
})
