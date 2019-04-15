<template>
  <div>
    <!-- 挿入フォーム -->
    <InsertForm
      v-if="formType === 'insert'"
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
      v-if="formType === 'replace'"
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
    line: {
      type: Object,
      required: true
    },
    formType: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations('settingDetails', ['updateLine', 'deleteLine'])
  }
}
</script>

<style lang="scss" scoped></style>
