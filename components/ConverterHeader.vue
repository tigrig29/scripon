<template>
  <div class="Converter__Header">
    <div class="Converter__Header__Item">
      <adsbygoogle :ad-style="adStyle" :ad-slot="'2101761107'" />
    </div>
    <div class="Converter__Header__Item">
      <div v-if="false" class="Button__ChangeMode">
        <b-button-group size="sm">
          <b-button variant="primary">
            {{ '〇〇モード' }}
          </b-button>
          <b-button variant="primary">
            {{ '〇〇モード' }}
          </b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      adStyle: {
        display: 'block',
        width: '1392px',
        height: '64px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Converter__Header {
  display: flex;
  justify-content: space-between;
}
</style>
