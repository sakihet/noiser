<template>
  <div>
    <input
      type="number"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String
    }
  },
  emits: ['input']
}
</script>

<style scoped>
</style>
