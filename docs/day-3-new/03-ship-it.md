---
title: "3.3 Put It On The Internet"
description: "A real URL. In about two minutes."
hide:
  - toc
---

# Put it on the internet

This is the bit everyone thinks is hard.

<p class="beat">It takes about two minutes.</p>

## How it works

Your code is already on GitHub. We just point a hosting service at it.

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">💻</span><strong>You push</strong><span>git push</span></div>
<div class="icon-card"><span class="ic">📦</span><strong>GitHub gets it</strong><span>Automatically</span></div>
<div class="icon-card"><span class="ic">🌍</span><strong>Vercel builds it</strong><span>Automatically</span></div>
<div class="icon-card"><span class="ic">🔗</span><strong>Live URL</strong><span>~15 seconds</span></div>
</div>

Set it up once. After that, `git push` **is** publishing.

## Do it

<div class="step" data-step="1" markdown>

### Sign up

**[vercel.com/new](https://vercel.com/new)** → **Continue with GitHub**.

</div>

<div class="step" data-step="2" markdown>

### Import your repo

Find your project in the list → **Import**.

</div>

<div class="step" data-step="3" markdown>

### Deploy

Don't change any settings. Just hit **Deploy**.

Watch the logs scroll. Feel fancy.

</div>

<div class="vibe-check" markdown>
<div class="vc-title">🎉 You're live</div>

`https://your-app.vercel.app`

Open it on your phone. Send it to someone. That's a real website that anyone on Earth can visit.

**You made that.**
</div>

## From now on

```bash
git add .
git commit -m "new feature"
git push
```

Fifteen seconds later, the live site has updated.

<p class="beat">No uploading. No FTP. No server. Just push.</p>

!!! warning "Site loads but nothing works?"
    Almost always your keys — the live site doesn't have them yet.

    That's the next page.

<div class="nav-next" markdown>
[Don't get hacked →](04-dont-get-hacked.md){ .md-button .md-button--primary }
</div>
