import { cn } from "@/lib/utils";

export function BrowserChrome({
  address,
  accentDotClassName = "bg-[#3BAA7A]",
  compact = false,
}: {
  address: string;
  accentDotClassName?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-[#0D1B3D]/10 bg-[#F8FAFC] dark:border-white/10 dark:bg-[#0F1B36]",
        compact ? "h-10 px-3" : "h-11 px-4",
      )}
    >
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E45F5F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D8AA3B]" />
        <span className={cn("h-2.5 w-2.5 rounded-full", accentDotClassName)} />
      </div>
      <div
        className={cn(
          "min-w-0 flex-1 border border-[#0D1B3D]/8 bg-white dark:border-white/8 dark:bg-white/5",
          compact ? "px-3 py-1" : "px-3 py-1.5",
        )}
      >
        <p
          className={cn(
            "truncate font-mono font-semibold text-[#667085] dark:text-[#CBD5E1]",
            compact ? "text-[0.58rem]" : "text-[0.62rem]",
          )}
        >
          {address}
        </p>
      </div>
    </div>
  );
}
