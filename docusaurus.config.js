// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitfinity Documentation',
  tagline: 'Documentation and Tutorials for Bitfinity',
  url: 'https://docs.bitfinity.network',
  baseUrl: '/',
  //TODO:Change it to throw once /bridge/bridge-overview is ready
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'bitfinity',
  projectName: 'docs.bitfinity.network',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter&display=swap',
  ],
 

  plugins: [
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            to: '/interact/truffle',
            from: ['/develop/start/truffle'],
          },
          {
            to: '/interact/metamask',
            from: ['/develop/start/metamask'],
          },
          {
            to: '/interact/hardhat',
            from: ['/develop/start/hardhat'],
          },
          {
            to: '/interact/block-explorer',
            from: ['/interact/bitfinityscan'],
          },
          {
            to: '/evm/rpc',
            from: ['/compact/rpc', '/develop/compat/rpc']
          },
          {
            to: '/evm/evm-overview',
            from: ['/develop/compat/evm', '/compat/evm'],
          },
          {
            to: '/faq',
            from: ['/develop/faq'],
          },
          {
            to: '/integrate/indexers/the-graph',
            from: ['/develop/indexers/thegraph'],
          },
          {
            to: '/integrate/indexers/covalent',
            from: ['/develop/indexers/covalent'],
          },
          //TODO:Uncomment this once the doc is ready at this path
          // {
          //   to: '/bridge/bridge-overview',
          //   from: ['/learn/bridge/eth'],
          // },
          {
            to: '/',
            from: ['/develop/changelog', '/develop/roadmap'],
          },
        ],
      },
    ],
    require.resolve('docusaurus-plugin-sass'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/bitfinity-network/tech-docs-bitfinity-evm/edit/main',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss')
          ],
        },
        gtag: {
          trackingID: 'G-Q4JXE0ZPND',
          anonymizeIP: true,
        },
      }),
    ],
   
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      sidebar: {
        hideable: true,
      },
      image: 'img/og-1.jpeg',
      navbar: {
        title: '| Documentation',
        logo: {
          href: 'https://bitfinity.network',
          alt: 'Bitfinity logo',
          src: 'img/logo_dark.svg',
          srcDark: 'img/logo_white.svg',
          style : {
            marginRight: '0rem',
          }
        },
        items: [
          {
            href: 'https://bitfinity.network',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://github.com/bitfinity-network',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Astari`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'BEGR6ON9SL',
        apiKey: 'e0a8f49db413df8c28341a74f2a799ae',
        indexName: 'doc-bitfinity',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
