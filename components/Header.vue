<template>
  <div class="header-container">
    <h1 class="title">{{ title }}</h1>
    <p>h</p>
    <p>h</p>
    <p>h</p>

    <!-- <h2 class="subtitle">
        ノベルゲーム制作（ティラノスクリプト、吉里吉里、NScripter、...）におけるシナリオのスクリプト化作業を簡単に！
      </h2> -->
  </div>
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
</style>
