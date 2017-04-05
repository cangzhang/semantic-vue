import Buttons from './svbutton.vue'
import Input from './svinput.vue'
import Label from './svlabel.vue'
import List from './svlist.vue'
import Loader from './svloader.vue'
import Reveal from './svreveal.vue'

const routes = [
  {path: '/button', component: Buttons},
  {path: '/input', component: Input},
  {path: '/label', component: Label},
  {path: '/list', component: List},
  {path: '/loader', component: Loader},
  {path: '/reveal', component: Reveal},
]

export default routes
