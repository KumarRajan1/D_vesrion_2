const github = require('prism-react-renderer/themes/github');
const dracula = require('prism-react-renderer/themes/dracula');
const path = require('path');
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://developer-rajan.netlify.app/',
  baseUrl: '/',
  organizationName: 'KumarRajan1',
  projectName: 'ci integration',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // URL prefix (change to '/' to use docs at root)
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
  

  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'mapping',
    //     path: 'mapping',
    //     routeBasePath: 'mapping',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     include: ['**/*.md'],
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'analytics',
    //     path: 'analytics',
    //     routeBasePath: 'analytics',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'telematics',
    //     path: 'telematics',
    //     routeBasePath: 'telematics',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   },
    // ],
  ],
  customFields: {
    buildTimestamp: Date.now(),
  },

  themeConfig: {
     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        href: '/web',
      },
      items: [
        { to: 'mapping/web', label: 'Mapping', position: 'left' },
          // { to: 'analytics/mgis-widgets', label: 'Analytics', position: 'left' },
          // { to: 'telematics/get-your-key', label: 'Telematics', position: 'left' },
        {
          href: 'https://github.com/my-org/my-docusaurus-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Mapping', to: 'mapping/web' },
            // { label: 'Analytics', to: 'analytics/mgis-widgets' },
            // { label: 'Telematics', to: '/telematics' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()}`,
    },
    prism: {
      theme: github,
      darkTheme: dracula,
    },
  },
};

module.exports = config;
