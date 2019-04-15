<template>
  <div class="replace-form form-row">
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
    <div class="col-input-half">
      <input
        class="form-control"
        type="text"
        :value="line.value.before"
        :placeholder="placeholder.before"
        @input="
          e => {
            inputfunc({ before: e.target.value, after: line.value.after })
          }
        "
      />
    </div>
    <div class="col-separater">
      <p>→</p>
    </div>
    <div class="col-input-half">
      <input
        class="form-control"
        type="text"
        :value="line.value.after"
        :placeholder="placeholder.after"
        @input="
          e => {
            inputfunc({ before: line.value.before, after: e.target.value })
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
          value: {
            before: '',
            after: ''
          },
          enabled: true
        }
      }
    },
    placeholder: {
      type: Object,
      require: false,
      default() {
        return {
          before: '置換対象の文字列を入力（正規表現可）',
          after: '置換後の文字列を入力（正規表現可）'
        }
      }
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
