<template>
  <div>
    <HeaderArea />
    <article>
      <SettingArea />
      <ConvertArea />
    </article>
  </div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea.vue'
import SettingArea from '@/components/SettingArea.vue'
import ConvertArea from '@/components/ConvertArea.vue'

export default {
  components: {
    HeaderArea,
    SettingArea,
    ConvertArea
  }
}
</script>

<style>
@media (min-width: 1025px) {
  article {
    display: flex;
  }
}
</style>
