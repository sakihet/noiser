<template>
  <div id="app">
    <AppHeader
      :headerText="name"
      :headerDescription="description"
    />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import {name} from '../package.json'
import {description} from '../package.json'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
      name: name[0].toUpperCase() + name.slice(1),
      description: description
    }
  }
}
</script>

<style>
#app {
}
</style>
