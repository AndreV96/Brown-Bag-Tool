# Brown Bags Tracker

A tool used for Brown Bag sessions to keep track of upcoming brown bag presentations, browse past ones, and learn how the format works.

## Main Features

### Upcoming Sessions
Shows what's coming up so people know what to attend next.
- Title, date, presenter, and presenter background for each session
- A badge indicating whether the presenter is returning or presenting for the first time
- Sessions sorted chronologically, filtered to today and later

### Past Presentations
A browsable archive of previous Brown Bags, styled as a compact list distinct from Upcoming Sessions since it serves a different purpose (reference vs. what's next).
- Title, presenter, and date for each past session
- At-a-glance indicators for what's available: recording, transcript, and number of shared resources

### Documentation
Explains what a Brown Bag is and how to run one.
- "What is a Brown Bag?" overview
- Format & characteristics: duration, format, frequency, audience, and recording policy
- Step-by-step guidance on how to prepare a session

## Pages

### Dashboard (`index.html`)
The landing page.
- Upcoming Sessions list
- Past Presentations list

### Session Detail Page (`session.html`)
A full page for a single session, shared by both upcoming and past sessions, reached by clicking a session on the Dashboard.
- Topic, date, time, and location
- Full session description
- Presenter name, background, and returning/first-time badge
- For past sessions with recordings, transcripts, or resources: a "Recording & Resources" section linking to each

### Documentation Page (`docs.html`)
- "What is a Brown Bag?" overview
- Format & Characteristics grid
- How to Prepare step-by-step list

## Navigation

Every page shares the same left sidebar.
- Dashboard and Documentation are live links
- Upcoming Sessions, Past Presentations, My Presentations, and Settings are placeholders reserved for future dedicated pages

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

## Prototype

An early HTML prototype lives in this repo — `index.html`, `session.html`, and `docs.html` — sharing session data via `data.js`. Open `index.html` in a browser to get started.

## Future Features

- Dedicated pages for Upcoming Sessions, Past Presentations, My Presentations, and Settings
- Link real recording, transcript, and resource files to their actual storage location (e.g. Confluence), replacing the current preview links
