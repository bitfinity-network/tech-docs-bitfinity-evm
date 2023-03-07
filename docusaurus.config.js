// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EVMC Documentation',
  tagline: 'Documentation and Tutorials for EVMC',
  url: 'https://doc.bitfinity.network',
  baseUrl: '/',
  //TODO:Change it to throw once /bridge/bridge-overview is ready
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_white.svg',
  organizationName: 'aurora-is-near',
  projectName: 'doc.bitfinity.network',

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
            to: '/getting-started/network-endpoints',
            from: ['/develop/networks', '/develop/compat/gas', `/compat/gas`],
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
            from: ['/interact/aurorascan'],
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
          editUrl: 'https://github.com/infinity-swap/tech-docs-evmc/edit/master',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss')
          ],
        },
        gtag: {
          trackingID: 'GTM-MX4G4L5',
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
      image: 'img/og_image.png',
      sidebar: {
        hideable: true,
      },
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'EVMC logo',
          src: 'img/logo_dark.svg',
          srcDark: 'img/logo_white.svg',
          style : {
            marginRight: '20.5rem',
          }
        },
        items: [
          {
            href: 'https://github.com/infinity-swap',
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
        indexName: 'doc-aurora',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
