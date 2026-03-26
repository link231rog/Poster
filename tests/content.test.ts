import { describe, expect, it } from 'vitest';

import {
  getHomePageData,
  getProjectsPageData,
  getResourcesPageData,
  getSiteData,
  getTimelinePageData,
} from '../src/lib/content';

describe('content assembly', () => {
  it('loads site profile and navigation', async () => {
    const site = await getSiteData();

    expect(site.profile.name).toBe('Link');
    expect(site.navigation.items).toEqual([
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/projects', label: 'Projects' },
      { href: '/timeline', label: 'Timeline' },
      { href: '/resources', label: 'Resources' },
    ]);
    expect(site.seo.title).toContain('Link');
  });

  it('assembles homepage featured projects and timeline preview', async () => {
    const page = await getHomePageData();

    expect(page.profile.headline).toContain('Engineer');
    expect(page.featuredProjects).toHaveLength(2);
    expect(page.featuredProjects.every((project) => project.featured)).toBe(true);
    expect(page.timelinePreview).toHaveLength(3);
    expect(page.home.hero.primaryCta.href).toBe('/projects');
  });

  it('sorts projects descending by year and featured first on homepage selection', async () => {
    const page = await getProjectsPageData();

    expect(page.projects.map((project) => project.slug)).toEqual([
      'opencode-workflows',
      'poster-site',
      'agent-lab',
    ]);
  });

  it('sorts timeline latest first and keeps active entry first', async () => {
    const page = await getTimelinePageData();

    expect(page.items[0].organization).toBe('Independent Research');
    expect(page.items[0].active).toBe(true);
    expect(page.items).toHaveLength(4);
  });

  it('groups resources by category', async () => {
    const page = await getResourcesPageData();

    expect(page.groups.map((group) => group.category)).toEqual([
      'Tools',
      'Reading',
      'Writing',
    ]);
    expect(page.groups[0].items[0].name).toBe('Astro');
  });
});
