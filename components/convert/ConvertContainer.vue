<template>
  <section class="convert-container">
    <div v-if="false" class="convert-file-area convert-area"></div>
    <div v-if="true" class="convert-text-area convert-area">
      <b-form-textarea
        id="inputScenario"
        v-model="inputValue"
        :value="inputValue"
        placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
        rows="10"
      ></b-form-textarea>
      <b-form-textarea
        id="outputScript"
        v-model="outputValue"
        :value="outputValue"
        placeholder="ここに変換結果が出力されます。"
        rows="10"
      ></b-form-textarea>
    </div>
  </section>
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
      // if (value === '') return value

      const $state = this.$store.state

      // 各種 挿入・置換処理
      for (const setting of $state.settings.list) {
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
              if (!replaceObj.enabled) continue
              value = value.replace(
                new RegExp(replaceObj.value.before, 'g'),
                replaceObj.value.after
              )
            }
            break
        }
      }

      return value
    },
    // コメント削除
    deleteComments($state, value) {
      const setting = $state.settings.list.find(s => s.id === 'deleteComments')

      if (!setting.enabled) return value

      // コメント削除処理
      return value.replace(/[\s\t]*;.*/g, '')
    },
    // シナリオ先頭行に挿入
    insertToFirst($state, value) {
      const setting = $state.settings.list.find(s => s.id === 'insertToFirst')

      if (!setting.enabled) return value

      // コメント削除処理
      return value.replace(/[\s\t]*;.*/g, '')
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
    textarea {
      margin-top: 10px;
    }
  }
}
</style>
