const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@twr/shared"]);
const withImages = require("next-images");
module.exports = withPlugins([withTM(), withImages], {
	webpack: (config) => {
		// custom webpack config
		if ("sassOptions" in config) {
			config["sassOptions"] = {
				includePaths: ["./src"],
				prependData: `@import "~@styles/variables.scss";`,
			};
		}
		return config;
	},
	images: {},
});
