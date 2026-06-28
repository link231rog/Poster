---
title: "Building Agent Workflows That Don't Drift"
date: "2026-06-15"
summary: "How I approach prompt orchestration, reproducibility, and keeping multi-agent systems legible as they grow."
tags:
  - agents
  - prompts
  - systems
draft: false
featured: true
---

One of the hardest problems in agent engineering isn't making something work once — it's making it work the same way the hundredth time.

Prompt drift is real. Small changes in context, temperature, or even the order of instructions can shift outputs in ways that are hard to detect but easy to accumulate. Over time, your carefully tuned workflow becomes something you don't quite recognize.

## The Reproducibility Problem

Most agent frameworks optimize for **getting started**. Few optimize for **staying consistent**. I've been experimenting with a few patterns:

1. **Pinned prompt versions** — treat prompts like code, with version control and diff reviews
2. **Structured output contracts** — define the shape of what you expect before the agent runs
3. **Execution traces** — log every decision point so you can replay and debug

## What I've Learned

The most reliable agent systems I've built share a few traits:

- They do less, but do it consistently
- They have clear boundaries between what the agent decides and what the system enforces
- They fail in predictable ways

> Good agent architecture is boring architecture. The interesting part is what you build on top of it.

## Next Steps

I'm working on a toolkit called OpenCode Workflows that tries to codify these patterns. It's early, but the core idea is: **make the right thing the easy thing**.

More on this soon.
