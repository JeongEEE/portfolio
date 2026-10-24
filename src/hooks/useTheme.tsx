import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

/**
 * 지금 테마. index.html 초기 스크립트와 ThemeToggle 이 <html data-theme> 에 쓰는 값을 따라간다.
 *
 * SSG 마크업은 늘 light 로 그려진다(getServerSnapshot). hydration 이 끝난 뒤
 * 실제 값으로 다시 그리므로 서버 마크업과 어긋났다는 경고가 나지 않는다.
 */
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function useTheme() {
  return useSyncExternalStore(subscribe, getSnapshot, () => "light" as Theme);
}
