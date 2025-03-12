import extractorPug from "@unocss/extractor-pug";

import {
	defineConfig,
	presetAttributify,
	presetWebFonts,
	presetWind3,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetAttributify(),
		presetWind3(),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Rubik",
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [
		extractorPug(),
	],
	// ...UnoCSS options
});
