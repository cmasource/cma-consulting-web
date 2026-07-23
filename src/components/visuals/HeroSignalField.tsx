const metrics = [
  { label: "Caja", value: "30 dias", x: 1030, y: 182, tone: "#5EEAD4" },
  { label: "Margen", value: "18.4%", x: 1236, y: 314, tone: "#8BC7FF" },
  { label: "Costos", value: "-7%", x: 1104, y: 518, tone: "#F2C45F" },
  { label: "Decision", value: "KPI", x: 1218, y: 604, tone: "#5EEAD4" },
];

export function HeroSignalField() {
  return (
    <div aria-hidden="true" className="hero-signal-field absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-grid" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0.11" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-system-line" x1="900" y1="660" x2="1510" y2="170">
            <stop stopColor="#5EEAD4" stopOpacity="0" />
            <stop offset="0.3" stopColor="#5EEAD4" stopOpacity="0.58" />
            <stop offset="0.72" stopColor="#8BC7FF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#5EEAD4" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.35">
          {Array.from({ length: 8 }, (_, index) => (
            <path key={`h-${index}`} d={`M760 ${154 + index * 84}H1550`} stroke="url(#hero-grid)" />
          ))}
          {Array.from({ length: 8 }, (_, index) => (
            <path key={`v-${index}`} d={`M${820 + index * 104} 90V820`} stroke="url(#hero-grid)" />
          ))}
        </g>

        <path
          className="hero-system-flow"
          d="M850 682C950 594 1014 622 1094 512C1164 416 1250 448 1318 344C1378 252 1450 254 1525 184"
          stroke="url(#hero-system-line)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M902 690C1006 624 1054 650 1134 568C1204 496 1256 510 1326 430C1386 362 1450 354 1530 304"
          stroke="#FFFFFF"
          strokeOpacity="0.13"
        />

        <g className="hero-system-core" filter="url(#hero-soft-glow)">
          <circle cx="1188" cy="426" r="96" fill="#071225" fillOpacity="0.72" />
          <circle cx="1188" cy="426" r="96" stroke="#5EEAD4" strokeOpacity="0.36" />
          <circle cx="1188" cy="426" r="58" stroke="#8BC7FF" strokeOpacity="0.22" />
          <path d="M1152 425H1224M1188 389V461" stroke="#5EEAD4" strokeOpacity="0.55" />
          <text x="1188" y="417" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="700">
            CMA
          </text>
          <text x="1188" y="444" textAnchor="middle" fill="#7FF0E6" fontSize="11" fontWeight="700">
            lectura operativa
          </text>
        </g>

        {metrics.map((metric, index) => (
          <g
            key={metric.label}
            className="hero-metric-card"
            style={{ animationDelay: `${index * 620}ms` }}
          >
            <rect
              x={metric.x}
              y={metric.y}
              width="172"
              height="86"
              rx="4"
              fill="#071225"
              fillOpacity="0.72"
              stroke={metric.tone}
              strokeOpacity="0.23"
            />
            <text
              x={metric.x + 18}
              y={metric.y + 31}
              fill={metric.tone}
              fontSize="11"
              fontWeight="700"
              letterSpacing="2"
            >
              {metric.label.toUpperCase()}
            </text>
            <text x={metric.x + 18} y={metric.y + 62} fill="#FFFFFF" fontSize="24" fontWeight="700">
              {metric.value}
            </text>
            <circle cx={metric.x + 146} cy={metric.y + 28} r="5" fill={metric.tone} fillOpacity="0.82" />
          </g>
        ))}

        <g opacity="0.34">
          <path d="M942 764V670H1000V764M1028 764V614H1086V764M1114 764V552H1172V764" stroke="#FFFFFF" />
          <path d="M942 722C986 704 1018 724 1054 674C1086 630 1122 642 1172 588" stroke="#5EEAD4" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,37,0.98)_0%,rgba(7,18,37,0.9)_38%,rgba(7,18,37,0.42)_74%,rgba(7,18,37,0.72)_100%)]" />
      <div className="hero-field-sweep absolute inset-y-0 right-0 w-[38%]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071225] to-transparent" />
    </div>
  );
}
