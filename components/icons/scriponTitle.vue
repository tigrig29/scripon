<template>
  <div class="ScriponTitle">
    <scripon-icon />
    <scripon-logo :title="title" />
  </div>
</template>

<script>
import scriponIcon from '@/components/icons/scriponIcon'
import scriponLogo from '@/components/icons/scriponLogo'

export default {
  components: {
    scriponIcon,
    scriponLogo
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ScriponTitle {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>
