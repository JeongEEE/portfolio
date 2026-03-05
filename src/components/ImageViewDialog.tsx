import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

const ImageViewDialog = ({ images, initialIndex = 0, open, onClose }: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, handlePrev, handleNext]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* 닫기 버튼 */}
      <button
        className="fixed top-4 right-4 z-[201] flex items-center justify-center w-14 h-14 rounded-full bg-black/70 text-white hover:bg-black/95 transition-colors shadow-lg"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="닫기"
      >
        <X size={28} strokeWidth={3} />
      </button>

      {/* 이미지 카운터 */}
      {images.length > 1 && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[201] text-white text-base font-bold select-none bg-black/60 px-5 py-2 rounded-full shadow-lg tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* 이전 버튼 */}
      {images.length > 1 && (
        <button
          className="fixed left-3 md:left-6 z-[201] flex items-center justify-center w-14 h-14 rounded-full bg-black/70 text-white hover:bg-black/95 transition-colors shadow-lg"
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          aria-label="이전 이미지"
        >
          <ChevronLeft size={32} strokeWidth={3} />
        </button>
      )}

      {/* 이미지 */}
      <div
        className="flex items-center justify-center"
        style={{ maxWidth: "90dvw", maxHeight: "90dvh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`이미지 ${currentIndex + 1}`}
          style={{ maxWidth: "90dvw", maxHeight: "90dvh", minWidth: "min(60dvw, 60dvh)", minHeight: "min(40dvw, 40dvh)" }}
          className="object-contain rounded-lg shadow-2xl"
          draggable={false}
        />
      </div>

      {/* 다음 버튼 */}
      {images.length > 1 && (
        <button
          className="fixed right-3 md:right-6 z-[201] flex items-center justify-center w-14 h-14 rounded-full bg-black/70 text-white hover:bg-black/95 transition-colors shadow-lg"
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          aria-label="다음 이미지"
        >
          <ChevronRight size={32} strokeWidth={3} />
        </button>
      )}
    </div>,
    document.body
  );
};

export default ImageViewDialog;
