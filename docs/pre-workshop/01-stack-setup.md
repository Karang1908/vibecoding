---
title: "0.1 The Vibecoding Stack Setup"
description: "Pre-workshop setup: installing Antigravity 2.0, Antigravity IDE, Antigravity CLI, Node.js LTS, and Git."
---

# 0.1 The Vibecoding Stack Setup

<div class="session-banner">
  <div class="banner-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
    <strong class="banner-title">Prerequisites: Environment Preparation Before Day 1</strong>
  </div>
  Before Day 1 begins, every participant must have their workstation fully configured. Getting compilers, runtimes, editors, and version control ready in advance ensures we spend 100% of workshop time building and steering rather than debugging local installations.
</div>

## The Core Development Stack

The vibecoding workflow combines modern AI agent capabilities with standard software engineering runtimes. Here is the minimum viable stack required on your laptop:

<div class="stack-map" aria-label="Your workstation contains Antigravity 2.0, Antigravity IDE, Antigravity CLI, Node.js, Git, and cloud accounts">
  <div class="stack-map__root">Your workstation</div>
  <div class="stack-map__items">
    <div class="stack-map__item"><strong>Antigravity 2.0</strong><span>Agent command center</span></div>
    <div class="stack-map__item"><strong>Antigravity IDE</strong><span>Code workspace</span></div>
    <div class="stack-map__item"><strong>Antigravity CLI</strong><span>Terminal agent</span></div>
    <div class="stack-map__item"><strong>Node.js LTS</strong><span>JavaScript runtime</span></div>
    <div class="stack-map__item"><strong>Git + cloud</strong><span>Save, deploy, store data</span></div>
  </div>
</div>

---

## 1. Install the Antigravity suite

We will teach all three Antigravity surfaces. They use the same agent harness and settings, but each one has a different job.

=== "Antigravity 2.0"
    Your agent command center. Use it to create projects, launch agents, monitor work, and review artifacts.

    1. Open the official [Antigravity download page](https://antigravity.google/download).
    2. Download **Antigravity 2.0** for your operating system.
    3. Install it, open it, and sign in with your Google account.
    4. Create a project that points to a folder on your laptop.

=== "Antigravity IDE"
    Your code workspace. Use it when you want to see the files, terminal, agent panel, and every proposed change.

    1. In Antigravity 2.0, select **Install IDE**. You can also use the [Antigravity download page](https://antigravity.google/download).
    2. Install the standalone **Antigravity IDE** and sign in with the same Google account.
    3. Choose **Review-driven development** during setup.
    4. Open the same project folder you created in Antigravity 2.0.

=== "Antigravity CLI"
    Your terminal agent. It is the fastest way to ask Antigravity to inspect files, run commands, and make changes without leaving the terminal.

    1. Install **Antigravity CLI** from the [official download page](https://antigravity.google/download).
    2. Open a fresh terminal in your project folder.
    3. Confirm the command is available:

       ```bash
       agy --help
       ```


---

## 2. JavaScript Runtime: Node.js LTS (v20+)

Node.js provides the local JavaScript runtime and package manager (`npm` / `npx`) required to scaffold web apps, run local dev servers, and execute modern frameworks like Vite or Next.js.

### Step 1: Download & Install
Download the **LTS (Long Term Support)** installer from [nodejs.org](https://nodejs.org/):
- **Windows**: Download the `.msi` installer and follow the wizard. Ensure "Add to PATH" is checked.
- **macOS**: Download the `.pkg` installer or install via Homebrew:
  ```bash
  brew install node@20
  ```
- **Linux (Ubuntu/Debian)**:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

### Step 2: Verify Installation
Open a fresh terminal window (PowerShell, Bash, or Zsh) and run:

```bash
node -v
# Expected: v20.x.x or higher

npm -v
# Expected: 10.x.x or higher

npx -v
# Expected: 10.x.x or higher
```

> [!TIP]
> If `node -v` returns `'node' is not recognized` on Windows, restart your terminal or computer so the updated system `PATH` environment variable takes effect.

---

## 3. Version Control: Git CLI

Git is the fundamental safety net for AI-assisted engineering. When an AI generates an unhelpful change or introduces a regression, Git allows you to revert instantly with `git checkout .` or `git restore`.

### Step 1: Install Git
- **Windows**: Download and install [Git for Windows](https://git-scm.com/download/win). Select default options and ensure Git is added to the system PATH.
- **macOS**: Run `xcode-select --install` in Terminal, or install via Homebrew (`brew install git`).
- **Linux**: Run `sudo apt update && sudo apt install git -y`.

### Step 2: Configure Global Identity
Set up your name and email so your commits are attributed properly on GitHub:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Verify Installation
```bash
git --version
# Expected: git version 2.40+ or similar
```

---

## 4. Verification Health Check

Run this single-line verification script in your terminal to confirm that your workstation is 100% prepared:

=== "macOS & Linux (Bash/Zsh)"
    ```bash
    echo "=== Stack Verification ===" && \
    git --version && \
    node -v && \
    npm -v && \
    echo "Environment verified successfully!"
    ```

=== "Windows (PowerShell)"
    ```powershell
    Write-Host "=== Stack Verification ==="
    git --version
    node -v
    npm -v
    Write-Host "Environment verified successfully!" -ForegroundColor Green
    ```

Once all three commands output version numbers without errors, you are ready to proceed to [0.2 Account Provisioning](02-account-provisioning.md).
