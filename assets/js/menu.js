export default {
  methods: {
    /**
     * $store.menu.items に、サイドバー項目を設定
     * @param {Object} urlParams $route.params（動的ルーティングの値オブジェクト）
     * @param {Object} fileMap summary.json の fileMap オブジェクト
     * @param {Object} sourceFileArray summary.json の sourceFileArray オブジェクト
     * @return {Object} $store.menu.items に保管すべきメニュー（サイドバー）項目データ
     */
    getMenuItems(urlParams, fileMap, sourceFileArray) {
      // url の _category から、対象となる記事マークダウンのファイルパスを全て取得
      const contentPaths = sourceFileArray.filter(value => {
        return value.includes(urlParams.category)
      })

      // summary.json から、対象記事のサイドメニュー情報を作成
      const menuItems = []
      for (const path of contentPaths) {
        const jsonPath = path
          .replace('markdown', 'json')
          .replace('.md', '.json')
        const summary = fileMap[jsonPath]
        const targetPath =
          summary.dir.replace('content/json', '') +
          '/' +
          summary.base.replace('.json', '')
        menuItems.push({
          id: targetPath,
          title: summary.menuTitle,
          link: targetPath,
          innerList: {}
        })
      }

      return menuItems
    }
  }
}
