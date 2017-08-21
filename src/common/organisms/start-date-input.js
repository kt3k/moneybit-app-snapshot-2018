const { component, on, emit } = capsid

@component('js-start-date-input')
class StartDateInput {
  @on('input')
  @emit('start-date-selected') onInput (e) {
    return this.el.dataset.date
  }
}

module.exports = StartDateInput