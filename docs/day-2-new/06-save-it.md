---
title: "1.6 Save It Forever"
description: "Lock it in. Push it to the cloud."
hide:
  - toc
---

# Save it to GitHub

Right now, this masterpiece only exists on your laptop. If you spill coffee on your keyboard, the game is gone.

<p class="beat">We use Git to save our code to the cloud.</p>

## Create the repository

1. Go to **[github.com](https://github.com/)** and log in (or create your free account).
2. Click the **+** icon top right → **New repository**.
3. Name it `survive-uni`.
4. Leave it Public. Click **Create repository**.

## Push your code

GitHub will give you a list of commands. Open your terminal in VS Code (where your Next.js app is running). 

Press `++ctrl+c++` to stop the server, then run these exact commands:

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> RUN IN YOUR TERMINAL', 2000)"><span class="copy-icon"></span> RUN IN YOUR TERMINAL</button>

```bash
git add . 
git commit -m "feat: built survive uni using next.js and vibecoding" 
git branch -M main 
git remote add origin YOUR_GITHUB_REPO_URL_HERE 
git push -u origin main
```
</div>

*Note: Replace the URL in that fourth line with the actual link GitHub gave you.*

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-package-variant-closed:

**git add**

Bundles your changes
</div>

<div class="icon-card" markdown>
:material-fountain-pen-tip:

**git commit**

Labels your bundle
</div>

<div class="icon-card" markdown>
:material-rocket-launch:

**git push**

Sends it to the cloud
</div>

<div class="icon-card" markdown>
:material-earth:

**Safe forever**

Your code is now on GitHub
</div>

</div>

## Day 1 Complete

<div class="vibe-check" markdown>
<div class="vc-title">What's next?</div>

Today you built an app that only you can see. Tomorrow, we go live. 

On Day 2, we will deploy this game to Vercel so anyone in the world can play it. We'll learn how to read build logs, secure environment variables, and debug errors in production. 

Take a breath. You're a React developer now.
</div>
