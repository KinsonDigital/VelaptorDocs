declare function tailwindPlugin(context: unknown, options: unknown): {
	name: string;
	configurePostCss(postcssOptions: { plugins: unknown[] }): { plugins: unknown[] };
};

export = tailwindPlugin;
