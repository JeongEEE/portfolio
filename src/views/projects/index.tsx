import React from "react";
import Diary from "./diary";
import DiaryBackend from "./diaryBackend";
import Portfolio from "./portfolio";
import Shopping from "./shopping";

const Projects = () => {
  return (
    <div className="py-24 md:py-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">PROJECTS</h2>
      <div className="h-[2px] w-16 bg-white mb-12"></div>
      <div className="flex flex-col gap-6">
        <Diary />
        <DiaryBackend />
        <Portfolio />
        <Shopping />
      </div>
    </div>
  );
};

export default Projects;
