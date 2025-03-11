import extractorPug from "@unocss/extractor-pug";

import {
	defineConfig,
	presetAttributify,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetAttributify(),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Readex Pro",
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [
		extractorPug(),
	],
	// ...UnoCSS options
});
