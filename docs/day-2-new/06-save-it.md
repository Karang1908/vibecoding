---
title: "1.6 Save It Forever"
description: "Why Git & GitHub exist, pushing your code, and wrapping up Day 1."
hide:
  - toc
---

# Save It Forever: Git & GitHub

Right now, your game only lives on your laptop.

If your laptop runs out of battery, if your hard drive crashes, or if you accidentally delete a folder—your code is gone.

Even worse: **What happens if you try to add a new feature tomorrow and everything breaks so badly you can't get back to where you were?**

<p class="beat">That is why we use Git and GitHub.</p>

---

## 1. Why Git & GitHub?

Remember our golden rule: *Every tool should have a reason.*

<div class="versus" markdown>
<div class="vs-good" markdown>
#### :material-source-branch: Git = History
Git runs locally on your computer. It creates snapshots (checkpoints) of your project over time. 

If you make a change that breaks everything, Git lets you jump backwards in time to when the code was working.
</div>
<div class="vs-good" markdown>
#### :material-github: GitHub = Cloud Storage & Sharing
GitHub is a platform in the cloud where you store your Git snapshots. 

It keeps your code backed up safely, lets team members collaborate on the same project, and links directly to cloud hosting platforms.
</div>
</div>

*(And yes, you can follow your workshop leads on GitHub. It's cool. We are legally required to tell you that.* 😎*)*

---

## 2. Push Your Project to GitHub

Follow these steps to lock in your work today:

<div class="step" data-step="1" markdown>
### Create a Repository on GitHub
1. Open **[github.com](https://github.com/)** and log in.
2. Click the **`+`** icon in the top right corner → **New repository**.
3. Name your repository: `survive-uni`.
4. Keep it **Public** and leave all checkboxes (README, .gitignore) unchecked.
5. Click **Create repository**.
</div>

<div class="step" data-step="2" markdown>
### Stop the Server & Save Your Work
In your VS Code terminal, press `++ctrl+c++` to temporarily pause `npm run dev`.

Run these commands in order:

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> COPY COMMANDS', 2000)"><span class="copy-icon"></span> COPY COMMANDS</button>

```bash
git add .
git commit -m "feat: built survive uni game with nextjs and vibecoding"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL_HERE
git push -u origin main
```
</div>

*(Make sure to replace `YOUR_GITHUB_REPO_URL_HERE` with the actual URL from your GitHub page, e.g. `https://github.com/your-username/survive-uni.git`)*
</div>

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-archive-plus:

**`git add .`**

Packs all modified files into a staging box
</div>

<div class="icon-card" markdown>
:material-tag:

**`git commit`**

Seals the box and writes a message on top
</div>

<div class="icon-card" markdown>
:material-cloud-upload:

**`git push`**

Uploads the sealed box safely to GitHub
</div>

<div class="icon-card" markdown>
:material-lock-check:

**Saved Forever**

Safe in the cloud. Accessible from anywhere.
</div>

</div>

---

## 3. Day 1: Build — Mission Accomplished!

Take a look at the journey you just completed today:

<div class="process-flow" markdown>
<span class="flow-item">Idea</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">Mental Map</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">PRD & AGENT</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">Data Layer</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">Interface & State</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">Debug Loop</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item highlight">GitHub</span>
</div>

You started with a blank folder. You now have a working Next.js application built with an AI pair programmer, structured cleanly, and stored safely in the cloud.

You should leave today knowing:
1. **"I can build something real."**
2. **"I know roughly what I'm looking at when I inspect an app."**

---

## 4. What's Next: Day 2 (Make It Real)

Today our app only exists on your computer.
On Day 2, we give it **permanent memory** and a **public home on the internet**:

<div class="versus" markdown>
<div class="vs-good" markdown>
#### :material-database: 1. Supabase (A Real Database)
We will connect our game to a real Postgres database so players can submit high scores, view a live global leaderboard, and share stats across devices.
</div>
<div class="vs-good" markdown>
#### :material-rocket-launch: 2. Vercel (Live Deployment)
We will take `http://localhost:3000` and turn it into a real public URL (like `https://survive-uni.vercel.app`) that you can open on your phone and send to your friends.
</div>
</div>

Rest up, architect. Today was huge. Tomorrow, we ship!

<div class="nav-next" markdown>
[Day 2: Show & Tell →](../day-3-new/01-show-and-tell.md){ .md-button .md-button--primary }
</div>
