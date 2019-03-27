<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div v-for="set in settings" :key="set.id" class="setting-columns">
        <Selectbox
          :selectbox="getSelectBoxElements(set)"
          :onchanged="test(set)"
        />
        <p>{{ set.enabled }}</p>
      </div>
    </div>
  </aside>
</template>

<script>
import Selectbox from '@/components/Selectbox.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Selectbox
  },
  computed: {
    ...mapState('settings', { settings: 'list' })
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
    test(setting) {
      // 選択された値を取得することもできる
      // const selectedValue = event.target.selectedOptions[0].value
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
