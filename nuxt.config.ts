// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  css: ["~/assets/scss/main.scss"],

  modules: [[
    '@nuxtjs/google-fonts',
    {
      families: {
          'PT+Sans': true
      },
    },
  ], "vue3-carousel-nuxt"],
});