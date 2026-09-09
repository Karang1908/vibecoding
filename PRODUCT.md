# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Computer science students at BITS Pilani Dubai Campus attending a live, three-day beginner workshop. Many are first-years who have never used a terminal. They read the site on personal laptops and phones while the same pages are projected in a lab.

## Product Purpose

Vibecoding 101 helps a complete beginner move from an idea to a working, database-backed app with a live URL. The site is the workshop's shared visual guide: students use it to see, type, and revisit the exact steps while presenters teach the surrounding lesson aloud.

## Positioning

The material is a build-along story rather than a reference handbook presented as a workshop. Every live lesson moves toward something visible on screen, and the recurring “AI intern with zero memory” metaphor explains prompting, project instructions, hallucinations, and reusable skills.

## Operating Context

- Day 1: Thursday 10 September, approximately 45 teaching minutes.
- Day 2: Monday 14 September, approximately 100 teaching minutes.
- Day 3: Thursday 17 September, approximately 45 teaching minutes.
- The live curriculum is in `docs/day-1-new`, `docs/day-2-new`, and `docs/day-3-new`.
- The original lessons remain on disk as post-workshop reference source but stay outside navigation.

## Capabilities and Constraints

- Built with MkDocs Material and deployed as a static site through Vercel.
- Must work for live projection, desktop reading, mobile reading, and browser zoom.
- Lesson copy and sequencing follow `HANDOFF.md` and should remain concise, second-person, and beginner-safe.
- The navigation must make the current day and next action obvious.
- The site must use supplied brand assets without distorting or redrawing them.

## Brand Commitments

- Product name: Vibecoding 101.
- Organizer: Google Developer Group, BITS Pilani Dubai Campus.
- Visual direction: a credible Google for Developers and Material 3 experience with restrained Google brand colors, clear typography, generous spacing, and familiar documentation patterns.
- Supplied logos are authoritative and live in `/Users/karangarg/Desktop/logos`.
- Voice stays direct, casual, encouraging, and free of unexplained jargon.

## Evidence on Hand

- Workshop structure and editorial rules: `HANDOFF.md`.
- Real workshop copy: `docs/day-1-new`, `docs/day-2-new`, and `docs/day-3-new`.
- Supplied GDG lockups, mark, and favicon: `/Users/karangarg/Desktop/logos`.
- No testimonials, attendance figures, or outcome statistics are supplied; future work must not invent them.

## Product Principles

1. Students should know what to do next within seconds.
2. The page supports the presenter; it does not repeat the spoken lesson.
3. Every section should lead to a result students can see, type, or keep.
4. Technical ideas arrive in plain English before their professional name.
5. Brand polish must improve trust without making the workshop feel formal or intimidating.

## Accessibility & Inclusion

The site must remain readable at common browser zoom levels, preserve keyboard navigation and visible focus, meet WCAG AA contrast for instructional text, and reflow without horizontal scrolling on narrow phones.
