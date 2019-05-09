<template>
  <section class="convert-container">
    <div v-if="false" class="convert-file-area convert-area"></div>
    <div v-if="true" class="convert-text-area convert-area">
      <b-form-textarea
        id="inputScenario"
        placeholder="変換したいシナリオテキストを入力（貼り付け等）して下さい。"
        rows="10"
      ></b-form-textarea>
      <b-form-textarea
        id="outputScript"
        placeholder="ここに変換結果が出力されます。"
        rows="10"
      ></b-form-textarea>
    </div>
  </section>
</template>

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
