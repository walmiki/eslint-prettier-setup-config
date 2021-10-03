const base = require("./lib/base");
const react = require("./lib/react");

module.exports = {
	extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeature: {
			jsx: true,
		},
	},
	rules: {
		...base,
		...react,
	},
	settings: {
		react: {
			version: "detect",
		},
	}
}