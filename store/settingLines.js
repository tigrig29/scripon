export const state = () => ({
  deleteComments: {
    type: 'insert',
    options: {}
  },
  addToFirst: {
    type: 'insert',
    options: {},
    lines: [],
    template: {
      id: '',
      value: '',
      enabled: true
    }
  },
  addToLast: {
    type: 'insert',
    options: {},
    lines: [],
    template: {
      id: '',
      value: '',
      enabled: true
    }
  },
  addLineHead: {
    type: 'insert',
    options: {},
    lines: [],
    template: {
      id: '',
      value: '',
      enabled: true
    }
  },
  addLineEnd: {
    type: 'insert',
    options: {},
    lines: [],
    template: {
      id: '',
      value: '',
      enabled: true
    }
  },
  detailsReplace: {
    type: 'replace',
    options: {},
    lines: [],
    template: {
      id: '',
      before: '',
      after: '',
      enabled: true
    }
  }
})

export const mutations = {
  addLine(state, settingId) {
    // 設定対象の Lines を取得
    const targetLines = state[settingId].lines
    // 設定内容を作成
    const line = Object.assign({}, state[settingId].template)
    line.id = settingId + (targetLines.length + 1)
    line.value = 'hogehgoe'
    // 追加
    targetLines.push(line)
  },
  updateLine(state, id, value) {
    const setting = state.list.find(setting => setting.id === id.split('-')[0])
    const line = setting.lines.text.find(line => line.id === id)
    line.value = value
  }
}
