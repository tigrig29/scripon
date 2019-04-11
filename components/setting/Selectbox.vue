<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label
        :class="`input-group-text ${selectbox.value ? 'enabled' : ''}`"
        :for="selectbox.id"
        >{{ selectbox.title }}</label
      >
    </div>
    <select
      :id="selectbox.id"
      class="custom-select"
      :value="selectbox.value"
      @change="toggleEnabled"
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
    setting: {
      type: Object,
      required: true
    }
  },
  computed: {
    selectbox() {
      return {
        id: this.setting.id,
        title: this.setting.title,
        value: this.setting.enabled,
        options: [
          {
            text: 'する',
            value: true
          },
          {
            text: 'しない',
            value: false
          }
        ]
      }
    }
  },
  methods: {
    toggleEnabled() {
      this.$store.commit('settings/changeEnabled', this.setting)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group-text.enabled {
  background-color: #d6f4ff; //#a1f8c3;
}
</style>
