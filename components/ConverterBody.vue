<template>
  <div class="Conveter__Body">
    <div v-if="false" class="convert-file-area convert-area"></div>
    <div v-if="true" class="convert-text-area convert-area">
      <!-- 入力エリア -->
      <textarea
        id="inputScenario"
        :value="converterText.input"
        placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
        rows="10"
        @input="
          e => {
            inputScenario(e.target.value)
            // リアルタイム変換
            if (converterSetting.realtime) outputScript()
          }
        "
      ></textarea>
      <!-- 変換ボタン（リアルタイム変換 OFF 時のみ） -->
      <scripon-button
        v-if="!converterSetting.realtime"
        caption="変換"
        :horizontal="true"
        @click="outputScript"
      />
      <!-- 変換後 出力エリア -->
      <font-awesome-icon icon="angle-double-down" class="fa-5x" />
      <textarea
        id="outputScript"
        :value="converterText.output"
        placeholder="ここに変換結果が出力されます。"
        rows="10"
        readonly
      ></textarea>
    </div>
  </div>
</template>

<script>
import utils from '~/assets/js/utils'
import convert from '~/assets/js/convert'

import ScriponButton from '@/components/forms/ScriponButton'
import { mapState } from 'vuex'

export default {
  components: {
    ScriponButton
  },
  mixins: [utils, convert],
  computed: {
    ...mapState('converter', {
      converterSetting: 'setting',
      converterText: 'text'
    })
  },
  methods: {
    inputScenario(value) {
      this.$store.commit('converter/updateInputText', value)
    },
    outputScript() {
      this.$store.commit(
        'converter/updateOutputText',
        this.convertSenarioToScript(this.converterText.input)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.Conveter__Body {
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
  }
}
</style>
