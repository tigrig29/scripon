export const state = () => ({
  visible: false
})

export const mutations = {
  toggleVisible(state) {
    state.visible = !state.visible
  },
  setVisible(state, visible) {
    state.visible = visible
  }
}
