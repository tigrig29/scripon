<template>
  <div class="Config__Header input-group">
    <div class="Config__Header__Title input-group-prepend">
      <label
        class="input-group-text Config__Header__Title__Label"
        :class="{
          'Config__Header__Title__Label--Enabled': selectbox.value,
          'Config__Header__Title__Label--Disabled': !selectbox.value
        }"
        :for="selectbox.id"
      >
        {{ selectbox.title }}
      </label>
    </div>
    <select
      :id="selectbox.id"
      class="custom-select Config__Header__Select"
      :class="{
        'Config__Header__Select--Enabled': selectbox.value,
        'Config__Header__Select--Disabled': !selectbox.value
      }"
      :value="selectbox.value"
      @change="toggleEnabled"
    >
      <option
        v-for="option in selectbox.options"
        :key="option.text"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    selectbox() {
      return {
        id: this.config.id,
        title: this.config.title,
        value: this.config.enabled,
        options: [
          {
            text: 'する',
            value: true
          },
          {
            text: 'しない',
            value: false
          }
        ]
      }
    }
  },
  methods: {
    toggleEnabled() {
      this.$store.commit('config/changeEnabled', this.config)
    }
  }
}
</script>

<style lang="scss" scoped>
.Config__Header {
  margin-bottom: $space-base;
  &__Title {
    flex: 1;
    user-select: none;
    &__Label {
      display: block;
      width: 100%;
      &--Enabled {
        background-color: $color-bright;
      }
      &--Disabled {
        color: $--color-grey-9;
        background-color: $--color-grey-4;
      }
    }
  }
  &__Select {
    flex: 2;
    &--Disabled {
      color: $--color-grey-9;
    }
  }
}
</style>
