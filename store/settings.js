export const state = () => ({
  list: [
    {
      id: 'deleteComments',
      title: 'コメント削除',
      enabled: false
    },
    {
      id: 'insertLineHead',
      title: '行頭に挿入',
      enabled: false
    },
    {
      id: 'insertLineEnd',
      title: '行末に挿入',
      enabled: false
    },
    {
      id: 'insertToFirst',
      title: 'シナリオ先頭行に挿入',
      enabled: false
    },
    {
      id: 'insertToLast',
      title: 'シナリオ最終行に挿入',
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
