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

### Schedule a Presentation (Preview)
A mockup of the future scheduling flow, currently non-functional.
- Form fields for title, date, presenter, presenter background, and returning-presenter checkbox
- Clearly marked as a preview; nothing entered is saved

## Pages

### Dashboard (`index.html`)
The landing page.
- Upcoming Sessions list
- Past Presentations list
- Schedule Presentation button and preview modal
- "Coming Soon" list of future features

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

## Prototype

An early HTML prototype lives in this repo — `index.html`, `session.html`, and `docs.html` — sharing session data via `data.js`. Open `index.html` in a browser to get started.

## Future Features

- Make scheduling functional so new sessions are actually persisted
- Dedicated pages for Upcoming Sessions, Past Presentations, My Presentations, and Settings
- Link real recording, transcript, and resource files to their actual storage location (e.g. Confluence), replacing the current preview links
