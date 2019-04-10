<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div v-for="set in settings" :key="set.id" class="setting-columns">
        <Selectbox :setting="set" />
        <LineFormsContainer v-show="set.enabled" :setting="set" />
      </div>
    </div>
  </aside>
</template>

<script>
import Selectbox from '@/components/setting-components/Selectbox.vue'
import LineFormsContainer from '@/components/setting-components/LineFormsContainer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Selectbox,
    LineFormsContainer
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
