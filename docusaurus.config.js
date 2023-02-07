
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("node:path")

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PeerJS',
  tagline: 'PeerJS simplifies WebRTC peer-to-peer data, video, and audio calls.',
  url: 'https://peerjs.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
	plugins: [
      [
        'docusaurus-plugin-typedoc-api',
        {
          projectRoot: path.join(__dirname, "packages"),
          packages: [
            {
              path: 'client',
              entry: "lib/exports.ts",
            },
              "server",
          ],
          tsconfigName: 'tsconfig.docs.json',
          readmes: true,
          changelogs: true,
			banner: "",
        },
      ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PeerJS',
        logo: {
          alt: 'PeerJS Logo',
          src: 'img/PeerJS.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'api',
            label: 'API reference',
            position: 'left',
          },
          {
            href: 'https://github.com/peers',
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
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        content:
            'We are currently revamping our docs, you can find our old and more complete version <a target="_blank" rel="noopener noreferrer" href="https://peerjs.com/docs/">here</a>',
        backgroundColor: '#300934',
        textColor: '#f3e4e4',
        isCloseable: true,
      },
    }),
};

module.exports = config;
