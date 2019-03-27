export const state = () => ({
  list: [
    {
      id: 'deleteComments',
      title: 'コメント削除',
      enabled: false
    },
    {
      id: 'addToFirst',
      title: 'シナリオ先頭行に追加',
      enabled: false
    },
    {
      id: 'addToLast',
      title: 'シナリオ末尾行に追加',
      enabled: false
    },
    {
      id: 'addLineHead',
      title: '行頭に追加',
      enabled: false
    },
    {
      id: 'addLineEnd',
      title: '行末に追加',
      enabled: false
    },
    {
      id: 'detailsReplace',
      title: '詳細な置換',
      enabled: false
    }
  ]
})

export const mutations = {
  changeEnabled(state, setting) {
    setting.enabled = !setting.enabled
  }
}

export const getters = {
  getSettingById: state => id => {
    return state.list.find(setting => setting.id === id)
  }
}
