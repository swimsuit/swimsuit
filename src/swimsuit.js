const Swimsuit = {
  supports(name, fn) {
    Object.defineProperty(this, name, {
      get: () => {
        const retval = fn()
        return Promise[retval ? 'resolve' : 'reject'](retval)
      },
    })
  },

  use(tests) {
    if (typeof tests !== 'object') {
      return Promise.reject(
        new Error('You must pass in an object or array of objects')
      )
    }
    const arr = tests instanceof Array ? tests : [tests]
    arr.forEach(test => {
      Object.keys(test).forEach(feature => {
        const predicate = test[feature]
        this.supports(feature, predicate)
      })
    })
    return Promise.resolve()
  },
}

export default Swimsuit
