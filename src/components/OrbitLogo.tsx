/**
 * Orbit AI mark — a solid hemisphere/sphere inside a tilted elliptical ring.
 * Clean geometric, white on dark.
 */
export function OrbitMark({ size = 32, animated = false }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Orbit AI"
      className={animated ? "drop-shadow-[0_0_14px_rgba(163,230,53,0.45)]" : ""}>
      {/* Back half of the ring (behind sphere) */}
      <g transform="translate(32 34) rotate(-20)">
        <path d="M -27 0 A 27 8 0 0 1 27 0" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      </g>
      {/* Solid sphere */}
      <circle cx="32" cy="30" r="12" fill="#ffffff" />
      {/* Front half of the ring */}
      <g transform="translate(32 34) rotate(-20)">
        <path d="M -27 0 A 27 8 0 0 0 27 0" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

export function OrbitLogo({ size = 30 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <OrbitMark size={size} />
      <span className="text-[15px] font-semibold tracking-tight">
        Orbit<span className="text-lime"> AI</span>
      </span>
    </div>
  );
}
