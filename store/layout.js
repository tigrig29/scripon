export const state = () => ({
  sidebar: 'default'
})

export const mutations = {
  changeSidebar(state, value) {
    console.log('hoge')
    state.sidebar = value
  }
}
