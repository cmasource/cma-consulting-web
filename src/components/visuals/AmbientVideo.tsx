"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AmbientVideoProps = {
  webmSrc?: string;
  mp4Src?: string;
  posterSrc?: string;
  className?: string;
  opacity?: number;
  disabledOnMobile?: boolean;
};

function useReducedMotionOrMobile(disabledOnMobile?: boolean) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setDisabled(reducedMotion.matches || Boolean(disabledOnMobile && mobile.matches));
    };

    update();
    reducedMotion.addEventListener("change", update);
    mobile.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      mobile.removeEventListener("change", update);
    };
  }, [disabledOnMobile]);

  return disabled;
}

export function AmbientVideo({
  webmSrc,
  mp4Src,
  posterSrc,
  className,
  opacity = 0.28,
  disabledOnMobile = false,
}: AmbientVideoProps) {
  const disabled = useReducedMotionOrMobile(disabledOnMobile);
  const hasVideo = Boolean(webmSrc || mp4Src);

  if (disabled || !hasVideo) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(0,154,154,0.18),transparent_32rem)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(34,199,199,0.18),transparent_32rem)]",
          className,
        )}
        style={posterSrc ? { backgroundImage: `url(${posterSrc})`, opacity } : { opacity }}
      />
    );
  }

  return (
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={posterSrc}
      className={cn("pointer-events-none absolute inset-0 h-full w-full object-cover", className)}
      style={{ opacity }}
    >
      {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
      {mp4Src ? <source src={mp4Src} type="video/mp4" /> : null}
    </video>
  );
}
