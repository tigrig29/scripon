<template>
  <div class="Config">
    <ConfigHeader :setting="setting" />
    <ConfigBody v-show="setting.enabled" :setting="setting" />
  </div>
</template>

<script>
import ConfigHeader from '@/components/ConfigHeader.vue'
import ConfigBody from '@/components/ConfigBody.vue'

export default {
  components: {
    ConfigHeader,
    ConfigBody
  },
  props: {
    setting: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
