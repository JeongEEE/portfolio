import React from "react";
import Navigation from "./navigation";
import { useScrolledPast } from "/src/hooks/useScrolledPast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, sentinel] = useScrolledPast(70);

  return (
    <div className="relative">
      {sentinel}
      <Navigation show={scrolled} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
