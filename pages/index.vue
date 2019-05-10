<template>
  <div>
    <HeaderArea :title="title" />
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

const title = 'NovelGame-SS-Converter'

export default {
  head() {
    return {
      title: `${title} | ノベルゲーム制作のシナリオ→スクリプト化作業を簡単に！`
    }
  },
  components: {
    HeaderArea,
    SettingArea,
    ConvertArea
  },
  data() {
    return {
      title
    }
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
