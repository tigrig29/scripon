export const state = () => ({
  visible: false
})

export const mutations = {
  toggleVisible(state) {
    state.enabled = true
    state.visible = !state.visible
  },
  setVisible(state, visible) {
    state.enabled = true
    state.visible = visible
  }
}
