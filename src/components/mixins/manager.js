import Vue from 'vue'
import OverlayOpt from '../overlay'

const Overlay = Vue.extend(OverlayOpt)

export default {
  showOverlay() {
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    document.body.appendChild(overlay.$el)
    Vue.nextTick(() => {
      overlay.showOverlay = true
    })
  },
  hideOverlay() {
    let overlay = this.overlay
    overlay.showOverlay = false
    setTimeout(() => {
      overlay.$el.remove()
      overlay.$destroy()
    }, 500)
  }
}
