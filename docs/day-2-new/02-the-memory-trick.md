---
title: "1.2 The Blueprint"
description: "Vibecoding 101. Define the rules before you build."
hide:
  - toc
---

# The rules of Vibecoding

Remember your intern?

> Read the entire internet. Zero memory.

Vibecoding means writing software by prompting AI. But if you just say "build me a game," it will hallucinate, forget your stack, and make a mess.

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### :material-emoticon-sad-outline: The Amateur
- Massive, scattered prompts
- Blindly trusts the AI
- Hopes for the best
- Gets a broken, outdated React app
</div>
<div class="vs-good" markdown>
#### :material-emoticon-happy-outline: The Architect
- Defines exact components and data
- Questions weird imports
- Builds one step at a time
- Gives the intern a notebook
</div>
</div>

!!! tip "Generate a Polished Prompt"
    Building your own idea? You can use [Vibe-Gen](https://vibecode-prompt.vercel.app/) to instantly generate a professional, highly polished architecture prompt tailored specifically to your project.

## Step 1: Give it a notebook

Before writing any application code, we define our system boundaries. 

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> COPY', 2000)"><span class="copy-icon"></span> COPY</button>

I am building 'Survive Uni', a resource-management web game using Next.js (App Router), TypeScript, and Tailwind CSS. I want this project to demonstrate deep, specialized mastery of this specific stack.

Please generate two markdown files:
1. `PRD.md`: Outline the core game loop (10 scenarios, state tracking for Money/Time/Sanity, and a final Report Card).
2. `AGENT.md`: Define strict coding guidelines. Enforce functional components, strict TypeScript interfaces, mobile-first Tailwind design, and prohibit unnecessary external libraries.
</div>

Watch it write its own instruction manual. 

<p class="beat">You just gave an amnesiac a notebook.</p>

## Why this works

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-book-open-variant:

**It reads it first**

Every single time
</div>

<div class="icon-card" markdown>
:material-traffic-cone:

**Strict Rules**

No random libraries
</div>

<div class="icon-card" markdown>
:material-target:

**Clear Scope**

It knows exactly what to build
</div>

<div class="icon-card" markdown>
:material-recycle:

**You can edit it**

It's just a text file
</div>

</div>

<div class="vibe-check" markdown>
<div class="vc-title">Verify, don't trust</div>

Read what it wrote in `AGENT.md` and `PRD.md`. If it suggests switching to an older version of React, stop and question it. You are the lead engineer.
</div>

<div class="nav-next" markdown>
[Build the data →](03-break-it-down.md){ .md-button .md-button--primary }
</div>
