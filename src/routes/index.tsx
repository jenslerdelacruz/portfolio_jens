import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/jensler-portrait.jpg";
import { TechCarousel } from "@/components/TechCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jensler T. Dela Cruz — Full Stack Developer" },
      {
        name: "description",
        content: "Portfolio of Jensler T. Dela Cruz, full stack developer based in Manila.",
      },
      { property: "og:title", content: "Jensler T. Dela Cruz — Full Stack Developer" },
      { property: "og:description", content: "Full stack developer focused on clarity and craft." },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <section className="pt-24 pb-32 md:pt-32 md:pb-44">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10 reveal">
            <div className="hairline h-px w-10" />
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Full Stack Developer · Manila, PH
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-end">
            <div className="md:col-span-8 order-2 md:order-1">
              <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight reveal reveal-delay-1">
                Jensler T.
                <br />
                <span className="italic text-muted-foreground">Dela Cruz</span>
              </h1>
            </div>
            <div className="md:col-span-4 order-1 md:order-2 reveal">
              <div className="relative aspect-square w-48 md:w-full overflow-hidden border border-hairline rounded-full grayscale group hover:grayscale-0 transition-all duration-500">
                <img
                  src={portrait}
                  alt="Portrait of Jensler T. Dela Cruz"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-8 reveal reveal-delay-2">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                I design and build software end-to-end — from typed APIs and database schemas to
                interfaces that feel inevitable. Currently shipping production systems for teams
                that value clarity over noise.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-xs tracking-widest uppercase">
                <Link to="/work" className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:gap-3 transition-all duration-300 group">
                  Selected Work <ArrowUpRight size={14} className="group-hover:rotate-0 group-hover:scale-110 -rotate-12 transition-all duration-300" />
                </Link>
                <Link to="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-300">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechCarousel />
    </>
  );
}
