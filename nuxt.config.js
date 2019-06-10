import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/persistedstate.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt'],
    // Doc: https://fontawesome.com/icons?d=gallery
    //      https://github.com/FortAwesome/vue-fontawesome
    'nuxt-fontawesome',
    // scss 読み込み
    '@nuxtjs/style-resources',
    // Google Analytics
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-133183584-2'
      }
    ],
    // Google Adsense
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-8705969011896754'
      }
    ]
  ],
  styleResources: {
    scss: ['~/assets/scss/mixin/main.scss', '~/assets/scss/variables/main.scss']
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
