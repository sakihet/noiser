<template>
  <a
    :href="href"
    :download="download"
  >{{ text }}</a>
</template>

<script>
export default {
  name: 'AppAnchor',
  props: {
    text: {
      type: String
    },
    href: {
      type: String
    },
    download: {
      type: String
    }
  }
}
</script>

<style scoped>
</style>
