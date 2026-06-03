import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jensler T. Dela Cruz — Full Stack Developer" },
      { name: "description", content: "Portfolio of Jensler T. Dela Cruz, full stack developer." },
      { name: "author", content: "Jensler T. Dela Cruz" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/cv", label: "CV" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/skills", label: "Skills" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-background/70 border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        <Link 
          to="/" 
          className="font-mono text-xs tracking-widest uppercase shrink-0 font-semibold hover:scale-105 transition-transform duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          JTD<span className="text-muted-foreground">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        
        {/* Contact Button - Desktop */}
        <Link
          to="/contact"
          className="hidden sm:flex font-mono text-xs tracking-widest uppercase items-center gap-1.5 hover:scale-110 transition-all duration-300 shrink-0 group"
        >
          <span className="hidden sm:inline group-hover:text-foreground text-muted-foreground transition-colors duration-300">Available</span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground" />
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={20} className="text-foreground" />
          ) : (
            <Menu size={20} className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-background/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            {navItems.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-all duration-300"
                activeProps={{ className: "text-foreground bg-secondary" }}
                activeOptions={{ exact: true }}
                style={{
                  animation: mobileMenuOpen ? `slideDown 0.3s ease-out forwards` : 'none',
                  animationDelay: `${i * 0.05}s`
                }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono tracking-widest uppercase bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity duration-300 mt-4"
            >
              Available - Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-hairline py-10 mt-auto">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">© 2026 Jensler T. Dela Cruz</span>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Designed & built with restraint.</span>
          </div>
          <div className="flex gap-6 font-mono text-xs tracking-widest uppercase">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">GitHub ↗</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">LinkedIn ↗</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">X ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 pt-16 animate-fade-in">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
