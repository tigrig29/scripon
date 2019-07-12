export const state = () => ({
  template: {
    id: '',
    title: '',
    link: '',
    innerList: {}
  },
  items: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}
