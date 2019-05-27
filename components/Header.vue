<template>
  <header class="Header">
    <div class="header-container">
      <h1 class="title">{{ title }}</h1>
      <p>h</p>
      <p>h</p>
      <p>h</p>

      <!-- <h2 class="subtitle">
        ノベルゲーム制作（ティラノスクリプト、吉里吉里、NScripter、...）におけるシナリオのスクリプト化作業を簡単に！
      </h2> -->
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.Header {
  padding: 8px;
  border-bottom: 2px #efefef solid;
  // ヘッダー固定用
  top: 0;
  position: sticky;
  z-index: 10;
  .header-container {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    .title {
      font-family: 'spin cycle 3d';
      font-size: 32px;
      color: #56b3bc;
      margin-bottom: 0;
      filter: drop-shadow(3px 3px 1px #56b3bc4f);
    }

    .subtitle {
      font-size: 14px;
      color: #526488;
    }
  }
}
</style>
