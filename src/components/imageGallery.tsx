import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageViewDialog from "/src/components/ImageViewDialog";
import { imageSizes } from "/src/data/imageSizes";
import { imageVariants } from "/src/data/imageVariants";

export function ImageGallery({ images, title, sizes }: { readonly images: string[]; readonly title: string; readonly sizes: string }) {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="h-full w-full">
        {images.map((src, index) => {
          const [width, height] = imageSizes[src] ?? [];
          return (
            <SwiperSlide key={src}>
              <button type="button" className="flex h-full w-full cursor-zoom-in items-center justify-center px-3 pt-3 pb-9"
                aria-label={`${title} 화면 ${index + 1} 확대`}
                onClick={() => { setDialogIndex(index); setDialogOpen(true); }}>
                <img src={src} srcSet={imageVariants[src]}
                  sizes={sizes}
                  width={width} height={height} className="max-h-full max-w-full object-contain"
                  alt={`${title} 화면 ${index + 1}`} loading="lazy" decoding="async" />
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ImageViewDialog images={images} initialIndex={dialogIndex} open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
