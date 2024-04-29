/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./blog/**/*.{html,js,jsx,ts,tsx, mdx}",
		"./docs/**/*.{html,js,jsx,ts,tsx, mdx}",
		"./pages/**/*.{html,js,jsx,ts,tsx, mdx}",
		"./src/components/**/*.{html,js,jsx,ts,tsx, mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
