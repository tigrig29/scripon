<template>
  <div class="custom-control custom-switch ScriponSwitch">
    <input
      :id="`ScriponSwitch-${id}`"
      class="custom-control-input"
      type="checkbox"
      :checked="enabled"
      v-on="$listeners"
    />
    <label
      class="custom-control-label ScriponSwitch__Label"
      :class="{
        'ScriponSwitch__Label--Disabled': !enabled
      }"
      :for="`ScriponSwitch-${id}`"
    >
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
  &__Label {
    color: mix($color-reverse, $--color-black-3);
    cursor: pointer;
    user-select: none;
    transition: color 0.15s ease-in-out;
    &::before {
      box-shadow: none !important;
      color: $--color-white !important;
      border-color: $color-primary !important;
      background-color: $color-primary !important;
    }
    &--Disabled {
      color: $--color-grey-6;
      &::before {
        border-color: $--color-grey-6 !important;
        background-color: $--color-white !important;
      }
    }
  }
}
</style>
