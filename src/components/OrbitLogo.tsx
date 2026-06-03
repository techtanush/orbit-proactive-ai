/**
 * Orbit AI mark — a planet with a tilted ring, matching the founder's reference logo.
 * Rendered with currentColor so it can be tinted lime, white, or dark.
 */
export function OrbitMark({
  size = 32,
  animated = false,
  tone = "lime",
}: {
  size?: number;
  animated?: boolean;
  tone?: "lime" | "white" | "dark";
}) {
  const planet = tone === "dark" ? "#0a0f0a" : tone === "white" ? "#ffffff" : "#c6f24a";
  const ring = tone === "dark" ? "#0a0f0a" : tone === "white" ? "#ffffff" : "#c6f24a";
  const glow = "#c6f24a";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-label="Orbit AI"
      className={animated ? "drop-shadow-[0_0_12px_#c6f24a80]" : ""}
    >
      <defs>
        <radialGradient id="planetGrad" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor={tone === "lime" ? "#eaff8c" : planet} />
          <stop offset="55%" stopColor={planet} />
          <stop offset="100%" stopColor={tone === "lime" ? "#6fa516" : planet} />
        </radialGradient>
      </defs>

      {/* Back half of the ring (behind planet) */}
      <g transform="translate(32 34) rotate(-22)">
        <path
          d="M -26 0 A 26 7 0 0 1 26 0"
          stroke={ring}
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
          opacity={tone === "lime" ? 0.95 : 1}
          className={animated ? "animate-orbit-spin origin-center" : ""}
        />
      </g>

      {/* Planet body */}
      <circle cx="32" cy="30" r="13" fill="url(#planetGrad)" />

      {/* Front half of the ring (in front of planet) */}
      <g transform="translate(32 34) rotate(-22)">
        <path
          d="M -26 0 A 26 7 0 0 0 26 0"
          stroke={ring}
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {tone === "lime" && (
        <circle cx="32" cy="30" r="13" fill={glow} opacity="0.18" />
      )}
    </svg>
  );
}

export function OrbitLogo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <OrbitMark size={size} />
      <span className="text-[15px] font-semibold tracking-tight">
        Orbit<span className="text-lime"> AI</span>
      </span>
    </div>
  );
}
