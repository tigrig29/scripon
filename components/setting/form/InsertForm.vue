<template>
  <div class="insert-form form-row">
    <!-- スイッチ（共通） -->
    <div class="col-switch">
      <div class="custom-control custom-switch">
        <input
          :id="`customSwitch-${line.id}`"
          type="checkbox"
          class="custom-control-input"
          :checked="line.enabled"
        />
        <label
          class="custom-control-label"
          :for="`customSwitch-${line.id}`"
        ></label>
      </div>
    </div>
    <div class="col-input">
      <input
        class="form-control"
        type="text"
        :value="line.value"
        :placeholder="placeholder"
        @input="
          e => {
            inputfunc(e.target.value)
          }
        "
      />
    </div>
    <!-- 削除ボタン（共通） -->
    <div class="col-btn">
      <button
        type="button"
        class="btn btn-danger"
        @click="
          () => {
            deletefunc()
          }
        "
      >
        削除
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    line: {
      type: Object,
      require: true,
      default() {
        return {
          id: '',
          value: '',
          enabled: true
        }
      }
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
    },
    deletefunc: {
      type: Function,
      require: false,
      default: () => {
        alert('delete')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
