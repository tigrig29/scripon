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
    <div class="col-md-10">
      <input
        class="form-control"
        type="text"
        placeholder="文字、スクリプト等を入力して下さい"
        :value="line.value"
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

<style lang="scss" scoped></style>
