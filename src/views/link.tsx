import React from "react";
import { Github } from "lucide-react";

const LinkPage = () => {
  return (
    <div className="py-24 md:py-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">LINK</h2>
      <div className="h-0.5 w-16 bg-white mb-12"></div>
      <div
        className="flex items-center gap-4 bg-[#111] border border-[#222] rounded-xl p-6 cursor-pointer hover:border-[#444] hover:bg-[#1a1a1a] transition-all duration-200 max-w-md"
        onClick={() => window.open("https://github.com/JeongEEE", "_blank")}
      >
        <Github className="text-white w-10 h-10 flex-shrink-0" />
        <div>
          <p className="text-white font-medium">GitHub</p>
          <p className="text-zinc-400 text-sm hover:underline">https://github.com/JeongEEE</p>
        </div>
      </div>
    </div>
  );
};
export default LinkPage;
