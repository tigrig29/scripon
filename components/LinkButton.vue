<template>
  <!-- リンク用ボタン -->
  <div class="LinkButton">
    <!-- 外部リンク -->
    <template v-if="isExternal">
      <a
        rel="noopener"
        target="_blank"
        :href="to"
        class="LinkButton__Item link-button"
        :class="{
          'LinkButton__Item--PaddingSmall': padding === 'small',
          'LinkButton__Item--Shadow': shadow,
          'color-primary': color === 'primary',
          'color-green': color === 'green'
        }"
      >
        <span class="LinkButton__Item__Text link-button-text">
          {{ name }}
        </span>
      </a>
    </template>
    <!-- 内部リンク -->
    <template v-else>
      <nuxt-link
        :to="to"
        class="LinkButton__Item link-button"
        :class="{
          'LinkButton__Item--PaddingSmall': padding === 'small',
          'LinkButton__Item--Shadow': shadow,
          'color-primary': color === 'primary',
          'color-green': color === 'green'
        }"
      >
        <span class="LinkButton__Item__Text link-button-text">
          {{ name }}
        </span>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: 'base' // small, large
    },
    shadow: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'grey'
    }
  }
}
</script>

<style lang="scss" scoped>
// SP
.LinkButton {
  &__Item {
    padding-top: $space-base - 1;
    padding-bottom: $space-base + 1;
    padding-left: $space-lg;
    padding-right: $space-lg;
    border-radius: $space-xs;
    line-height: $space-xl * 2.5;
    font-weight: $font-weight-bold;
    &--Shadow {
      box-shadow: 5px 5px 3px mix($--color-white, $color-reverse);
    }
    &--PaddingSmall {
      padding-top: $space-xs - 1;
      padding-bottom: $space-xs + 1;
      padding-left: $space-sm;
      padding-right: $space-sm;
      border-radius: $space-xs;
      font-size: $font-size-sm;
      font-weight: $font-weight-base;
    }
  }
}
</style>
