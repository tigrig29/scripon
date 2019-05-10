<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div v-for="set in settings" :key="set.id" class="setting-row">
        <Selectbox :setting="set" />
        <DetailsContainer v-show="set.enabled" :detail="set" />
      </div>
    </div>
  </aside>
</template>

<script>
import Selectbox from '@/components/setting/Selectbox.vue'
import DetailsContainer from '@/components/setting/DetailsContainer.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Selectbox,
    DetailsContainer
  },
  computed: {
    ...mapState('settingDetails', { settings: 'list' })
  }
}
</script>

<style lang="scss">
.settings-container {
  max-height: 500px;
  border: 3px solid #efefef;
  padding: 5px;
  overflow-x: auto;
  resize: both;
  .settings-title {
    margin: 10px auto;
    text-align: center;
  }

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

@media (min-width: 1025px) {
  .settings-container {
    top: 90px;
    width: 480px;
    height: 100%;
    max-height: 835px;
    position: sticky;
    overflow-x: auto;
  }
}
</style>
