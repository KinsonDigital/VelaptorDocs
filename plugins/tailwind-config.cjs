function tailwindPlugin(context, options) {
    return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            postcssOptions.plugins.push(require("postcss-import"));

            return postcssOptions;
        },
    };
}

module.exports = tailwindPlugin;
