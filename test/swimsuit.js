/* global describe, it */
import {expect} from 'chai'
import Swimsuit from '..'
import websockets from '../src/feature-tests/websockets'

describe('Swimsuit', () => {
  it('should load additional feature tests', done => {
    Swimsuit.use(websockets).then(() => {
      expect(Swimsuit.websockets).to.exist
      done()
    })
  })

  it('should reject if trying to load a number', done => {
    Swimsuit.use(42).catch(err => {
      expect(err).to.exist
      expect(err).to.equal('You must pass in an array of tests')
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
