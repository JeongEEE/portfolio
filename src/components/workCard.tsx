import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { WorkGallery } from "/src/components/workGallery";
import type { Work } from "/src/data/types";

/**
 * 경력·프로젝트 한 건을 그린다. 예전에는 이 마크업이 파일 8개에 복붙돼 있었다.
 *
 * 테두리 상자를 걷어낸 이유: 11건이 전부 똑같은 상자에 담겨 있으니 무엇이
 * 중요한지 구분이 안 됐다. 상자는 위계를 만들 때 쓰는 도구인데 전부에 두르면
 * 위계가 0 이 된다. 지금은 여백과 구분선이 그 일을 한다.
 *
 * variant 두 가지로 갈린다:
 *   entry  — 프로젝트. 좌측에 메타(제목·기간·링크)를 고정하고 우측에 본문.
 *   nested — 경력. 회사 밑에 딸린 항목이라 한 단 좁게, 세로 한 줄로.
 */
type Variant = "entry" | "nested";

const WorkCard = ({ work, variant = "nested" }: { work: Work; variant?: Variant }) => {
  const entry = variant === "entry";

  return (
    <article className={entry ? "md:grid md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-x-10" : ""}>
      {/*
        메타. entry 에서는 왼쪽 단에 sticky 로 붙어, 긴 본문을 읽는 동안에도
        "지금 무슨 프로젝트를 읽고 있는지"가 화면에 남는다.
      */}
      <div className={entry ? "mb-6 md:sticky md:top-24 md:mb-0 md:self-start" : "mb-5"}>
        <div className={entry ? "" : "flex flex-wrap items-baseline justify-between gap-x-4"}>
          <h3
            className={
              entry
                ? "text-xl font-semibold tracking-tight text-ink md:text-2xl"
                : "text-base font-semibold text-ink"
            }
          >
            {work.title}
          </h3>
          <p className={`font-mono text-sm text-ink-muted ${entry ? "mt-2" : ""}`}>{work.period}</p>
        </div>

        {(work.role || work.client) && (
          <p className="mt-1 text-sm text-ink-muted">
            {[work.client, work.role].filter(Boolean).join(" · ")}
          </p>
        )}

        {work.links && work.links.length > 0 && (
          <ul className={`flex flex-wrap gap-4 ${entry ? "mt-4" : "mt-2"}`}>
            {work.links.map(({ label, url }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  {label}
                  <ExternalLink size={14} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/*
        min-w-0 가 없으면 이 칸이 폭 33,554,432px(레이아웃 상한)까지 부푼다.
        grid 항목의 min-width 기본값이 auto 라 안쪽 내용보다 좁아지지 못하는데,
        Swiper 는 슬라이드 폭을 컨테이너 실측으로 정한다. 둘이 물려 돌면서
        "칸이 넓어짐 -> 슬라이드가 넓어짐 -> 칸이 더 넓어짐"이 반복된다.
        이미지가 1장인 프로젝트만 멀쩡했던 게 이 때문이다.
      */}
      <div className="flex min-w-0 flex-col gap-5">
        {/* 기술 스택. 문자열 한 덩어리가 아니라 칩으로 끊어야 눈이 훑을 수 있다. */}
        <ul className="flex flex-wrap gap-1.5">
          {work.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-ink-chip"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* 핵심 3줄. 펼친 채로 둔다. 불릿은 네이티브 마커라 따로 그릴 게 없다. */}
        <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-accent">
          {work.highlights.map((line) => (
            <li key={line} className="text-sm leading-relaxed text-ink-body">
              {line}
            </li>
          ))}
        </ul>

        {/*
          나머지는 접는다. <details> 를 쓰는 이유: 아코디언 라이브러리도 상태도
          필요 없고, 키보드 조작과 스크린리더 지원이 기본으로 따라온다.
        */}
        {work.details && work.details.length > 0 && (
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-sm text-ink-muted hover:text-ink [&::-webkit-details-marker]:hidden">
              <ChevronRight size={16} className="transition-transform group-open:rotate-90" />
              <span className="group-open:hidden">자세히 {work.details.length}건</span>
              <span className="hidden group-open:inline">접기</span>
            </summary>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-10 marker:text-ink-muted">
              {work.details.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-ink-body">
                  {line}
                </li>
              ))}
            </ul>
          </details>
        )}

        {work.features && work.features.length > 0 && (
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="text-ink-body">주요 기능 </span>
            {work.features.join(", ")}
          </p>
        )}

        <WorkGallery work={work} />
      </div>
    </article>
  );
};

export default WorkCard;
