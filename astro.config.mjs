// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isCloudflare = process.env.CF_PAGES === '1';
const site = process.env.SITE_URL ?? (isCloudflare ? 'https://link231rog.pages.dev' : 'https://link231rog.github.io');
const base = process.env.BASE_PATH ?? (isCloudflare ? '/' : '/Poster');

export default defineConfig({
	site,
	base,
});
