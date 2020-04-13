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
        href: './../images/favicon.png',
      },
    ],
  ],
  themeConfig: {
    //repo: 'padamshrestha/blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'About', link: '/about/' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,

          children: ['', 'deploy-angular-app-to-github-io-pages'],
        },
      ],
    },
    smoothScroll: true,
  },
};
