const { describe, beforeEach, afterEach, it } = require('kocha')
const genel = require('genel')
const { make } = require('capsid')
const assert = require('assert')
require('../new-item-card')

let el
let card

describe('new-item-card', () => {
  beforeEach(() => {
    el = genel.div``
    card = make('js-new-item-card', el)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('onCancel', done => {
    it('removes the element from the document tree', done => {
      card.onCancel()

      setTimeout(() => {
        assert(el.parentElement == null)

        done()
      }, 10)
    })
  })
})
