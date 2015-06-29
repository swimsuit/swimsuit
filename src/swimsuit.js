class Swimsuit {
  supports (name, fn) {
    Object.defineProperty(this, name, {
      get: () => {
        const retval = fn()
        return Promise[retval ? 'resolve' : 'reject'](retval)
      }
    })
  }
}

const swimsuit = new Swimsuit()

swimsuit.supports('websockets', () => {
  return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined'
})

export default swimsuit
