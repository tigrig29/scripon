<template>
  <div class="convert-container">
    <div v-if="false" class="convert-file-area convert-area"></div>
    <div v-if="true" class="convert-text-area convert-area">
      <b-form-textarea
        id="inputScenario"
        v-model="inputValue"
        :value="inputValue"
        placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
        rows="10"
      ></b-form-textarea>
      <font-awesome-icon icon="angle-double-down" class="fa-5x ngss-color" />
      <b-form-textarea
        id="outputScript"
        v-model="outputValue"
        :value="outputValue"
        placeholder="ここに変換結果が出力されます。"
        rows="10"
        readonly
      ></b-form-textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    outputValue() {
      const value = this.convertSenarioToScript(this.inputValue)
      return value
    }
  },
  methods: {
    convertSenarioToScript(value) {
      if (value === '') return value

      const $state = this.$store.state

      // 各種 挿入・置換処理
      for (const setting of $state.config.list) {
        // 機能OFF判定
        if (!setting.enabled) continue

        switch (setting.id) {
          // コメント削除処理
          case 'deleteComments':
            value = value.replace(/[\s\t]*;.*/g, '')
            break
          // シナリオ先頭行に挿入
          case 'insertToFirst':
            for (const line of setting.lines) {
              if (!line.enabled) continue
              value = line.value + '\n' + value
            }
            break
          // シナリオ末尾行に挿入
          case 'insertToLast':
            for (const line of setting.lines) {
              if (!line.enabled) continue
              value += '\n' + line.value
            }
            break
          // 行頭に挿入
          case 'insertLineHead':
            for (const insertObj of [...setting.lines].reverse()) {
              if (!insertObj.enabled) continue
              // value を行ごとにループ
              const valueLines = value.split('\n')
              for (const i in [...Array(valueLines.length).keys()]) {
                valueLines[i] =
                  valueLines[i] === '' ? '' : insertObj.value + valueLines[i]
              }
              value = valueLines.join('\n')
            }
            break
          // 行末に挿入
          case 'insertLineEnd':
            for (const insertObj of setting.lines) {
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
            for (const replaceObj of setting.lines) {
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
    /**
     * JavaScriptアンエスケープ
     *
     * @param {String} str 変換したい文字列
     */
    unEscapeJs(str) {
      if (['\\\\n', '\\\\t', '\\\\0'].includes(str)) return str
      return str
        .replace('\\n', '\n')
        .replace('\\t', '\t')
        .replace('\\0', '\0')
    }
  }
}
</script>

<style lang="scss" scoped>
.convert-container {
  display: flex;
  flex-flow: column nowrap;
  .convert-area {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    textarea {
      margin-top: 10px;
      &.form-control[readonly] {
        background-color: #f5f8fa;
      }
    }
    .ngss-color {
      color: #9ee4fd;
    }
  }
}
</style>
