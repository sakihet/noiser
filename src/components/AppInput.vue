<template>
  <div>
    <input
      :type="inputType"
      :value="value"
      :id="inputId"
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
    },
    inputId: {
      type: String
    }
  },
  emits: ['input']
}
</script>

<style scoped>
</style>
