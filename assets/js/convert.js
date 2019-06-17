export default {
  computed: {
    $config() {
      return this.$store.state.config
    }
  },
  methods: {
    // シナリオ→スクリプト変換処理
    // （各種 Config に基づいて変換処理を走らせる）
    convertSenarioToScript(inputValue) {
      if (inputValue === '') return inputValue

      let outputValue = inputValue

      // 各種 挿入・置換処理
      for (const conf of this.$config.list) {
        // 機能OFF判定
        if (!conf.enabled) continue

        outputValue = this[conf.id](outputValue, conf.settings)
      }

      return outputValue
    },
    // コメント削除
    deleteComments(value, settings) {
      return value.replace(/[\s\t]*;.*/g, '')
    },
    // シナリオ先頭行に挿入
    insertToFirst(value, settings) {
      let ret = value
      // 先頭行挿入設定オブジェクトを逆順に取得（処理反映順序を考慮）
      const sets = [...settings].reverse()
      // 先頭行挿入文字の取得ループ
      for (const setting of sets) {
        // 設定 OFF 判定
        if (!setting.enabled) continue
        ret = setting.value + '\n' + ret
      }
      return ret
    },
    // シナリオ末尾行に挿入
    insertToLast(value, settings) {
      let ret = value
      // 末尾行挿入文字の取得ループ
      for (const setting of settings) {
        // 設定 OFF 判定
        if (!setting.enabled) continue
        ret += '\n' + setting.value
      }
      return ret
    },
    // 行頭に挿入
    insertLineHead(value, settings, ssss) {
      // 行頭挿入設定オブジェクトを逆順に取得（処理反映順序を考慮）
      const sets = [...settings].reverse()

      // シナリオテキストを行ごとにループ
      const scenario = value.split('\n')
      for (const i in [...Array(scenario.length).keys()]) {
        // 行頭挿入文字の取得ループ
        for (const insertObj of sets) {
          // 設定 OFF 判定
          if (!insertObj.enabled) continue
          // 行頭に対象スクリプト挿入（空行の場合は処理しない）
          scenario[i] = scenario[i] === '' ? '' : insertObj.value + scenario[i]
        }
      }
      return scenario.join('\n')
    },
    // 行末に挿入
    insertLineEnd(value, settings) {
      // シナリオテキストを行ごとにループ
      const scenario = value.split('\n')
      for (const i in [...Array(scenario.length).keys()]) {
        // 行末挿入文字の取得ループ
        for (const insertObj of settings) {
          // 設定 OFF 判定
          if (!insertObj.enabled) continue
          // 行末に対象スクリプト挿入（空行の場合は処理しない）
          scenario[i] += scenario[i] === '' ? '' : insertObj.value
        }
      }
      return scenario.join('\n')
    },
    // 詳細な置換
    detailsReplace(value, settings) {
      let ret = value

      // 置換文字郡の取得ループ
      for (const replaceObj of settings) {
        // 設定 OFF 判定 and 空文字置換を防止
        if (!replaceObj.enabled || replaceObj.value.before === '') continue

        const regexpObj = {}
        // リアルタイム変換用：入力中に正規表現エラーを吐かないように対応
        try {
          regexpObj.before = new RegExp(replaceObj.value.before, 'g')
        } catch (error) {
          continue
        }

        // 置換後文字列において、\n と \t の入力を可能にする
        regexpObj.after = replaceObj.value.after
        while (regexpObj.after !== this.unEscapeJs(regexpObj.after)) {
          regexpObj.after = this.unEscapeJs(regexpObj.after)
        }

        // 置換処理
        ret = ret.replace(regexpObj.before, regexpObj.after)
      }
      return ret
    }
  }
}
