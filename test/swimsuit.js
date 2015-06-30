/* global describe, it */
import {expect} from 'chai'
import Swimsuit from '..'
import websockets from '../src/feature-tests/websockets'
import geolocation from '../src/feature-tests/geolocation'

describe('Swimsuit', () => {

  it('should use additional feature tests', done => {
    Swimsuit.use(websockets).then(() => {
      expect(Swimsuit.websockets).to.exist
      done()
    })
  })

  it('should be able to use an array of feature tests', done => {
    Swimsuit.use([geolocation]).then(() => {
      expect(Swimsuit.geolocation).to.exist
      done()
    })
  })

  it('should reject if trying to use a number', done => {
    Swimsuit.use(42).catch(err => {
      expect(err).to.exist
      expect(err).to.equal('You must pass in an object or array of objects')
      done()
    })
  })

  it('should return a promise', () => {
    expect(Swimsuit.websockets instanceof Promise).to.be.true
  })

  it('should add support', () => {
    expect(Swimsuit.test instanceof Promise).to.be.false

    Swimsuit.supports('test', () => true)

    expect(Swimsuit.test instanceof Promise).to.be.true
  })
})
