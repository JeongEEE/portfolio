import React from "react";
import WorkCard from "/src/components/workCard";
import SectionHeader from "/src/components/sectionHeader";
import Reveal from "/src/components/reveal";
import { companies } from "/src/data/career";
import { imageSizes } from "/src/data/imageSizes";

/*
 * 경력은 회사가 단위다. 회사 헤더 아래로 업무들을 세로선에 매달아, 어느
 * 업무가 어느 회사 소속인지 선 하나로 드러낸다. 타임라인 라이브러리를 쓰면
 * 점·선·날짜 컴포넌트가 딸려오는데 여기서 필요한 건 border-left 한 줄뿐이다.
 */
const Career = () => {
  return (
    <div className="py-24 md:py-32">
      <SectionHeader index="02" title="CAREER" />

      <div className="flex flex-col gap-20">
        {companies.map((company) => (
          <section key={company.name}>
            <Reveal className="mb-8">
              <header className="flex items-center gap-4">
                {/* 로고 원본이 검은색이라 흰 바탕이 필요하다. 토큰으로 바꾸면 다크에서 로고가 사라진다. */}
                <div className="shrink-0 rounded-lg border border-line-strong bg-white p-2.5">
                  <img
                    src={company.logo}
                    width={imageSizes[company.logo]?.[0]}
                    height={imageSizes[company.logo]?.[1]}
                    className="h-auto w-20 object-contain"
                    alt={`${company.name} 로고`}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">
                    {company.name}
                    {company.renamedTo && (
                      <span className="ml-2 text-sm font-normal text-ink-muted">(현 {company.renamedTo})</span>
                    )}
                  </h3>
                  <p className="font-mono text-sm text-ink-muted">{company.period}</p>
                  <p className="text-sm text-ink-muted">{company.team}</p>
                </div>
              </header>
              <ul className="mt-5 max-w-3xl list-disc space-y-1.5 pl-5 text-sm text-ink marker:text-ink-muted">
                {company.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Reveal>

            <div className="ml-4 divide-y divide-line border-l border-line pl-6 md:ml-8 md:pl-10">
              {company.works.map((work) => (
                <Reveal key={work.title} className="py-8 first:pt-0">
                  <WorkCard work={work} variant="nested" />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Career;
