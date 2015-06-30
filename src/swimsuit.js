class Swimsuit {
  supports (name, fn) {
    Object.defineProperty(this, name, {
      get: () => {
        const retval = fn()
        return Promise[retval ? 'resolve' : 'reject'](retval)
      }
    })
  }

  use (tests) {
    if (typeof tests !== 'object') {
      return Promise.reject('You must pass in an object or array of objects')
    }
    tests = !(tests instanceof Array) ? [tests] : tests
    tests.forEach(test => {
      this.supports(test.feature, test.test)
    })
    return Promise.resolve()
  }
}

export default new Swimsuit()
