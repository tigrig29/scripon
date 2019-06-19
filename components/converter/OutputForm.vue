<template>
  <div class="OutputForm">
    <!-- コピーボタン -->
    <transition name="fade">
      <button
        v-show="mouseentering"
        id="outputCopyButton"
        class="btn OutputForm__Copy"
        pill
        @mouseenter="mouseentering = true"
        @click="execCopy()"
      >
        コピーする
      </button>
    </transition>
    <!-- 変換後 出力エリア -->
    <scripon-textarea
      class="OutputForm__Textarea"
      :value="converterText.output"
      placeholder="ここに変換結果が出力されます。"
      :rows="rows"
      readonly
      @mouseenter="mouseentering = true"
      @mouseleave="mouseentering = false"
    />
  </div>
</template>

<script>
import utils from '~/assets/js/utils'
import { mapState } from 'vuex'

import ScriponTextarea from '@/components/forms/ScriponTextarea'

export default {
  components: {
    ScriponTextarea
  },
  mixins: [utils],
  props: {
    rows: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      mouseentering: false
    }
  },
  computed: {
    ...mapState('converter', {
      converterText: 'text'
    })
  },
  methods: {
    // コピーボタン処理
    execCopy() {
      // コピー
      const result = this.copyTextToClipboard(this.converterText.output)
      // トースト表示
      const message = result
        ? 'クリップボードにコピーしました！'
        : 'コピーに失敗しました。ブラウザのバージョンが古い場合には更新してください。'
      const variant = result ? 'info' : 'error'
      this.toast({ append: true, variant, message })
    },
    // クリップボードへコピー処理
    copyTextToClipboard(value) {
      // コピー処理用 textarea 作成
      const temp = document.createElement('textarea')

      // 値挿入 → 全選択
      temp.value = value
      temp.selectionStart = 0
      temp.selectionEnd = temp.value.length
      // 表示されないようにスタイル調整
      temp.style.position = 'fixed'
      temp.style.left = '-100%'

      // DOM 追加
      document.body.appendChild(temp)

      // コピー処理
      temp.focus()
      const result = document.execCommand('copy')
      temp.blur()

      // 削除
      document.body.removeChild(temp)

      // コピーの成功可否を返す
      return result
    },
    // トースト表示
    toast({ variant = 'info', message }) {
      this.$toasted[variant](message, {
        theme: 'outline',
        position: 'bottom-right',
        duration: 3000,
        action: {
          text: 'close',
          onClick: (e, toastObject) => {
            toastObject.goAway(0)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.toasted.outline {
  &.info {
    border-color: $color-secondary;
    color: $color-secondary;
  }
  &.error {
    border-color: $--color-red;
    color: $--color-red;
  }
}
</style>

<style lang="scss" scoped>
.OutputForm {
  position: relative;
  &__Copy {
    top: 0;
    right: 0;
    margin: $space-sm;
    position: absolute;
    background: none;
    border: 2px solid $color-secondary;
    color: $color-secondary;
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    &:hover {
      background: rgba($color-secondary, 0.5);
      color: $--color-white;
    }
  }
  &__Textarea {
    &[readonly] {
      background-color: rgba(mix($color-primary, $--color-grey-9), 0.1);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
