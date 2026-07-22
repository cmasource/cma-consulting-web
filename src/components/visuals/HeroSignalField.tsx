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
          <linearGradient id="hero-line" x1="180" y1="720" x2="1420" y2="180">
            <stop stopColor="#5EEAD4" stopOpacity="0" />
            <stop offset="0.36" stopColor="#5EEAD4" stopOpacity="0.62" />
            <stop offset="0.72" stopColor="#22C7C7" stopOpacity="0.9" />
            <stop offset="1" stopColor="#22C7C7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-faint" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0.16" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="hero-field-grid" opacity="0.38">
          {Array.from({ length: 11 }, (_, index) => (
            <path
              key={`vertical-${index}`}
              d={`M${180 + index * 124} 90V820`}
              stroke="url(#hero-faint)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 7 }, (_, index) => (
            <path
              key={`horizontal-${index}`}
              d={`M80 ${150 + index * 104}H1520`}
              stroke="url(#hero-faint)"
              strokeWidth="1"
            />
          ))}
        </g>

        <path
          className="hero-field-trace hero-field-trace-muted"
          d="M-80 706C130 684 232 750 392 668C530 598 586 614 704 536C836 448 942 492 1052 394C1172 286 1288 326 1680 142"
          stroke="#FFFFFF"
          strokeOpacity="0.15"
          strokeWidth="1.5"
        />
        <path
          className="hero-field-trace"
          d="M-80 706C130 684 232 750 392 668C530 598 586 614 704 536C836 448 942 492 1052 394C1172 286 1288 326 1680 142"
          stroke="url(#hero-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <g className="hero-field-points">
          {[
            [392, 668],
            [704, 536],
            [1052, 394],
            [1288, 326],
          ].map(([cx, cy], index) => (
            <g key={`${cx}-${cy}`} style={{ animationDelay: `${index * 900}ms` }}>
              <circle cx={cx} cy={cy} r="13" fill="#5EEAD4" fillOpacity="0.08" />
              <circle cx={cx} cy={cy} r="4" fill="#5EEAD4" />
            </g>
          ))}
        </g>

        <path
          d="M1040 822V626H1162V822M1204 822V520H1326V822M1368 822V392H1490V822"
          stroke="#FFFFFF"
          strokeOpacity="0.09"
          strokeWidth="1"
        />
      </svg>

      <div className="hero-field-sweep absolute inset-y-0 left-0 w-[42%]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,37,0.98)_0%,rgba(7,18,37,0.84)_42%,rgba(7,18,37,0.34)_76%,rgba(7,18,37,0.74)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071225] to-transparent" />
    </div>
  );
}
