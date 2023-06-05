const { description } = require('../../package')
const path = require("path");

module.exports = {
  
  base: "/documentation/",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Documentación oficial',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3a70b6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    searchPlaceholder: 'Buscar...',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Actualizado el',
    sidebar: {
      '/start/': [
        {
          title: 'Inicio',
          collapsable: false,
          children: [
            '',
            'first-steps',
            'add-activity',
            'create-invoice',
            'add-logo',
            'exonerate-document',
            'inventory',
            'invoice-pending',
            'proforma',
            'reduced-rate'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  thirdPartyComponents: {
    fontAwesomeIcons:{
        regular:[''],  // Regular font awesome icon keys here
        solid:['sync'] // Solid font awesome icon keys here
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': "../.vuepress/public/assets",
      }
    }
  }
}
