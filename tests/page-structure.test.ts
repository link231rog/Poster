import { describe, expect, it } from 'vitest';
import { readFile } from 'node:fs/promises';

const workspaceRoot = new URL('../', import.meta.url);

async function readSource(path: string) {
	return readFile(new URL(path, workspaceRoot), 'utf8');
}

describe('page structure', () => {
	it('uses SplitLayout for the homepage CV/work content', async () => {
		const source = await readSource('src/pages/index.astro');

		expect(source).toContain('SplitLayout');
		expect(source).toContain('sidebarSections');
		expect(source).not.toContain('hero-screen');
		expect(source).not.toContain('gate-block');
	});

	it('keeps clear keyboard focus states for interactive elements', async () => {
		const source = await readSource('src/styles/global.css');

		expect(source).toMatch(/a:focus-visible[\s\S]*outline:/);
		expect(source).toMatch(/\.button:focus-visible[\s\S]*outline:/);
	});

	it('highlights last sidebar nav section when scrolled to bottom', async () => {
		const source = await readSource('src/components/Sidebar.astro');

		// Uses scroll-based activation-line approach, not IntersectionObserver
		expect(source).toContain('activationLine');
		expect(source).not.toMatch(/new IntersectionObserver/);

		// Bottom guard forces last section active when scrolled to bottom
		expect(source).toMatch(/scrollHeight.*scrollTop.*clientHeight/);
		expect(source).toMatch(/sections\[sections\.length - 1\]\.id/);

		// Initial active from server-rendered class preserved
		expect(source).toContain('activeSection');
	});
});
