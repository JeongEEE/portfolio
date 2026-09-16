import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  // SSG 가 만든 마크업에는 아직 테마 정보가 없다. index.html 초기 스크립트가
  // 넣어둔 값을 마운트 후에 읽어야 서버 마크업과 어긋나지 않는다.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* 저장만 실패한다. 이번 세션 동안은 선택이 유지되므로 그냥 넘어간다. */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="p-2 rounded-full text-ink-muted hover:text-ink hover:bg-hover transition-colors cursor-pointer"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
