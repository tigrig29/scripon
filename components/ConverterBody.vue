<template>
  <div class="Converter__Body">
    <div v-if="false" class="Converter__Body__Item"></div>
    <div v-if="true" class="Converter__Body__Item">
      <!-- 入力エリア -->
      <ScriponTextarea
        class="Converter__Body__Item__Textarea"
        :value="converterText.input"
        placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
        :rows="12"
        @input="
          e => {
            inputScenario(e.target.value)
            // リアルタイム変換
            if (converterSetting.realtime) outputScript()
          }
        "
      />
      <!-- 変換ボタン（リアルタイム変換 OFF 時のみ） -->
      <scripon-button
        v-if="!converterSetting.realtime"
        class="Converter__Body__Item__Button"
        caption="変換"
        :horizontal="true"
        @click="outputScript"
      />
      <!-- 矢印 -->
      <font-awesome-icon
        icon="angle-double-down"
        class="fa-5x Converter__Body__Item__Arrow"
      />
      <!-- 変換後 出力エリア -->
      <ScriponTextarea
        class="Converter__Body__Item__Textarea"
        :value="converterText.output"
        placeholder="ここに変換結果が出力されます。"
        :rows="12"
        readonly
      />
    </div>
  </div>
</template>

<script>
import utils from '~/assets/js/utils'
import convert from '~/assets/js/convert'

import ScriponButton from '@/components/forms/ScriponButton'
import ScriponTextarea from '@/components/forms/ScriponTextarea'
import { mapState } from 'vuex'

export default {
  components: {
    ScriponButton,
    ScriponTextarea
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
.Converter__Body {
  display: flex;
  flex-flow: column nowrap;
  &__Item {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    &__Textarea {
      margin-top: $space-base;
      margin-bottom: $space-base;
      &[readonly] {
        background-color: rgba(mix($color-primary, $--color-grey-9), 0.1);
      }
    }
    &__Button {
      text-indent: 2rem;
      letter-spacing: 2rem;
    }
    &__Arrow {
      color: mix($color-secondary, $--color-white);
    }
  }
}
</style>
