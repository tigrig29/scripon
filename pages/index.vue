<template>
  <div class="Content"></div>
</template>

<script>
export default {
  asyncData({ store }) {
    // サイドバーメニューの非表示化
    store.commit('menu/setEnabled', false)
  }
}
</script>

<style lang="scss" scoped>
.Content {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
