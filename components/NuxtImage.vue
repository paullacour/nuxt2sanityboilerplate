<template>
  <img
    :src="placeholder"
    :data-srcset="srcSet"
    :alt="alt"
    data-sizes="auto"
    :data-aspectratio="image.dimensions.aspectRatio"
    class="nuxt-image lazyload"
    :class="[{ lazypreload: preload }, { fade: fade }]"
  />
</template>

<script>
export default {
  name: 'NuxtImage',
  props: {
    image: { type: Object, default: () => {} },
    title: { type: String, default: '' },
    range: { type: Array, default: () => [200, 2000] },
    preload: { type: Boolean, default: false },
    fade: { type: Boolean, default: true },
  },
  computed: {
    settings() {
      return this.$store.state.settings
    },
    year() {
      return new Date().getFullYear()
    },
    src() {
      return this.imgUrl(600)
    },
    srcSet() {
      const srcSet = []
      for (let i = this.range[0]; i <= this.range[1]; i += 200) {
        srcSet.push(` ${this.imgUrl(i)} ${i}w`)
      }
      return srcSet.toString()
    },
    placeholder() {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.image.dimensions.width} ${this.image.dimensions.height}"%3E%3C/svg%3E`
    },
    alt() {
      if (this.image.alt) {
        return `${this.image.alt} | © ${this.year} ${process.env.npm_package_title}`
      } else {
        return `${this.title ? this.title + ' | ' : ''}© ${this.year} ${
          process.env.npm_package_title
        }`
      }
    },
  },
  mounted() {
    this.$el.addEventListener('lazyloaded', this.$emit('load'))
  },
  methods: {
    imgUrl(size) {
      return this.$urlFor(this.image).size(size).auto('format')
    },
  },
}
</script>

<style lang="scss" scoped>
.nuxt-image {
  display: block;
  width: 100%;
  height: auto;
  &.lazyload,
  &.lazyloading {
    opacity: 0;
    cursor: wait;
  }
  &.lazyloaded {
    opacity: 1;
  }
  &.fade {
    &.lazyloaded {
      transition: opacity 200ms;
    }
  }
}
</style>
