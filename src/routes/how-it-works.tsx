import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Hand, Mic, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Orbit AI" },
      { name: "description", content: "Tap. Speak. Done. The three motions behind the first proactive AI." },
      { property: "og:title", content: "How it works — Orbit AI" },
      { property: "og:description", content: "Three motions. Zero friction." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  { icon: Hand, title: "Tap.", desc: "A single touch wakes Orbit. No apps. No friction. No menus to navigate." },
  { icon: Mic, title: "Speak.", desc: "Talk naturally. Orbit understands intent, context, and memory — the way a great assistant would." },
  { icon: CheckCircle2, title: "Done.", desc: "It acts across services, books, drafts, and reminds — proactively, without needing to be told twice." },
];

function HowItWorks() {
  useReveal();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">How it works</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">Three motions. Zero friction.</h1>
          <p className="mt-6 text-muted-foreground text-lg">Orbit collapses every workflow into three gestures. Everything else happens behind the scenes.</p>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal card-surface rounded-2xl p-8" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-lime/10 border border-lime/20 grid place-items-center text-lime">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
