import React from "react";
import Jarasoft from "./jarasoft";
import Aloys from "./aloys";
import Beyless from "./beyless";

const Career = () => {
  return (
    <div className="py-24 md:py-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">CAREER</h2>
      <div className="h-[2px] w-16 bg-white mb-12"></div>
      <div className="flex flex-col gap-8">
        <Jarasoft />
        <Aloys />
        <Beyless />
      </div>
    </div>
  );
};

export default Career;
