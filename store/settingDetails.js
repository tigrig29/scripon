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
      id: 'deleteComments',
      title: 'コメント削除',
      type: 'none',
      enabled: false
    },
    {
      id: 'insertToFirst',
      title: '行頭に挿入',
      type: 'insert',
      enabled: false,
      lines: [],
      linesCounta: 0
    },
    {
      id: 'insertToLast',
      type: 'insert',
      title: '行末に挿入',
      enabled: false,
      lines: [],
      linesCounta: 0
    },
    {
      id: 'insertLineHead',
      title: 'シナリオ先頭行に挿入',
      type: 'insert',
      enabled: false,
      lines: [],
      linesCounta: 0
    },
    {
      id: 'insertLineEnd',
      title: 'シナリオ最終行に挿入',
      type: 'insert',
      enabled: false,
      lines: [],
      linesCounta: 0
    },
    {
      id: 'detailsReplace',
      title: '詳細な置換',
      type: 'replace',
      enabled: false,
      lines: [],
      linesCounta: 0
    }
  ]
})

export const mutations = {
  /**
   * 設定の有効/無効化
   * @param {Object} state $store.state
   * @param {Object} payload.setting 対象の設定オブジェクト
   */
  changeEnabled(state, { setting }) {
    setting.enabled = !setting.enabled
  },
  /**
   * 挿入/置換 設定行の追加
   * @param {Object} state $store.state
   * @param {Object} payload.detail 挿入/置換 設定を追加する対象の設定オブジェクト
   */
  addLine(state, { detail }) {
    // 設定内容を作成
    const line = Object.assign({}, state.template[detail.type])
    line.id = `${detail.id}-${detail.linesCounta++}`
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
    const detail = state.list.find(d => d.id === line.id.split('-')[0])
    const index = detail.lines.findIndex(l => l.id === line.id)
    detail.lines.splice(index, 1)
  }
}
