import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { OrbitPin } from "@/components/OrbitPin";
import { ParticleField } from "@/components/ParticleField";
import { Car, GraduationCap, MapPin, FileText, Bell, ArrowRight } from "lucide-react";

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

const useCases = [
  { icon: Car, text: "Book me an Uber to school." },
  { icon: GraduationCap, text: "What's due tomorrow?" },
  { icon: MapPin, text: "Navigate to the library." },
  { icon: FileText, text: "Check my school portal and draft the assignment." },
  { icon: Bell, text: "Remind me about this when I get home." },
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
    <>
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

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "360ms" }}>
            <Link to="/waitlist" className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_60px_-5px_#c6f24a] transition-all">
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium hover:bg-white/[0.06] transition">
              See how it works
            </Link>
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

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-6 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Be the first to <span className="text-lime text-glow">wear the future.</span>
          </h2>
          <Link to="/waitlist" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_60px_-5px_#c6f24a] transition-all">
            Join the waitlist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
