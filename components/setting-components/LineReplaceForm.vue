<template>
  <div class="form-row">
    <div class="col-md-0.5">
      <div class="custom-control custom-switch">
        <input
          :id="`customSwitch${line.id}`"
          type="checkbox"
          class="custom-control-input"
          :checked="line.enabled"
        />
        <label
          class="custom-control-label"
          :for="`customSwitch${line.id}`"
        ></label>
      </div>
    </div>
    <div class="col-md-5">
      <input
        class="form-control"
        type="text"
        placeholder="置換対象の文字列を入力（正規表現可）"
        :value="line.before"
      />
    </div>
    <div class="col-md-0.5 height-centering">
      <p>→</p>
    </div>
    <div class="col-md-5">
      <input
        class="form-control"
        type="text"
        placeholder="置換後の文字列を入力（正規表現可）"
        :value="line.after"
      />
    </div>
    <div class="col-md-1">
      <button type="button" class="btn btn-danger">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    line: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.height-centering {
  line-height: 38px;
}
</style>
