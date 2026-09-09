---
title: "3.4 Don't Get Hacked"
description: "Five minutes that save you a very bad week."
hide:
  - toc
---

# Don't get hacked

Remember the rule from Day 2?

> **Never put your API key in the code.**

Here's why, and here's the proper fix.

## What actually happens

Bots scan every public GitHub repo, constantly, looking for keys.

<div class="stat-row" markdown>
<div class="big-stat"><span class="num">90</span><span class="cap">seconds to find it</span></div>
<div class="big-stat"><span class="num">24/7</span><span class="cap">bots scanning</span></div>
<div class="big-stat"><span class="num">₹₹₹</span><span class="cap">on your card</span></div>
</div>

Real people have woken up to thousand-dollar bills. Students. This month.

<p class="beat">A key in your code is your house key taped to the front door.</p>

## The fix — three moves

<div class="step" data-step="1" markdown>

### Keys go in a .env file

Make a file called `.env` next to your code:

```bash
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

Your code reads from here instead of having the key typed in.

</div>

<div class="step" data-step="2" markdown>

### Tell Git to ignore it

Make a file called `.gitignore`:

```bash
.env
.env.local
node_modules
```

Now Git pretends `.env` doesn't exist. It never leaves your laptop.

</div>

<div class="step" data-step="3" markdown>

### Give Vercel the keys separately

Vercel → your project → **Settings** → **Environment Variables**

Add the same names and values. Hit **Redeploy**.

Now the live site has the keys — but GitHub never saw them.

</div>

Stuck? Ask:

<div class="prompt-slab" markdown>
<span class="slab-label">Type this</span>

Move all my API keys out of the code into a .env file, add a .gitignore so it's never pushed to GitHub, and tell me exactly what to add in Vercel's environment variables.
</div>

## The short version

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### 🚨 Never

- Key typed into your code
- Key in a screenshot
- Key pasted in a group chat
- `.env` pushed to GitHub
</div>
<div class="vs-good" markdown>
#### ✅ Always

- Keys in `.env`
- `.env` in `.gitignore`
- Real keys in Vercel settings
- Leaked it? Delete and make a new one
</div>
</div>

!!! tip "Already pushed a key?"
    Don't panic — go to the provider, **delete that key**, generate a new one.

    Deleting it from GitHub isn't enough. It's in the history. Kill the key itself.

<div class="vibe-check" markdown>
<div class="vc-title">🔐 You're safe now</div>

Live site works. Keys hidden. Repo clean.

That's a professional setup. Genuinely.
</div>

<div class="nav-next" markdown>
[One last trick →](05-whats-next.md){ .md-button .md-button--primary }
</div>
