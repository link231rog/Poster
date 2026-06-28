---
title: "Why I Went Static-First for My Personal Site"
date: "2026-05-20"
summary: "On choosing Astro, content-file workflows, and building a site that ages well."
tags:
 - astro
 - static
 - design
draft: false
featured: false
---

I've rebuilt my personal site more times than I'd like to admit. Each time, the same pattern: start with a framework, add a CMS, get frustrated with dependencies, abandon it for six months, repeat.

This time I wanted something different. Something that would age well.

## The Constraint

My requirements were simple:

- Content lives in Markdown files I can edit locally
- No database, no external CMS, no vendor lock-in
- Deploys to GitHub Pages with zero configuration
- Fast by default - no runtime JavaScript unless I choose it

Astro checked every box.

## The Architecture

```
content/
  blog/         ← Markdown articles
  pages/        ← Static pages (about, now)
  projects/     ← Project descriptions
  site/         ← Config (YAML)
  timeline/     ← Career data
```

Every piece of content is a file. Every file has frontmatter. The build step reads them all and produces static HTML.

## What I Like About It

- **Git is the CMS.** I write in my editor, commit, push. Done.
- **Content is portable.** If I ever switch frameworks, my Markdown files come with me.
- **Performance is free.** Static HTML is fast. No hydration, no client-side routing overhead.
- **It's boring.** And that's a feature. Boring systems last.

## What I'd Do Differently

I started with too much structure. YAML configs for everything, typed schemas, abstraction layers. Over time I've simplified - fewer files, less ceremony, more Markdown.

The best content system is one you actually use.
