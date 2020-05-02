import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import debounce from 'lodash.debounce'

require('intersection-observer')
Vue.use(VueObserveVisibility)

export default function({ store }) {
  function resize() {
    store.commit('setViewport', {
      width: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      height: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
    })
  }

  function scroll(previousOffset) {
    return () => {
      const offset =
        typeof window.scrollY !== 'undefined'
          ? window.scrollY
          : window.document.body.scrollTop

      if (previousOffset !== offset) {
        store.commit('setWindowScrollY', offset)
      }
      window.requestAnimationFrame(scroll(offset))
    }
  }

  window.addEventListener('resize', debounce(resize, 100))
  window.requestAnimationFrame(scroll(0))
  resize()
}
