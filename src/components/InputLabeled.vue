<template>
  <div class="input-labeled">
    <label
      class="cell left"
      :for="inputId"
    >
      {{ labelName }}
    </label>
    <AppInput
      class="cell right"
      :inputId="inputId"
      :inputType="inputType"
      :value="value"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import AppInput from './AppInput'

export default {
  name: 'InputLabeled',
  components: {
    AppInput
  },
  props: {
    inputId: {
      type: String
    },
    labelName: {
      type: String
    },
    inputType: {
      type: String
    },
    value: {
      type: String
    }
  },
  emits: ['input']
}
</script>

<style scoped>
.input-labeled {
  display: flex;
}
.cell {
  flex: 1;
}
.left {
  text-align: right;
}
.right {
  text-align: left;
}
</style>
