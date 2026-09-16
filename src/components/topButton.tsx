import React from "react";
import { useScrolledPast } from "/src/hooks/useScrolledPast";

const TopButton = () => {
  const [scrolled, sentinel] = useScrolledPast(500);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {sentinel}
      {scrolled && (
        <div className="fixed bottom-[5%] right-[5%] z-[100]">
          {/* 라이트에서 검정, 다크에서 흰색. --ink 가 모드별로 뒤집히는 값이라
              두 모드를 따로 쓸 필요가 없다. 글자는 --canvas 라 항상 반대쪽이 된다. */}
          <button
            className="cursor-pointer rounded-full border border-line-strong bg-ink px-4 py-3 text-sm font-bold text-canvas transition-all hover:opacity-85 active:scale-[0.98]"
            onClick={scrollToTop}
            type="button"
          >
            Top
          </button>
        </div>
      )}
    </>
  );
};

export default TopButton;
