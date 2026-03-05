import React, { useState, useEffect } from "react";

const Footer = () => {
  const [todayYear, setTodayYear] = useState("2023");
  useEffect(() => {
    setTodayYear(new Date().getFullYear().toString());
  }, []);
  return (
    <div className="py-8 text-center">
      <p className="text-zinc-500 text-sm">{"© " + todayYear + ". Kim Gyu Jeong. All rights reserved."}</p>
    </div>
  );
};
export default Footer;
