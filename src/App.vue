<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const store = reactive({
  color: "#1abc9c",
  dataURL: '',
  size: {
    height: 256,
    width: 256
  },
  threshold: 32,
})

const handleChangeColor = (e: Event) => {
  const elem = e.target as HTMLInputElement
  store.color = elem.value
  drawTimer()
}
const handleChangeThreshold = (e: Event) => {
  const elem = e.target as HTMLInputElement
  store.threshold = Number(elem.value)
  drawTimer()
}
const handleChangeHeight = (e: Event) => {
  const elem = e.target as HTMLInputElement
  store.size.height = Number(elem.value)
  drawTimer()
}
const handleChangeWidth = (e: Event) => {
  const elem = e.target as HTMLInputElement
  store.size.width = Number(elem.value)
  drawTimer()
}
const drawTimer = () => {
  setTimeout(() => draw(), 100)
}
const myrand = (min: number, max: number): number => {
  let r = Math.floor(Math.random() * (max - min) + 1)
  r += min
  return r
}
const draw = () => {
  const cv: HTMLCanvasElement | null = document.querySelector('#cv')
  if (cv) {
    const ctx = cv.getContext('2d')
    if (ctx) {
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
    } else {
      console.log('ctx not found')
    }
  } else {
    console.log('cv not found')
  }
}
const generateDataURL = () => {
  const cv: HTMLCanvasElement | null = document.querySelector('#cv')
  if (cv) {
    store.dataURL = cv.toDataURL()
  }
}
onMounted(() => {
  draw()
})
</script>

<template>
  <div class="layout-center p-4 layout-stack-8">
    <div class="text-center">
      <h1>Noiser</h1>
      <p>A noise image generator</p>
    </div>
    <div class="layout-stack-2">
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-24 py-1 text-right">
              <span class="px-2">
                Color
              </span>
            </div>
            <input
              class="h-6 px-2 w-32"
              type="color"
              :value="store.color"
              @change="handleChangeColor($event)"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-24 py-1 text-right">
              <span class="px-2">
                Threshold
              </span>
            </div>
            <input
              class="h-6 px-2 w-32"
              type="range"
              :value="store.threshold"
              @change="handleChangeThreshold($event)"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-24 py-1 text-right">
              <span class="px-2">
                Height
              </span>
            </div>
            <input
              class="h-6 px-2 w-32"
              type="number"
              :value="store.size.height"
              @change="handleChangeHeight($event)"
            />
          </label>
        </div>
      </div>
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-24 py-1 text-right">
              <span class="px-2">
                Width
              </span>
            </div>
            <input
              class="h-6 px-2 w-32"
              type="number"
              :value="store.size.width"
              @change="handleChangeWidth($event)"
            />
          </label>
        </div>
      </div>
    </div>
    <div>
      <div class="text-center">
        <a
          class=""
          :href="store.dataURL"
          download="image.png"
        >
          Download
        </a>
      </div>
    </div>
    <div class="text-center">
      <canvas
        id="cv"
        :height="store.size.height"
        :width="store.size.width"
      />
    </div>
    <div class="text-center">
      <a href="#">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
</style>
