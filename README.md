# Vibecoding 101: The AI-First Software Engineering Masterclass

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![MkDocs Material](https://img.shields.io/badge/Docs-Material%20for%20MkDocs-526CFE?style=flat&logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue?style=flat&logo=python)](https://python.org)
[![Google Developer Groups](https://img.shields.io/badge/GDG-BITS%20Pilani%20Dubai%20Campus-4285F4?style=flat&logo=google)](https://developers.google.com/community/gdg)

> Official workshop tutorial, reference documentation, and slide-deck companion for the **Vibecoding 101** masterclass organized by **Google Developer Groups (GDG) • BITS Pilani Dubai Campus**.

---

## Workshop Curriculum (3-Day Zero-to-Hero Roadmap)

| Phase | Modules | Key Focus Areas | Key Deliverables |
| :--- | :--- | :--- | :--- |
| **Pre-Workshop** | **Modules 0.1 – 0.3** | Stack setup (Cursor/VS Code, Node.js, Git), cloud account provisioning (GitHub, Vercel, Supabase), and API keys 101 with leak prevention. | **Verified Environment & Safe API Keys** |
| **Day 1** | **Modules 1.1 – 1.6** | Foundations, Antigravity workflow (`prompt → build → inspect → iterate`), 3 prompt pillars (Context, Intent, Constraints), context windows (`@-mentions`), zero-shot vs few-shot, `SKILL.md` rules, version control essentials, and PRD/MVP framing. | **GitHub Repo, Defined PRD, Locked MVP Idea** |
| **Day 2** | **Modules 2.1 – 2.6** | 120-minute live product build ("OmniVibe AI Studio"): component-driven generation, Gemini 2.0 Flash REST streaming, multimodal vision, taming AI hallucinations, micro-commits, reading stack traces, and feature freeze. | **Local Working App, Core UI/UX, Git Commits** |
| **Day 3** | **Modules 3.1 – 3.6** | Database schema design with AI, Supabase integration, Row Level Security (RLS) policies, Git PR workflows, production Vercel edge deployment, `.env.local` secret hygiene, hydration error resolution, lightning demos, and open Q&A. | **Supabase Database, Live Vercel URL, Final Polish** |
| **Post-Workshop** | **Modules 4.1 – 4.2** | How to read live official documentation with AI, defensive MVP scaling without breaking foundations, open-source contribution, and the 10 Commandments of Vibecoding. | **Long-Term Builder Roadmap** |

---

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/prxcode/vibecoding101.git
cd vibecoding101
```

### 2. Install Dependencies
Ensure you have Python 3.10+ installed:
```bash
pip install -r requirements.txt
```

### 3. Start the Live Preview Server
```bash
# Windows
.\run.bat

# macOS / Linux
chmod +x run.sh
./run.sh

# Or directly using MkDocs CLI
mkdocs serve
```

Open `http://127.0.0.1:8000/` in your browser to view the interactive documentation with hot-reloading enabled.

---

## Automated Deployment to Vercel (Continuous Deployment)

This repository includes a native [`vercel.json`](vercel.json) build configuration. Every time you push changes to GitHub, Vercel will automatically build and deploy the updated site:

1. Import this repository into [Vercel](https://vercel.com/new).
2. Framework Preset: **Other**.
3. Build & Output Settings are automatically handled via [`vercel.json`](vercel.json):
   - **Build Command**: `python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && mkdocs build`
   - **Output Directory**: `site`
   - **Install Command**: Leave empty / disabled (handled automatically in the build command)
4. Click **Deploy**. Your documentation will be live on a global edge CDN with automated HTTPS and instant deployments on every `git push`.

---

## Tech Stack & Free High-Token Tooling

- **Frontier AI Model**: Google Gemini 2.0 Flash via [Google AI Studio](https://aistudio.google.com) (1,048,576 free token context window, 15 RPM, 1,500 RPD).
- **AI-Native Environments**: Google Antigravity, Cursor, and VS Code + Cline.
- **Protocols & Standards**: Model Context Protocol (MCP & JSON-RPC 2.0), Spec-Driven Development (SDD).
- **Web App Architecture**: Native HTML5, modern CSS3 variables, ES6 Modules (zero npm install required).
- **Database & Auth**: Supabase (PostgreSQL with Row Level Security).
- **Hosting & CI/CD**: Vercel Global Edge Network.

---

## Contributing

We welcome contributions, student project showcases, and improvements! Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

---

## License & Credits

- **Organized by**: Google Developer Groups (GDG) • BITS Pilani Dubai Campus
- **Instructors**: **[Priyanshu](https://github.com/prxcode)** & **[Armaan](https://github.com/armaaxs)**
- **Community Inquiries**: Post on [GitHub Discussions](https://github.com/prxcode/vibecoding101/discussions) or join the chapter Discord.
