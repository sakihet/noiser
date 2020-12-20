<template>
  <a
    :href="href"
    :download="download"
    :target="target"
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
    },
    target: {
      type: String
    }
  }
}
</script>

<style scoped>
</style>
