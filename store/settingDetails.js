export const state = () => ({
  template: {
    insert: {
      id: '',
      value: '',
      enabled: true
    },
    replace: {
      id: '',
      value: {
        before: '',
        after: ''
      },
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
   * 挿入/置換 設定行の追加
   * @param {Object} state $store.state
   * @param {Object} payload.detail 挿入/置換 設定を追加する対象の設定オブジェクト
   */
  addLine(state, { detail }) {
    // 設定内容を作成
    const line = Object.assign({}, state.template[detail.type])
    line.id = `${detail.settingId}-${detail.linesCounta++}`
    line.enabled = true
    // 追加
    detail.lines.push(line)
  },
  /**
   * 挿入/置換 設定行の使用可否の変更
   * @param {Object} state $store.state
   * @param {Object} payload.line 挿入/置換 設定行
   */
  toggleLineEnabled(state, { line }) {
    line.enabled = !line.enabled
  },
  /**
   * 挿入/置換 設定行の値更新
   * @param {Object} state $store.state
   * @param {Object} payload.line 挿入/置換 設定行
   * @param {String} payload.value 設定する値
   */
  updateLine(state, { line, value }) {
    line.value = value
  },
  /**
   * 挿入/置換 設定行の削除
   * @param {Object} state $store.state
   * @param {Object} payload.line 挿入/置換 設定行
   */
  deleteLine(state, { line }) {
    const detail = state.list.find(d => d.settingId === line.id.split('-')[0])
    const index = detail.lines.findIndex(l => l.id === line.id)
    detail.lines.splice(index, 1)
  }
}
