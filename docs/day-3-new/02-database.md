---
title: "3.2 A Real Database"
description: "Data that survives everything. One signup."
hide:
  - toc
---

# Give it a real memory

Right now your app saves things in the browser. Which means:

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">🧹</span><strong>Clear history</strong><span>Data gone</span></div>
<div class="icon-card"><span class="ic">📱</span><strong>Open on phone</strong><span>Empty. Nothing there.</span></div>
<div class="icon-card"><span class="ic">👥</span><strong>Friend opens it</strong><span>Can't see yours</span></div>
</div>

<p class="beat">That's not a database. That's a sticky note.</p>

## What a database actually is

Forget the scary word.

> A database is a spreadsheet that lives on the internet and never loses anything.

Rows and columns. Someone else keeps it safe. Your app reads and writes to it from anywhere.

That's genuinely it.

## Get one — free, 5 minutes

<div class="step" data-step="1" markdown>

### Sign up

**[supabase.com](https://supabase.com/)** → **Start your project** → sign in with GitHub.

</div>

<div class="step" data-step="2" markdown>

### New project

Name it. Pick a password (**save it somewhere**). Choose the closest region.

Takes about a minute to build. Let it cook.

</div>

<div class="step" data-step="3" markdown>

### Grab two things

**Settings** → **API**. Copy:

- **Project URL**
- **anon public key**

Paste both into a notes app for a second.

</div>

## Let the AI do the hard part

You're not writing database code. You're asking for it.

<div class="prompt-slab" markdown>
<span class="slab-label">Type this</span>

I want to move my app's data from the browser to a Supabase database.

1. Tell me what tables and columns I need for this app, and give me the SQL to create them.
2. Then update my code to save and load from Supabase instead of localStorage.
3. Keep my API keys out of the code — I'll add them separately.

Explain each step in simple English before you do it.
</div>

It gives you SQL. Copy it → Supabase → **SQL Editor** → paste → **Run**.

<div class="vibe-check" markdown>
<div class="vc-title">📊 Go look</div>

**Table Editor** in the sidebar. Your tables are there. Empty, waiting.

That's a real Postgres database. The same kind big companies run.
</div>

## Test it

Use your app. Add something.

Now refresh Supabase's Table Editor.

<p class="beat">There's your data. On the internet. Not on your laptop.</p>

Open your app on your phone. Same data. That's the whole point.

!!! tip "Broken? Normal."
    Copy the red error → paste to the AI → *"this is my Supabase error, what's wrong?"*

    Same move as Day 2. Always the same move.

<div class="nav-next" markdown>
[Put it on the internet →](03-ship-it.md){ .md-button .md-button--primary }
</div>
