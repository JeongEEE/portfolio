import React from "react";
import Frontend from "/src/views/skill/frontend";
import Backend from "/src/views/skill/backend";
import Etc from "/src/views/skill/etc";

const Skills = () => {
  return (
    <div className="py-24 md:py-32">
      <h2 className="not-only:text-2xl md:text-3xl font-semibold text-white mb-4">SKILLS</h2>
      <div className="h-0.5 w-16 bg-white mb-12"></div>
      <div className="flex flex-col gap-8">
        <Frontend />
        <Backend />
        <Etc />
      </div>
    </div>
  );
};
export default Skills;