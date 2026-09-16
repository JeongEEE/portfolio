import React, { useState, useEffect } from "react";

const Footer = () => {
  const [todayYear, setTodayYear] = useState("2023");
  useEffect(() => {
    setTodayYear(new Date().getFullYear().toString());
  }, []);
  return (
    <div className="border-t border-line py-8 text-center">
      <p className="text-ink-muted text-sm">{"© " + todayYear + ". Kim Gyu Jeong. All rights reserved."}</p>
    </div>
  );
};
export default Footer;
