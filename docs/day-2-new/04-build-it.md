---
title: "1.4 Build It"
description: "Letting AI build while staying in charge, connecting Interface to Logic with React State."
hide:
  - toc
---

# Build It: Interface Meets Logic

Your data is ready in `src/data/scenarios.ts`. 

Now we need an **Interface** so the user can see the scenarios, and **Logic** so the buttons actually do something when clicked.

<p class="beat">We are going to let the AI build the interface, while YOU stay in the driver's seat.</p>

---

## 1. Let AI Build — But Stay In Charge

As the AI starts generating files and writing components, you will see code fly across your screen.

**Do not panic, and do not try to inspect every single line.**

Instead, maintain your role as the project lead. As code is written, keep asking these 5 mental check questions:

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-shield-star:

**1. Responsibility**

*"What is this file or component responsible for?"*
</div>

<div class="icon-card" markdown>
:material-help-circle:

**2. Purpose**

*"Why did we create it instead of adding it to an existing file?"*
</div>

<div class="icon-card" markdown>
:material-swap-horizontal:

**3. Frontend or Backend?**

*"Is this running in the browser (user's screen) or on a server?"*
</div>

<div class="icon-card" markdown>
:material-transit-connection:

**4. Data Flow**

*"What information is moving through here (e.g. stats, clicks)?"*
</div>

<div class="icon-card" markdown>
:material-history:

**5. The Diff**

*"What actually changed compared to the previous version?"*
</div>

</div>

This is how senior architects review code. You don't get lost in curly braces; you maintain the high-level map of the system.

---

## 2. The Magic of React State

In traditional web development, if you changed a number, you had to manually find the HTML element and update it, or reload the entire web page.

In **React and Next.js**, we use **State**. 

> **State is the application's short-term memory.**

When state changes (e.g. Sanity drops from 50 to 40), React instantly re-renders just the stat bar on the screen. Smooth, reactive, and lightning-fast.

For *Survive Uni*, our state will track:
- `money`: starts at 50
- `time`: starts at 50
- `sanity`: starts at 50
- `currentScenarioIndex`: starts at 0 (first question)

---

## 3. Build The Main Game Component

Let's tell the AI to construct `src/app/page.tsx`:

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> COPY PROMPT', 2000)"><span class="copy-icon"></span> COPY PROMPT</button>

Following `AGENT.md`, update `src/app/page.tsx` to build the core game interface for 'Survive Uni'.

Requirements:
1. Use the `'use client'` directive at the very top for React client state.
2. Import `scenarios` from `@/data/scenarios`.
3. Set up React state (`useState`) to track:
   - `money` (number, default: 50)
   - `time` (number, default: 50)
   - `sanity` (number, default: 50)
   - `currentIndex` (number, default: 0)
4. UI Structure:
   - Header with game title: "Survive Uni".
   - Top Stat Bars: 3 distinct visual bars for Money, Time, and Sanity showing both numerical values (e.g. 50/100) and colored progress fills.
   - Current Scenario Card: Displays the description of `scenarios[currentIndex]`.
   - Choice Buttons: 2 large, tap-friendly buttons displaying choice labels and stat preview badges.
5. Interaction Logic:
   - When a choice is clicked, calculate new stats by applying `impact.money`, `impact.time`, `impact.sanity` (clamped between 0 and 100).
   - Increment `currentIndex` by 1 to advance to the next scenario.
6. Styling: Modern, clean, dark-mode inspired design using Tailwind CSS.
</div>

---

## 4. Test It Live in Your Browser

Open your terminal in VS Code (press `++ctrl+tilde++`).

Make sure your development server is running:

```bash
npm run dev
```

Open **`http://localhost:3000`** in your browser.

<div class="vibe-check" markdown>
<div class="vc-title">The First Click</div>

1. Look at the screen. Can you see your Money, Time, and Sanity bars?
2. Read the first scenario.
3. Click one of the choices.
4. **Notice what happened:** Your stats immediately changed, and Scenario #2 appeared! No page refresh required.
</div>

You now have a real application with a functioning **Interface** connected to live **Logic** reading from your **Data layer**.

Now... what happens when we reach scenario 10, or what happens when an error shows up? Let's find out.

<div class="nav-next" markdown>
[When It Breaks & The Debugging Loop →](05-when-it-breaks.md){ .md-button .md-button--primary }
</div>
