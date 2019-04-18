<template>
  <div :class="`insert-form form-row ${line.enabled ? 'enabled' : 'disabled'}`">
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
    <!-- 入力エリア -->
    <div class="col-input">
      <textarea
        class="form-control"
        type="text"
        rows="1"
        wrap="off"
        :value="line.value"
        :placeholder="placeholder"
        @keydown.enter.prevent=""
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
