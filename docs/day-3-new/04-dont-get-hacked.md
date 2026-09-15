---
title: "2.4 Don't Get Hacked"
description: "Why automated bots scan GitHub 24/7, how environment variables work, and protecting your secrets."
hide:
  - toc
---

# Don't Get Hacked: Secrets & API Keys

Remember our Traffic Light rule from Day 1?

<div class="vibe-check" markdown>
<div class="vc-title">🔴 Stop & Understand</div>

**Never hardcode passwords, secret keys, or API credentials into your code files.**
</div>

<p class="beat">A secret key pasted directly into your code is your house key taped to your front door.</p>

---

## 1. What Actually Happens If You Push A Key?

Beginners often think: *"My GitHub repo is tiny. Nobody knows who I am. Who would find my key?"*

Here is the harsh reality: **Human beings aren't looking for your keys. Automated bots are.**

<div class="stat-row" markdown>
<div class="big-stat" markdown="span"><span class="num">&lt; 90s</span><span class="cap">to detect a leaked key</span></div>
<div class="big-stat" markdown="span"><span class="num">24/7</span><span class="cap">bots scanning GitHub</span></div>
<div class="big-stat" markdown="span"><span class="num">$1,000+</span><span class="cap">bills run up overnight</span></div>
</div>

There are millions of scripts listening to the public GitHub stream every second. The instant a file containing an OpenAI, AWS, or database secret is committed, scrapers grab it and begin running expensive queries on your card.

Students wake up to thousand-dollar invoices every single month because of this.

---

## 2. The 3-Step Defense

Modern web frameworks solve this problem completely using **Environment Variables**.

<div class="step" data-step="1" markdown>
### 1. Store Secrets in `.env.local`
In your project root, create a file named `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```
Your application reads these values through `process.env` instead of hardcoding them into components.
</div>

<div class="step" data-step="2" markdown>
### 2. Guard It with `.gitignore`
Open your `.gitignore` file. Ensure it includes:
```bash
.env
.env.local
.env*.local
node_modules/
```
Now Git will completely ignore `.env.local`. When you run `git add .` and `git push`, your keys **never leave your personal machine**.
</div>

<div class="step" data-step="3" markdown>
### 3. Add Them to Vercel Separately
Because GitHub never sees `.env.local`, Vercel doesn't have your keys yet! That's why your live leaderboard might be blank.
1. Go to your **[Vercel Dashboard](https://vercel.com/)** → select your `survive-uni` project.
2. Click **Settings** → **Environment Variables**.
3. Add:
   - Key: `NEXT_PUBLIC_SUPABASE_URL` | Value: `(your Supabase URL)`
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Value: `(your Supabase anon key)`
4. Click **Save**, then go to **Deployments** → click the three dots on your latest deployment → **Redeploy**.
</div>

Your live website now has full access to the database, but your public GitHub repo is 100% clean and secure!

---

## 3. The Rules of Secret Safety

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### :material-alert: NEVER DO THIS
- Type an API key directly into a `.tsx` or `.ts` file
- Share an API key in a screenshot on Discord or WhatsApp
- Commit a `.env` file to a public repository
- Think *"I'll delete the key from the code in the next commit"*
</div>
<div class="vs-good" markdown>
#### :material-check-decagram: ALWAYS DO THIS
- Store all credentials in `.env.local`
- Check `.gitignore` before every initial commit
- Configure secrets in Vercel / cloud settings
- If you accidentally commit a key: **Immediately revoke and delete the key at the provider!**
</div>
</div>

<div class="vibe-check" markdown>
<div class="vc-title">"I already committed a secret to GitHub! What do I do?"</div>

Deleting the line of code and making a new commit **does not fix the leak**. The secret remains visible forever in your Git commit history.

**The only safe response:**  
Go directly to Supabase (or the API provider), **revoke and delete that key immediately**, and generate a fresh replacement.
</div>

---

## 4. Have Your AI Audit Your Security

Before we wrap up, let's ask our AI coding partner to verify our project security:

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> RUN SECURITY AUDIT', 2000)"><span class="copy-icon"></span> RUN SECURITY AUDIT</button>

Please inspect our repository and perform a quick security audit:
1. Verify that no private API keys, database connection strings, or passwords are hardcoded inside any files in `src/`.
2. Check that `.gitignore` properly includes `.env` and `.env.local`.
3. Confirm that all Supabase references properly use environment variables.
</div>

Your app is live, your database is connected, and your credentials are locked tight. You are now running an authentic, professional setup.

<div class="nav-next" markdown>
[The Full Picture & Beyond →](05-whats-next.md){ .md-button .md-button--primary }
</div>
