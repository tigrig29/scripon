<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div v-for="set in settings" :key="set.id" class="setting-columns">
        <Selectbox :setting="set" />
        <DetailsContainer
          v-show="set.enabled"
          :detail="getSettingDetail(set.id)"
        />
        <!-- <p v-show="set.enabled">aaa</p> -->
      </div>
    </div>
  </aside>
</template>

<script>
import Selectbox from '@/components/setting-components/Selectbox.vue'
import DetailsContainer from '@/components/setting-components/DetailsContainer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Selectbox,
    DetailsContainer
  },
  computed: {
    ...mapState('settings', { settings: 'list' })
  },
  methods: {
    getSettingDetail(id) {
      return this.$store.state.settingDetails[id]
    }
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
