export const state = () => ({
  setting: {
    mode: 'text', // 'text' or 'file'
    realtime: true
  }
})

export const mutations = {
  toggleSetting(state, { key, value }) {
    state.setting[key] = value || !state.setting[key]
  }
}
