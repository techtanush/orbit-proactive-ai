export function OrbitPin() {
  return (
    <div className="relative mx-auto h-[360px] w-[360px] md:h-[460px] md:w-[460px]">
      {/* Glow halos */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-60 animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #c6f24a 0%, transparent 60%)" }} />
      <div className="absolute inset-8 rounded-full blur-2xl opacity-40"
        style={{ background: "radial-gradient(circle, #c6f24a 0%, transparent 70%)" }} />

      {/* Rotating dashed orbits */}
      <div className="absolute inset-0 rounded-full border border-white/10 animate-orbit-spin" />
      <div className="absolute inset-6 rounded-full border border-dashed border-lime/30 animate-orbit-spin-reverse" />
      <div className="absolute inset-14 rounded-full border border-white/10 animate-orbit-spin" />

      {/* Orbiting dots */}
      <div className="absolute inset-0 animate-orbit-spin">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-2 w-2 rounded-full bg-lime shadow-[0_0_20px_#c6f24a]" />
      </div>
      <div className="absolute inset-6 animate-orbit-spin-reverse">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/80" />
      </div>

      {/* Core pin */}
      <div className="absolute inset-1/3 rounded-full animate-float"
        style={{
          background: "radial-gradient(circle at 35% 30%, #e6ff8a, #c6f24a 45%, #6fa516 100%)",
          boxShadow: "0 0 60px #c6f24a, inset 0 -10px 30px rgba(0,0,0,0.4), inset 0 6px 18px rgba(255,255,255,0.4)",
        }}>
        <div className="absolute inset-3 rounded-full border border-white/30" />
        <div className="absolute top-3 left-4 h-3 w-3 rounded-full bg-white/70 blur-[2px]" />
      </div>
    </div>
  );
}
