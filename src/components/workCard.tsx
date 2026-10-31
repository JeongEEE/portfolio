import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRight, ExternalLink } from "lucide-react";
import ImageViewDialog from "/src/components/ImageViewDialog";
import { imageSizes } from "/src/data/imageSizes";
import { useTheme } from "/src/hooks/useTheme";
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
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const entry = variant === "entry";
  const theme = useTheme();
  const images = theme === "dark" && work.darkImages ? work.darkImages : work.images;

  const openDialog = (index: number) => {
    setDialogIndex(index);
    setDialogOpen(true);
  };

  /*
    캐러셀 크기. 높이를 픽셀로 못 박으면 폭이 좁아질 때(모바일) 이미지는
    폭에 맞춰 작아지는데 상자만 그대로라 아래위가 텅 빈다. 그래서 높이 대신
    '비율'을 주고 상한만 픽셀로 건다.

      aspect-ratio  이 작업에서 가장 세로로 긴 이미지의 비율.
                    폭이 줄면 상자도 같이 줄어든다.
      max-height    세 가지 중 가장 작은 값.
                    tallest  원본보다 큰 상자는 빈 공간만 남기므로 (FACE BOX 는 469px)
                    560px    세로 스크린샷(1242x2208)이 화면을 독차지하지 않게
                    65vh     화면이 낮을 때 캐러셀 하나가 시야를 다 먹지 않게

    한 작업 안에서는 크기가 고정되므로 슬라이드를 넘겨도 들썩이지 않는다.
  */
  const dims = images.map((src) => imageSizes[src]).filter(Boolean);
  const ratio = dims.length ? Math.min(...dims.map(([w, h]) => w / h)) : 16 / 9;
  const tallest = dims.length ? Math.max(...dims.map(([, h]) => h)) : 560;

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

        {/*
          상자를 없앤 대신 스크린샷에는 테두리를 남긴다. 이미지 가장자리가
          배경과 같은 밝기면 어디까지가 화면인지 경계가 사라지기 때문.

          높이를 고정하고 그 안에서 이미지를 가운데 맞춘다. 예전에는 슬라이드마다
          w-full 로 늘려서 두 가지가 동시에 망가졌다.
          - 세로 스크린샷(1242x2208)이 폭에 맞춰 늘어나 높이 1573px 를 차지했다.
            화면 한 장 보는 데 스크롤이 두 번 필요했다.
          - 작은 캡처(365x386)가 2.42배로 늘어나 글자가 뭉갰다.
          max-w/max-h 만 걸면 원본보다 커지지 않으므로 둘 다 사라진다. 방향을
          따로 판별할 필요도 없다 — 가로든 세로든 상자 안에 들어가기만 하면 된다.
        */}
        {images.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full overflow-hidden rounded-lg border border-line"
            style={{ aspectRatio: ratio, maxHeight: `min(${tallest}px, 560px, 65vh)` }}
          >
            {images.map((src, i) => {
              const [w, h] = imageSizes[src] ?? [];
              return (
                <SwiperSlide key={src}>
                  {/* pb 는 페이지네이션 점이 이미지를 밟지 않게 비워두는 자리 */}
                  <div className="flex h-full items-center justify-center px-3 pt-3 pb-9">
                    <img
                      src={src}
                      width={w}
                      height={h}
                      className="max-h-full max-w-full cursor-zoom-in object-contain"
                      alt={`${work.title} 화면 ${i + 1}`}
                      loading={i === 0 ? undefined : "lazy"}
                      onClick={() => openDialog(i)}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <ImageViewDialog
          images={images}
          initialIndex={dialogIndex}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      </div>
    </article>
  );
};

export default WorkCard;
