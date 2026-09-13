---
title: "1.3 The Game Data"
description: "Give the UI something to read."
hide:
  - toc
---

# Generate the data

You have the rules. Now you need content.

<p class="beat">We build the data layer so the UI has something to consume.</p>

## One step at a time

We don't ask for the whole game at once. We build the data first. Then the UI. Then the ending.

Right now, we just want the 10 university-life scenarios.

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> ASK FOR THE DATA LAYER', 2000)"><span class="copy-icon"></span> ASK FOR THE DATA LAYER</button>

Following the guidelines in `AGENT.md`, create a file at `src/data/scenarios.ts`. 

Export a strongly-typed TypeScript array containing 10 university-life scenarios. 

Each object must include: an ID, a scenario description, and two choice objects. Each choice must have a label and an impact object containing exact positive or negative integer adjustments for money, time, and sanity. Include the TypeScript interfaces at the top of the file.
</div>

## Look at the code

Open `src/data/scenarios.ts`. 

You'll see a structured array. This is JSON-style data. It looks something like this:

```typescript
{
  id: 1,
  description: "Your alarm didn't go off. 8AM lecture starts in 10 minutes.",
  choices: [
    { label: "Run to class", impact: { money: 0, time: -10, sanity: -5 } },
    { label: "Go back to sleep", impact: { money: 0, time: +20, sanity: +10 } }
  ]
}
```

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-note-edit-outline:

**Scenarios**

The text you read
</div>

<div class="icon-card" markdown>
:material-scale-balance:

**Choices**

What you click
</div>

<div class="icon-card" markdown>
:material-chart-bar:

**Impacts**

How your stats change
</div>

<div class="icon-card" markdown>
:material-shield-check:

**TypeScript**

Keeps the data strict
</div>

</div>

<div class="vibe-check" markdown>
<div class="vc-title">Check the file</div>

Does `src/data/scenarios.ts` exist? Does it have 10 items? Are there impacts for money, time, and sanity?

If yes, your data is ready.
</div>

<div class="nav-next" markdown>
[Build the UI →](04-build-it.md){ .md-button .md-button--primary }
</div>
