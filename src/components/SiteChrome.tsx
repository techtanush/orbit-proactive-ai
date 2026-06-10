import { useEffect, useState } from "react";
import { OrbitLogo } from "./OrbitLogo";
import { Linkedin, Github, Globe } from "lucide-react";

const nav = [
  { href: "#vision", label: "Vision" },
  { href: "#how", label: "How It Works" },
  { href: "#phase1", label: "Phase 1" },
  { href: "#phase2", label: "Phase 2" },
  { href: "#about", label: "About" },
  { href: "#waitlist", label: "Waitlist" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/75 border-b border-white/5" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="shrink-0"><OrbitLogo /></a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#waitlist"
          className="text-sm font-semibold px-4 py-2 rounded-full bg-lime text-primary-foreground hover:opacity-90 transition shadow-[0_0_30px_-5px_rgba(163,230,53,0.6)]">
          Join Waitlist
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/tanushchokshi/" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full border border-white/10 grid place-items-center hover:border-lime hover:text-lime transition"><Linkedin className="h-4 w-4" /></a>
          <a href="https://tanush-chokshi.lovable.app" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full border border-white/10 grid place-items-center hover:border-lime hover:text-lime transition"><Globe className="h-4 w-4" /></a>
          <a href="https://github.com/techtanush" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full border border-white/10 grid place-items-center hover:border-lime hover:text-lime transition"><Github className="h-4 w-4" /></a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <OrbitLogo size={22} />
          <p className="text-xs text-muted-foreground">© 2026 Orbit AI</p>
        </div>
        <p className="text-xs text-muted-foreground italic text-center md:text-right">
          Don't bet on the age. Bet on the outcome.
        </p>
      </div>
    </footer>
  );
}

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 lime-radial" />
    </div>
  );
}
