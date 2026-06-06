import { Link } from "@tanstack/react-router";
import { OrbitLogo } from "./OrbitLogo";
import { Linkedin, Github } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/problem", label: "Problem" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/use-cases", label: "Use cases" },
  { to: "/architecture", label: "Architecture" },
  { to: "/founder", label: "Founder" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <OrbitLogo />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "!text-foreground" }}
              className="relative px-1 py-1 hover:text-foreground transition data-[status=active]:text-foreground data-[status=active]:after:content-[''] data-[status=active]:after:absolute data-[status=active]:after:-bottom-1.5 data-[status=active]:after:left-0 data-[status=active]:after:right-0 data-[status=active]:after:h-px data-[status=active]:after:bg-lime data-[status=active]:after:shadow-[0_0_10px_#ffffff]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/waitlist"
          className="text-sm font-medium px-4 py-2 rounded-full bg-lime text-primary-foreground hover:opacity-90 transition shadow-[0_0_30px_-5px_#ffffff]"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <OrbitLogo />
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/tanushchokshi/" target="_blank" rel="noreferrer"
            className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center hover:border-lime/30 hover:text-lime transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/techtanush" target="_blank" rel="noreferrer"
            className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] grid place-items-center hover:border-lime/30 hover:text-lime transition">
            <Github className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Orbit AI</p>
      </div>
    </footer>
  );
}

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 60%)" }} />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto reveal">
      <div className="text-xs font-medium text-lime tracking-[0.25em] uppercase">{eyebrow}</div>
      <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">{title}</h1>
      {subtitle && <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
