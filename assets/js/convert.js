export default {
  computed: {
    $config() {
      return this.$store.state.config
    }
  },
  methods: {
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
    _convertSenarioToScript(value) {
      if (value === '') return value

      const $state = this.$store.state

      // 各種 挿入・置換処理
      for (const conf of $state.config.list) {
        // 機能OFF判定
        if (!conf.enabled) continue

        switch (conf.id) {
          // コメント削除処理
          case 'deleteComments':
            value = value.replace(/[\s\t]*;.*/g, '')
            break
          // シナリオ先頭行に挿入
          case 'insertToFirst':
            for (const setting of [...conf.settings].reverse()) {
              if (!setting.enabled) continue
              value = setting.value + '\n' + value
            }
            break
          // シナリオ末尾行に挿入
          case 'insertToLast':
            for (const setting of conf.settings) {
              if (!setting.enabled) continue
              value += '\n' + setting.value
            }
            break
          // 行頭に挿入
          case 'insertLineHead':
            // value を行ごとにループ
            const valueLines = value.split('\n')
            for (const i in [...Array(valueLines.length).keys()]) {
              for (const insertObj of [...conf.settings].reverse()) {
                if (!insertObj.enabled) continue
                valueLines[i] =
                  valueLines[i] === '' ? '' : insertObj.value + valueLines[i]
              }
              value = valueLines.join('\n')
            }
            break
          // 行末に挿入
          case 'insertLineEnd':
            for (const insertObj of conf.settings) {
              if (!insertObj.enabled) continue
              // value を行ごとにループ
              const valueLines = value.split('\n')
              for (const i in [...Array(valueLines.length).keys()]) {
                valueLines[i] += valueLines[i] === '' ? '' : insertObj.value
              }
              value = valueLines.join('\n')
            }
            break
          // 詳細な置換
          case 'detailsReplace':
            for (const replaceObj of conf.settings) {
              if (!replaceObj.enabled || replaceObj.value.before === '')
                continue
              const regexpObj = {}
              try {
                regexpObj.before = new RegExp(replaceObj.value.before, 'g')
              } catch (error) {
                continue
              }
              value = value.replace(
                regexpObj.before,
                this.unEscapeJs(replaceObj.value.after)
              )
            }
            break
        }
      }

      return value
    },
    // コメント削除
    deleteComments(value, settings) {
      return value.replace(/[\s\t]*;.*/g, '')
    },
    // シナリオ先頭行に挿入
    insertToFirst(value, settings) {
      let ret
      // 先頭行挿入設定オブジェクトを逆順に取得（処理反映順序を考慮）
      const sets = [...settings].reverse()
      // 先頭行挿入文字の取得ループ
      for (const setting of sets) {
        // 設定 OFF 判定
        if (!setting.enabled) continue
        ret = setting.value + '\n' + value
      }
      return ret
    },
    // シナリオ末尾行に挿入
    insertToLast(value, settings) {
      let ret
      // 末尾行挿入文字の取得ループ
      for (const setting of settings) {
        // 設定 OFF 判定
        if (!setting.enabled) continue
        ret = value + '\n' + setting.value
      }
      return ret
    },
    // 行頭に挿入
    insertLineHead(value, settings, ssss) {
      let ret

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
        ret = scenario.join('\n')
      }
      return ret
    },
    // 行末に挿入
    insertLineEnd(value, settings) {
      let ret

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
        ret = scenario.join('\n')
      }
      return ret
    },
    // 詳細な置換
    detailsReplace(value, settings) {
      for (const replaceObj of settings) {
        // 設定 OFF 判定 and 空文字置換を防止
        if (!replaceObj.enabled || replaceObj.value.before === '') continue

        const regexpObj = {}
        try {
          regexpObj.before = new RegExp(replaceObj.value.before, 'g')
        } catch (error) {
          continue
        }
        value = value.replace(
          regexpObj.before,
          this.unEscapeJs(replaceObj.value.after)
        )
      }
    }
  }
}
