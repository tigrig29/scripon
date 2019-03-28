<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div v-for="set in settings" :key="set.id" class="setting-columns">
        <Selectbox
          :selectbox="getSelectBoxElements(set)"
          :onchanged="toggleEnabled"
        />
        <LineFormsContainer :setting="set" />
      </div>
    </div>
  </aside>
</template>

<script>
import Selectbox from '@/components/Selectbox.vue'
import LineFormsContainer from '@/components/setting-components/LineFormsContainer.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Selectbox,
    LineFormsContainer
  },
  computed: {
    ...mapState('settings', { settings: 'list' }),
    ...mapGetters({ getSettingById: 'settings/getSettingById' })
  },
  methods: {
    getSelectBoxElements(setting) {
      return {
        id: setting.id,
        title: setting.title,
        value: setting.enabled,
        options: [
          {
            text: 'する',
            value: true
          },
          {
            text: 'しない',
            value: false
          }
        ]
      }
    },
    toggleEnabled(event) {
      const targetId = event.target.id
      const setting = this.getSettingById(targetId)
      this.changeEnabled(setting)
    },
    ...mapMutations({ changeEnabled: 'settings/changeEnabled' })
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
