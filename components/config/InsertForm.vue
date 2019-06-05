<template>
  <div class="InsertForm">
    <div
      v-for="setting in config.settings"
      :key="setting.id"
      class="InsertForm__Item form-row"
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
.InsertForm {
  &__Item {
    margin-bottom: $space-base;
    flex-wrap: nowrap;
    justify-content: space-around;
    &__Textarea {
      width: 75%;
    }
  }
}
</style>
