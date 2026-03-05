import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CheckCircle2 } from "lucide-react";
import ImageViewDialog from "../../components/ImageViewDialog";

const diaryImages = [
  "images/diary_v2-1.png"
];

const DiaryV2 = () => {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = (index: number) => {
    setDialogIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden mb-6">
      {/* 헤더 */}
      <div className="p-6 border-b border-[#222]">
        <h3 className="text-xl font-semibold text-white">다이어리 v2</h3>
        <p className="text-zinc-500 text-sm mt-1">2025.12 ~ 진행중</p>
      </div>
      {/* 본문: 좌측 이미지 슬라이더 + 우측 텍스트 */}
      <div className="flex flex-col md:flex-row">
        {/* 이미지 슬라이더 */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full"
            style={{ "--swiper-theme-color": "#ffffff" } as React.CSSProperties}
          >
            {diaryImages.map((src, i) => (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  className="w-full object-contain cursor-zoom-in"
                  alt={`diary${i + 1}`}
                  loading={i === 0 ? undefined : "lazy"}
                  onClick={() => openDialog(i)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* 텍스트 정보 */}
        <div className="w-full md:w-1/2 p-6 flex flex-col gap-3">
          {/* <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">URL</span>
              <p className="text-zinc-400 text-sm">
                <a
                  href="https://purplediary.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white hover:underline cursor-pointer"
                >
                  https://purplediary.kr
                </a>
              </p>
            </div>
          </div> */}
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">기술스택</span>
              <p className="text-zinc-400 text-sm">Vue 3.5, Quasar 2.x, TypeScript 5.x, Pinia 3.x, Vue Router 4, Vite 7.x, Tiptap 3.x, Chart.js 4.x, PixiJS 8.x, Socket.io-client 4.x, axios 1.x, VueUse, PWA(Workbox 7), Playwright</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="text-white w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <span className="text-white text-sm font-medium">주요기능</span>
              <p className="text-zinc-400 text-sm">메모장, 차계부, 가계부, 주차장, 내문서, 게시판, 휴지통, 달력, 지도, 게임, 글꼴 커스터마이징, 모바일 지원, PUSH 알림</p>
            </div>
          </div>
          <div className="border-b border-[#333] my-1"></div>
          <p className="text-zinc-400 text-sm">Vue 2 + Vuetify 기반 기존 서비스를 Vue 3 + Quasar + TypeScript로 전면 마이그레이션 (Composition API + script setup 적용)</p>
          <p className="text-zinc-400 text-sm">빌드 시스템을 webpack(Vue CLI) → Vite로 전환하여 개발 서버 구동 속도 및 빌드 성능 개선, rollup-plugin-visualizer로 번들 분석 환경 구축</p>
          <p className="text-zinc-400 text-sm">상태 관리를 Vuex → Pinia로 교체, 도메인별 스토어 분리 및 타입 안전성 확보</p>
          <p className="text-zinc-400 text-sm">텍스트 에디터를 CKEditor4 → Tiptap 3.x로 교체, 코드 블록·테이블·이미지·색상 등 커스텀 확장 기능 구성</p>
          <p className="text-zinc-400 text-sm">VueUse 컴포저블을 활용한 공통 상호작용 로직 추상화 및 코드 재사용성 향상</p>
          <p className="text-zinc-400 text-sm">Workbox 7 기반 PWA 서비스워커 전략 재설계(캐시 만료·라우팅·프리캐싱 정책 세분화)</p>
          <p className="text-zinc-400 text-sm">Playwright E2E 테스트 및 코드젠(codegen) 기반 자동화 테스트</p>
        </div>
      </div>

      <ImageViewDialog
        images={diaryImages}
        initialIndex={dialogIndex}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default DiaryV2;
