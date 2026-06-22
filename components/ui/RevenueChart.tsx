// Presentational SVG area chart for case studies. No client JS required.

type Point = { month: string; value: number };

export function RevenueChart({
  data,
  className = "",
}: {
  data: Point[];
  className?: string;
}) {
  const W = 640;
  const H = 260;
  const padX = 8;
  const padTop = 24;
  const padBottom = 28;
  const max = Math.max(...data.map((d) => d.value), 1);

  const coords = data.map((d, i) => {
    const x = padX + (i / (data.length - 1)) * (W - padX * 2);
    const y =
      padTop + (1 - d.value / max) * (H - padTop - padBottom);
    return [x, y] as const;
  });

  const line = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${coords[coords.length - 1][0].toFixed(1)},${H - padBottom} L${coords[0][0].toFixed(1)},${H - padBottom} Z`;

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Umsatzentwicklung über die Zusammenarbeit"
      >
        <defs>
          <linearGradient id="cs-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef0b50" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ef0b50" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* gridlines */}
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1={padX}
            x2={W - padX}
            y1={padTop + g * (H - padTop - padBottom)}
            y2={padTop + g * (H - padTop - padBottom)}
            stroke="#ffffff"
            strokeOpacity="0.12"
            strokeDasharray="4 6"
          />
        ))}

        <path d={area} fill="url(#cs-area)" />
        <path
          d={line}
          fill="none"
          stroke="#ef0b50"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {coords.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="4" fill="#fff" stroke="#ef0b50" strokeWidth="2.5" />
            <text
              x={x}
              y={H - 8}
              textAnchor="middle"
              fontSize="13"
              fill="#ffffff"
              fillOpacity="0.45"
            >
              {data[i].month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
