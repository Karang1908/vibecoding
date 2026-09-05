# Contributing to Vibecoding 101

Thank you for your interest in contributing to the **Vibecoding 101** workshop documentation! This open-source repository is maintained by **Google Developer Groups (GDG) • BITS Pilani Dubai Campus**, instructed by **[Priyanshu](https://github.com/prxcode)** and **Armaan**.

Whether you're fixing a typo, adding prompt engineering templates, submitting your Day 2 challenge project, or improving accessibility, your contributions are warmly welcome.

---

## Code of Conduct

We are committed to providing a welcoming, inclusive, and harassment-free experience for everyone in our student developer community. Please be respectful, constructive, and supportive in all issues, pull requests, and discussions.

---

## Ways to Contribute

1. **Improve Workshop Modules**: Clarify explanations, fix grammar/typos, or add better diagrams.
2. **Submit Your Overnight Challenge Project**: Add your project link and demo to the student showcase section.
3. **Report Issues**: If an API endpoint or code snippet behaves unexpectedly, open a detailed issue.
4. **Share Prompt Engineering Templates**: Contribute tested `.cursorrules` or `AGENTS.md` presets for different technology stacks.

---

## Contribution Workflow

### 1. Fork the Repository
Fork the repository on GitHub and clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/vibecoding101.git
cd vibecoding101
```

### 2. Create a Feature Branch
Use semantic branch names:
```bash
# For a new feature or module addition
git checkout -b feat/day2-gemini-stream-fix

# For documentation updates
git checkout -b docs/clarify-mcp-protocol
```

### 3. Install Dependencies & Run Locally
```bash
pip install -r requirements.txt
mkdocs serve
```
Preview changes at `http://127.0.0.1:8000/` and verify that there are no broken links or console errors.

### 4. Conventional Commits
We follow the **Conventional Commits** specification:
- `feat:` A new feature or significant addition (e.g. `feat: add multimodal vision upload handler`)
- `fix:` A bug fix or correction (e.g. `fix: dark mode contrast in mermaid diagrams`)
- `docs:` Documentation improvements (e.g. `docs: add MCP TypeScript code walkthrough`)
- `style:` Formatting, CSS adjustments, or design refinements (e.g. `style: adjust header logo padding`)
- `refactor:` Code reorganization without behavioral change (e.g. `refactor: clean orphaned draft modules`)
- `chore:` Maintenance tasks, dependencies, or configuration (e.g. `chore: configure vercel.json deployment`)

Example commit command:
```bash
git commit -m "docs: add step-by-step vercel continuous deployment guide"
```

### 5. Open a Pull Request
1. Push your branch to GitHub:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Open a Pull Request against the `main` branch of `prxcode/vibecoding101`.
3. Provide a concise description of your changes and any relevant screenshots.

---

## Questions and Support

If you have questions regarding workshop content or need help with setup:
- Open a question on [GitHub Discussions](https://github.com/prxcode/vibecoding101/discussions).
- Open an issue on [GitHub Issues](https://github.com/prxcode/vibecoding101/issues).
- Connect directly with **[Priyanshu](https://github.com/prxcode)** and **Armaan** at GDG BITS Pilani Dubai Campus.
