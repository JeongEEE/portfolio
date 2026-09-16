import React, { useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"
import ThemeToggle from "/src/components/themeToggle"

const navItems = [
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "career", label: "Career" },
]

const Navigation = ({ show }: { show: boolean }) => {
  const [open, setOpen] = useState(false)

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" })
  }

  const headerBg = show ? "bg-raised" : "bg-transparent"
  const textColor = "text-ink"

  return (
    <header
      className={`fixed left-0 top-0 right-0 z-50 h-[70px] flex items-center transition-colors duration-300 ${headerBg} ${textColor}`}
    >
      {/* 컨테이너는 App.tsx 의 섹션과 같은 값이어야 한다. 다르면 로고와 본문
          왼쪽 끝이 어긋나는데, 선과 여백으로 읽히는 레이아웃에서는 바로 티가 난다. */}
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 md:px-8">
        {/* 로고 */}
        <span
          className="text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity"
          onClick={scrollToTop}
        >
          김규정 Portfolio
        </span>

        {/* 우측 그룹: 메뉴 + 테마 토글 + 모바일 hamburger */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-8 mr-4">
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

          <ThemeToggle />

          <button
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            onClick={() => setOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* 모바일 오버레이 메뉴 */}
      <div
        className={`fixed inset-0 z-50 bg-canvas flex-col items-center justify-center ${open ? "flex" : "hidden"}`}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 p-2 text-ink hover:opacity-70 transition-opacity"
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
              className="text-ink text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity"
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
