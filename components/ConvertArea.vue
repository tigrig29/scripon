<template>
  <section class="main-container">
    <div class="convert-setting-wrapper">
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
    <ConvertContainer />
  </section>
</template>

<script>
import ConvertContainer from '@/components/convert/ConvertContainer.vue'

export default {
  components: {
    ConvertContainer
  }
}
</script>

<style scoped lang="scss">
.main-container {
  margin: 5px;
  width: calc(100% - 10px);
}
</style>
