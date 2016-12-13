import Vue from 'vue'
import OverlayOpt from '../overlay'
import ToastOpt from '../Toast.vue'

const Overlay = Vue.extend(OverlayOpt)
const Toast = Vue.extend(ToastOpt)

export default {
  showOverlay() {
    let overlay = this.overlay = new Overlay({el: document.createElement('div')})
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
  },
  showToast(msg) {
    let toast = new Toast({el: document.createElement('div')})
    toast.message = msg || ''
    document.body.appendChild(toast.$el)
    Vue.nextTick(() => {
      toast.showToast = true
    })
    // setTimeout(() => {
    //   toast.showToast = false
    // }, 2000)
  }
}
