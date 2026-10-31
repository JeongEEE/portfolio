import React from "react";
import { ArrowRight, Github } from "lucide-react";

/*
 * 예전 히어로는 자기소개 여섯 줄이었는데, "열정", "커뮤니케이션", "지속적 성장"처럼
 * 어느 이력서에나 있는 말이라 읽는 사람 머리에 남는 게 없었다. 정작 강한 내용은
 * 아래 경력 섹션에 묻혀 있었다. 무엇을 만드는 사람인지 먼저 말한다.
 *
 * eyebrow 에 라이브러리 이름을 나열하지 않는다. 큰 글씨 옆 태그는 전부 "내가 만든 것"
 * 으로 읽히기 때문이다. 예를 들어 Blur.me 의 WebAssembly 블러 모듈은 연동했을 뿐
 * 직접 만들지 않았다. 다만 그 모듈로 동작하는 편집기 화면은 직접 만든 것이므로
 * "영상 비식별화 편집기"라고는 쓴다. 엔진과 화면을 구분해서 적으면 과장이 아니다.
 * 구체적인 라이브러리는 각 카드의 스택 칩에 맡긴다. 거기는 "이 프로젝트에서 쓰인 것"
 * 이라는 맥락이 분명해서 같은 오해가 안 생긴다.
 */
const Info = () => {
  return (
    <div className="hero-enter py-16">
      <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-ink-muted mb-6">
        Realtime · Canvas · Maps
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.2] mb-6">
        실시간으로 움직이는
        <br />
        화면을 만듭니다
      </h1>

      <p className="text-base md:text-lg text-ink-body leading-relaxed max-w-[52ch] mb-10">
        영상 비식별화 편집기, CCTV 스트리밍, 드론 관제. 8년 동안 Canvas 와 소켓 위에서
        도는 화면을 주로 만들었습니다.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#career"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-ink font-semibold cursor-pointer hover:opacity-85 active:scale-[0.98] transition-[color,background-color,opacity,transform]"
        >
          경력사항
          <ArrowRight size={18} />
        </a>

        <a
          href="https://github.com/JeongEEE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line-strong text-ink font-semibold hover:bg-hover active:scale-[0.98] transition-[color,background-color,opacity,transform]"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Info;
