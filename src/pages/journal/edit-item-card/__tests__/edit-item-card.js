const { describe, beforeEach, afterEach, it } = require('kocha')
const genel = require('genel')
const { make } = require('capsid')
const assert = require('assert')
const { Action } = require('~/src')
require('../edit-item-card')

let el
let card

describe('edit-item-card', () => {
  beforeEach(() => {
    el = genel.div``

    card = make('edit-item-card', el)
    card.update({
      detail: { user: global.user, currentChart: global.currentChart }
    })
    card.onOpen({ detail: { trade: null } })
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('onSave', () => {
    it('dispatches Action.SAVE_TRADE', done => {
      el.addEventListener(Action.SAVE_TRADE, e => {
        done()
      })

      card.onSave(new UIEvent('click'))
    })
  })

  describe('onCancel', done => {
    it('removes the element from the document tree', done => {
      card.onCancel(new UIEvent('click'))

      setTimeout(() => {
        assert(el.parentElement == null)

        done()
      }, 10)
    })
  })

  describe('on click at .add-debit-button', () => {
    it('adds a debit input', () => {
      el.querySelector('.add-debit-button').click()
      assert(el.querySelectorAll('.edit-item-card__debit').length === 2)
    })
  })

  describe('on click at .add-credit-button', () => {
    it('adds a credit input', () => {
      el.querySelector('.add-credit-button').click()
      assert(el.querySelectorAll('.edit-item-card__credit').length === 2)
    })
  })
})
