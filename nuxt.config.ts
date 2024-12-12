// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./inner_project"],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `
          //   @import "@/assets/styles/_variables.scss";
          //   @import "@/assets/styles/_mixins.scss";
          // `
        }
      }
    }
  },

  routeRules: {
    '/': {ssr: true}, // SSR
    '/fetch': {ssr: true, prerender: true}, // Pure CSR, no prerendering
    '/fruit/**': {ssr: true},
    '/fruit': {ssr: false}, // SSG
  },
  generate: {
    exclude: ['/veggie', '/Veggie'],
  },

  modules: ['@nuxt/content']
})