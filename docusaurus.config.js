// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Velaptor',
  tagline: 'The easy and fun to use 2D game development framework',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.veleptor.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KinsonDigital', // Usually your GitHub org/user name.
  projectName: 'Velaptor', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Used for creating diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          editUrl: 'https://github.com/KinsonDigital/Velaptor',
          includeCurrentVersion: true
        },
		
        // ❕DO NOT DELETE.  ONLY DISABLED❕
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'QM2KXVA7OT',
  
        // Public API key: it is safe to commit it
        apiKey: '686ddf12415268524bcc00627597fdc9',
  
        indexName: 'velaptor',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      metadata: [
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: 'Velaptor'
        },
        {
          name: 'twitter:description',
          content: 'Game development with C# made easy and fun!'
        },
        {
          name: 'twitter:image',
          content: 'https://docs.velaptor.io/img/meta-image.jpg'
        },
        {
          name: 'twitter:image:alt',
          content: 'Combining the power of KinsonDigital, SILK, and dotnet to create 2D games.'
        },
        {
          name: 'twitter:site',
          content: '@KDCoder'
        },
        {
          name: 'twitter:creator',
          content: '@KDCoder'
        },
        {
          name: 'keywords',
          content: 'Velaptor, 2D, Game, Game Development, Framework, Cross Platform, C#, .NET, OpenGL'
        }
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Velaptor',
        logo: {
          alt: 'Velaptor Logo',
          src: 'img/logo.svg',
          width: 32,
          height: 32
        },
        items: [
          {
            type: 'doc',
            docId: 'guides/intro',
            position: 'left',
            label: 'Guides',
          },
          // ⚠️DO NOT CHANGE THIS⚠️
          // This is used as part of the manual testing process for the CICD side of the project.
          // <flag id=api enabled=true>
          {
              type: 'doc',
              docId: 'api/Namespaces',
              position: 'left',
              label: 'API',
          },
          // </flag>
          // {to: '/blog', label: 'Blog', position: 'left'}, // DO NOT DELETE.  JUST TURNED OFF
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          
          {
            href: 'https://github.com/KinsonDigital/Velaptor',
            position: 'right',
            className: "header-github-link"
          },
          {
            href: 'https://discord.gg/qewu6fNgv7',
            position: 'right',
            className: "header-discord-link"
          },
          // ⚠️DO NOT CHANGE THIS⚠️
          // This is used as part of the manual testing process for the CICD side of the project.
          // <flag id=testing enabled=false>
          // {
             // type: 'doc',
             // label: 'API Testing',
             // position: 'left',
             // docId: 'api/Namespaces',
          // },
          // </flag>
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/docs/guides/intro',
              },
            ],
          },
          {
            title: 'Find Us',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KinsonDigital/Velaptor',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/qewu6fNgv7',
              },
              {
                label: 'X',
                href: 'https://x.com/KDCoder',
              },
            ],
          },
          // ❕DO NOT DELETE.  ONLY DISABLED❕
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        logo: {
          alt: 'Kinson Digital Logo',
          src: 'img/kinson-digital-logo.png',
          href: 'https://github.com/KinsonDigital',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Velaptor Docs (v2024.03.08.063705) - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};
module.exports = config;