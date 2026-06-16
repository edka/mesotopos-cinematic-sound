type Props = { className?: string };

// Decorative Orion-belt inspired constellation linework
export function Orion({ className }: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      aria-hidden="true"
    >
      <g opacity="0.7">
        <line x1="60" y1="40" x2="150" y2="120" />
        <line x1="150" y1="120" x2="200" y2="150" />
        <line x1="200" y1="150" x2="250" y2="180" />
        <line x1="250" y1="180" x2="340" y2="260" />
        <line x1="150" y1="120" x2="120" y2="220" />
        <line x1="250" y1="180" x2="290" y2="80" />
      </g>
      {[
        [60, 40, 2.2],
        [150, 120, 1.6],
        [200, 150, 2.6],
        [250, 180, 1.6],
        [340, 260, 2.2],
        [120, 220, 1.8],
        [290, 80, 2],
        [90, 180, 1],
        [330, 130, 1],
        [180, 60, 0.8],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}
