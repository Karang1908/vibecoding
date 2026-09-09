---
title: "2.6 Save It Forever"
description: "GitHub. Your work, permanent."
hide:
  - toc
---

# Save it forever

Right now your app exists in **one place** — a folder on your laptop.

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">💧</span><strong>Spill coffee</strong><span>Gone</span></div>
<div class="icon-card"><span class="ic">🗑️</span><strong>Delete the folder</strong><span>Gone</span></div>
<div class="icon-card"><span class="ic">💀</span><strong>Laptop dies</strong><span>Gone</span></div>
</div>

<p class="beat">Let's fix that in five minutes.</p>

## Git vs GitHub

People mix these up constantly:

<div class="versus" markdown>
<div class="vs-good" markdown>
#### 💾 Git

On **your laptop**.

Saves snapshots you can jump back to.

You've been using it already.
</div>
<div class="vs-good" markdown>
#### ☁️ GitHub

On the **internet**.

Where those snapshots go to be safe.

Also: your public portfolio.
</div>
</div>

Git saves. GitHub stores.

## Put it online

<div class="step" data-step="1" markdown>

### Make an empty repo

**[github.com/new](https://github.com/new)**

Name it. Leave everything else alone. **Create repository.**

Don't tick any boxes on that page.

</div>

<div class="step" data-step="2" markdown>

### Copy the link

GitHub shows you a URL like:

```
https://github.com/yourname/your-app.git
```

</div>

<div class="step" data-step="3" markdown>

### Push it up

```bash
git add .
git commit -m "day 2 build"
git branch -M main
git remote add origin [PASTE YOUR URL]
git push -u origin main
```

Asks for a login? Follow the browser popup.

</div>

Refresh your GitHub page.

<div class="vibe-check" markdown>
<div class="vc-title">🎉 It's on the internet</div>

Your code is safe. Your laptop could explode right now and you'd lose nothing.

Send that link to someone. It's real.
</div>

## From now on

Whenever you want to save your work:

```bash
git add .
git commit -m "what I changed"
git push
```

Three lines. That's your save button forever.

!!! tip "Forget the commands?"
    Ask the AI. *"push my changes to github"* — it'll give you the commands.

    Nobody memorises these. Not even people who've done it for ten years.

## What you did today

<div class="stat-row" markdown>
<div class="big-stat"><span class="num">1</span><span class="cap">real app</span></div>
<div class="big-stat"><span class="num">0</span><span class="cap">tutorials watched</span></div>
<div class="big-stat"><span class="num">∞</span><span class="cap">backups</span></div>
</div>

You took an idea, broke it into pieces, built it, broke it, fixed it, and put it on the internet.

<p class="beat">That's what software engineers do. That's the actual job.</p>

## Before Thursday

**Keep building.** You've got four days. Add the stuff we didn't get to. Break it. Fix it. `git push` when it works.

!!! warning "One rule"
    Never put your API key in the code. Ever. Bots find it in about 90 seconds.

    On Day 3 we do it properly.

## Thursday

Your app still only lives on *your* laptop. Nobody else can use it.

Day 3 we fix that:

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">🗄️</span><strong>A real database</strong><span>Data that survives anything</span></div>
<div class="icon-card"><span class="ic">🌍</span><strong>A live URL</strong><span>Send it to anyone</span></div>
<div class="icon-card"><span class="ic">🔐</span><strong>Keys done right</strong><span>Don't get hacked</span></div>
</div>

<p class="beat">See you Thursday.</p>
