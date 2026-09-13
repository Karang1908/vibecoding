---
title: "2.3 Put It On The Internet"
description: "Deploying your Next.js application to Vercel in 2 minutes."
hide:
  - toc
---

# Put It On The Internet: Vercel

Up until this moment, your application has only existed on your computer at `http://localhost:3000`.

If you send that link to your friend on WhatsApp, they will see an error. "Localhost" literally means *"this machine only"*.

<p class="beat">Now, we turn localhost into a real public URL that anyone on Earth can visit.</p>

---

## 1. How Modern Cloud Deployment Works

Deploying a website used to require manually renting a server, configuring Linux command lines, setting up Apache or Nginx, and uploading files over FTP.

Today, modern tools have simplified this down to a single automated pipeline:

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-laptop:

**1. You Push Code**

`git push origin main`
</div>

<div class="icon-card" markdown>
:material-github:

**2. GitHub Receives It**

Stores your latest commits
</div>

<div class="icon-card" markdown>
:material-cloud-sync:

**3. Vercel Builds It**

Runs `npm install` & `npm run build` in the cloud
</div>

<div class="icon-card" markdown>
:material-earth:

**4. Instant Public URL**

Live worldwide in ~30 seconds
</div>

</div>

Once you connect Vercel to your GitHub repository, **every single time you `git push`, your live website updates automatically.**

---

## 2. Deploy To Vercel in 3 Steps

<div class="step" data-step="1" markdown>
### Sign In to Vercel
Go to **[vercel.com/new](https://vercel.com/new)** and choose **Continue with GitHub**.
</div>

<div class="step" data-step="2" markdown>
### Import Your GitHub Repository
1. In the list of repositories, find your **`survive-uni`** project.
2. Click the blue **Import** button next to it.
</div>

<div class="step" data-step="3" markdown>
### Hit Deploy
1. Vercel will automatically detect that you are using **Next.js**.
2. Leave the build settings as default.
3. Click the **Deploy** button.
</div>

Watch the build logs scroll across your screen. Vercel is setting up the cloud containers, compiling your TypeScript, optimizing your Tailwind CSS styles, and packaging your application.

---

## 3. You're Live!

When the confetti shoots across your screen, Vercel will present your live public URL:

<div class="url-banner" markdown>
`https://survive-uni-[yourname].vercel.app`
</div>

<div class="vibe-check" markdown>
<div class="vc-title">Test It On Your Phone Right Now</div>

1. Open your phone's browser.
2. Type in your new `.vercel.app` URL.
3. Play a round of Survive Uni right on your mobile screen!
4. Send the link to a friend or classmate.
</div>

<p class="beat">You built a full-stack game with a database, hosted on global cloud infrastructure.</p>

---

## 4. The Golden Rule of Git & Deployments

From this point forward, whenever you want to update your live app:

```bash
git add .
git commit -m "feat: added new scenario and improved button colors"
git push
```

Within 30 seconds, Vercel sees the push, rebuilds your project, and updates your live URL. No FTP, no server rebooting, no manual uploads.

*(Wait... why is the leaderboard showing an error on the live Vercel site? Because Vercel doesn't have your Supabase keys yet! Let's lock that down safely.)*

<div class="nav-next" markdown>
[Don't Get Hacked: Securing Keys →](04-dont-get-hacked.md){ .md-button .md-button--primary }
</div>
