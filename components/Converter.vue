<template>
  <section class="Converter">
    <ConverterHeader />
    <ConverterBody />
  </section>
</template>

<script>
import ConverterHeader from '@/components/ConverterHeader.vue'
import ConverterBody from '@/components/ConverterBody.vue'

export default {
  components: {
    ConverterHeader,
    ConverterBody
  }
}
</script>

<style scoped lang="scss"></style>
