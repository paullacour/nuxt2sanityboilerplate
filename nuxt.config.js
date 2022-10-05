export default {
  target: 'static',

  head: {
    title: 'nuxt2sanityboilerplate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/scss/main.scss'],

  plugins: [
    { src: '~/plugins/sanity-image-builder.js' },
    { src: '~/plugins/vue-lazysizes.js' },
  ],

  components: true,

  buildModules: [
    ['@nuxtjs/eslint-module', { fix: true }],
    '@nuxtjs/sanity/module',
    '@nuxtjs/device',
    '@nuxtjs/style-resources',
  ],

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    minimal: true,
    useCdn: true,
    apiVersion: '2022-10-01',
  },

  styleResources: {
    scss: ['~assets/scss/_variables.scss'],
  },

  modules: ['@nuxtjs/sitemap'],

  // https://sitemap.nuxtjs.org/fr/guide/configuration
  sitemap: false,

  build: {},
}
