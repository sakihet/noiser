<script setup lang="ts">
import { store } from './store'
import { version } from '../package.json'
import AppCanvas from './components/AppCanvas.vue'
</script>

<template>
  <div class="layout-center p-4 layout-stack-8">
    <div class="text-center">
      <h1>Noiser</h1>
      <p class="text-small">v{{ version }}</p>
      <p>A noise image generator</p>
    </div>
    <div class="layout-stack-2 text-secondary">
      <div class="flex-row">
        <div class="mx-auto">
          <label class="flex-row">
            <div class="w-24 py-1 text-right">
              <span class="px-2">
                Color
              </span>
            </div>
            <input
              class="h-6 px-2 w-32 border-color-default"
              type="color"
              v-model="store.color"
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
              v-model="store.threshold"
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
              class="h-6 px-2 w-32 border-solid border-1 border-color-default"
              type="number"
              v-model="store.size.height"
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
              class="h-6 px-2 w-32 border-solid border-1 border-color-default"
              type="number"
              v-model="store.size.width"
            />
          </label>
        </div>
      </div>
    </div>
    <div>
      <div class="text-center">
        <a
          class="px-4 py-2 round bg-button-primary text-button text-decoration-none hover-button round"
          :href="store.dataURL"
          download="image.png"
        >
          Download
        </a>
      </div>
    </div>
  </div>
  <div class="p-4">
    <div class="text-center">
      <AppCanvas />
    </div>
  </div>
  <div>
    <div class="text-center">
      <a href="https://github.com/sakihet/noiser">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
</style>
