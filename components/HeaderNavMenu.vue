<template>
  <ul class="Menu">
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/guide">
        使い方
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/examples">
        例
      </nuxt-link>
    </li>
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/converter">
        コンバーター
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dropdownList: [
        {
          // name: this.$store.state.view.lang.links.github,
          name: 'Github',
          path: 'https://github.com/nuxt',
          blank: true
        },
        {
          name: 'Twitter',
          path: 'https://twitter.com/nuxt_js',
          blank: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Menu {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  @media (min-width: 991px) {
    flex: 1;
    flex-wrap: nowrap;
    padding-left: 15px;
  }
  &__Item {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #dbdfe1;
    @media (min-width: 991px) {
      border-bottom: none;
    }
    &:last-child {
      border-bottom: none;
    }
    &__Link {
      height: 60px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      color: #35495e;
      font-size: 16px;
      text-decoration: none;
      letter-spacing: 0.5px;
      &:hover {
        color: #41b883;
      }
      @media (min-width: 991px) {
        height: 79px;
      }
    }
    .nuxt-link-active,
    .nuxt-link-active:hover {
      color: #41b883;
    }
  }
}
</style>
