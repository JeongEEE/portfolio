import React from "react";
import { CAREER } from "/src/constants";

const Info = () => {
  return (
    // 부모 App.tsx가 이미 max-w-5xl mx-auto px-6 md:px-8 h-[600px] 컨테이너 제공
    // 내부에서 별도 컨테이너 불필요, 별도 배경색 불필요
    <div className="h-full flex flex-col justify-center py-16">
      {/* 직함 */}
      <p className="text-sm md:text-base text-zinc-400 tracking-widest uppercase mb-2">Web Frontend Developer</p>
      {/* 이름 */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">김규정 포트폴리오</h1>
      {/* 구분선 */}
      <div className="h-[2px] w-16 bg-white mb-8"></div>
      {/* 자기소개 6줄 */}
      <div className="space-y-1 text-sm md:text-base leading-7 text-zinc-400">
        <p>안녕하세요! 저는 {CAREER}년차 웹 프론트엔드 개발자로, Vue와 React를 중점적으로 다루고 있습니다.</p>
        <p>저는 프론트엔드 개발에 열정을 가지고 있으며, 새로운 기술과 트렌드를 항상 주시하고 적용하는 것에 관심이 많습니다.</p>
        <p>또한 팀 프로젝트에서 원활한 커뮤니케이션과 협업을 통해 공동 목표를 달성하는 것을 중요시합니다.</p>
        <p>문제 해결 능력과 창의성을 발휘하여 유연하고 효율적인 코드를 작성하며</p>
        <p>사용자와 개발자 모두에게 만족스러운 결과물을 제공하고자 합니다.</p>
        <p>함께 일하면서 지속적인 성장과 개발 역량을 향상시키는데 기여하고 싶습니다. 감사합니다.</p>
      </div>
    </div>
  );
};

export default Info;