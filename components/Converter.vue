<template>
  <section class="main-container">
    <div v-if="false" class="convert-setting-wrapper">
      <b-button-group size="sm">
        <b-button variant="primary">
          {{ '〇〇モード' }}
        </b-button>
        <b-button variant="primary">
          {{ '〇〇モード' }}
        </b-button>
      </b-button-group>
      <div style="float:right;">リアルタイム変換 ON</div>
    </div>
    <ConverterBody />
  </section>
</template>

<script>
import ConverterBody from '@/components/ConverterBody.vue'

export default {
  components: {
    ConverterBody
  }
}
</script>

<style scoped lang="scss">
.main-container {
  margin: 5px;
  width: calc(100% - 10px);
}
</style>
