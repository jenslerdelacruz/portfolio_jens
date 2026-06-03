import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/uses")({
  head: () => ({
    meta: [
      { title: "Uses — Jensler T. Dela Cruz" },
      { name: "description", content: "Tools, software, and gear that Jensler uses daily." },
      { property: "og:title", content: "Uses — Jensler T. Dela Cruz" },
      { property: "og:description", content: "My favorite tools and software." },
    ],
  }),
  component: UsesPage,
});

const usesCategories = [
  {
    title: "Development",
    items: [
      { name: "VS Code", description: "Best code editor. Extensions: ESLint, Prettier, TailwindCSS IntelliSense." },
      { name: "Terminal: Warp", description: "Modern terminal with AI command suggestions and scroll-back search." },
      { name: "Git & GitHub", description: "Version control. GitHub Copilot for faster development." },
      { name: "Figma", description: "Design and prototyping. Excellent for component libraries." },
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      { name: "TypeScript", description: "Type safety is non-negotiable. Catches bugs before production." },
      { name: "React", description: "Component-driven development. Hooks for state management." },
      { name: "Next.js", description: "Full-stack React framework. Simplifies deployment and SSR." },
      { name: "Node.js", description: "JavaScript on the backend. TailwindCSS for styling." },
      { name: "PostgreSQL", description: "Reliable, open-source relational database. JSONB for flexibility." },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", description: "Containerization. Consistent environments across dev/prod." },
      { name: "GitHub Actions", description: "CI/CD. Automate tests, builds, and deployments." },
      { name: "Cloudflare", description: "CDN, DNS, Workers for edge computing." },
      { name: "XAMPP", description: "Local development environment. Apache, MySQL, PHP, Perl." },
    ],
  },
  {
    title: "Productivity",
    items: [
      { name: "Cursor", description: "AI-powered code editor with inline suggestions." },
      { name: "Notion", description: "Documentation and note-taking. Better than spreadsheets." },
      { name: "Linear", description: "Issue tracking. Superior to Jira for teams." },
      { name: "Arc Browser", description: "Modern browser built for web developers." },
    ],
  },
  {
    title: "Hardware",
    items: [
      { name: "MacBook Pro 16", description: "Excellent build quality and performance for development." },
      { name: "Magic Keyboard", description: "Minimal, responsive, long battery life." },
      { name: "LG Ultrawide Monitor", description: "34 inches, 3440x1440. Game-changer for productivity." },
      { name: "Logitech MX Master", description: "Best wireless mouse. Worth every peso." },
    ],
  },
];

function UsesPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Uses</span>
        <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">Tools & Software</h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Gear, software, and tools I use to build. Updated regularly as I discover new tools.
        </p>

        <div className="mt-16 space-y-16">
          {usesCategories.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 100}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-8 pb-4 border-b border-hairline">{category.title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item) => (
                    <div key={item.name} className="group hover:bg-secondary/30 p-4 -mx-4 rounded-md transition-colors duration-300">
                      <h3 className="font-display text-lg tracking-tight group-hover:text-foreground transition-colors duration-300">{item.name}</h3>
                      <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
