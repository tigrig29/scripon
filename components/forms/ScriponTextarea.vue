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
    :placeholder="placeholder"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
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
  &--Horizontal {
    height: $font-size-base * 2.5 !important;
    overflow-y: hidden;
    overflow-x: auto;
    resize: none;
    cursor: default;
    &::-webkit-scrollbar:horizontal {
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      background-color: rgba(0, 0, 50, 0.2);
      border: solid 3px rgba(0, 0, 0, 0);
      border-radius: 10px;
    }
  }

  &--Disabled {
    color: $--color-grey-6;
  }
}
</style>
