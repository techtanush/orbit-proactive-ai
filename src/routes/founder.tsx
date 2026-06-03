import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Linkedin } from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "About the founder — Tanush Chokshi" },
      { name: "description", content: "Tanush Chokshi is a 14-year-old AI builder from the Bay Area." },
      { property: "og:title", content: "About the founder — Tanush Chokshi" },
      { property: "og:description", content: "TKS Velocity member. 8 shipped products in under a year." },
    ],
  }),
  component: Founder,
});

const milestones = [
  { v: "14", l: "Years old" },
  { v: "8", l: "Products shipped in under a year" },
  { v: "Top 10", l: "Internationally in debate" },
  { v: "250+", l: "DebateSpark users" },
  { v: "UN", l: "United Nations pitch" },
  { v: "TKS", l: "Velocity member" },
];

function Founder() {
  useReveal();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">About the founder</div>

        <div className="mt-12 mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-lime/30 to-white/5 border border-white/10 grid place-items-center text-4xl font-semibold animate-float">
          TC
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-semibold tracking-tight">Tanush Chokshi</h1>
        <p className="mt-3 text-lime text-sm tracking-wide">Founder, Orbit AI</p>

        <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed">
          Tanush Chokshi is a 14-year-old AI builder from the Bay Area.
          TKS Velocity member. 8 shipped products in under a year.
          Ranked top 10 internationally in debate.
          Currently building Orbit AI.
        </p>

        <a
          href="https://www.linkedin.com/in/tanushchokshi/"
          target="_blank" rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-6 py-3 text-sm font-medium transition"
        >
          <Linkedin className="h-4 w-4 text-[#0a66c2]" />
          Connect on LinkedIn
        </a>
      </div>

      <div className="mx-auto max-w-5xl px-6 mt-24 reveal">
        <div className="card-surface rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          {milestones.map((m) => (
            <div key={m.l} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-lime text-glow">{m.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
