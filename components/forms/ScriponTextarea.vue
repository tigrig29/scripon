<template>
  <textarea
    class="form-control ScriponTextarea"
    :class="{
      'ScriponTextarea--Horizontal': horizontal,
      'ScriponTextarea--Disabled': !enabled
    }"
    type="text"
    :rows="horizontal ? 1 : rows"
    :wrap="horizontal ? 'off' : wrap"
    :value="value"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 10
    },
    wrap: {
      type: String,
      default: 'soft'
    },
    enabled: {
      type: Boolean,
      default: true
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.ScriponTextarea {
  @include input-trans();
  @include placeholder-color($--color-grey-8);
  @include thin-scrollbar(10px);

  &--Horizontal {
    height: $font-size-base * 2.5 !important;
    overflow-y: hidden;
    overflow-x: auto;
    resize: none;
    cursor: default;
  }

  &--Disabled {
    @include placeholder-color($--color-grey-4);
    color: $--color-grey-6;
  }
}
</style>
