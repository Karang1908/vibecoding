---
title: "1.5 When It Breaks"
description: "The 6-step debugging loop, the traffic-light system, and the grand finale report card."
hide:
  - toc
---

# When It Breaks: The Debugging Loop

Click through all 10 scenarios in your game right now.

What happens on question 10? 

The screen probably freezes, turns completely blank, or throws a bright red error in your console.

<p class="beat">Something broke. Perfect. That is literally the best part of the workshop.</p>

<p class="beat">Software isn't about never breaking. It's about knowing what to do when it does.</p>

---

## 1. Our Debugging Loop

When an error strikes, beginners panic and spam: *"Fix it! It's broken!"*

That turns your project into an unpredictable black box. Instead, follow our 6-step loop:

<div class="process-flow" markdown>
<span class="flow-item">BUILD</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">TEST</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item" style="background: var(--gdg-red-container); color: #ba1a1a;">BREAK</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">INVESTIGATE</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">FIX</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item highlight">TEST</span>
</div>

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-magnify:

**Step 1: Investigate**

Don't change anything yet. Ask the AI: *"Explain what went wrong in plain English."*
</div>

<div class="icon-card" markdown>
:material-lightbulb-on:

**Step 2: Propose**

Ask: *"Propose a solution and tell me which files you will modify."*
</div>

<div class="icon-card" markdown>
:material-wrench:

**Step 3: Apply & Verify**

Apply the code change, re-test in the browser, and verify that the fix actually worked.
</div>

</div>

<div class="vibe-check" markdown>
<div class="vc-title">The Big Rule of Debugging</div>

**AI isn't only your builder. It is also your debugging partner.**  
Never let it blindly rewrite files until you understand *why* it broke.
</div>

---

## 2. When Should I Let AI Do Something? (The Traffic Light System)

You don't need to understand every line of technical code to stay safe. Just use this traffic light system:

<div class="traffic-grid" markdown>

<div class="traffic-col traffic-green" markdown>
#### 🟢 Usually Fine
<div class="traffic-subtitle">Let AI Run</div>

- Creating UI components and cards
- Styling, colors, fonts, and responsiveness
- Refactoring and cleaning up messy code
- Fixing simple typos and visual bugs
- Creating boilerplate files
- Writing repetitive mock data
</div>

<div class="traffic-col traffic-yellow" markdown>
#### 🟡 Pause & Ask
<div class="traffic-subtitle">"What are you changing, and why?"</div>

- Installing unfamiliar npm packages
- Deleting or renaming existing files
- Changing folder structure or architecture
- Modifying authentication or routing
- Altering database schema or table names
- Modifying environment configs (`package.json`, `tsconfig.json`)
</div>

<div class="traffic-col traffic-red" markdown>
#### 🔴 Stop & Understand
<div class="traffic-subtitle">Never Proceed Blindly</div>

- **Passwords, secrets, or API keys**
- **Permissions and access control rules**
- **Production databases and live cloud systems**
- **Sensitive user data**
- **Destructive terminal commands (`rm -rf`, dropping tables)**
- **Financial or payment settings**
</div>

</div>

> **AI can execute instructions faster than you can understand them. Slow down when the consequences are high.**

---

## 3. Build The Final Report Card

Why did the game break on question 10? 

Because `currentIndex` reached `10`, but our scenarios array only has items indexed `0` through `9`. The code tried to read an item that doesn't exist!

Let's use our debugging loop to propose and apply the clean fix: render a **Final Report Card** when all scenarios are completed.

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> COPY PROMPT', 2000)"><span class="copy-icon"></span> COPY PROMPT</button>

Update `src/app/page.tsx` to handle the end of the game gracefully:

1. In the component render logic, check if `currentIndex >= scenarios.length` or if any stat (`money`, `time`, `sanity`) hits `0`.
2. When the game ends, hide the scenario card and choices, and instead render a celebratory 'Report Card' screen.
3. The Report Card must show:
   - Final scores for Money, Time, and Sanity.
   - A funny 'Survival Rank' calculated based on their lowest stat:
     - If Money is lowest: "Financially Ruined Scholar"
     - If Time is lowest: "Chronically Tardy Sleeper"
     - If Sanity is lowest: "Caffeine-Powered Phantom"
     - If all stats > 50: "Dean's List Legend"
   - A prominent 'Play Again' button that resets `money: 50`, `time: 50`, `sanity: 50`, and `currentIndex: 0`.
4. Ensure the layout is responsive, polished with Tailwind CSS, and matches our existing dark-mode design.
</div>

---

## 4. Test The Full Loop

Go back to your browser:

1. Click through scenarios 1 through 10.
2. Watch the game seamlessly switch to the **Final Report Card** screen upon completion.
3. Check your Survival Rank.
4. Click **Play Again**—the stats reset to 50 and Scenario #1 reappears!

<div class="stat-row" markdown>
<div class="big-stat" markdown="span"><span class="num">10</span><span class="cap">scenarios</span></div>
<div class="big-stat" markdown="span"><span class="num">1</span><span class="cap">complete loop</span></div>
<div class="big-stat" markdown="span"><span class="num">0</span><span class="cap">bugs remaining</span></div>
</div>

You just took an idea from your head, broke it into pieces, prompted an AI agent to build it, investigated and fixed a runtime bug, and created a complete, playable game.

Now let's make sure you never lose this code.

<div class="nav-next" markdown>
[Save It Forever with Git & GitHub →](06-save-it.md){ .md-button .md-button--primary }
</div>
