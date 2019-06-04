export const state = () => ({
  template: {
    insert: {
      id: '',
      value: '',
      placeholder: '文字、スクリプト等を入力してください',
      enabled: true
    },
    replace: {
      id: '',
      value: {
        before: '',
        after: ''
      },
      placeholder: {
        before: '置換対象の文字列を入力（正規表現可）',
        after: '置換後の文字列を入力（正規表現可）'
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
      id: 'insertLineHead',
      title: '行頭に挿入',
      type: 'insert',
      enabled: false,
      settings: [],
      settingsCounta: 0
    },
    {
      id: 'insertLineEnd',
      title: '行末に挿入',
      type: 'insert',
      enabled: false,
      settings: [],
      settingsCounta: 0
    },
    {
      id: 'insertToFirst',
      title: 'シナリオ先頭行に挿入',
      type: 'insert',
      enabled: false,
      settings: [],
      settingsCounta: 0
    },
    {
      id: 'insertToLast',
      title: 'シナリオ最終行に挿入',
      type: 'insert',
      enabled: false,
      settings: [],
      settingsCounta: 0
    },
    {
      id: 'detailsReplace',
      title: '詳細な置換',
      type: 'replace',
      enabled: false,
      settings: [],
      settingsCounta: 0
    }
  ]
})

export const mutations = {
  /**
   * 設定の有効/無効化
   * @param {Object} state $store.state
   * @param {Object} config 対象のConfig
   */
  changeEnabled(state, config) {
    config.enabled = !config.enabled
  },
  /**
   * 挿入/置換 設定行の追加
   * @param {Object} state $store.state
   * @param {Object} config 挿入/置換 設定を追加する対象のConfig
   */
  addSetting(state, config) {
    // 設定内容を作成
    const setting = Object.assign({}, state.template[config.type])
    setting.id = `${config.id}-${config.settingsCounta++}`
    setting.enabled = true
    // 追加
    config.settings.push(setting)
  },
  /**
   * 挿入/置換 設定行の使用可否の変更
   * @param {Object} state $store.state
   * @param {Object} setting 挿入/置換 設定行
   */
  toggleSettingEnabled(state, setting) {
    setting.enabled = !setting.enabled
  },
  /**
   * 挿入/置換 設定行の値更新
   * @param {Object} state $store.state
   * @param {Object} payload.setting 挿入/置換 設定行
   * @param {String} payload.value 設定する値
   */
  updateSetting(state, { setting, value }) {
    setting.value = value
  },
  /**
   * 挿入/置換 設定行の削除
   * @param {Object} state $store.state
   * @param {Object} setting 挿入/置換 設定行
   */
  deleteSetting(state, setting) {
    const config = state.list.find(d => d.id === setting.id.split('-')[0])
    const index = config.settings.findIndex(l => l.id === setting.id)
    config.settings.splice(index, 1)
  }
}
