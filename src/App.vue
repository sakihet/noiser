<script setup lang="ts">
</script>

<template>
  <div class="layout-center p-4">
    <div class="text-center">
      <h1>Noiser</h1>
      <p>A noise image generator</p>
    </div>
    <div class="layout-stack-2">
      <div>
        <input
          class="h-6"
          type="color"
        />
      </div>
      <div>
        <input
          class="h-6"
          type="range"
        />
      </div>
      <div>
        <input
          class="h-6"
          type="number"
        />
      </div>
      <div>
        <input
          class="h-6"
          type="number"
        />
      </div>
      <div>
        <a href="#">Download</a>
      </div>
      <div>
        <canvas
          widht="256"
          height="256"
          style="border: solid 1px black;"
        />
      </div>
    </div>
    <div class="text-center">
      <a href="#">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
</style>
