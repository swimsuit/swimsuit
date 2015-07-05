export default {
  // feature: 'websockets',
  websockets: () => {
    return typeof window !== 'undefined' &&
      'WebSocket' in window &&
      window.WebSocket.CLOSING === 2
  }
}
