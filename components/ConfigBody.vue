<template>
  <div v-show="config.enabled && config.type !== 'none'" class="Config__Body">
    <div class="Config__Body__Item">
      <!-- 挿入フォーム -->
      <template v-if="config.type === 'insert'">
        <InsertForm :config="config" />
      </template>
      <!-- 置換フォーム -->
      <!-- <div
          v-if="config.type === 'replace'"
          class="Config__Body__Item"
        >
          <ReplaceForm
            :line="line"
            :placeholder="{
              before: '置換対象の文字列を入力（正規表現可）',
              after: '置換後の文字列を入力（正規表現可）'
            }"
            :switchfunc="
              () => {
                toggleLineEnabled({ line })
              }
            "
            :inputfunc="
              value => {
                updateLine({ line, value })
              }
            "
            :deletefunc="
              () => {
                deleteLine({ line })
              }
            "
          />
        </div> -->
    </div>
  </div>
</template>
<script>
import InsertForm from '@/components/config/InsertForm.vue'
// import ReplaceForm from '@/components/config/ReplaceForm.vue'

export default {
  components: {
    InsertForm
    // ReplaceForm
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Config__Body {
  &__Item {
    margin-bottom: 1rem;
    flex-wrap: nowrap;
    justify-content: flex-end;
    .col-input {
      width: 75%;
    }
    .col-input-half {
      width: 34%;
    }
    .col-separater {
      p {
        line-height: 2rem;
        margin: 0;
      }
    }

    // 使用可否によるデザイン変更
    &--enabled {
      .form-control {
        transition: color 0.15s ease-in-out;
      }
      .btn-danger {
        transition: background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
    }
    &--disabled {
      .form-control {
        color: #adb5bd;
      }
      .btn-danger {
        border-color: #b36f76;
        background-color: #b36f76;
      }
    }
  }
  .custom-switch {
    margin-top: 0.4rem;
  }

  .add-new-line {
    width: 100%;
    padding: 0.3rem 0.6rem;
    margin-bottom: 1rem;
    background: #fff;
    color: #007bff;
    &:hover {
      background: #dfeeff;
    }
  }
}
</style>
