<template>
  <aside>
    <div class="settings-container">
      <h2 class="settings-title">設定</h2>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >コメント削除</label
          >
        </div>
        <select id="inputGroupSelect01" class="custom-select">
          <option :selected="settings.deleteComments" value="true">する</option>
          <option :selected="!settings.deleteComments" value="false"
            >しない</option
          >
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >シナリオ先頭に追加</label
          >
        </div>
        <select id="inputGroupSelect01" class="custom-select">
          <option :selected="settings.deleteComments" value="true">する</option>
          <option :selected="!settings.deleteComments" value="false"
            >しない</option
          >
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >シナリオ末尾に追加</label
          >
        </div>
        <select id="inputGroupSelect01" class="custom-select">
          <option :selected="settings.deleteComments" value="true">する</option>
          <option :selected="!settings.deleteComments" value="false"
            >しない</option
          >
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >行頭に追加</label
          >
        </div>
        <select id="inputGroupSelect01" class="custom-select">
          <option :selected="settings.deleteComments" value="true">する</option>
          <option :selected="!settings.deleteComments" value="false"
            >しない</option
          >
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >行末に追加</label
          >
        </div>
        <select id="inputGroupSelect01" class="custom-select">
          <option :selected="settings.deleteComments" value="true">する</option>
          <option :selected="!settings.deleteComments" value="false"
            >しない</option
          >
        </select>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01"
            >詳細な置換</label
          >
        </div>
        <select id="inputGroupSelect01" class="custom-select">
          <option :selected="settings.deleteComments" value="true">する</option>
          <option :selected="!settings.deleteComments" value="false"
            >しない</option
          >
        </select>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    settings() {
      return {
        deleteComments: true
      }
    }
  }
}
</script>

<style lang="scss">
.settings-container {
  border: 3px solid #efefef;
  padding: 5px;
  .settings-title {
    margin: 10px auto;
    text-align: center;
  }
  .settings-form-container {
    padding: 5px;
    .settings-subtitle {
      font-size: 16px;
    }
  }
}
</style>
