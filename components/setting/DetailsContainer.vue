<template>
  <div class="setting-lines-container">
    <div v-for="line in detail.lines" :key="line.id" :line="line">
      <!-- 挿入フォーム -->
      <InsertForm
        v-if="detail.type === 'insert'"
        :line="line"
        placeholder="文字、スクリプト等を入力して下さい"
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
      <ReplaceForm
        v-if="detail.type === 'replace'"
        :line="line"
        :placeholder="{
          before: '置換対象の文字列を入力（正規表現可）',
          after: '置換後の文字列を入力（正規表現可）'
        }"
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
      v-if="detail.type !== 'none'"
      type="button"
      class="btn btn-primary add-new-line"
      @click="addLine({ detail })"
    >
      追加
    </button>
  </div>
</template>
<script>
import InsertForm from '@/components/setting/form/InsertForm.vue'
import ReplaceForm from '@/components/setting/form/ReplaceForm.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    InsertForm,
    ReplaceForm
  },
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('settingDetails', ['addLine', 'updateLine', 'deleteLine'])
  }
}
</script>

<style lang="scss">
.setting-lines-container {
  margin-left: 1rem;

  .form-row {
    margin-bottom: 1rem;
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
