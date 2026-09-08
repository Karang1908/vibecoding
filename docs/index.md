---
title: "Vibecoding 101 | Workshop Notes & Syllabus"
description: "Mastering AI-First Software Engineering, Live Prototyping, Free High-Token Models, and Production Deployments."
---

# Vibecoding 101: The AI-First Builder Masterclass

<div class="gdg-hero">
  <span class="gdg-badge gdg-badge-blue">GDG BITS Pilani Dubai Campus</span>
  <span class="gdg-badge gdg-badge-red">3-Day Masterclass</span>
  <span class="gdg-badge gdg-badge-yellow">2-Hour Live Build</span>
  <span class="gdg-badge gdg-badge-green">Production Shipping</span>
  
  <h2 style="margin-top: 0.8rem; margin-bottom: 0.4rem; font-weight: 700;">Welcome to Vibecoding 101</h2>
  <p style="font-size: 1.05rem; opacity: 0.9; margin-bottom: 0.8rem;">
    From syntax memorization to AI orchestration. Learn how to architect, steer, debug, and ship production software at the speed of thought using free high-token frontier models, live multi-file editing, and autonomous workflows.
  </p>
  <p style="font-size: 0.9rem; margin-bottom: 1.2rem; color: var(--gdg-blue);">
    <strong>Workshop Conducted by:</strong> 
    <a href="https://github.com/prxcode" target="_blank" rel="noopener" style="font-weight: 600; text-decoration: underline;">Priyanshu</a> 
    and <a href="https://github.com/armaaxs" target="_blank" rel="noopener" style="font-weight: 600; text-decoration: underline;">Armaan</a> &bull; GDG BITS Pilani Dubai Campus
  </p>
  
  <a href="pre-workshop/01-stack-setup/" class="gdg-btn">Pre-Workshop Setup &rarr;</a>
  <a href="day-1/01-what-is-vibecoding/" class="gdg-btn gdg-btn-outline" style="margin-left: 0.5rem;">Start Day 1 &rarr;</a>
</div>

<div class="session-banner">
  <div class="banner-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <strong class="banner-title">Zero-to-Hero Roadmap for CSE Students</strong>
  </div>
  This documentation serves as the comprehensive syllabus for the Vibecoding 101 Workshop, replacing traditional slides with a live, actionable reference. The curriculum is broken down into a 3-day sprint designed to take beginners from zero to a deployed, backend-supported application.
</div>

---

## Workshop Timeline & Key Deliverables

| Workshop Timeline | Phase Focus | Key Deliverables |
| :--- | :--- | :--- |
| **Pre-Workshop** | Environment & Secrets | Configured IDE (Cursor/VS Code), Node.js, Git, Free Cloud Accounts & API Keys |
| **Day 1** | Learn + Choose the Build | GitHub Repo, Defined PRD, Locked MVP Idea |
| **Day 2** | Live Product Build | Local Working App, Core UI/UX, Git Commits |
| **Day 3** | Backend & Shipping | Supabase Database, Live Vercel URL, Final Polish |
| **Post-Workshop** | Beyond Vibecoding 101 | Live Documentation Workflows, Safe MVP Scaling, Open Source Contribution |

---

## Phase Breakdowns & Daily Curriculum

### 0. Pre-Workshop: Setup & Prerequisites

*Before Day 1 begins, participants need their environment ready so time isn't wasted on installations.*

* **[The Vibecoding Stack Setup](pre-workshop/01-stack-setup.md):** Downloading and installing Cursor (or VS Code with AI extensions), Node.js (LTS), and Git.
* **[Account Provisioning](pre-workshop/02-account-provisioning.md):** Creating free-tier developer accounts for GitHub, Vercel, Supabase, and Google AI Studio.
* **[API Keys 101](pre-workshop/03-api-keys-101.md):** How to generate necessary API keys (Google Gemini / AI Studio, Anthropic, OpenAI) and why you must never commit them to public repositories.

---

### Day 1: Fundamentals & Tech Ecosystem

**Goal:** Understand the AI-assisted workflow, set up version control, and lock in a highly focused project scope.  
**Key Deliverables:** Initialized GitHub Repo, Defined PRD & `SPEC.md`, Locked MVP Idea.

* **[The Vibecoding Workflow](day-1/01-what-is-vibecoding.md):** Introduction to the Antigravity framework. Master the core loop: `prompt → build → inspect → iterate`.
* **[LLMs & Free High-Token Models](day-1/02-tools-and-environment.md):** Transformer token mechanics, KV caching, and leveraging Google Gemini 2.0 Flash (1M tokens free tier).
* **[The Anatomy of a Perfect Prompt](day-1/03-prompting-and-context-engineering.md):** Breaking down prompts into three pillars: Context (what we have), Intent (what we want), and Constraints (what the AI should *not* do).
* **[Context Window Management](day-1/03-prompting-and-context-engineering.md):** Understanding the memory limits of AI models. How to use `@-mentions` (like `@Files` or `@Docs` in Cursor) to feed the AI only the specific files it needs, rather than confusing it with the whole codebase.
* **[Zero-Shot vs. Few-Shot Prompting](day-1/03-prompting-and-context-engineering.md):** When to just ask the AI to build something (zero-shot) versus when to provide examples of the code style or UI pattern you want it to mimic (few-shot).
* **[Agent Instructions (SKILL.md)](day-1/03-prompting-and-context-engineering.md):** How to write and use reusable project instructions to effectively steer the coding agent without micromanaging syntax.
* **[Version Control Essentials](day-1/04-architecture-spec-and-mcp.md):** Setting up a GitHub repository. Understanding commits, branches, pushes, and why version control is your safety net when working with AI.
* **[PRD & MVP Basics](day-1/04-architecture-spec-and-mcp.md):** Define the target user, the core problem, and the "done" criteria. When framing your MVP, commit to a narrow, specialized core flow. A flawlessly executed, highly focused tool signals genuine competence for future internship applications, keeping your portfolio from looking like a jack of all trades but master of none.
* **[Idea Selection & Feasibility](day-1/04-architecture-spec-and-mcp.md):** Review submissions, debate feasibility, and lock the scope of the app the group will build over the next two days.
* **[Hands-On Rapid Prototyping](day-1/05-hands-on-rapid-prototyping.md):** 20-minute rapid prototype build warm-up.
* **[Day 1 Checkpoint & Readiness](day-1/06-day1-prep-and-readiness.md):** Final deliverable audit before the Day 2 build sprint.

---

### Day 2: The Build Sprint

**Goal:** Transform the PRD into a functional, localized application with a complete core user journey.  
**Key Deliverables:** Local Working App, Core UI/UX, Git Commits.

* **[Live Build Overview & Blueprint](day-2/01-live-build-overview.md):** OmniVibe AI Studio architecture, free tech stack, and 120-minute pacing guide.
* **[Project Initialization & Component-Driven Generation](day-2/02-phase-1-spec-and-scaffolding.md):** Set up the environment and prompt the coding agent to generate the initial file structure and baseline UI components. Why you should ask the AI to build small, isolated components (e.g., "Build the navigation bar") instead of full pages (e.g., "Build the whole dashboard").
* **[Core Flow Construction & Logic Integration](day-2/03-phase-2-live-gemini-integration.md):** Build the main screens interactively. Practice prompting the AI, testing output, and iterating on design. Wire up application logic, state management, and the Google Gemini 2.0 Flash REST API.
* **[Multimodal Vision & UI Polish](day-2/04-phase-3-multimodal-and-polish.md):** Drag-and-drop screenshot analysis, Google Material 3 tokens, and responsive mobile docking.
* **[Taming AI Hallucinations & Reading the Red](day-2/05-debugging-and-steering-models.md):** How to spot when the AI invents fake libraries, uses deprecated code, or hallucinates non-existent API endpoints. A beginner's guide to reading terminal stack traces and console errors, and how to paste those errors back to the AI for self-correction.
* **[The Micro-Commit Strategy](day-2/05-debugging-and-steering-models.md):** Training the habit of committing code *every time* the app works, no matter how small the change. This creates a "save state" to revert to when an AI prompt inevitably breaks the application.
* **[Collaborative Debugging & Feature Freeze](day-2/06-phase-4-wrapup-and-overnight-challenge.md):** Stop adding new ideas. Focus exclusively on cleaning up the UI, fixing critical bugs, and committing the final local progress to GitHub.
* **[Overnight Hackathon Challenge](day-2/06-phase-4-wrapup-and-overnight-challenge.md):** Verified codebase checkpoint and student builder extensions.

---

### Day 3: Backend, Shipping & Production

**Goal:** Connect a database, deploy to the live web, and present a functional application.  
**Key Deliverables:** Supabase Database, Live Vercel URL, Final Polish.

* **[Database Schema Design with AI](day-3/01-database-schema-and-supabase.md):** How to prompt the AI to write SQL or Prisma schemas that make sense for your MVP's data structure.
* **[Backend Integration (Supabase)](day-3/01-database-schema-and-supabase.md):** Create a new project, provision database tables, insert test data, and configure environment variables in your local environment to verify data persistence.
* **[Row Level Security (RLS) Basics](day-3/01-database-schema-and-supabase.md):** The most critical security step for beginners. Ensuring that User A cannot read, edit, or delete User B's data in the database.
* **[Git & GitHub Mastery for Builders](day-3/02-git-and-github-mastery.md):** Branching strategies, pull requests, and crafting portfolio-worthy README files.
* **[Production Deployment (Vercel)](day-3/03-shipping-to-vercel-and-cloud.md):** Connect your GitHub repository to Vercel, inject Supabase environment variables into production settings, and trigger the live build.
* **[Environment Variables (`.env.local`) & Secrets](day-3/04-environment-variables-and-secrets.md):** The crucial difference between local secrets and production secrets, and how to map local Supabase URLs and Anon Keys into Vercel's dashboard.
* **[Handling Hydration Errors & Final QA](day-3/04-environment-variables-and-secrets.md):** A common trap when deploying Next.js/React apps built by AI. How to recognize server-vs-client mismatches and guide the AI to fix them. Testing the live Vercel URL to make the demo presentation-ready.
* **[Lightning Demos & Autonomous Agents](day-3/05-agentic-workflows-and-subagents.md):** Present the live application to the group, showcasing the complete journey from the initial idea and PRD to the final deployed URL. ReAct agent loops and self-healing test suites.
* **[Open Q&A Clinic](day-3/05-agentic-workflows-and-subagents.md):** Final troubleshooting clinic covering prompting strategies, debugging, or next steps for expanding the app post-workshop.

---

### Post-Workshop: Beyond Vibecoding 101

*A final section to wrap up the documentation site and give you next steps.*

* **[How to Read Official Documentation](post-workshop/01-beyond-vibecoding.md):** AI models have a knowledge cutoff. Teaching participants how to feed up-to-date documentation links directly into the AI to use the newest framework features.
* **[Scaling the MVP](post-workshop/01-beyond-vibecoding.md):** Strategies for adding features later without the AI breaking the existing, working foundation.
* **[Open Source & Community](post-workshop/01-beyond-vibecoding.md):** How to contribute to other AI-built projects and where to find templates to start your next build faster.
* **[The Vibecoder's Handbook & Next Steps](post-workshop/02-handbook-and-roadmap.md):** The 10 Commandments of Professional Vibecoding, Google Solution Challenge, and community pathways.

---

## Speaker Details & Community Support

- **Lead Instructor**: Priyanshu — GitHub: [github.com/prxcode](https://github.com/prxcode)
- **Co-Instructor**: Armaan — GitHub: [github.com/armaaxs](https://github.com/armaaxs)
- **Host Chapter**: GDG BITS Pilani Dubai Campus
- **Community Discussions**: Post questions, bug reports, and project demos directly on [GitHub Discussions](https://github.com/prxcode/vibecoding101/discussions).
