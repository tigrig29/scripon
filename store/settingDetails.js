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
   * 挿入/行の追加
   * @param {Object} state $store.state
   * @param {Object} payload.detail 設定詳細を追加する対象の設定オブジェクト
   */
  addLine(state, { detail }) {
    // 設定内容を作成
    const line = Object.assign({}, state.template[detail.type])
    line.id = `${detail.settingId}-${detail.linesCounta++}`
    line.value = ''
    line.enabled = true
    // 追加
    detail.lines.push(line)
  },
  /**
   * 設定詳細行の値更新
   * @param {Object} state $store.state
   * @param {Object} payload.line 設定詳細行
   * @param {String} payload.value 設定する値
   */
  updateLine(state, { line, value }) {
    line.value = value
  },
  /**
   * 設定詳細行の削除
   * @param {Object} state $store.state
   * @param {Object} payload.line 設定詳細行
   */
  deleteLine(state, { line }) {
    const detail = state.list.find(d => d.settingId === line.id.split('-')[0])
    const index = detail.lines.findIndex(l => l.id === line.id)
    detail.lines.splice(index, 1)
  }
}
