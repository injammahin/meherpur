"use client";

import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { fallbackImage } from "@/lib/places";

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export function SafeImage({ fallback = fallbackImage, onError, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      {...props}
      src={failed ? fallback : props.src}
      onError={(event) => {
        if (!failed) setFailed(true);
        onError?.(event);
      }}
    />
  );
}
