import { describe, expect, it } from 'vitest';
import { readFile } from 'node:fs/promises';

const workspaceRoot = new URL('../', import.meta.url);

async function readSource(path: string) {
	return readFile(new URL(path, workspaceRoot), 'utf8');
}

describe('page structure', () => {
	it('rewrites the homepage away from the bento hero grid into a linear narrative flow', async () => {
		const source = await readSource('src/pages/index.astro');

		expect(source).not.toContain('class="hero-grid"');
		expect(source).toContain('home-flow');
		expect(source).toContain('hero-intro');
		expect(source).toContain('home-section');
	});

	it('keeps clear keyboard focus states for primary interactive elements', async () => {
		const source = await readSource('src/styles/global.css');

		expect(source).toMatch(/\.nav-list a:focus-visible[\s\S]*outline:/);
		expect(source).toMatch(/\.button:focus-visible[\s\S]*outline:/);
		expect(source).toMatch(/\.button-secondary:focus-visible[\s\S]*outline:/);
		expect(source).toMatch(/\.text-links a:focus-visible[\s\S]*outline:/);
	});
});
