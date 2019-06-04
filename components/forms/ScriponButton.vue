<template>
  <!-- 横長ボタン -->
  <button
    type="button"
    class="btn ScriponButton"
    :class="{
      'ScriponButton--Horizontal': horizontal,
      'ScriponButton--Danger': danger
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
  border-color: $color-primary;
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
}
</style>
