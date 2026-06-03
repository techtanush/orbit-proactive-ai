import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { OrbitPin } from "@/components/OrbitPin";
import { ParticleField } from "@/components/ParticleField";
import { ArrowRight, Hand, Mic, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbit AI — The first AI that doesn't wait" },
      { name: "description", content: "A proactive wearable AI pin. Say it. Show it. Orbit handles it." },
      { property: "og:title", content: "Orbit AI — The first AI that doesn't wait" },
      { property: "og:description", content: "A proactive wearable AI pin. Tap. Speak. Done." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <ParticleField />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-glow-pulse" />
              Introducing Orbit AI
            </div>

            <h1 className="animate-fade-up text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              Say it. Show it.<br />
              <span className="text-lime text-glow">Orbit handles it.</span>
            </h1>
            <p className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0" style={{ animationDelay: "120ms" }}>
              The first AI that doesn't wait.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <Link to="/waitlist" className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_60px_-5px_#c6f24a] transition-all">
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium hover:bg-white/[0.06] transition">
                See how it works
              </Link>
            </div>

            {/* Mini step preview */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "360ms" }}>
              {[{ i: Hand, l: "Tap" }, { i: Mic, l: "Speak" }, { i: CheckCircle2, l: "Done" }].map((s, idx) => (
                <div key={s.l} className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-lime/10 border border-lime/20 grid place-items-center text-lime">
                    <s.i className="h-3.5 w-3.5" />
                  </div>
                  <span>{s.l}</span>
                  {idx < 2 && <span className="text-white/20 mx-1">·</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="animate-fade-up" style={{ animationDelay: "180ms" }}>
            <OrbitPin />
          </div>
        </div>
      </div>
    </section>
  );
}
