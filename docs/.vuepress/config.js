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
            '/home/azure-keyboard-shortcuts'
          ],
        },
        {
          title: 'C#',
          collapsable: false,

          children: [
            '/csharp/csharp-fundamentals',
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
  ]
};
