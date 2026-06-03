import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PageHeader } from "@/components/SiteChrome";
import { Linkedin, ArrowRight } from "lucide-react";
import tanushPhoto from "@/assets/tanush.png.asset.json";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "About the founder — Tanush Chokshi" },
      { name: "description", content: "Tanush Chokshi is a 14-year-old AI builder from the Bay Area. TKS Velocity member. 8 shipped products in under a year." },
      { property: "og:title", content: "About the founder — Tanush Chokshi" },
      { property: "og:description", content: "14 years old. TKS Velocity. 8 shipped products. Top 10 internationally in debate." },
      { property: "og:image", content: tanushPhoto.url },
      { property: "og:url", content: "/founder" },
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
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow="About the founder" title={<>Tanush <span className="text-lime text-glow">Chokshi</span></>} />

        <div className="mt-16 grid md:grid-cols-5 gap-10 items-center">
          {/* Photo */}
          <div className="md:col-span-2 reveal">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-4 rounded-3xl bg-lime/20 blur-2xl opacity-50 animate-glow-pulse" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-lime/30 shadow-[0_0_60px_-15px_#c6f24a]">
                <img
                  src={tanushPhoto.url}
                  alt="Tanush Chokshi, founder of Orbit AI"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                {/* Subtle lime overlay for cohesion */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[0_0_30px_#c6f24a]">
                Founder
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 reveal" style={{ transitionDelay: "120ms" }}>
            <p className="text-lime text-sm tracking-[0.2em] uppercase font-medium">Founder, Orbit AI</p>
            <p className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
              Tanush Chokshi is a 14-year-old AI builder from the Bay Area.
              TKS Velocity member. 8 shipped products in under a year.
              Ranked top 10 internationally in debate.
              Currently building Orbit AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/tanushchokshi/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-5px_#c6f24a] hover:shadow-[0_0_50px_-5px_#c6f24a] transition-all"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
              <Link to="/waitlist" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium hover:bg-white/[0.06] transition">
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-24 reveal card-surface rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
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
