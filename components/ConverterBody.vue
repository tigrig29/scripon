<template>
  <div class="Conveter__Body">
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
import utils from '~/assets/js/utils'
import convert from '~/assets/js/convert'

export default {
  mixins: [utils, convert],
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
  methods: {}
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
    .ngss-color {
      color: #9ee4fd;
    }
  }
}
</style>
