// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.bunny.net' },
        { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=albert-sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap' },
      ]
    }
  },
  eslint: {},
  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', file: 'de-DE.js', name: 'Deutsch' },
      { code: 'en', language: 'en-GB', file: 'en-GB.js', name: 'English' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    detectBrowserLanguage: {
      fallbackLocale: 'en',
    }
  }
})