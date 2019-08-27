export const state = () => ({
  enabled: true,
  visible: false,
  template: {
    id: '',
    title: '',
    link: '',
    innerList: {}
  },
  items: []
})

export const mutations = {
  toggleVisible(state) {
    state.enabled = true
    state.visible = !state.visible
  },
  setVisible(state, visible) {
    state.enabled = true
    state.visible = visible
  },
  setEnabled(state, enabled) {
    state.enabled = enabled
  },
  setItems(state, items) {
    state.items = items
  }
}
