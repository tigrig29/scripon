<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div class="settings-delete-comment settings-form">
        <label>コメント削除</label>
      </div>
      <div class="settings-add-first settings-form">
        <label>シナリオ先頭に追加</label>
      </div>
      <div class="settings-add-last settings-form">
        <label>シナリオ末尾に追加</label>
      </div>
      <div class="settings-add-line-head settings-form">
        <label>行頭に追加</label>
      </div>
      <div class="settings-add-line-head settings-form">
        <label>行末に追加</label>
      </div>
      <div class="settings-add-line-end settings-form">
        <label>詳細な置換</label>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.settings-container {
  border: 3px solid #efefef;
  .settings-title {
    margin: 10px auto;
    text-align: center;
  }
}
</style>
