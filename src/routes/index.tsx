import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { OrbitLogo, OrbitMark } from "@/components/OrbitLogo";
import { OrbitPin } from "@/components/OrbitPin";
import { ParticleField } from "@/components/ParticleField";
import {
  Hand, Mic, CheckCircle2, Route as RouteIcon, Eye, Brain, Zap, Send, ListTodo, Radar,
  Car, GraduationCap, MapPin, FileText, Bell, Linkedin, Github, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbit AI — The first AI that doesn't wait" },
      { name: "description", content: "Orbit AI is a proactive wearable AI pin. Say it. Show it. Orbit handles it." },
      { property: "og:title", content: "Orbit AI — The first AI that doesn't wait" },
      { property: "og:description", content: "A proactive wearable AI pin. Tap. Speak. Done." },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: Hand, title: "Tap.", desc: "A single touch wakes Orbit. No apps. No friction." },
  { icon: Mic, title: "Speak.", desc: "Talk naturally. Orbit understands intent, context, and memory." },
  { icon: CheckCircle2, title: "Done.", desc: "It acts across services, books, drafts, and reminds — proactively." },
];

const useCases = [
  { icon: Car, text: "Book me an Uber to school." },
  { icon: GraduationCap, text: "What's due tomorrow?" },
  { icon: MapPin, text: "Navigate to the library." },
  { icon: FileText, text: "Check my school portal and draft the assignment." },
  { icon: Bell, text: "Remind me about this when I get home." },
];

const agents = [
  { icon: RouteIcon, name: "Router Agent", desc: "Classifies intent and dispatches to the right agent in milliseconds." },
  { icon: Eye, name: "Vision Agent", desc: "Reads screens, documents, and the world through the pin's camera." },
  { icon: Brain, name: "Memory Agent", desc: "Long-term personal context — preferences, people, places, patterns." },
  { icon: Zap, name: "Execution Agent", desc: "Calls tools, APIs, and apps to actually get things done." },
  { icon: Send, name: "Dispatch Agent", desc: "Coordinates multi-step workflows across services in parallel." },
  { icon: ListTodo, name: "Task Agent", desc: "Tracks open loops and completes them without re-asking." },
  { icon: Radar, name: "Proactive Monitor", desc: "Watches signals and acts before you ask. The 'doesn't wait' part." },
];

const stats = [
  { v: "8", l: "AI products shipped" },
  { v: "Top 10", l: "Internationally in debate" },
  { v: "250+", l: "DebateSpark users" },
  { v: "UN", l: "United Nations pitch" },
];

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #c6f24a 0%, transparent 60%)" }} />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <OrbitLogo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#agents" className="hover:text-foreground transition">Architecture</a>
            <a href="#founder" className="hover:text-foreground transition">Founder</a>
            <a href="#waitlist" className="hover:text-foreground transition">Waitlist</a>
          </nav>
          <a href="#waitlist" className="text-sm font-medium px-4 py-2 rounded-full bg-lime text-primary-foreground hover:opacity-90 transition shadow-[0_0_30px_-5px_#c6f24a]">
            Join waitlist
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <ParticleField />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-28 md:pb-36 text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-glow-pulse" />
            Introducing Orbit AI
          </div>

          <h1 className="animate-fade-up text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Say it. Show it.<br />
            <span className="text-lime text-glow">Orbit handles it.</span>
          </h1>
          <p className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: "120ms" }}>
            The first AI that doesn't wait.
          </p>

          <div className="mt-16 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <OrbitPin />
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "360ms" }}>
            <a href="#waitlist" className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_60px_-5px_#c6f24a] transition-all">
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium hover:bg-white/[0.06] transition">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative py-28">
        <div className="mx-auto max-w-4xl px-6 text-center reveal">
          <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">The problem</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Every AI today is reactive.<br />
            <span className="text-muted-foreground">It sits there and waits.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            The average American opens <span className="text-foreground font-medium">18 apps a day</span> just to get things done.
            Orbit fixes that design failure at the root.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal">
            <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">How it works</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Three motions. Zero friction.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal card-surface rounded-2xl p-8" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-lime/10 border border-lime/20 grid place-items-center text-lime">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="relative py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal">
            <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">Use cases</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Just say the thing.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u, i) => (
              <div key={u.text} className="reveal card-surface rounded-2xl p-6 group hover:border-lime/30 transition" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-lime/10 border border-lime/20 grid place-items-center text-lime group-hover:scale-110 transition">
                    <u.icon className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-relaxed">"{u.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="agents" className="relative py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center reveal max-w-2xl mx-auto">
            <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">Technical architecture</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">A 7-agent system.</h2>
            <p className="mt-6 text-muted-foreground">
              Orbit's intelligence isn't one model — it's an orchestra of specialized agents, each tuned for one job, coordinated in real time.
            </p>
          </div>

          {/* Central diagram */}
          <div className="mt-16 relative reveal">
            <div className="mx-auto h-24 w-24 rounded-full bg-lime/10 border border-lime/30 grid place-items-center mb-8 animate-glow-pulse">
              <OrbitMark size={40} animated />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((a, i) => (
                <div key={a.name} className="reveal card-surface rounded-2xl p-6 hover:border-lime/30 transition" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-lime/10 border border-lime/20 grid place-items-center text-lime">
                      <a.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold">{a.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal card-surface rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-lime text-glow">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER — visually distinct */}
      <section id="founder" className="relative py-32 mt-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="mx-auto max-w-3xl px-6 text-center reveal">
          <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">About the founder</div>
          <div className="mt-10 mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-lime/30 to-white/5 border border-white/10 grid place-items-center text-3xl font-semibold">
            TC
          </div>
          <h2 className="mt-8 text-3xl md:text-4xl font-semibold tracking-tight">Tanush Chokshi</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tanush Chokshi is a 14-year-old AI builder from the Bay Area. TKS Velocity member.
            8 shipped products in under a year. Ranked top 10 internationally in debate.
            Currently building Orbit AI.
          </p>
          <a
            href="https://www.linkedin.com/in/tanushchokshi/"
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-5 py-2.5 text-sm font-medium transition"
          >
            <Linkedin className="h-4 w-4 text-[#0a66c2]" />
            Connect on LinkedIn
          </a>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="relative py-28">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center reveal">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Be the first to <span className="text-lime text-glow">wear the future.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Join the Orbit AI waitlist.</p>
          </div>

          <form
            className="reveal mt-12 card-surface rounded-2xl p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const params = new URLSearchParams();
              for (const [k, v] of fd.entries()) params.append(k, String(v));
              // Open Google Forms-compatible prefilled URL in a new tab as a fallback.
              window.open(`https://docs.google.com/forms/d/e/1FAIpQLSf-orbit-ai-waitlist/viewform?${params.toString()}`, "_blank");
              (e.currentTarget as HTMLFormElement).reset();
              alert("Thanks! You're on the Orbit AI waitlist.");
            }}
          >
            <Field label="Full Name" name="fullName" placeholder="Ada Lovelace" required />
            <Field label="Email Address" name="email" type="email" placeholder="you@domain.com" required />
            <div>
              <label className="text-sm font-medium">What best describes you?</label>
              <select name="role" required defaultValue=""
                className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition">
                <option value="" disabled>Select one…</option>
                <option>Student</option>
                <option>Founder</option>
                <option>Builder</option>
                <option>Professional</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">What's the one task you wish just happened automatically? <span className="text-muted-foreground font-normal">(optional)</span></label>
              <input name="dreamTask" placeholder="e.g. replying to emails"
                className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition" />
            </div>
            <button type="submit"
              className="w-full mt-2 rounded-xl bg-lime px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_70px_-5px_#c6f24a] transition-all">
              Join waitlist
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
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
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full rounded-xl bg-input border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-lime/50 focus:ring-2 focus:ring-lime/20 transition"
      />
    </div>
  );
}
