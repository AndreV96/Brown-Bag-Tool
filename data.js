// Shared Brown Bag session data used by both the dashboard (index.html)
// and the session detail page (session.html). Each session has a stable
// `id` used to link between the two pages via ?id=... in the URL.
window.SESSIONS = [
  {
    id: "rag-in-practice",
    title: "Retrieval-Augmented Generation in Practice",
    date: "2026-07-22",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "AI & Machine Learning",
    presenter: "Alex Chen",
    background: "Senior Engineer, has worked on search infra for 6 years",
    returning: true,
    description: "A hands-on look at how retrieval-augmented generation works in real products. We'll cover chunking strategies, embedding choices, and the trade-offs between latency and answer quality, with examples pulled from systems we run today.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Slide deck", url: "#" },
      { label: "Sample notebook", url: "#" }
    ]
  },
  {
    id: "effective-code-reviews",
    title: "Effective Code Reviews",
    date: "2026-06-10",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Developer Experience",
    presenter: "Jordan Blake",
    background: "Engineering Manager, has led review culture initiatives",
    returning: true,
    description: "What separates a review that catches real problems from one that just nitpicks style. Jordan shares a practical framework for reviewing pull requests, giving feedback that lands, and keeping review turnaround fast without lowering the bar.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Review checklist", url: "#" }
    ]
  },
  {
    id: "intro-to-kubernetes",
    title: "Intro to Kubernetes for Beginners",
    date: "2026-07-01",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Infrastructure",
    presenter: "Elena Vasquez",
    background: "Platform Engineer, first Brown Bag talk",
    returning: false,
    description: "A gentle introduction to Kubernetes concepts — pods, deployments, and services — for engineers who've only worked with simpler deploy setups. Elena builds up from first principles with live examples rather than jargon.",
    recordingUrl: "#",
    transcriptUrl: null,
    resources: []
  },
  {
    id: "designing-for-accessibility",
    title: "Designing for Accessibility",
    date: "2026-07-29",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Design",
    presenter: "Morgan Lee",
    background: "Product Designer, new to Brown Bags",
    returning: false,
    description: "Accessibility is more than a checklist. This session walks through practical patterns for color, keyboard navigation, and screen-reader support, and shows how designing inclusively makes products better for everyone."
  },
  {
    id: "ic-to-tech-lead",
    title: "From IC to Tech Lead",
    date: "2026-08-05",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Career & Leadership",
    presenter: "Priya Nair",
    background: "Staff Engineer, mentors new tech leads",
    returning: true,
    description: "Moving from individual contributor to tech lead changes what \"good work\" means. Priya shares what shifted for her — delegation, communication, and letting go of writing all the code yourself — and the mistakes worth avoiding."
  },
  {
    id: "automating-local-dev-setup",
    title: "Automating Your Local Dev Setup",
    date: "2026-08-12",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Developer Experience",
    presenter: "Sam Okafor",
    background: "DevOps Engineer, first time presenting",
    returning: false,
    description: "Stop losing a day every time you set up a new machine. Sam demonstrates a scripted, reproducible local dev environment using dotfiles and simple tooling so onboarding — and re-onboarding — takes minutes instead of hours."
  },
  {
    id: "debugging-production-incidents",
    title: "Debugging Production Incidents Under Pressure",
    date: "2025-08-13",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Infrastructure",
    presenter: "Leah Cortez",
    background: "Site Reliability Engineer, primary on-call for the payments team",
    returning: false,
    description: "The tools you reach for at 3AM should already be muscle memory. Leah walks through a real incident timeline — what she checked first, what wasted time, and the dashboards that ended up mattering most.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Incident timeline", url: "#" }
    ]
  },
  {
    id: "intro-to-graphql",
    title: "An Introduction to GraphQL",
    date: "2025-08-27",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Backend",
    presenter: "Victor Huang",
    background: "Backend Engineer, led the GraphQL gateway rollout",
    returning: false,
    description: "GraphQL solves real problems with REST over-fetching, but it isn't free. Victor covers the basics of schemas and resolvers, then the operational costs — caching, N+1 queries, and rate limiting — that don't show up in the tutorials.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Schema examples", url: "#" },
      { label: "Slide deck", url: "#" }
    ]
  },
  {
    id: "building-accessible-forms",
    title: "Building Accessible Forms",
    date: "2025-09-10",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Design",
    presenter: "Priya Desai",
    background: "Product Designer, accessibility working group lead",
    returning: true,
    description: "Forms are where most accessibility bugs hide — unlabeled inputs, broken tab order, error messages that never reach a screen reader. Priya shows the fixes that cover most of these issues and how to test for them without specialized tools.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Testing checklist", url: "#" }
    ]
  },
  {
    id: "postmortems-without-blame",
    title: "Postmortems Without Blame",
    date: "2025-09-24",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Career & Leadership",
    presenter: "Daniel Osei",
    background: "Engineering Manager, rewrote the team's incident review process",
    returning: false,
    description: "A blameless postmortem is easy to say and hard to run. Daniel shares the facilitation habits that keep a review focused on systems instead of people, and what changed on his team once they actually stuck.",
    recordingUrl: "#",
    transcriptUrl: null,
    resources: []
  },
  {
    id: "feature-flags-done-right",
    title: "Feature Flags Done Right",
    date: "2025-10-08",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Developer Experience",
    presenter: "Mia Sorensen",
    background: "Senior Engineer, owns the internal feature-flagging platform",
    returning: false,
    description: "Feature flags are supposed to make releases safer, but a codebase full of stale flags does the opposite. Mia covers naming conventions, cleanup ownership, and how her team keeps flag debt from piling up.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Flag lifecycle guide", url: "#" }
    ]
  },
  {
    id: "sql-performance-tuning",
    title: "SQL Performance Tuning for Application Engineers",
    date: "2025-10-22",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Data",
    presenter: "Farrukh Aziz",
    background: "Backend Engineer, informal query-review resource for the team",
    returning: true,
    description: "You don't need to be a DBA to spot a slow query before it ships. Farrukh walks through reading an EXPLAIN plan, common indexing mistakes, and the handful of query patterns that cause most of the slowdowns he's debugged.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "EXPLAIN plan cheat sheet", url: "#" },
      { label: "Sample queries", url: "#" }
    ]
  },
  {
    id: "onboarding-without-burnout",
    title: "Onboarding New Engineers Without Burning Out the Team",
    date: "2025-11-05",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Career & Leadership",
    presenter: "Claire Beaumont",
    background: "Engineering Manager, onboarded twelve engineers in the last year",
    returning: false,
    description: "Good onboarding shouldn't mean one person quietly absorbing all the extra work. Claire shares how her team spread onboarding responsibilities out, and the checklist that replaced a lot of ad hoc Slack messages.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: []
  },
  {
    id: "ios-concurrency-with-swift",
    title: "iOS Concurrency with Swift",
    date: "2025-11-19",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Mobile",
    presenter: "Ravi Chandran",
    background: "iOS Engineer, migrated the app to structured concurrency",
    returning: false,
    description: "Async/await cleaned up a lot of callback spaghetti, but it introduced its own set of gotchas. Ravi walks through actors, task cancellation, and the bugs his team hit migrating a large app off completion handlers.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Migration notes", url: "#" }
    ]
  },
  {
    id: "documentation-people-read",
    title: "Writing Documentation People Actually Read",
    date: "2025-12-03",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Developer Experience",
    presenter: "Hana Kobayashi",
    background: "Staff Engineer, maintains the internal engineering handbook",
    returning: true,
    description: "Most internal docs go stale because nobody can tell if they're still true. Hana covers structuring docs so they're easy to update, and why she'd rather have three good pages than thirty half-finished ones.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Docs style guide", url: "#" }
    ]
  },
  {
    id: "container-security-basics",
    title: "Container Security Basics",
    date: "2025-12-17",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Security",
    presenter: "Omar Fathi",
    background: "Security Engineer, runs image scanning for the platform team",
    returning: false,
    description: "Most container security issues trace back to a handful of habits — running as root, bloated base images, secrets baked into layers. Omar covers the fixes that give the biggest improvement for the least effort.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Hardening checklist", url: "#" }
    ]
  },
  {
    id: "scaling-a-design-system",
    title: "Scaling a Design System",
    date: "2026-01-14",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Design",
    presenter: "Nadia Kowalski",
    background: "Product Designer, maintains the shared component library",
    returning: true,
    description: "A design system that works for one team can fall apart at five. Nadia talks through versioning components, handling breaking changes across teams, and the governance model that replaced a very informal Slack channel.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Component versioning policy", url: "#" }
    ]
  },
  {
    id: "ab-testing-pitfalls",
    title: "A/B Testing Pitfalls",
    date: "2026-01-28",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Product",
    presenter: "Ben Ferreira",
    background: "Product Manager, runs experimentation for the growth team",
    returning: false,
    description: "A lot of experiments that 'won' shouldn't have shipped. Ben covers peeking problems, underpowered tests, and novelty effects — the statistical traps that make an A/B test look conclusive when it isn't.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Experiment design checklist", url: "#" }
    ]
  },
  {
    id: "intro-to-observability",
    title: "Introduction to Observability",
    date: "2026-02-11",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Infrastructure",
    presenter: "Sofia Marchetti",
    background: "Platform Engineer, rolled out distributed tracing org-wide",
    returning: false,
    description: "Logs, metrics, and traces each answer a different question, and most teams only reach for one of them. Sofia walks through when each tool actually helps, using a real debugging session as the example.",
    recordingUrl: "#",
    transcriptUrl: null,
    resources: []
  },
  {
    id: "refactoring-legacy-code",
    title: "Refactoring Legacy Code Without Fear",
    date: "2026-02-25",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Backend",
    presenter: "Tobias Lindgren",
    background: "Senior Engineer, spent a quarter untangling a decade-old billing service",
    returning: false,
    description: "The scariest part of legacy code is usually the parts nobody has touched in years. Tobias shares how he builds a safety net — characterization tests, small reversible steps — before changing code he doesn't fully trust yet.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Characterization test examples", url: "#" }
    ]
  },
  {
    id: "managing-up-as-an-engineer",
    title: "Managing Up as an Engineer",
    date: "2026-03-11",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Career & Leadership",
    presenter: "Aisha Rahman",
    background: "Senior Engineer, mentors engineers preparing for their first staff role",
    returning: true,
    description: "Managing up isn't about flattery — it's making sure your manager has what they need to advocate for you. Aisha covers status updates that actually get read, and how to surface a problem before it becomes a surprise.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: []
  },
  {
    id: "web-performance-budgets",
    title: "Web Performance Budgets",
    date: "2026-03-25",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Frontend",
    presenter: "Lucas Fontaine",
    background: "Frontend Engineer, owns the site's Core Web Vitals",
    returning: false,
    description: "Performance work tends to happen only after users complain. Lucas covers setting a performance budget that fails CI before a regression ships, and the handful of changes that had the biggest impact on load time.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Budget config examples", url: "#" }
    ]
  },
  {
    id: "intro-to-event-sourcing",
    title: "An Intro to Event Sourcing",
    date: "2026-04-08",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Architecture",
    presenter: "Greta Lindqvist",
    background: "Staff Engineer, built the event store for the order system",
    returning: false,
    description: "Event sourcing sounds elegant until you have to handle a schema change on an event from three years ago. Greta covers the real trade-offs — replay cost, versioning, and when it's genuinely the wrong tool.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Event versioning notes", url: "#" }
    ]
  },
  {
    id: "practical-chaos-engineering",
    title: "Practical Chaos Engineering",
    date: "2026-04-22",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Infrastructure",
    presenter: "Malik Johnson",
    background: "Site Reliability Engineer, runs quarterly failure-injection drills",
    returning: true,
    description: "Chaos engineering doesn't have to mean randomly killing pods in production. Malik walks through starting small — a single dependency failure in staging — and building up to the drills that actually changed how the team builds.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Failure injection runbook", url: "#" }
    ]
  },
  {
    id: "designing-apis-developers-like",
    title: "Designing APIs Developers Actually Like",
    date: "2026-05-06",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Backend",
    presenter: "Isabel Nunez",
    background: "Backend Engineer, maintains the public API",
    returning: false,
    description: "The difference between an API people tolerate and one they enjoy usually comes down to a few decisions made early. Isabel covers pagination, error shapes, and versioning choices, using complaints from real API consumers as evidence.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "API design guidelines", url: "#" }
    ]
  },
  {
    id: "remote-pairing-that-works",
    title: "Remote Pairing That Doesn't Suck",
    date: "2026-05-20",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Developer Experience",
    presenter: "Connor Whitfield",
    background: "Senior Engineer, pairs most of his week across three time zones",
    returning: false,
    description: "Remote pairing fails for reasons that have nothing to do with the tools. Connor shares the session structure and habits — who drives, when to switch, how to handle silence — that made pairing worth the time again.",
    recordingUrl: "#",
    transcriptUrl: "#",
    resources: [
      { label: "Pairing session template", url: "#" }
    ]
  },
  {
    id: "practical-llm-prompting",
    title: "Practical Prompt Engineering for LLMs",
    date: "2026-08-19",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "AI & Machine Learning",
    presenter: "Dana Whitfield",
    background: "ML Engineer, works on internal AI tooling",
    returning: false,
    description: "Prompts that work in a demo often fall apart in production. Dana covers techniques for making prompts more reliable — structured outputs, few-shot examples, and how to test prompt changes like you'd test any other code."
  },
  {
    id: "threat-modeling-101",
    title: "Threat Modeling 101",
    date: "2026-08-26",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Security",
    presenter: "Marcus Webb",
    background: "Security Engineer, runs the internal AppSec guild",
    returning: true,
    description: "You don't need a security background to threat model a feature before you build it. Marcus walks through a lightweight process for spotting the most likely ways a design could go wrong, before it's expensive to fix."
  },
  {
    id: "state-management-in-react",
    title: "Rethinking State Management in React",
    date: "2026-09-02",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Frontend",
    presenter: "Yuki Tanaka",
    background: "Frontend Engineer, maintains the design system",
    returning: false,
    description: "Most state management problems aren't solved by picking a different library. Yuki breaks down where state actually needs to live, when local state is enough, and the signs that it's time to reach for something more global."
  },
  {
    id: "data-pipelines-that-dont-break",
    title: "Data Pipelines That Don't Break at 2AM",
    date: "2026-09-09",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Data",
    presenter: "Renee Foster",
    background: "Data Engineer, on-call lead for the analytics platform",
    returning: true,
    description: "Renee shares the failure patterns behind most of the pages she's gotten in the last year, and the guardrails — schema checks, backfill plans, alerting that isn't noise — that have cut incidents down since."
  },
  {
    id: "contract-testing-microservices",
    title: "Contract Testing for Microservices",
    date: "2026-09-16",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Testing",
    presenter: "Ibrahim Saleh",
    background: "QA Engineer, championing consumer-driven contracts",
    returning: false,
    description: "Integration tests across services are slow and flaky, but skipping them lets breaking changes through. Ibrahim introduces consumer-driven contract testing as a middle ground, with a live example of catching a breaking change before deploy."
  },
  {
    id: "writing-prds-that-ship",
    title: "Writing PRDs That Actually Ship",
    date: "2026-09-23",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Product",
    presenter: "Casey Lindqvist",
    background: "Product Manager, three years at the company",
    returning: false,
    description: "A good PRD answers the questions engineering is going to ask anyway. Casey shares a lightweight template and the habits that keep a PRD from turning into either a wall of text or a vague wish list."
  },
  {
    id: "event-driven-architecture",
    title: "An Honest Look at Event-Driven Architecture",
    date: "2026-09-30",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Architecture",
    presenter: "Grace Muthoni",
    background: "Staff Engineer, led the migration off the monolith",
    returning: true,
    description: "Event-driven systems promise decoupling but deliver a different set of hard problems — ordering, replay, and debugging a flow that spans ten services. Grace talks through what the migration actually cost and where it paid off."
  },
  {
    id: "negotiating-your-offer",
    title: "Negotiating Your Offer (and Your Raise)",
    date: "2026-10-07",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Career & Leadership",
    presenter: "Tomás Ibarra",
    background: "Engineering Manager, hires for the platform team",
    returning: false,
    description: "From the other side of the table: what actually moves on an offer, what doesn't, and how to have the conversation without it feeling adversarial. Tomás answers this from the hiring manager's seat, not a generic playbook."
  },
  {
    id: "cost-optimizing-cloud-infra",
    title: "Cost-Optimizing Cloud Infrastructure Without Breaking Prod",
    date: "2026-10-14",
    time: "12:00 PM – 1:00 PM",
    location: "Room 4B / Zoom",
    topic: "Infrastructure",
    presenter: "Naomi Reyes",
    background: "Cloud Infrastructure Engineer, cut last quarter's cloud spend by 30%",
    returning: false,
    description: "Most cost-cutting advice stops at 'right-size your instances.' Naomi walks through the changes that actually moved the needle last quarter — and the ones that looked promising but weren't worth the operational risk."
  },
  {
    id: "typography-for-engineers",
    title: "Typography for Engineers",
    date: "2026-10-21",
    time: "12:00 PM – 1:00 PM",
    location: "Room 2A / Zoom",
    topic: "Design",
    presenter: "Oliver Bennett",
    background: "Product Designer, teaches an internal design fundamentals course",
    returning: true,
    description: "Engineers ship a lot of type without thinking much about it. Oliver covers the handful of typography rules that make the biggest visual difference — scale, line length, and contrast — with before/after examples from real screens."
  }
];
