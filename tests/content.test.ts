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

    expect(site.profile.name).toBe('Zixuan Huang');
    expect(site.navigation.items).toEqual([
      { href: '/', label: 'Research', labelZh: '科研与背景' },
      { href: '/projects', label: 'Projects', labelZh: '工程与项目' },
    ]);
    expect(site.seo.title).toContain('Zixuan');
  });

  it('assembles homepage featured projects and timeline preview', async () => {
    const page = await getHomePageData();

    expect(page.profile.headline).toContain('Research Assistant');
    expect(page.featuredProjects).toHaveLength(2);
    expect(page.featuredProjects.every((project) => project.featured)).toBe(true);
    expect(page.timelinePreview).toHaveLength(3);
    expect(page.home.hero.primaryCta.href).toBe('/projects');
  });

  it('sorts projects descending by year and featured first on homepage selection', async () => {
    const page = await getProjectsPageData();

    expect(page.projects.map((project) => project.slug)).toEqual([
      'chongqing-3d',
      'fan-demo',
      'fan-promo',
      'agent-orchestration',
      'harness-toolkit',
      'yuanbao-detective',
      'markdown-workflow',
      'poster-site',
    ]);
  });

  it('sorts timeline latest first and keeps active entry first', async () => {
    const page = await getTimelinePageData();

    expect(page.items[0].organization).toBe('HKUST(GZ) · Tencent Yuanbao · SWU');
    expect(page.items[0].active).toBe(true);
    expect(page.items).toHaveLength(5);
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
