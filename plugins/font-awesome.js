import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDoubleDown,
  faBars,
  faTimes,
  faEllipsisV,
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleDoubleDown,
  faBars,
  faTimes,
  faEllipsisV,
  faChevronUp,
  faChevronDown
)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
