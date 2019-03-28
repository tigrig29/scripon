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
      enabled: false,
      lines: {
        type: 'insert',
        options: {},
        text: [
          {
            id: 1,
            value: '',
            enabled: true
          }
        ]
      }
    },
    {
      id: 'addToLast',
      title: 'シナリオ末尾行に追加',
      enabled: false,
      lines: {
        type: 'insert',
        options: {},
        text: [
          {
            id: 1,
            value: '[l][cm]',
            enabled: true
          },
          {
            id: 2,
            value: '[p]',
            enabled: true
          }
        ]
      }
    },
    {
      id: 'addLineHead',
      title: '行頭に追加',
      enabled: false,
      lines: {
        type: 'insert',
        options: {},
        text: [
          {
            id: 1,
            value: '',
            enabled: true
          }
        ]
      }
    },
    {
      id: 'addLineEnd',
      title: '行末に追加',
      enabled: false,
      lines: {
        type: 'insert',
        options: {},
        text: [
          {
            id: 1,
            value: '',
            enabled: true
          }
        ]
      }
    },
    {
      id: 'detailsReplace',
      title: '詳細な置換',
      enabled: false,
      lines: {
        type: 'replace',
        options: {},
        text: [
          {
            id: 1,
            before: '',
            after: '',
            enabled: true
          }
        ]
      }
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
