<template>
  <div class="col-md-10">
    <input
      class="form-control"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="
        e => {
          inputfunc(e.target.value)
        }
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      require: true,
      default: ''
    },
    placeholder: {
      type: String,
      require: false,
      default: '文字、スクリプト等を入力して下さい'
    },
    inputfunc: {
      type: Function,
      require: false,
      default: ({ value }) => {
        alert(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
