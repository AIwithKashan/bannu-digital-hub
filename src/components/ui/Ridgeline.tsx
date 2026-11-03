/**
 * Geometric ridgeline inspired by the mountains in the Bannu Digital Hub logo.
 * Purely decorative. The stroke draws itself on scroll via data-draw.
 */
export function Ridgeline({ className = "", draw = true, stroke = "currentColor" }: { className?: string; draw?: boolean; stroke?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...(draw ? { "data-draw-scope": "" } : {})}
    >
      <path
        d="M0 190 L120 150 L170 168 L270 96 L330 130 L420 60 L470 92 L540 40 L600 88 L700 128 L760 100 L840 150 L920 84 L990 118 L1070 52 L1130 96 L1210 138 L1290 92 L1360 130 L1440 100"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        {...(draw ? { "data-draw": "" } : {})}
      />
    </svg>
  );
}
