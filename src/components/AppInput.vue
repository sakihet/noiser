<template>
  <div>
    <input
      :type="inputType"
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
    },
    inputType: {
      type: String,
      required: true
    }
  },
  emits: ['input']
}
</script>

<style scoped>
</style>
