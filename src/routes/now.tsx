import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Jensler T. Dela Cruz" },
      { name: "description", content: "What Jensler is working on right now. Updated regularly." },
      { property: "og:title", content: "Now — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Current projects and focus areas." },
    ],
  }),
  component: NowPage,
});

function NowPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          § Now
        </span>
        <h1 className="font-display font-light text-5xl md:text-8xl mt-6 tracking-tight leading-[0.95]">
          What I'm
          <br />
          <span className="italic text-muted-foreground">working on.</span>
        </h1>

        <div className="mt-20 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-6 space-y-8">
            <div>
              <h2 className="font-display text-2xl mb-4">Current Focus</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Building scalable platforms for early-stage startups. Currently working with three
                teams on product architecture and backend systems.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl mb-3">Active Projects</h3>
              <ul className="space-y-4">
                <li className="group hover:bg-secondary/30 p-3 -mx-3 rounded-md transition-colors duration-300">
                  <div className="font-display tracking-tight">Ledger OS</div>
                  <p className="text-sm text-foreground/70 mt-1">
                    Financial dashboard. Building multi-currency reconciliation engine.
                  </p>
                </li>
                <li className="group hover:bg-secondary/30 p-3 -mx-3 rounded-md transition-colors duration-300">
                  <div className="font-display tracking-tight">Open Source Contributions</div>
                  <p className="text-sm text-foreground/70 mt-1">
                    Contributing to TanStack Router and several database tools.
                  </p>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 space-y-8" delay={120}>
            <div>
              <h3 className="font-display text-xl mb-3">Learning</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Rust for systems programming and CLI tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Advanced PostgreSQL performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>Distributed systems and consensus algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>WebAssembly for client-side performance</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl mb-3">Writing</h3>
              <p className="text-foreground/80">
                Publishing articles on my journal about engineering practices, database design, and
                building maintainable systems. One essay every two weeks.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl mb-3">Availability</h3>
              <p className="text-foreground/80">
                <span className="font-semibold">Open for new engagements.</span> Currently have
                capacity for one more full-time engagement or two part-time advisory roles.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="text-sm text-muted-foreground">
            <span className="font-mono">Last updated: May 2026</span>
          </p>
        </div>
      </div>
    </section>
  );
}
