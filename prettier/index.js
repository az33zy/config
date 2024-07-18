/** @type {import('prettier').Options} */
const config = {
	printWidth: 80,
	arrowParens: "always",
	semi: false,
	useTabs: true,
	singleQuote: false,
	trailingComma: "all",
	plugins: ["prettier-plugin-tailwindcss"],
	overrides: [{ files: "**/package.json", options: { useTabs: false } }],
}

export default config
