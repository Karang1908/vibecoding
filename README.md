# Vibecoding 101: The AI-First Software Engineering Masterclass

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![MkDocs Material](https://img.shields.io/badge/Docs-Material%20for%20MkDocs-526CFE?style=flat&logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue?style=flat&logo=python)](https://python.org)
[![Google Developer Groups](https://img.shields.io/badge/GDG-BITS%20Pilani%20Dubai%20Campus-4285F4?style=flat&logo=google)](https://developers.google.com/community/gdg)

> Official workshop tutorial, reference documentation, and slide-deck companion for the **Vibecoding 101** masterclass organized by **Google Developer Groups (GDG) • BITS Pilani Dubai Campus**.

---

## Workshop Curriculum (3-Day Zero-to-Hero Roadmap)

| Day | Modules | Key Focus Areas | Hands-On Milestone |
| :--- | :--- | :--- | :--- |
| **Day 1** | **Modules 1.1 – 1.6** | Source code vs machine binary, compilers/runtimes, IDEs (VS Code vs Antigravity), LLM mechanics (tokens, embeddings, attention), Gemini 2.0 Flash (1M tokens free tier), `.cursorrules` / `AGENTS.md`, APIs/JSON, and Model Context Protocol (MCP). | **PromptVault Lite (20 Min)** |
| **Day 2** | **Modules 2.1 – 2.6** | 120-minute live product build: "OmniVibe AI Studio". Spec-driven development (`SPEC.md`), Google Material 3 UI scaffolding, Gemini REST streaming integration, multimodal vision (Base64), and diagnostic error steering. | **Fullstack AI Studio** |
| **Day 3** | **Modules 3.1 – 3.6** | Audience project review clinic, Git & GitHub mastery (commits, branches, PRs), zero-to-live Vercel edge deployment, `.env` secret protection, autonomous agent ReAct loops, multi-agent subagents, and self-healing test cycles. | **Vercel Live URL** |

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
3. Build & Output Settings are automatically handled via `vercel.json`:
   - **Build Command**: `pip install -r requirements.txt && mkdocs build`
   - **Output Directory**: `site`
4. Click **Deploy**. Your documentation will be live on a global edge CDN with automated HTTPS and instant deployments on every `git push`.

---

## Tech Stack & Free High-Token Tooling

- **Frontier AI Model**: Google Gemini 2.0 Flash via [Google AI Studio](https://aistudio.google.com) (1,048,576 free token context window, 15 RPM, 1,500 RPD).
- **AI-Native Environments**: Google Antigravity, Cursor, and VS Code + Cline.
- **Protocols & Standards**: Model Context Protocol (MCP & JSON-RPC 2.0), Spec-Driven Development (SDD).
- **Web App Architecture**: Native HTML5, modern CSS3 variables, ES6 Modules (zero npm install required).
- **Hosting & CI/CD**: Vercel Global Edge Network.

---

## Contributing

We welcome contributions, student project showcases, and improvements! Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

---

## License & Credits

- **Organized by**: Google Developer Groups (GDG) • BITS Pilani Dubai Campus
- **Instructors**: **[Priyanshu](https://github.com/prxcode)** & **Armaan**
- **Community Inquiries**: Post on [GitHub Discussions](https://github.com/prxcode/vibecoding101/discussions) or join the chapter Discord.
