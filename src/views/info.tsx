import React from "react";
import { Link } from "react-scroll";
import { ArrowRight, Github } from "lucide-react";
import Reveal from "/src/components/reveal";
import { CAREER } from "/src/constants";

/*
 * 예전 히어로는 자기소개 여섯 줄이었는데, "열정", "커뮤니케이션", "지속적 성장"처럼
 * 어느 이력서에나 있는 말이라 읽는 사람 머리에 남는 게 없었다. 정작 강한 내용은
 * 아래 경력 섹션에 묻혀 있었다. 무엇을 만드는 사람인지 먼저 말한다.
 */
const Info = () => {
  return (
    <Reveal stagger className="py-16">
      <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-ink-muted mb-6">
        Web Frontend Developer
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.2] mb-6">
        비식별화 SaaS를
        <br />
        글로벌 서비스로 만듭니다
      </h1>

      <p className="text-base md:text-lg text-ink-body leading-relaxed max-w-[52ch] mb-10">
        {CAREER}년차 프론트엔드 개발자 김규정입니다. Vue와 React를 주로 쓰고,
        필요하면 서버와 배포까지 맡습니다.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          to="projects"
          smooth={true}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-ink font-semibold cursor-pointer hover:opacity-85 active:scale-[0.98] transition-all"
        >
          프로젝트 보기
          <ArrowRight size={18} />
        </Link>

        <a
          href="https://github.com/JeongEEE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line-strong text-ink font-semibold hover:bg-hover active:scale-[0.98] transition-all"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </Reveal>
  );
};

export default Info;
