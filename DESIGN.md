---
name: "Vibecoding 101"
description: "A Google Codelabs-style workshop path for first-time app builders."
colors:
  google-action-blue: "#0b57d0"
  google-action-blue-hover: "#0842a0"
  blue-container: "#d3e3fd"
  blue-container-soft: "#ecf3fe"
  green-success: "#137333"
  green-container: "#c4eed0"
  red-error: "#b3261e"
  red-container: "#f9dedc"
  yellow-caution: "#f9ab00"
  yellow-container: "#fef7e0"
  ink: "#1f1f1f"
  ink-secondary: "#444746"
  outline: "#c4c7c5"
  outline-soft: "#e1e3e1"
  surface: "#ffffff"
  surface-low: "#f8fafd"
  surface-mid: "#f0f4f9"
  footer: "#202124"
typography:
  display:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "clamp(1.85rem, 4vw, 2.55rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "Google Sans Flex, Google Sans, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.35
  code:
    fontFamily: "SFMono-Regular, Consolas, monospace"
    fontSize: "0.67rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1.25rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.google-action-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.15rem"
    height: "2.4rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.google-action-blue}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.15rem"
    height: "2.4rem"
  navigation-active:
    backgroundColor: "{colors.blue-container}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.42rem 0.65rem"
  prompt-container:
    backgroundColor: "{colors.blue-container-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1.45rem 1.35rem 1.2rem"
  success-container:
    backgroundColor: "{colors.green-container}"
    textColor: "{colors.green-success}"
    rounded: "{rounded.lg}"
    padding: "1.15rem 1.25rem 1.15rem 3.6rem"
---

# Design System: Vibecoding 101

## Overview

**Creative North Star: "The Codelab Path"**

Vibecoding 101 uses the clarity of a Google Codelab with the identity of a campus GDG event. White space, a strong blue action color, restrained tonal containers, and a visible lesson rail make the site feel familiar before a beginner understands the technical material.

The interface stays quiet around the lesson. Branding establishes trust in the header and footer, while the content area uses short sections, plain language, and purposeful progress patterns.

**Key Characteristics:**

- Google Sans Flex throughout the learning interface.
- White and cool-neutral surfaces with one dominant action blue.
- A persistent lesson hierarchy on desktop and a compact drawer on mobile.
- Step rails, prompt containers, and completion states tied to real workshop actions.
- Flat surfaces separated by tone and fine outlines.

## Colors

The palette follows Material color roles: blue carries action and navigation, green confirms progress, red explains risk, yellow signals caution, and cool neutrals carry the reading surface.

### Primary

- **Google Action Blue:** Primary buttons, active tabs, links, step markers, and strong lesson statements.
- **Blue Containers:** Selected navigation, prompt surfaces, icon wells, and low-emphasis instructional areas.

### Secondary

- **Workshop Success Green:** Completion checks and successful before/after states.
- **Workshop Error Red:** Unsafe or unsuccessful comparison states.
- **Workshop Caution Yellow:** Warnings and caution labels.

### Neutral

- **Ink:** Headings and primary instructional text.
- **Secondary Ink:** Supporting copy and navigation at rest.
- **Cool Surface:** The canvas, reference containers, and quiet grouping areas.
- **Outline:** Dividers and boundaries that remain visible without adding weight.
- **Footer Charcoal:** The dark brand close at the end of every page.

### Named Rules

**The One Blue Rule.** Google Action Blue is the only general interactive accent; green, red, and yellow communicate status rather than decoration.

**The Tonal Teaching Rule.** A colored container must explain a state or an action: blue for instruction, green for success, red for risk, and yellow for caution.

## Typography

**Display Font:** Google Sans Flex with Google Sans and Arial fallbacks  
**Body Font:** Google Sans Flex with Google Sans and Arial fallbacks  
**Label/Mono Font:** SFMono-Regular with Consolas and monospace fallbacks

**Character:** The type system is friendly, compact, and technical without feeling institutional. Strong weight changes establish hierarchy; body copy remains small enough for a documentation interface and open enough for projection.

### Hierarchy

- **Display** (600, responsive 1.85–2.55rem, 1.08): Page promises and lesson titles, limited to a short balanced line length.
- **Headline** (600, responsive 1.3–1.65rem, 1.18): Major lesson transitions.
- **Title** (600, 1.05rem, 1.28): Step and component headings.
- **Body** (400, 0.8rem, 1.68): Instructions and explanation within a reading width of about 49–54rem.
- **Label** (600, 0.6–0.72rem): Navigation, chips, time markers, and prompt labels.

### Named Rules

**The Projector Test.** Every page must preserve clear weight and color contrast when projected, while browser zoom and narrow screens reduce line length before reducing comprehension.

## Layout

The shell is left aligned inside a fluid gutter that ranges from 1rem to 2rem and a 96rem maximum width. Desktop lesson pages use a compact navigation rail beside a 49–54rem reading column. The overview removes the redundant sidebar and aligns its content with the header and footer shell.

At widths below approximately 720px, comparison panels stack, three-part statistics become rows, completion states move their icon above the copy, and action buttons can expand to the available width. The Material drawer replaces desktop navigation before content becomes compressed. Relative units keep the same reflow behavior under browser zoom.

**The Shared Edge Rule.** Header identity, overview content, and footer identity begin at the same fluid shell gutter.

## Elevation & Depth

The system is flat by default. Tonal surfaces, one-pixel outlines, and spacing create depth. A small ambient shadow appears only when the sticky header separates from scrolled content and when a primary button is hovered.

### Shadow Vocabulary

- **Scrolled Header** (`0 1px 3px rgb(60 64 67 / 0.16)`): Separates sticky navigation from moving content.
- **Primary Action Hover** (`0 1px 2px rgb(60 64 67 / 0.3)`): A brief interactive response.

**The Flat-at-Rest Rule.** Reading containers remain flat; shadow indicates a real layer or state change.

## Shapes

Small and medium containers use gently curved corners. Large instructional and state containers use a broader 1.25rem curve, while buttons and time markers use full pills. Fine outlines clarify structure. Circular markers belong only to the lesson rail and icon controls.

## Components

### Buttons

- **Shape:** Full pill with a 2.4rem minimum height.
- **Primary:** Google Action Blue with white text and compact horizontal padding.
- **Secondary:** White with an outline and blue text.
- **Hover / Focus:** Blue darkens on hover; keyboard focus uses a visible pale-blue three-pixel outline.

### Chips

- **Style:** Tonal blue, green, red, or yellow fill with matching readable text.
- **State:** Labels describe workshop phase or status and do not act as decoration.

### Cards / Containers

- **Corner Style:** Medium for compact concept cards and large for comparisons, prompts, and completion states.
- **Background:** White at rest; semantic tonal fill when the content has status.
- **Shadow Strategy:** Flat at rest.
- **Border:** One-pixel cool-neutral outline.
- **Internal Padding:** Approximately 1–1.5rem, reduced on narrow screens.

### Navigation

The white header pairs the GDG mark with the workshop title. Desktop tabs use blue text and a three-pixel underline for the current phase. The lesson rail uses a blue tonal active item. Mobile keeps the mark and title visible while moving the lesson tree into the standard drawer.

### Diagrams

Mermaid diagrams use the white learning canvas, pale-blue nodes, Google Action Blue outlines, dark ink labels, and gray connectors. Text and connectors must remain readable in light mode before decorative styling is considered.

### Learning Step

A blue circular number sits on a pale vertical rail beside the instruction. Steps have no card shell, so the content reads as one continuous guided lab.

### Prompt Container

A pale-blue outlined surface separates exact text the student should type. A copy symbol and uppercase blue label identify the action before the prompt.

### Completion State

A green tonal container with a single check symbol confirms a visible outcome and gives the next condition to verify.

## Do's and Don'ts

### Do:

- **Do** use the supplied GDG mark in the header and the supplied horizontal lockup in branded surfaces.
- **Do** keep one obvious next action at the end of each active lesson.
- **Do** use semantic tonal containers only when they improve comprehension.
- **Do** test at desktop, phone, and zoom-equivalent widths.
- **Do** keep lesson copy short enough to scan during a live build.

### Don't:

- **Don't** redraw, stretch, recolor, or place new effects behind the GDG identity.
- **Don't** add decorative Google-color rails or use all four brand colors as competing accents.
- **Don't** turn every section into a floating card or introduce strong shadows at rest.
- **Don't** reintroduce search, repository, social, or footer links unless the information architecture changes.
- **Don't** center the header or footer identity; preserve the shared shell edge.
