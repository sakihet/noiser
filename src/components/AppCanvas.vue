<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { store } from '../store'

onMounted(() => {
  draw()
})
onUpdated(() => {
  draw()
})

const myrand = (min: number, max: number): number => {
  let r = Math.floor(Math.random() * (max - min) + 1)
  r += min
  return r
}
const generateDataURL = () => {
  const cv: HTMLCanvasElement | null = document.querySelector('#cv')
  if (cv) store.dataURL = cv.toDataURL()
}
const draw = () => {
  const cv: HTMLCanvasElement | null = document.querySelector('#cv')
  if (cv) {
    const ctx = cv.getContext('2d')
    if (ctx) {
      if (store.size.height > 0 && store.size.width > 0) {
        ctx.clearRect(0, 0, store.size.width, store.size.height)
        ctx.fillStyle = store.color
        ctx.fillRect(0, 0, store.size.width, store.size.height)
        const inputImageData = ctx.getImageData(0, 0, store.size.width, store.size.height)
        const inputData = inputImageData.data
        const outputImageData = ctx.getImageData(0, 0, store.size.width, store.size.height)
        let outputData = outputImageData.data
        for( let i = 0; i < store.size.width * store.size.height * 4; i = i + 4){
          let r = myrand(-store.threshold, store.threshold)
          outputData[i] = inputData[i] + r
          outputData[i+1] = inputData[i+1] + r
          outputData[i+2] = inputData[i+2] + r
          outputData[i+3] = 255
        }
        ctx.putImageData(outputImageData, 0, 0)
        generateDataURL()
      }
    } else {
      console.log('ctx not found')
    }
  } else {
    console.log('cv not found')
  }
}
</script>

<template>
  <canvas
    id="cv"
    :color="store.color"
    :height="store.size.height"
    :width="store.size.width"
    :threshold="store.threshold"
  />
</template>
