import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/SiteChrome";
import { Car, GraduationCap, MapPin, FileText, Bell, ArrowRight, Mic } from "lucide-react";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use cases — Orbit AI" },
      { name: "description", content: "Real things Orbit does for real people. Tap. Speak. Done." },
      { property: "og:title", content: "Use cases — Orbit AI" },
      { property: "og:description", content: "Just say the thing. Orbit handles it." },
      { property: "og:url", content: "/use-cases" },
    ],
  }),
  component: UseCases,
});

const cases = [
  { icon: Car, text: "Book me an Uber to school.", detail: "Pulls your usual pickup, confirms ETA, books in one tap." },
  { icon: GraduationCap, text: "What's due tomorrow?", detail: "Reads your portals, ranks by due time, reads it back." },
  { icon: MapPin, text: "Navigate to the library.", detail: "Hands the route to your phone, tracks your ETA silently." },
  { icon: FileText, text: "Check my school portal and draft the assignment.", detail: "Logs in, pulls the prompt, drafts a first pass in your voice." },
  { icon: Bell, text: "Remind me about this when I get home.", detail: "Geo-fenced, context-aware. Never another sticky note." },
];

function UseCases() {
  useReveal();
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Use cases"
          title={<>Just say the <span className="text-lime text-glow">thing.</span></>}
          subtitle="Real prompts from real Orbit testers. Tap to expand."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-4">
          {/* List */}
          <div className="lg:col-span-3 space-y-3 reveal">
            {cases.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.text}
                  onClick={() => setActive(i)}
                  className={`w-full text-left card-surface rounded-2xl p-5 transition-all group ${
                    isActive ? "border-lime/40 bg-lime/[0.03] shadow-[0_0_40px_-15px_#c6f24a]" : "hover:border-white/15"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 shrink-0 rounded-lg grid place-items-center transition ${
                      isActive ? "bg-lime text-primary-foreground" : "bg-lime/10 border border-lime/20 text-lime"
                    }`}>
                      <c.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium">"{c.text}"</p>
                      <div className={`grid transition-all overflow-hidden ${isActive ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"}`}>
                        <p className="overflow-hidden text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mock voice card */}
          <div className="lg:col-span-2 reveal">
            <div className="sticky top-24 card-surface rounded-3xl p-8">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-lime animate-glow-pulse" /> Listening
              </div>
              <div className="mt-6 text-2xl font-medium leading-snug">"{cases[active].text}"</div>

              {/* Audio waveform */}
              <div className="mt-8 flex items-end gap-1 h-16">
                {[...Array(28)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-lime rounded-full animate-glow-pulse"
                    style={{
                      height: `${20 + Math.abs(Math.sin(i * 0.5 + active)) * 80}%`,
                      animationDelay: `${i * 0.05}s`,
                      opacity: 0.4 + (i % 3) * 0.2,
                    }}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
                <span>Orbit • 0.3s</span>
                <div className="flex items-center gap-2 text-lime">
                  <Mic className="h-3.5 w-3.5" /> Voice
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <Link to="/architecture" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium hover:bg-white/[0.06] transition">
            See the architecture behind it <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
