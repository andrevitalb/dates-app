module.exports = {
	extends: ["plugin:prettier/recommended", "plugin:promise/recommended"],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	env: {
		node: true,
	},
	rules: {
		"@typescript-eslint/no-unused-vars": "off",
	},
	overrides: [
		{
			files: ["*.ts"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["off"],
				"@typescript-eslint/explicit-module-boundary-types": ["off"],
			},
		},
	],
}
