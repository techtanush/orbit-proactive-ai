export function OrbitMark({ size = 28, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      <defs>
        <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e6ff8a" />
          <stop offset="60%" stopColor="#c6f24a" />
          <stop offset="100%" stopColor="#7fbf1f" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="18" stroke="white" strokeOpacity="0.85" strokeWidth="1.2" />
      <circle
        cx="20" cy="20" r="13"
        stroke="#c6f24a" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="2 4"
        className={animated ? "origin-center [transform-box:fill-box] animate-orbit-spin" : ""}
      />
      <circle cx="20" cy="20" r="5" fill="url(#orbCore)" />
      <circle cx="20" cy="20" r="5" fill="url(#orbCore)" opacity="0.6"
        className={animated ? "animate-glow-pulse" : ""} />
    </svg>
  );
}

export function OrbitLogo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <OrbitMark size={size} />
      <span className="text-[15px] font-semibold tracking-tight">
        Orbit<span className="text-lime"> AI</span>
      </span>
    </div>
  );
}
