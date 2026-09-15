---
title: "1.2 The Memory Trick"
description: "Why we use an IDE, what all these files mean, and how to give AI persistent instructions."
hide:
  - toc
---

# The Memory Trick & Your Workspace

Before we write a single line of code, we need two things:
1. A proper workshop to work in.
2. A notebook so our AI doesn't forget who we are.

<p class="beat">You wouldn't build furniture in an empty hallway. You need a workbench.</p>

---

## 1. Why Are We Using An IDE?

You could technically write code in Windows Notepad or TextEdit. 

**But when building a real application, we need a complete workspace.**

An **IDE** (Integrated Development Environment—like VS Code or Cursor) is our workshop for building software. Inside one window, it gives us:

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-folder-open:

**Project Structure**

Browse folders and files instantly
</div>

<div class="icon-card" markdown>
:material-code-tags:

**Code Editor**

Syntax highlighting and error checking
</div>

<div class="icon-card" markdown>
:material-console:

**Terminal**

Run commands like `npm run dev`
</div>

<div class="icon-card" markdown>
:material-source-branch:

**Git Integration**

Track changes and save history
</div>

<div class="icon-card" markdown>
:material-robot:

**AI Agents**

Inspect files, make edits, and pair program
</div>

<div class="icon-card" markdown>
:material-bug:

**Debugging Tools**

Inspect variables and find issues
</div>

</div>

Think of your IDE as the carpenter's workbench where all your tools are within arm's reach.

---

## 2. What Are All These Files?

When you open a modern Next.js project, you will see a bunch of files. 

**Do not be intimidated.** 

> A project is just a collection of files, and different files have different jobs.

You don't need to memorize the syntax inside them. You just need to know their job title:

| File Type | Role | What It Does |
| :--- | :--- | :--- |
| **`.tsx` / `.jsx`** | **Application / UI Code** | Defines the buttons, cards, text, and components the user sees on screen. |
| **`.css`** | **Styling** | Controls fonts, colors, margins, spacing, and mobile responsiveness. |
| **`.ts` / `.js`** | **Logic** | Performs calculations, manages state, and processes user actions. |
| **`.md`** | **Documentation** | Plain text files containing instructions for humans (and AI). |
| **`package.json`** | **Tool Configuration** | The ingredient list of packages and tools our project requires. |

<div class="vibe-check" markdown>
<div class="vc-title">The First Big Lesson</div>

**Never be scared by the number of files in a project.**  
Learn to identify what *role* a file has instead of trying to read it all at once.
</div>

---

## 3. What Vibe Coding Actually Is

**Vibe coding** is using AI to turn ideas into working software through conversation.

<div class="process-flow" markdown>
<span class="flow-item">Idea</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">Prompt</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">AI Builds</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item">You Test</span>
<span class="flow-arrow">:material-arrow-right:</span>
<span class="flow-item highlight">You Improve</span>
</div>

### The Huge Mistake: Treating AI Like Magic

AI is capable of writing incredible software, but **it cannot read your mind**. 

If you say *"make me a good game,"* the AI has to guess what you want. It might build a space shooter with 10 broken packages when you wanted a text simulation.

To vibe code like an architect, your prompt must give the AI four things:

<div class="icon-row" markdown>

<div class="icon-card" markdown>
:material-map-legend:

**1. Context**

What are we building? What stack are we using?
</div>

<div class="icon-card" markdown>
:material-flag-checkered:

**2. Goal**

What specific thing should happen right now?
</div>

<div class="icon-card" markdown>
:material-hand-back-left:

**3. Constraints**

What should it **NOT** do or change?
</div>

<div class="icon-card" markdown>
:material-check-decagram:

**4. Verification**

How will we know it actually worked?
</div>

</div>

---

## 4. Tokens & AI Cost: Be Specific

AI does not think in full thoughts; it processes information as **tokens** (chunks of words and characters).

Your prompt, the files in your project, and the AI's answer all consume tokens. When you give vague feedback, you burn tokens, waste time, and confuse the AI.

<div class="versus" markdown>
<div class="vs-bad" markdown>
#### :material-close-circle: Bad Feedback (Token Waste)
- *"No, not like that."*
- *"Try again."*
- *"Make it look better."*
*(Forces the AI to repeatedly guess what you don't like).*
</div>
<div class="vs-good" markdown>
#### :material-check-circle: Specific Feedback (Precise)
- *"The card is too large and pushes the button below the screen."*
- *"Reduce the card height and keep the button visible on mobile without changing the colors."*
*(Solves the exact issue in one shot).*
</div>
</div>

---

## 5. Give The Project An Instruction Manual

An AI agent is like an intern who has read every programming book on the internet, but has amnesia the second you switch windows. 

If we don't give it written rules, it will invent its own. That's why we create two special markdown files:

<div class="versus" markdown>
<div class="vs-good" markdown>
#### :material-clipboard-text: `PRD.md` (Product Requirements Document)
**Answers: What are we building?**
- What the product is
- Who it's for
- Core features and rules
- What is explicitly out of scope
</div>
<div class="vs-good" markdown>
#### :material-shield-account: `AGENT.md` (AI Operating Guidelines)
**Answers: How should the AI behave?**
- Project conventions & tech stack
- Things the AI must NOT touch or install
- Architecture rules (e.g. mobile-first Tailwind)
- How to test and verify code
</div>
</div>

These files provide **persistent context**. Every time the AI runs a command or writes code, it reads these manuals first.

---

## 6. Create Your Instruction Manual

Let's generate these two files right now in our project root.

<div class="prompt-slab" markdown>
<button class="copy-btn" title="Copy to clipboard" onclick="const p = this.closest('.prompt-slab').cloneNode(true); p.querySelector('.copy-btn').remove(); navigator.clipboard.writeText(p.textContent.trim()); this.innerHTML = '<span class=\'copy-icon\'></span> COPIED!'; setTimeout(() => this.innerHTML = '<span class=\'copy-icon\'></span> COPY', 2000)"><span class="copy-icon"></span> COPY</button>

I am building 'Survive Uni', a resource-management web game using Next.js (App Router), TypeScript, and Tailwind CSS. 

Please generate two markdown files in the project root:

1. `PRD.md`: Outline the core game idea, target audience (university students), 10 survival scenarios, state tracking for Money, Time, and Sanity, and a final Report Card win/loss screen. Specify that complex animations and backend authentication are OUT OF SCOPE.
2. `AGENT.md`: Define strict coding guidelines for this project. Enforce functional React components, strict TypeScript types, clean mobile-first Tailwind CSS styling, and forbid installing any new npm packages without asking me first.
</div>

Inspect the files the AI creates. Open `PRD.md` and `AGENT.md`. Notice how clean and structured they are. 

You just gave your AI intern a permanent notebook. Now let's feed it some data.

<div class="nav-next" markdown>
[Break It Into Pieces →](03-break-it-down.md){ .md-button .md-button--primary }
</div>
