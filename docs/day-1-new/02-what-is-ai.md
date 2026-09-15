---
title: "0.2 So What Actually Is AI?"
description: "The fun version. No maths."
hide:
  - toc
---

# So what *is* this thing?

You've used AI five times today already.

<div class="icon-row" markdown>
<div class="icon-card" markdown="span"><span class="ic">:material-lock-open:</span><strong>Face unlock</strong><span>AI</span></div>
<div class="icon-card" markdown="span"><span class="ic">:material-cellphone:</span><strong>That reel it knew you'd like</strong><span>AI</span></div>
<div class="icon-card" markdown="span"><span class="ic">:material-map:</span><strong>Maps dodging traffic</strong><span>AI</span></div>
<div class="icon-card" markdown="span"><span class="ic">⌨️</span><strong>Keyboard predicting words</strong><span>← this one's the secret</span></div>
</div>

<p class="beat">It's that autocomplete. Turned up to a thousand.</p>

## How it works

It read most of what humans have ever written, and learned exactly one skill:

> Guessing what comes next.

*"Roses are red, violets are..."* → it knows.

Not because it understands roses. Because it's seen that ending a million times.

Now scale up. You type *"a webpage with a dark header and three cards"* and it thinks: **I've seen ten million webpages. I know what comes next.**

## So it doesn't actually understand?

Correct. And that explains everything weird it'll ever do:

<div class="icon-row" markdown>
<div class="icon-card" markdown="span"><span class="ic">:material-emoticon-sad:</span><strong>Confidently wrong</strong><span>Guessing what a right answer looks like</span></div>
<div class="icon-card" markdown="span"><span class="ic">:material-magnify:</span><strong>Detail wins</strong><span>Less for it to guess at</span></div>
<div class="icon-card" markdown="span"><span class="ic">:material-emoticon-cry:</span><strong>Never argues</strong><span>Helpful replies don't say "bad idea"</span></div>
</div>

## Good at / bad at

<div class="versus" markdown>
<div class="vs-good" markdown>
#### :material-check: It's brilliant at

- Writing code fast
- Making things look decent
- Explaining simply
- Fixing what you point at
</div>
<div class="vs-bad" markdown>
#### :material-close: It's rubbish at

- Knowing what *you* want
- Telling you your idea is bad
- Remembering anything
- Knowing when it's wrong
</div>
</div>

Look at that right column. Every weakness there is a thing **you're** good at.

<p class="beat">It's not replacing you. It's hands. You're the brain.</p>

??? note "Curious how it *really* works? (optional)"
    It's a **transformer** — a neural network from a 2017 Google paper.

    Your words become **tokens** → each token becomes numbers → the model scores how every token relates to every other → it picks the most likely next token.

    Repeat a few thousand times. That's your app.

    You don't need this today. Someone always asks.

<div class="nav-next" markdown>
[Set up my machine →](03-setup.md){ .md-button .md-button--primary }
</div>
