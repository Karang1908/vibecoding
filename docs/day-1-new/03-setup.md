---
title: "1.3 Set Up Your Workshop"
description: "Four things to install. Fifteen minutes."
hide:
  - toc
---

# Set up your workshop

<p class="beat">15 boring minutes now. 20 saved hours later.</p>

Stuck at any point? **Hand up.** Half the room will hit the same error.

<div class="icon-row" markdown>
<div class="icon-card"><span class="ic">✨</span><strong>Antigravity</strong><span>2.0 + IDE + CLI</span></div>
<div class="icon-card"><span class="ic">⚙️</span><strong>Node.js</strong><span>Makes apps run</span></div>
<div class="icon-card"><span class="ic">⏪</span><strong>Git</strong><span>Undo, forever</span></div>
<div class="icon-card"><span class="ic">☁️</span><strong>GitHub</strong><span>Cloud save</span></div>
</div>

<div class="step" data-step="1" markdown>

### Google Antigravity

Install all three from **[antigravity.google/download](https://antigravity.google/download)**:

1. **Antigravity 2.0** → install → sign in with Google → create your project.
2. **Antigravity IDE** → click **Install IDE** inside Antigravity 2.0 → open the same project folder.
3. **Antigravity CLI** → install → open a terminal and run:

```bash
agy --help
```

**Three tools, one Antigravity agent.** We will use all of them.

</div>

<div class="step" data-step="2" markdown>

### Node.js

**[nodejs.org](https://nodejs.org/)** → big green **LTS** button → Next, Next, Next.

!!! warning "Windows"
    Leave **"Add to PATH"** ticked.

</div>

<div class="step" data-step="3" markdown>

### Git

Your undo button. Not undo-one-thing — undo-back-to-any-moment.

=== "Windows"

    **[git-scm.com/download/win](https://git-scm.com/download/win)** → Next, Next, Next.

=== "Mac"

    ```bash
    xcode-select --install
    ```

</div>

<div class="step" data-step="4" markdown>

### GitHub

**[github.com/signup](https://github.com/signup)** — probably already have one. Just check you can log in.

</div>

## Did it work?

Open the terminal: ++ctrl+grave++ (or ++cmd+grave++ on Mac).

```bash
git --version
node --version
```

<div class="vibe-check" markdown>
<div class="vc-title">Vibe check</div>

**Two lines with numbers?** Done. Sit back.

**`not recognized`?** Close the terminal and Antigravity IDE, then reopen both. Still broken → hand up.
</div>

## Make your project folder

```bash
cd ~/Desktop
mkdir my-first-app
cd my-first-app
```

| | |
|:--|:--|
| `cd` | go somewhere |
| `mkdir` | make a folder |

You now know two terminal commands. Two more than this morning.

Then: **File → Open Folder** → `my-first-app`

<div class="nav-next" markdown>
[Now the fun part →](04-your-turn.md){ .md-button .md-button--primary }
</div>
