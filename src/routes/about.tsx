import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/jensler-portrait.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jensler T. Dela Cruz" },
      {
        name: "description",
        content: "About Jensler — full stack developer, 3 years of building software.",
      },
      { property: "og:description", content: "Three years of focused development." },
    ],
  }),
  component: AboutPage,
});

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="group cursor-default">
      <div className="font-display text-3xl md:text-4xl font-light group-hover:text-foreground transition-colors duration-300">
        {k}
      </div>
      <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">
        {v}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          § About
        </span>
        <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">
          Three years building software as an independent developer.
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="aspect-square w-full overflow-hidden border border-hairline rounded-full grayscale group hover:grayscale-0 transition-all duration-500">
              <img
                src={portrait}
                alt="Portrait of Jensler T. Dela Cruz"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-8 space-y-8" delay={120}>
            <p className="text-lg leading-relaxed text-foreground/80">
              My work spans early-stage prototypes and high-traffic production systems. I care about
              typed contracts at the edge, query plans that hold up under load, and interfaces that
              don't waste a single pixel.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Outside of work I read more documentation than novels, run long distances badly, and
              brew filter coffee with embarrassing precision.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-hairline">
              <Stat k="3" v="Years shipping" />
              <Stat k="20" v="Projects built" />
              <Stat k="Solo" v="Development" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
