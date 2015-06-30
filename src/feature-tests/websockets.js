export default {
  feature: 'websockets',
  test: () => {
    return typeof window !== 'undefined' &&
      'WebSocket' in window &&
      window.WebSocket.CLOSING === 2
  }
}
