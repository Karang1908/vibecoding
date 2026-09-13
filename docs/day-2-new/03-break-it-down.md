---
title: "1.3 Break It Into Pieces"
description: "Why prompting isn't magic, how to inspect code without reading 300 lines, and creating the data layer."
hide:
  - toc
---

# Break It Into Pieces: The Data Layer

You have your workshop set up. You have `PRD.md` and `AGENT.md` in place.

Now comes the big question: **How do we actually start building?**

<p class="beat">We don't ask the AI to build the entire application in one giant prompt.</p>

<p class="beat">We break the application down into pieces: Data first, then Interface, then Logic.</p>

---

## 1. Prompting Is Not Magic

Many beginners think great vibe coders have memorized secret prompt incantations. 

They haven't. They just know how to communicate clearly.

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### :material-close-circle: Bad Prompt (Vague & Fragile)
*"Make me a game."*  
or  
*"Make me a leaderboard."*

**What happens:**  
The AI guesses your game rules, imports 12 random libraries, breaks existing styles, and rewires your project into a confusing mess.
</div>
<div class="vs-good" markdown>
#### :material-check-circle: Architect Prompt (Clear Context & Boundaries)
*"Add 10 university survival scenarios to our project in `src/data/scenarios.ts`. Follow the guidelines in `AGENT.md`. Use mock data with TypeScript interfaces. Don't install any new packages. First inspect the project structure and show me the data shape."*

**What happens:**  
The AI does exactly what you asked, adheres to your stack, and doesn't touch anything else.
</div>
</div>

<div class="vibe-check" markdown>
<div class="vc-title">The Big Takeaway</div>

The lesson isn't *"memorize this prompt."*  
**The lesson is: Give the AI enough context and constraints to make a good decision.**
</div>

---

## 2. Don't Read 300 Lines Of Code

When the AI creates or edits a file, it might output 200 or 300 lines of code.

Here is the truth: **We are not expecting you to understand or audit every single semicolon.**

Professional developers don't read every line of code their tools generate either. Instead, learn to answer these **5 orientation questions**:

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-briefcase-check:

**1. Responsibility**

What is this piece responsible for?
</div>

<div class="icon-card" markdown>
:material-arrow-right-bold-box:

**2. Inputs**

What information does it receive?
</div>

<div class="icon-card" markdown>
:material-package-down:

**3. Outputs**

What does it produce?
</div>

<div class="icon-card" markdown>
:material-map-marker:

**4. Location**

Where is it used in the app?
</div>

<div class="icon-card" markdown>
:material-alert-circle:

**5. Failure**

What happens if this piece fails?
</div>

</div>

If you can answer those 5 questions, you are 100% in control of your project, even as a beginner.

---

## 3. The Mental Model: Build The Data First

<div class="process-flow" markdown>
<span class="flow-item">Interface</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">Logic</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item highlight">Data Layer</span>
</div>

Before we build buttons and screens, we need something for the screen to show. We will create our **Data Layer** in a separate file: `src/data/scenarios.ts`.

Let's give the AI a precise prompt:

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> COPY PROMPT', 2000)"><span class="copy-icon"></span> COPY PROMPT</button>

Following the guidelines in `AGENT.md`, create a new data file at `src/data/scenarios.ts`.

Export a strongly-typed TypeScript array containing 10 realistic university-life scenarios for 'Survive Uni'.

Each scenario object must have:
- `id`: unique number (1 to 10)
- `description`: a short, relatable college scenario (e.g. 8AM lecture vs sleep, unexpected quiz, broken laptop)
- `choices`: an array of 2 choice objects. Each choice must have a `label` and an `impact` object containing integer adjustments for `money`, `time`, and `sanity` (e.g. money: -15, time: +10, sanity: -5).

Include the TypeScript `Scenario` and `Choice` interfaces at the top of the file. Do not touch any other files yet.
</div>

---

## 4. Inspect The Data (Answer the 5 Questions)

Open `src/data/scenarios.ts` in your IDE.

You should see something like this:

```typescript
export interface Choice {
  label: string;
  impact: {
    money: number;
    time: number;
    sanity: number;
  };
}

export interface Scenario {
  id: number;
  description: string;
  choices: Choice[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    description: "Your alarm didn't go off. 8:00 AM lecture starts in 10 minutes.",
    choices: [
      { label: "Sprint across campus", impact: { money: 0, time: -10, sanity: -10 } },
      { label: "Go back to sleep", impact: { money: 0, time: +20, sanity: +15 } }
    ]
  },
  // ... 9 more scenarios
];
```

Now ask your 5 questions:
- **Responsibility:** Holds the game's scenarios and numerical stat changes.
- **Inputs:** None (it's static data).
- **Outputs:** An array of 10 scenario objects.
- **Location:** Will be imported by our main page (`src/app/page.tsx`).
- **Failure:** If this file is missing or corrupted, the game has no questions to show.

<div class="vibe-check" markdown>
<div class="vc-title">Data Layer Verified</div>

Does `src/data/scenarios.ts` exist? Does it contain 10 scenarios? Does each choice adjust money, time, and sanity?

If yes, your Data layer is rock solid. Now we give it an Interface.
</div>

<div class="nav-next" markdown>
[Build It: Interface & State →](04-build-it.md){ .md-button .md-button--primary }
</div>
