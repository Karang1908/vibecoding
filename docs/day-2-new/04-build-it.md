---
title: "1.4 Build the Core Game"
description: "Wire up the state. Make it look good."
hide:
  - toc
---

# Build the UI and State

Data is useless if you can't see it.

<p class="beat">Time to build the main game loop.</p>

## The magic of React State

We need the game to remember your Money, Time, and Sanity. In Next.js, we use **React State**. When state changes, the UI automatically updates. No manual refreshes required.

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> BUILD THE MAIN COMPONENT', 2000)"><span class="copy-icon"></span> BUILD THE MAIN COMPONENT</button>

Create the main game component in `src/app/page.tsx`. 

Implement React state to track the player's current Money (starts at 50), Time (starts at 50), Sanity (starts at 50), and the `currentScenarioIndex` (starts at 0).

Display the current scenario text and the two choices from `scenarios.ts`. Build three visual stat bars at the top of the screen that update when a choice is clicked. When a choice is clicked, apply the stat changes and advance the `currentScenarioIndex` by 1. Ensure the UI is clean, minimalist, and styled with Tailwind.
</div>

## Watch it appear

If you have your development server running, your browser just updated. 

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-battery-high:

**Stat Bars**

Visual feedback at the top
</div>

<div class="icon-card" markdown>
:material-book-open-variant:

**Scenario Text**

Reading from your data file
</div>

<div class="icon-card" markdown>
:material-cursor-pointer:

**Interactive Choices**

Buttons that actually work
</div>

<div class="icon-card" markdown>
:material-brush:

**Tailwind CSS**

Looking clean and modern
</div>

</div>

## Try it out

Click a choice. 

Your stats just changed. The next scenario appeared. You didn't even have to reload the page. That's the power of a React framework.

<div class="vibe-check" markdown>
<div class="vc-title">Is it working?</div>

Can you click through all 10 scenarios? Does your Money, Time, and Sanity go up and down?

If the UI looks broken, talk to the AI. Tell it: *"The stat bars look weird on my screen, fix the Tailwind classes."*
</div>

<div class="nav-next" markdown>
[The Grand Finale →](05-when-it-breaks.md){ .md-button .md-button--primary }
</div>
