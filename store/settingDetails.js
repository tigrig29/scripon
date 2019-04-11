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
  list: [
    {
      settingId: 'deleteComments',
      type: 'none'
    },
    {
      settingId: 'insertToFirst',
      type: 'insert',
      lines: [],
      linesCounta: 0
    },
    {
      settingId: 'insertToLast',
      type: 'insert',
      lines: [],
      linesCounta: 0
    },
    {
      settingId: 'insertLineHead',
      type: 'insert',
      lines: [],
      linesCounta: 0
    },
    {
      settingId: 'insertLineEnd',
      type: 'insert',
      lines: [],
      linesCounta: 0
    },
    {
      settingId: 'detailsReplace',
      type: 'replace',
      lines: [],
      linesCounta: 0
    }
  ]
})

export const mutations = {
  /**
   * 設定行の追加
   * @param {Object} state $store.state
   * @param {Object} detail 設定詳細を追加する対象の設定オブジェクト
   */
  addLine(state, detail) {
    // 設定内容を作成
    const line = Object.assign({}, state.template[detail.type])
    line.id = `${detail.settingId}-${detail.linesCounta++}`
    line.value = ''
    line.enabled = true
    // 追加
    detail.lines.push(line)
  },
  updateLine(state, id, value) {
    const setting = state.list.find(setting => setting.id === id.split('-')[0])
    const line = setting.lines.text.find(line => line.id === id)
    line.value = value
  },
  /**
   *
   * @param {Object} state $store.state
   * @param {Object} detail 設定詳細を追加する対象の設定オブジェクト
   */
  deleteLine(state, line) {
    const detail = state.list.find(d => d.settingId === line.id.split('-')[0])
    alert(detail.settingId)
  }
}
