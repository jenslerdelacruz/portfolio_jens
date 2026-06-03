import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Jensler T. Dela Cruz" },
      { name: "description", content: "Notes on engineering, craft, and the slow work of building software." },
      { property: "og:title", content: "Journal — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Notes on engineering and craft." },
    ],
  }),
  component: JournalPage,
});

const entries = [
  { d: "May 2026", t: "On typed boundaries", e: "Why I draw a thick line between the database and the rest of the system." },
  { d: "Mar 2026", t: "The query plan tells the truth", e: "A short field guide to reading PostgreSQL EXPLAIN output without panicking." },
  { d: "Jan 2026", t: "Less framework, more program", e: "Notes from a year of writing fewer abstractions and shipping more code." },
  { d: "Nov 2025", t: "Designing the empty state", e: "The empty state is the most honest screen in your product. Treat it that way." },
];

function JournalPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Journal</span>
        <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">Notes & essays.</h1>

        <div className="mt-16 border-t border-hairline">
          {entries.map((e, i) => (
            <Reveal key={e.t} delay={i * 80}>
              <a href="#" className="group grid grid-cols-12 gap-4 md:gap-8 py-8 px-2 -mx-2 border-b border-hairline hover:bg-secondary/50 transition-all duration-300 rounded-md">
                <div className="col-span-12 md:col-span-2 font-mono text-xs tracking-widest uppercase text-muted-foreground pt-1 group-hover:text-foreground transition-colors duration-300">{e.d}</div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:translate-x-1 transition-transform duration-300">{e.t}</h3>
                </div>
                <div className="col-span-12 md:col-span-4 text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{e.e}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
