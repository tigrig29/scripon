<template>
  <div class="InsertForm">
    <!-- <draggable> -->
    <div
      v-for="setting in config.settings"
      :key="setting.id"
      class="InsertForm__Item"
      :class="{
        'InsertForm--enabled': setting.enabled,
        'InsertForm--disabled': !setting.enabled
      }"
    >
      <!-- スイッチ（共通） -->
      <div class="InsertForm__Item__Switch">
        <ScriponSwitch
          :id="setting.id"
          :enabled="setting.enabled"
          @change="toggleSettingEnabled(setting)"
        />
      </div>
      <!-- 入力エリア -->
      <div class="InsertForm__Item__Textarea">
        <ScriponTextarea
          :horizontal="true"
          :value="setting.value"
          :placeholder="setting.placeholder"
          :enabled="setting.enabled"
          @keydown.enter.prevent=""
          @input="
            e => {
              updateSetting({ setting, value: e.target.value })
            }
          "
        />
      </div>
      <!-- 削除ボタン -->
      <div class="InsertForm__Item__Button">
        <scripon-button
          caption="削除"
          :danger="true"
          :enabled="setting.enabled"
          @click="deleteSetting(setting)"
        />
      </div>
    </div>
    <!-- </draggable> -->
    <!-- 追加ボタン -->
    <scripon-button
      caption="追加"
      :horizontal="true"
      @click="addSetting(config)"
    />
  </div>
</template>

<script>
// import draggable from 'vuedraggable'
import { mapMutations } from 'vuex'

import ScriponButton from '~/components/forms/ScriponButton'
import ScriponTextarea from '~/components/forms/ScriponTextarea'
import ScriponSwitch from '~/components/forms/ScriponSwitch'

export default {
  components: {
    // draggable,
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
.InsertForm {
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
    [class^='InsertForm__Item'] {
      margin-left: $space-sm;
    }
  }
}
</style>
