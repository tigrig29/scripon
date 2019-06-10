<template>
  <div class="InputForm">
    <!-- リアルタイム変換スイッチ -->
    <div class="InputForm__RealtimeSwitch">
      <scripon-switch
        id="RealtimeSwitch"
        caption="リアルタイム変換"
        :enabled="realtime"
        @change="toggleRealtime()"
      />
    </div>
    <!-- 入力エリア -->
    <ScriponTextarea
      class="InputForm__Textarea"
      :value="scenario"
      placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
      :rows="rows"
      @input="
        e => {
          inputScenario(e.target.value)
        }
      "
    />
    <!-- 変換ボタン（リアルタイム変換 OFF 時のみ） -->
    <scripon-button
      v-if="!realtime"
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
    realtime() {
      return this.$store.state.converter.setting.realtime
    },
    scenario() {
      return this.$store.state.converter.text.input
    },
    configList() {
      return this.$store.state.config.list
    }
  },
  // リアルタイム変換用（入力テキスト、コンフィグの値を監視する）
  watch: {
    scenario() {
      if (this.realtime) this.outputScript()
    },
    configList: {
      deep: true,
      handler() {
        if (this.realtime) this.outputScript()
      }
    }
  },
  methods: {
    inputScenario(value) {
      this.$store.commit('converter/updateInputText', value)
    },
    outputScript() {
      this.$store.commit(
        'converter/updateOutputText',
        this.convertSenarioToScript(this.scenario)
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
