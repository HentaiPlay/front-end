export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Aim-Time',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  //custom for middleware

  serverMiddleware: [
      { path: '/', handler: './server/middleware/mainServerMiddleware'}
  ],

  router:{
    middleware: ['mainMiddleware']
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    ['nuxt-i18n', {
        locales: [
          {
            name: 'RU',
            code: 'ru',
            iso: 'ru-RU',
            file: 'ru-RU.js'
          },
          {
            name: 'EN',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ru',
    }]
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://aim-time.loc/graphql',
      }
    }
  },

  loading: '~/components/loading.vue',

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
