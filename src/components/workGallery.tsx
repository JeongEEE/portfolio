import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { imageSizes } from "/src/data/imageSizes";
import { imageVariants } from "/src/data/imageVariants";
import { useTheme } from "/src/hooks/useTheme";
import type { Work } from "/src/data/types";

const ImageGallery = lazy(() => import("./imageGallery").then(module => ({ default: module.ImageGallery })));
const previewSizes = "(min-width: 1024px) 820px, (min-width: 768px) calc(100vw - 180px), calc(100vw - 112px)";

export function WorkGallery({ work }: { readonly work: Work }) {
  const theme = useTheme();
  const images = theme === "dark" && work.darkImages ? work.darkImages : work.images;
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "800px 0px" });
  const dimensions = images.map(src => imageSizes[src]).filter(Boolean);
  const ratio = dimensions.length ? Math.min(...dimensions.map(([width, height]) => width / height)) : 16 / 9;
  const tallest = dimensions.length ? Math.max(...dimensions.map(([, height]) => height)) : 560;
  const first = images[0];
  if (!first) return null;
  const [width, height] = imageSizes[first] ?? [];
  const preview = (
    <a href={first} className="flex h-full items-center justify-center px-3 pt-3 pb-9" aria-label={`${work.title} 화면 1 확대`}>
      <img src={first} srcSet={imageVariants[first]} sizes={previewSizes} width={width} height={height}
        className="max-h-full max-w-full object-contain" alt={`${work.title} 화면 1`} loading="lazy" decoding="async" />
    </a>
  );

  return (
    <div ref={ref} className="w-full overflow-hidden rounded-lg border border-line"
      style={{ aspectRatio: ratio, maxHeight: `min(${tallest}px, 560px, 65vh)` }}>
      {inView ? <Suspense fallback={preview}><ImageGallery images={images} title={work.title} sizes={previewSizes} /></Suspense> : preview}
    </div>
  );
}
