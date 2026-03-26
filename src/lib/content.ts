import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import yaml from 'js-yaml';

import type { Profile, Project, ResourceGroup, SiteData, TimelineItem } from '../types/content';

const rootDir = process.cwd();
const contentDir = path.join(rootDir, 'content');

async function readYamlFile<T>(filePath: string): Promise<T> {
	const raw = await readFile(filePath, 'utf-8');
	return yaml.load(raw) as T;
}

async function readMarkdownFile<T>(filePath: string): Promise<{ data: T; content: string }> {
	const raw = await readFile(filePath, 'utf-8');
	const parsed = matter(raw);

	return {
		data: parsed.data as T,
		content: parsed.content.trim(),
	};
}

function sortProjects(projects: Project[]) {
	return [...projects].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

function sortTimeline(items: TimelineItem[]) {
	return [...items].sort((a, b) => {
		if (a.active && !b.active) return -1;
		if (!a.active && b.active) return 1;
		return b.start.localeCompare(a.start);
	});
}

export async function getSiteData(): Promise<SiteData> {
	const [profileRaw, navigation, seo] = await Promise.all([
		readYamlFile<any>(path.join(contentDir, 'site', 'profile.yaml')),
		readYamlFile<{ items: SiteData['navigation']['items'] }>(path.join(contentDir, 'site', 'navigation.yaml')),
		readYamlFile<SiteData['seo']>(path.join(contentDir, 'site', 'seo.yaml')),
	]);

	const profile: Profile = {
		name: profileRaw.name,
		headline: profileRaw.headline,
		shortBio: profileRaw.short_bio,
		location: profileRaw.location,
		email: profileRaw.email,
		avatar: profileRaw.avatar,
		currentFocus: profileRaw.current_focus,
		skills: profileRaw.skills,
		status: profileRaw.status,
		socials: profileRaw.socials,
	};

	return { profile, navigation, seo };
}

export async function getProjects(): Promise<Project[]> {
	const projectsPath = path.join(contentDir, 'projects');
	const files = await readdir(projectsPath);

	const projects = await Promise.all(
		files.filter((file) => file.endsWith('.md')).map(async (file) => {
			const filePath = path.join(projectsPath, file);
			const { data, content } = await readMarkdownFile<any>(filePath);

			return {
				slug: data.slug,
				title: data.title,
				summary: data.summary,
				tags: data.tags,
				repo: data.repo,
				demo: data.demo,
				featured: Boolean(data.featured),
				status: data.status,
				year: Number(data.year),
				body: content,
			} satisfies Project;
		}),
	);

	return sortProjects(projects);
}

export async function getTimeline(): Promise<TimelineItem[]> {
	const timeline = await readYamlFile<{ items: Array<Omit<TimelineItem, 'active'> & { active?: boolean }> }>(
		path.join(contentDir, 'timeline', 'timeline.yaml'),
	);

	return sortTimeline(
		timeline.items.map((item) => ({
			...item,
			active: Boolean(item.active || item.end === 'Present'),
		})),
	);
}

export async function getResourcesPageData(): Promise<{ title: string; intro: string; groups: ResourceGroup[] }> {
	const [page, groups] = await Promise.all([
		readMarkdownFile<any>(path.join(contentDir, 'pages', 'resources.md')),
		readYamlFile<{ groups: ResourceGroup[] }>(path.join(contentDir, 'resources', 'resources.yaml')),
	]);

	return {
		title: page.data.title,
		intro: page.content,
		groups: groups.groups,
	};
}

export async function getAboutPageData(): Promise<{ title: string; summary: string; body: string }> {
	const page = await readMarkdownFile<any>(path.join(contentDir, 'pages', 'about.md'));

	return {
		title: page.data.title,
		summary: page.data.summary,
		body: page.content,
	};
}

export async function getProjectsPageData(): Promise<{ projects: Project[] }> {
	return {
		projects: await getProjects(),
	};
}

export async function getTimelinePageData(): Promise<{ items: TimelineItem[] }> {
	return {
		items: await getTimeline(),
	};
}

export async function getHomePageData() {
	const [site, home, projects, timeline] = await Promise.all([
		getSiteData(),
		readYamlFile<any>(path.join(contentDir, 'site', 'home.yaml')),
		getProjects(),
		getTimeline(),
	]);

	const featuredProjects = projects
		.filter((project) => project.featured)
		.slice(0, Number(home.featured_projects_count ?? 2));

	return {
		profile: site.profile,
		home: {
			hero: home.hero,
		},
		featuredProjects,
		timelinePreview: timeline.slice(0, Number(home.timeline_preview_count ?? 3)),
	};
}
