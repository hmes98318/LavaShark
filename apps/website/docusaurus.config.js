// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'LavaShark',
    tagline: 'A lightweight Node.js client built around the Lavalink node',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://lavashark.js.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'hmes98318', // Usually your GitHub org/user name.
    projectName: 'LavaShark', // Usually your repo name.

    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-TW'],
        /*localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
            },
            'zh-Hant': {
                label: '繁體中文（台灣）',
                direction: 'ltr',
            },
        },*/
    },

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
                        'https://github.com/hmes98318/LavaShark/blob/main/apps/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/hmes98318/LavaShark/blob/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            algolia: {
                apiKey: 'd012934f4a6a049a495bd0b1db01333c',
                indexName: 'bear-react-carousel',
                appId: '7V7AV8Y672',
            },
            // Replace with your project's social card
            image: 'img/social-card.webp',
            navbar: {
                title: 'LavaShark',
                logo: {
                    alt: 'LavaShark Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Guide',
                    },
                    { to: '/docs/getting-started', label: 'Started', position: 'left' },
                    { href: 'https://github.com/hmes98318/Music-Disc', label: 'Examples', position: 'left' },
                    { href: 'https://discord.gg/7rQEx7SPGr', label: 'Discord', position: 'left' },
                    {
                        type: 'localeDropdown',
                        position: 'right'
                    },
                    {
                        href: 'https://github.com/hmes98318/LavaShark',
                        position: 'right',
                        className: "header-github-link",
                        "aria-label": "GitHub repository",
                    },
                ],
            },
            footer: {
                style: 'dark',
                // links: [
                //   {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //       },
                //     ],
                //   },
                // ],
                copyright: `Copyright © 2023-${new Date().getFullYear()} hmes98318. Documentation generated with typedoc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
