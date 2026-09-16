import React from "react";
import Reveal from "/src/components/reveal";

/**
 * 섹션 제목. 예전에는 파일 세 곳에 h2 + 폭 16px 짜리 굵은 막대가 복붙돼 있었다.
 * 짧은 막대는 제목에 붙은 장식일 뿐이라 "여기서 섹션이 바뀐다"는 신호가 약했다.
 * 폭 전체를 가로지르는 가는 선이 구획을 훨씬 분명하게 끊는다.
 *
 * 번호는 스크린리더에서 읽을 필요가 없어 aria-hidden 으로 뺀다.
 */
const SectionHeader = ({ index, title }: { index: string; title: string }) => (
  <Reveal className="mb-12">
    <header className="flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-sm text-ink-muted" aria-hidden="true">
        {index}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
    </header>
  </Reveal>
);

export default SectionHeader;
