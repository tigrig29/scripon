<template>
  <div v-show="config.enabled && config.type !== 'none'" class="Config__Body">
    <div class="Config__Body__Item">
      <!-- 挿入フォーム -->
      <template v-if="config.type === 'insert'">
        <InsertForm :config="config" />
      </template>
      <!-- 置換フォーム -->
      <template v-if="config.type === 'replace'">
        <ReplaceForm :config="config" />
      </template>
    </div>
  </div>
</template>
<script>
import InsertForm from '@/components/config/InsertForm.vue'
import ReplaceForm from '@/components/config/ReplaceForm.vue'

export default {
  components: {
    InsertForm,
    ReplaceForm
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Config__Body {
  &__Item {
    margin-bottom: $space-base;
    .col-input-half {
      width: 34%;
    }
    .col-separater {
      p {
        line-height: 2rem;
        margin: 0;
      }
    }
  }
}
</style>
