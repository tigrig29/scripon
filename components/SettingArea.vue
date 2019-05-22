<template>
  <div class="settings-container">
    <div v-for="set in settings" :key="set.id" class="setting-row">
      <SettingTitle :setting="set" />
      <SettingBody v-show="set.enabled" :setting="set" />
    </div>
  </div>
</template>

<script>
import SettingTitle from '@/components/setting/SettingTitle.vue'
import SettingBody from '@/components/setting/SettingBody.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SettingTitle,
    SettingBody
  },
  computed: {
    ...mapState('settings', { settings: 'list' })
  }
}
</script>

<style lang="scss">
// SP
.settings-container {
  padding: 8px;
  overflow-x: auto;
  height: 50vh;
  border-bottom: 2px solid #efefef;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: rgba(0, 0, 50, 0.2);
    border: solid 3px rgba(0, 0, 0, 0);
    border-radius: 10px;
  }
}

// PC
@media (min-width: 768px) {
  .settings-container {
    height: calc(100vh - 58px);
    border-right: 2px solid #efefef;
  }
}
</style>
