---
title: "2.4 Build It"
description: "One piece at a time. Watch it appear."
hide:
  - toc
---

# Build it

You have a notebook. You have a list.

<p class="beat">Now we just... go down the list.</p>

## The loop

Every single step, all hour, is the same four moves:

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">1️⃣</span><strong>Ask</strong><span>One step from your list</span></div>
<div class="icon-card"><span class="ic">2️⃣</span><strong>Accept</strong><span>Let it write the code</span></div>
<div class="icon-card"><span class="ic">3️⃣</span><strong>Look</strong><span>Refresh. Does it work?</span></div>
<div class="icon-card"><span class="ic">4️⃣</span><strong>Next</strong><span>Only if it worked</span></div>
</div>

That's it. That's the whole hour.

## Start it up

```bash
cd ~/Desktop/my-first-app
```

Right-click `index.html` → **Open with Live Server**

Now your browser updates the second the AI changes anything. Keep it open on half your screen.

<div class="vibe-check" markdown>
<div class="vc-title">👀 Screen setup</div>

**Left half:** your editor and the chat.
**Right half:** the browser.

You want to *see* things appear. Don't skip this — it's half the fun.
</div>

## Step one — the skeleton

<div class="prompt-slab" markdown>
<span class="slab-label">First ask</span>

Build the basic layout for [THE APP] — just the visual structure, no working features yet.

Follow the style rules in AGENTS.md. Keep it in one HTML file. Make it work on mobile.
</div>

Refresh. There's your app. It doesn't *do* anything yet — that's correct.

## Then make it work

Now go down your list. One at a time. Ask in plain English:

```
make the button actually add the task to the list
```
```
save the list so it's still there when I refresh
```
```
add a delete button to each item
```

Refresh after every single one.

!!! tip "The magic words"
    **`remember it after refresh`** — this makes it save your data in the browser.

    Say it in plain English. It knows what you mean.

??? note "Is your app AI-powered? (skip if not)"
    If your idea needs actual AI inside it — a chatbot, a summariser, something that generates text — you need a free key.

    **[aistudio.google.com](https://aistudio.google.com/)** → sign in → **Get API key** → copy it.

    Then ask:

    <div class="prompt-slab" markdown>
    <span class="slab-label">AI apps only</span>

    Connect this app to the free Gemini API.

    Add a settings box where I paste my API key, and save it in the browser — never put the key in the code itself.

    Show a loading indicator while it's thinking, and a friendly error message if something goes wrong.
    </div>

    🚨 **Never type your key directly into the code.** Bots scan GitHub and steal keys within 90 seconds. We'll do this properly on Day 3.

## When you get stuck

Don't fight it. Just describe what you're seeing:

```
the button does nothing when I click it
```
```
it looks broken on my phone
```
```
that's not what I meant — I wanted the list on the left
```

<p class="beat">Talking to it *is* the debugging.</p>

## Keep going

Down the list. One at a time. Refresh, refresh, refresh.

Ahead of everyone? Add something nobody asked for. Make it yours.

<div class="vibe-check" markdown>
<div class="vc-title">🎯 Where you should be</div>

Something on screen that **does a thing** when you click it. Not finished. Not perfect.

Working. That's the bar.
</div>

<div class="nav-next" markdown>
[It's going to break →](05-when-it-breaks.md){ .md-button .md-button--primary }
</div>
