import Vue from 'vue'
import OverlayOpt from '../overlay'

const Overlay = Vue.extend(OverlayOpt)

export default {
  showOverlay() {
    let overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    })
    document.body.appendChild(overlay.$el)
    console.log('overlay')
    Vue.nextTick(() => {
      overlay.showOverlay = true
    })
  }
}
