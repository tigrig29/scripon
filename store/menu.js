export const state = () => ({
  template: {
    id: 0,
    title: '',
    anchor: ''
  },
  items: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}
