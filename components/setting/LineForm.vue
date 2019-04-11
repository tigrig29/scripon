<template>
  <div class="form-row">
    <!-- スイッチ（共通） -->
    <div :class="formType === 'insert' ? 'col-md-1' : 'col-md-0.5'">
      <div class="custom-control custom-switch">
        <input
          :id="`customSwitch-${line.id}`"
          type="checkbox"
          class="custom-control-input"
          :checked="line.enabled"
        />
        <label
          class="custom-control-label"
          :for="`customSwitch-${line.id}`"
        ></label>
      </div>
    </div>
    <!-- 挿入フォーム -->
    <InsertForm
      v-if="formType === 'insert'"
      :value="line.value"
      placeholder="文字、スクリプト等を入力して下さい"
      :inputfunc="
        value => {
          updateLine({ line, value })
        }
      "
    />
    <!-- 置換フォーム -->
    <template v-if="formType === 'replace'">
      <div class="col-md-5">
        <input
          class="form-control"
          type="text"
          placeholder="置換対象の文字列を入力（正規表現可）"
          :value="line.before"
          @input="
            e => {
              updateLine({ line, value: e.target.value })
            }
          "
        />
      </div>
      <div class="col-md-0.5 height-centering">
        <p>→</p>
      </div>
      <div class="col-md-5">
        <input
          class="form-control"
          type="text"
          placeholder="置換後の文字列を入力（正規表現可）"
          :value="line.after"
          @input="
            e => {
              updateLine({ line, value: e.target.value })
            }
          "
        />
      </div>
    </template>
    <!-- 削除ボタン（共通） -->
    <div class="col-md-1">
      <button
        type="button"
        class="btn btn-danger"
        @click="deleteLine({ line })"
      >
        削除
      </button>
    </div>
  </div>
</template>

<script>
import InsertForm from '@/components/setting/form/InsertForm.vue'
import { mapMutations } from 'vuex'

export default {
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
  },
  components: {
    InsertForm
  }
}
</script>

<style lang="scss" scoped></style>
