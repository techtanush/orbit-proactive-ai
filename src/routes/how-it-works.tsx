import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/SiteChrome";
import { Hand, Mic, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Orbit AI" },
      { name: "description", content: "Tap. Speak. Done. The three motions behind the first proactive AI." },
      { property: "og:title", content: "How it works — Orbit AI" },
      { property: "og:description", content: "Three motions. Zero friction." },
      { property: "og:url", content: "/how-it-works" },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  { icon: Hand, title: "Tap.", desc: "A single touch wakes Orbit. No apps. No menus. No friction." },
  { icon: Mic, title: "Speak.", desc: "Talk naturally. Orbit understands intent, context, and memory — the way a great assistant would." },
  { icon: CheckCircle2, title: "Done.", desc: "It acts across services, books, drafts, and reminds — proactively, without needing to be told twice." },
];

function HowItWorks() {
  useReveal();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="How it works"
          title={<>Three motions. <span className="text-lime text-glow">Zero friction.</span></>}
          subtitle="Orbit collapses every workflow into three gestures. Everything else happens behind the scenes."
        />

        <div className="mt-20 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal card-surface rounded-2xl p-8 relative" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-lime/10 border border-lime/30 grid place-items-center text-lime shadow-[0_0_20px_-5px_#c6f24a]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">STEP 0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center reveal">
          <Link to="/use-cases" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_60px_-5px_#c6f24a] transition-all">
            See real use cases <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
