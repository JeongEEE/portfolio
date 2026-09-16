import React from "react";
import WorkCard from "/src/components/workCard";
import SectionHeader from "/src/components/sectionHeader";
import Reveal from "/src/components/reveal";
import { projects } from "/src/data/projects";

/*
 * 프로젝트는 좌우 2단이다. 왼쪽에 제목·기간·링크가 sticky 로 붙고 오른쪽에
 * 본문이 흐른다. 아래 경력 섹션은 한 단짜리 목록이라, 스크롤로 내려올 때
 * 두 섹션이 서로 다른 형태로 읽힌다.
 */
const Projects = () => {
  return (
    <div className="py-24 md:py-32">
      <SectionHeader index="02" title="PROJECTS" />

      <div className="divide-y divide-line border-b border-line">
        {projects.map((project) => (
          <Reveal key={project.title} className="py-12 first:pt-0">
            <WorkCard work={project} variant="entry" />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
