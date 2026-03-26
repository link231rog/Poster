export type NavigationItem = {
	href: string;
	label: string;
};

export type Profile = {
	name: string;
	headline: string;
	shortBio: string;
	location: string;
	email: string;
	avatar: string;
	currentFocus: string;
	skills: string[];
	status: {
		text: string;
		type: 'active' | 'idle';
	};
	socials: Array<{
		platform: string;
		url: string;
		label: string;
	}>;
};

export type SiteData = {
	profile: Profile;
	navigation: { items: NavigationItem[] };
	seo: {
		title: string;
		description: string;
	};
};

export type Project = {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	repo: string;
	demo?: string;
	featured: boolean;
	status: string;
	year: number;
	body: string;
};

export type TimelineItem = {
	id: string;
	start: string;
	end: string;
	role: string;
	organization: string;
	type: string;
	summary: string;
	active: boolean;
	links?: Array<{ label: string; url: string }>;
};

export type ResourceItem = {
	name: string;
	url: string;
	note: string;
};

export type ResourceGroup = {
	category: string;
	items: ResourceItem[];
};
