---
title: "2.5 When It Breaks"
description: "It will. Here's what to do instead of panicking."
hide:
  - toc
---

# It's going to break

Blank screen. Red text. Button does nothing.

<p class="beat">This is not you failing. This is Tuesday.</p>

Everyone in this room will hit this. Professionals hit this all day. The only difference is they don't panic.

## The two reactions

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### 😱 Panic

- Types *"fix it"*
- Gets a worse version
- Types *"no fix it properly"*
- AI apologises, rewrites everything
- Working stuff is now also broken
</div>
<div class="vs-good" markdown>
#### 😎 Calm

- Reads the red text
- Copies it
- Pastes it to the AI
- Fixed in one go
</div>
</div>

## Rule 1 — read the red

That scary red text isn't an insult. It's the AI's **best clue.**

Find it: right-click the page → **Inspect** → **Console** tab.

Copy the red. Paste it in:

<div class="prompt-slab" markdown>
<span class="slab-label">The magic move</span>

I'm getting this error:

[PASTE THE RED TEXT]

What's causing it and how do we fix it?
</div>

<p class="beat">"Fix it" = mush. The error text = fixed.</p>

## Rule 2 — it makes things up

Sometimes the AI invents things that don't exist. Confidently.

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">👻</span><strong>Fake packages</strong><span>Tells you to install something imaginary</span></div>
<div class="icon-card"><span class="ic">🪄</span><strong>Fake functions</strong><span>Calls code that was never written</span></div>
<div class="icon-card"><span class="ic">📞</span><strong>Fake links</strong><span>Invents web addresses</span></div>
</div>

It's called **hallucinating**. Remember why: it's guessing what an answer *looks like*. Sometimes the shape is right and the facts are wrong.

Just tell it:

```
that doesn't exist — do it with plain HTML and JavaScript instead
```

## Rule 3 — save before you experiment

This is the one that saves you.

When something **works**, freeze it:

```bash
git add .
git commit -m "list works"
```

Now you have a checkpoint. Try anything you like.

Ruined it?

```bash
git checkout .
```

<p class="beat">Everything goes back to when it worked. Like it never happened.</p>

!!! tip "Do this constantly"
    Every time something works — commit. Takes three seconds.

    Ten commits an hour is normal. Pros do it more.

## Rule 4 — restart the conversation

Stuck in a loop? AI apologising over and over, making it worse?

**Close the chat. Open a new one.**

It's got itself confused. Fresh chat, fresh start — and it still has `AGENTS.md`, so it hasn't lost the project.

<div class="vibe-check" markdown>
<div class="vc-title">🧰 Your toolkit</div>

**Red text** → copy it, paste it, ask
**Says something weird** → "that doesn't exist, use plain HTML"
**Made it worse** → `git checkout .`
**Stuck in a loop** → new chat
</div>

## The real lesson

You're not fixing code. You're **describing a problem to someone who can fix it.**

<p class="beat">The words are the whole job.</p>

<div class="nav-next" markdown>
[Save it forever →](06-save-it.md){ .md-button .md-button--primary }
</div>
