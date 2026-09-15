---
title: "1.1 Today We Build Your Idea"
description: "The Big Idea, the Mental Model, and understanding the map."
hide:
  - toc
---

# Today We Build Your Idea

<p class="beat">We are here to learn how to build software with AI without turning the project into a black box.</p>

<div class="stat-row" markdown>
<div class="big-stat" markdown="span"><span class="num">1</span><span class="cap">real game</span></div>
<div class="big-stat" markdown="span"><span class="num">3</span><span class="cap">core layers</span></div>
<div class="big-stat" markdown="span"><span class="num">100%</span><span class="cap">in control</span></div>
</div>

## The Big Idea

By the end of today, you won't just have an app running on your computer—you will actually understand:

- **What you are building** and why each piece exists.
- **What the major pieces of an app are** (Interface, Logic, Data).
- **What the tools around the code are doing** (IDE, Node, Git, Next.js).
- **How to communicate with an AI coding agent** like a lead architect.
- **How to know when to let AI work** and when to stop and question it.
- **What to do when something breaks** instead of staring blankly at an error.

---

## 1. Idea & Context

> **"This is the app we're going to build today: Survive Uni."**

A playable university survival simulation game. You start with 50 Money, 50 Time, and 50 Sanity. Each turn, a real-life campus scenario appears with two choices. Every choice impacts your stats. Survive all 10 scenarios to see your final Survival Rank and Report Card.

<div class="vibe-check" markdown>
<div class="vc-title">The Map vs The Roads</div>

You do not need to know how to write every single line of this manually. **AI can help us build it.** 

But if we don't understand what the pieces are, the moment something breaks we are completely dependent on the AI. 

**Today's goal is to understand the map, not memorize the roads.**
</div>

---

## 2. The Mental Model

Every modern application on Earth—from Spotify to Instagram to our game—can be broken down into three fundamental pieces:

<div class="tri-grid" markdown>

<div class="tri-blue" markdown>
#### :material-eye: 1. Interface
**What the user sees and interacts with.**

The buttons, stat bars, text on screen, colors, and layouts.

*(Later, this becomes the **Frontend**)*
</div>

<div class="tri-yellow" markdown>
#### :material-cog: 2. Logic
**What the application actually does.**

Calculations, rules, and actions. When you click "Sleep in," subtract 10 Time and add 10 Sanity.

*(Later, this becomes the **Backend**)*
</div>

<div class="tri-green" markdown>
#### :material-database: 3. Data
**The information we need to remember.**

The list of 10 scenarios, your current player stats, and high scores.

*(Later, this becomes the **Database**)*
</div>

</div>

Whenever you look at any application, ask yourself these three simple questions:

1. **What does the user see?** (Interface)
2. **What is the application doing?** (Logic)
3. **What information does it need to remember?** (Data)

Just keep this map in your head. Don't go deeper yet.

---

## 3. Tools Should Have A Reason

Never install or use a tool just because someone told you to. Every tool in software exists to solve a very specific pain point.

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-laptop:

**Node & npm**

*"Our JavaScript project needs tools and packages to run."*
</div>

<div class="icon-card" markdown>
:material-layers-triple:

**Next.js**

*"We need structure for our application so we don't build from scratch."*
</div>

<div class="icon-card" markdown>
:material-source-branch:

**Git**

*"We need history so we can restore previous versions when things break."*
</div>

<div class="icon-card" markdown>
:material-cloud:

**GitHub**

*"We need somewhere to store and share our project online."*
</div>

<div class="icon-card" markdown>
:material-database:

**Supabase**

*"We need a safe place on the internet to store application data forever."*
</div>

<div class="icon-card" markdown>
:material-robot:

**AI Agent**

*"We want a tireless teammate that can write and edit code across the project."*
</div>

</div>

---

## 4. Why Are We Using Next.js?

We could technically build a tiny website with just a single raw HTML, CSS, and JavaScript file.

**But our goal isn't just a static webpage. We are building an application.**

As an application grows, managing how pages link together, how components render, and how data flows gets messy very quickly. Instead of manually inventing solutions to problems solved a decade ago, we use **Next.js** as the foundation.

> **A framework gives us a structured, battle-tested way to build a real application.**

---

## 5. The Commands You'll Actually Need

You do not need to memorize terminal commands or command-line theory. You only need two commands today:

<div class="step" data-step="1" markdown>
### `npm install`
Downloads and installs all the external packages and building blocks your project needs to run. Run this once when setting up.
</div>

<div class="step" data-step="2" markdown>
### `npm run dev`
Starts your local development server. It takes your code and runs a live version inside your browser at `http://localhost:3000` so you can test as you build.
</div>

---

## 6. Today's Journey

Here is how we will go from a blank folder to a working game today:

<ul class="timeline">
<li><span class="t">Step 1</span><span><strong>The Plan:</strong> Set up project workspace and mental model</span></li>
<li><span class="t">Step 2</span><span><strong>The Instruction Manual:</strong> Create <code>PRD.md</code> and <code>AGENT.md</code></span></li>
<li><span class="t">Step 3</span><span><strong>The Data Layer:</strong> Generate <code>scenarios.ts</code> without reading 300 lines of code</span></li>
<li><span class="t">Step 4</span><span><strong>Build It:</strong> Assemble the Interface & React State</span></li>
<li><span class="t">Step 5</span><span><strong>When It Breaks:</strong> Debug with our 6-step loop & traffic light system</span></li>
<li><span class="t">Step 6</span><span><strong>Save It:</strong> Push your project to Git and GitHub</span></li>
</ul>

You will leave today thinking:

> **"I can build something real."**  
> and  
> **"I know roughly what I'm looking at."**

<div class="nav-next" markdown>
[The Memory Trick & Workspace →](02-the-memory-trick.md){ .md-button .md-button--primary }
</div>
