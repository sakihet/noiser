<template>
  <div>
    <canvas
      :height="height"
      :width="width"
    >
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'AppCanvas',
  props: {
    height: Number,
    width: Number
  }
}
</script>

<style scoped>
canvas {
  border: 1px dotted;
}
</style>
