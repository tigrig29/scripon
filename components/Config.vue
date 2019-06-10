<template>
  <div class="Config">
    <ConfigHeader :config="config" />
    <ConfigBody :config="config" />
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
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
