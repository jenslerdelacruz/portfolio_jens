import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Jensler T. Dela Cruz" },
      { name: "description", content: "What clients and colleagues say about working with Jensler." },
      { property: "og:title", content: "Testimonials — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Feedback from clients and team members." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    quote: "Jensler took our architecture from a prototype to production-ready in 3 months. His attention to database design prevented scaling issues down the line.",
    author: "Maria Santos",
    role: "CTO, FinTech Startup",
    company: "PayFlow",
  },
  {
    quote: "The code he writes is clean, well-documented, and maintainable. Our team was able to pick up his systems immediately and extend them without issues.",
    author: "Alex Chen",
    role: "Engineering Lead",
    company: "DataViz Inc",
  },
  {
    quote: "Best investment in our engineering team. He didn't just build features—he established patterns our junior developers still use a year later.",
    author: "James Wilson",
    role: "Founder & CEO",
    company: "Ledger OS",
  },
  {
    quote: "His PostgreSQL optimization work reduced our query times by 80%. He understands the deep mechanics of databases, not just the surface.",
    author: "Priya Patel",
    role: "Senior Database Engineer",
    company: "Analytics Platform",
  },
  {
    quote: "Working with Jensler as an advisor transformed how we think about API design. The ROI on his time was clear within weeks.",
    author: "Sofia Garcia",
    role: "Product Manager",
    company: "API Layer",
  },
  {
    quote: "He's a rare engineer who can discuss database transactions at lunch and nail a pixel-perfect React component by afternoon.",
    author: "David Kim",
    role: "Design Director",
    company: "Creative Studio",
  },
];

function TestimonialsPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Testimonials</span>
        <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">
          What people say.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Feedback from clients, colleagues, and teams I've worked with over the years.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="group h-full border border-hairline p-6 md:p-8 rounded-lg hover:bg-secondary/30 hover:border-foreground/20 transition-all duration-300">
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-hairline">
                  <div className="flex-1">
                    <div className="font-display font-semibold text-foreground">{testimonial.author}</div>
                    <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-hairline text-center">
          <p className="text-foreground/70 mb-6">
            Looking to work together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
