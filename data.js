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
  }
];
