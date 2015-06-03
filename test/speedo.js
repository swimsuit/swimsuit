/* global describe, it */
import {expect} from 'chai'
import Speedo from '../src/speedo'

describe('Speedo', () => {
  it('should return a promise', () => {
    expect(Speedo.websockets instanceof Promise).to.be.true
  })

  it('should add support', () => {
    expect(Speedo.test instanceof Promise).to.be.false

    Speedo.supports('test', () => true)

    expect(Speedo.test instanceof Promise).to.be.true
  })
})
