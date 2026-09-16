import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * 화면에 들어올 때 한 번 나타난다.
 *
 * 항목마다 delay 를 주지 않아도 순차로 보인다. 각자 화면에 들어오는 시점이
 * 다르기 때문이다. 스크롤을 거슬러 올라가도 다시 숨지 않는다(triggerOnce) —
 * 읽던 내용이 사라지는 것만큼 거슬리는 게 없다.
 *
 * 숨김 상태는 CSS 의 `.js` 아래에만 걸려 있다(globals.css 참고). JS 가 없으면
 * 내용이 그냥 보인다. SSG 산출물을 읽는 크롤러도 마찬가지다.
 */
const Reveal = ({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** 자식들을 순서대로 띄운다. 히어로처럼 한 덩어리가 통째로 보이는 곳에 쓴다. */
  stagger?: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // 화면 맨 아래에 걸치자마자가 아니라, 조금 올라온 뒤에 시작한다.
    rootMargin: "0px 0px -10% 0px",
  });

  const effect = stagger ? "reveal-stagger" : "reveal";

  return (
    <div ref={ref} className={`${effect}${inView ? " is-visible" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
};

export default Reveal;
