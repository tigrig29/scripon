<template>
  <button
    type="button"
    class="btn ScriponButton"
    :class="{
      'ScriponButton--Horizontal': horizontal,
      'ScriponButton--Danger': danger,
      'ScriponButton--Disabled': !enabled
    }"
    v-on="$listeners"
  >
    {{ caption }}
  </button>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: 'クリック！'
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    enabled: {
      type: Boolean,
      default: true
    },
    danger: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.ScriponButton {
  background: $--color-white;
  border-width: 2px;
  border-color: $color-primary;
  font-weight: $font-weight-bold;
  color: $color-primary;
  &:hover {
    background: rgba($color-primary, 0.8);
    color: $--color-white;
  }

  &--Horizontal {
    width: 100%;
    margin-bottom: $space-base;
    padding: 0.3rem 0.6rem;
  }

  &--Danger {
    border-color: $--color-red;
    color: $--color-red;
    &:hover {
      background: rgba($--color-red, 0.8);
    }
  }

  &--Disabled {
    border-color: $--color-grey-6;
    color: $--color-grey-6;
    &:hover {
      background: rgba($--color-grey-6, 0.8);
    }
  }
}
</style>
