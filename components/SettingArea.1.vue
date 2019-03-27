<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div v-for="set in settings" :key="set.id" class="setting-columns">
        <SettingHeader :set="set" />
      </div>
    </div>
  </aside>
</template>

<script>
import SettingHeader from '@/components/SettingHeader.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SettingHeader
  },
  computed: {
    ...mapState('settings', { settings: 'list' })
  }
}
</script>

<style lang="scss">
.settings-container {
  border: 3px solid #efefef;
  padding: 5px;
  .settings-title {
    margin: 10px auto;
    text-align: center;
  }
}
</style>
