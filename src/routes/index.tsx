import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { OrbitMark } from "@/components/OrbitLogo";
import { ParticleField } from "@/components/ParticleField";
import tanushPhoto from "@/assets/tanush.png.asset.json";
import {
  ArrowRight, Hand, Mic, Sparkles, CheckCircle2, Eye, Car, Calendar, MessageSquare,
  Star, Laptop, Linkedin, Globe, Github, Zap, Radar, ArrowDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbit AI — The AI that already knows" },
      { name: "description", content: "Orbit is a proactive intelligence layer that observes your context, understands your life, and acts before you think to ask." },
      { property: "og:title", content: "Orbit AI — The AI that already knows" },
      { property: "og:description", content: "A proactive intelligence layer. Your personal chief of staff. For everyone." },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <div id="top">
      <Hero />
      <Problem />
      <Vision />
      <HowItWorks />
      <Phase1 />
      <Phase2 />
      <UseCases />
      <About />
      <Waitlist />
    </div>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <ParticleField />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 lime-radial" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center w-full">
        <div className="animate-fade-in inline-flex mb-8 mx-auto"><OrbitMark size={72} animated /></div>
        <h1 className="animate-fade-up text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
          The AI that <span className="text-lime text-glow">already knows.</span>
        </h1>
        <p className="animate-fade-up mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "150ms" }}>
          Orbit is a proactive intelligence layer that observes your context, understands your life,
          and acts before you think to ask. Your personal chief of staff. For everyone.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "280ms" }}>
          <a href="#waitlist" className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-5px_rgba(163,230,53,0.6)] hover:shadow-[0_0_60px_-5px_rgba(163,230,53,0.9)] transition-all">
            Join the Waitlist <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition">
            See How It Works
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 animate-fade-up" style={{ animationDelay: "420ms" }}>
          {[
            "12 waitlist signups · zero marketing",
            "8 AI products shipped",
            "United Nations pitch · top 5 globally",
          ].map((s) => (
            <span key={s} className="text-xs md:text-sm px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}

/* ───────── PROBLEM ───────── */
function Problem() {
  const apps = ["📧","📅","🚗","💬","🍔","🎵","🛒","🏦","📷","🗺️","✈️","📰","🎮","💼","📺","🔔","📝","☁️"];
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal text-center text-4xl md:text-6xl font-semibold tracking-tight">
          Every AI today <span className="text-lime text-glow">waits to be asked.</span>
        </h2>

        <div className="reveal mt-16 grid md:grid-cols-2 gap-6">
          {/* Left: chaos */}
          <div className="card-surface rounded-3xl p-8 relative overflow-hidden">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Today</p>
            <p className="mt-2 text-xl font-semibold">18 apps. Zero coordination.</p>
            <div className="mt-8 grid grid-cols-6 gap-2">
              {apps.map((a, i) => (
                <div key={i} className="aspect-square rounded-xl bg-white/[0.04] border border-white/10 grid place-items-center text-lg animate-glow-pulse"
                  style={{ animationDelay: `${(i % 6) * 0.15}s` }}>
                  {a}
                </div>
              ))}
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 400" fill="none">
              {[...Array(10)].map((_, i) => (
                <line key={i} x1={Math.random()*400} y1={Math.random()*400} x2={Math.random()*400} y2={Math.random()*400}
                  stroke="white" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="2 4" />
              ))}
            </svg>
          </div>
          {/* Right: orbit */}
          <div className="card-surface rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-lime">With Orbit</p>
            <p className="mt-2 text-xl font-semibold">One voice. Done.</p>
            <div className="relative mt-10 h-48 w-48 grid place-items-center">
              <div className="absolute inset-0 rounded-full blur-2xl lime-radial opacity-60" />
              <div className="relative h-32 w-32 rounded-full border-2 border-lime grid place-items-center animate-glow-pulse">
                <OrbitMark size={56} animated />
              </div>
              {[0,1,2].map(i => (
                <div key={i} className="absolute inset-0 rounded-full border border-lime/30 animate-glow-pulse" style={{ animationDelay: `${i*0.6}s`, transform: `scale(${1 + i*0.25})` }} />
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">"Book me an Uber to school." → Done.</p>
          </div>
        </div>

        <p className="reveal mt-14 max-w-3xl mx-auto text-center text-lg md:text-xl text-muted-foreground leading-relaxed">
          The average American opens <span className="text-foreground font-semibold">18 different apps a day</span> just to get things done.
          The human is still doing all the routing. <span className="text-lime">That is the design failure Orbit fixes.</span>
        </p>
      </div>
    </section>
  );
}

/* ───────── VISION ───────── */
function Vision() {
  const eras = [
    { year: "1984", name: "Personal Computer", line: "Intelligence moved from institutions to desks", here: false },
    { year: "2007", name: "iPhone", line: "Intelligence moved from desks to pockets", here: false },
    { year: "2025", name: "Orbit", line: "Intelligence moves from pockets into your life", here: true },
  ];
  return (
    <section id="vision" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal text-center text-4xl md:text-6xl font-semibold tracking-tight">
          Every decade, <span className="text-lime text-glow">the interface changes.</span>
        </h2>

        <div className="relative mt-20">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="grid md:grid-cols-3 gap-8">
            {eras.map((e, i) => (
              <div key={e.year} className="reveal relative text-center" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="mx-auto h-6 w-6 rounded-full grid place-items-center mb-6 relative">
                  <span className={`h-3 w-3 rounded-full ${e.here ? "bg-lime shadow-[0_0_20px_#A3E635]" : "bg-white/40"}`} />
                  {e.here && <span className="absolute inset-0 rounded-full border border-lime animate-glow-pulse" />}
                </div>
                <div className={`text-3xl md:text-4xl font-semibold ${e.here ? "text-lime text-glow" : ""}`}>{e.year}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{e.name}</div>
                <p className="mt-4 text-base text-foreground/90 max-w-xs mx-auto">{e.line}</p>
                {e.here && (
                  <span className="inline-block mt-4 text-[10px] font-bold tracking-[0.3em] text-lime border border-lime rounded-full px-3 py-1">
                    WE ARE HERE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="reveal mt-24 text-center text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
          The next interface does not wait to be opened.<br />
          <span className="text-lime text-glow">It already knows.</span>
        </p>
      </div>
    </section>
  );
}

/* ───────── HOW IT WORKS ───────── */
function HowItWorks() {
  const onDemand = [
    { icon: Hand, label: "TAP", desc: "Wake Orbit" },
    { icon: Mic, label: "SPEAK", desc: "Natural language" },
    { icon: Sparkles, label: "ORBIT THINKS", desc: "Plans the chain" },
    { icon: CheckCircle2, label: "CONFIRM", desc: "Quick approval" },
    { icon: Zap, label: "DONE", desc: "Real execution" },
  ];
  const proactive = [
    { icon: Eye, label: "ORBIT OBSERVES", desc: "Calendar, memory, context" },
    { icon: Radar, label: "SCORES SIGNALS", desc: "What deserves action" },
    { icon: Zap, label: "ACTS", desc: "Asks or executes" },
  ];
  return (
    <section id="how" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal text-center text-4xl md:text-6xl font-semibold tracking-tight">
          One loop. Two modes. <span className="text-lime text-glow">Zero friction.</span>
        </h2>

        {/* Mode 1 */}
        <div className="mt-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-lime border border-lime/40 rounded-full px-3 py-1">MODE 01</span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">On Demand</span>
          </div>
          <Flow nodes={onDemand} />
        </div>

        {/* Mode 2 */}
        <div className="mt-20 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-[0.3em] text-lime border border-lime/40 rounded-full px-3 py-1">MODE 02</span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Proactive</span>
            <span className="ml-auto text-xs italic text-muted-foreground">No trigger needed. Orbit already knew.</span>
          </div>
          <Flow nodes={proactive} dashed />
        </div>
      </div>
    </section>
  );
}

function Flow({ nodes, dashed }: { nodes: { icon: any; label: string; desc: string }[]; dashed?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-3 items-stretch"
      style={{ gridTemplateColumns: `repeat(${nodes.length}, minmax(0,1fr))` }}>
      {nodes.map((n, i) => (
        <div key={n.label} className="relative">
          <div className="card-surface rounded-2xl p-5 h-full hover:border-lime/40 transition-all group">
            <div className={`h-10 w-10 rounded-xl grid place-items-center border ${dashed ? "border-dashed border-lime/50" : "border-lime/40"} bg-lime/5 text-lime`}>
              <n.icon className="h-4 w-4" />
            </div>
            <p className="mt-4 text-sm font-bold tracking-wider">{n.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{n.desc}</p>
          </div>
          {i < nodes.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 z-10">
              <ArrowRight className={`h-4 w-4 text-lime ${dashed ? "opacity-60" : ""}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ───────── PHASE 1 ───────── */
function Phase1() {
  const apps = [
    { name: "Uber", emoji: "🚗" },
    { name: "Calendar", emoji: "📅" },
    { name: "Gmail", emoji: "✉️" },
    { name: "Maps", emoji: "🗺️" },
    { name: "Reminders", emoji: "🔔" },
    { name: "Yelp", emoji: "⭐" },
  ];
  return (
    <section id="phase1" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center">
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-primary-foreground bg-lime rounded-full px-4 py-1.5 shadow-[0_0_30px_-5px_rgba(163,230,53,0.6)]">
            PHASE 1 — NOW
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            The Orbit Intelligence Layer.<br />
            <span className="text-lime text-glow">On the iPhone you already have.</span>
          </h2>
        </div>

        {/* iPhone + connections */}
        <div className="reveal mt-20 relative h-[480px] md:h-[560px]">
          <div className="absolute inset-0 grid place-items-center">
            <IPhoneMock />
          </div>
          {apps.map((a, i) => {
            const angle = (i / apps.length) * 2 * Math.PI - Math.PI / 2;
            const rx = 38, ry = 42;
            const left = 50 + Math.cos(angle) * rx;
            const top = 50 + Math.sin(angle) * ry;
            return (
              <div key={a.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${left}%`, top: `${top}%` }}>
                <div className="card-surface rounded-2xl px-3 py-2 flex items-center gap-2 hover:border-lime/40 transition">
                  <span className="text-lg">{a.emoji}</span>
                  <span className="text-xs font-medium">{a.name}</span>
                </div>
              </div>
            );
          })}
          {/* connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {apps.map((_, i) => {
              const angle = (i / apps.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 38;
              const y = 50 + Math.sin(angle) * 42;
              return (
                <g key={i}>
                  <line x1="50" y1="50" x2={x} y2={y} stroke="#A3E635" strokeOpacity="0.25" strokeWidth="0.2" strokeDasharray="0.6 0.6" />
                  <circle r="0.6" fill="#A3E635">
                    <animateMotion dur={`${2 + i * 0.4}s`} repeatCount="indefinite" path={`M 50 50 L ${x} ${y}`} />
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            { title: "Siri Native", body: "Say 'Hey Siri, book me an Uber through Orbit' and it's done. Built on Apple App Intents — the same framework as Claude and Fantastical. No special setup." },
            { title: "Real Execution", body: "Orbit doesn't answer questions. It does things. Real Uber bookings. Real calendar events. Real messages sent. Through real OAuth APIs." },
            { title: "Proactive Intelligence", body: "Orbit monitors your calendar, memory, and location in the background. Meeting in 12 minutes? It asks if you want a ride before you think to." },
          ].map((c, i) => (
            <div key={c.title} className="reveal card-surface rounded-2xl p-7 hover:-translate-y-1 hover:border-lime/40 transition-all" style={{ transitionDelay: `${i*100}ms` }}>
              <h3 className="text-lg font-semibold text-lime">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 card-surface rounded-2xl p-7 border-lime/30">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/40 grid place-items-center text-lime shrink-0">
              <Laptop className="h-5 w-5" />
            </div>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
              For tasks that need deeper automation — checking a school portal, filling a form, handling anything behind a login —
              Orbit pairs with your laptop via QR code and dispatches a desktop agent to handle it in the background.
              <span className="text-lime"> Claude Dispatch, but taken to the next level.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IPhoneMock() {
  return (
    <div className="relative w-[230px] md:w-[260px] aspect-[9/19] rounded-[44px] border-[10px] border-neutral-800 bg-black shadow-[0_30px_80px_-20px_rgba(163,230,53,0.35),0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 bg-black rounded-full z-10" />
      <div className="absolute inset-0 rounded-[34px] overflow-hidden flex flex-col items-center justify-between p-5 pt-10">
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-glow-pulse" /> Orbit
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl lime-radial opacity-80" />
            <div className="relative h-20 w-20 rounded-full border-2 border-lime grid place-items-center animate-glow-pulse">
              <OrbitMark size={36} />
            </div>
          </div>
          <div className="flex items-end gap-0.5 h-6">
            {[3,7,5,9,6,11,4,8,5,7].map((h,i) => (
              <span key={i} className="w-0.5 bg-lime rounded-full animate-glow-pulse" style={{ height: `${h*2}px`, animationDelay: `${i*0.08}s` }} />
            ))}
          </div>
        </div>
        <div className="w-full card-surface rounded-xl p-3 text-left">
          <p className="text-[9px] uppercase tracking-widest text-lime">Confirm</p>
          <p className="text-[11px] mt-1 text-foreground/90">Book UberX to Lincoln HS — $12.40</p>
          <div className="flex gap-1 mt-2">
            <button className="flex-1 text-[10px] py-1 rounded-md bg-lime text-primary-foreground font-semibold">Yes</button>
            <button className="flex-1 text-[10px] py-1 rounded-md border border-white/20">No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── PHASE 2 ───────── */
function Phase2() {
  return (
    <section id="phase2" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center">
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-muted-foreground border border-white/15 rounded-full px-4 py-1.5">
            PHASE 2 — AFTER VALIDATION
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            Then we put it <span className="text-lime text-glow">on your shirt.</span>
          </h2>
        </div>

        <div className="reveal mt-16 grid md:grid-cols-3 gap-6">
          {["front","back","side"].map((view, i) => (
            <div key={view} className="card-surface rounded-3xl p-8 grid place-items-center aspect-square hover:-translate-y-1 transition-all" style={{ transitionDelay: `${i*120}ms` }}>
              <PinRender view={view as any} />
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{view}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <div className="card-surface rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-lime">Same intelligence. New form factor.</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Ambient camera vision",
                "Always-on proactive observation",
                "Physical confirmation card on circular OLED",
                "Push-to-talk button",
                "LED privacy indicators",
              ].map(t => (
                <li key={t} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-lime" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-center gap-2 text-lime">
            <ArrowRight className="h-6 w-6" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center max-w-[140px]">validated by traction</span>
          </div>
          <div className="card-surface rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-lime">Why Phase 1 first.</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every great hardware company validated software first. Nest. Fitbit.
              The intelligence layer proves demand. The hardware delivers the ultimate experience.
              <span className="text-foreground"> Orbit earns its way to your shirt.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinRender({ view }: { view: "front" | "back" | "side" }) {
  if (view === "side") {
    return (
      <div className="relative">
        <div className="h-3 w-32 rounded-full bg-gradient-to-r from-neutral-700 via-neutral-300 to-neutral-700 shadow-[0_0_30px_-5px_rgba(163,230,53,0.4)]" />
      </div>
    );
  }
  return (
    <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 grid place-items-center shadow-[0_0_60px_-10px_rgba(163,230,53,0.5)]">
      <div className="absolute inset-2 rounded-full bg-black grid place-items-center">
        {view === "front" ? (
          <div className="text-center">
            <p className="text-[7px] uppercase tracking-widest text-lime">Confirm</p>
            <p className="text-[8px] mt-1 px-2 text-foreground/90 leading-tight">Send "be late" to Mom?</p>
            <div className="mt-1 flex justify-center gap-1">
              <span className="h-1 w-3 rounded-full bg-lime" />
              <span className="h-1 w-3 rounded-full bg-white/20" />
            </div>
          </div>
        ) : (
          <div className="h-6 w-6 rounded-full border-2 border-neutral-500 grid place-items-center">
            <div className="h-2 w-2 rounded-full bg-lime/60" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────── USE CASES ───────── */
function UseCases() {
  const cases = [
    { icon: Car, trigger: "Hey Siri, book me an Uber to school", result: "Uber API fires. Fare confirmed. Ride dispatched.", tag: "Uber API" },
    { icon: Calendar, trigger: "Hey Siri, what do I have today", result: "Calendar read. Summarized. Spoken back naturally.", tag: "Google Calendar" },
    { icon: Eye, trigger: "Proactive: no trigger", result: "Essay due at 8am. Want me to block 2 hours tonight?", tag: "Proactive Monitor" },
    { icon: MessageSquare, trigger: "Hey Siri, tell Mom I will be late", result: "Message drafted. Confirmed. Sent.", tag: "Messages API" },
    { icon: Star, trigger: "Hey Siri, check this restaurant", result: "Ratings, hours, wait time pulled and spoken.", tag: "Google Places + Yelp" },
    { icon: Laptop, trigger: "Check my school portal for assignments", result: "QR-paired desktop agent logs in, finds tasks, reports back.", tag: "Desktop Dispatch" },
  ];
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="reveal text-center text-4xl md:text-6xl font-semibold tracking-tight">
          What Orbit <span className="text-lime text-glow">actually does.</span>
        </h2>
        <p className="reveal mt-5 text-center text-muted-foreground text-lg">Not concepts. Real executions. Real APIs.</p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div key={i} className="reveal group card-surface rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_0_60px_-20px_rgba(163,230,53,0.5)] transition-all" style={{ transitionDelay: `${i*70}ms` }}>
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full lime-radial opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-lime/10 border border-lime/30 grid place-items-center text-lime">
                  <c.icon className="h-4 w-4" />
                </div>
                <p className="mt-5 text-sm italic text-muted-foreground">"{c.trigger}"</p>
                <p className="mt-3 text-base font-semibold leading-snug">{c.result}</p>
                <span className="mt-5 inline-block text-[10px] font-medium tracking-wider uppercase text-lime border border-lime/30 rounded-full px-2.5 py-1">
                  {c.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── ABOUT ───────── */
function About() {
  const creds = [
    "TKS Velocity member — world's most selective youth innovation program, under 1% acceptance",
    "8 AI products shipped in under a year",
    "Ranked top 10 internationally in Speech and Debate",
    "8-agent system pitched to the United Nations — top 5 of 500+ globally",
    "Cold emailed his way into OCP Global Summit — one of youngest of 11,000+ attendees",
    "People's Choice Award — TKS SF Moonshot presentations for Roboscale",
    "Selected for TKS SF showcase at UCSF — student panel speaker",
  ];
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="reveal text-center text-4xl md:text-6xl font-semibold tracking-tight">The Builder</h2>

        <div className="reveal mt-16 card-surface rounded-3xl p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-10 items-start">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-full blur-2xl lime-radial opacity-60" />
            <img src={tanushPhoto.url} alt="Tanush Chokshi" className="relative h-40 w-40 md:h-48 md:w-48 rounded-full object-cover border-2 border-lime shadow-[0_0_40px_-5px_rgba(163,230,53,0.5)]" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Tanush Chokshi</h3>
            <p className="text-sm text-muted-foreground">14 years old · Bay Area, CA</p>
            <ul className="mt-6 space-y-3">
              {creds.map(c => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-lime shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/tanushchokshi/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-full border border-white/15 px-4 py-2 hover:border-lime hover:text-lime transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://tanush-chokshi.lovable.app" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-full border border-white/15 px-4 py-2 hover:border-lime hover:text-lime transition">
                <Globe className="h-4 w-4" /> Personal Site
              </a>
              <a href="https://github.com/techtanush" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm rounded-full border border-white/15 px-4 py-2 hover:border-lime hover:text-lime transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <blockquote className="reveal mt-16 text-center font-serif italic text-2xl md:text-4xl leading-snug text-foreground/90 max-w-3xl mx-auto">
          "Don't bet on the age or titles. Bet on the shipped products, speed, drive, level of ideas, and outcome."
        </blockquote>
      </div>
    </section>
  );
}

/* ───────── WAITLIST ───────── */
function Waitlist() {
  return (
    <section id="waitlist" className="relative py-32 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 lime-radial" />
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-tight">
          Be the first to <span className="text-lime text-glow">experience Orbit.</span>
        </h2>
        <p className="reveal mt-5 text-muted-foreground text-lg">
          Sign up to get the latest updates, early access, and product launches.
        </p>
        <p className="reveal mt-3 text-sm text-lime">Join 12+ builders already on the list.</p>

        <div className="reveal mt-10 rounded-3xl p-1 bg-gradient-to-br from-lime/60 via-lime/20 to-transparent shadow-[0_0_80px_-20px_rgba(163,230,53,0.6)]">
          <div className="rounded-[22px] overflow-hidden bg-background">
            <iframe
              src="https://forms.gle/ZC8CZNEgHDUgj1rV9"
              title="Orbit AI Waitlist"
              width="100%"
              height="900"
              className="w-full"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
