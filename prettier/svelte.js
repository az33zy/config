import defaultConfig from "./index.js"

/** @type {import('prettier').Options} */
const svelteConfig = {
	...defaultConfig,
	plugins: ["prettier-plugin-svelte", ...defaultConfig.plugins],
	overrides: [
		{ files: "*.svelte", options: { parser: "svelte" } },
		...defaultConfig.overrides,
	],
}

export default svelteConfig
