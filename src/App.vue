<template>
  <div id="app">
    <AppHeader
      :headerText="name"
      :headerDescription="description"
    />
    <AppInput
      :value="height"
      @input="height = $event"
    />
    <AppInput
      :value="width"
      @input="width = $event"
    />
    <AppCanvas
      :height="parseInt(height)"
      :width="parseInt(width)"
    />
    <a href="https://github.com/sakihet/noiser" target="_blank">github</a>
    <p>version: {{ version }}</p>
  </div>
</template>

<script>
import AppCanvas from './components/AppCanvas'
import AppHeader from './components/AppHeader'
import AppInput from './components/AppInput'
import {name} from '../package.json'
import {description} from '../package.json'
import {version} from '../package.json'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppHeader,
    AppInput
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      description: description,
      version: version,
      height: "256",
      width: "256"
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
}
</style>
