import { Code2, Database, Zap, Terminal, GitBranch, Boxes } from "lucide-react";

const technologies = [
  { name: "TypeScript", icon: Code2, color: "text-blue-500" },
  { name: "React", icon: Zap, color: "text-cyan-500" },
  { name: "Node.js", icon: Terminal, color: "text-green-500" },
  { name: "PostgreSQL", icon: Database, color: "text-sky-500" },
  { name: "Git", icon: GitBranch, color: "text-red-500" },
  { name: "Docker", icon: Boxes, color: "text-blue-400" },
  { name: "Next.js", icon: Code2, color: "text-gray-700 dark:text-gray-300" },
  { name: "TailwindCSS", icon: Zap, color: "text-cyan-400" },
];

export function TechCarousel() {
  // Double the array for seamless infinite scroll
  const displayTechs = [...technologies, ...technologies];

  return (
    <div className="w-full py-12 md:py-16 border-t border-b border-hairline bg-background/50 overflow-hidden">
      <div className="relative flex items-center">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex gap-8 md:gap-12 animate-carousel px-6 md:px-10">
          {displayTechs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
              >
                <Icon size={24} className={`${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="font-mono text-sm md:text-base tracking-widest uppercase font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
