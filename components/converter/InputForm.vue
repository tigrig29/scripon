<template>
  <div class="InputForm">
    <!-- リアルタイム変換スイッチ -->
    <div class="InputForm__RealtimeSwitch">
      <scripon-switch
        id="RealtimeSwitch"
        caption="リアルタイム変換"
        :enabled="converterSetting.realtime"
        @change="toggleRealtime()"
      />
    </div>
    <!-- 入力エリア -->
    <ScriponTextarea
      class="InputForm__Textarea"
      :value="converterText.input"
      placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
      :rows="rows"
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
      class="InputForm__ConvertButton"
      caption="変換"
      :horizontal="true"
      @click="outputScript()"
    />
  </div>
</template>

<script>
import utils from '~/assets/js/utils'
import convert from '~/assets/js/convert'
import { mapState } from 'vuex'

import ScriponButton from '@/components/forms/ScriponButton'
import ScriponTextarea from '@/components/forms/ScriponTextarea'
import ScriponSwitch from '~/components/forms/ScriponSwitch'

export default {
  components: {
    ScriponButton,
    ScriponTextarea,
    ScriponSwitch
  },
  mixins: [utils, convert],
  props: {
    rows: {
      type: Number,
      default: 12
    }
  },
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
    },
    toggleRealtime() {
      // リアルタイム変換 ON にし、変換処理を走らせる
      this.$store.commit('converter/toggleSetting', { key: 'realtime' })
      this.outputScript()
    }
  }
}
</script>

<style lang="scss" scoped>
.InputForm {
  &__RealtimeSwitch {
    text-align: right;
  }
  &__Textarea {
    margin-top: $space-sm;
    margin-bottom: $space-sm;
  }
  &__ConvertButton {
    text-indent: 2rem;
    letter-spacing: 2rem;
  }
}
</style>
