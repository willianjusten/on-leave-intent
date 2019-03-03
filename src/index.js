/**
 * @class OnLeaveIntent
 * @description A class to check if the user is leaving the window
 * and run a callback when it happens.
 * @param callback - a function to run when the user is leaving the page
 * @param delay - time in milliseconds defined to start tracking the user
 */
export default class OnLeaveIntent {
  constructor(callback, delay) {
    this.callback = callback
    this.delay = delay

    this.init()
  }

  init = () => {
    this.timer = window.setTimeout(this.handleMouseOut, this.delay)
  }

  destroy = () => {
    clearTimeout(this.timer)
    document.removeEventListener('mouseout', this.checkOutOfBounds)
  }

  checkOutOfBounds = e => {
    if (e.relatedTarget === null) {
      this.callback()
      this.destroy()
    }
  }

  handleMouseOut = () => {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}
