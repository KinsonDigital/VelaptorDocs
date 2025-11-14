import { themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './plugins/tailwind-config.cjs';
const config: Config = {
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
	// Used for creating diagrams
	markdown: {
		mermaid: true,
        hooks: {
			onBrokenMarkdownLinks: (link) => {
				console.warn("Broken markdown link found:");
				console.warn(`\n\tURL: ${link.url}`);
				console.warn(`\n\tSrc File Path: ${link.sourceFilePath}`);
			}
		}
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
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/KinsonDigital/Velaptor',
					includeCurrentVersion: true
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
                blog: false,
			} satisfies Preset.Options,
		],
	],
	themeConfig:
		{
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
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
					name: "keywords", content: "Velaptor, 2D, Game, Game Dev, Game Development, Framework, Cross Platform, C#, .NET, OpenGL, KinsonDigital, Kinson Digital"
				},
				{
					name: 'twitter:card',
					content: 'summary'
				},
				{
					name: 'twitter:title',
					content: 'Velaptor',
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
					{
						type: 'doc',
						docId: 'api/Namespaces',
						position: 'left',
						label: 'API',
					},
					// </flag>
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
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								html: "<a href='/docs/guides/intro' target='_blank'>Guides</a>",
							},
							{
								html: "<a href='/docs/api/Namespaces' target='_blank'>Latest API Docs</a>",
							},
							{
								html: "<a href='https://github.com/KinsonDigital/VelaptorDocs/tree/main/SampleProjects' target='_blank'>Sample Projects</a>",
							},
						],
					},
					{
						title: 'Find Us',
						items: [
							{
								html: `<a href='https://github.com/KinsonDigital/Velaptor' target='_blank'>GitHub</a>`,
							},
							{
								html: `<a href='https://discord.gg/qewu6fNgv7' target='_blank'>Discord</a>`,
							},
							{
								html: `<a href='https://x.com/KDCoder' target='_blank'>X (Twitter)</a>`,
							},
						],
					},
				],
				logo: {
					alt: 'Kinson Digital Logo',
					src: 'img/kinson-digital-logo.png',
					href: 'https://github.com/KinsonDigital',
				},
				copyright: `Copyright © ${new Date().getFullYear()} Velaptor Docs (v2025.02.07.175011)`,
			},
			prism: {
				/* We disabled the default magic comments and added custom ones to support better naming and colors
				 * to represent the removal and adding of code lines.
				 * 
				 * The css for these custom magic comments can be found in the custom.css file with the following classes:
				 * 1. code-block-highlight-add-line
				 * 2. code-block-highlight-remove-line
				*/
				magicComments: [
					// This is disabled on purpose and is replaced by the 'highlight-add' setup below it
					// {
					// 	className: 'theme-code-block-highlighted-line',
					// 	line: 'highlight-next-line',
					// 	block: { start: 'highlight-start', end: 'highlight-end' },
					// },
					{
						className: 'code-block-highlight-add-line',
						line: 'highlight-add-next-line',
						block: {
							start: "highlight-add-start",
							end: "highlight-add-end",
						}
					},
					{
						className: 'code-block-highlight-remove-line',
						line: 'highlight-remove-next-line',
						block: {
							start: "highlight-remove-start",
							end: "highlight-remove-end",
						}
					},
				],
				theme: themes.github,
				darkTheme: themes.vsDark,
				additionalLanguages: ['csharp'],
			},
		} satisfies Preset.ThemeConfig,
	plugins: [
		tailwindPlugin,
	]
};
module.exports = config;