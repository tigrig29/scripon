<template>
  <header>
    <div class="header-container">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">
        ノベルゲーム制作（ティラノスクリプト、吉里吉里、NScripter、...）におけるシナリオのスクリプト化作業を簡単に！
      </h2>
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
.header-container {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  background: #efefef;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    color: #35495e;
    letter-spacing: 1px;
    filter: drop-shadow(4px 3px 0px rgba(0, 0, 100, 0.2));
  }

  .subtitle {
    font-size: 14px;
    color: #526488;
  }
}

// ヘッダー固定用
header {
  top: 0;
  position: sticky;
  z-index: 10;
}
</style>
