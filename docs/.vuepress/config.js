module.exports = {
  title: 'PS (Notes)',
  description: 'Find all my notes here',
  base: '/blog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/img/favicon.png',
      },
    ],
  ],
  themeConfig: {
    //repo: 'padamshrestha/blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    algolia: {
      apiKey: '76fd6979e786d56dc1673257e175a6c3',
      indexName: 'padamshrestha'
    },
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'About', link: '/about/' },
    ],
    sidebarDepth: 3,
    sidebar:
      [
        {
          title: 'Angular',
          collapsable: false,

          children: [
            '/home/deploy-angular-app-to-github-io-pages',
          ],
        },
        {
          title: 'Azure',
          collapsable: false,

          children: [
            '/home/azure-resource-graph-explorer',
            '/home/azure-keyboard-shortcuts',
            '/home/azure-service-fabric'
          ],
        },
        {
          title: 'Kusto',
          collapsable: false,

          children: [
            '/home/kusto-overview',
            '/home/dynamic-365-hcm-kusto'
          ],
        },
        {
          title: 'C#',
          collapsable: false,

          children: [
            '/csharp/csharp-fundamentals',
            '/csharp/csharp-features'
          ],
        },
      ],
    smoothScroll: true,
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-ZM9XV2Y5TP' // UA-00000000-0
      }
    ],
    '@vuepress/nprogress',
    '@vuepress/medium-zoom'
  ]
};
