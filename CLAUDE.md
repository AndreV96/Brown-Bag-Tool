# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static HTML/CSS/JS prototype for tracking Brown Bag presentations — who's presenting, on what, and when — plus a browsable archive of past sessions with their recordings, transcripts, and shared resources. There is no build system, package manager, or test suite; it's plain files opened directly in a browser.

## Running it

Open `index.html` directly in a browser (e.g. `open index.html` on macOS). There is no dev server, bundler, linter, or test command — none exist in this repo.

## Architecture

Three files, no framework:

- **`data.js`** — defines `window.SESSIONS`, a single global array of session objects. This is the only data source; both HTML pages load it via `<script src="data.js">` and read from `window.SESSIONS` directly (no fetch, no backend).
- **`index.html`** — the dashboard. Layout is a sidebar (`.app-shell` > `.sidebar` + `.content`) with the content column holding the header and `<main>`. Inline JS filters `window.SESSIONS` at render time into two views based on the current date (via `new Date()`, not a hardcoded value):
  - **Upcoming Sessions** — sessions with `date >= today`, rendered as clickable cards.
  - **Past Presentations** — sessions with `date < today`, rendered as a denser row/table list (visually distinct on purpose — upcoming and past serve different purposes, so they should not look alike).
- **`session.html`** — detail page for a single session, read via the `?id=` query param and looked up against `window.SESSIONS`. Renders the same detail layout for any session, but conditionally adds a "Recording & Resources" block only when the session data has `recordingUrl`, `transcriptUrl`, or a non-empty `resources` array.

Every session object has a stable `id` — this is the sole join key between `index.html` and `session.html` (`session.html?id=<id>`). When adding a session, always give it a unique `id`.

### Session data shape (`data.js`)

Core fields on every session: `id`, `title`, `date` (`YYYY-MM-DD` string), `time`, `location`, `topic`, `presenter`, `background`, `returning` (bool), `description`.

Past-session-only fields (currently populated only on sessions dated before today): `recordingUrl`, `transcriptUrl`, `resources` (array of `{ label, url }`). These are what `session.html` uses to decide whether to show the Recording & Resources section — a session isn't "past" or "upcoming" by any explicit flag, only by comparing its `date` to today.

### Preview/placeholder convention

This prototype deliberately ships with unfinished features left visible rather than hidden, so stakeholders can see the intended shape of the product. Anything not yet wired up follows the same pattern — reuse it rather than inventing a new one:

- Mark it visually with the `.badge-preview` badge or a `.preview-note` block.
- On interaction, `alert()` a short explanation that it's a preview/placeholder (see the Schedule Presentation modal, the sidebar's placeholder nav buttons, and the resource links on `session.html` for examples).
- Resource/recording/transcript links currently point at `#` and are non-functional by design until real files exist.

### Styling

Each HTML file duplicates its own `<style>` block with the same set of CSS custom properties in `:root` (`--bg`, `--surface`, `--border`, `--text`, `--text-muted`, `--accent`, `--accent-soft`, `--badge-new*`), overridden in a `@media (prefers-color-scheme: dark)` block for dark mode. There's no shared stylesheet — if you change the palette, update it in both `index.html` and `session.html`.

## Git

- Commit messages: one sentence, no body, imperative mood (e.g. "Add README with project description").

## Future features (from README)

- Schedule a presentation directly from the app (currently a non-functional preview modal)
- Individual past-presentation resources beyond the current mockup (decks, repos, recordings), eventually linked to the Confluence page where they're actually kept
