export const state = () => ({
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
    state.visible = !state.visible
  },
  setVisible(state, visible) {
    state.visible = visible
  },
  setItems(state, items) {
    state.items = items
  }
}
