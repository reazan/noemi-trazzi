// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@unocss/nuxt", "@nuxt/icon", "@nuxt/fonts"],
	router: {
		options: {
			scrollBehaviorType: "smooth",
		},
	},
	// devServer: {
	// 	port: 5317,
	// },
});
