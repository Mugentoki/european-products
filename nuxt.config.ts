// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],
  eslint: {},
  i18n: {
    locales: [
      { code: "de", language: "de-DE", file: "de-DE.js", name: "Deutsch" },
      { code: "en", language: "en-GB", file: "en-GB.js", name: "English" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    lazy: true,
    detectBrowserLanguage: {
      fallbackLocale: "en",
    }
  }
})