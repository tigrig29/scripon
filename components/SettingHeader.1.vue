<template>
  <div class="input-group mb-3">
    <p>{{ set.enabled }}</p>
    <div class="input-group-prepend">
      <label class="input-group-text" :for="set.id">{{ set.title }}</label>
    </div>
    <select
      :id="set.id"
      class="custom-select"
      :value="set.enabled"
      @change="test"
    >
      <option
        v-for="option in set.enabledOptions"
        :key="option.text"
        :value="option.value"
        >{{ option.text }}</option
      >
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    set: {
      type: Object,
      required: true
    }
  },
  methods: {
    test(event) {
      alert(event.target.selectedOptions)
    },
    ...mapMutations({ toggle: 'settings/toggle' })
  }
}
</script>

<style lang="scss"></style>
