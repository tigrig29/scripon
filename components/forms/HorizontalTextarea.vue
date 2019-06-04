<template>
  <!-- 横長ボタン -->
  <div class="HorizontalTextarea">
    <button
      type="button"
      class="btn HorizontalTextarea__Button"
      v-on="$listeners"
    >
      {{ caption }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      default: 'クリック！'
    }
  }
}
</script>

<style lang="scss">
.textarea--horizontal {
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
</style>
