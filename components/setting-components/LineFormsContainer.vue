<template>
  <div
    v-if="setting.enabled && setting.lines !== undefined"
    class="setting-lines-container"
  >
    <LineForm
      v-for="line in setting.lines.text"
      :key="line.id"
      :line="line"
      :form-type="setting.lines.type"
    />
  </div>
</template>
<script>
import LineForm from '@/components/setting-components/LineForm.vue'

export default {
  components: {
    LineForm
  },
  props: {
    setting: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.setting-lines-container {
  margin-left: 1rem;

  .form-row {
    margin-bottom: 1rem;
  }
  .custom-switch {
    margin-top: 0.4rem;
  }
}
</style>
