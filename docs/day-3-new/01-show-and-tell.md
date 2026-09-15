---
title: "2.1 Show & Tell"
description: "Welcome to Day 2: Make It Real. Celebrate what you built and prepare to go live."
hide:
  - toc
---

# Welcome to Day 2: Make It Real

Yesterday, you sat down with an empty directory. By the end of Day 1, you had a working Next.js application running on your laptop.

<p class="beat">Today, we give your application permanent memory and a real home on the internet.</p>

<div class="stat-row" markdown>
<div class="big-stat" markdown="span"><span class="num">1</span><span class="cap">local game</span></div>
<div class="big-stat" markdown="span"><span class="num">1</span><span class="cap">cloud database</span></div>
<div class="big-stat" markdown="span"><span class="num">1</span><span class="cap">public URL</span></div>
</div>

---

## 1. Quick Show & Tell

Before we write new code, let's look at what everyone built yesterday. 

Volunteers share screen for **two minutes each**:

<div class="icon-row" markdown>
<div class="icon-card" markdown="span">
<span class="ic">:material-gamepad-variant:</span>
<strong>1. What it does</strong>
<span>Show one scenario & choices</span>
</div>

<div class="icon-card" markdown="span">
<span class="ic">:material-bug-check:</span>
<strong>2. What broke</strong>
<span>The bug you investigated & fixed</span>
</div>

<div class="icon-card" markdown="span">
<span class="ic">:material-trophy-variant:</span>
<strong>3. Your favorite bit</strong>
<span>A funny scenario or Survival Rank</span>
</div>
</div>

<div class="vibe-check" markdown>
<div class="vc-title">"My app is half-finished!"</div>

That is 100% fine! Everyone's is. A half-finished project that runs in your browser beats a "perfect" project that only exists in your head. Be proud of what you got working.
</div>

---

## 2. Yesterday vs Today

Look at where your app is right now compared to where it will be in the next hour:

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### :material-laptop: Right Now (Local Only)
- Lives only on your personal machine
- Data disappears if you close or refresh
- Nobody else can play or see their high score
- Runs on `http://localhost:3000`
</div>
<div class="vs-good" markdown>
#### :material-earth: By the End of Today (Made Real)
- **Supabase Database:** Stores and retrieves high scores permanently
- **Global Leaderboard:** Players can see each other's ranks
- **Live Vercel Deployment:** A public URL anyone can open on a phone
- **Protected Secrets:** API keys secured with `.env` and `.gitignore`
</div>
</div>

---

## 3. Today's Plan

Here is our roadmap for Day 2:

<ul class="timeline">
<li><span class="t">20 min</span><span><strong>A Real Database:</strong> Connect Supabase to store scores and build a leaderboard</span></li>
<li><span class="t">15 min</span><span><strong>Put It On The Internet:</strong> Deploy your GitHub repo to a live Vercel URL</span></li>
<li><span class="t">10 min</span><span><strong>Don't Get Hacked:</strong> Lock down environment variables and secrets</span></li>
<li><span class="t">15 min</span><span><strong>The Full Picture & Beyond:</strong> Turn project notes into reusable AI skills</span></li>
</ul>

Let's give your app permanent memory.

<div class="nav-next" markdown>
[Give It A Real Database →](02-database.md){ .md-button .md-button--primary }
</div>
