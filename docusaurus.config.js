// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          editUrl:
            'https://github.com/KinsonDigital/Velaptor',
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
      metadata: [
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:image',
          content: 'https://docs.velaptor.io/img/meta-image.jpg'
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
            docId: 'tutorials/intro',
            position: 'left',
            label: 'Tutorial',
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
                label: 'Tutorial',
                to: '/docs/tutorials/intro',
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
                label: 'Twitter',
                href: 'https://twitter.com/KDCoder',
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
        copyright: `Copyright © ${new Date().getFullYear()} Velaptor Docs (v2023.02.01.174515) - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};

module.exports = config;
