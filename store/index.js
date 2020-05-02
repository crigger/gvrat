export const state = () => ({
  viewport: {
    width: 0,
    height: 0
  },
  windowScrollY: 0
})

export const getters = {
  viewportHeight(state) {
    return state.viewport.height
  },
  viewportWidth(state) {
    return state.viewport.width
  },
  windowScrollY(state) {
    return state.windowScrollY
  }
}

export const mutations = {
  setViewport(state, values) {
    state.viewport = Object.assign(state.viewport, values)
  },
  setWindowScrollY(state, value) {
    state.windowScrollY = value
  }
}
