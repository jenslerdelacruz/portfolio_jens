import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Jensler T. Dela Cruz" },
      { name: "description", content: "Selected full stack engineering projects, 2022–2025." },
      { property: "og:title", content: "Work — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Selected full stack engineering projects." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { n: "01", name: "Commerce App", desc: "Full-stack e-commerce platform with product catalog, shopping cart, and checkout flow.", stack: ["React", "Node.js", "MySQL"], year: "2024", url: "#", available: true },
  { n: "02", name: "SafeRide", desc: "Safety-focused ride-sharing application with real-time location tracking and emergency alerts.", stack: ["React", "TypeScript", "Firebase"], year: "2025", url: "https://safe-ride-main.vercel.app/", available: true },
  { n: "03", name: "Project Unavailable", desc: "Coming soon or temporarily unavailable.", stack: [], year: "2025", url: "#", available: false },
  { n: "04", name: "Project Unavailable", desc: "Coming soon or temporarily unavailable.", stack: [], year: "2025", url: "#", available: false },
];

function WorkPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Work</span>
            <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">Selected projects</h1>
          </div>
          <span className="font-mono text-xs text-muted-foreground hidden md:block">2022 — 2025</span>
        </div>

        <div className="border-t border-hairline">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <a href={p.url} target={p.url !== "#" ? "_blank" : undefined} rel={p.url !== "#" ? "noopener noreferrer" : undefined} className={`group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-2 -mx-2 border-b border-hairline transition-all duration-300 rounded-md ${p.available ? "hover:bg-secondary/50 cursor-pointer" : "opacity-60 cursor-not-allowed"}`}>
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-1 group-hover:text-foreground transition-colors duration-300">{p.n}</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:translate-x-1 transition-transform duration-300">{p.name}</h3>
                  <div className="font-mono text-xs text-muted-foreground mt-1 md:hidden">{p.year}</div>
                </div>
                <div className="col-span-12 md:col-span-4 text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{p.desc}</div>
                <div className="col-span-9 md:col-span-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground pt-1">
                  {p.stack.length > 0 ? p.stack.map((s) => (
                    <span key={s} className="group-hover:text-foreground transition-colors duration-300">{s}</span>
                  )) : <span className="text-muted-foreground/50">—</span>}
                </div>
                <div className="col-span-3 md:col-span-1 flex items-start justify-end pt-1">
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground group-hover:rotate-0 group-hover:scale-110 -rotate-12 transition-all duration-300" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
