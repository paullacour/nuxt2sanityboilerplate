<template>
  <div class="container">Nuxt 2 + Sanity Boilerplate</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`{ "settings": *[_type == "settings"] }`

export default {
  name: 'IndexPage',
  asyncData({ $sanity }) {
    return $sanity.fetch(query)
  },
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
