import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Jensler T. Dela Cruz" },
      { name: "description", content: "Languages, frameworks, and tools Jensler works with day to day." },
      { property: "og:title", content: "Skills — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Stack, services, and craft." },
    ],
  }),
  component: SkillsPage,
});

const stack: Record<string, { name: string }[]> = {
  Frontend: [
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Python" },
    { name: "GraphQL" },
  ],
  Data: [
    { name: "PostgreSQL" },
    { name: "SQLite" },
    { name: "MySQL" },
    { name: "Supabase" },
  ],
  Infrastructure: [
    { name: "Cloudflare" },
    { name: "Docker" },
    { name: "XAMPP" },
    { name: "GitHub Actions" },
  ],
};

const services = [
  { n: "01", t: "End-to-end product builds", d: "From schema to shipped UI — typed, tested, and deployable on day one." },
  { n: "02", t: "Platform & API work", d: "Stable contracts, observability, and infrastructure your team can extend." },
  { n: "03", t: "Performance audits", d: "Find the slow queries, the wasted re-renders, and the leaky abstractions." },
  { n: "04", t: "Technical advisory", d: "Embedded with founding teams to make architecture decisions stick." },
];

function SkillsPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Skills</span>
        <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">
          Tools of the trade.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          A working snapshot of the technologies I reach for. Levels are honest, not aspirational.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {Object.entries(stack).map(([k, items], idx) => (
            <Reveal key={k} delay={idx * 100} className="bg-background p-8 hover:bg-secondary/50 transition-colors duration-300">
              <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">{k}</div>
              <ul className="space-y-3">
                {items.map((i) => (
                  <li key={i.name} className="flex items-baseline justify-between gap-4 border-b border-hairline/60 pb-2 last:border-0 group cursor-default">
                    <span className="text-base group-hover:text-foreground transition-colors duration-300">{i.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Services</span>
          <h2 className="font-display font-light text-3xl md:text-5xl mt-4 tracking-tight">What I help teams ship.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="bg-background p-8 md:p-10 hover:bg-secondary/50 transition-all duration-300 group">
                <div className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">{s.n}</div>
                <h3 className="font-display text-2xl mt-4 group-hover:translate-x-1 transition-transform duration-300">{s.t}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
