<template>
  <div id="app">
    <AppHeader
      :headerText="name"
      :headerDescription="description"
    />
    <AppCanvas
      :height="parseInt(height)"
      :width="parseInt(width)"
    />
  </div>
</template>

<script>
import AppCanvas from './components/AppCanvas'
import AppHeader from './components/AppHeader'
import {name} from '../package.json'
import {description} from '../package.json'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppHeader
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      description: description,
      height: 256,
      width: 256
    }
  }
}
</script>

<style>
#app {
}
</style>
