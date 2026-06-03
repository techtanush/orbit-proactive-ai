import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { OrbitMark } from "@/components/OrbitLogo";
import { Route as RouteIcon, Eye, Brain, Zap, Send, ListTodo, Radar } from "lucide-react";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — Orbit AI" },
      { name: "description", content: "A 7-agent system powering the first proactive AI pin." },
      { property: "og:title", content: "Architecture — Orbit AI" },
      { property: "og:description", content: "Router, Vision, Memory, Execution, Dispatch, Task, and a Proactive Monitor." },
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
        <div className="text-center reveal max-w-2xl mx-auto">
          <div className="text-xs font-medium text-lime tracking-[0.2em] uppercase">Technical architecture</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">A 7-agent system.</h1>
          <p className="mt-6 text-muted-foreground text-lg">
            Orbit's intelligence isn't one model — it's an orchestra of specialized agents, each tuned for one job, coordinated in real time.
          </p>
        </div>

        <div className="mt-16 reveal">
          <div className="mx-auto h-28 w-28 rounded-full bg-lime/10 border border-lime/30 grid place-items-center mb-10 animate-glow-pulse">
            <OrbitMark size={48} animated />
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
  );
}
