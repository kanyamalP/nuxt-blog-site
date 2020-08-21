export default {
  modules: [
    '@nuxt/content'
  ],
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true
    }]
  ],
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  head: {
    title: 'kana-blog',
    meta: [
      { charset: 'utf-8' },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loaders: {
    ts: {
      silent: true
    },
    tsx: {
      silent: true
    }
  }
}
