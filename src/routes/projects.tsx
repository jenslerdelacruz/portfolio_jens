import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Jensler T. Dela Cruz" },
      { name: "description", content: "Detailed case studies of selected projects built by Jensler." },
      { property: "og:title", content: "Projects — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Full project case studies and detailed breakdowns." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    id: 1,
    name: "Ledger OS",
    tagline: "Real-time financial dashboard for SMEs",
    description: "A comprehensive financial management platform with multi-currency support, real-time reconciliation, and advanced reporting.",
    challenge: "Building a system that could handle 1M+ transactions daily while maintaining sub-second query response times for real-time dashboards.",
    solution: "Implemented event-driven architecture with PostgreSQL and MySQL for analytics. Used caching layer and WebSockets for real-time updates.",
    results: [
      "50ms average query response time",
      "99.9% uptime",
      "Handles 10k concurrent users",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "MySQL", "WebSockets"],
    year: "2025",
    metrics: {
      users: "2.5K+",
      transactions: "1M+/day",
      uptime: "99.9%",
    },
  },
  {
    id: 2,
    name: "Atlas Commerce",
    tagline: "Headless e-commerce platform",
    description: "High-performance e-commerce platform handling checkout, inventory, and order management for mid-market retailers.",
    challenge: "Processing $50M+ annually while maintaining sub-second checkout flows and real-time inventory sync across multiple channels.",
    solution: "Built with Node.js microservices, queue system for order processing, and Stripe integration. Implemented custom caching layer for inventory.",
    results: [
      "$50M+ annual transactions",
      "0.8% abandoned carts",
      "99.99% uptime SLA",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Stripe", "SQLite"],
    year: "2024",
    metrics: {
      revenue: "$50M+/year",
      carts: "50K+/day",
      uptime: "99.99%",
    },
  },
  {
    id: 3,
    name: "Northwind CMS",
    tagline: "Editorial CMS with AI assistance",
    description: "Multi-tenant content management system with versioning, collaboration tools, and AI-powered content suggestions.",
    challenge: "Supporting 1M+ documents across multiple tenants with fast full-text search and collaborative editing without conflicts.",
    solution: "Built with React, implemented CRDT for conflict-free editing, Elasticsearch for search, and OpenAI API for content suggestions.",
    results: [
      "1M+ documents managed",
      "50+ team collaborations",
      "<100ms search latency",
    ],
    stack: ["React", "Supabase", "Elasticsearch", "OpenAI", "Node.js"],
    year: "2024",
    metrics: {
      documents: "1M+",
      teams: "50+",
      searchLatency: "<100ms",
    },
  },
];

function ProjectsPage() {
  return (
    <section className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">§ Projects</span>
        <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">
          Case studies.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
          Deep dives into selected projects. Problem, solution, and the technical decisions made.
        </p>

        <div className="mt-16 space-y-16">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <div className="border border-hairline rounded-lg p-8 md:p-10 hover:bg-secondary/20 transition-all duration-300">
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Project Info */}
                  <div className="md:col-span-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                          {project.year}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl tracking-tight">{project.name}</h2>
                      <p className="text-lg text-muted-foreground mt-2">{project.tagline}</p>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-hairline">
                      <div>
                        <h3 className="font-display text-sm tracking-tight mb-2 text-muted-foreground">Challenge</h3>
                        <p className="text-sm text-foreground/70">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-display text-sm tracking-tight mb-2 text-muted-foreground">Solution</h3>
                        <p className="text-sm text-foreground/70">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics & Stack */}
                  <div className="md:col-span-6 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-secondary/30 p-4 rounded-lg text-center">
                          <div className="font-display text-2xl font-semibold">{value}</div>
                          <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-1">
                            {key === "users" && "Users"}
                            {key === "transactions" && "Transactions"}
                            {key === "uptime" && "Uptime"}
                            {key === "revenue" && "Revenue"}
                            {key === "carts" && "Carts/Day"}
                            {key === "documents" && "Documents"}
                            {key === "teams" && "Teams"}
                            {key === "searchLatency" && "Search"}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="font-display text-sm tracking-tight mb-3 text-muted-foreground">Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 text-sm font-mono tracking-wide text-foreground/80 rounded hover:bg-secondary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-hairline">
                      <h3 className="font-display text-sm tracking-tight mb-3 text-muted-foreground">Results</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground mt-1">→</span>
                            <span className="text-foreground/80">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-hairline text-center">
          <p className="text-foreground/70 mb-6">
            Interested in working on your next project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
