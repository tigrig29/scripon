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
        // category だけだと、カテゴリートップも含まれてしまうため // で囲う
        const regTestCategory = new RegExp(`/${urlParams.category}/`)
        return regTestCategory.test(value)
      })

      // summary.json から、対象記事のサイドメニュー情報を作成
      const menuItems = []
      for (const path of contentPaths) {
        const jsonPath = path
          .replace('markdown', 'json')
          .replace('.md', '.json')
        const articleJson = fileMap[jsonPath]
        const targetPath =
          articleJson.dir.replace('content/json', '') +
          '/' +
          articleJson.base.replace('.json', '')
        menuItems.push({
          id: targetPath,
          title: articleJson.menuTitle,
          link: targetPath,
          innerLink: {}
        })
      }

      return menuItems
    }
  }
}
