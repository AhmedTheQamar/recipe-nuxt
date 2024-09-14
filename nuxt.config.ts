// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
     "@nuxtjs/tailwindcss",
      "@nuxtjs/google-fonts",
      "@nuxt/icon",
      '@nuxt/image',
    ],

  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  
  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },
  image: {
    domains: [
      'https://cdn.dummyjson.com',
    ]
  },

  googleFonts: {
    families: {
      Montserrat: true,
    }
  }
});