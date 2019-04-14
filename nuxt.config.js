import pkg from './package'

const fs = require('fs');

// Array where we will push our routes to:
const routesArray = [];

// Create variable to contain array of markdown files read in our markdown-files directory:
const files = fs.readdirSync('./static/markdown-files');

// Create a route for each file and push that route to routesArray:
const createRoutesArray = () => {
  files.forEach((file) => {

    let name = file.substr(0, file.lastIndexOf('.'));
    let route = '/markdown/' + name

    routesArray.push(route)
  });
}

const getSlugs = (markdownFile, index) => {
  let slug = markdownFile.substr(0, markdownFile.lastIndexOf('.'));
  return `/markdown/${slug}`
}

export default {
  mode: 'universal',

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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/markdownit', { linkify: true }]
  ],

  /*
  ** Generate static routes:
  */
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
