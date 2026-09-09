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
<div class="icon-card"><span class="ic">✨</span><strong>Editor</strong><span>Where the magic happens</span></div>
<div class="icon-card"><span class="ic">⚙️</span><strong>Node.js</strong><span>Makes apps run</span></div>
<div class="icon-card"><span class="ic">⏪</span><strong>Git</strong><span>Undo, forever</span></div>
<div class="icon-card"><span class="ic">☁️</span><strong>GitHub</strong><span>Cloud save</span></div>
</div>

<div class="step" data-step="1" markdown>

### The AI editor

=== "Cursor (pick this)"

    **[cursor.com](https://www.cursor.com/)** → Download → install → sign in with Google.

=== "VS Code"

    **[code.visualstudio.com](https://code.visualstudio.com/)** → ++ctrl+shift+x++ → search **Cline** → Install.

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
<div class="vc-title">✅ Vibe check</div>

**Two lines with numbers?** Done. Sit back.

**`not recognized`?** Close the editor, reopen. Fixes it 80% of the time. Still broken → hand up.
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
