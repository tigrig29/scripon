export const state = () => ({
  visible: false,
  list: [
    {
      title: 'コンバーター',
      link: 'converter'
    },
    {
      title: 'ガイド',
      link: 'guide'
    },
    {
      title: '活用サンプル',
      link: 'examples'
    },
    {
      title: '更新履歴',
      link: 'history'
    }
  ]
})

export const mutations = {
  toggleVisible(state) {
    state.visible = !state.visible
  },
  setVisible(state, visible) {
    state.visible = visible
  }
}
