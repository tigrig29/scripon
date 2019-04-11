<template>
  <div class="setting-lines-container">
    <LineForm
      v-for="line in detail.lines"
      :key="line.id"
      :line="line"
      :form-type="detail.type"
    />
    <button
      v-if="detail.type !== 'none'"
      type="button"
      class="btn btn-primary add-new-line"
      @click="addLine(detail)"
    >
      追加
    </button>
  </div>
</template>
<script>
import LineForm from '@/components/setting-components/LineForm.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    LineForm
  },
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('settingDetails', ['addLine'])
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

  .add-new-line {
    width: 100%;
    padding: 0.3rem 0.6rem;
    margin-bottom: 1rem;
    background: #fff;
    color: #007bff;
    &:hover {
      background: #dfeeff;
    }
  }
}
</style>
