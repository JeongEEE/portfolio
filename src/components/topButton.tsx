import React, { useState, useEffect } from "react";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  if (!showButton) return null;

  return (
    <div className="fixed right-[5%] bottom-[5%] z-[100]">
      <button
        className="font-bold text-sm px-[10px] py-[15px] bg-white text-black border border-[#d2ccc1] rounded-full outline-none cursor-pointer hover:bg-[#323232] hover:border-white hover:text-white transition-colors"
        onClick={scrollToTop}
        type="button"
      >
        Top
      </button>
    </div>
  );
};

export default TopButton;