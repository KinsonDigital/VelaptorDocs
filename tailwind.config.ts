import { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./docs/**/*.{html,js,jsx,ts,tsx,mdx}",
        "./pages/**/*.{html,js,jsx,ts,tsx,mdx}",
        "./src/components/**/*.{html,js,jsx,ts,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config;
