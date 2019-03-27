<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" :for="selectbox.id">{{
        selectbox.title
      }}</label>
    </div>
    <select
      :id="selectbox.id"
      class="custom-select"
      :value="selectbox.value"
      @change="onchanged"
    >
      <option
        v-for="option in selectbox.options"
        :key="option.text"
        :value="option.value"
        >{{ option.text }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectbox: {
      type: Object,
      required: true
    },
    onchanged: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
