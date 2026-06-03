import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/SiteChrome";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Problem — Orbit AI" },
      { name: "description", content: "Every AI today is reactive. It sits there and waits. Orbit fixes that design failure at the root." },
      { property: "og:title", content: "The Problem — Orbit AI" },
      { property: "og:description", content: "18 apps a day. One pin. The end of reactive AI." },
      { property: "og:url", content: "/problem" },
    ],
  }),
  component: Problem,
});

function Problem() {
  useReveal();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="The problem"
          title={<>Every AI today is reactive.<br /><span className="text-muted-foreground">It sits there and waits.</span></>}
          subtitle="Orbit fixes that design failure at the root."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-4 reveal">
          <Stat big="18" label="Apps the average American opens every day — just to get things done." />
          <Stat big="0" label="AI assistants that act before you ask. Until now." accent />
          <Stat big="1" label="Tap to launch the most ambitious AI workflow." />
        </div>

        <div className="mt-16 reveal card-surface rounded-3xl p-8 md:p-12">
          <p className="text-lg md:text-2xl leading-relaxed text-foreground/90">
            "The average American opens <span className="text-lime font-semibold">18 apps a day</span> just to get things done.
            Every assistant on the market today waits for you to ask. Orbit doesn't.
            It's the first AI designed around <span className="text-lime">intent</span>, not interface."
          </p>
        </div>

        <div className="mt-12 text-center reveal">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_#c6f24a] hover:shadow-[0_0_60px_-5px_#c6f24a] transition-all">
            See how Orbit works <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({ big, label, accent }: { big: string; label: string; accent?: boolean }) {
  return (
    <div className="card-surface rounded-2xl p-8 text-center">
      <div className={`text-6xl md:text-7xl font-semibold tracking-tight ${accent ? "text-lime text-glow" : "text-foreground"}`}>{big}</div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{label}</p>
    </div>
  );
}
