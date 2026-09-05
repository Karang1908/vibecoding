---
title: "1.6 Setup & Readiness Checklist"
description: "Verifying local environments, free API keys, and test prompts before Day 2's 2-hour live build."
---

# 1.6 Setup & Readiness Checklist for Day 2

<div class="session-banner">
  <div class="banner-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
    <strong class="banner-title">Session Focus: Day 2 Readiness & API Key Setup</strong>
  </div>
  Ensure your workstation is fully primed for Day 2's 2-hour live build. Verify your free Google AI Studio key, test API latency, and review the starter directory checklist.
</div>

## Readiness Checklist for Day 2

Before leaving today's session, verify these 5 prerequisites:

- [x] **1. Google AI Studio Account**: Active at [aistudio.google.com](https://aistudio.google.com) with an API key generated.
- [x] **2. Git Installed & Configured**:
  ```bash
  git --version
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
- [x] **3. Node.js LTS (v20+) or Python 3.10+**: Available for serving local HTTP files.
- [x] **4. Code Editor Installed**: Cursor, Windsurf, or VS Code with Cline/Continue.
- [x] **5. Browser DevTools**: Familiar with opening Console (`F12` or `Ctrl+Shift+I`).

---

## 30-Second API Sanity Test

Run this quick command in your terminal to verify that your free Gemini 2.0 Flash API key is working:

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Respond with: API Connected Successfully!"}]}]}'
```

If you receive a JSON payload with `"text": "API Connected Successfully!"`, your environment is fully primed.

---

## Workshop Release Strategy: Day 2 and Day 3 Access

Many workshop instructors ask: *Should I keep Day 2 and Day 3 hidden in .gitignore, or keep them public in advance?*

### Option A: Public in Advance (Recommended)
- Keeping all 3 days public on GitHub and your documentation site builds excitement.
- Attendees can browse ahead, prepare questions, and review notes if they fall behind during live coding.
- Does not risk broken links in `mkdocs.yml`.

### Option B: Day-by-Day Git Release
- If you prefer attendees not to read ahead, add `docs/day-2/` and `docs/day-3/` to a draft branch (e.g. `workshop-draft`).
- Only merge and push `day-2` to `main` at the start of Day 2, and `day-3` at the start of Day 3.
- Note: Avoid putting markdown pages listed in `mkdocs.yml` into `.gitignore` directly, as `mkdocs build` will fail if files specified in the navigation do not exist on the filesystem.

---

## What We Build Tomorrow (Day 2)

Tomorrow in **Day 2**, we will spend **2 hours live building "OmniVibe AI Studio"** from a blank folder in real time in front of the crowd:
- Live streaming AI chat with Gemini 2.0 Flash (1M tokens free).
- Multimodal drag-and-drop image analysis.
- Google Material 3 responsive layout with light/dark theme toggle.
- Clean client-side persistence and export to Markdown.
