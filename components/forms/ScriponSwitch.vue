<template>
  <div class="custom-control custom-switch ScriponSwitch">
    <input
      :id="`ScriponSwitch-${id}`"
      class="custom-control-input"
      type="checkbox"
      :checked="enabled"
      v-on="$listeners"
    />
    <label class="custom-control-label" :for="`ScriponSwitch-${id}`">
      {{ caption }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      default: true
    },
    caption: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.ScriponSwitch {
  margin-top: 0.4rem;
}
</style>
