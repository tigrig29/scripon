<template>
  <div class="setting-lines-container">
    <template v-if="setting.type !== 'none'">
      <div v-for="line in setting.lines" :key="line.id">
        <!-- 挿入フォーム -->
        <ConfigInsertForm
          v-if="setting.type === 'insert'"
          :line="line"
          placeholder="文字、スクリプト等を入力して下さい"
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
        <!-- 置換フォーム -->
        <ConfigReplaceForm
          v-if="setting.type === 'replace'"
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
      </div>
      <button
        type="button"
        class="btn btn-primary add-new-line"
        @click="addLine({ setting })"
      >
        追加
      </button>
    </template>
  </div>
</template>
<script>
import ConfigInsertForm from '@/components/ConfigInsertForm.vue'
import ConfigReplaceForm from '@/components/ConfigReplaceForm.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    ConfigInsertForm,
    ConfigReplaceForm
  },
  props: {
    setting: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('config', [
      'addLine',
      'toggleLineEnabled',
      'updateLine',
      'deleteLine'
    ])
  }
}
</script>

<style lang="scss">
.setting-lines-container {
  .form-row {
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
    textarea {
      height: 40px;
      overflow-y: hidden;
      overflow-x: scroll;
      resize: none;
      cursor: default;
      &::-webkit-scrollbar {
        width: 0px;
      }
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

  // 使用可否によるデザイン変更
  .form-row {
    .form-control {
      transition: color 0.15s ease-in-out;
    }
    .btn-danger {
      transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }
  .form-row.disabled {
    .form-control {
      color: #adb5bd;
    }
    .btn-danger {
      border-color: #b36f76;
      background-color: #b36f76;
    }
  }
}
</style>
