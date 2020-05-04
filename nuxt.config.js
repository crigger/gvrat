export default {
  mode: 'universal',
  server: {
    port: 1230,
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'The Great Virtual Race Across Tennessee',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The Great Virtual Race Across Tennessee: 1,000 kilometers across Tennessee from the very southwestern tip of the state to the very northeastern tip of the state.'
      },
      { hid: 'og:title', property: 'og:title', content: 'The Great Virtual Race Across Tennessee' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'The Great Virtual Race Across Tennessee: 1,000 kilometers across Tennessee from the very southwestern tip of the state to the very northeastern tip of the state.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `og.png`
      },
      { hid: 'og:image:width', property: 'og:image:width', content: 1200 },
      { hid: 'og:image:height', property: 'og:image:height', content: 630 },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'The Great Virtual Race Across Tennessee, Inc.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:title', name: 'twitter:title', content: 'The Great Virtual Race Across Tennessee' },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `og.png`
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS/SASS
   */
  css: ['~assets/scss/main.scss'],
  /*
   ** Style Resources module configuration
   */
  styleResources: {
    scss: ['./assets/scss/_utilities.scss']
  },
  /*
  ** Plugins
  */
  plugins: [
    'plugins/components.js',
    { src: 'plugins/globals.js', ssr: false }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
  ** PWA Modules
  */
  manifest: {
    name: 'The Great Virtual Race Across Tennessee',
    short_name: 'GVRAT',
    lang: 'en',
    description: 'The Great Virtual Race Across Tennessee: 1,000 kilometers across Tennessee from the very southwestern tip of the state to the very northeastern tip of the state.',
    theme_color: '#fa641e',
    background_color: '#fa641e'
  },
  render: {
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  },
  workbox: {
    dev: false,
    debug: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
