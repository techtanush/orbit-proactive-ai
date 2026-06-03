/**
 * Hero pin — a Saturn-like planet with rotating tilted rings, lime glow.
 * Matches the brand mark shape but scaled up and animated.
 */
export function OrbitPin() {
  return (
    <div className="relative mx-auto h-[340px] w-[340px] md:h-[440px] md:w-[440px]">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70 animate-glow-pulse"
        style={{ background: "radial-gradient(circle, #c6f24a 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-12 rounded-full blur-2xl opacity-50"
        style={{ background: "radial-gradient(circle, #c6f24a 0%, transparent 70%)" }}
      />

      {/* Star particles */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/70 animate-glow-pulse"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Saturn graphic */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-float">
        <defs>
          <radialGradient id="heroPlanet" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#eaff8c" />
            <stop offset="55%" stopColor="#c6f24a" />
            <stop offset="100%" stopColor="#6fa516" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c6f24a" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#eaff8c" stopOpacity="1" />
            <stop offset="100%" stopColor="#c6f24a" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer rotating dashed orbit */}
        <g transform="translate(100 105) rotate(-22)" className="origin-center animate-orbit-spin">
          <ellipse cx="0" cy="0" rx="92" ry="22" fill="none" stroke="#c6f24a" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 6" />
        </g>

        {/* Back half ring */}
        <g transform="translate(100 105) rotate(-22)">
          <path d="M -85 0 A 85 20 0 0 1 85 0" stroke="url(#ringGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>

        {/* Planet */}
        <circle cx="100" cy="92" r="42" fill="url(#heroPlanet)" />
        <circle cx="100" cy="92" r="42" fill="#c6f24a" opacity="0.15" />
        {/* Highlight */}
        <ellipse cx="86" cy="78" rx="14" ry="9" fill="#ffffff" opacity="0.35" />

        {/* Front half ring */}
        <g transform="translate(100 105) rotate(-22)">
          <path d="M -85 0 A 85 20 0 0 0 85 0" stroke="url(#ringGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
        </g>

        {/* Second dashed orbit, reverse */}
        <g transform="translate(100 105) rotate(-22)" className="origin-center animate-orbit-spin-reverse">
          <ellipse cx="0" cy="0" rx="78" ry="14" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.8" strokeDasharray="2 5" />
        </g>
      </svg>
    </div>
  );
}
