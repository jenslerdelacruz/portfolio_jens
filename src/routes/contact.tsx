import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jensler T. Dela Cruz" },
      { name: "description", content: "Get in touch with Jensler for full stack engineering work." },
      { property: "og:title", content: "Contact — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Available for new engagements." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-56">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Contact</span>
        <h1 className="font-display font-light text-5xl md:text-8xl mt-6 tracking-tight leading-[0.95]">
          Let's build
          <br />
          <span className="italic text-muted-foreground">something quiet.</span>
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-6">
            <a href="mailto:jensler@delacruz.dev" className="inline-flex items-center gap-3 text-xl md:text-2xl border-b-2 border-foreground pb-2 hover:gap-4 hover:text-foreground transition-all duration-300 group">
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              jenslertercio@gmail.com
            </a>
            <p className="mt-8 max-w-md text-sm text-foreground/70 leading-relaxed">
              Currently taking on one or two engagements per quarter. The best briefs include the
              problem, the constraints, and what done looks like.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7 grid grid-cols-2 gap-8 font-mono text-xs tracking-widest uppercase">
            <div>
              <div className="text-muted-foreground mb-2">Elsewhere</div>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-300 inline-block">GitHub ↗</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-300 inline-block">LinkedIn ↗</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-300 inline-block">Read.cv ↗</a></li>
                <li><a href="https://www.facebook.com/jensledelacruz24/" className="text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-300 inline-block">Facebook ↗</a></li>
              </ul>
            </div>
            <div>
              <div className="text-muted-foreground mb-2">Location</div>
              <ul className="space-y-1.5">
                <li className="text-foreground">Santiago City, PH</li>
                <li className="text-foreground">GMT+8</li>
                <li className="text-muted-foreground">Remote · Hybrid</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
