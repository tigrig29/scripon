<template>
  <div class="ReplaceForm">
    <div
      v-for="setting in config.settings"
      :key="setting.id"
      class="ReplaceForm__Item"
      :class="{
        'ReplaceForm--enabled': setting.enabled,
        'ReplaceForm--disabled': !setting.enabled
      }"
    >
      <!-- スイッチ -->
      <div class="ReplaceForm__Item__Switch">
        <ScriponSwitch
          :id="setting.id"
          :enabled="setting.enabled"
          @change="toggleSettingEnabled(setting)"
        />
      </div>
      <!-- 入力エリア -->
      <div class="ReplaceForm__Item__Textarea">
        <ScriponTextarea
          :horizontal="true"
          :value="setting.value.before"
          :placeholder="setting.placeholder.before"
          :enabled="setting.enabled"
          @keydown.enter.prevent=""
          @input="
            e => {
              updateSetting({
                setting,
                value: { before: e.target.value, after: setting.value.after }
              })
            }
          "
        />
        <div class="spacer--xs" />
        <ScriponTextarea
          :horizontal="true"
          :value="setting.value.after"
          :placeholder="setting.placeholder.after"
          :enabled="setting.enabled"
          @keydown.enter.prevent=""
          @input="
            e => {
              updateSetting({
                setting,
                value: { before: setting.value.before, after: e.target.value }
              })
            }
          "
        />
      </div>
      <!-- 削除ボタン -->
      <div class="ReplaceForm__Item__Button">
        <scripon-button
          caption="削除"
          :danger="true"
          :enabled="setting.enabled"
          @click="deleteSetting(setting)"
        />
      </div>
    </div>
    <!-- 追加ボタン -->
    <scripon-button
      caption="追加"
      :horizontal="true"
      @click="addSetting(config)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ScriponButton from '~/components/forms/ScriponButton'
import ScriponTextarea from '~/components/forms/ScriponTextarea'
import ScriponSwitch from '~/components/forms/ScriponSwitch'

export default {
  components: {
    ScriponButton,
    ScriponTextarea,
    ScriponSwitch
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('config', [
      'toggleSettingEnabled',
      'addSetting',
      'updateSetting',
      'deleteSetting'
    ])
  }
}
</script>

<style lang="scss" scoped>
.ReplaceForm {
  &__Item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin-bottom: $space-base;
    &__Textarea {
      width: 100%;
    }
    &__Button {
      min-width: 60px;
      align-self: flex-end;
    }
    [class^='ReplaceForm__Item'] {
      margin-left: $space-sm;
    }
  }
}
</style>
