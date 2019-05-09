<template>
  <div>
    <HeaderArea />
    <article>
      <SettingArea />
      <!-- <ConvertArea /> -->
    </article>
  </div>
</template>

<script>
import HeaderArea from '@/components/HeaderArea.vue'
import SettingArea from '@/components/SettingArea.vue'

export default {
  components: {
    HeaderArea,
    SettingArea
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
