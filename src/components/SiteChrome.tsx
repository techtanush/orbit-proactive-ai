import { Link } from "@tanstack/react-router";
import { OrbitLogo } from "./OrbitLogo";
import { Linkedin, Github } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/architecture", label: "Architecture" },
  { to: "/founder", label: "Founder" },
  { to: "/waitlist", label: "Waitlist" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <OrbitLogo />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition relative data-[status=active]:text-foreground data-[status=active]:after:content-[''] data-[status=active]:after:absolute data-[status=active]:after:-bottom-1 data-[status=active]:after:left-0 data-[status=active]:after:right-0 data-[status=active]:after:h-px data-[status=active]:after:bg-lime"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/waitlist"
          className="text-sm font-medium px-4 py-2 rounded-full bg-lime text-primary-foreground hover:opacity-90 transition shadow-[0_0_30px_-5px_#c6f24a]"
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
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
        style={{ background: "radial-gradient(circle, #c6f24a 0%, transparent 60%)" }} />
    </div>
  );
}
