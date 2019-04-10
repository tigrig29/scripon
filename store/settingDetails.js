export const state = () => ({
  template: {
    insert: {
      id: '',
      value: '',
      enabled: true
    },
    replace: {
      id: '',
      before: '',
      after: '',
      enabled: true
    }
  },
  deleteComments: {
    type: 'none'
  },
  insertToFirst: {
    type: 'insert',
    lines: []
  },
  insertToLast: {
    type: 'insert',
    lines: []
  },
  insertLineHead: {
    type: 'insert',
    lines: []
  },
  insertLineEnd: {
    type: 'insert',
    lines: []
  },
  detailsReplace: {
    type: 'replace',
    lines: []
  }
})

export const mutations = {
  /**
   * 設定行の追加
   * @param {Object} state $store.state
   * @param {String} settingId 挿入/置換文字を追加する対象の設定ID
   */
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
