/* global describe, it */
import {expect} from 'chai'
import Swimsuit from '..'

describe('Swimsuit', () => {
  it('should load additional feature tests', done => {
    Swimsuit.load('websockets').then(() => {
      expect(Swimsuit.websockets).to.exist
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
