export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  features: string[];
  challenge: string;
  improvements: string[];
  liveUrl: string;
  githubUrl: string;
  visual: "bazardor" | "fitlog" | "devconf";
};

export const projects: Project[] = [
  {
    slug: "bazardor",
    name: "BazarDor",
    subtitle: "Bangla daily market price tracker",
    description:
      "A Bangla-focused product-price platform designed to help visitors explore everyday market prices in one place. The interface highlights products, categories, and price movements in a simple, accessible layout.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth", "REST API"],
    features: [
      "Bangla-first product price homepage",
      "Product category navigation and product listings",
      "Price movement indicators for rising and falling prices",
      "Authentication flow using Better Auth and MongoDB",
      "API-driven product and category data",
    ],
    challenge:
      "Integrating authentication and MongoDB reliably in a deployed environment, while keeping product and category data fresh and the interface easy to use in Bangla.",
    improvements: [
      "Complete and test production authentication configuration",
      "Add richer product history and price trend visualizations",
      "Improve search, filters, and mobile browsing",
    ],
    liveUrl: "https://bazardor-topaz.vercel.app/",
    githubUrl: "https://github.com/Aysha014/bazardor",
    visual: "bazardor",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    subtitle: "Workout and fitness tracking experience",
    description:
      "A fitness-focused web application for exploring and organizing workout information. The project demonstrates component-based UI development and client-side state handling.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "LocalStorage"],
    features: [
      "Workout-focused interface and content organization",
      "Reusable React components",
      "Responsive layout for different screen sizes",
      "Client-side persistence using LocalStorage",
    ],
    challenge:
      "Structuring a maintainable component-based interface and managing user-facing state in the browser without requiring a backend for every interaction.",
    improvements: [
      "Add user accounts and cloud-synced workout plans",
      "Introduce progress tracking and personal dashboards",
      "Add workout search, filters, and richer exercise details",
    ],
    liveUrl: "https://a6-fit-log-ebon.vercel.app/",
    githubUrl: "https://github.com/Aysha014/a6-fit-log",
    visual: "fitlog",
  },
  {
    slug: "devconf-2026",
    name: "DevConf 2026",
    subtitle: "Developer conference landing page",
    description:
      "A conference website concept built to present event information in a clear landing-page format. It showcases foundational frontend skills, layout composition, and responsive web design.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Conference-style landing page",
      "Structured event information sections",
      "Responsive visual layout",
      "Interactive frontend elements",
    ],
    challenge:
      "Creating a clear visual hierarchy and organizing event information so visitors can quickly understand the conference and its content.",
    improvements: [
      "Add speaker profiles and session schedules",
      "Build a registration form and confirmation flow",
      "Migrate to a component-based React or Next.js implementation",
    ],
    liveUrl: "https://conferencewebsite-blond.vercel.app/",
    githubUrl: "https://github.com/Aysha014/ConferenceWebsite",
    visual: "devconf",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
