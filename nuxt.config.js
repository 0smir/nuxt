module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'universal',

  head: {
    title: 'my_project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my first vue project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css:[
    '@/node_modules/bootstrap/dist/css/bootstrap-reboot.css',
    '@/node_modules/bootstrap/dist/css/bootstrap-grid.css',
    '@/node_modules/bootstrap/dist/css/bootstrap.css'
  ],

  js:[
    '@/node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    '@/node_modules/bootstrap/dist/js/bootstrap.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // babel: {
    //   plugins: ['transform-vue-jsx']
    // },

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

