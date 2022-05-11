import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ["@/assets/css/tailwind.css"],
	build: {
		postcss: {
			postcssOptions: require("./postcss.config.js"),
		},
	},
	buildModules: ["@nuxtjs/tailwindcss"],
	target: "static",
	router: {
		base: "nayane95.github.io",
	},
});
