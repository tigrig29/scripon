<template>
  <div class="Separator">
    <div
      class="Separator__Shape"
      :class="{
        'Separator__Shape--Upper': payload.side === 'upper',
        'Separator__Shape--Lower': payload.side === 'lower',
        grey: payload.color === 'grey' || payload.color === 'gray',
        white: payload.color === 'white'
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Separator {
  position: relative;
  &__Shape {
    position: absolute;
    &--Upper {
      right: 50%;
      top: -160px;
      border-right: 978px solid transparent;
      &.grey,
      &.gray {
        border-top: 128px solid $--color-grey-2;
      }
      &.white {
        border-top: 128px solid $--color-white;
      }
    }
    &--Lower {
      left: 50%;
      top: 32px;
      border-left: 978px solid transparent;
      &.grey,
      &.gray {
        border-bottom: 128px solid $--color-grey-2;
      }
      &.white {
        border-bottom: 128px solid $--color-white;
      }
    }
  }
}
</style>
