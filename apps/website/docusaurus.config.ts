import * as fs from 'fs';

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const versionList = JSON.parse(fs.readFileSync('./versions.json', 'utf-8'));
const lastVersion = versionList[0];


const versionListConversion = (list: string[]) => {
    const versions: Record<string, { label: string }> = {};

    for (const version of list) {
        versions[version] = { label: `v${version}` };
    }

    return versions;
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'LavaShark',
    tagline: 'A lightweight Node.js client built around the Lavalink node',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://lavashark.js.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'hmes98318', // Usually your GitHub org/user name.
    projectName: 'LavaShark', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-TW'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/hmes98318/LavaShark/blob/main/apps/website/',
                    lastVersion: lastVersion,
                    onlyIncludeVersions: versionList,
                    versions: versionListConversion(versionList),
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/hmes98318/LavaShark/blob/main/apps/website/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
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
                { to: '/docs/category/classes', label: 'Docs', position: 'left' },
                { href: 'https://discord.gg/7rQEx7SPGr', label: 'Discord', position: 'left' },
                { href: 'https://github.com/hmes98318/Music-Disc', label: 'Example Bot', position: 'left' },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                    // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
                    dropdownActiveClassDisabled: false,
                },
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
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
