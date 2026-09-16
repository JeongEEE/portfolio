import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * "문서 맨 위에서 px 만큼 내려왔는가"를 scroll 이벤트 없이 판정한다.
 *
 * 높이가 px 인 보이지 않는 표식을 문서 맨 위에 깔고, 그게 화면 밖으로
 * 밀려나는 순간을 IntersectionObserver 가 잡는다. scroll 이벤트는 손가락을
 * 움직이는 내내 초당 수십 번 깨어나 그때마다 setState 로 리액트 트리를 다시
 * 그리지만, 이쪽은 경계를 넘는 그 한 번만 부른다.
 *
 * 반환하는 sentinel 은 position:absolute 라 부모에 relative 가 필요하다.
 * SSG 로 만들어지는 첫 마크업에서는 initialInView 때문에 항상 false 가 되는데,
 * 페이지 최상단에서 시작하는 게 맞으므로 의도된 값이다.
 */
export function useScrolledPast(px: number) {
  const { ref, inView } = useInView({ initialInView: true });

  const sentinel = (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 w-px"
      style={{ height: px }}
    />
  );

  return [!inView, sentinel] as const;
}
