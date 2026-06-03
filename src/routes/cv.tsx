import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Jensler T. Dela Cruz" },
      { name: "description", content: "Resume and CV of Jensler T. Dela Cruz, Full Stack Developer." },
      { property: "og:title", content: "CV — Jensler T. Dela Cruz" },
      { property: "og:description", content: "Download or view my resume." },
    ],
  }),
  component: CVPage,
});

function CVPage() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <section id="cv" className="pt-20 pb-32 md:pt-28 md:pb-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              § CV
            </span>
            <h1 className="font-display font-light text-4xl md:text-6xl mt-4 tracking-tight">
              Resume & Experience
            </h1>
          </div>

          <button
            onClick={downloadPDF}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md border border-hairline text-sm font-mono tracking-widest uppercase hover:bg-secondary/50 transition-all duration-300 group"
          >
            <Download size={16} className="group-hover:scale-110 transition-transform" />
            Download PDF
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-12">
          <div className="grid md:grid-cols-12 gap-8">

            {/* LEFT */}
            <Reveal className="md:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl mb-4">About</h2>
                <p className="text-sm text-foreground/70 leading-relaxed border-l border-hairline pl-6">
                  Full stack developer building and deploying web applications with a focus on usability, performance,
                   and clean system design. Continuously improving through hands-on projects and real-world development experience.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Experience</h2>
                <div className="space-y-6 border-l border-hairline pl-6">
                  <div>
                    <div className="font-display text-lg">Full Stack Developer (Solo)</div>
                    <div className="font-mono text-xs uppercase text-muted-foreground mt-1">
                      2022 — Present · Independent
                    </div>
                    <p className="text-sm text-foreground/70 mt-2">
                      Building 20+ projects ranging from MVPs to production applications.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Projects</h2>
                <div className="space-y-4 border-l border-hairline pl-6">
                  <div>
                    <div className="font-display text-lg">Commerce App</div>
                    <p className="text-sm text-foreground/70 mt-1">
                      Full-stack e-commerce platform with React + Node.js + MySQL.
                    </p>
                  </div>
                  <div>
                    <div className="font-display text-lg">SafeRide</div>
                    <p className="text-sm text-foreground/70 mt-1">
                      Real-time tracking app using Firebase + TypeScript.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal className="md:col-span-7 space-y-8" delay={120}>

              <div>
                <h2 className="font-display text-2xl mb-4">Skills</h2>
                <div className="space-y-2 border-l border-hairline pl-6">
                  <p className="text-sm text-foreground/70">
                    Frontend: React, Javacript, TypeScript
                  </p>
                  <p className="text-sm text-foreground/70">
                    Backend: Node.js, MySQL, PostgreSQL , php, SQLite, Supabase,
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Tools</h2>
                <p className="text-sm text-foreground/70 border-l border-hairline pl-6">
                  Vite, Docker, Firebase, Supabase, Vercel, GitHub Actions
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Contact</h2>
                <div className="border-l border-hairline pl-6">
                  <p className="text-sm text-foreground/70">
                    <a className="hover:underline" href="mailto:jenslertercio@gmail.com">
                      jenslertercio@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-foreground/70">
                    Santiago City, Philippines
                  </p>
                </div>
              </div>

            </Reveal>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={downloadPDF}
          className="mt-12 md:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary text-primary-foreground text-sm font-mono tracking-widest uppercase w-full"
        >
          <Download size={16} />
          Download PDF
        </button>

      </div>
    </section>
  );
}