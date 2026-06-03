import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/SiteChrome";
import { OrbitMark } from "@/components/OrbitLogo";
import { Route as RouteIcon, Eye, Brain, Zap, Send, ListTodo, Radar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — Orbit AI" },
      { name: "description", content: "A 7-agent system powering the first proactive AI pin." },
      { property: "og:title", content: "Architecture — Orbit AI" },
      { property: "og:description", content: "Router, Vision, Memory, Execution, Dispatch, Task, and a Proactive Monitor." },
      { property: "og:url", content: "/architecture" },
    ],
  }),
  component: Architecture,
});

const agents = [
  { icon: RouteIcon, name: "Router Agent", desc: "Classifies intent and dispatches to the right agent in milliseconds." },
  { icon: Eye, name: "Vision Agent", desc: "Reads screens, documents, and the world through the pin's camera." },
  { icon: Brain, name: "Memory Agent", desc: "Long-term personal context — preferences, people, places, patterns." },
  { icon: Zap, name: "Execution Agent", desc: "Calls tools, APIs, and apps to actually get things done." },
  { icon: Send, name: "Dispatch Agent", desc: "Coordinates multi-step workflows across services in parallel." },
  { icon: ListTodo, name: "Task Agent", desc: "Tracks open loops and completes them without re-asking." },
  { icon: Radar, name: "Proactive Monitor", desc: "Watches signals and acts before you ask. The 'doesn't wait' part." },
];

function Architecture() {
  useReveal();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Technical architecture"
          title={<>A <span className="text-lime text-glow">7-agent</span> system.</>}
          subtitle="Orbit's intelligence isn't one model — it's an orchestra of specialized agents, each tuned for one job, coordinated in real time."
        />

        <div className="mt-20 relative reveal">
          {/* Central core */}
          <div className="mx-auto h-32 w-32 rounded-full bg-lime/10 border border-lime/30 grid place-items-center mb-12 animate-glow-pulse relative">
            <OrbitMark size={56} animated />
            <div className="absolute inset-0 rounded-full border border-lime/20 animate-orbit-spin" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((a, i) => (
              <div key={a.name} className="reveal card-surface rounded-2xl p-6 hover:border-lime/30 hover:-translate-y-0.5 transition-all group" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-lime/10 border border-lime/20 grid place-items-center text-lime group-hover:bg-lime group-hover:text-primary-foreground transition">
                    <a.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold">{a.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(3)].map((_, k) => (
                    <span key={k} className="h-0.5 flex-1 rounded-full bg-lime/20 group-hover:bg-lime/60 transition" style={{ transitionDelay: `${k * 60}ms` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center reveal">
          <Link to="/founder" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium hover:bg-white/[0.06] transition">
            Meet the founder <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
