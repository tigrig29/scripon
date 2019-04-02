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
        text: [],
        template: {
          id: '',
          value: '',
          enabled: true
        }
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
            id: 'addToLast-1',
            value: '[l][cm]',
            enabled: true
          },
          {
            id: 'addToLast-2',
            value: '[p]',
            enabled: true
          }
        ],
        template: {
          id: '',
          value: '',
          enabled: true
        }
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
            id: 'addLineHead-1',
            value: '',
            enabled: true
          }
        ],
        template: {
          id: '',
          value: '',
          enabled: true
        }
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
            id: 'addLineEnd-1',
            value: '',
            enabled: false
          }
        ],
        template: {
          id: '',
          value: '',
          enabled: true
        }
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
            id: 'detailsReplace-1',
            before: '',
            after: '',
            enabled: true
          }
        ],
        template: {
          id: '',
          before: '',
          after: '',
          enabled: true
        }
      }
    }
  ]
})

export const mutations = {
  addLine(state, setting) {
    const line = Object.assign({}, setting.lines.template)
    line.id = setting.id + setting.lines.text.length
    line.value = 'hogehgoe'
    setting.lines.text.push(line)
  },
  updateLine(state, id, value) {
    const setting = state.list.find(setting => setting.id === id.split('-')[0])
    const line = setting.lines.text.find(line => line.id === id)
    line.value = value
  },
  changeEnabled(state, setting) {
    setting.enabled = !setting.enabled
  }
}

export const getters = {
  getSettingById: state => id => {
    return state.list.find(setting => setting.id === id)
  }
}
