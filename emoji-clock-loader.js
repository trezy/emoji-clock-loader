export default class ClockLoader {
  constructor (options) {
    if (typeof options === 'string') {
      options = {
        el: options
      }
    }

    options = options || {}
    options.clocks || (options.clocks = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚'])
    options.speed || (options.speed = 1000)

    if (!options.el) {
      throw new Error('ClockLoader must receive an element selector.')
      return
    }

    this.el = document.querySelector(options.el)
    this.options = options

    this.start()
  }

  start () {
    this.el.innerText = this.options.clocks[0]
    window.setInterval(this.tick.bind(this), this.options.speed)
  }

  tick () {
    let clocks = this.options.clocks
    let nextClockIndex = clocks.indexOf(this.el.innerText) + 1

    if (nextClockIndex >= clocks.length) {
      nextClockIndex = 0
    }

    let nextClock = clocks[nextClockIndex]

    this.el.innerText = nextClock
  }
}
