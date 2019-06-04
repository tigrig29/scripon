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
      <div class="col-switch">
        <div class="custom-control custom-switch">
          <input
            :id="`customSwitch-${setting.id}`"
            type="checkbox"
            class="custom-control-input"
            :checked="setting.enabled"
            @change="toggleSettingEnabled(setting)"
          />
          <label
            class="custom-control-label"
            :for="`customSwitch-${setting.id}`"
          ></label>
        </div>
      </div>
      <!-- 入力エリア -->
      <div class="InsertForm__Item__Textarea">
        <textarea
          class="form-control textarea--horizontal"
          type="text"
          rows="1"
          wrap="off"
          :value="setting.value"
          :placeholder="setting.placeholder"
          @keydown.enter.prevent=""
          @input="
            e => {
              updateSetting({ setting, value: e.target.value })
            }
          "
        />
      </div>
      <!-- 削除ボタン -->
      <div class="col">
        <scripon-button
          caption="削除"
          danger="true"
          @click="deleteSetting(setting)"
        />
      </div>
    </div>
    <!-- 追加ボタン -->
    <scripon-button
      caption="追加"
      horizontal="true"
      @click="addSetting(config)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ScriponButton from '~/components/forms/ScriponButton'

export default {
  components: {
    ScriponButton
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
    margin-bottom: 1rem;
    flex-wrap: nowrap;
    justify-content: flex-end;
    &__Textarea {
      width: 75%;
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
}
</style>
