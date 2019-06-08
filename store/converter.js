export const state = () => ({
  setting: {
    mode: 'text', // 'text' or 'file'
    realtime: true
  },
  text: {
    input: '',
    output: ''
  }
})

export const mutations = {
  toggleSetting(state, { key, value }) {
    state.setting[key] = value || !state.setting[key]
  },
  updateInputText(state, value) {
    state.text.input = value
  },
  updateOutputText(state, value) {
    state.text.output = value
  }
}
