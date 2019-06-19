import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
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
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'description',
        name: 'description',
        content:
          'ノベルゲーム制作のスクリプト作業といえば、クリック待ちタグの挿入、記号の置換など、単純作業の連続で大変……。' +
          'そんなあなたにスクリプト作業簡易化アプリ『Scripon!』。' +
          'シナリオテキストを入力してクリック待ちタグや置換文字を指定すれば、Pon!と自動でスクリプトを出力します。'
      },
      { name: 'author', content: 'TigRig' },
      {
        name: 'format-detection',
        content: 'telephone=no,address=no,email=no'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@TigRig_TRNS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Scripon!'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://scripon.toranos.net/'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ノベルゲーム制作のスクリプト作業を簡単に！'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://scripon.toranos.net/scripon-logo.png'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Scripon!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://scripon.toranos.net/' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/main.scss',
    // Doc: https://fontawesome.com/icons?d=gallery
    //      https://github.com/FortAwesome/vue-fontawesome
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/persistedstate.js', ssr: false },
    { src: '~plugins/font-awesome', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // PWA
    '@nuxtjs/pwa',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt'],
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
        // pageLevelAds: false,
        // analyticsUacct: 'UA-133183584-2',
        // analyticsDomainName: 'scripon.toranos.net'
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
  bootstrapVue: {
    componentPlugins: ['BVToastPlugin'],
    directivePlugins: [],
    components: ['BButton'],
    directives: []
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
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

      if (!ctx.isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            whitelist: ['html', 'body']
          })
        )
      }

      // HardSourceWebpackPlugin（ビルド高速化）
      const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
      config.plugins.push(new HardSourceWebpackPlugin())
    }
  }
}
