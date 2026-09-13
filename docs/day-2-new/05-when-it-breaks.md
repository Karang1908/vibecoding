---
title: "1.5 The Final Report Card"
description: "End the loop. Give them a rank."
hide:
  - toc
---

# The Grand Finale

Right now, after 10 scenarios, the game probably just breaks or goes blank. 

<p class="beat">We need a conditional end-state. The Report Card.</p>

## Add the final logic

When `currentScenarioIndex` reaches 10, we stop showing the game UI and show the results instead.

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> ASK FOR THE ENDING SCREEN', 2000)"><span class="copy-icon"></span> ASK FOR THE ENDING SCREEN</button>

Update `src/app/page.tsx`. 

Add a condition: if `currentScenarioIndex` reaches 10, hide the main game UI and instead render a 'Report Card' component. 

This view should display the player's final Money, Time, and Sanity scores. Based on their lowest stat, calculate and display a funny 'Survival Rank' (e.g., if Money is lowest, rank them 'Financially Ruined Scholar'). 

Add a 'Play Again' button that resets all state to the default values.
</div>

## Play it through

Refresh your browser and click through all 10 scenarios again.

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-trophy:

**The Reveal**

It hides the game, shows the score
</div>

<div class="icon-card" markdown>
:material-emoticon-lol:

**Survival Rank**

Logic based on your lowest stat
</div>

<div class="icon-card" markdown>
:material-refresh:

**Play Again**

Resets state back to 50
</div>

<div class="icon-card" markdown>
:material-fire:

**Finished Game**

You built a complete Next.js app
</div>

</div>

## When things go wrong

Sometimes, the AI writes bad code. You'll see a giant red error on your screen.

Don't panic. You are the engineer now.

1. **Read the red:** The error message usually tells you exactly what line is broken.
2. **Talk to the intern:** Copy the error text and paste it into the chat. 
3. **Say:** *"I got this error when trying to show the Report Card. Fix it."*

<div class="vibe-check" markdown>
<div class="vc-title">The loop is complete</div>

You started with a static page. Now you have a fully functional Next.js application with a core loop, state management, and a conditional win screen.

You built an industry-standard app in under an hour.
</div>

<div class="nav-next" markdown>
[Save it to the cloud →](06-save-it.md){ .md-button .md-button--primary }
</div>
