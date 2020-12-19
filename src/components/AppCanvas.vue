<template>
  <canvas
    :height="height"
    :width="width"
    :threshold="threshold"
    :color="color"
  ></canvas>
</template>

<script>
export default {
  name: 'AppCanvas',
  props: {
    height: Number,
    width: Number,
    threshold: Number,
    color: String
  },
  methods: {
    myrand (min, max){
      let r = Math.floor(Math.random() * (max - min) + 1)
      r += min
      return r
    },
    draw () {
      const ctx = this.$el.getContext('2d')
      ctx.fillStyle = this.color
      const w = this.width
      const h = this.height
      const th = this.threshold
      ctx.clearRect(0, 0, w, h)
      ctx.fillRect(0, 0, w, h)
      const inputImageData = ctx.getImageData(0, 0, w, h)
      const inputData = inputImageData.data
      const outputImageData = ctx.getImageData(0, 0, w, h)
      const outputData = outputImageData.data
      for( let i = 0; i < w * h * 4; i = i + 4){
        let r = this.myrand(-th, th)
        outputData[i] = inputData[i] + r
        outputData[i+1] = inputData[i+1] + r
        outputData[i+2] = inputData[i+2] + r
        outputData[i+3] = 255
      }
      ctx.putImageData(outputImageData, 0, 0)
    }
  },
  mounted () {
    this.draw()
  },
  updated () {
    this.draw()
  }
}
</script>

<style scoped>
canvas {
  border: 1px dotted;
}
</style>
