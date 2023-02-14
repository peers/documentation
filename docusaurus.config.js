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
            '@docusaurus/plugin-content-docs',
            {
                id: 'client',
                path: 'client',
                routeBasePath: 'client',
                editUrl:
                    'https://github.com/peers/documentation/tree/master/',
            }
        ],
        [
            '@docusaurus/plugin-content-docs', {
            id: 'server',
            path: 'server',
            routeBasePath: 'server',
            editUrl:
                'https://github.com/peers/documentation/tree/master/',
        }
        ],
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
                docs: {},
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
                        to: "client/intro",
                        position: 'left',
                        label: 'Client',
                        activeBaseRegex: "/client/",
                        sidebarId: "client"
                    },
                    {
                        to: "server/intro",
                        position: 'left',
                        label: 'Server',
                        activeBaseRegex: "/server/",
                        sidebarId: "server"
                    },
                    {
                        to: 'api',
                        label: 'API Reference',
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
                            {
                                label: 'API Reference',
                                to: '/api',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Github Discussions',
                                href: 'https://github.com/peers/peerjs-server/discussions',
                            },
                            {
                                label: 'Github Discussions Server',
                                href: 'https://github.com/peers/peerjs-server/discussions',
                            },
                            {
                                label: 'Telegram',
                                href: 'https://t.me/joinchat/ENhPuhTvhm8WlIxTjQf7Og',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/peers',
                            },
                            {
                                label: 'OpenCollective',
                                href: 'https://opencollective.com/peer',
                            },
                            {
                                label: 'Status Page',
                                href: 'https://status.peerjs.com',
                            },
                        ],
                    },
                ],
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
