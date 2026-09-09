# HANDOFF — Vibecoding 101 docs

Everything needed to pick this up cold. Read this first.

---

## 1. What this is

A 3-day beginner workshop for **GDG BITS Pilani Dubai Campus**. Audience: CS students, many of them first-years who have never opened a terminal.

**Schedule (fixed — everything is built around this):**

| Day | Date | Slot | Raw | Teaching time |
|:--|:--|:--|:--|:--|
| Day 1 | Thu 10 Sep | Lab 335, 6th hr, 12:05–12:55 | 50 min | **~45 min** |
| Day 2 | Mon 14 Sep | Lab 336, 5th+6th, 11:10–12:55 | 105 min | **~100 min** |
| Day 3 | Thu 17 Sep | Lab 335, 6th hr, 12:05–12:55 | 50 min | **~45 min** |

Minus ~5 min each side for people settling in. Day 2 is a **double period** — the only session long enough to build anything real. There is a **4-day gap** between Day 2 and Day 3 (the overnight/weekend challenge window).

---

## 2. Why the docs were rewritten

The original docs (still on disk, see §4) were ~17,000 words — roughly **85 minutes of pure reading** for a workshop with ~190 minutes of total teaching time. Day 1 alone was 7,339 words and opened with compilers, ELF binaries, the JVM, AST indexers, LSP, Byte-Pair Encoding, self-attention and softmax — before the student had made anything.

The material was well written. It was a **reference handbook labelled as a workshop**. Nobody had checked it against a clock.

**The rewrite is ~4,400 words across all three days.** Same arc, 4x less reading.

### The core principle

> **Docs are not the lesson. You are.**

If it is something the presenter will *say out loud*, it does not go in the doc. Only what students need to **look at, type, or take home** goes on the page.

---

## 3. The voice — how to write more of this

This is the important section. Match it or the docs stop working.

### Rules

1. **Short sentences. Often one line.** A paragraph is three lines max.
2. **Second person, always.** "You type this", never "the student should".
3. **Contractions.** "You'll", "it's", "don't". Write how you talk.
4. **Casual register.** "rubbish", "brilliant", "genuinely".
5. **Never use a technical word without immediately cashing it out.** Not *"leverage the AST indexer"* — instead *"it reads your code before answering"*.
6. **Jargon appears once, as a reveal, AFTER the concept lands.** Teach *"the smallest version that still works"* then *"pros call this an MVP"*. Never the other way round.
7. **Name the feeling before they feel it.** "This is going to break." "Mine looks different from theirs — yes, that's correct." Pre-empting panic is most of the job.
8. **Never say "simply", "just", "obviously", "as you know".** These make a stuck beginner feel stupid.
9. **Every page ends with something on screen** — a result, a URL, a file, a screenshot. If a section ends on theory, it does not belong in the workshop.

### The metaphor spine (do not break this)

> **The AI is an intern who has read the entire internet — and has zero memory.**

Introduced Day 1 page 1. It then does real work all three days:

| Where | How it pays off |
|:--|:--|
| Day 1 | Why "make it good" fails and detail wins |
| Day 1 | Why it never tells you your idea is bad |
| Day 2 | **Why `AGENTS.md` exists** — giving the amnesiac a notebook |
| Day 2 | Why it hallucinates — guessing what an answer *looks like* |
| Day 3 | Skills = a notebook that works on *every* project |

Any new page should reach for this metaphor before inventing a new one.

### Other recurring lines

- *"You're not learning to code. You got promoted. You're management now."*
- *"That's it. That's the skill."*
- *"Nobody did it wrong. There is no wrong here."*
- *"Talking to it **is** the debugging."*

---

## 4. Where the files are

```
docs/
  day-1-new/   5 pages  ~1,450 words   <- LIVE (Day 1)
  day-2-new/   6 pages  ~1,700 words   <- LIVE (Day 2)
  day-3-new/   5 pages  ~1,250 words   <- LIVE (Day 3)

  day-1/ day-2/ day-3/                 <- ORIGINALS. On disk, off the nav.
  pre-workshop/ post-workshop/         <- untouched, original style

  stylesheets/story.css                <- all story-mode styling
  overrides/main.html                  <- adds .story class to *-new pages only
```

**Nothing was deleted.** The original day-1/2/3 folders are intact and simply not in the nav. They are the source for the post-workshop handbook (see §7).

---

## 5. How story mode works

`docs/overrides/main.html` adds `class="story"` to `<html>` on any page whose path contains `day-1-new/`, `day-2-new/` or `day-3-new/`. Every rule in `story.css` is scoped under `.story`, so **the rest of the site is completely unaffected**.

Adding a new story page = put it in one of those folders. Nothing else to configure.

### The components

Written as HTML in markdown. Always add `markdown` to the wrapper div so markdown inside still renders.

| Component | What it's for |
|:--|:--|
| `<p class="beat">` | Oversized punchline line. The story beat. |
| `.stat-row` + `.big-stat` | Big gradient numbers (`0 lines memorised`, `11 minutes`) |
| `.versus` + `.vs-bad` / `.vs-good` | Two-column comparison, red vs green |
| `.icon-row` + `.icon-card` | Emoji + 3 words + one line. Replaces bullet prose. |
| `.timeline` | Run-of-show for the session |
| `.step` + `data-step="N"` | Numbered setup cards |
| `.prompt-slab` | The thing they copy. Dashed gradient border. |
| `.vibe-check` | Green "did it work / are you okay" gut check |

Design decisions baked into `story.css`: 42rem column, 1.85 line-height, **TOC hidden**, horizontal rules removed (whitespace separates instead), permalink anchors hidden on card headings.

### Gotcha — `pymdownx.keys`

Keyboard keys use `++ctrl+l++` syntax, which needs `pymdownx.keys` in `mkdocs.yml`. It was missing initially and rendered as literal `++ctrl+l++` on the page. **It is now enabled.** If keys ever show as raw `++...++`, that extension got removed.

---

## 6. The three days

### Day 1 — Thu 10 Sep, ~45 min · "Your First App"

Live demo happens **off-doc** (presenters show their own vibecoded apps). Docs start immediately after, at "what is vibecoding".

| Page | Min | Content |
|:--|:--|:--|
| 1.1 What Even Is Vibecoding? | — | Two paths comparison, the intern metaphor |
| 1.2 So What Actually Is AI? | 10 | Autocomplete turned up to 1000. No maths. |
| 1.3 Set Up Your Workshop | 15 | Editor -> Node -> Git -> GitHub |
| 1.4 Your Turn | 10 | **They type our prompt, they see it build** |
| 1.5 What Do You Want To Build? | 5 | Google Form -> winner built on Day 2 |

Ends at: **a working webpage on their own laptop.**

### Day 2 — Mon 14 Sep, ~100 min · "Build Your Idea"

Built around the **winning submission from the Day 1 form**. See §8 for what to swap.

| Page | Min | Content |
|:--|:--|:--|
| 2.1 Today We Build Your Idea | 10 | Reveal the winner. Page vs app. |
| 2.2 The Memory Trick | 15 | **`AGENTS.md`** — the signature move |
| 2.3 Break It Into Pieces | 15 | PRD/MVP, taught as "one piece at a time" |
| 2.4 Build It | 30 | The ask -> accept -> look -> next loop |
| 2.5 When It Breaks | 15 | Read the red, hallucinations, `git checkout .` |
| 2.6 Save It Forever | 15 | GitHub push |

Ends at: **working on localhost, pushed to GitHub.**

### Day 3 — Thu 17 Sep, ~45 min · "Make It Real"

| Page | Min | Content |
|:--|:--|:--|
| 3.1 Show & Tell | 5 | Students demo what they built over 4 days |
| 3.2 A Real Database | 15 | Supabase signup, AI writes the SQL |
| 3.3 Put It On The Internet | 12 | Vercel -> live URL |
| 3.4 Don't Get Hacked | 5 | `.env`, `.gitignore`, Vercel env vars |
| 3.5 One Last Trick | 8 | **Skills reveal** + roadmap |

Ends at: **full-stack — frontend + database + deployed + secured.**

---

## 7. Decisions made, and why

Do not silently reverse these. Each one was argued.

**`.env` is Day 3, not Day 2.** On Day 2 the app is plain HTML in a browser — it *cannot read a `.env` file*. Day 2 uses `localStorage` for the key plus one hard rule ("never put the key in the code"). Day 3 then says *"remember that rule? here's the proper way"* — and it lands because they already felt the danger.

**Skills are the Day 3 closer, not Day 2.** On Day 2 they have exactly one project, so "reusable across projects" is meaningless. By Day 3 they have built, debugged and deployed — *now* "package your workflow and reuse it forever" hits. The reveal: **"You've been writing skills all along. You just called it a markdown file."**

**Supabase stays; schema theory goes.** Signup is ~5 min and gives real full-stack. Schema design and Row Level Security are cut to the roadmap — the AI writes the SQL.

**Day 2 is idea-agnostic.** It teaches the *method*, not a specific app, because the winning submission might not be AI-based at all. API-key setup is a **collapsible side-quest**, not the spine.

**MVP/PRD kept, renamed.** Genuinely the highest-value idea in the original docs. But a fresher hears "Product Requirements Document" and shuts down. Taught as *"don't ask for the whole app"*, with the real term revealed after.

**Theory kept only if it changes what they type.** Three ideas survived, all inside one optional drop-down: next-token prediction, it does not truly understand, context = what it can see. BPE / attention / softmax / punch-card history / AST / LSP / MCP all move to the handbook.

---

## 8. TODO before the workshop

- [ ] **Google Form link** — `docs/day-1-new/05-what-next.md` still has the placeholder `YOUR_FORM_LINK_HERE`.
- [ ] **Test the Day 1 prompt** (`docs/day-1-new/04-your-turn.md`) on a free-tier Cursor account. Confirm the output looks good on a projector.
- [ ] **After submissions close — swap the Day 2 placeholders.** Search for `[THE APP]`, `[DESCRIBE THE APP IN 2 LINES]`, `[PASTE YOUR URL]`, `[PASTE THE RED TEXT]`. The structure holds; only the specifics change.
- [ ] **Decide the Gemini key path** for AI-based ideas: pre-workshop homework, or a shared demo key. 40 people signing up live is the single biggest derail risk.
- [ ] **Post-workshop handbook** — fold the cut material (transformers, AST/LSP, MCP, RLS, agents, React/Next) into `post-workshop/`. The originals in `day-1/`, `day-2/`, `day-3/` are the source. Nothing needs rewriting, just relocating.

---

## 9. Running it

```bash
python -m mkdocs serve              # http://127.0.0.1:8000
python -m mkdocs build --strict     # must pass with zero warnings
```

`--strict` currently passes. It catches broken internal links, the most common breakage when renaming pages.

Deploy is Vercel, config in `vercel.json`, build command `mkdocs build`.
