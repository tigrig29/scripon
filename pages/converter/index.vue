<template>
  <div class="container">
    <aside>
      <SettingArea />
    </aside>
    <article>
      <ConvertArea />
    </article>
  </div>
</template>

<script>
import SettingArea from '@/components/SettingArea.vue'
import ConvertArea from '@/components/ConvertArea.vue'

export default {
  components: {
    SettingArea,
    ConvertArea
  }
}
</script>

<style lang="scss">
// PC
@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 512px minmax(256px, auto);
  }
}
</style>
