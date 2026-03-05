import React, { useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"

const navItems = [
  { to: "about", label: "About Me" },
  { to: "skills", label: "Skills" },
  { to: "link", label: "Link" },
  { to: "projects", label: "Projects" },
  { to: "career", label: "Career" },
]

const Navigation = ({ show }: { show: boolean }) => {
  const [open, setOpen] = useState(false)

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" })
  }

  const headerBg = show ? "bg-[#111]" : "bg-transparent"
  const textColor = "text-white"

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-50 h-[70px] flex items-center transition-colors duration-300 ${headerBg} ${textColor}`}
    >
      <div className="w-full max-w-[1100px] mx-auto px-4 flex items-center justify-between">
        {/* 로고 */}
        <span
          className="text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity"
          onClick={scrollToTop}
        >
          김규정 Portfolio
        </span>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              className="cursor-pointer hover:opacity-70 transition-opacity font-bold"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 모바일 hamburger 버튼 */}
        <button
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* 모바일 오버레이 메뉴 */}
      <div
        className={`fixed inset-0 z-50 bg-black flex-col items-center justify-center ${open ? "flex" : "hidden"}`}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 p-2 text-white hover:opacity-70 transition-opacity"
          onClick={() => setOpen(false)}
          aria-label="메뉴 닫기"
        >
          <X size={32} />
        </button>

        {/* 메뉴 항목 */}
        <nav className="flex flex-col items-center gap-8">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              className="text-white text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navigation
