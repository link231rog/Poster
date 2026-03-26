// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const site = process.env.SITE_URL ?? 'https://link231rog.github.io';
const base = process.env.BASE_PATH ?? '/Poster';

export default defineConfig({
	site,
	base,
});
