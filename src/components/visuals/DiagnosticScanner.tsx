import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const checkpoints = [
  { label: "Procesos", x: 23, y: 31 },
  { label: "Costos", x: 72, y: 28 },
  { label: "Ventas", x: 78, y: 68 },
  { label: "Datos", x: 28, y: 74 },
];

type DiagnosticScannerProps = {
  className?: string;
};

export function DiagnosticScanner({ className }: DiagnosticScannerProps) {
  return (
    <div
      className={cn(
        "relative min-h-[360px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur dark:bg-white/8",
        className,
      )}
    >
      <div className="premium-grid absolute inset-0 opacity-15" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7FF0E6]/20" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7FF0E6]/15" />
      <div className="diagnostic-radar absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="diagnostic-sweep absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="absolute left-1/2 top-1/2 z-10 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/12 bg-[#0D1B3D]/82 p-4 text-center shadow-2xl shadow-black/20">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#7FF0E6]">
          Scan 01
        </p>
        <p className="mt-3 text-lg font-semibold leading-tight text-white">
          Diagnóstico operativo
        </p>
        <p className="mt-2 text-xs leading-5 text-white/70">
          Detectar pérdidas de tiempo, dinero e información.
        </p>
      </div>

      {checkpoints.map((checkpoint, index) => (
        <div
          key={checkpoint.label}
          className="diagnostic-node absolute z-20 flex items-center gap-2 rounded-full border border-[#7FF0E6]/25 bg-white/12 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-black/10 backdrop-blur"
          style={{ left: `${checkpoint.x}%`, top: `${checkpoint.y}%`, animationDelay: `${index * 0.28}s` }}
        >
          <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[#7FF0E6]" />
          {checkpoint.label}
        </div>
      ))}

      <div className="absolute inset-x-5 bottom-5 z-10 rounded-2xl border border-[#7FF0E6]/20 bg-[#7FF0E6]/10 px-4 py-3">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#7FF0E6]">
          Resultado esperado
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          Prioridades claras antes de implementar.
        </p>
      </div>
    </div>
  );
}
