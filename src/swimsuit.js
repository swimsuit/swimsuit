class Swimsuit {
  supports (name, fn) {
    Object.defineProperty(this, name, {
      get: () => {
        const retval = fn()
        return Promise[retval ? 'resolve' : 'reject'](retval)
      }
    })
  }

  load (tests) {
    tests = typeof tests === 'string' ? tests.split(',') : tests
    if (!(tests instanceof Array)) {
      return Promise.reject('You must pass in an array of tests')
    }
    tests.forEach(val => {
      require(`./feature-tests/${val}.js`)
    })
    return Promise.resolve()
  }
}

export default new Swimsuit()
