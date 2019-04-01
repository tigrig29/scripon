<template>
  <div
    v-if="setting.enabled && setting.lines !== undefined"
    class="setting-lines-container"
  >
    <template v-if="setting.lines.type === 'insert'">
      <LineInsertForm
        v-for="line in setting.lines.text"
        :key="line.id"
        :line="line"
      />
    </template>
    <template v-if="setting.lines.type === 'replace'">
      <LineReplaceForm
        v-for="line in setting.lines.text"
        :key="line.id"
        :line="line"
      />
    </template>
  </div>
</template>
<script>
import LineInsertForm from '@/components/setting-components/LineInsertForm.vue'
import LineReplaceForm from '@/components/setting-components/LineReplaceForm.vue'

export default {
  components: {
    LineInsertForm,
    LineReplaceForm
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
