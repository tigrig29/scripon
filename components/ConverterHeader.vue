<template>
  <div class="Converter__Header">
    <div class="Converter__Header__Item">
      <div v-if="false" class="Button__ChangeMode">
        <b-button-group size="sm">
          <b-button variant="primary">
            {{ '〇〇モード' }}
          </b-button>
          <b-button variant="primary">
            {{ '〇〇モード' }}
          </b-button>
        </b-button-group>
      </div>
    </div>
    <div class="Converter__Header__Item">
      <div class="Switch__RealtimeConvert">
        <scripon-switch
          id="RealtimeConvert"
          caption="リアルタイム変換"
          :enabled="$store.state.converter.setting.realtime"
          @change="
            $store.commit('converter/toggleSetting', { key: 'realtime' })
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScriponSwitch from '~/components/forms/ScriponSwitch'

export default {
  components: {
    ScriponSwitch
  }
}
</script>

<style scoped lang="scss">
.Converter__Header {
  display: flex;
  justify-content: space-between;
}
</style>
