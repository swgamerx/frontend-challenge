# 🐞 Syndica Front-end Challenge

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-teal?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.0-yellow?logo=vite)

---

## Overview

Welcome to the **Syndica Front-end Challenge**! This is a small React 18 + TypeScript + Tailwind app simulating a simple Task Manager.

Your goal is to **identify and fix a series of subtle React bugs** that affect the app’s functionality and performance.

---

## 🚀 Your Mission

You have **45 minutes** to:

1. Clone this repo and run the app locally.
2. Find and fix **4-5 bugs** causing incorrect behavior.
3. Ensure the app:
   - Loads and displays tasks correctly without infinite loops.
   - Allows adding new tasks reliably.
   - Toggles task completion state without race conditions.
   - Displays accurate task completion statistics.
4. (Optional) Improve code readability or add comments explaining your fixes.

---

## 🔍 What’s Broken?

This challenge includes several intentionally introduced issues, such as:

- **Missing dependency arrays in `useEffect`**, causing infinite re-fetch loops.
- **Stale closures** in `setTimeout`/`setInterval` or async callbacks leading to outdated state or logs.
- **Broken task stats**: completed task count may appear incorrect after toggling — due to stale derived state that's never recomputed.
- **Implement remove task**: implement remove task functionality
- Potential improper state mutations or side effects.
- Subtle React hooks pitfalls that can trip up even experienced developers.

---

## 🛠 Setup

Make sure you have Node.js (v18+) installed.

```bash
# Clone the repo
git clone <repo-url>
cd syndica-front-end-challenge

# Install dependencies
npm install

# Start development server
npm run dev

Open http://localhost:5173 in your browser to view the app.


## 🧑‍💻 How to Approach

- Familiarize yourself with the codebase.
- Use browser DevTools and React DevTools.
- Look for console warnings/errors.
- Review hooks carefully for dependency and closure issues.
- Test user flows: adding tasks, toggling completion, watching task counts.
- Fix bugs incrementally and verify your fixes.

---

## 💡 Bonus Tips

- Pay attention to state update patterns (prefer functional updates when needed).
- Watch for side effects in hooks — dependency arrays matter!
- Remember closures capture variables at the time of creation.
- Think about race conditions and asynchronous updates.
