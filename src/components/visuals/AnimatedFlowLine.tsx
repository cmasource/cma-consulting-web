type AnimatedFlowLineProps = {
  className?: string;
};

export function AnimatedFlowLine({ className }: AnimatedFlowLineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 760 260"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M40 130 C150 30 230 30 340 130 S540 230 720 82"
        stroke="url(#flow-gradient)"
        strokeWidth="1.5"
        className="flow-dash"
      />
      <path
        d="M64 200 C176 166 226 196 318 128 C426 48 520 64 690 180"
        stroke="url(#flow-gradient-muted)"
        strokeWidth="1"
        className="flow-dash"
      />
      <defs>
        <linearGradient id="flow-gradient" x1="40" x2="720" y1="130" y2="130">
          <stop stopColor="#0D1B3D" stopOpacity="0" />
          <stop offset="0.5" stopColor="#009A9A" stopOpacity="0.75" />
          <stop offset="1" stopColor="#0D1B3D" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flow-gradient-muted" x1="64" x2="690" y1="160" y2="160">
          <stop stopColor="#009A9A" stopOpacity="0" />
          <stop offset="0.5" stopColor="#0D1B3D" stopOpacity="0.28" />
          <stop offset="1" stopColor="#009A9A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
