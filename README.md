# Brown Bag Tool

A tool for organizing Brown Bag sessions — informal lunch-time presentations where someone shares something they know. It's made up of a web app (**Brown Bags Tracker**) for browsing and reference, a Slack integration for scheduling and management, and a shared API backend.

## Tech Stack

Decisions made so far for the final product (the current prototype in this repo is plain HTML/CSS/JS — see [Prototype](#prototype)). This list grows as more stack decisions are made.

- **Frontend** — TypeScript + React
- **Backend** — Python (FastAPI)
- **Slack integration** — Bolt for Python
- **Database** — PostgreSQL

## Web App — Brown Bags Tracker

The browsing/reference experience: view upcoming sessions, browse past ones, and read documentation about the Brown Bag format. Scheduling and management happen in Slack (see below), not here.

### Main Features

#### Upcoming Sessions

Shows what's coming up so people know what to attend next.

- Title, date, presenter, and presenter background for each session
- A badge indicating whether the presenter is returning or presenting for the first time
- Sessions sorted chronologically, filtered to today and later

#### Past Presentations

A browsable archive of previous Brown Bags, styled as a compact list distinct from Upcoming Sessions since it serves a different purpose (reference vs. what's next).

- Title, presenter, and date for each past session
- At-a-glance indicators for what's available: recording, transcript, and number of shared resources

#### Documentation

Explains what a Brown Bag is and how to run one.

- "What is a Brown Bag?" overview
- Format & characteristics: duration, format, frequency, audience, and recording policy
- Step-by-step guidance on how to prepare a session

### Pages

#### Dashboard (`index.html`)

The landing page, organized into three tabs.

- **Upcoming Sessions** tab — the upcoming sessions list
- **Past Presentations** tab — the past presentations list
- **Documentation** tab — the "What is a Brown Bag?" overview, Format & Characteristics grid, and How to Prepare step-by-step list

#### Session Detail Page (`session.html`)

A full page for a single session, shared by both upcoming and past sessions, reached by clicking a session on the Dashboard.

- Topic, date, time, and location
- Full session description
- Presenter name, background, and returning/first-time badge
- For past sessions with recordings, transcripts, or resources: a "Recording & Resources" section linking to each

### Navigation

The Dashboard's three tabs (Upcoming Sessions, Past Presentations, Documentation) is the way to navigate through the different sections. The Session Detail page is reached by clicking a session card and has a link back to the Dashboard.

### Prototype

An early HTML prototype lives in this repo — `index.html` and `session.html` — sharing session data via `data.js`. Open `index.html` in a browser to get started.

### Future Features

- Link real recording, transcript, and resource files to their actual storage location (e.g. Confluence), replacing the current preview links

## Slack Integration (Planned)

Scheduling is moving out of the web app and into Slack. The web app stays the browsing/reference experience — upcoming and past sessions, session details, and linked resources. Slack owns all create/cancel/reschedule actions.

- **Notifications** — posts to a dedicated Slack channel announcing each upcoming Brown Bag, plus automatic reminders 2 hours and 15 minutes before the presentation.
- **Scheduling** — a slash command opens a native Slack modal (title, description, dropdown of currently available dates); the whole interaction happens inside Slack.
- **Rescheduling** — a presenter can change the date of their own upcoming Brown Bag via the same modal-based flow, limited to still-available dates.
- **Cancellation** — a presenter can cancel their own upcoming Brown Bag; admins can cancel/manage anyone's.
- **Q&A** — a slash command lists upcoming/past Brown Bags as plain structured output (no AI); a freeform natural-language version using an LLM may come later.

Architecture notes:

- Requires a real backend with persistent storage (DB) — Slack interactions need a server to read/write data, so this moves off the current static frontend.
- Uses a Slack app with `chat:write`, `commands`, and interactivity (Block Kit modals/buttons) scopes.
- The available-dates dropdown is built dynamically from the DB on each modal open, so double-booking isn't possible.
- Scheduled reminders use Slack's `chat.scheduleMessage` API (or an internal scheduler) tied to each session's date.
- Every Slack request is signed; the backend verifies Slack's signing secret before trusting the included user ID.
- A users table maps Slack user ID → role (member/admin). Presenters manage only their own sessions; admins manage any session. Admin status is assigned manually, not derived from Slack workspace admin status.
- No Slack API costs expected at this scale — messaging, slash commands, interactivity, and scheduled messages are free on Slack's platform. Cost would only come from backend hosting and, if freeform Q&A is added, LLM API usage.
- Requires workspace admin approval to install, since this targets the company Slack workspace.

## API

### Final Product

- A Python (FastAPI) backend exposing a REST API for Brown Bag sessions:
  - `GET /presentations` — list all
  - `GET /presentations/{id}` — get one
  - `POST /presentations` — create
  - `PATCH /presentations/{id}` — edit
  - `DELETE /presentations/{id}` — delete
- Backed by a PostgreSQL database.
- This is the single backend shared by all clients: the web app (browsing/reference), the Slack integration (Bolt for Python — scheduling, rescheduling, cancellation, Q&A), and direct admin access for managing past presentations without going through Slack.
- Write actions (create/edit/delete) require authorization. For Slack-driven requests, the requester's Slack user ID (verified via Slack's signing secret) is checked against roles in a users table (member/admin). For direct admin access to the API, a separate admin authentication mechanism is used.
- Admins can create/edit/delete any presentation, including adding past presentations retroactively; presenters can only manage their own via Slack.

### POC

- A minimal FastAPI app implementing the 5 CRUD endpoints above.
- Uses in-memory storage (a Python list/dict) instead of a real database — data resets on restart, this is intentional for the POC stage.
- No Slack integration wired up yet — the POC only proves out the API surface itself.
- Write endpoints are gated behind a simple placeholder admin check (e.g. a hardcoded header/token), not a full auth system.
- Testable via FastAPI's built-in interactive docs (Swagger UI at `/docs`) or a tool like curl/Postman — no separate UI needed for this stage.

## Confluence Integration

Past presentation resources (recordings, decks, transcripts) live on Confluence, under child pages of a "Recordings" parent page. This section covers how that content gets into our DB, and what happens when it can't.

### Data Sync

- **Drawn from Confluence** — the list of past Brown Bag pages (child pages of "Recordings"), each page's title (parsed into session number + title), its attachments (recording, deck, transcript — filename, type, upload date, download URL), and freeform resource links pasted in the page body (best-effort extraction, less reliable than attachments).
- **Stored only in our DB** — internal id, date, presenter background, topic category, returning-presenter flag, status (upcoming/past/canceled), Slack user IDs, and member/admin roles. Upcoming sessions live only here until a Confluence page exists.
- **Stored only in Confluence** — the actual file bytes (recording, deck, transcript) and Confluence's native page content/comments/history. Files are never duplicated into our own storage — our DB only ever holds a pointer/link to them.
- **Duplicated/cached in our DB** — page title, resource link pointers (URL, filename, type — not the file itself), and the Confluence page ID/URL as a back-reference, so the dashboard/detail pages don't need a live Confluence call on every request. Only the sync job writes these cached fields, to avoid drift.

### Local Upload Job

A triggerable script automating what's currently done manually (creating a Confluence page per session and dragging in files):

- Walks a parent local folder containing one subfolder per Brown Bag (recording, deck, transcript already inside each subfolder).
- For each subfolder, creates a new child page under "Recordings", titled from the folder name.
- Uploads every file in that subfolder via Confluence's attachment API.
- Skips folders that already have a corresponding Confluence page, so re-running it after adding new sessions doesn't create duplicates.

### Sync Trigger

- A Confluence webhook is registered for page and attachment created/updated/removed events.
- The handler checks whether the changed page is a descendant of "Recordings"; if so, it re-syncs just that page's data (not a full re-sync).
- Since webhook delivery isn't guaranteed, a periodic full sync job (e.g. nightly) runs as a fallback safety net in case an event is missed.

### Fallback Strategy ("Plan B")

If part of the integration can't be reliably automated, that piece is managed directly through our own backend/API/DB instead of Confluence:

- **Partial fallback** — a single unparseable field (e.g. an unrecognized recording embed, or an inconsistently formatted freeform link) is entered/managed manually via our own API for just that session, while the rest keeps syncing normally.
- **Full fallback** — if the integration isn't feasible at all (e.g. permissions, API limitations), past presentations and their resources are managed entirely through our own backend/admin API instead. Confluence is the preferred source of truth, not an assumed one — our own API/DB is the backstop.
