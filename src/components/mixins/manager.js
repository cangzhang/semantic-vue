import Vue from 'vue'
import OverlayTpl from './overlay'

const Overlay = Vue.extend(OverlayTpl)

const PopupManager = {
  instances: [],
  overlay: false
}
